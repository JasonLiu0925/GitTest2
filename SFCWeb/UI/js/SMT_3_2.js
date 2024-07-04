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

var listWo=[];//製令製程明細

var loginuser = getcooky("UID");

var gridList = [{ //grid初始化參數  0
    caption: '測溫版當前狀態',
    gid: 'jqGrid1',
    pager: '#jqGrid1Pager',
    shrinkToFit: true,
    gridDefinitionUrl: invokeURL + 'thermometer_use',//apiurl P
    // colAPI: 'thermometer_use', //set colModel index
    fixedColFDb: false, //set db
    gridDefPostData: {

        
    },
    search: true,
    refresh: true,
    xls: true

},{ //grid初始化參數 1
    caption: "鋼板當前狀態(入)",
    gid: 'jqGrid1',
    pager: '#jqGrid1Pager',
    // rowNum: 20,
    viewrecords: true, 
    shrinkToFit: true,
    gridDefinitionUrl: invokeURL + '',//apiurl P
    colAPI: '', //set colModel index
    fixedColFDb: true, //set db
    gridDefPostData: {
        "solderPaste":""
    },
    search: true,
    refresh: true,
    xls: true

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
 





function  getDefaultSetting(){


    let postData = { 
        "MSG":""
    };


    let result = ajaxGetData(invokeURL + "queryCompFac", postData);

    // alert(result[0]["MB002"]);
    // alert(result.length);

    var select = $("#Factory1"); 
    var option = null;

    $.each(result, function(index, value) { 
        console.log("索引：" + index + " 值：" + value);

        

        option = $("<option></option>").val(value["MB001"]).text(value["MB002"]);
        select.append(option);
    });


    // let postData = { 
    //     "MSG":""
    // };


    // let result = ajaxGetData(invokeURL + "queryCompFac", postData);

    
    // if (result[0]["MB002"] != "OK") {
    //     alert("Checking form failed:"+result[0]["MSG"]);
    // }else{

    //     alert("Checking form success:"+result[0]["MSG"]);

    //     // createGrid(1);
    // }



}





function frmEvent() { //form event function
 







    $('#searchBtn1').on('click', function () {

   
            if($('#stocktype').val()=='2'){//使用
 
                    if($('#SN3').val().trim()==''){
                        alert('請輸入測溫板Id！');
                        return;
                    }else if($('#employeeId3').val().trim()==''){
                        alert('請輸入employeeId2！');
                        return;
                    }
 
					

                    let postData = {
                        "CREATOR":loginuser,
                        "BK005": $('#SN3').val(),
                        "BK003": $('#employeeId3').val(), 
                        "RESULT":"",
                        "MSG":""
                    };
    
                    let result = ajaxGetData(invokeURL + "thermometer_chkuse", postData);
                    if (result[0]["RESULT"] != "OK") {
                        alert("使用檢查失敗:"+result[0]["MSG"]);
                    }else{
						alert(result[0]["MSG"]);
                        alert("使用成功！");
                        createGrid(0);
                    }
    
    
            }else if($('#stocktype').val()=='3'){//報廢

 
                if($('#SN3').val().trim()==''){
                    alert('請輸入測溫板Id！');
                    return;
                }else if($('#employeeId3').val().trim()==''){
                    alert('請輸入employeeId3！');
                    return;
                }
				
				   


                let postData = { 
                    "CREATOR":loginuser,
                        "BK005": $('#SN3').val(),
                        "BK003": $('#employeeId3').val(), 
                        "RESULT":"",
                        "MSG":""
                }; 

                let result = ajaxGetData(invokeURL + "thermometer_chkuse", postData);
                if (result[0]["RESULT"] != "OK") {
                    alert("作業失敗:"+result[0]["MSG"]);
                }else{
                    alert("作業成功!"+result[0]["MSG"]);
					createGrid(0);
                    
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

 
      



	  
	  
	  
	  
	   
    
    currentDate = year+' ' + month +' ' +  strDate;  
    $('#stockOutDate').val(currentDate); 
	$('#stockInDate').val(currentDate);


	
	
  
	
	

	
	
	
	

}

 




function createWoData(){
	console.log("createWoData");
	// $('#myModal5').css('display', 'block');
	$('#myModal5').modal('show');
	
	
	
}




function isZone(num){
    if(num >= 30 & num <=50){
        return true
    }

    return false
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
            let pa=JSON.stringify({
                "CREATOR":loginuser,
                "BK005": $('#SN3').val(),
                "BK003": $('#employeeId3').val(),
                "BL002": $('#stocktype').val(), 
                "RESULT":"",
                "MSG":""

            });
			
			 

            // console.log("url====> "+invokeURL + apiurl);

            options.gridDefPostData =JSON.parse(pa);
            $grid.createJqGrid(options);
            break;
        case 1: 
            let pa1=JSON.stringify({
                "CREATOR":loginuser,
                    "TO005": $('#employeeId3').val(),   
                    "TL001": $('#SN3').val(),
                    "TO001": $('#SN3').val(),
                    "TO002": $('#stocktype').val(),
                    "TO005": $('#employeeId3').val(),
                    "TO006": $('#tension1').val(),
                    "TO007": $('#tension2').val(),
                    "TO008": $('#tension3').val(),
                    "TO009": $('#tension4').val(),
                    "TO010": $('#tension5').val(),
                    "TN011": $('#SCRAP').val(),
                    "FACTORY":$('#Factory1').val()
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
                "TH003":$("#employeeId3").val(),
                "FACTORY":$("#Factory1").val()
            });

            options.gridDefPostData =JSON.parse(pdata);
            $grid.createJqGrid(options);
            break;

          case 12:


            var pdata=JSON.stringify({ 
                "TH003":$("#employeeId3").val(),
                "FACTORY":$("#Factory1").val()
            });

            options.gridDefPostData =JSON.parse(pdata);
            $grid.createJqGrid(options);
            break;

        case 13: 
            var pdata=JSON.stringify({ 
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




function getWoList(wo){


}










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