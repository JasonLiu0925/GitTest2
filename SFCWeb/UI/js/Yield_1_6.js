/*---------------------公用變數 Start--------------*/
var apiurl = getUrlVars()['type'];
var lineData = new Array();
var gridRows = new Array();
var gridList = [{ //grid初始化參數
    caption: '',
    gid: 'jqGrid1',
    pager: '#jqGrid1Pager',
    shrinkToFit: true,
    gridDefinitionUrl: invokeURL + apiurl,//apiurl P
    
    colAPI: apiurl, //set colModel index
    fixedColFDb: true, //set db
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
    shrinkToFit: true,//適配排版
    //colAPI: 'RMA_HomeCSMNameList', //set colModel index
    // fixedColFDb: true, //set db
    gridDefinitionUrl: invokeURL + 'workorder',//  web_instantly_produce_data_dept
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
        //console.log("data.VALUE = "+data.部門代號);
        $('#Wo').val(data.製令單號);//要放欄位名!!!
        //$('#deptInput').trigger("change");
        $('#listModal').modal('hide');

    },
    search: false,
    refresh: true,
    xls: false

},{
    //grid初始化參數
    caption: '',
    gid: 'jqGridList',
    pager: '#jqGridListPager',
    shrinkToFit: true,
    //colAPI: 'RMA_HomeCSMNameList', //set colModel index
    // fixedColFDb: true, //set db
    gridDefinitionUrl: invokeURL + 'sku',//web_daily_produce_data_quality_line web_instantly_produce_data_line
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
        $('#ItemNo').val(data.料號);
        //$('#deptInput').trigger("change");
        $('#listModal').modal('hide');

    },
    search: true,
    refresh: true,
    xls: false

}];
//&ItemNo=1107A0006301&SDATE=all&EDATE=all
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
    apiProcess();
    BindingButtonClick();
 

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
    // let nHeight = $("iframe").height() / 2;
    // Chart.defaults.global.defaultFontSize = 14;
    // let fsize = '3rem';
    // Chart.defaults.global.defaultFontSize = fsize;
    $('#chartList').show();

    for (let i = 0; i < apiHtml.length; i++) {

        if (apiHtml[i].style != 'grid') {

          //let parameter = apiHtml[i].substr(apiHtml[i].indexOf('?') + 1, apiHtml[i].length);
          //let parameter =apiHtml[i].parameter;
          chartOptions.LabelColNmae = '';
          chartOptions['datasets'] = [{}];
          chartOptions.options = {};
          // chartOptions.postData= {
          //   "WO":"" ,
          //   "ItemNo" : "1107A0006301",
          //   "WO_TYPE" : "",
          //   "SDATE":"all",
          //   "EDATE":"all"

          // };
         
          switch (i) {
            case 0:
              // chartOptions['options'] = {
              //   legend: {
              //     position: 'top',
              //   }
              // };
              // chartOptions.caption = '不良狀況圖';
              chartOptions.LabelColNmae = 'TA010C';
              // chartOptions.xLabel = '(不良狀況)';
              chartOptions.yLabel = '(數量)';
              chartOptions['datasets'][0] = {
                dataColNmae: 'RECCOUNT',
                backgroundColor: '#CE0000',
                label: 'RECCOUNT1'
              };
            //   chartOptions['datasets'].push({
            //     dataColNmae: 'TOTALWH',
            //     backgroundColor: 'blue',
            //     label: 'TOTALWH'
            //   });
            //   chartOptions['datasets'].push({
            //     dataColNmae: 'MONTH_TWH',
            //     backgroundColor: 'red',
            //     label: 'MONTH_TWH'
            //   });
 
              break;
            case 1:
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
              break;
            case 2:

              // chartOptions['options'] = {
              //   legend: {
              //     position: 'top',
              //   }
              // };
              chartOptions.LabelColNmae = 'TA013C'; 
              chartOptions.yLabel = '(數量)';

              chartOptions['datasets'][0] = {
                dataColNmae: 'RECCOUNT',
                backgroundColor: '#CE0000',
                label: 'RECCOUNT'
              };
            
              // chartOptions.datasets[0]['dataColNmae']='MAXWH';
              // chartOptions.datasets[1]['dataColNmae']='TOTALWH';
              // chartOptions.datasets[2]['dataColNmae']='MONTH_TWH';

              break;
            case 3:
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
            
              break;

              
          }
          
          chartOptions.type = apiHtml[i].parameter.charttype;
          chartOptions.url = invokeURL + apiHtml[i].parameter.api;
          console.log('chartOptions:', chartOptions);
          $("#myChart" + i).createCustomChart(chartOptions);


        }
      }


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


    var WO = $('#Wo').val().length==0?'null': $('#Wo').val();
    var ItemNo = $('#ItemNo').val().length==0?'null': $('#ItemNo').val();
    var WO_TYPE =  $('#WO_TYPE').val().length==0?'null': $('#WO_TYPE').val();
    var SDATE = $('#sDate').val().length==0?'all': $('#sDate').val();
    var EDATE = $('#eDate').val().length==0?'all': $('#eDate').val();


    url = url+"&WO="+WO+"&ItemNo="+ItemNo+"&WO_TYPE="+WO_TYPE+"&SDATE="+SDATE+"&EDATE="+EDATE;



    console.log("url:" + url);
    window.open(url);
  });
}

