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





      

    
});

function frmEvent() { //form event function
    $('#searchBtn1').on('click', function () {
        if($('#sDate').val().length==0){
            alert("Please enter a Production Date");
            return;
        }
        // else if($('#woData').val().length==0){
        //     alert("Please enter a WO");
        //     return;
        // }
        // else if($('#process').val().length==0){
        //     alert("Please enter a process");
        //     return;
        // }


 


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
    switch (id) {
        case 0:
            console.log(
                "SDATE = "+( $('#sDate').val()), 
                "\nWO = "+($('#woData').val()) ,
                "\nPROCE = "+($('#process').val()),
                "\nINOUT = "+( $('#inOut').val())
            );
            options.caption = "生產日報表查詢結果";
            options.gridDefPostData = {
                // SDATE: '20211201',
                // EDATE: '20210101',
                // INOUT:'1'
                // "@SDATE": $('#sDate').val(),
                // "@EDATE": $('#eDate').val(),
                // "@INOUT": $('#in_out').val()inOut

            };
            // let pa=JSON.stringify({
            //     "SDATE": $('#sDate').val().length==0?'all': $('#sDate').val(), 
            //     "EDATE": $('#sDate').val().length==0?'all': $('#sDate').val(), 
            //     "WO": $('#woData').val().length==0?'all': $('#woData').val(),
            //     "PROCE": $('#process').val().length==0?'all': $('#process').val(),
            //     "INOUT": $('#inOut').val().length==0?'all': $('#inOut').val()
            // });
          
            let pa=JSON.stringify({
                "SDATE": $('#sDate').val(), 
                "WO": $('#woData').val(),
                "PROCE": $('#process').val(),
                "INOUT": $('#inOut').val()
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