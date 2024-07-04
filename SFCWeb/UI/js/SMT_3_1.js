/*---------------------公用變數 Start--------------*/
var apiurl = getUrlVars()['type'];
var lineData = new Array();
var gridRows = new Array();
var loginuser ;
var BK001;
var sn="";
var gridList = [{ //grid初始化參數
    caption: "創建測溫板頁面 &nbsp;&nbsp; "+
    "<INPUT TYPE='button' NAME='chkform' id='chkform' VALUE='單據確認' style='color:black;font-size:12px'> &nbsp;&nbsp; " +
    "<INPUT TYPE='button' NAME='cancelform' id='cancelform' VALUE='單據取確' style='color:black;font-size:12px'>", 
    gid: 'jqGrid1',
    pager: '#jqGrid1Pager',
    shrinkToFit: true,
    gridDefinitionUrl: invokeURL + 'thermometer_create',//apiurl P
    
    colAPI: 'thermometer_create', //set colModel index
    fixedColFDb: true, //set db
    gridDefPostData: {

        
    },
    search: true,
    refresh: true,
    xls: true,

},{ //grid初始化參數
    caption:"查詢測溫板頁面 &nbsp;&nbsp; "+
    "<INPUT TYPE='button' NAME='chkform' id='chkform' VALUE='單據確認' style='color:black;font-size:12px'> &nbsp;&nbsp; " +
    "<INPUT TYPE='button' NAME='cancelform' id='cancelform' VALUE='單據取確' style='color:black;font-size:12px'>", 
    
    gid: 'jqGrid1',
    pager: '#jqGrid1Pager',
    shrinkToFit: true,
    gridDefinitionUrl: invokeURL + 'thermometer_query',//apiurl P
    
    colAPI: 'thermometer_create', //set colModel index
    fixedColFDb: true, //set db
    gridDefPostData: {

        
    },
    search: true,
    refresh: true,
    xls: true, del: true,   delOption: {
         //delurl: invokeURL + "RMA_FROM_DELETE",
         delurl: invokeURL + "thermometer_delete",
        
         afterSubmit: function (response, postdata) {
             console.log("afterSubmit");
             // var res = $.parseJSON(response.responseText);
             // if (res && res.insertStatus) {
             //     alert(res.insertStatus);
             // }
             let msg = [];
             let url = $(this).getGridParam('delOption').delurl;
             let ids = $(this).getGridParam("selrow");
             console.log("afterSubmit ids="+ids);
             // for (let i = 0; i < ids.length; i++) {
             if(ids!=''){
                 let row = $(this).jqGrid('getRowData', ids[0]);
                 console.log("result = "+row.BK001);
                 let postData = { 
                    "BK001": row.BK001,
                    "USER": loginuser,
                    "FACTORY":'',
                    "RESULT": '',
                    "MSG": ''
                 };
                 let result = ajaxGetData(invokeURL + "thermometer_delete", postData);
                 // result = ajaxGetDatsa(url, postData);
                 console.log(result);
                 if (result[0]["RESULT"] != "OK") {
                    alert("delete failed:"+result[0]["MSG"])
                    msg.push({
                        "BK001": postData['BK001']
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
    //grid初始化參數
    caption: '',
    gid: 'jqGridList',
    pager: '#jqGridListPager',
    shrinkToFit: true,
    //colAPI: 'RMA_HomeCSMNameList', //set colModel index
    // fixedColFDb: true, //set db
    gridDefinitionUrl: invokeURL + 'customer',
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
        $('#CUSTOMER').val(data.客戶代號);
        //$('#deptInput').trigger("change");
        $('#listModal').modal('hide');

    },
    search: true,
    refresh: true,
    xls: false


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
    loginuser= getcooky("UID");
    getDefaultSetting();
    initFrm();
     
     


});



function frmEvent() { //form event function



    $('#searchBtn1').on('click', function () {

        var form = prompt("請輸入要查詢的鋼板進料單號", "");

        console.log("form:"+form);
        BK001=form;


        createGrid(1);
 


        //createGrid(5);
        var date =new Date();
        $("#refreshtime").text("更新時間:"+date);
        $('#showDiv').show();

    });


    $('#createForm').on('click', function () {

        if($('#SKU').val().trim()==''){
            alert('請輸入PCB料號！');
            return;
        }else if($('#employeeId').val().trim()==''){                
            alert('請輸入員工編號！');
            return;
        }else if($('#formDate').val().trim()==''){                
            alert('請輸入單據日期！');
            return;
        }else if($('#useablenum').val().trim()==''){                
            alert('請輸入可使用次數！');
            return;
        }else if($('#limitnum').val().trim()==''){                
            alert('請輸入Warning次數！');
            return;
        }else if(!Number.isInteger(parseInt($('#useablenum').val()))){
            alert('可使用次數請輸入數字！');
            return;
        }else if(!Number.isInteger(parseInt($('#limitnum').val()))){
            alert('Warning次數請輸入數字！');
            return;
        }

        var yes = confirm('請確認以下資料 : 廠別'+$('#Factory1').val()+
        ',單據日期:'+$('#formDate').val()+',員工編號:'+$('#employeeId').val()+
        ',可使用次數:'+$('#useablenum').val()+',PCB料號:'+$('#SKU').val()+',厚度:'+
        ',Warning次數:'+$('#limitnum').val());


        if (yes) {

            let postData = {  
                "BK003": $('#employeeId').val(),
                "BK004": $('#SKU').val(),  
                "RESULT":"",
                "MSG":""
            };
            
            let result = ajaxGetData(invokeURL + "thermometer_chkdata", postData);
            if (result[0]["RESULT"] != "OK") {
                alert("Checking data failed:"+result[0]["MSG"]);
            }else{
            
                alert("Checking data success！");
            
               createGrid(0);

            }

        }




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


    $('#customer').on('click',function (){
        $('#listModal').modal('show');
        createGrid(6);
    });




    $("#formDate").datepicker({ //setuo datepcker
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
                "BK001":"",
                "BK002":$('#formDate').val(),
                "BK003":$('#employeeId').val(),
                "BK004":$('#SKU').val(),
                "BK005":"",
                "BK006":$('#useablenum').val(),
                "BK007":"",
                "BK008":$('#limitnum').val(),
                "BK009":"N",
                "FACTORY":$('#Factory1').val(),
                "USER":loginuser
            });

            // console.log("url====> "+invokeURL + apiurl);

            options.gridDefPostData =JSON.parse(pa);
            $grid.createJqGrid(options);
            break;
        case 1:
            let pa1=JSON.stringify({
                "BK001": BK001,
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



function gridButton() {

    $('#chkform').on('click', function () {
        console.log("chkform");

        var txt;
        var form = prompt("請輸入要確認的測溫板進料單號", "");
        if (form == null || form == "") {
            console.log("取消"); 

        } else {
            console.log("form:"+form);


            let postData = { 
                "BK001": form,
				"USER":loginuser,
                "RESULT":"",
                "FACTORY":$('#Factory1').val(),
                "MSG":""
            };


            let result = ajaxGetData(invokeURL + "thermometer_chkdata1", postData);
            
            console.log('thermometer_chkdata1 result'+result[0]["RESULT"]);
            if (result[0]["RESULT"] != "OK") {
                alert("Checking form failed:"+result[0]["MSG"]);

            }else{
				// alert("Checking form success:"+result[0]["MSG"]);
			
                result = ajaxGetData(invokeURL + "thermometer_chkform", postData);
                console.log('steel_paste_chkform result='+result[0]["RESULT"]);

                if (result[0]["RESULT"] != "OK") {
                    alert("Checking form failed1:"+result[0]["MSG"]);
                }else{

                    alert("Checking form success:"+result[0]["MSG"]);

                    createGrid(1);
                }


            }


        }
 
    });



    $('#cancelform').on('click', function () {
        console.log("cancelform");
        var form = prompt("請輸入要取消的進料單號", "");
        if (form == null || form == "") {
            console.log("取消"); 

        } else {
            console.log("form:"+form);

            let postData = { 
                "BK001": form,
				"USER":loginuser,
                "RESULT":"",
                "FACTORY":$('#Factory1').val(),
                "MSG":""
            };

            let result = ajaxGetData(invokeURL + "thermometer_cancelform", postData);
            if (result[0]["RESULT"] != "OK") {
                alert("Checking form failed:"+result[0]["MSG"]);
            }else{

                alert("Checking form success:"+result[0]["MSG"]);

                createGrid(1);
            }
        }
    });


	








}


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

/*---------------------Other Function End--------------*/