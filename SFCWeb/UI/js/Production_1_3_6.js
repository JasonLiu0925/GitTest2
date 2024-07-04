/*---------------------公用變數 Start--------------*/
var apiurl = getUrlVars()['type'];
var lineData = new Array();
var gridRows = new Array();
var sn="";
var JA001="";
var gridList = [{ //grid初始化參數 0
    caption: '料槍維修統計',
    gid: 'jqGrid1',
    pager: '#jqGrid1Pager',
    shrinkToFit: true,
    gridDefinitionUrl: invokeURL + 'Production_1_3_6',//apiurl P
    
    colAPI: 'Production_1_3_6A', //set colModel index
    // fixedColFDb: false, //set db
    gridDefPostData: {

        
    },
    search: true,
    refresh: true,
    xls: true,
    ondblClickRow:function(rowid,iRow,iCol,e){
        var curPage =  $("#jqGrid2").getGridParam("page");//当前页码
        var pageSize = $("#jqGrid2").getGridParam("rowNum");//每页显示的记录条数
        var curRowNum = parseInt((curPage-1)*pageSize) + parseInt(rowid); //当前双击的行的行号

        // console.log('curPage',curPage);
        // console.log('pageSize',pageSize);
        // console.log('curRowNum',curRowNum);

        let ids = $(this).getGridParam("selrow");
        let grid = $("#" + gridList[0].gid);

        // console.log('test',$.trim(grid.getRowData()[iRow - 1]["加工順序"]));
         
        console.log('grid',grid);//jqGrid2
        console.log('JD002',$.trim(grid.getRowData()[curRowNum-1]["JD002"]));  
        JA001 = $.trim(grid.getRowData()[curRowNum-1]["JD002"]); 
         

        // JA001=
        createGrid(7);
        createGrid(8);
        // createGrid(10);
        // createGrid(11);
       
    }
},{ //grid初始化參數 1
    caption: '異常狀況統計',
    gid: 'jqGrid2',
    pager: '#jqGrid2Pager',
    shrinkToFit: true,
    gridDefinitionUrl: invokeURL + 'Production_1_3_6',//apiurl P
    
    colAPI: 'Production_1_3_6C', //set colModel index
    fixedColFDb: true, //set db
    gridDefPostData: {

        
    },
    search: true,
    refresh: true,
    xls: true,

},{ //grid初始化參數 2
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


},{ //grid初始化參數 3
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


},{ //grid初始化參數 4
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


},{ //grid初始化參數 5
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


},{ //grid初始化參數 6
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


},{ //grid初始化參數 7
    caption: '維修歷史紀錄',
    gid: 'jqGrid3',
    pager: '#jqGrid3Pager',
    shrinkToFit: true,
    gridDefinitionUrl: invokeURL + 'Production_1_3_6',//apiurl P
    
    colAPI: 'Production_1_3_6B', //set colModel index
    fixedColFDb: false, //set db
    gridDefPostData: {

        
    },
    search: true,
    refresh: true,
    xls: true,

},{ //grid初始化參數 8
    caption: '維修紀錄(全)',
    gid: 'jqGrid4',
    pager: '#jqGrid4Pager',
    shrinkToFit: true,
    gridDefinitionUrl: invokeURL + 'Production_1_3_6',//apiurl P
    
    colAPI: 'Production_1_3_6D', //set colModel index
    fixedColFDb: false, //set db
    gridDefPostData: {

        
    },
    search: true,
    refresh: true,
    xls: true,

},{ //grid初始化參數 9
    caption: '維修歷史紀錄',
    gid: 'jqGrid5',
    pager: '#jqGrid5Pager',
    shrinkToFit: true,
    gridDefinitionUrl: invokeURL + 'Production_1_3_5',//apiurl P
    
    colAPI: 'Production_1_3_5E', //set colModel index
    fixedColFDb: false, //set db
    gridDefPostData: {

        
    },
    search: true,
    refresh: true,
    xls: true,

},{ //grid初始化參數 10
    caption: '保養歷史紀錄',
    gid: 'jqGrid6',
    pager: '#jqGrid6Pager',
    shrinkToFit: true,
    gridDefinitionUrl: invokeURL + 'Production_1_3_5',//apiurl P
    
    colAPI: 'Production_1_3_5F', //set colModel index
    fixedColFDb: false, //set db
    gridDefPostData: {

        
    },
    search: true,
    refresh: true,
    xls: true,

},{ //grid初始化參數 11
    caption: '封存歷史紀錄',
    gid: 'jqGrid7',
    pager: '#jqGrid7Pager',
    shrinkToFit: true,
    gridDefinitionUrl: invokeURL + 'Production_1_3_5',//apiurl P
    
    colAPI: 'Production_1_3_5G', //set colModel index
    fixedColFDb: true, //set db
    gridDefPostData: {

        
    },
    search: true,
    refresh: true,
    xls: true,

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



function frmEvent() { //form event function



    $('#searchBtn1').on('click', function () {

        createGrid(0);
        createGrid(1);
        // createGrid(7);

        


        
        //createGrid(5);
        var date =new Date();
        $("#refreshtime").text("更新時間:"+date);
        $('#showDiv').show();

    });


    $('#searchBtn2').on('click', function () {

        // createGrid(0);
        
        if ($("#excel-file").val() == "") {
            alert("請上傳檔案");
        } else {
            $('#WO').val('');
            var files = $('#excel-file')[0].files;
            var fileReader = new FileReader();
            fileReader.onload = function (ev) {
                try {
                    var data = ev.target.result
                    var workbook = XLSX.read(data, {
                        type: 'binary'
                    }) // 以二進位制流方式讀取得到整份excel表格物件
                    var persons = []; // 儲存獲取到的資料

                } catch (e) {
                    alert('File type is incorrect');
                    return;
                }
                // 表格的表格範圍，可用於判斷表頭是否數量是否正確
                var fromTo = '';
                // 遍歷每張表讀取
                for (var sheet in workbook.Sheets) {
                    if (workbook.Sheets.hasOwnProperty(sheet)) {
                        fromTo = workbook.Sheets[sheet]['!ref'];
                        console.log('fromTo', fromTo);
                        persons = persons.concat(XLSX.utils.sheet_to_json(workbook.Sheets[
                            sheet]));
                        break; // 如果只取第一張表，就取消註釋這行
                    }
                }
                //在控制檯打印出來表格中的資料
                console.log(persons);

                if (persons[0]["製令單號"] == undefined) {
                    alert('File content is incorrect');
                } else {
                    // $('body').loading({
                    //     message: 'Working...',
                    //     theme: 'dark'
                    // });
                    // setTimeout(function () {

                    //     upFile(persons);
                    //     // $('body').loading('stop');
                    // }, 5000);
                    upFile(persons);
                }

            };
            // 以二進位制方式開啟檔案
            fileReader.readAsBinaryString(files[0]);
            //$('#jqGrid2').loading('stop');
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


    $('#customer').on('click',function (){
        $('#listModal').modal('show');
        createGrid(6);
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



 

function upFile(data) {
    let snData = [];
    var msg;
    $.each(data, function (index, value) {
        if (value['製令單號'] == undefined || value['製令單號'] == '' || value['製令單號'] == null) {
            alert("Excel請輸入製令單號");
            console.log('index', index);
            console.log('index', data);
        }
        else {
            
            wo+=String(value['製令單號'])+',';

            if($('#snList').val()==''){
                alert("請輸入序號");
                return;
            }

            
            console.log('WO', value['製令單號']);

            

            // result = ajaxGetData(invokeURL + 'SSFB008_RecoverHisData_SN', { 
            //     "@SN": value['序號'],
            //     "@TZ": 'Y',
            //     "@UPDATEMO": 'Y'
            // });
          
            // if (result[0]["msg"] == null ||result[0]["msg"] == '') {
            //     msg =value['序號']+':資料恢復成功! \n';
            //     $("#result_msg").text(msg);
            // }
            // else {
            //     msg =value['序號']+':資料恢復失敗,原因:'+result[0]["msg"];+'\n';
            //     $("#result_msg").text(msg);
            // }
              


        }


        


    });
    
    createGrid(0);
    // var date =new Date();
    // $("#refreshtime").text("更新時間:"+date);
   
   

}



/*---------------------UI event Function Start--------------*/
/*---------------------Form Function Start--------------*/
function initFrm() { //init form
    $('#showDiv').hide();

    $('#listModal').modal('hide');

    getDefaultSetting();
    frmEvent();
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



/*---------------------Form Function End--------------*/
/*---------------------JqGrid Function Start--------------*/
function createGrid(id) { //create jagrid
    let options = {};

    let $grid;

    $grid = $('#' + gridList[id].gid);
    $.jgrid.gridUnload(gridList[id].gid);
    options = gridList[id];


   
    // options.caption = "查詢結果";
    var date = new Date().format('yyyyMMdd');
    var pa=JSON.stringify({
        "SDATE": $('#sDate').val(),
        "EDATE": $('#eDate').val(),
        "TYPE": '1',
        "JF002": '1',
        "JD002":""

    });

     
    //console.log("send_data====> "+pa );
    switch (id) {
        case 0:
            
            pa=JSON.stringify({
                "SDATE": $('#sDate').val(),
                "EDATE": $('#eDate').val(),
                "TYPE": '1',
                "JF002": '1',
                "JD002":""
            });
            // console.log("url====> "+invokeURL + apiurl);

            options.gridDefPostData =JSON.parse(pa);
            $grid.createJqGrid(options);
            break;
        case 1: 
            pa=JSON.stringify({
                "SDATE": $('#sDate').val(),
                "EDATE": $('#eDate').val(),
                "TYPE": '3',
                "JF002": '1',
                "JD002":""
            });
            // console.log("url====> "+invokeURL + apiurl);
            options.gridDefPostData =JSON.parse(pa);
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

         case 7:
            pa=JSON.stringify({
                "SDATE": $('#sDate').val(),
                "EDATE": $('#eDate').val(),
                "TYPE": '2',
                "JF002": '1',
                "JD002":JA001
            });
            options.gridDefPostData =JSON.parse(pa);
            $grid.createJqGrid(options);
            break;
        case 8:
            pa=JSON.stringify({
                "SDATE": $('#sDate').val(),
                "EDATE": $('#eDate').val(),
                "TYPE": '4',
                "JF002": '1',
                "JD002":JA001

            });
            options.gridDefPostData =JSON.parse(pa);
            $grid.createJqGrid(options);
            break;

            case 9:
                pa=JSON.stringify({
                    "SDATE": $('#sDate').val(),
                    "EDATE": $('#eDate').val(),
                    "TYPE": '5',
                    "JA001":JA001,
                    "FACTORY_ID":"",
                    "TYPE1":"",
                    "STATUS":""
    
                });
                options.gridDefPostData =JSON.parse(pa);
                $grid.createJqGrid(options);
                break;
    
            case 10:
                pa=JSON.stringify({
                    "SDATE": $('#sDate').val(),
                    "EDATE": $('#eDate').val(),
                    "TYPE": '6',
                    "JA001":JA001,
                    "FACTORY_ID":"",
                    "TYPE1":"",
                    "STATUS":""
    
                });
                options.gridDefPostData =JSON.parse(pa);
                $grid.createJqGrid(options);
                break;

            case 11:
                pa=JSON.stringify({
                    "SDATE": $('#sDate').val(),
                    "EDATE": $('#eDate').val(),
                    "TYPE": '7',
                    "JA001":JA001,
                    "FACTORY_ID":"",
                    "TYPE1":"",
                    "STATUS":""
    
                });
                options.gridDefPostData =JSON.parse(pa);
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