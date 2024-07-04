/*---------------------公用變數 Start--------------*/
var apiurl = getUrlVars()['type'];
var lineData = new Array();
var gridRows = new Array();
var gridList = [{ //grid初始化參數
    caption: '',
    gid: 'jqGrid1',
    pager: '#jqGrid1Pager',
    shrinkToFit: false,
    gridDefinitionUrl: invokeURL + apiurl+'_detail',//apiurl P
    
    colAPI: 'Yield_1_6_1_detail', //set colModel index
    fixedColFDb: true, //set db
    gridDefPostData: {

        
    },
    search: true,
    refresh: true,
    xls: true,

}];

var apiHtml = [{
    style: 'chart',
    parameter: {
      api: 'Yield_1_6_1',
      charttype: 'bar'
    },
    btnSrc: 'Yield_1_6_1_chart.html?type=Yield_1_6_1'
  },{
    style: 'chart',
    parameter: {
      api: 'Yield_1_6_2',
      charttype: 'bar'
    },
    btnSrc: 'Yield_1_6_1_chart.html?type=Yield_1_6_2'
  },{
    style: 'chart',
    parameter: {
      api: 'Yield_1_6_3',
      charttype: 'bar'
    },
    btnSrc: 'Yield_1_6_1_chart.html?type=Yield_1_6_3'
  },{
    style: 'chart',
    parameter: {
      api: 'Yield_1_6_4',
      charttype: 'bar'
    },
    btnSrc: 'Yield_1_6_1_chart.html?type=Yield_1_6_4'
  }]

  var getUrlString = location.href;
  var url = new URL(getUrlString);
  var WO = url.searchParams.get('WO')=="null"?'':url.searchParams.get('WO'); 
  var ItemNo = url.searchParams.get('ItemNo')=="null"?'':url.searchParams.get('ItemNo'); 
  var WO_TYPE = url.searchParams.get('WO_TYPE')=="null"?'':url.searchParams.get('WO_TYPE');  
  var SDATE = url.searchParams.get('SDATE'); 
  var EDATE = url.searchParams.get('EDATE'); 

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
    


//type=Yield_1_6_1&WO=null&ItemNo=null&WO_TYPE=null&SDATE=all&EDATE=all
    // var params = new URLSearchParams(window.location.search);
    // var WO = params.get('WO');
    // var ItemNo = params.get('ItemNo');
    // var WO_TYPE = params.get('WO_TYPE');
    // var SDATE = params.get('SDATE');
    // var EDATE = params.get('EDATE');
    // console.log('params=====> '+WO+' '+ItemNo+' '+WO_TYPE+' '+SDATE+' '+EDATE);



    // var par = getUrlVars();
    // console.log('par=====> '+par['WO']+' '+par['ItemNo']+' '+par['WO_TYPE']+' '+par['SDATE']+' '+par['EDATE']);

    initFrm();
    apiProcess();
    BindingButtonClick();
 
    showChart();

});
let chartOptions = {
  caption: '', //標題
  url: '', //webapi url
  //  type: 'horizontalBar',
  type: '',
  postData: {}, //要傳遞的參數
  xLabel: '', //x軸標籤
  yLabel: '', //Y軸標籤
  // LabelColNmae: 'LINE',
  LabelColNmae: '',
  datasets: [{

    // chartOptions['datasets'][0] = {
    //     dataColNmae: 'RECCOUNT', //取哪個欄位(Table)的資料
    //     backgroundColor: '#99FF4D',
    //     label: 'RECCOUNT1' //長條圖 跟 上方顯示的標題
    //   };


  }],
  /* datasets: [{
    dataColNmae: 'PROGRESS'
   }],*/

  xy: {
    labels: [], //自定義標籤
    labelAxes: '', //line 標籤
    point: [] //pint(x,y)

  }

};
function showChart() {
  console.log("showChart:" + apiurl);
    chartOptions.LabelColNmae = '';
    chartOptions['datasets'] = [{}];
    chartOptions.options = {};





    chartOptions.postData= {
      // "WO": $('#Wo').val().length==0?'': $('#Wo').val(),
      // "ItemNo": $('#ItemNo').val().length==0?'': $('#ItemNo').val(),
      // "WO_TYPE" : $('#WO_TYPE').val(),
      // "SDATE":$('#sDate').val().length==0?'all': $('#sDate').val(),
      // "EDATE":$('#eDate').val().length==0?'all': $('#eDate').val()
      // "WO":"" ,
      // "ItemNo" : "1107A0006301",
      // "WO_TYPE" : "",
      // "SDATE":"all",
      // "EDATE":"all"

      "WO":WO ,
      "ItemNo" : ItemNo,
      "WO_TYPE" : WO_TYPE,
      "SDATE":SDATE,
      "EDATE":EDATE

    };



    if(apiurl=='Yield_1_6_1'){ 
      console.log("Yield_1_6_1:" + apiurl);
      chartOptions.LabelColNmae = 'TA010C';
      // chartOptions.xLabel = '(不良狀況)';
      chartOptions.yLabel = '(數量)';
      chartOptions['datasets'][0] = {
        dataColNmae: 'RECCOUNT',
        backgroundColor: '#CE0000',
        label: 'RECCOUNT1'
      };
    }else if(apiurl=='Yield_1_6_2'){ 
      chartOptions.LabelColNmae = 'TA012C'; 
      chartOptions.yLabel = '(數量)';
      // chartOptions.caption = '維修原因圖';
      chartOptions['datasets'][0] = {
        dataColNmae: 'RECCOUNT',
        backgroundColor: '#CE0000',
        label: 'RECCOUNT1'
      };
      chartOptions['options'] = {
        legend: false,

        layout: {
          padding: {
            left: 0,
            right: 0,
            top: 0,
            bottom: 0
          }
        },
       
        hover: {
          mode: 'index',
          intersect: true
        },
        elements: {
          rectangle: {
            // backgroundColor: colorize.bind(null, false),
            // borderColor: colorize.bind(null, true),
            borderWidth: 20
          }
        }
      };
    }else if(apiurl=='Yield_1_6_3'){ 
      chartOptions.LabelColNmae = 'TA013C'; 
      chartOptions.yLabel = '(數量)';

      chartOptions['datasets'][0] = {
        dataColNmae: 'RECCOUNT',
        backgroundColor: '#CE0000',
        label: 'RECCOUNT'
      };
    }else if(apiurl=='Yield_1_6_4'){ 
      chartOptions.LabelColNmae = 'TA014';
      chartOptions['datasets'][0] = {
        dataColNmae: 'PROGRESS'
      };
       
     
      chartOptions.yLabel = '(數量)'; 
      chartOptions['datasets'][0] = {
        dataColNmae: 'RECCOUNT',
        backgroundColor: '#CE0000',
        label: 'RECCOUNT'
      };
    }

    chartOptions.type ='bar';
    chartOptions.url = invokeURL + apiurl;
    console.log('chartOptions:', chartOptions);
    $("#myChart").createCustomChart(chartOptions);
          





}

