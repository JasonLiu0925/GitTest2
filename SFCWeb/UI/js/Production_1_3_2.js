/*---------------------公用變數 Start--------------*/
var apiurl = getUrlVars()['type'];
var lineData = new Array();
var gridRows = new Array();
var sn="";
var gridList = [{ //grid初始化參數
    caption: '鋼板入庫',
    gid: 'jqGrid1',
    pager: '#jqGrid1Pager',
    shrinkToFit: false,
    gridDefinitionUrl: invokeURL + 'Production_1_3_2',//apiurl P
    
    colAPI: 'Production_1_3_2', //set colModel index
    fixedColFDb: true, //set db
    gridDefPostData: {
 
        
    },
    search: true,
    refresh: true,
    xls: true,

},{ //grid初始化參數
    caption: '',
    gid: 'jqGrid1',
    pager: '#jqGrid1Pager',
    shrinkToFit: true,
    gridDefinitionUrl: invokeURL + '',//apiurl P
    
    colAPI: '', //set colModel index
    fixedColFDb: false, //set db
    gridDefPostData: {

        
    },
    search: true,
    refresh: true,
    xls: true,

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


},{ //grid初始化參數 7
    caption: '鋼板出庫',
    gid: 'jqGrid1',
    pager: '#jqGrid1Pager',
    shrinkToFit: true,
    gridDefinitionUrl: invokeURL + 'Production_1_3_2_stockout',//apiurl P
    
    colAPI: 'Production_1_3_2', //set colModel index
    fixedColFDb: false, //set db
    gridDefPostData: {

        
    },
    search: true,
    refresh: true,
    xls: true,

},{ //grid初始化參數 8
    caption: '刮刀入庫',
    gid: 'jqGrid1',
    pager: '#jqGrid1Pager',
    shrinkToFit: true,
    gridDefinitionUrl: invokeURL + 'Production_1_3_2_scraper',//apiurl P
    
    colAPI: 'Production_1_3_2_scraper', //set colModel index
    fixedColFDb: false, //set db
    gridDefPostData: {

        
    },
    search: true,
    refresh: true,
    xls: true,

},{ //grid初始化參數 9
    caption: '刮刀出庫',
    gid: 'jqGrid1',
    pager: '#jqGrid1Pager',
    shrinkToFit: true,
    gridDefinitionUrl: invokeURL + 'Production_1_3_2_scraper_stockout',//apiurl P
    
    colAPI: 'Production_1_3_2_scraper', //set colModel index
    fixedColFDb: false, //set db
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

        if($('#TH004').val()=='1'){ 
            if($('#condition').val()=='1'){ 
                createGrid(0); 
            }else if($('#condition').val()=='3'){  
                createGrid(7);
            } 
        }else if($('#TH004').val()=='2'){ 
            if($('#condition').val()=='1'){ 
                createGrid(8); 
            }else if($('#condition').val()=='3'){  
                createGrid(9);
            } 
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
                "SDATE": $('#sDate').val(),
                "EDATE": $('#eDate').val(),
                "TH004": $('#TH004').val()
            });

            // console.log("url====> "+invokeURL + apiurl);

            options.gridDefPostData =JSON.parse(pa);
            $grid.createJqGrid(options);
            break;
        case 1:
            let pa1=JSON.stringify({
                "SDATE": $('#sDate').val(),
                "EDATE": $('#eDate').val(),
                "TH004": $('#TH004').val()
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
            case 7:
                let pa7=JSON.stringify({
                    "SDATE": $('#sDate').val(),
                    "EDATE": $('#eDate').val(),
                    "TH004": $('#TH004').val()
                });
    
                // console.log("url====> "+invokeURL + apiurl);
                options.gridDefPostData =JSON.parse(pa7);
                $grid.createJqGrid(options);
            break;
            case 8:
                let pa8=JSON.stringify({
                    "SDATE": $('#sDate').val(),
                    "EDATE": $('#eDate').val(),
                    "TH004": $('#TH004').val()
                });
    
                // console.log("url====> "+invokeURL + apiurl);
                options.gridDefPostData =JSON.parse(pa8);
                $grid.createJqGrid(options);
            break;
            case 9:
                let pa9=JSON.stringify({
                    "SDATE": $('#sDate').val(),
                    "EDATE": $('#eDate').val(),
                    "TH004": $('#TH004').val()
                });
    
                // console.log("url====> "+invokeURL + apiurl);
                options.gridDefPostData =JSON.parse(pa9);
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