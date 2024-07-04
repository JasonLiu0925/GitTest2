/*---------------------公用變數 Start--------------*/
var apiurl = getUrlVars()['type'];
var tabbtn = null;
var lineData = new Array();
var gridRows = new Array();
var header;
var startseq;
var type;
var sn_num;//序號數量
var TH001;
var TH001_DEL;
var sn="";
var date = new Date();
var seperator1 = "-";
var seperator2 = ":";
var year = date.getFullYear();
var month = date.getMonth() + 1;
var strDate = date.getDate();
var currentDate;

var loginuser = getcooky("loginuser");

var gridList = [{ //grid初始化參數  0
    caption: '',
    gid: 'jqGrid1',
    pager: '#jqGrid1Pager',
    shrinkToFit: true,
    gridDefinitionUrl: invokeURL + 'solder_paste_create',//apiurl P
    colAPI: 'solder_paste_query', //set colModel index
    fixedColFDb: true, //set db
    gridDefPostData: {

        
    },
    search: true,
    refresh: true,
    xls: true,
    edit:true,
    del:true,
    delOption: {
        //delurl: invokeURL + "RMA_FROM_DELETE",
        delurl: invokeURL + "solder_paste_delete",
    
         afterSubmit: function (response, postdata) {
                console.log("afterSubmit");
                // var res = $.parseJSON(response.responseText);
                // if (res && res.insertStatus) {
                //     alert(res.insertStatus);
                // }
    
                let msg = [];
                let url = $(this).getGridParam('delOption').delurl;
                let ids = $(this).getGridParam("selrow");
                let row = $(this).jqGrid('getRowData', ids[0]);
    
    
                return delSolderPaste(msg,url,ids,row);

            }
        }

},{ //grid初始化參數 1
    caption: "錫膏查詢頁面 &nbsp;&nbsp; "+
    "<INPUT TYPE='button' NAME='chkform' id='chkform' VALUE='單據確認' style='color:black;font-size:12px'> &nbsp;&nbsp; " +
    "<INPUT TYPE='button' NAME='cancelform' id='cancelform' VALUE='單據取確' style='color:black;font-size:12px'>", 
    gid: 'jqGrid1',
    pager: '#jqGrid1Pager',
    // rowNum: 20,
    viewrecords: true, 
    shrinkToFit: true,
    gridDefinitionUrl: invokeURL + 'solder_paste_query',//apiurl P
    colAPI: 'solder_paste_query', //set colModel index
    fixedColFDb: true, //set db
    gridDefPostData: {
        "solderPaste":""
    },
    search: true,
    refresh: true,
    xls: true, 
    del:true,
    delOption: {
        //delurl: invokeURL + "RMA_FROM_DELETE",
        delurl: invokeURL + "solder_paste_delete",
    
         afterSubmit: function (response, postdata) {
                console.log("afterSubmit");
                // var res = $.parseJSON(response.responseText);
                // if (res && res.insertStatus) {
                //     alert(res.insertStatus);
                // }
    
                let msg = [];
                let url = $(this).getGridParam('delOption').delurl;
                let ids = $(this).getGridParam("selrow");
                let row = $(this).jqGrid('getRowData', ids[0]);
    
    
                return delSolderPaste(msg,url,ids,row);

            }
        },    
    edit: true,
        editOption: {
            editurl: invokeURL + "solder_paste_update",
            serializeEditData: function (postData) {
                console.log("editOption"+postData);

                let ids = $(this).getGridParam("selrow");
                console.log("serializeEditData ids="+ids);
                let row = $(this).jqGrid('getRowData', ids[0]);
                console.log("ordernumber = "+row.TH001); 
                console.log("note = "+postData.TH010); 


                let pa=JSON.stringify({
                    "ordernumber": row.TH001, 
                    "note": postData.TH010
                });
              
              console.log(pa);
              return pa;
            }
        },
        ondblClickRow:function(rowid,iRow,iCol,e){
            var curPage = $("#jqGrid1").getGridParam("page");//当前页码
            var pageSize = $("#jqGrid1").getGridParam("rowNum");//每页显示的记录条数
            var curRowNum = parseInt((curPage-1)*pageSize) + parseInt(rowid); //当前双击的行的行号

            console.log('curPage',curPage);
            console.log('pageSize',pageSize);
            console.log('curRowNum',curRowNum);
    
            let grid = $("#" + gridList[1].gid);
            let data = $.trim(grid.getRowData()[curRowNum-1]["TH001"]);
    
            let postData = { 
                "TI001": data
            };
            TH001 = data;
            type = $.trim(grid.getRowData()[curRowNum-1]["TH004"]);

            if(type == "無鉛錫膏"){
                type="2"
            }else if (type == "紅膠"){
                type="3"
            }else if (type == "有鉛錫膏"){
                type="1"
            }


            let result = ajaxGetData(invokeURL + "solder_paste_sn_query",postData);

            console.log('grid',grid);//jqGrid2
            console.log('TH001',data); //取得加工順序

            console.log('result',result);  
            console.log('result',result[0].TI001);
            

            
            if(result[0].TI001 == undefined){

                sn_num = $.trim(grid.getRowData()[curRowNum-1]["TH009"]);
                console.log('sn_num',sn_num);  
                //沒值就創建
                $('#myModal1').modal('show');
                

            }else{
                //如果有值就查
                gridList[6].gridDefPostData['TI001'] = data; 
                createGrid(6);
            }



           
    
        }

},{ //grid初始化參數 2
    caption: '',
    gid: 'jqGridList',
    pager: '#jqGridListPager',
    shrinkToFit: true,
    //colAPI: 'RMA_HomeCSMNameList', //set colModel index
    // fixedColFDb: true, //set db
    gridDefinitionUrl: invokeURL + 'workorder',
    //gridDefColionUrl: 'json/unSchedule.json',
    gridDefPostData: {

    },
    beforeProcessing: function (data) {
        $(this).jqGrid('destroyFilterToolbar')
            .jqGrid('filterToolbar', {
                stringResult: true,
                searchOnEnter: true,
                defaultSearch: "cn"
            });
    },
    onSelectRow: function (ids) { //單擊選擇行
        let data = $(this).jqGrid('getRowData', ids);
        // console.log("data.VALUE = "+data.id);
        $('#WO').val(data.製令單號);
        //$('#deptInput').trigger("change");
        $('#listModal').modal('hide');

    },
    search: true,
    refresh: true,
    xls: false


},{ //grid初始化參數3
    caption: '',
    gid: 'jqGridList',
    pager: '#jqGridListPager',
    shrinkToFit: true,
    //colAPI: 'RMA_HomeCSMNameList', //set colModel index
    // fixedColFDb: true, //set db
    gridDefinitionUrl: invokeURL + 'sku',
    //gridDefColionUrl: 'json/unSchedule.json',
    gridDefPostData: {

    },
    beforeProcessing: function (data) {
        $(this).jqGrid('destroyFilterToolbar')
            .jqGrid('filterToolbar', {
                stringResult: true,
                searchOnEnter: true,
                defaultSearch: "cn"
            });
    },
    onSelectRow: function (ids) { //單擊選擇行
        let data = $(this).jqGrid('getRowData', ids);
        // console.log("data.VALUE = "+data.id);
        $('#SKU').val(data.料號);
        //$('#deptInput').trigger("change");
        $('#listModal').modal('hide');

    },
    search: true,
    refresh: true,
    xls: false


},{ //grid初始化參數4
    caption: '',
    gid: 'jqGridList',
    pager: '#jqGridListPager',
    shrinkToFit: true,
    //colAPI: 'RMA_HomeCSMNameList', //set colModel index
    // fixedColFDb: true, //set db
    gridDefinitionUrl: invokeURL + 'line',
    //gridDefColionUrl: 'json/unSchedule.json',
    gridDefPostData: {

    },
    beforeProcessing: function (data) {
        $(this).jqGrid('destroyFilterToolbar')
            .jqGrid('filterToolbar', {
                stringResult: true,
                searchOnEnter: true,
                defaultSearch: "cn"
            });
    },
    onSelectRow: function (ids) { //單擊選擇行
        let data = $(this).jqGrid('getRowData', ids);
        // console.log("data.VALUE = "+data.id);
        $('#LINE3').val(data.生產線代號);
        //$('#deptInput').trigger("change");
        $('#listModal').modal('hide');

    },
    search: true,
    refresh: true,
    xls: false


},{ //grid初始化參數5
    caption: '',
    gid: 'jqGridList',
    pager: '#jqGridListPager',
    shrinkToFit: true,
    //colAPI: 'RMA_HomeCSMNameList', //set colModel index
    // fixedColFDb: true, //set db
    gridDefinitionUrl: invokeURL + 'process',
    //gridDefColionUrl: 'json/unSchedule.json',
    gridDefPostData: {

    },
    beforeProcessing: function (data) {
        $(this).jqGrid('destroyFilterToolbar')
            .jqGrid('filterToolbar', {
                stringResult: true,
                searchOnEnter: true,
                defaultSearch: "cn"
            });
    },
    onSelectRow: function (ids) { //單擊選擇行
        let data = $(this).jqGrid('getRowData', ids);
        // console.log("data.VALUE = "+data.id);
        $('#PROCESS').val(data.製程代號);
        //$('#deptInput').trigger("change");
        $('#listModal').modal('hide');

    },
    search: true,
    refresh: true,
    xls: false


},{ //grid初始化參數6
    caption: '錫膏序號查詢'+
    "<INPUT TYPE='button' NAME='delAllSn' ID='delAllSn' VALUE='刪除全部序號' style='color:black;font-size:12px'>",
    gid: 'jqGrid2',
    pager: '#jqGrid2Pager',
    shrinkToFit: true,
    gridDefinitionUrl: invokeURL + 'solder_paste_sn_query',//apiurl P
    colAPI: 'solder_paste_sn_query', //set colModel index
    fixedColFDb: true, //set db
    gridDefPostData: {

        
    },
    search: true,
    refresh: true,
    xls: true, del: true,
    delOption: {
    //delurl: invokeURL + "RMA_FROM_DELETE",
    delurl: invokeURL + "solder_paste_sn_delete",

    afterSubmit: function (response, postdata) {
        console.log("afterSubmit");
        // var res = $.parseJSON(response.responseText);
        // if (res && res.insertStatus) {
        //     alert(res.insertStatus);
        // }


        let msg = [];
        let url = $(this).getGridParam('delOption').delurl;
        let ids = $(this).getGridParam("selrow");
        let row = $(this).jqGrid('getRowData', ids[0]);


        return delSolderPasteSn(msg,url,ids,row);

        // let msg = [];
        // let url = $(this).getGridParam('delOption').delurl;
        // let ids = $(this).getGridParam("selrow");
        // console.log("afterSubmit ids="+ids);
        // // for (let i = 0; i < ids.length; i++) {
        // if(ids!=''){
        //     let row = $(this).jqGrid('getRowData', ids[0]);
        //     console.log("result = "+row.TI001);
        //     let postData = { 
        //         "TI001": row.TI001,
        //         "TI002": row.TI002
        //     };
        //     let result = ajaxGetData(invokeURL + "solder_paste_sn_delete", postData);
        //     // result = ajaxGetDatsa(url, postData);
        //     console.log(result);
        //     if (result[0]["result"] != "ok") {
        //         alert("delete failed")
        //         msg.push({
        //             "TI001": postData['TI001']
        //         }

        //       )
        //     }
        // }
        
        // // $(this).refreshGrid();
        // if (msg.length>0) {
        //     return [false, msg];
              
        // } else {
        //   return [true, "OK", "Delete a completed data!"];
           
        // }


    }
}
},{ //grid初始化參數7
    caption: '錫膏序號查詢'+
    "<INPUT TYPE='button' NAME='delAllSn' ID='delAllSn' VALUE='刪除全部序號' style='color:black;font-size:12px'>",
    gid: 'jqGrid2',
    pager: '#jqGrid2Pager',
    shrinkToFit: true,
    gridDefinitionUrl: invokeURL + 'solder_paste_sn_create',//apiurl P
    colAPI: 'solder_paste_sn_query', //set colModel index
    fixedColFDb: true, //set db
    gridDefPostData: {

        
    },
    search: true,
    refresh: true,
    xls: true, del: true,
    delOption: {
    //delurl: invokeURL + "RMA_FROM_DELETE",
    delurl: invokeURL + "solder_paste_sn_delete",

    afterSubmit: function (response, postdata) {
        console.log("afterSubmit");
        // var res = $.parseJSON(response.responseText);
        // if (res && res.insertStatus) {
        //     alert(res.insertStatus);
        // }

        let msg = [];
        let url = $(this).getGridParam('delOption').delurl;
        let ids = $(this).getGridParam("selrow");
        let row = $(this).jqGrid('getRowData', ids[0]);


        return delSolderPasteSn(msg,url,ids,row);


    }
}


},{ //grid初始化參數8
    caption: '錫膏序號查詢'+
    "<INPUT TYPE='button' NAME='delAllSn' ID='delAllSn' VALUE='刪除全部序號' style='color:black;font-size:12px'>",
    gid: 'jqGrid2',
    pager: '#jqGrid2Pager',
    shrinkToFit: true,
    gridDefinitionUrl: invokeURL + 'solder_paste_sn_delete_all',//apiurl P
    colAPI: 'solder_paste_sn_query', //set colModel index
    fixedColFDb: true, //set db
    gridDefPostData: {

        
    },
    search: true,
    refresh: true,
    xls: true, del:true,
    delOption: {
    //delurl: invokeURL + "RMA_FROM_DELETE",
    delurl: invokeURL + "solder_paste_sn_delete",

     afterSubmit: function (response, postdata) {
            console.log("afterSubmit");
            // var res = $.parseJSON(response.responseText);
            // if (res && res.insertStatus) {
            //     alert(res.insertStatus);
            // }

            let msg = [];
            let url = $(this).getGridParam('delOption').delurl;
            let ids = $(this).getGridParam("selrow");
            let row = $(this).jqGrid('getRowData', ids[0]);


            return delSolderPasteSn(msg,url,ids,row);


        }
    }


},{ //grid初始化參數  9   錫膏進廠管制紀錄表
    caption: '查詢結果',
    gid: 'jqGrid1',
    pager: '#jqGrid1Pager',
    shrinkToFit: true,
    gridDefinitionUrl: invokeURL + 'solder_paste_into_ac_control_record',//apiurl P
    colAPI: 'solder_paste_into_ac_control_record', //set colModel index
    fixedColFDb: true, //set db
    gridDefPostData: {

        
    },
    search: true,
    refresh: true,
    xls: true

},{ //grid初始化參數  10 錫膏出庫作業
    caption: '查詢結果',
    gid: 'jqGrid1',
    pager: '#jqGrid1Pager',
    shrinkToFit: true,
    gridDefinitionUrl: invokeURL + '',//apiurl P
    colAPI: '', //set colModel index
    fixedColFDb: true, //set db
    gridDefPostData: {

        
    },
    search: true,
    refresh: true,
    xls: true

},{ //grid初始化參數  11 錫膏回溫作業
    caption: '目前可回溫的序號  &nbsp;&nbsp; '+
    "<INPUT TYPE='button' NAME='warmup' id='warmup' VALUE='回溫' style='color:black;font-size:12px'> &nbsp;&nbsp; ",
    gid: 'jqGrid2',
    pager: '#jqGrid2Pager',
    shrinkToFit: true,
    gridDefinitionUrl: invokeURL + 'solder_paste_warmup',//apiurl P
    colAPI: 'solder_paste_warmup', //set colModel index
    fixedColFDb: true, //set db
    gridDefPostData: {

        
    },
    search: true,
    refresh: true,
    xls: true

},{ //grid初始化參數  12 錫膏回溫作業
    caption: '目前回溫中的序號  &nbsp;&nbsp; ',
    gid: 'jqGrid3',
    pager: '#jqGrid3Pager',
    shrinkToFit: true,
    gridDefinitionUrl: invokeURL + 'solder_paste_warmup_enable',//apiurl P
    colAPI: 'solder_paste_warmup_enable', //set colModel index
    fixedColFDb: true, //set db
    gridDefPostData: {

        
    },
    search: true,
    refresh: true,
    xls: true

},{ //grid初始化參數  13 錫膏報廢作業
    caption: '已報廢的序號',
    gid: 'jqGrid1',
    pager: '#jqGrid1Pager',
    shrinkToFit: true,
    gridDefinitionUrl: invokeURL + 'solder_paste_return_query',//apiurl P
    // colAPI: 'solder_paste_return_query', //set colModel index
    fixedColFDb: false, //set db
    gridDefPostData: {

        
    },
    search: true,
    refresh: true,
    xls: true

}






];
/*---------------------公用變數 End--------------*/
/*---------------------UI event Function Start--------------*/
$(document).ready(function () { //form load function
    // var da = new Date().format('yyyyMMdd'); //將日期格式串,轉換成先要的格式
    // console.log('=====> '+da);

    
    loginCheck(); //登入檢查
    //Load menu
    $.get("Top.html", function (data) {
        console.log('Top.html = '+data);
        $("#menu").html(data);
    });
    //Load Bottom
    $.get("Bottom.html", function (data) {
        $("#bottom").html(data);
    });
    initFrm();
     
     
      // 綁定點擊事件
  $("#myModal").on("click", function(event) {
    // 如果用戶點擊的是模態框外部，關閉模態框
    if (event.target == this) {
      $(this).hide();
    }
  });

  // 綁定點擊事件
  $("#submit").on("click", function() {
    // 獲取輸入的序號開頭
    var serialNumber = $("#serialNumber").val();
    // 這裡可以根據需要進行相應的處理
    console.log(serialNumber);
    $("#myModal").hide();
  });

  // 彈出模態框
//   $("#myModal").show();

  // 綁定點擊事件
  $("#btn_Submit").on("click", function() {
    // 獲取輸入的序號開頭
    header = $("#header").val();
    startseq = $("#startseq").val();

    console.log(startseq);
    
    if(!Number.isInteger(parseInt(startseq))){ 
        alert('起始流水號請輸入數字！');
        return;
    } 
    createGrid(7);

    // console.log(serialNumber);
    $('#myModal1').modal('hide');
    // $("#myModal1").hide();
  });



  
});


    // 點擊頁籤時顯示對應的內容
    function openTab(evt, tabName) {
        console.log('openTab='+tabName);

        tabbtn=tabName;
        // $('#WO').val('');
        // $('#SKU').val('');
        // $('#SKU').val('');
        // $('#SN').val('');
        // $('#Num').val('');
        // $('#Loc').val('');




        var i, tabcontent, tablinks;
        tabcontent = document.getElementsByClassName("tabcontent");
        for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
        }
        tablinks = document.getElementsByClassName("tablinks");
        for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
        }
        evt.preventDefault();
        // document.getElementById("myButton").addEventListener("click", function(event) {
        //     event.preventDefault();
        //     // 在這裡添加點擊按鈕後要執行的程式碼
        // });

        document.getElementById(tabName).style.display = "flex";
        evt.currentTarget.className += " active";



        $('#tab1_somin').hide();
        $('#tab2_somin').hide();
        $('#tab3_somin').hide();
        $('#tab4_somin').hide();
        $('#tab5_somin').hide();

        if(tabName=="Tab1"){
            $('#tab1_somin').show(); 
        }else if(tabName=="Tab2"){ 
            
            $('#tab2_somin').show();

        }else if(tabName=="Tab3"){
            $('#tab3_somin').show();
        }else if(tabName=="Tab4"){

        }else if(tabName=="Tab5"){

        }else if(tabName==""){

        }

        
        
        
        
        

    }





