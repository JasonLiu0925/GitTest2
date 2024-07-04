/*---------------------公用變數 Start--------------*/
var audioEle = document.getElementById("player");
var videoElement = document.querySelector('video');
var videoSelect = document.querySelector('select#videoSource');
var pageId;
var childgid = "";
var FTA003 = "";
var FTA004 = "";
var modelType = "";
var passingType = "";
var apiName = 'WDIP001:ver_20220413';
var filterToolbar = false;
var userGroup = '';
var baseURL = "";
var lineData = new Array();
var gridRows = new Array();
var sDate = "";
var eDate = "";
var CIP = null; //Clinet IP
var passingCategory = "";
var initialQty = 0;
var OKQty = 0;
var NGQty = 0;
var gridList = [{
    //id:0
    //grid初始化參數
    caption: '',
    gid: 'jqGridMsg',
    pager: '#jqGridMsgPager',
    shrinkToFit: true,
    width: 750,
    autowidth: false,
    //colAPI: 'RMA_CSMFormModelSUM', //set colModel index
    fixedColFDb: true, //set db
    gridDefinitionUrl: '',
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
    search: true,
    refresh: false,
    xls: false

},
{ //grid初始化參數
    //id:1
    caption: 'Key Parts清單',
    gid: 'jqGrid1',
    //pager: '#jqGridPager1',
    height: '150',
    shrinkToFit: true,
    scroll: true,
    colAPI: 'SFIS_DIP01_SKU_LIST', //set colModel index
    fixedColFDb: false, //set db
    gridDefinitionUrl: invokeURL + 'SFIS_DIP01_SKU_LIST',
    //gridDefColionUrl: 'json/unSchedule.json',
    gridDefPostData: {

    }
    //,
    //search: true,
    // refresh: true,
    // xls: true

},
{ //grid初始化參數
    //id:2 過站清單
    caption: "<div class='form-group row m-1'><div class=' input-group'><div class='input-group-prepend'><span class='input-group-text bg-white '>過站清單  SN:</span></div><input type='text' class='form-control ' id='okSN' ><span class='input-group-append '><button class='btn btn-outline-secondary  ' type='reset' id='okClearBtn'><i class='fas fa-redo'></i></button></span></div></div>",
    gid: 'jqGrid2',
    pager: '#jqGridPager2',
    shrinkToFit: true,
    colAPI: 'SFIS_DIP01_SKU_Finished_LIST1', //set colModel index
    fixedColFDb: true, //set db
    rowNum: 10,
    //gridDefinitionUrl: invokeURL + 'SFIS_DIP01_SKU_Finished_LIST',
    gridDefinitionUrl: invokeURL + 'SFIS_DIP01_SKU_Finished_LIST1',
    //gridDefColionUrl: 'json/unSchedule.json',
    gridDefPostData: {

    },
    search: true,
    refresh: true,
    xls: true

},
{ //grid初始化參數
    //id:3 錯誤清單
    caption: "<div class='form-group row m-1'><div class=' input-group'><div class='input-group-prepend'><span class='input-group-text bg-white '>NG清單  SN:</span></div><input type='text' class='form-control ' id='ngSN' ><span class='input-group-append '><button class='btn btn-outline-secondary  ' type='reset' id='ngClearBtn'><i class='fas fa-redo'></i></button></span></div></div>",
    gid: 'jqGrid3',
    pager: '#jqGridPager3',
    shrinkToFit: true,
    colAPI: 'SFIS_DIP01_SKU_Finished_LIST1', //set colModel index
    fixedColFDb: true, //set db
    rowNum: 10,
    //gridDefinitionUrl: invokeURL + 'SFIS_DIP01_SKU_Finished_LIST',
    gridDefinitionUrl: invokeURL + 'SFIS_DIP01_SKU_Finished_LISTNG',
    //gridDefColionUrl: 'json/unSchedule.json',
    gridDefPostData: {

    },
    search: true,
    refresh: true,
    xls: true

},
{ //grid初始化參數
    //id:4 
    caption: '組合清單',
    gid: 'jqGrid4',
    // pager: '#jqGridPager4',
    shrinkToFit: true,
    colAPI: 'SFIS_DIP01_SKU_CombinationMain_LIST', //set colModel index
    fixedColFDb: true, //set db
    //gridDefinitionUrl: invokeURL + 'SFIS_DIP01_SKU_Finished_LIST',
    gridDefinitionUrl: invokeURL + 'SFIS_DIP01_SKU_CombinationMain_LIST',
    //gridDefColionUrl: 'json/unSchedule.json',
    gridDefPostData: {

    }
    /* ,subGrid: true,
     subGridRowExpanded: showChildGrid1,
     subGridOptions: {
         // expand all rows on load
         expandOnLoad: true
     }
     */

},

{   //id:5 人員清單
    caption: "<div class='input-group mb-3'><div class='input-group-prepend'><span class='input-group-text' id='basic-addon1'>工號:</span></div><input type='text' class='form-control' id='eID' aria-describedby='basic-addon1'><select class='form-control' id='checkType'><option value='0'>Check In 刷入</option><option value='1'>Check Out 刷出</option></select></div>",
    gid: 'numPeopleGrid',
    datatype: 'jsonstring',
    shrinkToFit: true,
    height: '100',
    iconSet: 'fontAwesome',
    responsive: true,
    scroll: true,
    sortorder: 'desc',
    sortname: "TIME",
    colModel: [
        /*{
            label: " ",
            name: "DEL",
            align: "center",
            width: 80
        },*/
        {
            label: "Time",
            name: "TIME",
            align: "center",
            sortable: true,
            hidden: true,
            width: 200
        },
        {
            label: "工號",
            name: "EID",
            align: "center",
            width: 200
        },
        {
            label: "姓名",
            name: "ENAME",
            align: "center",
            width: 200
        }],
    gridComplete: function () {

        let ids = $("#numPeopleGrid").jqGrid('getDataIDs');


        /* for (let i = 0; i < ids.length; i++) {
             console.log('EID:' + $("#numPeopleGrid").getRowData(ids[i]).EID);
             $("#numPeopleGrid").jqGrid('setRowData', ids[i], { DEL: "<button type='button' class='btn btn-secondary' id='eDELButton' onclick=\"jQuery('#numPeopleGrid').delRowData('" + ids[i] + "');\"><i class='fas fa-minus-circle'></i></button>" });
         }*/
    }

},
{    //id:6 記數
    caption: "<div><button type='button' class='btn btn-secondary' id='clearButton'>Clear</button></div>",
    gid: 'jqGridCount',
    datatype: 'jsonstring',
    // height: "500",

    // shrinkToFit: true,
    scroll: false,
    rowNum: 1,

    rownumbers: false,
    search: false,
    refresh: false,

    colModel: [{
        label: '初檢',
        name: 'initial',
        classes: 'font-weight-bold h3',
        align: "center",
        width: 100
    },
    {
        label: 'OK',
        name: 'OK',
        classes: 'font-weight-bold h3',
        align: "center",
        width: 100
    }, {
        label: 'NG',
        name: 'NG',
        classes: 'font-weight-bold h3',
        align: "center",
        width: 100
    }]
}

];
/*---------------------公用變數 End--------------*/
/*---------------------UI event Function Start--------------*/

$(document).ready(function () { //form load function

    loginCheck(); //登入檢查
    $("#menu").load("Top.html");
    $("#bottom").load("Bottom.html");


    initFrm();
    $.post("SFC_GetClientIP.jsp", function (result) {
        CIP = $.trim(result);
        console.log('SFC_GetClientIP ip:', CIP);
    });
    // $('#overLoadModel').modal('show');

});

