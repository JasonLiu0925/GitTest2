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
    
    //colAPI: 'web_sign_in_out_data', //set colModel index
    //fixedColFDb: true, //set db
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
    fixedColFDb: true, //set db
    gridDefinitionUrl: invokeURL + 'web_instantly_produce_data_dept',
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
        $('#deptInput').val(data.部門代號);//要放欄位名!!!
        //$('#deptInput').trigger("change");
        $('#listModal').modal('hide');

    },
    search: false,
    refresh: true,
    xls: false

},{
    //grid初始化參數
    caption: '',
    gid: 'jqGridList',
    pager: '#jqGridListPager',
    shrinkToFit: true,
    //colAPI: 'RMA_HomeCSMNameList', //set colModel index
    fixedColFDb: true, //set db
    gridDefinitionUrl: invokeURL + 'web_instantly_produce_data_line',
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
        $('#lineList').val(data.生產線代號);
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
    fixedColFDb: true, //set db
    gridDefinitionUrl: invokeURL + 'web_instantly_produce_data_process',
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

},{
    //grid初始化參數
    caption: '',
    gid: 'jqGridList',
    pager: '#jqGridListPager',
    shrinkToFit: true,
    //colAPI: 'RMA_HomeCSMNameList', //set colModel index
    fixedColFDb: true, //set db
    gridDefinitionUrl: invokeURL + 'web_instantly_produce_data_wo',
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

},{ //grid初始化參數
    caption: '',
    gid: 'jqGrid1',
    pager: '#jqGrid1Pager',
    shrinkToFit: true,
    gridDefinitionUrl: invokeURL + apiurl+"1",//apiurl
    
    //colAPI: 'web_sign_in_out_data', //set colModel index
    //fixedColFDb: true, //set db
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

   
    
    refreshdata();


});





