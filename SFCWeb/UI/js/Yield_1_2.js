/*---------------------公用變數 Start--------------*/
var apiurl = getUrlVars()['type'];
var lineData = new Array();
var gridRows = new Array();
var gridList = [{ //grid初始化參數
    caption: '',
    gid: 'jqGrid1',
    pager: '#jqGrid1Pager',
    shrinkToFit: false,
    gridDefinitionUrl: invokeURL + apiurl,
    colAPI: apiurl, //set colModel index
    fixedColFDb: true, //set db
    gridDefPostData: {},
    search: true,
    refresh: true,
    xls: true,

}];
/*---------------------公用變數 End--------------*/
/*---------------------UI event Function Start--------------*/
$(document).ready(function () { //form load function

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
    
    // $('#sDate').datetimepicker({
    //     date:null, //一開始輸入框的日期為空
    //     format: 'YYYYMMDD', //日期的顯示格式
    //     locale: moment.locale('zh-tw'), //國別
    //     // daysOfWeekDisabled: [0, 6], //隱藏的天數0為周日6為星期六
    //     // minDate: moment().add(1,'days'), //顯示最小天數
    //     // maxDate: moment().add(30,'days'), //顯示最大天數，30為最大的顯示範圍為一個月為限
    //     // disabledDates:
    //     // [ //隱藏的日期
    //     //   moment().add(1,'days'), //前一日
    //     //   moment().add(2,'days'), //前二日
    //     //         '2021-10-10', //特別日期
    //     //         '2021-12-25'
    //     // ]
    //   });


    //   $('#eDate').datetimepicker({
    //     date:null, //一開始輸入框的日期為空
    //     format: 'YYYYMMDD', //日期的顯示格式
    //     locale: moment.locale('zh-tw'), //國別
    //     // daysOfWeekDisabled: [0, 6], //隱藏的天數0為周日6為星期六
    //     // minDate: moment().add(1,'days'), //顯示最小天數
    //     // maxDate: moment().add(30,'days'), //顯示最大天數，30為最大的顯示範圍為一個月為限
    //     // disabledDates:
    //     // [ //隱藏的日期
    //     //   moment().add(1,'days'), //前一日
    //     //   moment().add(2,'days'), //前二日
    //     //         '2021-10-10', //特別日期
    //     //         '2021-12-25'
    //     // ]
    //   });


      

    
});

function frmEvent() { //form event function
    $('#searchBtn1').on('click', function () {






            createGrid(0);


        
        $('#wipDiv').show();
    });
}


/*---------------------UI event Function Start--------------*/
/*---------------------Form Function Start--------------*/
function initFrm() { //init form
    $('#wipDiv').hide();
    frmEvent();
}

var station='';
function isShowInOut(id){

    switch(id){
        case 'web_sign_in_out_data':
            station='簽出入';
            $('#inOutDiv').show();
            break;
        case 'web_wip_data':
            station='WIP';
            $('#sDateDiv').hide();
            $('#eDateDiv').hide();
            $('#inOutDiv').hide();
            break;
        case 'web_daily_prepare_maintain_data': 
            station='每日待修明細';
            $('#sDateDiv').hide();
            $('#eDateDiv').hide();
            $('#inOutDiv').hide();
            break;
        case 'web_maintain_data':
            station='維修';
            $('#inOutDiv').hide();
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

    options.caption = station+"查詢結果";
    let pa=JSON.stringify({
        "SDATE": $('#sDate').val(),
        "EDATE": $('#eDate').val(),
        "INOUT": $('#inOut').val()
    });


    switch (id) {
        case 0:
            
            options.gridDefPostData = {
                // SDATE: '20211201',
                // EDATE: '20210101',
                // INOUT:'1'
                // "@SDATE": $('#sDate').val(),
                // "@EDATE": $('#eDate').val(),
                // "@INOUT": $('#in_out').val()inOut

            };
           
            // console.log('inOut = '+$('#inOut').val());
            options.gridDefPostData =JSON.parse(pa);
            $grid.createJqGrid(options);
            break;
        case 1:
            options.gridDefPostData =JSON.parse(pa);
            $grid.createJqGrid(options);
            break;
        case 2:
            $grid.createJqGrid(options);
            break;
    }






}



/*---------------------JqGrid Function End--------------*/
/*---------------------Chart Function Start--------------*/
/*---------------------Chart Function End--------------*/
/*---------------------Other Function Start--------------*/

/*---------------------Other Function End--------------*/