/*---------------------公用變數 Start--------------*/
var apiurl = getUrlVars()['type'];
var lineData = new Array();
var gridRows = new Array();
var sn="";
var gridList = [{ //grid初始化參數
    caption: '',
    gid: 'jqGrid1',
    pager: '#jqGrid1Pager',
    shrinkToFit: true,
    gridDefinitionUrl: invokeURL + apiurl,//apiurl P
    
    colAPI: apiurl, //set colModel index
    fixedColFDb: false, //set db
    gridDefPostData: {

        
    },
    search: true,
    refresh: true,
    xls: true,

},{ //grid初始化參數
    caption: '',
    gid: 'jqGrid1',
    pager: '#jqGrid1Pager',
    shrinkToFit: true,
    gridDefinitionUrl: invokeURL + apiurl+'B',//apiurl P
    
    colAPI: apiurl, //set colModel index
    fixedColFDb: false, //set db
    gridDefPostData: {

        
    },
    search: true,
    refresh: true,
    xls: true,

},{ //grid初始化參數
    //grid初始化參數
    caption: '',
    gid: 'jqGridList',
    pager: '#jqGridListPager',
    shrinkToFit: true,
    //colAPI: 'RMA_HomeCSMNameList', //set colModel index
    // fixedColFDb: true, //set db
    gridDefinitionUrl: invokeURL + 'workorder',
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
        $('#WO').val(data.製令單號);
        //$('#deptInput').trigger("change");
        $('#listModal').modal('hide');

    },
    search: true,
    refresh: true,
    xls: false


},{ //grid初始化參數
    //grid初始化參數
    caption: '',
    gid: 'jqGridList',
    pager: '#jqGridListPager',
    shrinkToFit: true,
    //colAPI: 'RMA_HomeCSMNameList', //set colModel index
    // fixedColFDb: true, //set db
    gridDefinitionUrl: invokeURL + 'sku',
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
        $('#SKU').val(data.料號);
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
     
     


});


    // 點擊頁籤時顯示對應的內容
    function openTab(evt, tabName) {
        console.log('openTab='+tabName);


        $('#WO').val('');
        $('#SKU').val('');
        $('#SKU').val('');
        $('#SN').val('');
        $('#sDate').val('');
        $('#eDate').val('');




        var i, tabcontent, tablinks;
        tabcontent = document.getElementsByClassName("tabcontent");
        for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
        }
        tablinks = document.getElementsByClassName("tablinks");
        for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
        }
        evt.preventDefault();
        // document.getElementById("myButton").addEventListener("click", function(event) {
        //     event.preventDefault();
        //     // 在這裡添加點擊按鈕後要執行的程式碼
        // });

        document.getElementById(tabName).style.display = "flex";
        evt.currentTarget.className += " active";
    }


    



    











function frmEvent() { //form event function


    $('#searchBtn1').on('click', function () {

        // if($('#SHIFTY').val()==1){
        //     createGrid(0);
        // }else if($('#SHIFTY').val()==2){
        //     createGrid(1);
        // }

        
        createGrid(0);
        var date =new Date();
        $("#refreshtime").text("Update time:"+date);
        $('#showDiv').show();

    });


    $('#workorder').on('click',function (){
        $('#listModal').modal('show');
        createGrid(2);
    });

    $('#sku').on('click',function (){
        $('#listModal').modal('show');
        createGrid(3);
    });




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
    $('#showDiv').hide();

    $('#listModal').modal('hide');

    // 預設開啟第一個頁籤
    // document.getElementById("Tab1").click();
    $("#Tab1").trigger("click");


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


   
    options.caption = "查詢結果";
    var date = new Date().format('yyyyMMdd');
     
    //console.log("send_data====> "+pa );
    switch (id) {
        case 0:
            let pa=JSON.stringify({
                "WO": $('#WO').val().length==0?'':$('#WO').val(),
                "PART": $('#SKU').val().length==0?'':$('#SKU').val(),
                "DC": $('#Datecode').val().length==0?'':$('#Datecode').val(),
                "SN": $('#SN').val().length==0?'':$('#SN').val(),
                "SDATE": $('#sDate').val().length==0?'':$('#sDate').val(),
                "EDATE": $('#eDate').val().length==0?'':$('#eDate').val()


            });

            // console.log("url====> "+invokeURL + apiurl);

            options.gridDefPostData =JSON.parse(pa);
            $grid.createJqGrid(options);
            break;
        case 1:
            let pa1=JSON.stringify({
                "WO": $('#WO').val(),
                "PART": $('#SKU').val()
            });

            // console.log("url====> "+invokeURL + apiurl);
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

            default:

            break;
            
    }






}



/*---------------------JqGrid Function End--------------*/
/*---------------------Chart Function Start--------------*/
/*---------------------Chart Function End--------------*/
/*---------------------Other Function Start--------------*/

/*---------------------Other Function End--------------*/