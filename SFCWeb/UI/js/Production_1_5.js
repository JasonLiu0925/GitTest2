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
    
    colAPI: 'Production_1_5', //set colModel index
    fixedColFDb: true, //set db
    gridDefPostData: {

        
    },
    search: true,
    refresh: true,
    xls: true,

},{
    //grid初始化參數
    caption: '',
    gid: 'jqGrid2',
    pager: '#jqGrid2Pager',
    shrinkToFit: true,
    colAPI: 'Production_1_5_SN', //set colModel index
    fixedColFDb: true, //set db
    gridDefinitionUrl: invokeURL + apiurl +'_SN',
    //gridDefColionUrl: 'json/unSchedule.json',
    gridDefPostData: {

    },
    search: true,
    refresh: true,
    xls: true

},{
    //grid初始化參數
    caption: '',
    gid: 'jqGridList',
    pager: '#jqGridListPager',
    shrinkToFit: true,
    //colAPI: 'RMA_HomeCSMNameList', //set colModel index
    // fixedColFDb: true, //set db
    gridDefinitionUrl: invokeURL + apiurl +'_wo',
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

},{
    //grid初始化參數
    caption: '',
    gid: 'jqGridList',
    pager: '#jqGridListPager',
    shrinkToFit: true,
    //colAPI: 'RMA_HomeCSMNameList', //set colModel index
    // fixedColFDb: true, //set db
    gridDefinitionUrl: invokeURL + apiurl+'_process',
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
    
    isShowInOut(apiurl);

   
    
    //refreshdata();


});





function frmEvent() { //form event function
    $('#searchBtn1').on('click', function () {
        var date =new Date();
        $("#refreshtime").text("更新時間:"+date);


        
        if($('#woList').val().length==0||$('#processList').val().length==0){
        // if($('#woList').val().length==0){
            alert("需輸入製令單號及製程!(Must inpnt WO and Process!!)");
            return;
        }



        createGrid(0);
        createGrid(1);


        // createGrid(5);
        $('#wipDiv').show();

    });

    
    $("#woListButton").on('click', function () {

        $('#listModal').modal('show');
        createGrid(2);
    });

    $("#processListButton").on('click', function () {

        $('#listModal').modal('show');
        createGrid(3);
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
    $('#wipDiv').hide();

    $('#listModal').modal('hide');




    frmEvent();
}


function isShowInOut(id){

    switch(id){
        case 'web_sign_in_out_data':
            $('#inOutDiv').show();
            break;
        case 'web_wip_data':
            $('#sDateDiv').hide();
            $('#eDateDiv').hide();
            $('#inOutDiv').hide();
            break;
        case 'web_maintain_data':
            $('#inOutDiv').hide();
            break;
        case 'web_instantly_produce_data':

            $('#sDateDiv').hide();
            $('#eDateDiv').hide();
            break;

        default:

            break;


    }


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
            // console.log("url====> "+invokeURL + apiurl);
            // var date = new Date().format('yyyyMMdd');
            
            console.log("send_data====> "+ 
            "\nMO009 = "+ $('#processList').val()+
            "\nMO007 = "+ $('#woList').val()
            );
            options.caption = "製程數量";
            options.gridDefPostData = {
                // SDATE: '20211201',
                // EDATE: '20210101',
                // INOUT:'1'
                // "@SDATE": $('#sDate').val(),
                // "@EDATE": $('#eDate').val(),
                // "@INOUT": $('#in_out').val()inOut

            };
            let pa=JSON.stringify({
                
                // "DEPT": $('#deptInput').val().length==0?'': $('#deptInput').val(),
                // "LINE": $('#lineList').val().length==0?'': $('#lineList').val(),
                "MO009": $('#processList').val().length==0?'': $('#processList').val(),
                "MO007": $('#woList').val().length==0?'': $('#woList').val()
                // "PART": $('#pnumList').val().length==0?'': $('#pnumList').val(),
                // //"DATE": $('#showdatatype').val(),
                // "SHOW": $('#showdatatype').val(),
                // "SHOW2": $('#showcount').val(),
                // "SDATE":$('#sDate').val().length==0?date: $('#sDate').val(),
                // "EDATE":$('#eDate').val().length==0?date: $('#eDate').val()
                
            });
            // console.log('inOut = '+$('#inOut').val());
            options.gridDefPostData =JSON.parse(pa);
            $grid.createJqGrid(options);
            break;
        case 1:


            options.caption = "序號還在此製程";
            options.gridDefPostData = {
                
            };
            let pa1=JSON.stringify({
                
                "MO009": $('#processList').val().length==0?'': $('#processList').val(),
                "MO007": $('#woList').val().length==0?'': $('#woList').val()
                
                
            });
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

            
    }






}



/*---------------------JqGrid Function End--------------*/
/*---------------------Chart Function Start--------------*/
/*---------------------Chart Function End--------------*/
/*---------------------Other Function Start--------------*/

/*---------------------Other Function End--------------*/