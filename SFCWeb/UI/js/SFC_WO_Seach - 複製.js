/*---------------------公用變數 Start--------------*/

var lineData = new Array();
var gridRows = new Array();
var gridList = [{ //grid初始化參數
    caption: '',
    gid: 'jqGrid1',
    pager: '#jqGrid1Pager',
    shrinkToFit: true,
    gridDefinitionUrl: invokeURL + 'SFIS_WO_REWORK_LIST',
   // colAPI: 'SFIS_WO_REWORK_LIST', //set colModel index
    fixedColFDb: false, //set db
    gridDefPostData: {},
    search: true,
    refresh: true,
    xls: true,
    onSelectRow: function (id) {

        let wo = gridList[0].caption;
       
        let station1 = $(this).jqGrid('getCell', id-1, 'MG003'); //上一站
        let station2 = $(this).jqGrid('getCell', id, 'MG003'); //目前站
        if(!station1) station1=station2;
        //console.log('wo',wo);
        console.log('id',id);
        console.log('station1',station1);
        console.log('station2',station2);
        gridList[1].caption =station2+"-生產序號";
        //gridList[1].gridDefPostData['MO007'] = wo;
        //gridList[1].gridDefPostData['TA007'] = station2;
         gridList[1].gridDefPostData['WO'] = wo;
        gridList[1].gridDefPostData['TA007B'] = station1;
        gridList[1].gridDefPostData['TA007A'] = station2;
        console.log('posts', gridList[1].gridDefPostData);
        gridList[2].caption =`${station2}-組合列表`;
        gridList[2].gridDefPostData['MO007'] = wo;
        gridList[2].gridDefPostData['TA007'] = station2;
        console.log('posts', gridList[2].gridDefPostData);
        // $('#wipDiv').show();
        createGrid(1);
        createGrid(2);

    }

},
{ //grid初始化參數
    caption: '',
    gid: 'jqGrid2',
    pager: '#jqGrid2Pager',
    shrinkToFit: true,
    gridDefinitionUrl: invokeURL + 'SFIS_WO_STATION_SN_LIST',
    colAPI: 'SFIS_WO_STATION_SN_LIST', //set colModel index
    fixedColFDb: true, //set db
    gridDefPostData: {},
    rownumbers: false,
    //autowidth: false,
    //width:50,
    search: true,
    refresh: true,
    xls: true
    // gridComplete: filterRows

},
{ //grid初始化參數
    caption: '',
    gid: 'jqGrid3',
    pager: '#jqGrid3Pager',
    shrinkToFit: true,
    gridDefinitionUrl: invokeURL + 'SFIS_WO_STATUS_LINK_LIST',
    colAPI: 'SFIS_WO_STATUS_LINK_LIST', //set colModel index
    fixedColFDb: true, //set db
    gridDefPostData: {},
    rownumbers: false,
    //autowidth: false,
    //width:50,
    search: true,
    refresh: true,
    xls: true
    // gridComplete: filterRows

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
            options.caption = $('#woTxt').val();
            options.gridDefPostData = {
                WO: $('#woTxt').val(),
				STATION:$('#stationTxt').val()
            };
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