function frmEvent() { //form event function




    /*換製令 Start*/
    $('#chageWOButton').on('click', function () {
        let ids = $('#numPeopleGrid').getDataIDs();
        //全部隱藏
        $('#cwoInput').addClass('d-none');
        $('#cprocessCodeInput').addClass('d-none');
        $('#clineCodeInput').addClass('d-none');
        $('#cpassingCategoryInput').addClass('d-none');



        if (ids.length == 0) {

            showMsg(true, false, '請輸入人員');
            return false;
        }
        else {
            showMsg(false, true, '');
        }


        setcooky("woList" + pageId, "");


        $('#gridBox').addClass('d-none');
        showMsg(false, true, '');
        $('#cwoInput').removeClass('d-none');
        $('#cwo').val('');
        $('#cprocessCode').val('');
        $('#clineCode').val('');
        $('#csDate1').val('');
        $('#ceDate1').val('');
        $('#cwo').focus();
    });

    $('#cwoButton1').on('click', function () {
        modelType = "wo";
        $('#MsgModal').modal('show');
        createGrid(0);

    });
    $('#cwo').on('keypress', function (event) {
        let key = window.event ? event.keyCode : event.which;
        if (key == 13) {
            let GetSSFMF = ajaxGetData(invokeURL + "SFIS_GetSSFMF_BatchRun", {
                FTA005: $('#cwo').val()
            });
            if (GetSSFMF[0].result == undefined) {
                $('#cwoInput').addClass('d-none');
                $('#cprocessCodeInput').removeClass('d-none');
                $('#cprocessCode').focus();
            } else {
                checkStatus('cwo', false);
            }
        }
    });
    $('#cprocessButton').on('click', function () {
        modelType = "process";
        $('#MsgModal').modal('show');
        createGrid(0);
    });
    $('#cprocessCode').on('keypress', function (event) {
        let key = window.event ? event.keyCode : event.which;
        let result;

        if (key == 13) {
            result = ajaxGetData(invokeURL + 'SFIS_STATION_ORDER_SELECT', {
                MO: $('#cwo').val(),
                PROCESS: $('#cprocessCode').val()
            });
            if (result[0].result == undefined) {

                if (result[0].MG015 == '70') {
                    result = ajaxGetData(invokeURL + 'SFIS_DIP01_SKU_LIST', {
                        MF001: $('#cwo').val(),
                        NH002: $('#cprocessCode').val()
                    });
                    if (result[0].result == undefined) {
                        $.map(result, function (item, id) {
                            if (item.TR004 == null || item.TR004 == "") {

                                showMsg(true, false, 'Key parts 尚未完成上料,不可執行補料,或過站!!');
                                checkStatus('cprocessCode', false);
                                Break;
                            }
                        });
                        $('#msgBox').addClass('d-none');
                        $('#cprocessCodeInput').addClass('d-none');
                        $('#clineCodeInput').removeClass('d-none');
                        $('#clineCode').focus();
                    } else {
                        checkStatus('cprocessCode', false);
                    }
                } else {

                    $('#msgBox').addClass('d-none');
                    $('#cprocessCodeInput').addClass('d-none');
                    $('#clineCodeInput').removeClass('d-none');
                    $('#clineCode').focus();
                }


            } else {
                checkStatus('cprocessCode', false);
            }


        }
    });
    $('#clineButton').on('click', function () {
        modelType = "line";
        $('#MsgModal').modal('show');
        createGrid(0);

    });
    $('#clineCode').on('keypress', function (event) {
        let key = window.event ? event.keyCode : event.which;
        let result;
        if (key == 13) {


            result = ajaxGetData(invokeURL + 'SFIS_LINE_SELECT', {
                LINE: $('#clineCode').val()
            });
            if (result[0].result == undefined) {
                $('#clineCodeInput').addClass('d-none');
                $('#cpassingCategoryInput').removeClass('d-none');
                $('#cpassingCategory').focus();

            } else {
                checkStatus('lineCode', false);
            }


        }
    });

    $('#cpassingCategory').on('change', function () {
        if ($('#cpassingCategory').val() == 'Z') {
            $('#csDate1').attr("required");
            $('#ceDate1').attr("required");
            $('#cpassingTime').removeClass('d-none');

        }
        else {
            $('#csDate1').removeAttr("required");
            $('#ceDate1').removeAttr("required");
            $('#cpassingTime').addClass('d-none');

        }

    });
    $('#cpassingCategory').on('keypress', function (event) {
        let key = window.event ? event.keyCode : event.which;

        if (key == 13) {

            $('#chengeWoOKButton').trigger("click");


        }
    });
    $('#chengeWoOKButton').on('click', function () {
        if (!CheckLot($('#cpassingCategory').val(), $('#csDate1').val(), $('#ceDate1').val(), $('#peopleNumber').val(), $('#cwo').val(), $('#cprocessCode').val(), $('#clineCode').val())) {
            return;
        }
        //顯示工單
        let woList = { wo: '', sku: '', seq: '', processCode: '', processName: '', lineCode: '', lineName: '', passingCategory: '', sDate: '', eDate: '' };
        let result = ajaxGetData(invokeURL + "SFIS_GetSSFMF", {
            MF001: $('#cwo').val(),
            MG003: $('#cprocessCode').val()
        });

        woList.wo = $('#cwo').val();
        woList.sku = result[0].MF002;
        result = ajaxGetData(invokeURL + 'SFIS_STATION_ORDER_SELECT', {
            MO: $('#cwo').val(),
            PROCESS: $('#cprocessCode').val()
        });


        woList.seq = result[0].MG002;
        woList.processCode = result[0].MG003;
        woList.processName = result[0].MA002;

        result = ajaxGetData(invokeURL + 'SFIS_LINE_SELECT', {
            LINE: $('#clineCode').val()
        });
        woList.lineCode = result[0].ML001;
        woList.lineName = result[0].ML002;

        woList.passingCategory = $('#cpassingCategory').val();
        woList.sDate = $('#csDate1').val();
        woList.eDate = $('#ceDate1').val();
        setcooky("woList" + pageId, JSON.stringify(woList));
        woDispaly();

        $('#cpassingCategoryInput').addClass('d-none');
        $('#SN').focus();

    });

    $('#MsgModal').on('hidden.bs.modal', function (event) {

        // Destroy modal
        $('#MsgModal').modal('dispose');
    });





    /*換製令 End*/
    /* 重印 */
    $('#labRPrint').on('click', function () {
        let row = $('#' + gridList[2].gid).jqGrid('getRowData', 1);
        if (row != undefined) {
            onLinePrint(row.TA001);
        }

    });

    $('#testResults').on('change', function () {
        if ($("#testResults").val() == "3") {

            $('#SN').val('');
            $('#errCode').val('');
            $("#errCodeBox").removeClass('d-none');
            $('#SN').attr('disabled', true);
            $('#errCode').focus();

        } else {
            $('#SN').val('');
            $('#errCode').val('');
            $("#errCodeBox").addClass('d-none');
            $('#SN').removeAttr('disabled');
            $('#SN').focus();

        }

    });
    $('#errCode').on('keyup', function (event) {
        if (event.keyCode == 13) {
            if ($('#errCode').val() != "") {
                $('#SN').removeAttr('disabled');
                $('#SN').focus();
            }
        }

    });



    $('#errCodeButton').on('click', function () {
        modelType = "errcode";
        $('#MsgModal').modal('show');
        createGrid(0);

    });

    $('#SN').on('keyup', function (event) {
        $('.jumbotron-fluid').removeClass('bg-danger');
        if (event.keyCode == 13) {
            //console.log('passingType', passingType);
            if ($('#passingLotNumber').val() == '' || $('#SN').val() == '') {

                return false;
            }
            else {
                $('#errMsg').val('');
                switch (passingType) {
                    case "01": //過站
                    case "02": //檢測
                    case "70": //檢測
                        generalProcess();
                        break;
                    case "05": //組合
                        combinationProcess();
                        break;
                }
                $('#SN').val('');
                $('#errCode').val('');

                if ($("#testResults").val() == "3") {
                    $("#errCodeBox").addClass('d-none');
                    $("#testResults")[0].selectedIndex = 1;
                }
                $('#SN').focus();
            }

        } else if (event.keyCode == 27 && passingType == "05") { //esc-清除組合
            createGrid(4);
        }

    });

    $('#eID').on('keypress', function (event) {
        let key = window.event ? event.keyCode : event.which;
        let result;
        let status = false;
        let ids = $('#numPeopleGrid').getDataIDs();
        let _iCount = $('#numPeopleGrid').jqGrid('getGridParam', 'records');
        if (key == 13) {
            if ($('#checkType').val() == '0') {
                for (let i = 0; i < ids.length; i++) {
                    console.log('EID', $('#numPeopleGrid').getRowData(ids[i])["EID"]);
                    if ($('#numPeopleGrid').getRowData(ids[i])["EID"] == $('#eID').val()) {
                        checkStatus('eID', status);
                        return false;
                    }

                }
                result = ajaxGetData(invokeURL + 'SFIS_EMPLOYEE_SELECT', {
                    EID: $('#eID').val()
                });
                if (result[0].result == undefined) {
                    $('#eID').val(result[0].MV001);
                    $('#numPeopleGrid').jqGrid('addRowData', $('#eID').val(), { TIME: moment().format('YYYYMMDDHHmmssSSS'), EID: $('#eID').val(), ENAME: result[0].MV002 }, 'first');
                    $('#eID').val('');
                    $("#eID").focus();
                    setcooky("opList" + pageId, JSON.stringify($('#numPeopleGrid').getGridParam('data')));
                    ids = $('#numPeopleGrid').getDataIDs();
                    //$('#numPeopleGrid').jqGrid('setSelection', ids[ids.length - 1], true);
                    $('#numPeopleGrid').jqGrid('setSelection', ids[0], true);
                    $('#eID').val('');
                    status = true;
                }

            }
            else {

                for (let i = 0; i < ids.length; i++) {
                    console.log('EID', $('#numPeopleGrid').getRowData(ids[i])["EID"]);
                    if ($('#numPeopleGrid').getRowData(ids[i])["EID"] == $('#eID').val()) {
                        $('#numPeopleGrid').jqGrid('delRowData', ids[i]);
                        setcooky("opList" + pageId, JSON.stringify($('#numPeopleGrid').getGridParam('data')));
                        $('#eID').val('');
                        status = true;
                    }

                }

            }
            checkStatus('eID', status);
            opDisple();

        }

    });

}