function frmEvent() { //form event function
    $('#searchBtn1').on('click', function () {
        var date =new Date();
        $("#refreshtime").text("更新時間:"+date);
        createGrid(0);
        createGrid(5);
        $('#wipDiv').show();

    });

    $("#deptListButton").on('click', function () {

        $('#listModal').modal('show');
        createGrid(1);
    });

    $("#lineListButton").on('click', function () {

        $('#listModal').modal('show');
        createGrid(2);
    });
    $("#processListButton").on('click', function () {

        $('#listModal').modal('show');
        createGrid(3);
    });
    
    $("#woListButton").on('click', function () {

        $('#listModal').modal('show');
        createGrid(4);
    });

    setInterval("refreshdata()",$("#setRefreshTime").val()*1000*60);
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
    // let modifyOption = {
    //     multiselect: true,
    //     // multiboxonly:true,
    //     add: true,
    //     addOption: {
    //         addurl: invokeURL + "RMA_FormBodyInsert",
    //         result: {
    //             name: 'MESSAGE',
    //             value: 'ok'
    //         },
    //         beforeShowForm: function (formid) {

    //             $(formid[0].RMA012).val('10');

    //         },
    //         serializeEditData: function (postData) {
    //             let result;
    //             if ((postData["BID"] == '' || postData["BID"] == null) && (postData["BID"] == '' || postData["BID"] == null)) {
    //                 result = ajaxGetData(invokeURL + 'RMA_Link_DB3_Single_BID_MAC_SELECT', {
    //                     SN: postData["SKU004"]
    //                 });
    //                 if (result[0].result == undefined) {
    //                     postData["MAC"] = result[0].MAC;
    //                     postData["BID"] = result[0].A003;
    //                     $.each(result, function (index, value) {
    //                         let RMA_BID_INSERT = ajaxGetData(invokeURL + 'RMA_BID_INSERT', {
    //                             SKU004: value.A002,
    //                             BID: value.A003
    //                         });
    //                         console.log('RMA_BID_INSERT', RMA_BID_INSERT);
    //                     });
    //                 }
    //             }
    //             let lrmaData = LastRMA(postData["RMA001"], postData["BID"]);
    //             postData["LRMA001"] = lrmaData.LRMA001;
    //             postData["OSKU004"] = lrmaData.OSKU004;
    //             postData["FSKU004"] = lrmaData.FSKU004;
    //             postData["station"] = 'RMA_FormBodyInsCHK';
    //             //postData['CSM001'] = csm001;

    //             console.log('dbgridpostData:', postData);
    //             return JSON.stringify(postData);
    //         },
    //         afterComplete: function (response, postdata, formid) {
    //             createGrid(0);
    //         }


    //     },
    //     editOption: {
    //         editurl: invokeURL + "RMA_FormBodyUpdate",

    //         beforeShowForm: function (formid) {

    //             $(formid[0].SKU004).attr('disabled', true);
    //             if ($(formid[0].RMA012).val() == '') {
    //                 $(formid[0].RMA012).val('10');
    //             }

    //         }

    //     },
    //     delOption: {
    //         delurl: invokeURL + "RMA_CSMFormDetailDelete",
    //         afterSubmit: function (response, postdata) {
    //             let msg = [];
    //             let url = $(this).getGridParam('delOption').delurl;
    //             let ids = $(this).getGridParam("selarrrow");
    //             for (let i = 0; i < ids.length; i++) {
    //                 let row = $(this).jqGrid('getRowData', ids[i]);
    //                 let postData = {
    //                     OLD_RMA001: row.RMA001,
    //                     OLD_SKU004: row.SKU004
    //                 };
    //                 let result = ajaxGetData(url, postData);
    //                 if (result[0]["result"] != "ok") {
    //                     msg.push({
    //                             SKU004: postData['OLD_SKU004']
    //                         }

    //                     )
    //                 }
    //             }

    //             $(this).refreshGrid();
    //             return [true, "OK", "Delete a completed data!"];

    //             /* if (msg.length > 0) {
    //                  return [false, msg];

    //              } else {
    //                  return [true, "OK", "Delete a completed data!"];

    //              }*/


    //         },
    //         afterComplete: function (response, postdata, formid) {
    //             createGrid(0);
    //         }
    //     },
    //     edit: true,
    //     del: true
    // };
    let $grid;

    $grid = $('#' + gridList[id].gid);
    $.jgrid.gridUnload(gridList[id].gid);
    options = gridList[id];
    switch (id) {
        case 0:
            console.log("url====> "+invokeURL + apiurl);
            var date = new Date().format('yyyyMMdd');
            
            console.log("send_data====> "+ 
            "\nDEPT=>"+ ($('#deptInput').val().length==0?'': $('#deptInput').val())+
            "\nLINE=>"+ ($('#lineList').val().length==0?'': $('#lineList').val())+
            "\nPROCESS=>"+ ($('#processList').val().length==0?'': $('#processList').val())+
            "\nWO=>"+ ($('#woList').val().length==0?'': $('#woList').val())+
            "\nPART=>"+ ($('#pnumList').val().length==0?'': $('#pnumList').val())+
            "\nSHOW=>"+ ($('#showdatatype').val())+
            "\nSDATE=>"+($('#SDATE').val())+
            "\nEDATE=>"+($('#EDATE').val())
            );
            options.caption = "查詢結果";
            options.gridDefPostData = {
                // SDATE: '20211201',
                // EDATE: '20210101',
                // INOUT:'1'
                // "@SDATE": $('#sDate').val(),
                // "@EDATE": $('#eDate').val(),
                // "@INOUT": $('#in_out').val()inOut

            };
            let pa=JSON.stringify({
                
                "DEPT": $('#deptInput').val().length==0?'': $('#deptInput').val(),
                "LINE": $('#lineList').val().length==0?'': $('#lineList').val(),
                "PROCESS": $('#processList').val().length==0?'': $('#processList').val(),
                "WO": $('#woList').val().length==0?'': $('#woList').val(),
                "PART": $('#pnumList').val().length==0?'': $('#pnumList').val(),
                //"DATE": $('#showdatatype').val(),
                "SHOW": $('#showdatatype').val(),
                "SHOW2": $('#showcount').val(),
                "SDATE":$('#sDate').val().length==0?date: $('#sDate').val(),
                "EDATE":$('#eDate').val().length==0?date: $('#eDate').val()
                
            });
            // console.log('inOut = '+$('#inOut').val());
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