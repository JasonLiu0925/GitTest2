/*---------------------公用變數 Start--------------*/
var apiurl = getUrlVars()['type'];
var lineData = new Array();
var gridRows = new Array();
var gridList = [{ //grid初始化參數
    caption: '',
    gid: 'jqGrid1',
    pager: '#jqGrid1Pager',
    shrinkToFit: true,
    gridDefinitionUrl: invokeURL + apiurl,//apiurl P
    
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
    // fixedColFDb: true, //set db
    gridDefinitionUrl: invokeURL + 'Production_1_4_ItemNo',//  web_instantly_produce_data_dept
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
        $('#itemNo').val(data.料號);//要放欄位名!!!
        //$('#deptInput').trigger("change");
        $('#listModal').modal('hide');

    },
    search: false,
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

   
    

});





function frmEvent() { //form event function
    $('#searchBtn1').on('click', function () {

        // if($('#SHIFT').val().length==0){
        //     alert("請輸入班別");
        //     return;
        // }

        

        createGrid(0);
       


        
        //createGrid(5);
        var date =new Date();
        $("#refreshtime").text("更新時間:"+date+SHIFTY);
        $('#showDiv').show();

    });

    $("#itemNoButton").on('click', function () {

        $('#listModal').modal('show');
        createGrid(1);
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




function refreshdata(){
    var date =new Date();
    
    $("#refreshtime").text("更新時間:"+date);

    $('#searchBtn1').trigger("click");



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


   

    //console.log("send_data====> "+pa );
    switch (id) {
        case 0:
            console.log("url====> "+invokeURL + apiurl);
            options.caption = "查詢結果";
            var date = new Date().format('yyyyMMdd');
            let pa=JSON.stringify({
                "MF002": $('#itemNo').val().length==0?'': $('#itemNo').val(),
                "MO011": $('#SHIFTY').val()
            });
            // console.log("send_data====> "+pa );
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


            

            
            options.gridDefPostData =JSON.parse(pa);


            $grid.createJqGrid(options);
            break;

        case 6:
            
            

            

           
            options.gridDefPostData =JSON.parse(pa);
            $grid.createJqGrid(options);
            break;

            
    }






}



/*---------------------JqGrid Function End--------------*/
/*---------------------Chart Function Start--------------*/
/*---------------------Chart Function End--------------*/
/*---------------------Other Function Start--------------*/

/*---------------------Other Function End--------------*/