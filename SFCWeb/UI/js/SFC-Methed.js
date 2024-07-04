/*---------------------公用變數 Start--------------*/
var modelType = "";
var apiName = 'SFISDIP:TE OFF';
var filterToolbar = false;
var userGroup = '';
var baseURL
var lineData = new Array();
var gridRows = new Array();
var gridList = [{
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
{
    caption: "<div class='form-group row  '><div class='col-sm-3 input-group'><div class='input-group-prepend'><span class='input-group-text bg-white'>員工代號:</span></div><input type='text' class='form-control ' id='eID' aria-describedby='eName' requiredreadonly><div class='input-group-append'><button type='button' class='btn btn-secondary' id='eNameButton'>...</button><span class='input-group-text bg-white d-none' id='eName'></span></div></div><button type='button' class='btn btn-secondary' id='eADDButton'>ADD</button></div>",
    gid: 'numPeopleGrid',
    datatype: 'jsonstring',
    height: 'auto',
    styleUI: 'Bootstrap4',
    iconSet: 'fontAwesome',
    responsive: true,

    colModel: [
        {
            label: " ",
            name: "DEL",
            align: "center",
            width: 80
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


        for (let i = 0; i < ids.length; i++) {
            console.log('EID:' + $("#numPeopleGrid").getRowData(ids[i]).EID);
            $("#numPeopleGrid").jqGrid('setRowData', ids[i], { DEL: "<button type='button' class='btn btn-secondary' id='eDELButton' onclick=\"jQuery('#numPeopleGrid').delRowData('" + ids[i] + "');\"><i class='fas fa-minus-circle'></i></button>" });
        }
    }
}



];
/*---------------------公用變數 End--------------*/
/*---------------------UI event Function Start--------------*/

$(document).ready(function () { //form load function

    loginCheck(); //登入檢查
    $("#menu").load("Top.html");
    $("#bottom").load("Bottom.html");
    initFrm();
 




});

function frmEvent() { //form event function


    $('#passingCategory').on('change', function () {
        if ($('#passingCategory').val() == 'Z') {
            $('#passingTime').show();
        }
        else {
            $('#passingTime').hide();
        }

    });
    $('#MsgModal').on('hidden.bs.modal', function (event) {

        // Destroy modal
        $('#MsgModal').modal('dispose');
    });
    $('#qryModal').on('hidden.bs.modal', function (event) {
        // Destroy modal
        $('#qryModal').modal('dispose');
    });
    $('#eNameButton').on('click', function () {
        modelType = "eName";
        $('#MsgModal').modal('show');
        createGrid(0);

    });
    $('#eADDButton').on('click', function () {

        $('#numPeopleGrid').jqGrid('addRowData', $('#eID').val(), { EID: $('#eID').val(), ENAME: $('#eName').text() });


    });
    $('#woButton').on('click', function () {
        modelType = "wo";
        $('#MsgModal').modal('show');
        createGrid(0);

    });

    $('#seqButton').on('click', function () {

        if ($('#wo').val() != '') {
            modelType = "seq";
            checkStatus('wo', true);
            $('#MsgModal').modal('show');
            createGrid(0);
        } else {
            checkStatus('wo', false);
        }


    });
    $('#processButton').on('click', function () {
        if ($('#wo').val() != '') {
            modelType = "process";
            checkStatus('wo', true);
            $('#MsgModal').modal('show');
            createGrid(0);
        } else {
            checkStatus('wo', false);
        }

    });
    $('#lineButton').on('click', function () {
        modelType = "line";
        $('#MsgModal').modal('show');
        createGrid(0);

    });

    $('#setWOBtn').on('click', function () {
        let EID = new Array();
        if (frmCheck()) {
            let ids = $("#numPeopleGrid").jqGrid('getDataIDs');
            for (let i = 0; i < ids.length; i++) {
                EID.push($("#numPeopleGrid").getRowData(ids[i]).EID);

            }

            //$("#numPeopleGrid").getGridParam('data')
            let url = "SFC-Produce.html?eData=" + EID.join(",") + "&wo=" + $("#wo").val() + "&pSEQ=" + $("#pSEQ").val() + "&processCode=" + $("#processCode").val() + "&processName=" + $("#processName").text() +
                "&lineCode=" + $("#lineCode").val() + "&lineName=" + $("#lineName").text() + "&passingCategory=" + $("#passingCategory").val() + "&sDate1=" + $("#sDate1").val() + "&eDate1=" + $("#eDate1").val();
            let encodeUrl = encodeURI(url);
            let fulls = "left=0,screenX=0,top=0,screenY=0,scrollbars=1"; //定義彈出視窗的引數
            if (window.screen) {
                var ah = screen.availHeight - 30;
                var aw = screen.availWidth - 10;
                fulls += ",height=" + ah;
                fulls += ",innerHeight=" + ah;
                fulls += ",width=" + aw;
                fulls += ",innerWidth=" + aw;
                fulls += ",resizable"
            } else {
                fulls += ",resizable"; // 對於不支援screen屬性的瀏覽器，可以手工進行最大化。 manually
            }

            window.open(encodeUrl, "", fulls);
        }
        else {
            return false;
        }

    });


}


/*--- ------------------UI event Function Start--------------*/
/*---------------------Form Function Start--------------*/
function initFrm() { //init form



    $('#eID').val('');
    $('#wo').val('');
    $('#pSEQ').val('');
    $('#processCode').val('');
    $('#lineCode').val('');
    setDatetimePicker('sDate1', 'YYYY/MM/DD HH:mm');
    setDatetimePicker('eDate1', 'YYYY/MM/DD HH:mm');
    $('#passingTime').hide();
    // getStream().then(getDevices).then(gotDevices);
    // 定義要取得的影音內容，包含影像和聲音
    /*
    let constraints = {
        audio: true,
        video: true
    }
      */
    // 請求開啟影音裝置
    /*
    navigator.mediaDevices.getUserMedia(constraints)
        .then(function (stream) {
            // 取得當前裝置的影音串流（stream）
            console.log(stream);
            console.log('getDevices',getDevices());
        })
        .catch(function (error) {
            // 如果有錯誤發生
            console.log(error);
        });
        */
    createGrid(1);
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

            $grid.createJqGrid(modelGridOption(modelType, options));


            break;
        case 1:

            options = gridList[id];


            $grid = $('#' + gridList[id].gid);

            $grid.createJqGrid(options);

            break;

    }


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
                $('#wo').val(data.MF001);
                $('#MsgModal').modal('hide');

            }
            break;
        case "seq":
        case "process":
            options.gridDefinitionUrl = invokeURL + "SFIS_STATION_ORDER_LIST";
            options.colAPI = 'SFIS_STATION_ORDER_LIST';
            options.gridDefPostData = {
                MO: $('#wo').val()
            };

            options['onSelectRow'] = function (ids) { //單擊選擇行
                let data = $(this).jqGrid('getRowData', ids);
                $('#pSEQ').val(data.MG002);
                $('#processCode').val(data.MG003);
                $('#processName').text(data.MA002);
                $('#processName').removeClass('d-none');
                $('#MsgModal').modal('hide');
            }
            break;
        case "line":

            options.gridDefinitionUrl = invokeURL + "SFIS_LINE_LIST";
            options.colAPI = 'SFIS_LINE_LIST';
            options.gridDefPostData = {};
            options['onSelectRow'] = function (ids) { //單擊選擇行
                let data = $(this).jqGrid('getRowData', ids);
                $('#lineCode').val(data.ML001);
                $('#lineName').text(data.ML002);
                $('#lineName').removeClass('d-none');
                $('#MsgModal').modal('hide');
            }
            break;

    }

    return options;

}