/*--- ------------------UI event Function Start--------------*/
/*---------------------Form Function Start--------------*/
function initFrm() { //init form
    pageId = getencodeUrlVars()['pageId'] == undefined ? 0 : getencodeUrlVars()['pageId'];
    console.log('pageId', pageId);

    setDatetimePicker('csDate1', 'YYYY/MM/DD HH:mm');
    setDatetimePicker('ceDate1', 'YYYY/MM/DD HH:mm');

    createGrid(5);
    createGrid(6);
    woDispaly();
    $('#errMsg').addClass('text-light'); //訊息文字白色
    frmEvent();


}
function woDispaly() {

    let wocookie = getcooky("woList" + pageId);
    let woList;
    let opcookie = getcooky("opList" + pageId);
    let opList;


    if (opcookie != "") {
        // $('#numPeopleGrid')
        opList = JSON.parse(opcookie);
        setDataToGrid("numPeopleGrid", opList);
        opDisple();
    }
    if (wocookie != "") {
        woList = JSON.parse(wocookie);
        sDate = woList.sDate;
        eDate = woList.eDate;
        $('#woDispy').val(woList.wo);
        $('#skuDisplay').val(woList.sku);
        $('#pSEQDispy').val(woList.seq);
        $('#processCodeDispy').val(woList.processCode);
        $('#processNameDispy').text(woList.processName);
        $('#processNameDispy').removeClass('d-none');
        $('#lineCodeDispy').val(woList.lineCode);
        $('#lineNameDispy').text(woList.lineName);
        $('#lineNameDispy').removeClass('d-none');
        $('#productionDate').val(moment().format('YYYYMMDD'));
        $('#productionTime').val(moment().format('HHmmss'));


        $("title").text('eSFC-' + woList.processCode + ':' + woList.processName);
        passingCategory = woList.passingCategory;
        switch (passingCategory) {
            case 'P':
                $('#transitCategoryDispy').val('P：一般過站');
                break;
            case 'X':
                $('#transitCategoryDispy').val('X：未結過站');
                break;
            case 'Z':
                $('#transitCategoryDispy').val('Z：補刷過站');
                break;

        };



        // passingType = '1';
        let result = ajaxGetData(invokeURL + "SFIS_SSFMA_SELCT", { //回傳站點資料
            MA001: $('#processCodeDispy').val()
        });
        if (result[0].result == undefined) {
            passingType = result[0].MA011;
        }
        console.log('passingType', passingType);
        passingUI();
        createGrid(2);
        createGrid(3);
        createGrid(6);
        userGroup = getUserGroup();

        //CheckLot(WO, STATION, SDATE, STIME, EDATE, ETIME, PASSTYPE, LINE) 

        CheckLot(passingCategory, sDate, eDate, $('#peopleNumber').val(), $('#woDispy').val(), $('#processCodeDispy').val(), $('#lineCodeDispy').val());

        //LAB
        result = ajaxGetData(invokeURL + "SFC_PRINT_LABLE_ITEM_SELECT", { //回傳站點資料
            MO: woList.wo,
            PROCESS: woList.processCode
        });
        if (result[0].result == undefined) {
            if (result[0].UG007 == 'Y') {
                $('#labFile').val(result[0].NS004.replaceAll("\\", "/") + '/' + result[0].UG005);
                $('#labCount').val(result[0].UG006);
                result = ajaxGetData(invokeURL + "SPRINTGETPRINT", { //參數資料
                    MO: woList.wo,
                    PROCESS: woList.processCode,
                    SN: "B4:DF:91:89:6F:1C",
                    TYPE: 1
                });
                if (result[0].result == undefined) {
                    if (result[0]['#result-set-1'] != undefined) {
                        
                        let Fields = result[0]['#result-set-1'];
                        console.log('SPRINTGETPRINT');
                        console.log(Fields[0]);
                        $('#printPara').html(Fields[0].Fields);


                    }
                }

                $('#labCard').removeClass("d-none");
            }
        }
        else {
            $('#labFile').val('');
            $('#labFile').val('');
            $('#labCard').addClass("d-none"); //標籤不顯示
        }
        $('#gridBox').removeClass("d-none");
        $('#SN').val('');
        $('#SN').focus();


    } else {
        $('#gridBox').addClass("d-none");
    }


}
function opDisple() {
    let ids = $("#numPeopleGrid").getDataIDs();

    if (ids.length > 0) {

        $('#eIDDispy').val($('#numPeopleGrid').getRowData(ids[ids.length - 1])["EID"]);
        $('#eNameDispy').text($('#numPeopleGrid').getRowData(ids[ids.length - 1])["ENAME"]);
        $('#eNameDispy').removeClass("d-none");
        $('#SN').removeAttr('disabled');
    } else {
        $('#SN').attr('disabled', true);
        $('#eIDDispy').val('');
        $('#eNameDispy').addClass("d-none");
    }
    $('#peopleNumber').val(ids.length);
}
function passingUI() {
    let type = passingType;

    $('#statueTest').addClass('d-none');
    $('#jqGrid4Box').addClass('d-none');
    $('#jqGrid1Box').addClass('d-none');
    $('.jumbotron-fluid').removeClass('bg-danger');
    console.log('type', type);
    switch (type) {
        case "01": //PASS 
            $("#testResults")[0].selectedIndex = 0;
            break;
        case "70": //Key parts站
            $("#testResults")[0].selectedIndex = 0;
            $('#jqGrid1Box').removeClass('d-none');
            createGrid(1);
            break;
        case "02": //檢測
            $('#statueTest').removeClass('d-none');

            //$('#testResults').val(2);
            $("#testResults")[0].selectedIndex = 1;
            break;
        case "05": //組合

            $('#jqGrid4Box').removeClass('d-none');
            // $('#testResults').val(1);
            $("#testResults")[0].selectedIndex = 0;
            createGrid(4);
            break;
    }
    console.log('testResults', $('#testResults').val());

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

            $grid.createJqGrid(modelGridOption(modelType, options));


            break;
        case 1:


            options.gridDefPostData = {
                MF001: $('#woDispy').val(),
                NH002: $('#processCodeDispy').val()

            };

            $grid.createJqGrid(options);
            break;
        case 2:

            switch (passingType) {
                case "01":
                case "02":
                    break;
                case "05":
                    options.colAPI = 'SFIS_DIP01_SKU_CombinationFinished_LIST';
                    options.gridDefinitionUrl = invokeURL + 'SFIS_DIP01_SKU_CombinationFinished_LIST';
                    break;
            }
            console.log('options2:', options);
            options.gridDefPostData = {
                TA005: $('#woDispy').val(),
                TA006: $('#pSEQDispy').val(),
                TA007: $('#processCodeDispy').val()

            };

            $grid.createJqGrid(options);
            //顯示數量
            displayQuantity();
            /* let CheckInputQty = ajaxGetData(invokeURL + "SFIS_CheckInputQty1", {
                 MO: $('#wo').val(),
                 Process: $('#processCode').val()
             });
             if (CheckInputQty[0].result == undefined) {
                 $('#amountNumber').val(CheckInputQty[0].MF008);
                 $('#stopsNumber').val(CheckInputQty[0].MG007);

             }*/
            $('#okSN').unbind('keyup'); //keyup事件移除
            $('#okSN').on('keyup', function (event) {

                if (event.keyCode == 13) {
                    $grid.searchByGrid('TA001', $('#okSN').val());
                    $('#okSN').val('');
                    $('#okSN').focus();
                }

            });
            $('#okClearBtn').unbind('click'); //click事件移除            
            $('#okClearBtn').on('click', function () {

                $grid.setGridParam({ postData: { filters: {} } }).trigger("reloadGrid");




            });
            break;
        case 3:
            options.gridDefPostData = {
                TA005: $('#woDispy').val(),
                TA007: $('#processCodeDispy').val()

            };
            $grid.createJqGrid(options);
            $('#ngSN').unbind('keyup'); //keyup事件移除
            $('#ngSN').on('keyup', function (event) {

                if (event.keyCode == 13) {
                    $grid.searchByGrid('TA001', $('#ngSN').val());
                    $('#ngSN').val('');
                    $('#ngSN').focus();
                }

            });
            $('#ngClearBtn').unbind('click'); //click事件移除            
            $('#ngClearBtn').on('click', function () {

                $grid.setGridParam({ postData: { filters: {} } }).trigger("reloadGrid");




            });
            break;
        case 4:
            options.gridDefPostData = {
                MG001: $('#woDispy').val(),
                MG003: $('#processCodeDispy').val()

            };
            $grid.createJqGrid(options);
            showChildGrid();
            break;
        case 5:

            options = gridList[id];


            $grid = $('#' + gridList[id].gid);

            $grid.createJqGrid(options);

            break;
        case 6:

            options = gridList[id];
            $grid = $('#' + gridList[id].gid);
            $grid.createJqGrid(options);
            setDataToGrid(options.gid, [{ initial: initialQty, OK: OKQty, NG: NGQty }]);
            $('#clearButton').unbind('click'); //kclick事件移除
            $('#clearButton').on('click', function () {
                initialQty = 0;
                OKQty = 0;
                NGQty = 0;

                // createGrid(6);
                $('#jqGridCount').setRowData(1, { initial: initialQty, OK: OKQty, NG: NGQty });

            });
            break;
    }


    function gridResize(item) { //resize grid size

        let $grid;
        let _Count;
        for (let i = 0; i < (gridList.length - 1); i++) {
            $grid = $('#' + gridList[i].gid);
            _Count = $grid.jqGrid('getGridParam', 'records');
            if (_Count > 0) {
                $grid.resize();
            }
        }

    }
}
function setDataToGrid(gid, result) {
    //set data to jggrid
    let $self = $("#" + gid);
    $self.jqGrid("clearGridData");

    // show loading message
    $self[0].grid.beginReq();

    $self.jqGrid("setGridParam", {
        data: result,
    });
    // $self[0].addJSONData(result);
    // hide the show message

    $self[0].grid.endReq();
    // refresh the grid

    $self.trigger("reloadGrid");
}
function showChildGrid() { //顯示被組合
    let $grid;
    let row = $('#' + gridList[4].gid).jqGrid('getRowData', 1);
    let grid_data = bildSubData(row['MG001'], row['MG003']);
    let childGridID = "jqGrid5";
    let childGridPagerID = "jqGridPager5";
    childgid = childGridID;
    console.log('grid_data', grid_data);

    $grid = $('#' + childGridID);
    $.jgrid.gridUnload(childGridID);
    $grid.createJqGrid({
        caption: '',
        gid: childGridID,
        // data: grid_data,
        datatype: 'jsonstring',
        height: 'auto',
        styleUI: 'Bootstrap4',
        shrinkToFit: true,
        iconSet: 'fontAwesome',
        responsive: true,
        colModel: [{
            name: 'NM003',
            label: '被組合料號',
            width: 150,
            editable: false
        },
        {
            name: 'MB002',
            label: '被組合名稱',
            width: 150,
            editable: false
        },
        {
            name: 'SN',
            label: '被組合生產序號',
            width: 150,
            editable: false
        }
        ]


    });
    setDataToGrid(childGridID, grid_data);



}
function showChildGrid1(parentRowID, parentRowKey) {

    let $grid;


    let row = $('#' + gridList[4].gid).jqGrid('getRowData', parentRowKey);
    let grid_data = bildSubData(row['MG001'], row['MG003']);
    let childGridID = parentRowID + "_table";
    let childGridPagerID = parentRowID + "_pager";
    childgid = childGridID;
    console.log('grid_data', grid_data);


    $('#' + parentRowID).append('<table id=' + childGridID + '></table><div id=' + childGridPagerID + ' class=scroll></div>');
    $grid = $('#' + childGridID);

    $grid.jqGrid({
        caption: '',
        gid: childGridID,
        // data: grid_data,
        datatype: 'jsonstring',
        height: 'auto',
        styleUI: 'Bootstrap4',
        shrinkToFit: true,
        iconSet: 'fontAwesome',
        responsive: true,
        colModel: [{
            name: 'NM003',
            label: '被組合料號',
            width: 150,
            editable: false
        },
        {
            name: 'MB002',
            label: '被組合名稱',
            width: 150,
            editable: false
        },
        {
            name: 'SN',
            label: '被組合生產序號',
            width: 150,
            editable: false
        }
        ]


    });
    for (let i = 0; i < grid_data.length; i++) {
        $grid.jqGrid('addRowData', i + 1, grid_data[i]);
    }


}

