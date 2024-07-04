/*---------------------公用變數 Start--------------*/
var loginuser;
var csm001;
var lineData = new Array();
var gridRows = new Array();
var gridList = [{
    caption: "Excel UpLoad Data "
        + "<INPUT TYPE='button' NAME='btnModify' ID='btnModify' VALUE='解除連結' style='color:black;font-size:12px'>"
    ,
    gid: 'jqGrid1',
    pager: '#jqGrid1Pager',
    datatype: 'jsonstring',
    height: 'auto',
    shrinkToFit: true,
    //  styleUI: 'Bootstrap4',
    //  iconSet: 'fontAwesome',
    //responsive: true,
    colNames: ['生產序號','被組合序號', '結果', '錯誤訊息'],
    colModel: [{
        name: 'SN1',
        index: 'SN1',
        align: "center"
    },
    {
        name: 'SN2',
        index: 'SN2',
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

                if (persons[0]["被組合序號"] == undefined && persons[0]["生產序號"] == undefined)  {
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
    $grid.jqGrid('navGrid', options.pager, {
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
}



/*---------------------JqGrid Function End--------------*/
/*---------------------Chart Function Start--------------*/
/*---------------------Chart Function End--------------*/
/*---------------------Other Function Start--------------*/
function upFile(data) {
    let snData = [];
    $.each(data, function (index, value) {
        snData.push({
            SN1: String(value['生產序號']),
            SN2: String(value['被組合序號']),
            Action: null,
            Error: null
        });

    });
    if (snData.length > 0) {
        createGrid(snData);
    }
    else {
        alert('檔案沒有生產序號&被組合序號');
    }


}

function gridButton() {
    let $grid = $('#' + gridList[0].gid);
    let snData = [];
    let status='';
    let msg='';
    $('#btnModify').off('click');
    $('#btnModify').on('click', function () {
      
        if (confirm("Are you sure?")) {
            if ($('#wo').val() == '' ) {
                alert('工單號碼不明');
            }

            else {
               // console.log($grid.getGridParam('records'));
               // console.log($grid.getGridParam('data'));
                $.map($grid.getGridParam('data'), function (item) {

                    let result = ajaxGetData(invokeURL + 'SFIS_WO_SN_UNLINK_TO_HISTORY_INSERT', {
                        TB001:item.SN1,
                        TB003:item.SN2
                    }); 
                   
                    if (result[0]["result"] == 'ok') {
                        status='UnLink OK';
                        result = ajaxGetData(invokeURL + 'SFIS_WO_SN_UNLINK_DEL', {
                            TB001:item.SN1,
                            TB003:item.SN2
                        }); 
                        if (result[0]["result"] == 'ok') {
                            status='UnLink OK';
                            msg=null;
                        }
                        else{
                            status='UnLink NG';
                            msg=result[0]["result"];
                        }
                        snData.push({
                            SN1: item.SN1,
                            SN2: item.SN1,
                            Action: status,
                            Error: msg
                        });
                    }
                    else{
                        status='HISTORY NG';
                        msg=result[0]["result"];
                        snData.push({
                            SN1: item.SN1,
                            SN2: item.SN1,
                            Action: status,
                            Error: msg
                        });
                    }
                   
                });
                if (snData.length > 0) {
                    createGrid(snData);
                }
                
                
            }
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
/*---------------------Other Function End--------------*/
