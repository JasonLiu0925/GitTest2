/*---------------------公用變數 Start--------------*/
var apiurl = getUrlVars()['type'];
var lineData = new Array();
var gridRows = new Array();
var gridList = [{ //grid初始化參數
    caption: '',
    gid: 'jqGrid1',
    pager: '#jqGrid1Pager',
    shrinkToFit: true,
    gridDefinitionUrl: invokeURL + apiurl,
    colAPI: apiurl, //set colModel index
    fixedColFDb: true, //set db
    gridDefPostData: {},
    search: true,
    refresh: true,
    xls: true,
    onSelectRow: function (id) {

        let wo = gridList[0].caption;
        let station = $(this).jqGrid('getCell', id, 'MF001');
        // console.log('wo',wo);
        // console.log('station',station);
        gridList[2].caption ="最新的站點";
        gridList[2].gridDefPostData['WO'] = $('#worknum').val();
        // console.log('posts', gridList[1].gridDefPostData);

 
        createGrid(2);

    }

},
{ //grid初始化參數
    caption: '',
    gid: 'jqGrid2',
    pager: '#jqGrid2Pager',
    shrinkToFit: false,
    gridDefinitionUrl: invokeURL + apiurl + '_2',//'_2' 是新版的 待修數有分開 '_1' 是原版的 
    colAPI: apiurl+ '_2', //set colModel index
    fixedColFDb: true, //set db
    gridDefPostData: {},
    rownumbers: false,
    //autowidth: false,
    //width:50,
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
        
        // console.log('iRow',iRow);
        // console.log('iCol',iCol);

        if(iCol==7){//完成數的欄位(index)
            let grid = $("#" + gridList[1].gid);

            // console.log('test',$.trim(grid.getRowData()[iRow - 1]["加工順序"]));
    
            
            console.log('grid',grid);//jqGrid2
            console.log('MG002',$.trim(grid.getRowData()[curRowNum-1]["MG002"])); //取得加工順序
            gridList[3].gridDefPostData['TA006'] = $.trim(grid.getRowData()[curRowNum-1]["MG002"]);
            gridList[3].gridDefPostData['TA005'] = $('#worknum').val(); 
            createGrid(3);
        }

   }
    // gridComplete: filterRows

},
{ //grid初始化參數
    caption: '',
    gid: 'jqGrid3',
    pager: '#jqGrid3Pager',
    shrinkToFit: true,
    gridDefinitionUrl: invokeURL + apiurl + '_3',
    colAPI: apiurl+ '_3',
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
    gid: 'jqGrid4',
    pager: '#jqGrid4Pager',
    shrinkToFit: false,
    gridDefinitionUrl: invokeURL + apiurl + '_4',
    colAPI: apiurl+ '_4',
    fixedColFDb: true, //set db
    gridDefPostData: {
        'TA006':''

        
    },
    rownumbers: false,
    //autowidth: false,
    //width:50,
    search: true,
    refresh: true,
    xls: true

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
        createGrid(1);
        createGrid(2);
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
            /** */
            options.caption = "查詢結果";
            let pa=JSON.stringify({
                "WO": $('#worknum').val()
            });
            // console.log('inOut = '+$('#inOut').val());
            options.gridDefPostData =JSON.parse(pa);
            $grid.createJqGrid(options);
            break;
        case 1:

            gridList[1].caption ="製令圖程"; 

            let pa1=JSON.stringify({
                "WO": $('#worknum').val()
            });
            options.gridDefPostData =JSON.parse(pa1);
            $grid.createJqGrid(options);
            break;
        case 2:

            gridList[2].caption ="序號的最新的站點"; 

            let pa2=JSON.stringify({
                "WO": $('#worknum').val()
            });
            options.gridDefPostData =JSON.parse(pa2);
            $grid.createJqGrid(options);
            break;

        case 3:

            gridList[3].caption ="完成數(含配件包)"; 

            // let pa3=JSON.stringify({
            //     "TA005": $('#worknum').val()
                
            // });
            // options.gridDefPostData =JSON.parse(pa3);
            $grid.createJqGrid(options);
            break;
    }






}



/*---------------------JqGrid Function End--------------*/
/*---------------------Chart Function Start--------------*/
/*---------------------Chart Function End--------------*/
/*---------------------Other Function Start--------------*/

/*---------------------Other Function End--------------*/