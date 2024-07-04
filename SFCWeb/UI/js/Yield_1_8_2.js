/*---------------------公用變數 Start--------------*/
var apiurl = getUrlVars()['type'];
var lineData = new Array();
var gridRows = new Array();
var sn="";
var SID_T='';
var gridList = [{ //grid初始化參數
    caption: '',
    gid: 'jqGrid1',
    pager: '#jqGrid1Pager',
    shrinkToFit: true,
    gridDefinitionUrl: invokeURL + 'Yield_1_8_2A',//apiurl P
    
    colAPI: 'Yield_1_8_2A', //set colModel index
    fixedColFDb: false, //set db
    gridDefPostData: {

        
    },
    search: true,
    refresh: true,
    xls: true,
    ondblClickRow:function(rowid,iRow,iCol,e){
        var curPage = $("#jqGrid1").getGridParam("page");//当前页码
        var pageSize = $("#jqGrid1").getGridParam("rowNum");//每页显示的记录条数
        var curRowNum = parseInt((curPage-1)*pageSize) + parseInt(rowid); //当前双击的行的行号

        console.log('curPage',curPage);
        console.log('pageSize',pageSize);
        console.log('curRowNum',curRowNum);

        let grid = $("#" + gridList[0].gid);
        let data = $.trim(grid.getRowData()[curRowNum-1]["SID"]);

        let postData = { 
            "SID": data
        };
        SID_T = data;
        type = $.trim(grid.getRowData()[curRowNum-1]["SID"]);

 
        console.log('grid',grid);//jqGrid2
        console.log('SID_T',data); //取得加工順序

 
        createGrid(1);
 
        createGrid(7);
        createGrid(8);
        createGrid(9);
        createGrid(10);


       

    }

},{ //grid初始化參數
    caption: '線別不良統計',
    gid: 'jqGrid2',
    pager: '#jqGrid2Pager',
    shrinkToFit: true,
    gridDefinitionUrl: invokeURL + 'Yield_1_8_2B',//apiurl P
    
    colAPI: 'Yield_1_8_2B', //set colModel index
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
    caption: '機種不良統計',
    gid: 'jqGrid3',
    pager: '#jqGrid3Pager',
    shrinkToFit: true,
    gridDefinitionUrl: invokeURL + 'Yield_1_8_2C',//apiurl P
    
    colAPI: 'Yield_1_8_2C', //set colModel index
    fixedColFDb: false, //set db
    gridDefPostData: {

        
    },
    search: true,
    refresh: true,
    xls: true,

},{ //grid初始化參數 8
    caption: '製令不良統計',
    gid: 'jqGrid4',
    pager: '#jqGrid4Pager',
    shrinkToFit: true,
    gridDefinitionUrl: invokeURL + 'Yield_1_8_2D',//apiurl P
    
    colAPI: 'Yield_1_8_2D', //set colModel index
    fixedColFDb: false, //set db
    gridDefPostData: {

        
    },
    search: true,
    refresh: true,
    xls: true,

},{ //grid初始化參數 9
    caption: '製令不良維修統計',
    gid: 'jqGrid5',
    pager: '#jqGrid5Pager',
    shrinkToFit: true,
    gridDefinitionUrl: invokeURL + 'Yield_1_8_2E',//apiurl P
    
    colAPI: 'Yield_1_8_2E', //set colModel index
    fixedColFDb: false, //set db
    gridDefPostData: {

        
    },
    search: true,
    refresh: true,
    xls: true,

},{ //grid初始化參數 10
    caption: '責任歸屬占比',
    gid: 'jqGrid6',
    pager: '#jqGrid6Pager',
    shrinkToFit: true,
    gridDefinitionUrl: invokeURL + 'Yield_1_8_1F',//apiurl P
    
    colAPI: 'Yield_1_8_1F', //set colModel index
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

        createGrid(0);

        // createGrid(1);


        
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


   
    // options.caption = "查詢結果";
    var date = new Date().format('yyyyMMdd');
    let pa1=JSON.stringify({
        "SID": SID_T
    });
    //console.log("send_data====> "+pa );
    switch (id) {
        case 0:
            let pa=JSON.stringify({
                "WO": $('#WO').val(),
                "PART": $('#SKU').val()
            });

            // console.log("url====> "+invokeURL + apiurl);

            options.gridDefPostData =JSON.parse(pa);
            $grid.createJqGrid(options);
            break;
        case 1:
            

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


        options.gridDefPostData =JSON.parse(pa1);
        $grid.createJqGrid(options);
        break;

        case 8:


        options.gridDefPostData =JSON.parse(pa1);
        $grid.createJqGrid(options);
        break;


        case 9:


        options.gridDefPostData =JSON.parse(pa1);
        $grid.createJqGrid(options);
        break;


        case 10:


        options.gridDefPostData =JSON.parse(pa1);
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