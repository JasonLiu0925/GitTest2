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
    //console.log('UID',getcooky("UID"));

});

function frmEvent() { //form event function
    let result;
    /*  $('#KeyType').on('change', function () {
          switch ($('#KeyType').val()) {
              case 'WO':
                  $('#HoldSNBox').addClass('d-none');
                  break;
              case 'SN':
                  $('#HoldSNBox').removeClass('d-none');
                  break;
          }
      });
      $('#HoldWO').on('keypress', function (event) {
  
          result = ajaxGetData(invokeURL + 'SFIS_STATION_ORDER_LIST', {
              MO: $('#HoldWO').val()
          });
          if (result[0].result == undefined) {
              $.map(result, function (item) {
  
                  $('#WOStation').append($("<option></option>").attr({
                      "value": item.MG002,
                      "selected": false
                  }).text(item.MG003));
              });
  
          } else {
              $('#errMsg').text('工單不存在');
              $('#msgBox').removeClass('d-none');
              return false;
          }
          $('#errMsg').text('');
          $('#msgBox').addClass('d-none');
          return false;
      });*/
    $('#okBtn').on('click', function () {
        /* if($('#HoldWO').val().length==0){
             $('#errMsg').text('沒輸入工單');
             $('#msgBox').removeClass('d-none');
             return false;
         }
         if($('#WOStation').val().length==0){
             $('#errMsg').text('沒輸入工單');
             $('#msgBox').removeClass('d-none');
             return false;
         }       
         if($('#KeyType').val()=='SN') {
             if($('#HoldSN').val().length==0){
                 $('#errMsg').text('沒輸入序號');
                 $('#msgBox').removeClass('d-none');
                 return false;
             }      
 
         }
         createGrid(0);
         */
        if ($('#HoldKey').val().length == 0) {
            $('#errMsg').text('Not Input Key.');
            $('#msgBox').removeClass('d-none');
            return false;
        }
        if ($('#HoldStation').val().length == 0) {
            $('#errMsg').text('Not Input Station.');
            $('#msgBox').removeClass('d-none');
            return false;
        }
        result = ajaxGetData(invokeURL + 'SFIS_Hold_Key_CHECK_SELCT', {
            VH001: $('#HoldKey').val(),
            VH002: $('#KeyType').val(),
            VH003: $('#HoldStation').val()
        });
        if (result[0].result != undefined ) { 
            if ($('#HoldType').val() == 'Y') { //Lock
                result = ajaxGetData(invokeURL + 'SFIS_Hold_KEY_INSERT', {
                    CREATOR:getcooky("UID"),
                    USR_GROU:getUserGroup(),
                    VH001: $('#HoldKey').val(),
                    VH002:$('#KeyType').val(),
                    VH003:$('#HoldStation').val()
                });
                if (result[0].result != 'ok') {
                    $('#errMsg').text(result[0].result);
                    $('#msgBox').removeClass('d-none');
                    return false;
                }
            }else{
                $('#errMsg').text('Values of Key  Not exists');
                $('#msgBox').removeClass('d-none');
                return false;
            }
        }else{
            if ($('#HoldType').val() == 'N') { //UnLock
                result = ajaxGetData(invokeURL + 'SFIS_Hold_KEY_Unhold_UPDATE', {
                    MODIFIER:getcooky("UID"),
                    VH001: $('#HoldKey').val(),
                    VH002:$('#KeyType').val(),
                    VH003:$('#HoldStation').val()
                });
                if (result[0].result != 'ok') {
                    $('#errMsg').text(result[0].result);
                    $('#msgBox').removeClass('d-none');
                    return false;
                }
            }else{
                $('#errMsg').text('Values of Key  already exists');
                $('#msgBox').removeClass('d-none');
                return false;
            }
        }
        $('#errMsg').text('');
        $('#msgBox').addClass('d-none');
        createGrid(0);
        return false;
    });
}

function resize() {


}

/*---------------------UI event Function Start--------------*/
/*---------------------Form Function Start--------------*/
function initFrm() { //init form

    let typeStr = '';
    let result;

   // $('#wipDiv').hide();
    frmEvent();
    createGrid(0);
 // if(getcooky("UID")!='102759'){
    if (getcooky("UID")=="104465" || getcooky("UID")=="104691" || getcooky("UID")=="104685" || getcooky("UID")=="104133" ||getcooky("UID")=="104033"
    || getcooky("UID")=="103833" || getcooky("UID")=="103719" || getcooky("UID")=="104236" || getcooky("UID")=="104237" || getcooky("UID")=="103580"
    || getcooky("UID")=="103178"  || getcooky("UID")=="102759"  || getcooky("UID")=="105107" || getcooky("UID")=="105270" || getcooky("UID")=="105266" || getcooky("UID")=="105102")
    {}
    else{    
        let cburl = "/" + siteName + "/index.html";
        console.log(cburl)
        document.location.href = cburl;
    }

}

/*---------------------Form Function End--------------*/
/*---------------------JqGrid Function Start--------------*/
function createGrid(id) { //create jagrid
    let options = {};
    let $grid;

    options = gridList[0];
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