function bildSubData(MG001, MG003) {

    let rData = [];
    let childGridURL = invokeURL + 'SFIS_DIP01_SKU_CombinationSUB_LIST';
    let result = ajaxGetData(childGridURL, {
        MG001: MG001,
        MG003: MG003
    });
    if (result[0].result == undefined) {
        $.map(result, function (item) {
            let data = {};
            let len = item.NM004;
            for (let i = 0; i < len; i++) {
                data.NM003 = item.NM003;
                data.MB002 = item.MB002;
                data.SN = '';
                rData.push(data)
            }

        });
    }
    console.log('rData', rData);
    return rData;
    //設定COL     
    // colModel.name = prop;
    // colModel.index = prop;
    // colModel.label = prop;
    // colModel = $.extend(false, colDefaults, colModel);

}

function UpdateGridData(gid, TA02X, data) {
    let $grid = $('#' + gid);
    let MSG = null;
    let row = {
        TA001: data.TA001,
        TA002: TA02X,
        TA003: data.TA003,
        TA004: data.TA004,
        TA009: '',
    };
    if (data.TB001 != undefined) {
        row.TB001 = data.TB001;
    }
    let _iCount = $grid.jqGrid('getGridParam', 'records');
    showMsg(false, true, '');
    switch (data.TA009) {
        case '1':
            row.TA009 = 'PASS';
            MSG = data.TA001 + ' 已過站';

            showMsg(true, true, MSG + ":" + getTime());
            initialQty++;
            OKQty++;
            onLinePrint(data.TA001); //列印標籤

            break;
        case '2':
            row.TA009 = 'OK';
            MSG = data.TA001 + ' 已過站';
            showMsg(true, true, MSG + ":" + getTime());
            initialQty++;
            OKQty++;

            break;
        case '3':
            row.TA009 = 'NG';
            MSG = data.TA001 + ' 已過站:測試結果NG';
            showMsg(true, false, MSG + ":" + getTime());
            initialQty++;
            NGQty++;
            break;
        default:
            row.TA009 = data.TA009;
            showMsg(true, false, row.TA009 + ":" + getTime());


    }

    console.log('UpdateGridData', gid, TA02X, data);
    //$grid.searchByGrid('TA001',''); //清除搜尋
    if (_iCount > 0) {
        // $grid.jqGrid('addRowData', _iCount + 1, row, 'before', 1);
        $grid.jqGrid('addRowData', 1, row, 'first');
    } else {
        $grid.jqGrid('addRowData', _iCount + 1, row);
        //$grid.jqGrid('addRowData', 1, row);
    }
    createGrid(6);
    audioPlay($('#lineCodeDispy').val(), data.TA009);////聲音播放
}

