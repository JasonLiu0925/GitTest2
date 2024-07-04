      var converApi = "";
      /*---------------------公用變數 Start--------------*/
      var loginuser;
      var csm001;
      var lineData = new Array();
      var gridRows = new Array();
      var gridList = [{ //grid初始化參數
              caption: 'Data  OK',
              gid: 'jqGrid1',
              pager: '#jqGrid1Pager',
              shrinkToFit: true,
              datatype: 'jsonstring',
              search: true,
              refresh: true,
              xls: true

          },
          { //grid初始化參數
              caption: 'Data  NG',
              gid: 'jqGrid2',
              pager: '#jqGrid2Pager',
              shrinkToFit: true,
              datatype: 'jsonstring',
              search: true,
              refresh: true,
              xls: true

          },
          { //grid初始化參數
              caption: 'Data  Conver',
              gid: 'jqGrid3',
              pager: '#jqGrid3Pager',
              shrinkToFit: true,
              datatype: 'jsonstring',
              search: true,
              refresh: true,
              xls: true

          }

      ];
      /*---------------------公用變數 End--------------*/
      /*---------------------UI event Function Start--------------*/

      $(document).ready(function () { //form load function

          loginCheck(); //登入檢查


          $("#menu").load("RMA-Top1.html");
          $("#bottom").load("Bottom.html");

          initFrm();




      });

      function frmEvent() { //form event function
          $('#executeBtn').on('click', function () {
              let $grid = $('#' + gridList[0].gid);
              let data = $grid.getGridParam("data");
              let odata = [];
              let colName = getColModel(data).colNames;
              console.log("converApi", converApi);
              $.each(data, function (index, value) {

                  let post = {};
                  let result = [];
                  $.each(colName, function (index, col) {
                      if (col != "_id_") {
                          post[col] = value[col];
                      }
                     
                  });
                  console.log("post", post);
                  //d =ajaxGetData(converApi, post);//.result[0];
                  result = ajaxGetData(converApi, post);

                  console.log("result", result);
                  console.log(result[0]["RESULT"]);
                  console.log(result[0]["result"]);
                  if (result[0]["RESULT"]) {
                      post["result"] = result[0]["RESULT"];
                  } else {
                      post["result"] = result[0]["result"];
                  }
                  odata.push(post);

              });
              createGrid(2, odata);
          });

          $('#excelUp').on('click', function () {
              if ($("#excel-file").val() == "") {
                  if ($("#filelist").text() == "") {
                      alert("Please choose to upload the attachment file!");
                  }
              } else {

                  var files = $('#excel-file')[0].files;
                  $("#qryModal").modal('hide');
                  //$('#jqGrid2').loading();
                  /*$('#jqGrid2').loading({
                      message: 'Working...',
                      theme: 'dark'
                    });*/
                  //var files = e.target.files;
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


                      if (checkFile(persons)) {
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

          let result;
          loginuser = getcooky("loginuser");
          let rmano = getUrlVars("p1")["p1"];


          $("#excel-file").val("");
          $("#qryModal").modal('show');
          frmEvent();




      }

      /*---------------------Form Function End--------------*/
      /*---------------------JqGrid Function Start--------------*/
      function createGrid(id, result) { //create jagrid
          let $grid = $('#' + gridList[id].gid);
          $.jgrid.gridUnload(gridList[id].gid);
          let options = gridList[id];
          options.datastr = result;
          options.colModel = getColModel(options.datastr).colModel,
              $grid.createJqGrid(options);
          $grid.jqGrid('navGrid', options.pager, {
                  del: false,
                  add: false,
                  edit: false
              }, //options
              {}, // edit options
              {}, // add options
              {}, // del options
              {});
          $grid.navAddXls($grid, options.pager);
      }
      //拆解欄位
      let getColModel = function (jsonData) {
          let colDefaults = {
              index: '',
              name: '',
              label: '',
              // width: 150,
              autoResizing: true,
              editable: true,
              edittype: '',
              editoptions: '',
              editrules: {
                  required: true,
                  edithidden: true
              }, //編輯規則
              sorttype: 'text',
              hidden: false,
              align: 'center'

          };
          let colOption = {};

          let len = Object.keys(jsonData[0]).length;
          let listOfColumnModels = [];
          let listOfColumnName = [];
          //console.log(listOfColumnModels.len);
          if (len <= 0) return;
          for (let i = 0; i < len; i++) {
              let prop = Object.keys(jsonData[0])[i];
              let colModel = {};
              let colSelect = "";
              colModel.name = prop;
              colModel.index = prop;
              colModel.label = prop;
              colModel = $.extend(false, colDefaults, colModel);
              //colDefaults
              listOfColumnName.push(prop);
              listOfColumnModels.push(colModel);

          }


          colOption.colNames = listOfColumnName;
          colOption.colModel = listOfColumnModels;
          return colOption;
      }



      /*---------------------JqGrid Function End--------------*/
      /*---------------------Chart Function Start--------------*/
      /*---------------------Chart Function End--------------*/
      /*---------------------Other Function Start--------------*/
      function checkFile(data) {
          let pType = $('#pType').val();
          let pAction = $('#pAction').val();
          let result = false;
          switch (pAction) {
              case "woSplit": //拆工單		
                  //file Title:來源WO,SN,目的WO	
                  if (data[0]["WO Source"] == undefined || data[0]["SN Source"] == undefined || data[0]["WO Target"] == undefined || data[0]["SN Target"] == undefined) {
                      result = true;
                  }
                  break;
              case "woWrongTicket": //投錯工單
                  //file Title:來源WO,SN,目的WO
                  if (data[0]["WO Source"] == undefined || data[0]["SN Source"] == undefined || data[0]["WO Target"] == undefined || data[0]["SN Target"] == undefined) {
                      result = true;
                  }
                  break;
              case "snSWAP": //SN SWAP
                  if (pType == "FA") {
                      //FA	
                      //file Title:來源WO,SN,目的WO,SN1,SN2…
                      /*  if (data[0]["WO Source"] == undefined || data[0]["SN Source"] == undefined || data[0]["WO Target"] == undefined || data[0]["SN Target"] == undefined) {
                            result = true;
                        } else {*/
                      converApi = invokeURL + 'SFIS_SplitWO'
                      //  }
                  } else {
                      //SMT/DIP	
                      //file Title:來源WO,SN,目的WO,SN1
                      if (data[0]["WO Source"] == undefined || data[0]["SN Source"] == undefined || data[0]["WO Target"] == undefined || data[0]["SN Target"] == undefined) {
                          result = true;
                      }
                  }
                  break;

          }

          return result;


      }

      function splitData(data, type) {
          let result = {
              dataOk: {},
              dataNg: {}
          };
          result.dataOk = data;
          result.dataNg = data;
          return result;
      }

      function upFile(data) {

          let pType = $('#pType').val();
          let pAction = $('#pAction').val();
          let converData = {
              dataOk: {},
              dataNg: {}
          };
          switch (pAction) {
              case "woSplit": //拆工單		
                  //file Title:來源WO,SN,目的WO	
                  converData = splitData(data, 0);
                  break;
              case "woWrongTicket": //投錯工單
                  //file Title:來源WO,SN,目的WO
                  converData = splitData(data, 1);
                  break;
              case "snSWAP": //SN SWAP
                  if (pType == "FA") {
                      //FA	
                      //file Title:來源WO,SN,目的WO,SN1,SN2…
                      converData = splitData(data, 2);
                  } else {
                      //SMT/DIP	
                      //file Title:來源WO,SN,目的WO,SN1
                      converData = splitData(data, 3);
                  }
                  break;

          }

          createGrid(0, converData.dataOk);
          createGrid(1, converData.dataNg);



      }


      /*---------------------Other Function End--------------*/