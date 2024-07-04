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
    
    colAPI: 'Production_1_7', //set colModel index
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
    gridDefinitionUrl: invokeURL + apiurl +'_ItemNo',
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
        $('#itemNo').val(data.料號);
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
    gridDefinitionUrl: invokeURL + apiurl +'_Wo',
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
    gridDefinitionUrl: invokeURL + apiurl+'_Dept',
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

},
{
    //grid初始化參數
    caption: '',
    gid: 'jqGridList',
    pager: '#jqGridListPager',
    shrinkToFit: true,
    //colAPI: 'RMA_HomeCSMNameList', //set colModel index
    // fixedColFDb: true, //set db
    gridDefinitionUrl: invokeURL + apiurl+'_Line',
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

},{ //grid初始化參數
    caption: '',
    gid: 'jqGrid1',
    pager: '#jqGrid1Pager',
    shrinkToFit: true,
    gridDefinitionUrl: invokeURL + apiurl+"_Result",//apiurl
    
    colAPI: 'Production_1_6', //set colModel index
    fixedColFDb: true, //set db
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
    $("#SHIFTY").trigger("change");

   
    
    //refreshdata();


});





function frmEvent() { //form event function
    $('#searchBtn1').on('click', function () {
        var date =new Date();
        $("#refreshtime").text("更新時間:"+date);



        if($("#sDate").val()==''){
            
            alert("請輸入截止日期!");
            return;

        
        }else if($("#OUTDAY").val()==''){

            alert("請輸入大於未結天數!");
            return;
        }


        



        createGrid(0);
        // createGrid(1);


        // createGrid(5);
        $('#wipDiv').show();

    });

   
    $("#SHIFTY").on('change', function () {
        // alert("S");
        
       if($("#SHIFTY").val()=='1'){
            console.log("send_data====> 01");
            $("#woList").prop('disabled', false);
            $("#woListButton").prop('disabled', false);
        

            $("#sDate").prop('disabled', true);
            $("#eDate").prop('disabled', true);
            $("#itemNo").prop('disabled', true);
            $("#itemNoButton").prop('disabled', true);
            
            
            $("#sDate").val("");
            $("#eDate").val("");
            $("#itemNo").val("");
            
            

       }else if($("#SHIFTY").val()=='2'){
            console.log("send_data====> 02");
          
            $("#woList").prop('disabled', true);
            $("#woListButton").prop('disabled', true);
            $("#woList").val("");
        
            $("#sDate").prop('disabled', false);
            $("#eDate").prop('disabled', false);
            $("#itemNo").prop('disabled', false);
            $("#itemNoButton").prop('disabled', false);
            


       }

       
    });

    $("#itemNoButton").on('click', function () {

        $('#listModal').modal('show');
        createGrid(1);
    });

    $("#woListButton").on('click', function () {

        $('#listModal').modal('show');
        createGrid(2);
    });



    $("#deptButton").on('click', function () {

        $('#listModal').modal('show');
        createGrid(3);
    });

    


    $("#lineButton").on('click', function () {

        $('#listModal').modal('show');
        createGrid(4);
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
            options.caption = "未結製令及天數查詢結果";
            options.gridDefPostData = {
                // SDATE: '20211201',
                // EDATE: '20210101',
                // INOUT:'1'
                // "@SDATE": $('#sDate').val(),
                // "@EDATE": $('#eDate').val(),
                // "@INOUT": $('#in_out').val()inOut

            };
            let pa=JSON.stringify({
                
               "OUTDAY": $('#OUTDAY').val(),  
               "SDATE":  $('#sDate').val(),  
                "WO":$('#woList').val(), 
                "ITEMNO":$('#itemNo').val(), 
                "MD004":$('#dept').val(), 
                "MG005":$('#line').val(), 
                "MF018":$('#SHIFTY01').val(), 

            //    "@TYPE": $('#SHIFTY').val(),  
            //    "@WO":  $('#woList').val(),  
            //    "@DATE1":$('#sDate').val(),  
            //    "@DATE2":$('#eDate').val(),  
            //    "@PART": $('#itemNo').val(),  
            //    "@MOTYPE": $('#SHIFTY01').val()  
                
                
            });
            // console.log('inOut = '+$('#inOut').val());
            options.gridDefPostData =JSON.parse(pa);
            $grid.createJqGrid(options);
            break;
        case 1:


            // options.caption = "序號還在此製程";
            // options.gridDefPostData = {
                
            // };
            // let pa1=JSON.stringify({
                
            //     "MO009": $('#processList').val().length==0?'': $('#processList').val(),
            //     "MO007": $('#woList').val().length==0?'': $('#woList').val()
                
                
            // });
            // options.gridDefPostData =JSON.parse(pa1);


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