function modelGridOption(type, options) {
    switch (type) {
        case "eName":
            options.gridDefinitionUrl = invokeURL + "SFIS_EMPLOYEE_LIST";
            options.gridDefPostData = {};
            options.colAPI = 'SFIS_EMPLOYEE_LIST';
            options['onSelectRow'] = function (ids) { //單擊選擇行
                let data = $(this).jqGrid('getRowData', ids);
                $('#eID').val(data.MV001);
                $('#eName').text(data.MV002);
                $('#eName').removeClass('d-none');
                $('#MsgModal').modal('hide');


            }

            break;
        case "wo":
            options.gridDefinitionUrl = invokeURL + "SFIS_WO_LIST";
            options.colAPI = 'SFIS_WO_LIST';
            options.gridDefPostData = {};
            options['onSelectRow'] = function (ids) { //單擊選擇行
                let data = $(this).jqGrid('getRowData', ids);
                $('#cwo').val(data.MF001);
                $('#MsgModal').modal('hide');

            }
            break;
        case "process":
            options.gridDefinitionUrl = invokeURL + "SFIS_STATION_ORDER_LIST";
            options.colAPI = 'SFIS_STATION_ORDER_LIST';
            options.gridDefPostData = {
                MO: $('#cwo').val()
            };

            options['onSelectRow'] = function (ids) { //單擊選擇行
                let data = $(this).jqGrid('getRowData', ids);

                $('#cprocessCode').val(data.MG003);
                $('#cprocessName').text(data.MA002);
                $('#cprocessName').removeClass('d-none');
                $('#MsgModal').modal('hide');
            }
            break;
        case "line":

            options.gridDefinitionUrl = invokeURL + "SFIS_LINE_LIST";
            options.colAPI = 'SFIS_LINE_LIST';
            options.gridDefPostData = {};
            options['onSelectRow'] = function (ids) { //單擊選擇行
                let data = $(this).jqGrid('getRowData', ids);
                $('#clineCode').val(data.ML001);
                $('#clineName').text(data.ML002);
                $('#clineName').removeClass('d-none');
                $('#MsgModal').modal('hide');
            }
            break;
        case "errcode":

            options.gridDefinitionUrl = invokeURL + "SFIS_ERRCODE_LIST";
            options.colAPI = 'SFIS_ERRCODE_LIST';
            options.gridDefPostData = {};
            options['onSelectRow'] = function (ids) { //單擊選擇行
                let data = $(this).jqGrid('getRowData', ids);
                $('#errCode').val(data.MI001);
                $('#MsgModal').modal('hide');
                $('#errCode').focus();
            }
            break;

    }

    return options;

}


/*---------------------JqGrid Function End--------------*/
/*---------------------Chart Function Start--------------*/
/*---------------------Chart Function End--------------*/
/*---------------------Chart Function Start--------------*/
/*---------------------Chart Function End--------------*/
/*---------------------Video Function Start--------------*/


function gotDevices(deviceInfos) {
    for (var i = deviceInfos.length - 1; i >= 0; --i) {
        var deviceInfo = deviceInfos[i];
        var option = document.createElement('option');
        option.value = deviceInfo.deviceId;
        if (deviceInfo.kind === 'videoinput') {
            option.text = deviceInfo.label || 'camera ' +
                (videoSelect.length + 1);
            videoSelect.appendChild(option);
        } else {

            console.log('Found one other kind of source/device: ', deviceInfo);
        }
    }
}

function getStream() {

    if (window.stream) {
        window.stream.getTracks().forEach(function (track) {
            track.stop();
        });
    }

    var constraints = {
        video: {
            deviceId: {
                exact: videoSelect.value
            }
        }
    };
    $('#videoMsg').text('');
    navigator.mediaDevices.getUserMedia(constraints).
        then(gotStream).catch(handleError);
}

function gotStream(stream) {
    window.stream = stream; // make stream available to console
    videoElement.srcObject = stream;
    scanBarcode();
}

function handleError(error) {
    console.log('Error: ', error);
    $('#videoMsg').text(error);
}