function  getDefaultSetting(){

    let postData = { 
        "MSG":""
    };


    let result = ajaxGetData(invokeURL + "queryCompFac", postData);

    
    if (result[0]["MB002"] != "OK") {
        alert("Checking form failed:"+result[0]["MSG"]);
    }else{

        alert("Checking form success:"+result[0]["MSG"]);

        // createGrid(1);
    }



}





function frmEvent() { //form event function

    $('#tab1_somin').hide();
    $('#tab2_somin').hide();
    $('#tab3_somin').hide();
    $('#tab4_somin').hide();
    $('#tab5_somin').hide();








    $('#searchBtn1').on('click', function () {

        if(tabbtn==null||tabbtn==''){
            // createGrid(0);
            alert('請選擇主功能')


        }else if(tabbtn=='Tab1'){

 
            


            if($('#TH004').val().trim()==''){
                alert('請選擇類別！');
                return;
            }else if($('#employeeId').val().trim()==''){                
                alert('請輸入員工編號！');
                return;
            }else if($('#formDate').val().trim()==''){                
                alert('請輸入單據日期！');
                return;
            }else if($('#stockDate').val().trim()==''){                
                alert('請輸入入庫日期！');
                return;
            }else if(!Number.isInteger(parseInt($('#num').val()))){
                alert('數量請輸入數字！');
                return;
            }


            

            
            var yes = confirm('請確認以下資料 : 單據日期:'+$('#formDate').val()+',員工編號:'+$('#employeeId').val()+
            ',類別:'+$('#TH004').val()+',供應商:'+$('#suplier').val()+',廠牌:'+$('#brand').val()+
            ',規格:'+$('#spec').val()+',批號:'+$('#dc').val()+',數量:'+$('#num').val()+
            ',廠別:'+$('#Factory1').val()+',備註:'+$('#note').val()+',確認碼:'+$('#checknum').val()+',入庫日期:'+$('#stockDate').val());

            if (yes) {
                // alert('你按了確定按鈕');
                // $('.toast').toast('show!')
                createGrid(0);

            } else {
                alert('動作取消');
            }


 
            // createGrid(1);
        }else if(tabbtn=='Tab2'){
            createGrid(1);

        }else if(tabbtn=='Tab3'){
 
 

            if($('#stocktype').val()=='2'){//出庫


                if($('#stir').prop("checked")){
                    //上一筆出庫序號未報廢、不可再出庫
     
    
                    if($('#LINE3').val().trim()==''){
                        alert('請輸入出庫線別！');
                        return;
                    }



                    let postData = { 
                        "CREATOR":loginuser,
                        "TI002": $('#SN3').val(),
                        "TJ002": $('#stocktype').val(),
                        "TJ006": '',
                        "TJ007": '',
                        "TJ008": $('#employeeId3').val(), 
                        "TH004": $('#TH004_3').val(),
                        "FACTORY":$('#Factory1').val(),
                        "LINE":$('#LINE3').val(),
                        "RESULT":"",
                        "MSG":""
                    };
    
                    let result = ajaxGetData(invokeURL + "solder_paste_chkstockout", postData);
                    if (result[0]["RESULT"] != "OK") {
                        alert("Checking form failed:"+result[0]["MSG"]);
                    }else{
    
                        alert("Checking form success:"+result[0]["MSG"]);
    
                        // createGrid(1);
                    }
    
    
    
                }else{
                    alert('請確認是否已攪拌!');
                }
    
            }else if($('#stocktype').val()=='4' || $('#stocktype').val()=='5'){//繳回、報廢

 

                if($('#employeeId3').val()==null || $('#employeeId3').val()==''){
                    alert('請輸入員工代號!');
                    return;
                }


                let postData = { 
                    "CREATOR":loginuser,
                    "TH003": $('#employeeId3').val(), 
                    "TH004": $('#TH004_3').val(),
                    "TK002": $('#stocktype').val(),
                    "TI002": $('#SN3').val(),
                    "FACTORY":$('#Factory1').val(),
                    "RESULT":"",
                    "MSG":""
                }; 

                let result = ajaxGetData(invokeURL + "solder_paste_return", postData);
                if (result[0]["RESULT"] != "OK") {
                    alert("作業失敗:"+result[0]["MSG"]);
                }else{
                    alert("作業成功!"+result[0]["MSG"]);
                    
                }

                createGrid(13);


                

            }else if($('#stocktype').val()=='3'){//回溫

                 

                if($('#employeeId3').val()==null || $('#employeeId3').val()==''){
                    alert('請輸入員工代號!');
                    return;
                }


                let postData = { 
                    "CREATOR":loginuser,
                    "TH003": $('#employeeId3').val(), 
                    "TH004": $('#TH004_3').val(),
                    "TJ002": $('#stocktype').val(),
                    "TI002": '',
                    "FACTORY":$('#Factory1').val(),
                    "RESULT":"",
                    "MSG":""
                }; 
                // let result = ajaxGetData(invokeURL + "solder_paste_warmup_check", postData);
                // if (result[0]["RESULT"] != "OK") {
                //     alert("Checking form failed:"+result[0]["MSG"]);
                // }else{
                    // alert("Checking form success:"+result[0]["MSG"]);
                    createGrid(11);
                    createGrid(12);
                // }


            }





            

            



            

        }else if(tabbtn=='Tab4'){



        }else if(tabbtn=='Tab5'){
            // createGrid(7);

            if($('#sDate').val()==''||$('#eDate').val()==''){
                alert('請輸入日期');
            }else{
                createGrid(9);
            }




            

        }

        

        
        //createGrid(5);
        var date =new Date();
        $("#refreshtime").text("更新時間:"+date);
        $('#showDiv1').show();

    });


    $('#workorder').on('click',function (){
        $('#listModal').modal('show');
        createGrid(2);
    });

    $('#sku').on('click',function (){
        $('#listModal').modal('show');
        createGrid(3);
    });

    $('#line').on('click',function (){
        $('#listModal').modal('show');
        createGrid(4);
    });

    $('#process').on('click',function (){
        $('#listModal').modal('show');
        createGrid(5);
    });
 


    // $('#TYPE3').change(function(){
    //     let sltValue=$(this).val();
    //     console.log(sltValue);
        
    //     if(sltValue=='1'){
    //         $('#Tab3SN').show();
    //     }else if(sltValue=='2'){
    //         $('#Tab3SN').hide();
    //     }

         
    //   });




      $('#stocktype').change(function(){
        let sltValue=$(this).val();
        console.log(sltValue);
        
        $('#employeeId3_div').hide(); 
        $('#SN3_div').hide(); 
        $('#TYPE3_div').hide(); 
        $('#stockOutDate3_div').hide() ;
        $('#ischeckstir').hide() ;
        $('#LINE3_div').hide() ;
        
        


        if(sltValue=='2'){ //出庫
            $('#employeeId3_div').show();
            $('#SN3_div').show();
            $('#TYPE3_div').show(); 
            $('#stockOutDate3_div').show();
            $('#ischeckstir').show() ;
            $('#LINE3_div').show() ;


        }else if(sltValue=='5'||sltValue=='4'){ //繳回 報廢
            $('#employeeId3_div').show();
            $('#SN3_div').show();
            $('#TYPE3_div').show(); 
            
        }else if(sltValue=='3'){ //回溫
            $('#employeeId3_div').show();
            // $('#SN3_div').show();
            $('#TYPE3_div').show(); 
            $('#stockOutDate3_div').show();
            
        }

         
      });



    $("#formDate").datepicker({ //setuo datepcker
        format: "yyyymmdd",
        autoclose: true,
        todayHighlight: true,
        setDate: new Date(),
        zIndexOffset: 9999
    });


    $("#stockDate").datepicker({ //setuo datepcker
        format: "yyyymmdd",
        autoclose: true,
        todayHighlight: true,
        setDate: new Date(),
        zIndexOffset: 9999
    });
    // $("#Tabbtn1").trigger("click");



    $("#eDate").datepicker({ //setuo datepcker
        format: "yyyymmdd",
        autoclose: true,
        todayHighlight: true,
        setDate: new Date(),
        zIndexOffset: 9999
    });


    $("#sDate").datepicker({ //setuo datepcker
        format: "yyyymmdd",
        autoclose: true,
        todayHighlight: true,
        setDate: new Date(),
        zIndexOffset: 9999
    });






    
    currentDate = year + month +  strDate; 



    $('#stockOutDate').val(currentDate);






}



 
function gridButton() {

    $('#chkform').on('click', function () {
        console.log("chkform");

        var txt;
        var form = prompt("請輸入要確認的進料單號", "");
        if (form == null || form == "") {
            console.log("取消"); 

        } else {
            console.log("form:"+form);


            let postData = { 
                "TH001": form,
                "RESULT":"",
                "FACTORY":$('#Factory1').val(),
                "MSG":""
            };


            let result = ajaxGetData(invokeURL + "solder_paste_chkform", postData);
            
            console.log('solder_paste_chkform result'+result[0]["result"]);
            if (result[0]["RESULT"] != "OK") {
                alert("Checking form failed:"+result[0]["MSG"]);

            }else{
                result = ajaxGetData(invokeURL + "solder_paste_chkform1", postData);
                console.log('solder_paste_chkform1 result='+result[0]["RESULT"]);

                if (result[0]["RESULT"] != "OK") {
                    alert("Checking form failed:"+result[0]["MSG"]);
                }else{

                    alert("Checking form success:"+result[0]["MSG"]);

                    createGrid(1);
                }


            }


        }

        // if (confirm("Are you sure?")) {
        //     // CreateWO(0, 'Refurbish');
        // }
    });



    $('#cancelform').on('click', function () {
        console.log("cancelform");
        var form = prompt("請輸入要取消的進料單號", "");
        if (form == null || form == "") {
            console.log("取消"); 

        } else {
            console.log("form:"+form);

            let postData = { 
                "TH001": form,
                "FACTORY":$('#Factory1').val(),
                "RESULT":"",
                "MSG":""
            };

            let result = ajaxGetData(invokeURL + "solder_paste_cancelform", postData);
            if (result[0]["RESULT"] != "OK") {
                alert("Checking form failed:"+result[0]["MSG"]);
            }else{

                alert("Checking form success:"+result[0]["MSG"]);

                createGrid(1);
            }
        }
    });

    $('#delAllSn').on('click', function () {
        let grid = $("#" + gridList[6].gid);//678
        let data = $.trim(grid.getRowData()[0]["TI001"]);

        TH001_DEL=data;
        console.log("chkform"+data);
        if (confirm("確定要刪除錫膏單號:"+data+" 底下的全部序號嗎?")) {
            createGrid(8);
        }
    });
    
    // $('#chkform').prop('disabled', false); 
    // $('#cancelform').prop('disabled', true);  


    $('#warmup').on('click', function () {
        console.log("warmup");
        var SN = prompt("請輸入要回溫的序號", "");
        if (SN == null || SN == "") {
            console.log("取消"); 

        } else {
            console.log("序號:"+SN);

            let postData = { 
                "CREATOR":loginuser,
                "TH003": $('#employeeId3').val(), 
                "TH004": $('#TH004_3').val(),
                "TJ002": $('#stocktype').val(),
                "TI002": SN,
                "FACTORY":$('#Factory1').val(),
                "RESULT":"",
                "MSG":""
            };

            let result = ajaxGetData(invokeURL + "solder_paste_warmup_check", postData);
            if (result[0]["RESULT"] != "OK") {
                alert("warmup SN failed:"+result[0]["MSG"]);
            }else{

                alert("warmup SN success:"+result[0]["MSG"]);
                createGrid(11);
                createGrid(12);
                // createGrid(1);
            }
        }
    });







}


