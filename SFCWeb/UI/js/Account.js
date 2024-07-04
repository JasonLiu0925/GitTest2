      /*---------------------公用變數 Start--------------*/
      var loginuser;
      var csm001;
      var lineData = new Array();
      var gridRows = new Array();
      var gridList = [{ //grid初始化參數
              caption: 'DELIVERY INFORMATION',
              gid: 'jqGrid1',
              pager: '#jqGrid1Pager',
              shrinkToFit: true,
              colAPI: 'RMA_CSMDELIVERY', //set colModel index
              fixedColFDb: true, //set db
              gridDefinitionUrl: invokeURL + 'RMA_CSMDELIVERY',
              //gridDefColionUrl: 'json/unSchedule.json',
              gridDefPostData: {

              },
              search: true,
              refresh: true,
              xls: true,
              add: true,
              addOption: {
                  addurl: invokeURL + "RMA_CSMDELIVERYInsert",
                  serializeEditData: function (postData) {
                    if(postData['CSM001']==""){
                        postData['CSM001']=csm001
                    }
                    if(postData['DLV001']==""){
                        postData['DLV001']="1"
                    }
                    console.log(postData);
                    return JSON.stringify(postData);
                }

              },
              editOption: {
                  editurl: invokeURL + "RMA_CSMDELIVERYUpdate"
                  
              },
              delOption: {
            },
            edit: true,
            del: false

          }

      ];
      /*---------------------公用變數 End--------------*/
      /*---------------------UI event Function Start--------------*/

      $(document).ready(function () { //form load function

          loginCheck(); //登入檢查


          $("#menu").load("Top1.html");
          $("#bottom").load("Bottom.html");

          initFrm();




      });

      function frmEvent() { //form event function
         

      }



      /*---------------------UI event Function Start--------------*/
      /*---------------------Form Function Start--------------*/
      function initFrm() { //init form

          let result;
          loginuser = getcooky("loginuser");
         
          let rmano = getUrlVars("p1")["p1"];
          result = ajaxGetData(invokeURL + 'RMA_CSMName', {
              p1: loginuser
          });
          if (result[0]["result"] == undefined) {
              csm001 = result[0].CSM001;
              $('#CSMName').text(result[0].CSM002);

          }
          console.log('csm001',csm001);
          createGrid(0);
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
                  options.gridDefPostData = {
                      p1: csm001
                  };
                  $grid.createJqGrid(options);
                  console.log($grid.jqGrid('getGridParam','data'));
                  break;
              
          }


      }
      /*---------------------JqGrid Function End--------------*/
      /*---------------------Chart Function Start--------------*/
      /*---------------------Chart Function End--------------*/
      /*---------------------Other Function Start--------------*/
 
      /*---------------------Other Function End--------------*/