/*---------------------Video Function End--------------*/
/*---------------------zxing Function Start--------------*/
var ZXing = null;
var decodePtr = null;
var barcode_result = document.getElementById('dbr');
var barcode_result_list = document.getElementById('dbrlist');
var tick = function () {
    if (window.ZXing) {
        ZXing = ZXing();
        decodePtr = ZXing.Runtime.addFunction(decodeCallback);
    } else {
        setTimeout(tick, 10);
    }
};

var decodeCallback = function (ptr, len, resultIndex, resultCount) {
    var result = new Uint8Array(ZXing.HEAPU8.buffer, ptr, len);
    console.log(String.fromCharCode.apply(null, result));
    barcode_result.textContent = String.fromCharCode.apply(null, result);
    barcode_result_list.textContent = barcode_result_list.textContent + '\n' + barcode_result.textContent;
    /* buttonGo.disabled = false;
     if (isPC) {
         canvas.style.display = 'block';
     } else {
         mobileCanvas.style.display = 'block';
     }
     */
};
// scan barcode
function scanBarcode() {
    barcode_result.textContent = "";

    if (ZXing == null) {

        alert("Barcode Reader is not ready!");
        return;
    }
    var vid = document.getElementById("video");

    var barcodeCanvas = document.createElement("canvas");
    barcodeCanvas.width = 640;
    barcodeCanvas.height = 480;
    var barcodeContext = barcodeCanvas.getContext('2d');
    var imageWidth = 640,
        imageHeight = 480;
    barcodeContext.drawImage(videoElement, 0, 0, imageWidth, imageHeight);
    var imageData = barcodeContext.getImageData(0, 0, imageWidth, imageHeight);
    var idd = imageData.data;

    var image = ZXing._resize(imageWidth, imageHeight);
    for (var i = 0, j = 0; i < idd.length; i += 4, j++) {
        ZXing.HEAPU8[image + j] = idd[i];
    }
    var err = ZXing._decode_any(decodePtr);
    console.timeEnd('decode barcode');
    console.log("error code", err);
    /*if (err == -2) {
        setTimeout(scanBarcode, 30);
    }*/
    setTimeout(scanBarcode, 30);
}
/*---------------------zxing Function End--------------*/
/*---------------------Other Function Start--------------*/
function replaceSpace(val) {
    return val.replace(/%20/g, ' ');
}





function displayQuantity() {
    //顯示數量
    let CheckInputQty = ajaxGetData(invokeURL + "SFIS_CheckInputQty1", {
        MO: $('#woDispy').val(),
        Process: $('#processCodeDispy').val()
    });
    if (CheckInputQty[0].result == undefined) {
        $('#amountNumber').val(CheckInputQty[0].MF008);
        $('#stopsNumber').val(CheckInputQty[0].MG007);
        $('#QTY').html('QTY:' + CheckInputQty[0].MG007 + '/' + CheckInputQty[0].MF008);
        createGrid(6);

    }
}

function combinationProcess() { //組合流程
    let $grid;
    let FPart;
    let taData = setData();
    let TA02X = '0000';
    let gid;
    let sntyep = 1;
    let checkin;
    let sn = $('#SN').val();
    let SKU = ajaxGetData(invokeURL + "SFIS_DIP01_SKU_CombinationMain_LIST", {
        MG001: $('#woDispy').val(),
        MG003: $('#processCodeDispy').val()
    });
    let MO015 = ajaxGetData(invokeURL + "SFIS_SN_LINK_LIST", {
        MO001: sn
    });
    if (SKU[0].result == undefined) {
        FPart = MO015[0].MO015;

        if (SKU[0].MB001 == MO015[0].MO015) { //主序號
            sntyep = 1;
            $grid = $('#' + gridList[4].gid);
        } else { //組合序號
            sntyep = 3;
            $grid = $('#' + childgid);
        }

        //尋找是否已經存在Grid內
        if (checkReplaceSN($grid.getGridParam('data'), sn)) {
            //SN重複 
            gid = gridList[3].gid;
            taData.TA009 = '此料號:' + FPart + ' 已有輸入序號,不可重複輸入!!';
            UpdateGridData(gid, TA02X, taData);
        } else {
            let ids = $grid.getDataIDs();
            let setSN = false;

            if (sntyep == 1) { //主序號，需檢查白標滿了
                if (!checkGridFull(childgid)) { //白標沒滿布可輸入主序號
                    gid = gridList[3].gid;
                    taData.TA009 = '被組合料號序號，尚未輸入完成!!';
                    UpdateGridData(gid, TA02X, taData);
                    return;
                }
            }

            checkin = ajaxGetData(invokeURL + "SFIS_DIP_CHECK_IN", {
                WO: $('#woDispy').val(),
                PROCESS: $('#processCodeDispy').val(),
                SNTYPE: sntyep,
                SN: $('#SN').val()
            }); //檢查序號是否有問題
            if (checkin[0].result == undefined) {
                if (checkin[0].ERRCODE == 0) { //SN檢查過
                    for (let i = 0; i < ids.length; i++) {
                        let row = $grid.jqGrid('getRowData', ids[i]);
                        console.log(row);
                        console.log(FPart);
                        if ((row['MB001'] == FPart || row['NM003'] == FPart || checkin[0].MSG == row['MB001'] || checkin[0].MSG == row['NM003']) && row['SN'] == '' && !setSN) {
                            $grid.jqGrid('setCell', ids[i], 'SN', sn);
                            setSN = true;
                        }

                    }
                    if (!setSN) {
                        gid = gridList[3].gid;
                        taData.TA009 = '此料號:' + FPart + ' 序號:' + sn + ' 已有輸入序號,不可重複輸入!!';
                        UpdateGridData(gid, TA02X, taData);

                    }
                    //判斷是否為最後一個
                    if (CombinationUpdate(taData, $('#jqGrid1').jqGrid('getGridParam', 'data'), 'WEB', $('#eIDDispy').val(), userGroup, $('#productionDate').val())) {
                        return;
                    }
                    return;
                } else {
                    gid = gridList[3].gid;
                    taData.TA009 = checkin[0].MSG;
                }
            } else {
                gid = gridList[3].gid;
                taData.TA009 = $('#SN').val() + 'CHECK IN 失敗';
            }

        }
    } else {
        gid = gridList[3].gid;
        taData.TA009 = $('#SN').val() + '料號API失敗';
    }
    UpdateGridData(gid, TA02X, taData);

}
function CombinationUpdate(cdsCondition, cdsView, FDatabaseName, FUserId, FUserGroup, FTodayDate) { //檢查SN在Gridg上是否重複
    let gid;
    let $grid = $('#' + childgid);
    let TA02X = '0000';
    let SN;
    let TB001Array = [];
    let taData = cdsCondition;
    let errCode = null;
    let result = false;
    if (checkGridFull(gridList[4].gid)) { //生產序號已經輸入
        cdsCondition.TA001 = $('#' + gridList[4].gid).jqGrid('getRowData', 1)['SN']; //主序號

        console.log(cdsCondition.TA001);
        if (checkGridFull(childgid)) { //被組合生產序號已經輸入
            //被組合
            let ids = $grid.getDataIDs();
            for (let i = 0; i < ids.length; i++) {
                let row = $grid.jqGrid('getRowData', ids[i]);
                //TB001 += row['SN'].trim() + ',';
                TB001Array.push(row['SN'].trim());
            }
            SN = cdsCondition.TA001 + ',' + TB001Array.join(',');
            if ($('#testResults').val() == '3') {
                errCode = $('#errCode').val();
            }

            let checkOut = ajaxGetData(invokeURL + "SFIS_DIP_CHECK_OUT", { //過站
                WO: $('#woDispy').val(),
                PROCESS: $('#processCodeDispy').val(),
                LINE: $('#lineCodeDispy').val(),
                SPLITSTR: ',',
                PEOPLEID: getPeople(","),
                SN: SN,
                ROUTERTYPE: passingCategory,
                IP: CIP,
                TESTRESULTS: $('#testResults').val(),
                BADCODE: errCode,
                EQUIPMENT: null,
                PCNAME: null

            });
            if (checkOut[0].result == undefined && checkOut[0].ErrorMessage == undefined) {
                if (checkOut[0].ERRCODE == 0) { //過站執行成功
                    gid = gridList[2].gid;

                } else {
                    gid = gridList[3].gid;
                    taData.TA009 = checkOut[0].MSG;
                }
            } else if (checkOut[0].ErrorMessage != undefined) {

                gid = gridList[3].gid;
                taData.TA009 = $('#SN').val() + ' ' + checkOut[0].ErrorMessage;
            }

            else {
                gid = gridList[3].gid;
                taData.TA009 = $('#SN').val() + 'CHECK OUT 失敗';
            }

            //清空資料
            $('#' + gridList[4].gid).jqGrid('setCell', 1, 'SN', null);
            for (let j = 0; j < ids.length; j++) {
                $grid.jqGrid('setCell', ids[j], 'SN', null);
            }
            result = true;
        }
        if (gid == gridList[2].gid) {
            displayQuantity();
            // cdsCondition.TB001 = TB001.slice(0, -1);
            cdsCondition.TB001 = TB001Array.join(',');
            UpdateGridData(gid, TA02X, cdsCondition);
        }
        /*else {
            gid = gridList[3].gid;
            UpdateGridData(gid, TA02X, cdsCondition);
        }*/



    }
    return result;

}