/*---------------------UI event Function Start--------------*/
/*---------------------Form Function Start--------------*/
function initFrm() { //init form
    $('#showDiv1').hide();

    $('#listModal').modal('hide');
 
    if (month < 10) {
        month = '0' + month;
    }
    
    if (strDate < 10) {
        strDate = '0' + strDate;
    }
    
    getDefaultSetting();
    frmEvent();
}


 



/*---------------------Form Function End--------------*/
/*---------------------JqGrid Function Start--------------*/
function createGrid(id) { //create jagrid
    let options = {};

    let $grid;

    $grid = $('#' + gridList[id].gid);
    $.jgrid.gridUnload(gridList[id].gid);
    options = gridList[id];


   
    
    var date = new Date().format('yyyyMMdd');
     
    //console.log("send_data====> "+pa );
    switch (id) {
        case 0:
            options.caption = "創建錫膏進料單號";
            let pa=JSON.stringify({
                // "TH001":$('#').val(),
                "TH002":$('#formDate').val(),
                "TH003":$('#employeeId').val(),
                "TH004":$('#TH004').val(),
                "TH005":$('#suplier').val(),
                "TH006":$('#brand').val(),
                "TH007":$('#spec').val(),
                "TH008":$('#dc').val(),
                "TH009":$('#num').val(),
                "TH010":$('#note').val(),
                "TH011":'N',//$('#checknum').val()
                "TH012":$('#stockDate').val(),
                // "USER":"",
                "FACTORY":$('#Factory1').val(),

                "TH001":"",
                "USER":loginuser,
                // "TH002":"20230419",
                // "TH003":"PH03702222",
                // "TH004":"2",
                // "TH005":"702272",
                // "TH006":"",
                // "TH007":"",
                // "TH008":"dc",
                // "TH009":"3",
                // "TH010":"noteweb",
                // "TH011":"N",
                "TH012":"20230418"

            });

            // console.log("url====> "+invokeURL + apiurl);

            options.gridDefPostData =JSON.parse(pa);
            $grid.createJqGrid(options);
            break;
        case 1: 
            let pa1=JSON.stringify({
                "solderPaste":$('#solderPaste').val(),
                "FACTORY":$("#Factory1").val()
            });

            // console.log("url====> "+invokeURL + apiurl);
            options.gridDefPostData =JSON.parse(pa1);



            $grid.createJqGrid(options);

 

            break;
        case 2:



            $grid.createJqGrid(options);
            break;

        case 3:
            $grid.createJqGrid(options);
            break;


        case 4:

            $grid.createJqGrid(options);
            break;

        case 5:

            $grid.createJqGrid(options);
            break;

        case 6:  
            $grid.createJqGrid(options);
             
            // 新增自定義按鈕
            // $grid.jqGrid("navButtonAdd", "#jqGrid2Pager", {
            //     caption: "delete all", // 按鈕的文字
            //     buttonicon: "ui-icon-trash", // 按鈕的圖示
            //     onClickButton: function() { // 點擊按鈕觸發的事件
            //         if (confirm("確定要刪除全部資料？")) { 
            //             var ids = $grid.jqGrid("getDataIDs");
            //             for (var i = 0; i < ids.length; i++) {
            //                 $grid.jqGrid("delRowData", ids[i]);
            //             }
            //         }
            //     }
            // });
            break;
        case 7:

            // header = $("#header").val();
            // startseq = $("#startseq").val();
 
            let pa7=JSON.stringify({
                "TH001":TH001,
                "HEADER":header,
                "STARTNUM":startseq,
                "NUM":sn_num,
                "TYPE":type,
                "USER":"WEBUSER",
                "FACTORY":$("#Factory1").val()

            });
 
            options.gridDefPostData =JSON.parse(pa7);
            $grid.createJqGrid(options);

            // 新增自定義按鈕
            // $grid.jqGrid("navButtonAdd", "#jqGrid2Pager", {
            //     caption: "delete all", // 按鈕的文字
            //     buttonicon: "ui-icon-trash", // 按鈕的圖示
            //     onClickButton: function() { // 點擊按鈕觸發的事件
            //         if (confirm("確定要刪除全部資料？")) { 
            //             var ids = $grid.jqGrid("getDataIDs");
            //             for (var i = 0; i < ids.length; i++) {
            //                 $grid.jqGrid("delRowData", ids[i]);
            //             }
            //         }
            //     }
            // });

            break;
            

       case 8:

            // header = $("#header").val();
            // startseq = $("#startseq").val();
 
            let pa8=JSON.stringify({
                "TH001":TH001_DEL,
                "FACTORY":$("#Factory1").val()
            });
 
            options.gridDefPostData =JSON.parse(pa8);
            $grid.createJqGrid(options);
            break;

        case 9:

            // var date = new Date();
            // var seperator1 = "-";
            // var seperator2 = ":";
            // var year = date.getFullYear();
            // var month = date.getMonth() + 1;
            // var strDate = date.getDate();

            // if (month < 10) {
            //     month = '0' + month;
            // }
            
            // if (strDate < 10) {
            //     strDate = '0' + strDate;
            // }
            
            // var currentDate = year + month +  strDate; 
            console.log("date====> "+currentDate);
            
            

            if($('#record_type').val()=='1'){
                options.gridDefinitionUrl=invokeURL + 'solder_paste_into_ac_control_record';//apiurl P
                options.colAPI='solder_paste_into_ac_control_record'; //set colModel index
                options.caption="錫膏進場管制紀錄表";
            }else if($('#record_type').val()=='2'){
                options.gridDefinitionUrl=invokeURL + 'solder_paste_return_to_room_record';//apiurl P
                options.colAPI='solder_paste_return_to_room_record'; //set colModel index 
                options.caption="錫膏回溫及攪拌紀錄表";
            }
            
 

            let pa9=JSON.stringify({
                "SDATE":$("#sDate").val()==''?'20070101':$("#sDate").val(),
                "EDATE":$("#eDate").val()==''?currentDate:$("#eDate").val(),
                "FACTORY":$("#Factory1").val()
            });
 
            console.log("pa9====> "+pa9);

            options.gridDefPostData =JSON.parse(pa9);
            $grid.createJqGrid(options);
            break;



        case 11:


            var pdata=JSON.stringify({
                "TH004":$("#TH004_3").val(),
                "TH003":$("#employeeId3").val(),
                "FACTORY":$("#Factory1").val()
            });

            options.gridDefPostData =JSON.parse(pdata);
            $grid.createJqGrid(options);
            break;

          case 12:


            var pdata=JSON.stringify({
                "TH004":$("#TH004_3").val(),
                "TH003":$("#employeeId3").val(),
                "FACTORY":$("#Factory1").val()
            });

            options.gridDefPostData =JSON.parse(pdata);
            $grid.createJqGrid(options);
            break;

        case 13: 
            var pdata=JSON.stringify({
                "TH004":$("#TH004_3").val(), 
                "FACTORY":$("#Factory1").val()
            });

            options.gridDefPostData =JSON.parse(pdata);
            $grid.createJqGrid(options);
            break;


        default:

            break;
            
    }





    gridButton();

}



