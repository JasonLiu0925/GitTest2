      /*---------------------公用變數 Start--------------*/
      var modelType = "";
      var filterToolbar = false;
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
              colAPI: 'SFIS_DIP01_SKU_Finished_LIST', //set colModel index
              fixedColFDb: true, //set db
              gridDefinitionUrl: invokeURL + 'SFIS_DIP01_SKU_Finished_LIST',
              //gridDefColionUrl: 'json/unSchedule.json',
              gridDefPostData: {

              },
              search: true,
              refresh: true,
              xls: true

          }


      ];
      /*---------------------公用變數 End--------------*/
      /*---------------------UI event Function Start--------------*/

      $(document).ready(function () { //form load function

          loginCheck(); //登入檢查
          //  $("#menu").load("Top1.html");
          //  $("#bottom").load("Bottom.html");

          initFrm();




      });

      function frmEvent() { //form event function


          $('#MsgModal').on('hidden.bs.modal', function (event) {
              // Destroy modal
              $('#MsgModal').modal('dispose');
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
          $('#loadButton').on('click', function () {
              let passingLotN = $('#productionDate').val() + $('#productionTime').val();
              $('.card').removeClass('d-none');

              $('#passingLotNumber').val(passingLotN.replace(/\//g, ""));
              createGrid(1);
              createGrid(2);
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
                  snCheck();
              }

          });

      }



      /*--- ------------------UI event Function Start--------------*/
      /*---------------------Form Function Start--------------*/
      function initFrm() { //init form


          $('#productionDate').val(moment().format('YYYY/MM/DD'));
          $('#productionTime').val(moment().format('hhmmss'));
          /*  $('#eID').val('');
            $('#wo').val('');
            $('#pSEQ').val('');
            $('#processCode').val('');
            $('#stopsNumber').val('');
            $('#lineCode').val('');
            $('#passingLotNumber').val('');
            $('#amountNumber').val('');
            $('#peopleNumber').val('1');
            $('#SN').val('');
            $('#workingHours').val('');*/


          //$('#eName').removeClass('d-none');
          //$('#eName').attr('class','bg-danger');
          // $('#eName').addClass('bg-danger');
          frmEvent();
          // $('#wo').val('LI2-09C15000   ');
          //  $('#processCode').val('DIP01');

      }

      /*---------------------Form Function End--------------*/
      /*---------------------JqGrid Function Start--------------*/
      function createGrid(id) { //create jagrid
          let options = {};


          let $grid;

          $grid = $('#' + gridList[id].gid);
          if (id == 0) {
              //  $grid.jqGrid("destroyFilterToolbar");
          }
          //$('.ui-search-toolbar').remove();

          $.jgrid.gridUnload(gridList[id].gid);
          // $.jgrid.clearBeforeUnload(gridList[id].gid);

          options = gridList[id];
          switch (id) {
              case 0:

                  $grid.createJqGrid(modelGridOption(modelType, options));
                  //  $grid[0].clearToolbar();
                  // $grid.jqGrid('destroyFilterToolbar');

                  //  $grid.jqGrid('filterToolbar',{  searchOnEnter: false});

                  /*   $grid.jqGrid("filterToolbar", {
                         stringResult: true,
                         searchOnEnter: true,
                         searchOperators: true,
                         defaultSearch: "cn"
                     });*/
                  //  $grid.jqGrid('filterToolbar',{autosearch: true});

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
                  break;
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
                  options.gridDefinitionUrl = invokeURL + "SFIS__DIP_WO_LIST";
                  options.colAPI = 'SFIS__DIP_WO_LIST';
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
          let status = true;
          checkStatus('eID', $(''));
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
      /*---------------------Other Function End--------------*/