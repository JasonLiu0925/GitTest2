/*---------------------公用變數 Start--------------*/

var lineData = new Array();
var gridRows = new Array();
var gridList = [{ //grid初始化參數
    caption: '',
    gid: 'jqGrid1',
    pager: '#jqGrid1Pager',
    shrinkToFit: true,
    gridDefinitionUrl: invokeURL + 'web_sign_in_out_data',
    //colAPI: 'web_sign_in_out_data', //set colModel index
    //fixedColFDb: true, //set db
    gridDefPostData: {
    },
    search: true,
    refresh: true,
    xls: true,

}

];
/*---------------------公用變數 End--------------*/
/*---------------------UI event Function Start--------------*/
$(document).ready(function () { //form load function
    loginCheck(); //登入檢查
    //Load menu
    $.get("Top.html", function (data) {
        $("#menu").html(data);
    });
    //Load Bottom
    $.get("Bottom.html", function (data) {
        $("#bottom").html(data);
    });
    initFrm();
    /*let pa=JSON.stringify({
        "@SDATE": "20210101",
        "@EDATE": "20211201",
        "@INOUT":"1"
   });
     let result = ajaxGetData(invokeURL + 'sign_in_out_data', JSON.parse(pa)); 
     console.log('pa',JSON.parse(pa));
    console.log('result',result);*/
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
            options.caption = "簽入簽出資料";
            options.gridDefPostData = {
                // SDATE: '20211201',
                // EDATE: '20210101',
                // INOUT:'1'
                // "@SDATE": $('#sDate').val(),
                // "@EDATE": $('#eDate').val(),
                // "@INOUT": $('#in_out').val()

            };
            let pa=JSON.stringify({
                "SDATE": $('#sDate').val(),
                "EDATE": $('#eDate').val()
            });
            options.gridDefPostData =JSON.parse(pa);
            $grid.createJqGrid(options);
            break;
        case 1:
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