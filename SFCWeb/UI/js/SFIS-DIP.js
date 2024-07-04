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
              //colAPI: 'RMA_CSMFormModelSUM', //set colModel index
              fixedColFDb: true, //set db
              gridDefinitionUrl: '',
              //gridDefColionUrl: 'json/unSchedule.json',
              gridDefPostData: {

              },
              beforeProcessing: function (data) {
                  /*
               var symbolsMap = {}, symbolsValues = ":All", rows = data.rows, i, symbol;
        for (i = 0; i < rows.length; i++) {
            symbol = rows[i].Symbol;
            if (!symbolsMap.hasOwnProperty(symbol)) {
                symbolsMap[symbol] = 1;
                symbolsValues += ";" + symbol + ":" + symbol;
            }
        }
        $(this).jqGrid("setColProp", 'Symbol', {
            stype: "select",
            searchoptions: {
            	value: symbolsValues
            }
        }).jqGrid('destroyFilterToolbar')
        .jqGrid('filterToolbar', {
            stringResult: true,
            searchOnEnter: false,
            defaultSearch : "cn"
        }); 
               */
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
          { //grid初始化參數
              caption: 'Key Parts清單',
              gid: 'jqGrid1',
              pager: '#jqGridPager1',
              shrinkToFit: true,
              colAPI: 'SFIS_DIP01_SKU_LIST', //set colModel index
              fixedColFDb: false, //set db
              gridDefinitionUrl: invokeURL + 'SFIS_DIP01_SKU_LIST',
              //gridDefColionUrl: 'json/unSchedule.json',
              gridDefPostData: {

              },
              search: true,
              refresh: true,
              xls: true

          },
          { //grid初始化參數
              caption: '過站清單',
              gid: 'jqGrid2',
              pager: '#jqGridPager2',
              shrinkToFit: true,
              colAPI: 'SFIS_DIP01_SKU_Finished_LIST1', //set colModel index
              fixedColFDb: true, //set db
              //gridDefinitionUrl: invokeURL + 'SFIS_DIP01_SKU_Finished_LIST',
              gridDefinitionUrl: invokeURL + 'SFIS_DIP01_SKU_Finished_LIST1',
              //gridDefColionUrl: 'json/unSchedule.json',
              gridDefPostData: {

              },
              search: true,
              refresh: true,
              xls: true

          },
          { //grid初始化參數
              caption: 'NG清單',
              gid: 'jqGrid3',
              pager: '#jqGridPager3',
              shrinkToFit: true,
              colAPI: 'SFIS_DIP01_SKU_Finished_LIST1', //set colModel index
              fixedColFDb: true, //set db
              //gridDefinitionUrl: invokeURL + 'SFIS_DIP01_SKU_Finished_LIST',
              gridDefinitionUrl: invokeURL + 'SFIS_DIP01_SKU_Finished_LISTNG',
              //gridDefColionUrl: 'json/unSchedule.json',
              gridDefPostData: {

              },
              search: true,
              refresh: true,
              xls: true

          },
          { //grid初始化參數
              caption: '組合清單',
              gid: 'jqGrid4',
              // pager: '#jqGridPager4',
              shrinkToFit: true,
              colAPI: 'SFIS_DIP01_SKU_CombinationMain_LIST', //set colModel index
              fixedColFDb: true, //set db
              //gridDefinitionUrl: invokeURL + 'SFIS_DIP01_SKU_Finished_LIST',
              gridDefinitionUrl: invokeURL + 'SFIS_DIP01_SKU_CombinationMain_LIST',
              //gridDefColionUrl: 'json/unSchedule.json',
              gridDefPostData: {

              },
              subGrid: true,
              subGridRowExpanded: showChildGrid1,
              subGridOptions: {
                  // expand all rows on load
                  expandOnLoad: true
              }


          }


      ];
      /*---------------------公用變數 End--------------*/
      /*---------------------UI event Function Start--------------*/

      $(document).ready(function () { //form load function

          loginCheck(); //登入檢查
          //  $("#menu").load("Top1.html");
          //  $("#bottom").load("Bottom.html");
          initFrm();

          $('#qryModal').modal('show');

          //getLabel();
          GetLabelFile('LI1-20307200 ', 'AP07');

      });

      function GetLabelFile(AMO, APROCESS) { //取得Print Label
          let result = ajaxGetData(invokeURL + 'SFIS_GetLabelFile_LIST', {
              MO: AMO,
              PROCESS: APROCESS
          });
          console.log("result", result);
          if (result[0].result == undefined) {
              let filepath = result[0].NS004 + "\\" + result[0].UG005;
              console.log('filepath', filepath);
              if (!chkFile(filepath)) { //檔案不存在
                  result = ajaxGetData(invokeURL + 'SFIS_DownloadLabelFile_SELECT', {
                    UG001: result[0].UG001,
                    UG002: result[0].UG002,
                    UG003: result[0].UG003,
                    UG004: result[0].UG004,
                  });
                  
                  if(result[0].result == undefined){
                    var sampleBytes = base64ToArrayBuffer(result[0].UG008);
                    console.log(sampleBytes);
                   // saveByteArray([sampleBytes], '1.Lab');
                   downloadFile(sampleBytes);
                  }
              } else { //檔案存在

              }
          }

      }
      function downloadFile(data) {
        //藉型別陣列建構的 blob 來建立 URL
        let fileName = "fileName.lab";
       // const data = getRandomData();
        let blob = new Blob([data], {
          type: "application/octet-binary",
        });
        var href = URL.createObjectURL(blob);
        // 從 Blob 取出資料
        var link = document.createElement("a");
        document.body.appendChild(link);
        link.href = href;
        link.download = fileName;
        link.click();
      }
