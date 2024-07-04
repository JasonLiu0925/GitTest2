/*---------------------公用變數 Start--------------*/
var apiurl = getUrlVars()['type'];
var lineData = new Array();
var gridRows = new Array();
var sn="";
var TA007 = "";
var gridList = [{ //grid初始化參數
    caption: '製程查詢',
    gid: 'jqGrid1',
    pager: '#jqGrid1Pager',
    shrinkToFit: true,
    gridDefinitionUrl: invokeURL + 'Production_1_1_5',//apiurl P
    
    colAPI: 'Production_1_1_5A', //set colModel index
    fixedColFDb: false, //set db
    gridDefPostData: {

        
    },
    search: true,
    refresh: true,
    xls: true,
    ondblClickRow:function(rowid,iRow,iCol,e){
                var curPage =  $("#jqGrid1").getGridParam("page");//当前页码 
                var pageSize = $("#jqGrid1").getGridParam("rowNum");//每页显示的记录条数
                var curRowNum = parseInt((curPage-1)*pageSize) + parseInt(rowid); //当前双击的行的行号

                // console.log('curPage',curPage);
                // console.log('pageSize',pageSize);
                // console.log('curRowNum',curRowNum);

                // console.log('iRow',iRow);
                // console.log('iCol',iCol);

                let grid = $("#" + gridList[1].gid);
                let data = $.trim(grid.getRowData()[curRowNum-1]["TA007"]);
                TA007=data;
    
                console.log('TA007',TA007);

                createGrid(7);
                createGrid(8);
                createGrid(9);
                createGrid(10);
                createGrid(11);
                createGrid(12);
                createGrid(13);
                createGrid(14);
        
            }

},{ //grid初始化參數
    caption: '',
    gid: 'jqGrid1',
    pager: '#jqGrid1Pager',
    shrinkToFit: true,
    gridDefinitionUrl: invokeURL +'Production_1_1_5',//apiurl P
    
    colAPI: 'Production_1_1_5A', //set colModel index
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


},{ //grid初始化參數
    //grid初始化參數
    caption: '',
    gid: 'jqGridList',
    pager: '#jqGridListPager',
    shrinkToFit: true,
    //colAPI: 'RMA_HomeCSMNameList', //set colModel index
    // fixedColFDb: true, //set db
    gridDefinitionUrl: invokeURL + 'line',
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
        $('#LINE').val(data.生產線代號);
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
    gridDefinitionUrl: invokeURL + 'process',
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
        $('#PROCESS').val(data.製程代號);
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
    gridDefinitionUrl: invokeURL + 'customer',
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
        $('#CUSTOMER').val(data.客戶代號);
        //$('#deptInput').trigger("change");
        $('#listModal').modal('hide');

    },
    search: true,
    refresh: true,
    xls: false


},{ //grid初始化參數 7
    caption: '投入明細',
    gid: 'jqGrid2',
    pager: '#jqGrid2Pager',
    shrinkToFit: false,
    gridDefinitionUrl: invokeURL +'Production_1_1_5',//apiurl P
    
    colAPI: 'Production_1_1_5B', //set colModel index
    fixedColFDb: false, //set db
    gridDefPostData: {

        
    },
    search: true,
    refresh: true,
    xls: true,

},{ //grid初始化參數 8
    caption: '投入明細-連結方式',
    gid: 'jqGrid3',
    pager: '#jqGrid3Pager',
    shrinkToFit: false,
    gridDefinitionUrl: invokeURL +'Production_1_1_5',//apiurl P
    
    colAPI: 'Production_1_1_5C', //set colModel index
    fixedColFDb: false, //set db
    gridDefPostData: {

        
    },
    search: true,
    refresh: true,
    xls: true,

},{ //grid初始化參數 9
    caption: '投入明細',
    gid: 'jqGrid4',
    pager: '#jqGrid4Pager',
    shrinkToFit: false,
    gridDefinitionUrl: invokeURL +'Production_1_1_5',//apiurl P
    
    colAPI: '', //set colModel index
    fixedColFDb: false, //set db
    gridDefPostData: {

        
    },
    search: true,
    refresh: true,
    xls: true,

},{ //grid初始化參數 10
    caption: '完成明細',
    gid: 'jqGrid5',
    pager: '#jqGrid5Pager',
    shrinkToFit: false,
    gridDefinitionUrl: invokeURL +'Production_1_1_5',//apiurl P
    
    colAPI: 'Production_1_1_5B', //set colModel index
    fixedColFDb: false, //set db
    gridDefPostData: {

        
    },
    search: true,
    refresh: true,
    xls: true,

},{ //grid初始化參數 11
    caption: '待修明細',
    gid: 'jqGrid6',
    pager: '#jqGrid6Pager',
    shrinkToFit: false,
    gridDefinitionUrl: invokeURL +'Production_1_1_5',//apiurl P
    
    // colAPI: 'Production_1_1_5B', //set colModel index
    fixedColFDb: false, //set db
    gridDefPostData: {

        
    },
    search: true,
    refresh: true,
    xls: true,

},{ //grid初始化參數 12
    caption: '完修明細',
    gid: 'jqGrid7',
    pager: '#jqGrid7Pager',
    shrinkToFit: false,
    gridDefinitionUrl: invokeURL +'Production_1_1_5',//apiurl P
    
    // colAPI: 'Production_1_1_5B', //set colModel index
    fixedColFDb: false, //set db
    gridDefPostData: {

        
    },
    search: true,
    refresh: true,
    xls: true,

},{ //grid初始化參數 13
    caption: '報廢明細',
    gid: 'jqGrid8',
    pager: '#jqGrid8Pager',
    shrinkToFit: false,
    gridDefinitionUrl: invokeURL +'Production_1_1_5',//apiurl P
    
    // colAPI: 'Production_1_1_5B', //set colModel index
    fixedColFDb: false, //set db
    gridDefPostData: {

        
    },
    search: true,
    refresh: true,
    xls: true,

},{ //grid初始化參數 14
    caption: '初檢OK明細',
    gid: 'jqGrid9',
    pager: '#jqGrid9Pager',
    shrinkToFit: false,
    gridDefinitionUrl: invokeURL +'Production_1_1_5',//apiurl P
    
    // colAPI: 'Production_1_1_5B', //set colModel index
    fixedColFDb: false, //set db
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
     
     


});



