/*---------------------公用變數 Start--------------*/
var apiurl = getUrlVars()['type'];
var tabbtn = null;
var lineData = new Array();
var gridRows = new Array();
var sn="";
var gridList = [{ //grid初始化參數
    caption: '',
    gid: 'jqGrid1',
    pager: '#jqGrid1Pager',
    shrinkToFit: true,
    gridDefinitionUrl: invokeURL + 'CARRIER_SN',//apiurl P
    colAPI: 'CARRIER_SN', //set colModel index
    fixedColFDb: true, //set db
    gridDefPostData: {

        
    },
    search: true,
    refresh: true,
    xls: true

},{ //grid初始化參數
    caption: '',
    gid: 'jqGrid1',
    pager: '#jqGrid1Pager',
    shrinkToFit: true,
    gridDefinitionUrl: invokeURL + 'CARRIER_SKU',//apiurl P
    
    colAPI: 'CARRIER_SKU', //set colModel index
    fixedColFDb: false, //set db
    gridDefPostData: {
        "SKU":""
    },
    search: true,
    refresh: true,
    xls: true, add: true,
        addOption: {
            // search:true,
            addurl: invokeURL + "CARRIER_SKU_INSERT",
            serializeEditData: function (postData) {
                console.log("addOption"+postData);
            
                let pa=JSON.stringify({
                "SKU": postData.SKU, 
                "SKU_COM": postData.SKU_COM
              });
              
              console.log(pa);
              return pa;
            }
    
        },
        editOption: {
            editurl: invokeURL + "",
            serializeEditData: function (postData) {
                console.log("editOption"+postData);
              let pa=JSON.stringify({
                "SKU": postData.SKU, 
                "SKU_COM": postData.SKU_COM
              });
              
              console.log(pa);
              return pa;
            }
        }, delOption: {
            //delurl: invokeURL + "RMA_FROM_DELETE",
            delurl: invokeURL + "CARRIER_SKU_DELETE",
    
            afterSubmit: function (response, postdata) {
                console.log("afterSubmit");
                // var res = $.parseJSON(response.responseText);
                // if (res && res.insertStatus) {
                //     alert(res.insertStatus);
                // }
                let msg = [];
                let url = $(this).getGridParam('delOption').delurl;
                let ids = $(this).getGridParam("selrow");
                console.log("afterSubmit ids="+ids);
                // for (let i = 0; i < ids.length; i++) {
                if(ids!=''){
                    let row = $(this).jqGrid('getRowData', ids[0]);
                    console.log("result = "+row.SKU);
                    let postData = { 
                        "SKU": row.SKU, 
                        "SKU_COM": row.SKU_COM
                    };
                    let result = ajaxGetData(invokeURL + "CARRIER_SKU_DELETE", postData);
                    // result = ajaxGetDatsa(url, postData);
                    console.log(result);
                    if (result[0]["result"] != "ok") {
                        alert("delete failed")
                        msg.push({
                            "SKU": postData['SKU']
                            }
    
                        )
                    }
                }
                
                // $(this).refreshGrid();
                if (msg.length>0) {
                  return [false, msg];
                    
                } else {
                  return [true, "OK", "Delete a completed data!"];
                   
                }
    
    
            }
        },
         edit: false,
         del: true

},{ //grid初始化參數
    //grid初始化參數
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


},{ //grid初始化參數
    //grid初始化參數
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


},{ //grid初始化參數
    //grid初始化參數
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
        $('#LINE').val(data.生產線代號);
        //$('#deptInput').trigger("change");
        $('#listModal').modal('hide');

    },
    search: true,
    refresh: true,
    xls: false


},{ //grid初始化參數
    //grid初始化參數
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


},{ //grid初始化參數
    caption: '',
    gid: 'jqGrid1',
    pager: '#jqGrid1Pager',
    shrinkToFit: true,
    gridDefinitionUrl: invokeURL + '',//apiurl P
    colAPI: 'CARRIER_SN', //set colModel index
    fixedColFDb: true, //set db
    gridDefPostData: {

        
    },
    search: true,
    refresh: true,
    xls: true,
    edit: true,
    editOption: {
        editurl: invokeURL + "CARRIER_SN_UPDATE",
        serializeEditData: function (postData) {
            console.log("editOption:"+postData.SNSTATUS);

            var pa;

            let ids = $(this).getGridParam("selrow");
            console.log("serializeEditData ids="+ids);
            // for (let i = 0; i < ids.length; i++) {
            if(ids!=''){
                let row = $(this).jqGrid('getRowData', ids[0]);
                console.log("result = "+row.SN);
                console.log("result = "+row.LOC); 
                console.log("result = "+row.SNSTATUS);
                console.log("result = "+row.SCRAP);
                console.log("result = "+postData.Location); 

                console.log("SCRAP_REMARK = "+postData.SCRAP_REMARK); 


                if(row.SNSTATUS=='3'){
                    return '已報廢不能更換狀態';
                }


                if((postData.SNSTATUS=='3'||postData.SNSTATUS=='2') && postData.SCRAP_REMARK ==''){
                    return '狀態改成報廢或修改中需填入原因';
                }

                
                if(postData.SNSTATUS==null || postData.SNSTATUS==''){
                    return 'error';
                }


                pa=JSON.stringify({
                    "SNSTATUS01": postData.SNSTATUS, 
                    "SN": row.SN,
                    "LOC": postData.LOC, 
                    "SCRAP_REASON": postData.SCRAP_REMARK
                });


                
                console.log('傳出的參數='+pa);
                return pa;
            }


            // if(postData.SNSTATUS == '3'){

            //     return;
            // }


            return;
          
        }
    }
},{ //grid初始化參數
    caption: '',
    gid: 'jqGrid1',
    pager: '#jqGrid1Pager',
    shrinkToFit: true,
    gridDefinitionUrl: invokeURL + 'CARRIER_WO_Q',//apiurl P
    colAPI: 'CARRIER_WO_Q', //set colModel index
    fixedColFDb: true, //set db
    gridDefPostData: {

        
    },
    search: true,
    refresh: true,
    xls: true,
    edit:true,
    editOption: {
        editurl: invokeURL + "CARRIER_TAKEOUT",
        serializeEditData: function (postData) {
            console.log("editOption:"+postData.SNSTATUS);

            var pa;

            let ids = $(this).getGridParam("selrow");
            console.log("serializeEditData ids="+ids);
            // for (let i = 0; i < ids.length; i++) {
            if(ids!=''){
                let row = $(this).jqGrid('getRowData', ids[0]);
                console.log("SN = "+row.SN); 
                console.log("TAKEOUT = "+row.TAKEOUT); 
                console.log("TAKEOUT2 = "+postData.TAKEOUT); 



                if(row.TAKEOUT==postData.TAKEOUT){
                    return '沒有變更';
                }
 


 

                pa=JSON.stringify({
                    "SN": row.SN
                });


                
                console.log('傳出的參數='+pa);
                return pa;
            }

 

            return;
          
        }

    }

}];
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
     
     


});


    // 點擊頁籤時顯示對應的內容
    function openTab(evt, tabName) {
        console.log('openTab='+tabName);

        tabbtn=tabName;
        $('#WO').val('');
        $('#SKU').val('');
        $('#SKU').val('');
        $('#SN').val('');
        $('#Num').val('');
        $('#Loc').val('');




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
    }


