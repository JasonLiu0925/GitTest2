/*---------------------公用變數 Start--------------*/
var apiurl = getUrlVars()['type'];
var lineData = new Array();
var gridRows = new Array();
var gridList = [{ //grid初始化參數
    caption: '',
    gid: 'jqGrid1',
    pager: '#jqGrid1Pager',
    shrinkToFit: true,
    gridDefinitionUrl: invokeURL + apiurl+'_QUERY',//apiurl
    
    colAPI: apiurl+'_QUERY', //set colModel index
    fixedColFDb: false, //set db
    gridDefPostData: {

        
    },
    search: true,
    refresh: true,
    xls: true,
    add: true,
    addOption: {
        // search:true,
        addurl: invokeURL + "Setting_1_1_INSERT",
        serializeEditData: function (postData) {
            console.log("addOption"+postData);
            
          let pa=JSON.stringify({
            "@VENDER": postData.vendercode,
            "@PARTNO": postData.partno,
            "@EX":postData.setting_ex
          });
          
          console.log(pa);
          return pa;
      }

    },
    editOption: {
        editurl: invokeURL + "Setting_1_1_UPDATE",
        serializeEditData: function (postData) {
            console.log("editOption"+postData);
          let pa=JSON.stringify({
            "VENDER": postData.vendercode,
            "PARTNO": postData.partno,
            "EX":postData.setting_ex
          });
          
          console.log(pa);
          return pa;
        }
    },
    delOption: {
        //delurl: invokeURL + "RMA_FROM_DELETE",
        delurl: invokeURL + "Setting_1_1_DELETE",

        afterSubmit: function (response, postdata) {
            console.log("afterSubmit");
            // var res = $.parseJSON(response.responseText);
            // if (res && res.insertStatus) {
            //     alert(res.insertStatus);
            // }
            let msg = [];
            let url = $(this).getGridParam('delOption').delurl;
            let ids = $(this).getGridParam("selrow");
            console.log("afterSubmit ids="+ids);
            // for (let i = 0; i < ids.length; i++) {
            if(ids!=''){
                let row = $(this).jqGrid('getRowData', ids[0]);
                console.log("result = "+row.vendercode);
                let postData = { 
                    "VENDER": row.vendercode,
                    "PARTNO": row.partno 
                };
                let result = ajaxGetData(invokeURL + "Setting_1_1_DELETE", postData);
                // result = ajaxGetDatsa(url, postData);
                console.log(result);
                if (result[0]["result"] != "ok") {
                    alert("delete failed")
                    msg.push({
                        "VENDER": postData['VENDER']
                        }

                    )
                }
            }
            
            // $(this).refreshGrid();
            if (msg.length>0) {
              return [false, msg];
                
            } else {
              return [true, "OK", "Delete a completed data!"];
               
            }


        }
    },
  edit: true,
  del: true
},{
    //grid初始化參數
    caption: '',
    gid: 'jqGridList',
    pager: '#jqGridListPager',
    shrinkToFit: true,
    //colAPI: 'RMA_HomeCSMNameList', //set colModel index
    // fixedColFDb: true, //set db
    gridDefinitionUrl: invokeURL + apiurl +'_WO',
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
    
    isShowInOut(apiurl);
 
   
    
    //refreshdata();


});





function frmEvent() { //form event function
    $('#searchBtn1').on('click', function () {
        var date =new Date();
        $("#refreshtime").text("更新時間:"+date);


        
        // if($('#woList').val().length==0){
        //     alert("需輸入製令單號!");
        //     return;
        // }



        createGrid(0); 
		console.log("colModel",$('#jqGrid1').getGridParam("colModel"));

        // createGrid(5);
        $('#wipDiv').show();

    });

    
    $("#woListButton").on('click', function () {

        $('#listModal').modal('show');
        createGrid(1);
		 
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
    $('#wipDiv').hide(); 
    $('#listModal').modal('hide'); 
    frmEvent();
}


function isShowInOut(id){

    switch(id){
        case 'web_sign_in_out_data':
            $('#inOutDiv').show();
            break;
        case 'web_wip_data':
            $('#sDateDiv').hide();
            $('#eDateDiv').hide();
            $('#inOutDiv').hide();
            break;
        case 'web_maintain_data':
            $('#inOutDiv').hide();
            break;
        case 'web_instantly_produce_data':

            $('#sDateDiv').hide();
            $('#eDateDiv').hide();
            break;

        default:

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
            // console.log("url====> "+invokeURL + apiurl);
            // var date = new Date().format('yyyyMMdd');
            
            // console.log("send_data====> "+ 
            // "\nWO = "+ $('#woList').val()
            // );
            options.caption = "Fortinet EX 設定表";
            options.gridDefPostData = {
                // SDATE: '20211201',
                // EDATE: '20210101',
                // INOUT:'1'
                // "@SDATE": $('#sDate').val(),
                // "@EDATE": $('#eDate').val(),
                // "@INOUT": $('#in_out').val()inOut

            };
            let pa=JSON.stringify({
                "WO": $('#woList').val().length==0?'': $('#woList').val()
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