function base64ToArrayBuffer(base64) {
    var binaryString =  window.atob(base64);
    var binaryLen = binaryString.length;
    var bytes = new Uint8Array(binaryLen);
    for (var i = 0; i < binaryLen; i++)        {
        var ascii = binaryString.charCodeAt(i);
        bytes[i] = ascii;
    }
    return bytes;
}

var saveByteArray = (function () {
    var a = document.createElement("a");
    document.body.appendChild(a);
    a.style = "display: none";
    return function (data, name) {
        var blob = new Blob(data, {type: "octet/stream"}),
            url = window.URL.createObjectURL(blob);
        a.href = url;
        a.download = name;
        a.click();
        window.URL.revokeObjectURL(url);
    };
}());



      function chkFile(filespec) { //檢查檔案存在否
          let result = false;
          let newElem = document.createElement('input');
          newElem.setAttribute("type", "file");
          newElem.setAttribute("name", "theName");
          newElem.setAttribute("value", filespec);
          console.log($(newElem)[0].files);
          if ($(newElem)[0].files.length > 0) {
              result = true;
          }
          delete newElem;
          console.log(result);
          return result;
      }

      function getLabel() {
          let result = ajaxGetData(invokeURL + 'SFIS_GetLabelFile', {
              MO: 'LI1-20307200   ',
              PROCESS: 'AP07'
          });
          console.log('getLabel', result);
          if (result[0]["result"] == undefined) {

              download(result[0].UG008, 'ug008.lab', 'image/png');
          }
      }
      // Function to download data to a file
      function download(data, filename, type) {
          var file = new Blob([data], {
              type: type
          });
          if (window.navigator.msSaveOrOpenBlob) // IE10+
              window.navigator.msSaveOrOpenBlob(file, filename);
          else { // Others
              var a = document.createElement("a"),
                  url = URL.createObjectURL(file);
              a.href = url;
              a.download = filename;
              document.body.appendChild(a);
              a.click();
              setTimeout(function () {
                  document.body.removeChild(a);
                  window.URL.revokeObjectURL(url);
              }, 0);
          }
      }

      function frmEvent() { //form event function


          $('#MsgModal').on('hidden.bs.modal', function (event) {
              let group = ajaxGetData(invokeURL + "SFIS_GETUSERGROUP", {
                  USERID: $('#eIDDispy').val()
              });
              if (group[0].result == undefined) {
                  userGroup = group[0].GROUPID;
              }
              console.log('userGroup', userGroup);
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
          /*
          $('#loadButton').on('click', function () {
              let passingLotN = $('#productionDate').val() + $('#productionTime').val();
              $('.card').removeClass('d-none');

              $('#passingLotNumber').val(passingLotN.replace(/\//g, ""));
              createGrid(1);
              createGrid(2);
          });*/
          $('#setWOBtn').on('click', function () {
              if (frmCheck()) {
                  let passingLotN = $('#productionDate').val() + $('#productionTime').val();
                  $('.card').removeClass('d-none');

                  $('#passingLotNumber').val(passingLotN.replace(/\//g, ""));
                  passingUI();
                  if ($('#processCode').val() == 'DIP01') {
                      createGrid(1);
                  }

                  createGrid(2);
                  createGrid(3);
                  createGrid(4);
                  $('#qryModal').modal('hide');
              }

          });
          $('#pills-ALL-tab a').on('click', function (e) {
              // $('#jqGrid2Box').removeClass('d-none');
              $('#jqGrid1Box').removeClass('d-none');
              $('#jqGrid1Box').removeClass('d-none');
          })
          $('#pills-Active-tab a').on('click', function (e) {
              // $('#jqGrid2Box').removeClass('d-none');
              $('#jqGrid1Box').removeClass('d-none');
              $('#jqGrid2Box').addClass('d-none');
          })
          $('#pills-Completed-tab a').on('click', function (e) {
              // $('#jqGrid2Box').removeClass('d-none');
              $('#jqGrid2Box').removeClass('d-none');
              $('#jqGrid1Box').addClass('d-none');
          })
          $('#SN').on('keypress', function (e) {

              if (event.keyCode == 13) {
                  let taData = setData();
                  let TA02X = '0000';
                  let gid = '';
                  let PassStatus = GetPassStatus($('#SN').val(), $('#processCodeDispy').val(), $('#pSEQDispy').val(), '1', '1', $('#woDispy').val());
                  console.log('GetPassStatus', PassStatus);
                  if (PassStatus.result) {
                      //TA02X='';
                      gid = gridList[3].gid;
                      taData.TA009 = PassStatus.errMsg;
                      // alert(PassStatus.errMsg);
                  } else {
                      //console.log('alldata',$('#jqGrid1').jqGrid('getGridParam','data'));

                      let PassBatc = PassBatchRun(taData, $('#jqGrid1').jqGrid('getGridParam', 'data'), 'WEB', $('#eIDDispy').val(), userGroup, $('#productionDate').val());
                      console.log('PassBatchRun', PassBatc);
                      TA02X = PassBatc.TA02X;
                      if (!PassBatc.result) {
                          taData.TA009 = PassBatc.errMsg;
                          gid = gridList[3].gid;
                          //alert(PassBatc.errMsg);
                      } else {
                          if (taData.TA009 == 3) {
                              gid = gridList[3].gid;
                          } else {
                              gid = gridList[2].gid;
                          }

                          displayQuantity();
                          //  createGrid(2);

                      }

                  }
                  UpdateGridData(gid, TA02X, taData);
                  $('#SN').val('');
              }

          });

      }


      /*--- ------------------UI event Function Start--------------*/
      /*---------------------Form Function Start--------------*/
      function initFrm() { //init form


          $('#productionDate').val(moment().format('YYYYMMDD'));
          $('#productionTime').val(moment().format('HHmmss'));
          $('#eID').val('');
          $('#wo').val('');
          $('#pSEQ').val('');
          $('#processCode').val('');
          $('#stopsNumber').val('');
          $('#lineCode').val('');
          $('#passingLotNumber').val('');
          $('#amountNumber').val('');
          $('#peopleNumber').val('1');
          $('#SN').val('');
          $('#workingHours').val('');

          //  $('#wo').val('LI2-2062641M');
          //  $('#SN').val('202220055017');
          //$('#eName').removeClass('d-none');
          //$('#eName').attr('class','bg-danger');
          // $('#eName').addClass('bg-danger');
          frmEvent();
          //   $('#pills-Completed-tab a').trigger('click');
          // $('#wo').val('LI2-09C15000   ');
          //  $('#processCode').val('DIP01');

      }

      function passingUI() {
          let type = $('#passingCategory').val();
          console.log('type', type);
          switch (type) {
              case "1": //過站
                  $('#testResults').val('1');
                  break;
              case "2": //檢測
                  $('#statueTest').removeClass('d-none');
                  $('#testResults').val('2');
                  break;
              case "3": //組合
                  $('#jqGrid4Box').removeClass('d-none');
                  break;
          }
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


                  options.gridDefPostData = {
                      MF001: $('#wo').val(),
                      NH002: $('#processCode').val()

                  };

                  $grid.createJqGrid(options);
                  break;
              case 2:
                  options.gridDefPostData = {
                      TA005: $('#wo').val(),
                      TA007: $('#processCode').val()

                  };

                  $grid.createJqGrid(options);
                  //顯示數量
                  displayQuantity();
                  /* let CheckInputQty = ajaxGetData(invokeURL + "SFIS_CheckInputQty1", {
                       MO: $('#wo').val(),
                       Process: $('#processCode').val()
                   });
                   if (CheckInputQty[0].result == undefined) {
                       $('#amountNumber').val(CheckInputQty[0].MF008);
                       $('#stopsNumber').val(CheckInputQty[0].MG007);

                   }*/
                  break;
              case 3:
                  options.gridDefPostData = {
                      TA005: $('#wo').val(),
                      TA007: $('#processCode').val()

                  };
                  $grid.createJqGrid(options);
                  break;
              case 4:
                  options.gridDefPostData = {
                      MG001: $('#wo').val(),
                      MG003: $('#processCode').val()

                  };
                  $grid.createJqGrid(options);
                  break;
          }


      }

      function showChildGrid1(parentRowID, parentRowKey) {

          let $grid;


          let row = $('#' + gridList[4].gid).jqGrid('getRowData', parentRowKey);
          let grid_data = bildSubData(row['MG001'], row['MG003']);
          let childGridID = parentRowID + "_table";
          let childGridPagerID = parentRowID + "_pager";
          console.log('grid_data', grid_data);


          $('#' + parentRowID).append('<table id=' + childGridID + '></table><div id=' + childGridPagerID + ' class=scroll></div>');
          $grid = $('#' + childGridID);

          $grid.jqGrid({
              caption: '',
              gid: childGridID,
              // data: grid_data,
              datatype: 'jsonstring',
              height: 'auto',
              styleUI: 'Bootstrap4',
              shrinkToFit: true,
              iconSet: 'fontAwesome',
              responsive: true,
              colModel: [{
                      name: 'NM003',
                      label: '被組合料號',
                      width: 150,
                      editable: false
                  },
                  {
                      name: 'MB002',
                      label: '被組合名稱',
                      width: 150,
                      editable: false
                  },
                  {
                      name: 'SN',
                      label: '被組合生產序號',
                      width: 150,
                      editable: false
                  }
              ]


          });
          for (let i = 0; i < grid_data.length; i++) {
              $grid.jqGrid('addRowData', i + 1, grid_data[i]);
          }


      }

      function bildSubData(MG001, MG003) {

          let rData = [];
          let childGridURL = invokeURL + 'SFIS_DIP01_SKU_CombinationSUB_LIST';
          let result = ajaxGetData(childGridURL, {
              MG001: MG001,
              MG003: MG003
          });
          if (result[0].result == undefined) {
              $.map(result, function (item) {
                  let data = {};
                  let len = item.NM004;
                  for (let i = 0; i < len; i++) {
                      data.NM003 = item.NM003;
                      data.MB002 = item.MB002;
                      data.SN = '';
                  }
                  rData.push(data)
              });
          }
          console.log('rData', rData);
          return rData;
          //設定COL     
          // colModel.name = prop;
          // colModel.index = prop;
          // colModel.label = prop;
          // colModel = $.extend(false, colDefaults, colModel);

      }

      function UpdateGridData(gid, TA02X, data) {
          let $grid = $('#' + gid);
          let row = {
              TA001: data.TA001,
              TA002: TA02X,
              TA003: data.TA003,
              TA004: data.TA004,
              TA009: '',
          };
          let _iCount = $grid.jqGrid('getGridParam', 'records');
          $('#errMsg').text('');
          $('#msgBox').addClass('d-none');

          switch (data.TA009) {
              case '1':
                  row.TA009 = 'PASS';
                  break;
              case '2':
                  row.TA009 = 'OK';
                  break;
              case '3':
                  row.TA009 = 'NG';
                  break;
              default:
                  row.TA009 = data.TA009;
                  $('#errMsg').text(row.TA009);
                  $('#msgBox').removeClass('d-none')

          }
          console.log('UpdateGridData', gid, TA02X, data)
          if (_iCount > 0) {
              $grid.jqGrid('addRowData', _iCount + 1, row, 'before', 1);
          } else {
              $grid.jqGrid('addRowData', _iCount + 1, row);
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
          if ($("#eID").val() == "") {
              errorMsg += "請輸入員工!\n";
              checkStatus('eID', false);
          } else if ($("#wo").val() == "") {
              errorMsg += "請輸入工單!\n";
              checkStatus('eID', true);
              checkStatus('wo', false);
          } else if ($("#pSEQ").val() == "") {
              errorMsg += "請輸入製程代號!\n";
              checkStatus('eID', true);
              checkStatus('wo', true);
              checkStatus('pSEQ', false);
              checkStatus('processCode', false);
          } else if ($("#lineCode").val() == "") {
              errorMsg += "請輸入站別代號!\n";
              checkStatus('eID', true);
              checkStatus('wo', true);
              checkStatus('pSEQ', true);
              checkStatus('processCode', true);
              checkStatus('lineCode', false);
          } else {
              checkStatus('eID', true);
              checkStatus('wo', true);
              checkStatus('pSEQ', true);
              checkStatus('processCode', true);
              checkStatus('lineCode', true);
              $('#eIDDispy').val($('#eID').val());
              $('#eNameDispy').text($('#eName').text());
              $('#eNameDispy').removeClass('d-none');
              $('#woDispy').val($('#wo').val());
              $('#pSEQDispy').val($('#pSEQ').val());
              $('#processCodeDispy').val($('#processCode').val());
              $('#processNameDispy').text($('#processName').text());
              $('#processNameDispy').removeClass('d-none');
              $('#lineCodeDispy').val($('#lineCode').val());
              $('#lineNameDispy').text($('#lineName').text());
              $('#lineNameDispy').removeClass('d-none');
              // $('#transitCategoryDispy').val($('#transitCategory').val());
              status = true;
          }
          /*  if (errorMsg != "") {
                alert(errorMsg);
            } else {

            }*/
          return status;
      }

      function snCheck() {
          let snResult = ajaxGetData(invokeURL + 'SFIS_SN_LINK_LIST', {
              MO001: $('#SN').val()
          });
          console.log('snResult', snResult);
          let woResult = ajaxGetData(invokeURL + 'SFIS_WO_STATUS_SELECT', {
              MF001: $('#wo').val(),
              MG003: $('#processCode').val()
          });
          console.log('woResult', woResult);
          if (snResult[0].result == undefined) { //序號存在
              //檢查工單狀態(MF012=製令狀態  1.開立 2.生產中) 
              if (woResult[0].result == undefined) {
                  if (woResult[0].MF012 == "1" || woResult[0].MF012 == "2") {
                      //判斷是重工工單
                      //判斷流程
                      switch (snResult[0].MF012) {
                          case "01":
                          case "06":
                          case "09": //正常流程
                              normalSNCheck();
                              break;
                          case "02":
                              repairSNCheck(); //維修流程
                              break;
                          case "03":
                              repairFulfillSNCheck(); //完修流程
                              break;
                      }

                  } else { //不是量產工單

                  }

              } else { //沒有工單資料

              }
          } else { //序號不存在
              //檢查歷史區
          }
      }

      function normalSNCheck() { //正常流程檢查

      }

      function reworkSNCheck() { //重工流程檢查

      }

      function repairSNCheck() { //維修流程檢查

      }

      function repairFulfillSNCheck() { //完修流程檢查

      }

      function displayQuantity() {
          //顯示數量
          let CheckInputQty = ajaxGetData(invokeURL + "SFIS_CheckInputQty1", {
              MO: $('#wo').val(),
              Process: $('#processCode').val()
          });
          if (CheckInputQty[0].result == undefined) {
              $('#amountNumber').val(CheckInputQty[0].MF008);
              $('#stopsNumber').val(CheckInputQty[0].MG007);

          }
      }

      function setData() {

          let cdsView1 = {
              TA001: $('#SN').val(),
              // TA003: $('#productionDate').val(),
              // TA004: $('#productionTime').val(),
              TA003: moment().format('YYYYMMDD'),
              TA004: moment().format('HHmmss'),
              TA005: $('#woDispy').val(),
              TA006: $('#pSEQDispy').val(),
              TA007: $('#processCodeDispy').val(),
              TA008: $('#lineCodeDispy').val(),
              TA009: $('#testResults').val(),
              TA010: '',
              TA011: '',
              TA012: '',
              TA013: '',
              TA014: '',
              TA015: '',
              TA016: '0',
              TA017: '0',
              TA018: '',
              //TA018: $('#passingLotNumber').val(),
              // TA019: $('#workingHours').val(),
              TA019: '0',
              TA020: 'P', //過站類別  P:單板過站  B:批次過站
              TA021: '',
              TA022: $('#eIDDispy').val(),
              TA023: '',
              TA024: '',
              TA025: '', //製程行為 SSFMA(MA011) 01.PASS 02.檢測 03.BURN IN 04.MAC 05.組合 06.檢測+MAC 07.MAC+檢測 08.檢測+組合 09.檢測+組合+MAC 20.裝箱 21.裝箱+秤重 22.組合+裝箱 23.組合+裝箱+秤重 30.秤重 40.FQC 50.入庫   A.維修
              TA026: '',
              TA027: '0',
              TA028: '1', //初檢OK否 1.YES 2.NO
              TA029: '',
              TA030: $('#passingLotNumber').val(),
              TA031: '1', //製程首次投入否 1.YES 2.NO
              TA039: apiName,
              TA040: '',
              TA045: $('#peopleNumber').val()

          }
          if (cdsView1.TA009 == 3) {
              cdsView1.TA028 = 2;
          }
          let FSSFMFData = ajaxGetData(invokeURL + "SFIS_GetSSFMF", { //回傳 (工單)MF001,(站點)MG003,完成數量(MF008),預計產量(MF008),總放行數量(LA007)
              MF001: $('#woDispy').val(),
              MG003: $('#processCodeDispy').val()
          });

          if (FSSFMFData[0].result == undefined) {
              cdsView1.TA025 = FSSFMFData[0].MG015;
          }
          if ($('#passingCategory').val() == "2") { //檢測
              cdsView1.TA040 = getTA004();
          }
          if (cdsView1.TA020 == 'B') {
              cdsView1.TA018 = $('#passingLotNumber').val();
          }
          return cdsView1;
      }

      function getTA004() {
          let TA004 = '2';

          let result = ajaxGetData(invokeURL + "SFIS_GETTA004Condition", {
              TA001: $('#SN').val(),
              TA005: $('#woDispy').val(),
              TA007: $('#processCodeDispy').val()
          });


          /* let result = ajaxGetData(invokeURL + "SFIS_GETTA004Condition", {
            TA001: '202220055192',
            TA005: 'LI2-2062641M',
            TA007: 'MI08'
        });*/

          if (result[0].result == undefined) {
              if (result[0].TACOUNT > 0) {
                  TA004 = '1';
              }
          }
          //console.log('getTA004', TA004,result);
          return TA004;
      }
      /*---------------------Other Function End--------------*/