/*---------------------JqGrid Function End--------------*/
/*---------------------Chart Function Start--------------*/
/*---------------------Chart Function End--------------*/
/*---------------------Other Function Start--------------*/

function delSolderPasteSn(msg,url,ids,row){


    console.log("afterSubmit ids="+ids); 

    if(ids!=''){
        console.log("result = "+row.TI001);
        let postData = { 
            "TI001": row.TI001,
            "TI002": row.TI002
        };
        let result = ajaxGetData(invokeURL + "solder_paste_sn_delete", postData);
        // result = ajaxGetDatsa(url, postData);
        console.log(result);
        if (result[0]["result"] != "ok") {
            alert("delete failed")
            msg.push({
                "TI001": postData['TI001'],
                "TI002": postData['TI002']
            }

          )
        }
    }
    
    
    if (msg.length>0) {
        return [false, msg];
          
    } else {
      return [true, "OK", "Delete a completed data!"];
       
    }
}

function delSolderPaste(msg,url,ids,row){
    console.log("afterSubmit ids="+ids); 

    if(ids!=''){
        console.log("result = "+row.TH001);
        let postData = { 
            "TH001": row.TH001
        };
        let result = ajaxGetData(invokeURL + "solder_paste_delete", postData);
        // result = ajaxGetDatsa(url, postData);
        console.log(result);
        if (result[0]["result"] != "ok") {
            alert("delete failed")
            msg.push({
                "TH001": postData['TH001']
            }

          )
        }
    }
    
    
    if (msg.length>0) {
        return [false, msg];
          
    } else {
      return [true, "OK", "Delete a completed data!"];
       
    }


}


/*---------------------Other Function End--------------*/