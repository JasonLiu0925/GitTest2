/*---------------------公用變數 Start--------------*/
var apiurl = getUrlVars()['type'];
var lineData = new Array();
var gridRows = new Array();
var gridList = [{ //grid初始化參數
    caption: '出貨確認後的資料',
    gid: 'jqGrid1',
    pager: '#jqGrid1Pager',
    shrinkToFit: true,
    gridDefinitionUrl: invokeURL + 'Shipping_1_1',//apiurl P
    
    colAPI: 'Shipping_1_1' , //set colModel index  apiurl
    fixedColFDb: true, //set db
    gridDefPostData: {

        
    },
    search: true,
    refresh: true,
    xls: true,

},{ //grid初始化參數
    caption: '撿料後的資料',
    gid: 'jqGrid1',
    pager: '#jqGrid1Pager',
    shrinkToFit: true,
    gridDefinitionUrl: invokeURL + 'Shipping_1_1B',//apiurl P
    
    // colAPI: 'Shipping_1_1B' , //set colModel index  apiurl
    // fixedColFDb: true, //set db
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
    
    isShowInOut(apiurl);

   
    
   // refreshdata();


});





function frmEvent() { //form event function
    $('#searchBtn1').on('click', function () {

        // if($('#SHIFT').val().length==0){
        //     alert("請輸入班別");
        //     return;
        // }

        
        var dEnd = $('#eDate').val();
        var dStart = $('#sDate').val();
        var cust = $('#cust').val();
        

        console.log('dStart=====> '+dStart);
        console.log('dEnd=====> '+dEnd);


        if (dEnd.length==0 || dStart.length==0 ||cust.length==0 ){
            alert("Plz input data!");
            return;
        }

        if($('#condition').val()=='1'){
            createGrid(0);

        }else if($('#condition').val()=='2'){
            createGrid(1);

        }



       


        
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
    $("#CustButton").on('click', function () {

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


   
    // options.caption = "Meraki 出貨資料查詢結果";
    var date = new Date().format('yyyyMMdd');
    var pa=null;
    
    console.log("apiurl====> "+apiurl );

    if(apiurl == 'Shipping_1_1' || apiurl == 'Shipping_1_1B'){
        // options.caption = "Meraki 出貨資料查詢結果";


        pa=JSON.stringify({
            
                "CUST": $('#cust').val().length==0?'all': $('#cust').val(),
                "SDATE":$('#sDate').val().length==0?'all': $('#sDate').val(),
                "EDATE":$('#eDate').val().length==0?'all': $('#eDate').val()
            });


    }
 
    console.log("send_data====> "+pa );
    console.log("url====> "+invokeURL + apiurl);
    //console.log("send_data====> "+pa );
    switch (id) {
        case 0:

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