function BindingButtonClick() {
  $("button[name^='btnDetail']").click(function () {
    //button
    /* var node = $(this)
       .parent()
       .next();
     
     var url = node.attr("src");
     */
    var url = $(this).attr("url");
    console.log("url:" + url);
    window.open(url);
  });
}

function apiProcess() {
    let html = "";
    let caption = "";


    console.log('apiurl=====> '+apiurl);

    if(apiurl=='Yield_1_6_1'){
      caption = '不良狀況圖';
    }else if(apiurl=='Yield_1_6_2'){
      caption = "維修原因圖";
    }else if(apiurl=='Yield_1_6_3'){
      caption = "責任歸屬圖";
    }else if(apiurl=='Yield_1_6_4'){
      caption = "維修零件圖";
    }


 
      html += "<div class='col-xs-12 col-lg-12 col-md-12 shadow-sm text-center bg-white div_border p-1 ' >";
    

      html += caption 
      + "<span style='font-size:16px;font-weight:bold;text-align: center; display:block;'>";
      // html +=
      //   "<button type='button' class='btn btn-light btn-xs' name='btnDetail' style='float:right;z-index:9999;position: relative;' url='" +
      //   apiHtml[i].btnSrc + "'>";
      html += "</span>";

 
      html += "<canvas id='myChart' ></canvas>";
        //html += "<canvas id='myChart" + i + "' style='width: 100%; height: 100%; '></canvas>";
        // html +="</div>";

 
      html += "</div>";
      html += "</div>";
      document.getElementById("chartList").innerHTML = html;
    }
 
     
    
  // }
function frmEvent() { //form event function
    $('#searchBtn1').on('click', function () {

      $('body').loading({
        message: 'Working...',
        theme: 'dark'
    });
    setTimeout(function () {
        
      createGrid(0);

        //createGrid(5);
        var date =new Date();
        $("#refreshtime").text("更新時間:"+date);
        $('#showDiv').show();
        $('body').loading('stop');
    }, 500);



        

    });

    $("#WoButton").on('click', function () {

        $('#listModal').modal('show');
        createGrid(1);
    });

    $("#ItemNoButton").on('click', function () {

        $('#listModal').modal('show');
        createGrid(2);
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


   
    options.caption = "查詢結果";
    var date = new Date().format('yyyyMMdd');
    let pa=JSON.stringify({
      "WO":WO ,
      "ItemNo" : ItemNo,
      "WO_TYPE" : WO_TYPE,
      "SDATE":SDATE,
      "EDATE":EDATE
    });
    console.log("send_data====> "+pa );
    //console.log("send_data====> "+pa );
    switch (id) {
        case 0:

          chartOptions.postData= {
            "WO":WO ,
            "ItemNo" : ItemNo,
            "WO_TYPE" : WO_TYPE,
            "SDATE":SDATE,
            "EDATE":EDATE
          };
          
          
            // console.log("url====> "+invokeURL + apiurl);

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




            
    }






}



/*---------------------JqGrid Function End--------------*/
/*---------------------Chart Function Start--------------*/
/*---------------------Chart Function End--------------*/
/*---------------------Other Function Start--------------*/

/*---------------------Other Function End--------------*/