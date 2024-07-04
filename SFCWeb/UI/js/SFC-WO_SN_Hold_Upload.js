/*---------------------公用變數 Start--------------*/
var loginuser;
var csm001;
var lineData = new Array();
var gridRows = new Array();
var gridList = [{
    caption: "Excel UpLoad Data "
        + "<INPUT TYPE='button' NAME='btnModify' ID='btnModify' VALUE='Upload Hold' style='color:black;font-size:12px'>"
    ,
    gid: 'jqGrid1',
    //pager: '#jqGrid1Pager',
    datatype: 'jsonstring',
    height: 'auto',
    multiselect: true,
    shrinkToFit: true,
    loadonce: true,//頁面排序
    rowNum: 5000, //顯示所有行
    //  styleUI: 'Bootstrap4',
    //  iconSet: 'fontAwesome',
    //responsive: true,
    colNames: ['Type', 'Values', 'Station','HoldType','Action','Error'],
    colModel: [{
        name: 'Type',
        index: 'Type',
        align: "center"
    },
    {
        name: 'Values',
        index: 'Values',
        align: "center"
    },
    {
        name: 'Station',
        index: 'Station',
        align: "center"
    },
    {
        name: 'HoldType',
        label:'Hold Type',
        index: 'HoldType',
        align: "center"
    },
    {
        name: 'Action',
        index: 'Action',
        align: "center"
    },
    {
        name: 'Error',
        index: 'Error',
        align: "center"
    }
    ],
}];
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

    $('#excelUp').on('click', function () {
        if ($("#excel-file").val() == "") {
            alert("Please choose to upload the attachment file!");
        } else {

            var files = $('#excel-file')[0].files;
            var fileReader = new FileReader();
            fileReader.onload = function (ev) {
                try {
                    var data = ev.target.result
                    var workbook = XLSX.read(data, {
                        type: 'binary'
                    }) // 以二進位制流方式讀取得到整份excel表格物件
                    var persons = []; // 儲存獲取到的資料

                } catch (e) {
                    alert('File type is incorrect');
                    return;
                }
                // 表格的表格範圍，可用於判斷表頭是否數量是否正確
                var fromTo = '';
                // 遍歷每張表讀取
                for (var sheet in workbook.Sheets) {
                    if (workbook.Sheets.hasOwnProperty(sheet)) {
                        fromTo = workbook.Sheets[sheet]['!ref'];
                        console.log('fromTo', fromTo);
                        persons = persons.concat(XLSX.utils.sheet_to_json(workbook.Sheets[
                            sheet]));
                        break; // 如果只取第一張表，就取消註釋這行
                    }
                }
                //在控制檯打印出來表格中的資料
                console.log(persons);

                if (persons[0]["Type"] == undefined || persons[0]["Values"] == undefined || persons[0]["Station"] == undefined || persons[0]["Hold Type"] == undefined ) {
                    alert('File content is incorrect');
                } else {
                    $('body').loading({
                        message: 'Working...',
                        theme: 'dark'
                    });
                    setTimeout(function () {

                        upFile(persons);
                        $('body').loading('stop');
                    }, 500);
                    // upFile(persons);
                }

            };
            // 以二進位制方式開啟檔案
            fileReader.readAsBinaryString(files[0]);
            //$('#jqGrid2').loading('stop');
        }

    });

}



/*---------------------UI event Function Start--------------*/
/*---------------------Form Function Start--------------*/
function initFrm() { //init form



    $("#excel-file").val("");
    //  $("#qryModal").modal('show');
    frmEvent();
    console.log('UID:',getcooky("UID"));
   // if(getcooky("UID")!='102759'){
    if (getcooky("UID")=="104465" || getcooky("UID")=="104691" || getcooky("UID")=="104685" || getcooky("UID")=="104133" ||getcooky("UID")=="104033"
    || getcooky("UID")=="103833" || getcooky("UID")=="103719" || getcooky("UID")=="104236" || getcooky("UID")=="104237" || getcooky("UID")=="103580"
    || getcooky("UID")=="103178"  || getcooky("UID")=="102759" )
    {}
    else{    
        let cburl = "/" + siteName + "/index.html";
        console.log(cburl)
        document.location.href = cburl;
    }



}

/*---------------------Form Function End--------------*/
/*---------------------JqGrid Function Start--------------*/
function createGrid(data) { //create jagrid
    let options = {};
    let $grid = $('#' + gridList[0].gid);
    options = gridList[0];
    $.jgrid.gridUnload('jqGrid1');
    $grid.createJqGrid(gridList[0]);
    setDataToGrid(options.gid, data);
    gridButton();
    /*  $grid.jqGrid('navGrid', options.pager, {
          edit: false,
          add: false,
          del: false,
          search: true,
          refresh: true,
          view: false,
          position: "left",
          cloneToTop: false
      }, {}, {}, {}, {}, {});
      addXls($grid, options.pager);
      gridButton();
      */
}