function frmEvent() { //form event function



    $('#searchBtn1').on('click', function () {

        if(tabbtn==null||tabbtn==''){
            // createGrid(0);
            alert('請選擇主功能')


        }else if(tabbtn=='Tab1'){



            if($('#SKU1').val().trim()==''){
                alert('Please input SKU！');
                return;
            }else if($('#Num').val().trim()==''){                
                alert('Please input Num！');
                return;
            }else if($('#Loc').val().trim()==''){                
                alert('Please input Loc！');
                return;
            }else if(!Number.isInteger(parseInt($('#Num').val()))){
                alert('Num must be Number！');
                return;
            }


             

            
            var yes = confirm('請確認以下資料 : SKU:'+$('#SKU1').val()+',Country:'+$('#Country1').val()+',Factory:'+$('#Factory1').val()+',Process:'+$('#Process1').val()+',Num:'+$('#Num').val()+',Loc:'+$('#Loc').val());

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

            createGrid(6);

        }else if(tabbtn=='Tab4'){



        }else if(tabbtn=='Tab5'){
            createGrid(7);


        }

        


        
        //createGrid(5);
        var date =new Date();
        $("#refreshtime").text("更新時間:"+date);
        $('#showDiv').show();

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
 


    $('#TYPE3').change(function(){
        let sltValue=$(this).val();
        console.log(sltValue);
        
        if(sltValue=='1'){
            $('#Tab3SN').show();
        }else if(sltValue=='2'){
            $('#Tab3SN').hide();
        }

         
      });



    $("#sDate").datepicker({ //setuo datepcker
        format: "yyyymmdd",
        autoclose: true,
        todayHighlight: true,
        setDate: new Date(),
        zIndexOffset: 9999
    });


    $("#eDate").datepicker({ //setuo datepcker
        format: "yyyymmdd",
        autoclose: true,
        todayHighlight: true,
        setDate: new Date(),
        zIndexOffset: 9999
    });


}



 



/*---------------------UI event Function Start--------------*/
/*---------------------Form Function Start--------------*/
function initFrm() { //init form
    $('#showDiv').hide();

    $('#listModal').modal('hide');

    // 預設開啟第一個頁籤
    // document.getElementById("Tab1").click();
    $("#Tab1").trigger("click");


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
            options.caption = "新增機種頁面";
            let pa=JSON.stringify({
                "SKU":$('#SKU1').val(),
                "COUNTRY":$('#Country1').val(),
                "FACTORY":$('#Factory1').val(),
                "PROC":$('#Process1').val(),
                "NUM":$('#Num').val(),
                "LOC":$('#Loc').val()
            });

            // console.log("url====> "+invokeURL + apiurl);

            options.gridDefPostData =JSON.parse(pa);
            $grid.createJqGrid(options);
            break;
        case 1:
            options.caption = "載具共用管理頁面";
            let pa1=JSON.stringify({
                "SKU":$('#SKU2').val()
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
            



            console.log('=>'+$('#TYPE3').val());
            console.log('=>'+$('#SN3').val());
            console.log('=>'+($('#SN').val()!=''));

            
            // options.gridDefinitionUrl=invokeURL + 'CARRIER_SN_Q';
            if($('#TYPE3').val()=='1'){ // colAPI: 'CARRIER_SN'
                options.caption = "載具查詢結果";
                options.colAPI="CARRIER_SN";
                if($('#SN3').val()!='' ){
                    options.gridDefinitionUrl=invokeURL + 'CARRIER_SN_Q';//apiurl P
                }else{
                    options.gridDefinitionUrl=invokeURL + 'CARRIER_SKU_Q';//apiurl P
                }


            }else if($('#TYPE3').val()=='2'){ // colAPI: 'CARRIER_SCRAP_Q'
                options.caption = "報廢查詢結果";
                options.colAPI="CARRIER_SCRAP_Q";
                options.gridDefinitionUrl=invokeURL + 'CARRIER_SCRAP_Q';//apiurl P



            }

            


            let pa6=JSON.stringify({
                "SKU":$('#SKU3').val(),
                "SN":$('#SN3').val()
            });

            options.gridDefPostData =JSON.parse(pa6);
            $grid.createJqGrid(options);
            break;
        case 7:
            options.caption = "領取歸還頁面";
            let pa7=JSON.stringify({
                "WO":$('#WO5').val()
            });

            console.log("url====> "+invokeURL + apiurl+' '+$('#WO5').val());
            options.gridDefPostData =JSON.parse(pa7);
            $grid.createJqGrid(options);
            break;
            

        default:

            break;
            
    }






}



/*---------------------JqGrid Function End--------------*/
/*---------------------Chart Function Start--------------*/
/*---------------------Chart Function End--------------*/
/*---------------------Other Function Start--------------*/

/*---------------------Other Function End--------------*/