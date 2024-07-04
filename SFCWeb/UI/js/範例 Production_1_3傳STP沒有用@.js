/*---------------------公用變數 Start--------------*/
var apiurl = getUrlVars()['type'];
var lineData = new Array();
var gridRows = new Array();
var gridList = [{ //grid初始化參數
    caption: '',
    gid: 'jqGrid1',
    pager: '#jqGrid1Pager',
    shrinkToFit: true,
    gridDefinitionUrl: invokeURL + apiurl,//apiurl
    
    colAPI: apiurl, //set colModel index
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
    shrinkToFit: true,
    //colAPI: 'RMA_HomeCSMNameList', //set colModel index
    fixedColFDb: false, //set db
    gridDefinitionUrl: invokeURL + 'web_daily_produce_report_dept',
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
        $('#deptInput').val(data.部門代號);//要放欄位名!!!
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
    fixedColFDb: false, //set db
    gridDefinitionUrl: invokeURL + 'web_daily_produce_report_line',
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
        $('#lineList').val(data.生產線代號);
        //$('#deptInput').trigger("change");
        $('#listModal').modal('hide');

    },
    search: true,
    refresh: true,
    xls: false

},{
    //grid初始化參數
    caption: '',
    gid: 'jqGridList',
    pager: '#jqGridListPager',
    shrinkToFit: true,
    //colAPI: 'RMA_HomeCSMNameList', //set colModel index
    fixedColFDb: true, //set db
    gridDefinitionUrl: invokeURL + 'web_daily_produce_report_process',
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
        $('#processList').val(data.製程代號);
        //$('#deptInput').trigger("change");
        $('#listModal').modal('hide');

    },
    search: true,
    refresh: true,
    xls: false

},{
    //grid初始化參數
    caption: '',
    gid: 'jqGridList',
    pager: '#jqGridListPager',
    shrinkToFit: true,
    //colAPI: 'RMA_HomeCSMNameList', //set colModel index
    fixedColFDb: true, //set db
    gridDefinitionUrl: invokeURL + 'web_instantly_produce_data_wo',
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
        $('#woList').val(data.製令單號);
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
    gridDefinitionUrl: invokeURL + apiurl+"_1",//apiurl
    
    colAPI: apiurl, //set colModel index
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

    refreshdata();


});





function frmEvent() { //form event function
    $('#searchBtn1').on('click', function () {
        var date =new Date();
        $("#refreshtime").text("update time:"+date);
        createGrid(0);
        createGrid(5);
        $('#wipDiv').show();

    });

    $("#deptListButton").on('click', function () {

        $('#listModal').modal('show');
        createGrid(1);
    });

    $("#lineListButton").on('click', function () {

        $('#listModal').modal('show');
        createGrid(2);
    });
    // $("#processListButton").on('click', function () {

    //     $('#listModal').modal('show');
    //     createGrid(3);
    // });
    
    // $("#woListButton").on('click', function () {

    //     $('#listModal').modal('show');
    //     createGrid(4);
    // });

    // setInterval("refreshdata()",$("#setRefreshTime").val()*1000*60);
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




function refreshdata(){
    var date =new Date();
    
    $("#refreshtime").text("更新時間:"+date);

    $('#searchBtn1').trigger("click");



}




/*---------------------UI event Function Start--------------*/
/*---------------------Form Function Start--------------*/
function initFrm() { //init form
    $('#wipDiv').hide();

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
    switch (id) {
        case 0:
            console.log("url====> "+invokeURL + apiurl);
            var date = new Date().format('yyyyMMdd');
            
            console.log("send_data====> "+ 
            "\nDEPT=>"+ ($('#deptInput').val().length==0?'': $('#deptInput').val())+
            "\nLINE=>"+ ($('#lineList').val().length==0?'': $('#lineList').val())+
            "\nSHIFT=>"+ ($('#showcount').val())+
            "\nSDATE=>"+($('#SDATE').val())+
            "\nEDATE=>"+($('#EDATE').val())
            );
            options.caption = "Daily produce report";
            options.gridDefPostData = {
                // SDATE: '20211201',
                // EDATE: '20210101',
                // INOUT:'1'
                // "@SDATE": $('#sDate').val(),
                // "@EDATE": $('#eDate').val(),
                // "@INOUT": $('#in_out').val()inOut

            };
            let pa=JSON.stringify({
                
                "DEPT": $('#deptInput').val().length==0?'': $('#deptInput').val(),
                "LINE": $('#lineList').val().length==0?'': $('#lineList').val(),
                // "PROCESS": $('#processList').val().length==0?'': $('#processList').val(),
                // "WO": $('#woList').val().length==0?'': $('#woList').val(),
                // "PART": $('#pnumList').val().length==0?'': $('#pnumList').val(),
                //"DATE": $('#showdatatype').val(),
                // "SHOW": $('#showdatatype').val(),
                "SHIFT": $('#showcount').val(),
                "START":$('#sDate').val().length==0?date: $('#sDate').val(),
                "EDATE":$('#eDate').val().length==0?date: $('#eDate').val(),
                "END":$('#eDate').val().length==0?date: $('#eDate').val()
                
            });
            // console.log('inOut = '+$('#inOut').val());
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

            
    }






}



/*---------------------JqGrid Function End--------------*/
/*---------------------Chart Function Start--------------*/
/*---------------------Chart Function End--------------*/
/*---------------------Other Function Start--------------*/

/*---------------------Other Function End--------------*/