function checkGridFull(gid) { //檢查組合是否滿
    let isSetSN = true;
    let $grid = $('#' + gid);
    let ids = $grid.getDataIDs();
    for (let i = 0; i < ids.length; i++) {
        let row = $grid.jqGrid('getRowData', ids[i]);
        if (row['SN'] == '' && isSetSN) {
            isSetSN = false;
        }

    }
    return isSetSN;




}

function checkReplaceSN(data, sn) { //檢查SN在Gridg上是否重複
    let result = false;
    console.log('data', data);
    for (let i = 0; i < data.length; i++) {
        if (!result) {
            if (data[i].SN == sn) {
                result = true;
            }
        }

    }
    return result;
}

function generalProcess() { //過站+檢測流程
    let taData = setData();
    let TA02X = '0000';
    let gid = '';
    let errCode = null;
    //檢查是否可以過站
    let checkin = ajaxGetData(invokeURL + "SFIS_DIP_CHECK_IN", {
        WO: $('#woDispy').val(),
        PROCESS: $('#processCodeDispy').val(),
        SNTYPE: 1,
        SN: $('#SN').val()
    });
    if (checkin[0].result == undefined) {
        if ($('#testResults').val() == '3') {
            errCode = $('#errCode').val();
        }
        if (checkin[0].ERRCODE == 0) { //SN檢查過
            let checkOut = ajaxGetData(invokeURL + "SFIS_DIP_CHECK_OUT", { //過站
                WO: $('#woDispy').val(),
                PROCESS: $('#processCodeDispy').val(),
                LINE: $('#lineCodeDispy').val(),
                SPLITSTR: ',',
                PEOPLEID: getPeople(","),
                SN: $('#SN').val(),
                ROUTERTYPE: passingCategory,
                IP: CIP,
                TESTRESULTS: $('#testResults').val(),
                BADCODE: errCode, //不良狀態代碼
                EQUIPMENT: null,
                PCNAME: null

            });
            if (checkOut[0].result == undefined && checkOut[0].ErrorMessage == undefined) {
                if (checkOut[0].ERRCODE == 0) { //過站執行成功
                    gid = gridList[2].gid;
                    displayQuantity();
                } else {
                    gid = gridList[3].gid;
                    taData.TA009 = checkOut[0].MSG;
                }
            }
            else if (checkOut[0].ErrorMessage != undefined) {

                gid = gridList[3].gid;
                taData.TA009 = $('#SN').val() + ' ' + checkOut[0].ErrorMessage;
            }
            else {
                gid = gridList[3].gid;
                taData.TA009 = $('#SN').val() + ' CHECK OUT 失敗';
            }

        } else { //檢查失敗
            gid = gridList[3].gid;
            taData.TA009 = checkin[0].MSG;
        }
    }
    else {
        gid = gridList[3].gid;
        taData.TA009 = $('#SN').val() + 'CHECK IN 失敗';
    }
    UpdateGridData(gid, TA02X, taData);

}

function setData() { //設定資料
    CheckLot(passingCategory, sDate, eDate, $('#peopleNumber').val(), $('#woDispy').val(), $('#processCodeDispy').val(), $('#lineCodeDispy').val());
    let cdsView1 = {
        TA001: $('#SN').val(),
        // TA003: $('#productionDate').val(),
        // TA004: $('#productionTime').val(),
        TA003: FTA003,//moment().format('YYYYMMDD'), //生產日期
        TA004: FTA004,//moment().format('HHmmss'), //生產時間
        TA005: $('#woDispy').val(),
        TA006: $('#pSEQDispy').val(),
        TA007: $('#processCodeDispy').val(),
        TA008: $('#lineCodeDispy').val(),
        TA009: $('#testResults').val(), //檢測結果  1.PASS 2.OK 3.NG
        TA010: null,
        TA011: null,
        TA012: null,
        TA013: null,
        TA014: null,
        TA015: null,
        TA016: null, //BURNIN溫度(度)
        TA017: null, //BURNIN時間(分)
        TA018: $('#passingLotNumber').val(),
        //TA018: $('#passingLotNumber').val(),
        // TA019: $('#workingHours').val(),
        TA019: '0', //過站批號工時(分)
        TA020: passingCategory, //過站類別  P:單板過站  B:批次過站
        TA021: null,
        TA022: $('#eIDDispy').val(), //員工代號
        TA023: null,
        TA024: null,
        TA025: null, //製程行為 SSFMA(MA011) 01.PASS 02.檢測 03.BURN IN 04.MAC 05.組合 06.檢測+MAC 07.MAC+檢測 08.檢測+組合 09.檢測+組合+MAC 20.裝箱 21.裝箱+秤重 22.組合+裝箱 23.組合+裝箱+秤重 30.秤重 40.FQC 50.入庫   A.維修
        TA026: null,
        TA027: '0', //實際重量
        TA028: '1', //初檢OK否 1.YES 2.NO
        TA029: null,
        //TA030: $('#passingLotNumber').val(),
        TA030: moment().format('YYYYMMDDHHmmss'),
        TA031: '1', //製程首次投入否 1.YES 2.NO
        TA039: apiName,
        TA040: null,
        TA045: $('#peopleNumber').val(),
        TA047: null, //Clinet 電腦名稱/MAC
        TA048: CIP //Clinet IP

    }

    if (cdsView1.TA009 == 3) {
        cdsView1.TA028 = 2;
    }
    let FSSFMFData = ajaxGetData(invokeURL + "SFIS_GetSSFMF", { //回傳 (工單)MF001,(站點)MG003,完成數量(MF008),預計產量(MF008),總放行數量(LA007)
        MF001: $('#woDispy').val(),
        MG003: $('#processCodeDispy').val()
    });

    if (FSSFMFData[0].result == undefined) {
        cdsView1.TA025 = FSSFMFData[0].MG015;
    }
    if (passingType == "70") { //測試結果
        cdsView1.TA009 = '1';
    }
    if (passingType == "02") { //檢測
        cdsView1.TA040 = getTA004();
    }
    if (cdsView1.TA020 == 'B') {
        cdsView1.TA018 = $('#passingLotNumber').val();
    }
    console.log('cdsView1', cdsView1);
    return cdsView1;
}

