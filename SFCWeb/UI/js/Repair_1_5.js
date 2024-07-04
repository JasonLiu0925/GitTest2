/*---------------------公用變數 Start--------------*/
var apiurl = getUrlVars()['type'];
var lineData = new Array();
var gridRows = new Array();
var sn="";
var gridList = [{ //grid初始化參數
    caption: '',
    gid: 'jqGrid1',
    pager: '#jqGrid1Pager',
    shrinkToFit: true,
    gridDefinitionUrl: invokeURL + apiurl,//apiurl P
    
    colAPI: apiurl, //set colModel index
    fixedColFDb: false, //set db
    gridDefPostData: {

        
    },
    search: true,
    refresh: true,
    xls: true,

},{ //grid初始化參數
    caption: '',
    gid: 'jqGrid1',
    pager: '#jqGrid1Pager',
    shrinkToFit: true,
    gridDefinitionUrl: invokeURL + apiurl,//apiurl P
    
    colAPI: apiurl, //set colModel index
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


function upFile(data) {
    let snData = [];
    $.each(data, function (index, value) {
        if (value['製令單號'] == undefined || value['製令單號'] == '' || value['製令單號'] == null) {

            console.log('index', index);
        }
        else {
            
            sn+=String(value['製令單號'])+',';


            // snData.push({
            //     SN: String(value['生產序號']),
            //     Action: null,
            //     Error: null
            // });
        }





    });
    
    createGrid(1);
    var date =new Date();
    $("#refreshtime").text("更新時間:"+date);
    $('#showDiv').show();
    // if (snData.length > 0) {
    //     createGrid(1);
    // }
    // else {
    //     alert('檔案沒有生產序號');
    // }


}


function frmEvent() { //form event function




    $('#excelUp').on('click', function () {
        if ($("#excel-file").val() == "") {
            alert("Plz upload files!");
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

    });


    $('#searchBtn1').on('click', function () {

        if($('#deptInput').val().length==0){
            alert("Input WO");
            return;
        }

        createGrid(0);



       


        
        //createGrid(5);
        var date =new Date();
        $("#refreshtime").text("更新時間:"+date);
        $('#showDiv').show();

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
    $('#showDiv').hide();

    $('#listModal').modal('hide');

    $("#excel-file").val("");
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


   
    options.caption = "線別資料查詢結果";
    var date = new Date().format('yyyyMMdd');
     
    //console.log("send_data====> "+pa );
    switch (id) {
        case 0:
            let pa=JSON.stringify({
                "WO": $('#deptInput').val()
            });

            console.log("url====> "+invokeURL + apiurl);

            options.gridDefPostData =JSON.parse(pa);
            $grid.createJqGrid(options);
            break;
        case 1:
            let pa1=JSON.stringify({
                "WO": sn
            });
            console.log("send_data====> "+pa1 );



            options.gridDefPostData =JSON.parse(pa1);
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




            
    }






}



/*---------------------JqGrid Function End--------------*/
/*---------------------Chart Function Start--------------*/
/*---------------------Chart Function End--------------*/
/*---------------------Other Function Start--------------*/

/*---------------------Other Function End--------------*/