function apiProcess() {
    let html = "";
    let caption = "";
    for (i = 0; i < apiHtml.length; i++) {
      switch (parseInt(i / 1)) {
        case 0:
          caption = '不良狀況圖';
          break;
        case 1:
          caption = "維修原因圖";
          break;
        case 2:
          caption = "責任歸屬圖";
          break;
        case 3:
          caption = "維修零件圖";
          break;

      }
      html += "<div class='col-xs-6 col-lg-6 col-md-6 shadow-sm text-center bg-white div_border p-1 ' >";
    

      html += caption 
      + "<span style='font-size:16px;font-weight:bold;text-align: center; display:block;'>";
      html +=
        "<button type='button' class='btn btn-light btn-xs' name='btnDetail' style='float:right;z-index:9999;position: relative;' url='" +
        apiHtml[i].btnSrc + "'>";
      html += "<span class='fas fa-list' aria-hidden='true'></span></button></span>";

      if (apiHtml[i].style == 'grid') {
        html +=
          '<div ><table id="jqGrid' + i + '" class="table table-bordered " ></table></div>';
      } else {
        html += "<canvas id='myChart" + i + "' ></canvas>";
        //html += "<canvas id='myChart" + i + "' style='width: 100%; height: 100%; '></canvas>";
        // html +="</div>";



      }
      html += "</div>";
      html += "</div>";

    }

    if (i > 0) {
      document.getElementById("chartList").innerHTML = html;
    }
  }
function frmEvent() { //form event function
    $('#searchBtn1').on('click', function () {

        // if($('#SHIFT').val().length==0){
        //     alert("請輸入班別");
        //     return;
        // }

        
        var dEnd = $('#eDate').val();
        var dStart = $('#sDate').val();

        console.log('dStart=====> '+dStart);
        console.log('dEnd=====> '+dEnd);


        // if ((dEnd - dStart > 14) || (dEnd - dStart < 0) ){
        //     alert("查詢日期條件:起訖日期錯誤或日期區間超過7天!");
        //     return;
        // }
        // createGrid(0);

        $('body').loading({
          message: 'Working...',
          theme: 'dark'
      });
      setTimeout(function () {
        createGrid(0);
        $('body').loading('stop');
      }, 500);

       


        
        //createGrid(5);
        var date =new Date();
        $("#refreshtime").text("更新時間:"+date);
        $('#showDiv').show();

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
    $('#chartList').hide();
    
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
       

        "WO": $('#WoButton').val(),//"WO": $('#WoButton').val().length==0?'all': $('#WoButton').val(),
        "ItemNo": $('#ItemNoButton').val(),//"ItemNo": $('#ItemNoButton').val().length==0?'all': $('#ItemNoButton').val(),
        "WO_TYPE" : $('#WO_TYPE').val(),
        "SDATE":$('#sDate').val().length==0?'all': $('#sDate').val(),
        "EDATE":$('#eDate').val().length==0?'all': $('#eDate').val()
    });
    console.log("send_data====> "+pa );
    //console.log("send_data====> "+pa );
    switch (id) {
        case 0:

          chartOptions.postData= {
            "WO": $('#Wo').val().length==0?'': $('#Wo').val(),
            "ItemNo": $('#ItemNo').val().length==0?'': $('#ItemNo').val(),
            "WO_TYPE" : $('#WO_TYPE').val(),
            "SDATE":$('#sDate').val().length==0?'all': $('#sDate').val(),
            "EDATE":$('#eDate').val().length==0?'all': $('#eDate').val()
            // "WO":"" ,
            // "ItemNo" : "1107A0006301",
            // "WO_TYPE" : "",
            // "SDATE":"all",
            // "EDATE":"all"

          };
          
          
          showChart();
            // console.log("url====> "+invokeURL + apiurl);

            // options.gridDefPostData =JSON.parse(pa);
            // $grid.createJqGrid(options);
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