function getTA004() {
    let TA004 = '2';

    let result = ajaxGetData(invokeURL + "SFIS_GETTA004Condition", {
        TA001: $('#SN').val(),
        TA005: $('#woDispy').val(),
        TA007: $('#processCodeDispy').val()
    });


    /* let result = ajaxGetData(invokeURL + "SFIS_GETTA004Condition", {
      TA001: '202220055192',
      TA005: 'LI2-2062641M',
      TA007: 'MI08'
  });*/

    if (result[0].result == undefined) {
        if (result[0].TACOUNT > 0) {
            TA004 = '1';
        }
    }
    //console.log('getTA004', TA004,result);
    return TA004;
}

function getUserGroup() {
    let uGroup = null;
    let group = ajaxGetData(invokeURL + "SFIS_GETUSERGROUP", {
        USERID: $('#eIDDispy').val()
    });
    if (group[0].result == undefined) {
        uGroup = group[0].GROUPID;
    }
    console.log('userGroup', uGroup);
    return uGroup;
}
function getPeople(SPLITSTR) {
    let EID = new Array();
    let ids = $("#numPeopleGrid").jqGrid('getDataIDs');
    for (let i = 0; i < ids.length; i++) {
        EID.push($("#numPeopleGrid").getRowData(ids[i]).EID);

    }
    return EID.join(SPLITSTR);

}
function SAVEPeople(TA002) {
    let EID = new Array();
    let ids = $("#numPeopleGrid").jqGrid('getDataIDs');
    for (let i = 0; i < ids.length; i++) {
        EID.push($("#numPeopleGrid").getRowData(ids[i]).EID);

    }
    let post = {
        SN: $('#SN').val(),
        TA002: TA002,
        USERID: EID.join(","),
        SPLITSTR: ','
    }
    console.log(post);
    let result = ajaxGetData(invokeURL + "SFIS_RealName", post);
    console.log('SFIS_RealName', result);
    if (result[0].result == undefined) {
        if (result[0].MSG) {

            showMsg(true, false, result[0].MSG);
        }

    }
    else {
        showMsg(true, false, result[0].result);
    }
}
function CheckLot(type, s1, e1, op, wo, process, line) {
    let status = true;
    let sd = "";
    let st = "";
    let ed = "";
    let et = "";

    if (type == 'Z') {
        //$('#transitCategoryDispy').val('Z：補刷過站');
        sd = moment(s1).format("YYYYMMDD");
        st = moment(s1).format("HHmmss");
        ed = moment(e1).format("YYYYMMDD");
        et = moment(e1).format("HHmmss");
    }
    else {
        sd = moment().format("YYYYMMDD");
        st = moment().format("HHmmss");
        ed = moment().format("YYYYMMDD");
        et = moment().format("HHmmss");
    }

    let Post = {
        NUMPEOPLE: op,
        WO: wo,
        STATION: process,
        SDATE: sd,
        STIME: st,
        EDATE: ed,
        ETIME: et,
        PASSTYPE: type,
        LINE: line
    };
    console.log(Post);
    let result = ajaxGetData(invokeURL + "SFIS_CheckPassType", Post);
    console.log('CheckLot', result);

    if (result[0].result == undefined) {
        if (result[0].MSG) {

            showMsg(true, false, result[0].MSG);
            status = false;

        } else {
            let lotResult = result[0].lotResult.split(' ');

            $('#passingLotNumber').val(lotResult[0]);
            FTA003 = lotResult[1];
            FTA004 = lotResult[2];
            //  console.log(FTA003,FTA004);
        }



    } else {
        showMsg(true, false, result[0].result);
        status = false;
    }
    return status;
}
function getTime() { //取得目前時間
    let time = new Date();
    let timeDetails = time.getHours() + ":" + time.getMinutes() + ":" + time.getSeconds();
    return timeDetails;
}
function setDatetimePicker(item, formatstr) { //DatetimePicker 元件設定
    $('#' + item).datetimepicker({
        format: formatstr,
        sideBySide: true,
        icons: {
            time: "far fa-clock",
            date: "far fa-calendar-alt",
            up: "fas fa-chevron-up",
            down: "fas fa-chevron-down",
            previous: "fas fa-chevron-left",
            next: "fas fa-chevron-right",
            today: "fas fa-calendar-day",
            clear: "fas fa-trash",
            close: "fas fa-trash"
        }

    });

}
function showMsg(display, state, msg) { //顯示訊息
    let classType;

    if (display) { //顯示  
        if (state) { //正確  
            classType = 'bg-success';

        } else { //錯誤
            classType = 'bg-danger';
        }
        $('#errMsg').text(msg);
        $('.jumbotron-fluid').addClass(classType);
        $('#errMsg').addClass(classType);
        $('#errMsg').removeClass('d-none');
        $('#msgBox').removeClass('d-none');

    } else { //不顯示
        $('#errMsg').removeClass('bg-success');
        $('#errMsg').removeClass('bg-danger');
        $('.jumbotron-fluid').removeClass('bg-success');
        $('.jumbotron-fluid').removeClass('bg-danger');
        $('#errMsg').text('');
        $('#errMsg').addClass('d-none');
        $('#msgBox').addClass('d-none');

    }





}

function audioPlay(line, TA009) { //聲音播放

    let lineaudio = 1;
    let auduiofolder = 'audio/'
    let audioList = [{ ok: 'okMen.mp3', pass: 'okMen.mp3', fail: 'fail.mp3', error: 'error.mp3' }, //尖銳男聲
    { ok: 'okWomen.mp3', pass: 'okWomen.mp3', fail: 'fail.mp3', error: 'error.mp3' }  //溫和女生
    ];
    switch (line.substr(0, 1)) {
        case 'S': //SMT
            lineaudio = 0;
            break;
        case 'M': //DIP
            lineaudio = 0;
            break;
        case 'A': //FA
            lineaudio = 1;
            break;
        default:
            lineaudio = 0;
    }

    switch (TA009) {
        case '1': //OK
            audioEle.src = auduiofolder + audioList[lineaudio].ok;
            break;
        case '2': //PASS
            audioEle.src = auduiofolder + audioList[lineaudio].ok;
            break;
        case '3': //FAIL
            audioEle.src = auduiofolder + audioList[lineaudio].fail;
            break;
        default: //ERROR
            audioEle.src = auduiofolder + audioList[lineaudio].error;
    }
    audioEle.load();
    audioEle.play();    //播放聲音
}
function onLinePrint(sn) {
    if($('#labFile').val()=='' && $('#labFile').val()==undefined && $('#labFile').val()==null)
            return false;
    let result = ajaxGetData('http://127.0.0.1:5000/print',
        {
            MO: woList.wo,
            PROCESS: woList.processCode,
            SN: sn,
            PRINTERNAME: "bluetooth",
            LABFILE: $('#labFile').val(),
            COUNT: $('#labCount').val(),
            TYPE: "2"
        }

    );
}
/*---------------------Other Function End--------------*/