/*---------------------JqGrid Function End--------------*/
/*---------------------Chart Function Start--------------*/
/*---------------------Chart Function End--------------*/
/*---------------------Other Function Start--------------*/
function frmCheck() {
    let status = false;
    let errorMsg = '';
    console.log();
    if ($("#wo").val() == "") {
        errorMsg += "請輸入工單!\n";

        checkStatus('wo', false);
    } else if ($("#pSEQ").val() == "") {
        errorMsg += "請輸入製程代號!\n";

        checkStatus('wo', true);
        checkStatus('pSEQ', false);
        checkStatus('processCode', false);
    } else if ($("#lineCode").val() == "") {
        errorMsg += "請輸入站別代號!\n";

        checkStatus('wo', true);
        checkStatus('pSEQ', true);
        checkStatus('processCode', true);
        checkStatus('lineCode', false);
    }
    else if ($('#numPeopleGrid').getGridParam('records') == 0) {
        errorMsg += "請輸入員工!\n";
        checkStatus('wo', true);
        checkStatus('pSEQ', true);
        checkStatus('processCode', true);
        checkStatus('lineCode', true);
        checkStatus('eID', false);

    } else {
        checkStatus('eID', true);
        checkStatus('wo', true);
        checkStatus('pSEQ', true);
        checkStatus('processCode', true);
        checkStatus('lineCode', true);

        status = true;
    }

    return status;
}

function getStream() {
    if (window.stream) {
        window.stream.getTracks().forEach(track => {
            track.stop();
        });
    }
    const videoSource = videoSelect.value;
    const constraints = {
        video: {
            deviceId: videoSource ? {
                exact: videoSource
            } : undefined
        }
    };
    return navigator.mediaDevices.getUserMedia(constraints).
        then(gotStream).catch(handleError);
}

function getDevices() {
    // AFAICT in Safari this only gets default devices until gUM is called :/
    return navigator.mediaDevices.enumerateDevices();
}

function gotDevices(deviceInfos) {
    window.deviceInfos = deviceInfos; // make available to console
    console.log('Available input and output devices:', deviceInfos);
    /*for (const deviceInfo of deviceInfos) {
      const option = document.createElement('option');
      option.value = deviceInfo.deviceId;
      if (deviceInfo.kind === 'audioinput') {
        option.text = deviceInfo.label || `Microphone ${audioSelect.length + 1}`;
        audioSelect.appendChild(option);
      } else if (deviceInfo.kind === 'videoinput') {
        option.text = deviceInfo.label || `Camera ${videoSelect.length + 1}`;
        videoSelect.appendChild(option);
      }
    }*/
}
function delRow(gid, rid) {
    console.log(rid);
    $('#' + gid).delRowData(rid);
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
      /*---------------------Other Function End--------------*/