/*---------------------JqGrid Function End--------------*/
/*---------------------Chart Function Start--------------*/
/*---------------------Chart Function End--------------*/
/*---------------------Other Function Start--------------*/
function upFile(data) {
    let Error="";
    let snData = [];
    $.each(data, function (index, value) {
        if (value['Type'] == undefined || value['Type'] == '' || value['Type'] == null) {

            console.log('index', index);
        
        }
        else  if (value['Values'] == undefined || value['Values'] == '' || value['Values'] == null) {

            console.log('index', index);
        }
        else  if (value['Station'] == undefined || value['Station'] == '' || value['Station'] == null) {

            console.log('index', index);
        }
        else  if (value['Hold Type'] == undefined || value['Hold Type'] == '' || value['Hold Type'] == null) {

            console.log('index', index);
        }
        
        else {
            snData.push({
                Type: String(value['Type']),
                Values: String(value['Values']),
                Station: String(value['Station']),
                HoldType: String(value['Hold Type']),
                Action: null,
                Error: null
            });
        }





    });
    if (snData.length > 0) {
        createGrid(snData);
    }
    else {
        alert('Incomplete file information');
    }


}

function gridButton() {
    let $grid = $('#' + gridList[0].gid);
    let snData = [];
    let status = '';
    let msg = '';
    let ids;
    $('#btnModify').off('click');
    $('#btnModify').on('click', function () {
        // console.log('wo1',$('#wo1').val());
        if (confirm("Are you sure?")) {
            
                // console.log($grid.getGridParam('records'));
                // console.log($grid.getGridParam('data'));
                ids = $grid.getGridParam("selarrrow");
                console.log(ids);

                $('body').loading({
                    message: 'Working...',
                    theme: 'dark'
                });
                setTimeout(function () {



                    $.map($grid.getGridParam('data'), function (item, id) {
                        id++;
                        let flag = ids.some(function (value, index, array) {

                            return value == id ? true : false;

                        });
                        if (flag) {
                            let row = $grid.jqGrid('getRowData', id);
                            result = ajaxGetData(invokeURL + 'SFIS_Hold_Key_CHECK_SELCT', {
                                VH001: item.Values,
                                VH002: item.Type=='WO'?'1':'2',
                                VH003: item.Station
                            });
                            if (result[0].result != undefined ) { 
                                if (item.HoldType == 'Lock') { //Lock
                                    result = ajaxGetData(invokeURL + 'SFIS_Hold_KEY_INSERT', {
                                        CREATOR:getcooky("UID"),
                                        USR_GROU:getUserGroup(),
                                        VH001: item.Values,
                                        VH002:item.Type=='WO'?'1':'2',
                                        VH003:item.Station
                                    });
                                    if (result[0].result != 'ok') {
                                        status='NG';
                                        msg=result[0].result;
                                      
                                    }else{
                                        status='OK';
                                    }
                                }else {
                                    status='NG';
                                    msg='Values of Key  Not exists';
                                }
                            }else{
                                if (item.HoldType == 'UnLock') { //UnLock
                                    result = ajaxGetData(invokeURL + 'SFIS_Hold_KEY_Unhold_UPDATE', {
                                        MODIFIER:getcooky("UID"),
                                        VH001: item.Values,
                                        VH002:item.Type=='WO'?'1':'2',
                                        VH003:item.Station
                                    });
                                    if (result[0].result != 'ok') {
                                        status='NG';
                                        msg=result[0].result;
                                    }else{
                                        status='OK';
                                    }
                                }else{
                                    status='NG';
                                    msg='Values of Key  already exists';
                                }
                            }
                        } else {
                            status = "";
                            msg = "";
                        }
                        snData.push({
                            Type: item.Type,
                            Values: item.Values,
                            Station: item.Station,
                            HoldType:item.HoldType,
                            Action: status,
                            Error: msg
                        });
                    });
                    if (snData.length > 0) {
                        console.log('snData', snData);
                        createGrid(snData);
                    }
                    $('body').loading('stop');
                }, 500);
            
        }

    });

}
function setDataToGrid(gid, result) { //set data to jggrid
    let $self = $('#' + gid);
    $self.jqGrid('clearGridData');

    // show loading message
    $self[0].grid.beginReq();

    $self.jqGrid('setGridParam', {
        data: result
    });
    // $self[0].addJSONData(result);
    // hide the show message

    $self[0].grid.endReq();
    // refresh the grid

    $self.trigger('reloadGrid');


}
/**
 *pager輸出excel函數
 *
 * @param {*} grid
 * @param {*} pager
 */
function addXls(grid, pager) {
    $(grid).navButtonAdd(pager, {
        caption: "",
        title: 'DownLoad Excel ',
        id: "btnXls",
        //buttonicon: "fas fa-file-download",
        buttonicon: "fas fa-download",
        onClickButton: function () {
            $(grid).jqGrid("exportToExcel", {
                includeLabels: true,
                includeGroupHeader: true,
                includeFooter: true,
                fileName: $(grid).jqGrid('getGridParam').caption + new Date().format("yyyyMMddhhmmss") + ".xlsx",
                maxlength: 80 // maxlength for visible string data 
            });
        },
        position: "last",
        sepclass: "ui-separator",
        sepcontent: "&nbsp;&nbsp;"
    });
}
function getUserGroup() { //取得使用者的GROUP
    let uGroup = null;
    let group = ajaxGetData(invokeURL + "SFIS_GETUSERGROUP", {
        USERID: getcooky("UID")
    });
    if (group[0].result == undefined) {
        uGroup = group[0].GROUPID;
    }
    console.log('userGroup', uGroup);
    return uGroup;
}
/*---------------------Other Function End--------------*/