function frmEvent() { //form event function



    $('#searchBtn1').on('click', function () {

        if($('#SHIFTY').val()==1){
            createGrid(0);
        }else if($('#SHIFTY').val()==2){
            createGrid(1);
        }

        


        
        //createGrid(5);
        var date =new Date();
        $("#refreshtime").text("更新時間:"+date);
        $('#showDiv').show();

    });


    $('#searchBtn2').on('click', function () {

        // createGrid(0);
        
        if ($("#excel-file").val() == "") {
            alert("請上傳檔案");
        } else {
            $('#WO').val('');
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

                if (persons[0]["製令單號"] == undefined) {
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


        
        //createGrid(5);
        var date =new Date();
        $("#refreshtime").text("更新時間:"+date);
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

    $('#line').on('click',function (){
        $('#listModal').modal('show');
        createGrid(4);
    });

    $('#process').on('click',function (){
        $('#listModal').modal('show');
        createGrid(5);
    });


    $('#customer').on('click',function (){
        $('#listModal').modal('show');
        createGrid(6);
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




    $('#woDiv').show(); 
    $('#skuDiv').hide();  
    $('#ischeckstir').show(); 
    
    $('#SHIFTY').change(function(e){
        // alert("===");

        $('#woDiv').hide(); 
        $('#skuDiv').hide();  
        $('#ischeckstir').hide(); 

        $('#WO').val(''); 
        $('#SKU').val(''); 
        


        if($('#SHIFTY').val()=='1'){
            $('#ischeckstir').show(); 
            $('#woDiv').show(); 
            $('#skuDiv').hide();  
        }else if($('#SHIFTY').val()=='2'){
            $('#ischeckstir').hide(); 
            $('#sn_recov').hide(); 
            $('#skuDiv').show();  
        }else if($('#SHIFTY').val()=='3'){

 

        }



    });



}



 

function upFile(data) {
    let snData = [];
    var msg;
    $.each(data, function (index, value) {
        if (value['製令單號'] == undefined || value['製令單號'] == '' || value['製令單號'] == null) {
            alert("Excel請輸入製令單號");
            console.log('index', index);
            console.log('index', data);
        }
        else {
            
            wo+=String(value['製令單號'])+',';

            if($('#snList').val()==''){
                alert("請輸入序號");
                return;
            }

            
            console.log('WO', value['製令單號']);

            

            // result = ajaxGetData(invokeURL + 'SSFB008_RecoverHisData_SN', { 
            //     "@SN": value['序號'],
            //     "@TZ": 'Y',
            //     "@UPDATEMO": 'Y'
            // });
          
            // if (result[0]["msg"] == null ||result[0]["msg"] == '') {
            //     msg =value['序號']+':資料恢復成功! \n';
            //     $("#result_msg").text(msg);
            // }
            // else {
            //     msg =value['序號']+':資料恢復失敗,原因:'+result[0]["msg"];+'\n';
            //     $("#result_msg").text(msg);
            // }
              


        }


        


    });
    
    createGrid(0);
    // var date =new Date();
    // $("#refreshtime").text("更新時間:"+date);
   
   

}



/*---------------------UI event Function Start--------------*/
/*---------------------Form Function Start--------------*/
function initFrm() { //init form
    $('#showDiv').hide();

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

    var pa='';
   

    // options.caption = "查詢結果";
    var date = new Date().format('yyyyMMdd');
     
    //console.log("send_data====> "+pa );
    switch (id) {
        case 0:
            pa=JSON.stringify({
                "WO": $('#WO').val(),
                "WOCHILD": $('#stir').prop("checked")?'Y':'N',
                "PART": '',
                "SDATE": $('#sDate').val(),
                "EDATE": $('#eDate').val(),
                "TA007": '',
                "CHO": '1'
            });

            // console.log("url====> "+invokeURL + apiurl);

            options.gridDefPostData =JSON.parse(pa);
            $grid.createJqGrid(options);
            break;
        case 1:
            pa=JSON.stringify({
                "WO": '',
                "WOCHILD": '',
                "PART": $('#SKU').val(),
                "SDATE": $('#sDate').val(),
                "EDATE": $('#eDate').val(),
                "TA007": '',
                "CHO": '1'
            });

            // console.log("url====> "+invokeURL + apiurl);
            options.gridDefPostData =JSON.parse(pa);
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


        case 7: 
            pa=JSON.stringify({
                "WO": $('#WO').val(),
                "WOCHILD": $('#stir').prop("checked")?'Y':'N',
                "PART": $('#SKU').val(),
                "SDATE": $('#sDate').val(),
                "EDATE": $('#eDate').val(),
                "TA007": TA007,
                "CHO": '2'
            });
            // console.log("url====> "+invokeURL + apiurl);
            options.gridDefPostData =JSON.parse(pa);
            $grid.createJqGrid(options);    
        break;

        
        case 8:
            pa=JSON.stringify({
                "WO": $('#WO').val(),
                "WOCHILD": $('#stir').prop("checked")?'Y':'N',
                "PART": $('#SKU').val(),
                "SDATE": $('#sDate').val(),
                "EDATE": $('#eDate').val(),
                "TA007": TA007,
                "CHO": '3'
            });
            // console.log("url====> "+invokeURL + apiurl);
            options.gridDefPostData =JSON.parse(pa);
            $grid.createJqGrid(options);    
        break;



        case 9:
            pa=JSON.stringify({
                "WO": $('#WO').val(),
                "WOCHILD": $('#stir').prop("checked")?'Y':'N',
                "PART": $('#SKU').val(),
                "SDATE": $('#sDate').val(),
                "EDATE": $('#eDate').val(),
                "TA007": TA007,
                "CHO": '4'
            });
            // console.log("url====> "+invokeURL + apiurl);
            options.gridDefPostData =JSON.parse(pa);
            $grid.createJqGrid(options);
        break;        
        
        case 10:
            pa=JSON.stringify({
                "WO": $('#WO').val(),
                "WOCHILD": $('#stir').prop("checked")?'Y':'N',
                "PART": $('#SKU').val(),
                "SDATE": $('#sDate').val(),
                "EDATE": $('#eDate').val(),
                "TA007": TA007,
                "CHO": '5'
            });
            // console.log("url====> "+invokeURL + apiurl);
            options.gridDefPostData =JSON.parse(pa);
            $grid.createJqGrid(options);
        break;

        case 11:
            pa=JSON.stringify({
                "WO": $('#WO').val(),
                "WOCHILD": $('#stir').prop("checked")?'Y':'N',
                "PART": $('#SKU').val(),
                "SDATE": $('#sDate').val(),
                "EDATE": $('#eDate').val(),
                "TA007": TA007,
                "CHO": '6'
            });
            // console.log("url====> "+invokeURL + apiurl);
            options.gridDefPostData =JSON.parse(pa);
            $grid.createJqGrid(options);
        break;
        case 12:
            pa=JSON.stringify({
                "WO": $('#WO').val(),
                "WOCHILD": $('#stir').prop("checked")?'Y':'N',
                "PART": $('#SKU').val(),
                "SDATE": $('#sDate').val(),
                "EDATE": $('#eDate').val(),
                "TA007": TA007,
                "CHO": '7'
            });
            // console.log("url====> "+invokeURL + apiurl);
            options.gridDefPostData =JSON.parse(pa);
            $grid.createJqGrid(options);
        break;
        case 13:
            pa=JSON.stringify({
                "WO": $('#WO').val(),
                "WOCHILD": $('#stir').prop("checked")?'Y':'N',
                "PART": $('#SKU').val(),
                "SDATE": $('#sDate').val(),
                "EDATE": $('#eDate').val(),
                "TA007": TA007,
                "CHO": '8'
            });
            // console.log("url====> "+invokeURL + apiurl);
            options.gridDefPostData =JSON.parse(pa);
            $grid.createJqGrid(options);
        break;
        case 14:
            pa=JSON.stringify({
                "WO": $('#WO').val(),
                "WOCHILD": $('#stir').prop("checked")?'Y':'N',
                "PART": $('#SKU').val(),
                "SDATE": $('#sDate').val(),
                "EDATE": $('#eDate').val(),
                "TA007": TA007,
                "CHO": '9'
            });
            // console.log("url====> "+invokeURL + apiurl);
            options.gridDefPostData =JSON.parse(pa);
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