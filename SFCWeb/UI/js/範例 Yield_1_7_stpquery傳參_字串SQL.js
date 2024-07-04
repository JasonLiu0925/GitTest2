/*---------------------公用變數 Start--------------*/
var apiurl = getUrlVars()['type'];
var lineData = new Array();
var gridRows = new Array();
var gridList = [{ //grid初始化參數
    caption: '',
    gid: 'jqGrid1',
    pager: '#jqGrid1Pager',
    shrinkToFit: true,
    gridDefinitionUrl: invokeURL + apiurl+"_1",//apiurl P
    
    colAPI: apiurl+"_1", //set colModel index
    fixedColFDb: true, //set db
    gridDefPostData: {

        
    },
    search: true,
    refresh: true,
    xls: true,

},{
    //grid初始化參數
    caption: '',
    gid: 'jqGridList',
    pager: '#jqGridListPager',
    shrinkToFit: true,//適配排版
    //colAPI: 'RMA_HomeCSMNameList', //set colModel index
    // fixedColFDb: true, //set db
    gridDefinitionUrl: invokeURL + 'Yield_1_6_WO',//  web_instantly_produce_data_dept
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
        //console.log("data.VALUE = "+data.部門代號);
        $('#Wo').val(data.製令單號);//要放欄位名!!!
        //$('#deptInput').trigger("change");
        $('#listModal').modal('hide');

    },
    search: false,
    refresh: true,
    xls: false

},{
    //grid初始化參數
    caption: '',
    gid: 'jqGridList',
    pager: '#jqGridListPager',
    shrinkToFit: true,
    //colAPI: 'RMA_HomeCSMNameList', //set colModel index
    // fixedColFDb: true, //set db
    gridDefinitionUrl: invokeURL + 'Yield_1_6_ItemNo',//web_daily_produce_data_quality_line web_instantly_produce_data_line
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
        $('#ItemNo').val(data.料號);
        //$('#deptInput').trigger("change");
        $('#listModal').modal('hide');

    },
    search: true,
    refresh: true,
    xls: false

},{ //grid初始化參數
  caption: '',
  gid: 'jqGrid2',
  pager: '#jqGrid2Pager',
  shrinkToFit: true,
  gridDefinitionUrl: invokeURL + apiurl+"_2",//apiurl P
  
  colAPI: apiurl+"_2", //set colModel index
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

        // if($('#SHIFT').val().length==0){
        //     alert("請輸入班別");
        //     return;
        // }

        
        var dEnd = $('#eDate').val();
        var dStart = $('#sDate').val();

        console.log('dStart=====> '+dStart);
        console.log('dEnd=====> '+dEnd);


        // if ((dEnd - dStart > 14) || (dEnd - dStart < 0) ){
        //     alert("查詢日期條件:起訖日期錯誤或日期區間超過7天!");
        //     return;
        // }
        createGrid(0);
        createGrid(3);


       


        
        //createGrid(5);
        var date =new Date();
        $("#refreshtime").text("更新時間:"+date);
        $('#showDiv').show();

    });

    $("#WoButton").on('click', function () {

        $('#listModal').modal('show');
        createGrid(1);
    });

    $("#ItemNoButton").on('click', function () {

        $('#listModal').modal('show');
        createGrid(2);
    });
 

    //console.log($("#setRefreshTime").val());
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
    let pa=JSON.stringify({
        "@MF001": $('#Wo').val(),
        "@MF002": $('#ItemNo').val(), 
        "@SDATE":$('#sDate').val(),
        "@EDATE":$('#eDate').val()

        // "WO": $('#WoButton').val().length==0?'all': $('#WoButton').val(),
        // "ItemNo": $('#ItemNoButton').val().length==0?'all': $('#ItemNoButton').val(), 
        // "SDATE":$('#sDate').val().length==0?'all': $('#sDate').val(),
        // "EDATE":$('#eDate').val().length==0?'all': $('#eDate').val()
    });
    console.log("send_data====> "+pa );
    //console.log("send_data====> "+pa );
    switch (id) {
        case 0:
            console.log("url====> "+invokeURL + apiurl);
            options.caption = "月分製令直通率查詢結果";
            options.gridDefPostData =JSON.parse(pa);
            $grid.createJqGrid(options);
            break;
        case 1:
            $grid.createJqGrid(options);
            break;
        case 2:
            $grid.createJqGrid(options);
            break;

        case 3:
            options.caption = "月分製令製程Yield Rate";
            options.gridDefPostData =JSON.parse(pa);
            $grid.createJqGrid(options);
            break;


        case 4:

            $grid.createJqGrid(options);
            break;




            
    }






}



/*---------------------JqGrid Function End--------------*/
/*---------------------Chart Function Start--------------*/
/*---------------------Chart Function End--------------*/
/*---------------------Other Function Start--------------*/

/*---------------------Other Function End--------------*/