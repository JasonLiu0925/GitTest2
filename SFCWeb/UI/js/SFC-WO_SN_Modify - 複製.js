/*---------------------公用變數 Start--------------*/
var loginuser;
var csm001;
var lineData = new Array();
var gridRows = new Array();
var gridList = [{
    /*caption: "Excel UpLoad Data "
        + "<INPUT TYPE='button' NAME='btnModify' ID='btnModify' VALUE='轉換工單' style='color:black;font-size:12px'>"
        */
    caption: "Excel UpLoad Data LIST"
    ,
    gid: 'jqGrid1',
    pager: '#jqGrid1Pager',
    datatype: 'jsonstring',
    height: 'auto',
    multiselect: false,
    shrinkToFit: true,
    loadonce: true,//頁面排序
    rowNum: 5000, //顯示所有行
    //  styleUI: 'Bootstrap4',
    //  iconSet: 'fontAwesome',
    //responsive: true,
    colNames: ['生產序號', '結果', '錯誤訊息'],
    colModel: [{
        name: 'SN',
        index: 'SN',
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
            alert("請上傳檔案!");
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

                if (persons[0]["SN"] == undefined || persons[0]["當前製令"] == undefined || persons[0]["當前製程"] == undefined) {
                    alert('檔案不正確');
                }

                else {
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
function createGrid(index,data) { //create jagrid
    let options = {};
    let $grid = $('#' + gridList[0].gid);
    options = gridList[0];
    $.jgrid.gridUnload('jqGrid1');
    $grid.createJqGrid(gridList[0]);
   
 
     /* $grid.jqGrid('navGrid', options.pager, {
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
      */
      //gridButton();
      if(index==0){
        setDataToGrid(options.gid, data);
      }
      
      
}



/*---------------------JqGrid Function End--------------*/
/*---------------------Chart Function Start--------------*/
/*---------------------Chart Function End--------------*/
/*---------------------Other Function Start--------------*/
function upFile(data) {
    let snData = [];
    let tNo = null;
    let Action = null;
    let Error = null;
    let result = ajaxGetData(invokeURL + 'SFIS_GET_REWORK_TEMP_NO', {

    });

    gridList[0].colNames = ['NO','SN','來源制令','重工制令','解除組合序號','更換機種', '結果', '錯誤訊息'];
    gridList[0].colModel=[
        {
            name: 'NO',
            index: 'NO',
            align: "center"
        },
        {
        name: 'SN',
        index: 'SN',
        align: "center"
    },
    {
        name: 'SOURCE_WO',
        index: 'SOURCE_WO',
        align: "center"
    },
    {
        name: 'TARGET_WO',
        index: 'TARGET_WO',
        align: "center"
    },
    {
        name: 'IS_AUTO_UNLINK',
        index: 'IS_AUTO_UNLINK',
        align: "center"
    },
    {
        name: 'IS_CHANGE_WO_TYPE',
        index: 'IS_CHANGE_WO_TYPE',
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
    ];
    if (result[0].result == undefined) {
        tNo = result[0].NO;


    } else {
        alert("無法寫入重工資料!")
    }
    if (tNo != undefined && tNo != null) {
        $.each(data, function (index, value) {
            if (value['SN'] != undefined 
                && value['SN'] != '' 
                && value['SN'] != null 
            ) {

                console.log('index', index);
                result = ajaxGetData(invokeURL + 'SFIS_GET_REWORK_TEMPDATA_INSERT', {
                    NO: tNo,
                    SN: String(value['SN']),
                    SOURCE_WO: $('#woSource').val(),
                    TARGET_WO: $('#woRework').val(),
                    IS_AUTO_UNLINK: $('#unLinkSN').val()
                });
                if (result[0].result != 'ok') {         
                    snData.push({
                        NO: tNo,
                        SN: String(value['SN']),
                        SOURCE_WO: $('#woSource').val(),
                        TARGET_WO: $('#woRework').val(),
                        IS_AUTO_UNLINK: $('#unLinkSN').val(),
                        IS_CHANGE_WO_TYPE:$('#changeWOType').val(),
                        Action: 'NG',
                        Error: result[0].result
                    });
                }
               
            } 
            
        });
        if(snData.length>0){
            createGrid(0,snData);
        }else{
            $.each(data, function (index, value) {
                if (value['SN'] != undefined 
                    && value['SN'] != '' 
                    && value['SN'] != null 
                ) {
    
                    console.log('index', index);
                    result = ajaxGetData(invokeURL + 'SFIS_GET_REWORK_TEMPDATA_ACTION', {
                        NO:tNo,
                        isChangeWOPart:$('#changeWOType').val(),
                        isCheckOnly: 'N'
                    });
                    if (result[0].result != 'ok') {         
                        snData.push({
                            NO: tNo,
                            SN: String(value['SN']),
                            SOURCE_WO: $('#woSource').val(),
                            TARGET_WO: $('#woRework').val(),
                            IS_AUTO_UNLINK: $('#unLinkSN').val(),
                            IS_CHANGE_WO_TYPE:$('#changeWOType').val(),
                            Action: 'NG',
                            Error: result[0].result
                        });
                    }
                   
                } 
                
            });
            result = ajaxGetData(invokeURL + 'SFIS_GET_REWORK_TEMPDATA_ACTION_RESULT_LIST', {
                NO:tNo
            });
            if(result[0].result==undefined){
                gridList[0].gridDefinitionUrl=invokeURL + 'SFIS_GET_REWORK_TEMPDATA_ACTION_RESULT_LIST';
                gridList[0].gridDefPostData = {
                    NO: tNo
                };
                createGrid(1,[]);
            }else{
                alert('重工轉制令完成');
            }
           
        }
        
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
            let  row = $("#jqGrid1").jqGrid('getRowData', 1);
            console.log('row',row);
            let result = ajaxGetData(invokeURL + 'SFIS_GET_REWORK_TEMPDATA_ACTION', {
                NO:row.NO,
                isChangeWOPart:row.IS_CHANGE_WO_TYPE,
                isCheckOnly:row.IS_AUTO_UNLINK
            });
            console.log('result:',result);
            gridList[0].gridDefinitionUrl=invokeURL + 'SFIS_GET_REWORK_TEMPDATA_ACTION_RESULT_LIST';
            gridList[0].gridDefPostData = {
                NO: row.NO
            };
            createGrid(1,[]);
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
