/*---------------------公用變數 Start--------------*/
var apiurl = getUrlVars()['type'];
var lineData = new Array();
var gridRows = new Array();
var gridList = [{ //grid初始化參數
    caption: '',
    gid: 'jqGrid1',
    pager: '#jqGrid1Pager',
    shrinkToFit: false,
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
    gridDefinitionUrl: invokeURL + 'Yield_1_4_WO',//  web_instantly_produce_data_dept
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
        $('#deptInput').val(data.生產序號);//要放欄位名!!!
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

   
    
   // refreshdata();


});





function frmEvent() { //form event function
    $('#searchBtn1').on('click', function () {



        createGrid(0);



        
        //createGrid(5);
        var date =new Date();
        $("#refreshtime").text("Update time:"+date);
        $('#showDiv').show();

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


   
    options.caption = "produce history results";
    var date = new Date().format('yyyyMMdd');
    let pa=JSON.stringify({
        "SN": $('#deptInput').val().length==0?'all': $('#deptInput').val()
    });
    console.log("send_data====> "+pa );
    //console.log("send_data====> "+pa );
    switch (id) {
        case 0:
            console.log("url====> "+invokeURL + apiurl);

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




            
    }






}



/*---------------------JqGrid Function End--------------*/
/*---------------------Chart Function Start--------------*/
/*---------------------Chart Function End--------------*/
/*---------------------Other Function Start--------------*/

/*---------------------Other Function End--------------*/