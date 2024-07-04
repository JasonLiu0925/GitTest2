/*---------------------公用變數 Start--------------*/
var apiurl = getUrlVars()['type'];
var lineData = new Array();
var gridRows = new Array();
var gridList = [{ //grid初始化參數
    caption: '',
    gid: 'jqGrid1',
    pager: '#jqGrid1Pager',
    shrinkToFit: true,
    gridDefinitionUrl: invokeURL + 'SSFB008_RecoverHisData',//apiurl
    
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
// "@NG-@java.lang.RuntimeException: java.lang.ClassCastException: class java.lang.Integer cannot be cast to class java.util.List (java.lang.Integer and java.util.List are in module java.base of loader 'bootstrap')"
// "@NG-@java.lang.RuntimeException: java.lang.ClassCastException: class java.lang.Integer cannot be cast to class java.util.List (java.lang.Integer and java.util.List are in module java.base of loader 'bootstrap')"

function frmEvent() { //form event function
    $('#searchBtn1').on('click', function () {



        
        var msg = '資料恢復中...'
        $("#wait").text(msg);

        

        var result;
        if($('#record_type').val()=='1'){
            if($('#woList').val()==''){
                alert("請輸入工單");
                return;
            }
            result = ajaxGetData(invokeURL + 'SSFB008_RecoverHisData', { 
                "@WO": $('#woList').val(),
                "@isOnly_MF_MG": $('#showtype').val()
            });

        }else if($('#record_type').val()=='2'){
            

            if($('#snList').val()==''){
                alert("請輸入序號");
                return;
            }

            result = ajaxGetData(invokeURL + 'SSFB008_RecoverHisData_SN', { 
                "@SN": $('#snList').val(),
                "@TZ": 'Y',
                "@UPDATEMO": 'Y'
            });


        }else if($('#record_type').val()=='3'){

            if ($("#excel-file").val() == "") {
                alert("請上傳檔案");
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
    
                    if (persons[0]["序號"] == undefined) {
                        alert('File content is incorrect');
                    } else {
                        // $('body').loading({
                        //     message: 'Working...',
                        //     theme: 'dark'
                        // });
                        // setTimeout(function () {
    
                        //     upFile(persons);
                        //     // $('body').loading('stop');
                        // }, 5000);
                        upFile(persons);
                    }
    
                };
                // 以二進位制方式開啟檔案
                fileReader.readAsBinaryString(files[0]);
                //$('#jqGrid2').loading('stop');
            }

            

        }

 
        console.log('result', result);

        if (result[0]["msg"] == null ||result[0]["msg"] == '') {
            msg ='資料恢復成功! '
            $("#result_msg").text(msg);
        }
        else {
            msg ='資料恢復失敗:'+result[0]["msg"];
            $("#result_msg").text(msg);
        }
        
        var date =new Date();
        $("#refreshtime").text("更新時間:"+date);
        // createGrid(0);
        

    });

    $("#woListButton").on('click', function () {

        $('#listModal').modal('show');
        createGrid(1);
    });




    $('#sn_recov').hide(); 
    $('#wo_recov').show(); 
    $('#wo_recov1').show(); 
    
    $('#excel_div').hide(); 
    $('#excel_btn').hide(); 
    $('#sample_download').hide(); 

    
    $('#record_type').change(function(e){
        // alert("===");

        $('#sn_recov').hide(); 
        $('#wo_recov').hide(); 
        $('#wo_recov1').hide(); 
        $('#excel_div').hide(); 
        $('#excel_btn').hide(); 
        $('#sample_download').hide(); 



        if($('#record_type').val()=='1'){
            // $('#sn_recov').hide(); 
            $('#wo_recov').show(); 
            $('#wo_recov1').show(); 
        }else if($('#record_type').val()=='2'){
            $('#sn_recov').show(); 
            // $('#wo_recov').hide(); 
            // $('#wo_recov1').hide(); 
        }else if($('#record_type').val()=='3'){


            $('#excel_div').show(); 
            $('#excel_btn').show(); 
            $('#sample_download').show(); 

        }



    });




}

  

function upFile(data) {
    let snData = [];
    var msg;
    $.each(data, function (index, value) {
        if (value['序號'] == undefined || value['序號'] == '' || value['序號'] == null) {
            alert("請輸入序號");
            console.log('index', index);
            console.log('index', data);
        }
        else {
            
            // sn+=String(value['序號'])+',';

            // if($('#snList').val()==''){
            //     alert("請輸入序號");
            //     return;
            // }

            
            console.log('SN', value['序號']);

            result = ajaxGetData(invokeURL + 'SSFB008_RecoverHisData_SN', { 
                "@SN": value['序號'],
                "@TZ": 'Y',
                "@UPDATEMO": 'Y'
            });
          
            if (result[0]["msg"] == null ||result[0]["msg"] == '') {
                msg =value['序號']+':資料恢復成功! \n';
                $("#result_msg").text(msg);
            }
            else {
                msg =value['序號']+':資料恢復失敗,原因:'+result[0]["msg"];+'\n';
                $("#result_msg").text(msg);
            }
              


        }





    });
    
    
    // var date =new Date();
    // $("#refreshtime").text("更新時間:"+date);
   
   

}

/*---------------------UI event Function Start--------------*/
/*---------------------Form Function Start--------------*/
function initFrm() { //init form
    $('#wipDiv').hide();
    $('#wipDiv').show();
    $('#listModal').modal('hide'); 
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
            console.log("url====> "+invokeURL + apiurl);
            var date = new Date().format('yyyyMMdd');
            
             
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
                "@WO": $('#woList').val(),
                "@isOnly_MF_MG": $('#showtype').val()
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