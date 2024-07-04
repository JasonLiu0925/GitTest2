/*---------------------公用變數 Start--------------*/
var UType = '';
gridList = [{ //grid初始化參數
    caption: '',
    gid: 'jqGrid1',
    pager: '#jqGridPager1',
    shrinkToFit: true,
    gridDefinitionUrl: invokeURL + 'SFIS_Hold_Key_LIST',
    gridDefPostData: {},
    colAPI: 'SFIS_Hold_Key_LIST', //set colModel index
    fixedColFDb: true, //set db
    search: true,
    refresh: true,
    xls: true

}];
/*---------------------公用變數 End--------------*/
/*---------------------UI event Function Start--------------*/
$(document).ready(function () { //form load function
    loginCheck(); //登入檢查
    $("#menu").load("Top.html");
    $("#bottom").load("Bottom.html");
    initFrm();



});

function frmEvent() { //form event function
    let $grid = $('#' + gridList[0].gid);

    $('#okSN').on('keyup', function (event) {

        if (event.keyCode == 13) {
            $grid.searchByGrid('VH001', $('#okSN').val());
            $('#okSN').val('');
            $('#okSN').focus();
        }

    });
    $('#okClearBtn').on('click', function () {

        $grid.setGridParam({ postData: { filters: {} } }).trigger("reloadGrid");

    });
    $('#excelUp').on('click', function () {

        $("#qryModal").modal('show');

    });

    $('#upOk').on('click', function () {
        if ($("#excel-file").val() == "") {
            if ($("#filelist").text() == "") {
                alert("Please choose to upload the attachment file!");
            }
        } else {

            var files = $('#excel-file')[0].files;
            $("#qryModal").modal('hide');
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
                if (persons[0]["Key"] == undefined ) {
                    alert('File content is incorrect');
                } else {
                    $('body').loading({
                        message: 'Working...',
                        theme: 'dark'
                    });
                    setTimeout(function () {
                        let myfilter = { groupOp: "OR", rules: [] };
                        $.each(persons, function (index, value) {
                            //搜尋key Json
                            console.log(String(value["Key"]));
                            myfilter.rules.push({ field: "VH001", op: "eq", data: String(value["Key"]) });
                        });
                        
                        $('#jqGrid1').setGridParam({ postData: {filters: JSON.stringify(myfilter) } }).trigger("reloadGrid");
               
                        $('body').loading('stop');
                    }, 500);
                    
                }

            };
            // 以二進位制方式開啟檔案
            fileReader.readAsBinaryString(files[0]);
            
        }

    });

}

function resize() {


}

/*---------------------UI event Function Start--------------*/
/*---------------------Form Function Start--------------*/
function initFrm() { //init form

    let typeStr = '';
    let result;


    createGrid(0);
    frmEvent();





}

/*---------------------Form Function End--------------*/
/*---------------------JqGrid Function Start--------------*/
function createGrid(id) { //create jagrid
    let options = {};
    let $grid;
    options = gridList[0];
    //options.gridDefPostData={ 'USERID': $('#txt_id').val()};   
    console.log(options);
    $grid = $('#' + options.gid);
    $.jgrid.gridUnload(options.gid);
    switch (id) {
        case 0:
            $grid.createJqGrid(options);
            break;
    }
}





/*---------------------JqGrid Function End--------------*/
/*---------------------Chart Function Start--------------*/
function createChart(id) {


}


/*---------------------Chart Function End--------------*/
/*---------------------Other Function Start--------------*/
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