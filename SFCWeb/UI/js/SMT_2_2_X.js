/*---------------------公用變數 Start--------------*/
var apiurl = getUrlVars()['type'];
var tabbtn = null;
var lineData = new Array();
var gridRows = new Array();
var header;
var startseq;
var type;
var sn_num;//序號數量
var TH001;
var TH001_DEL;
var sn="";
var date = new Date();
var seperator1 = "-";
var seperator2 = ":";
var year = date.getFullYear();
var month = date.getMonth() + 1; 
var strDate = date.getDate();
var currentDate;
var putData='';

var listWo=[];//製令製程明細

var loginuser = getcooky("UID");

var gridList = [{ //grid初始化參數  0
    caption: '鋼板當前狀態(出)',
    gid: 'jqGrid1',
    pager: '#jqGrid1Pager',
    shrinkToFit: true,
    gridDefinitionUrl: invokeURL + 'steel_paste_stockout',//apiurl P
    colAPI: 'steel_paste_stockout', //set colModel index
    fixedColFDb: true, //set db
    gridDefPostData: {

        
    },
    search: true,
    refresh: true,
    xls: true

},{ //grid初始化參數 1
    caption: "鋼板當前狀態(入)",
    gid: 'jqGrid1',
    pager: '#jqGrid1Pager',
    // rowNum: 20,
    viewrecords: true, 
    shrinkToFit: true,
    gridDefinitionUrl: invokeURL + 'steel_paste_stockin',//apiurl P
    colAPI: 'steel_paste_stockin', //set colModel index
    fixedColFDb: true, //set db
    gridDefPostData: {
        "solderPaste":""
    },
    search: true,
    refresh: true,
    xls: true

},{ //grid初始化參數 2
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


},{ //grid初始化參數3
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


},{ //grid初始化參數4
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
        $('#LINE3').val(data.生產線代號);
        //$('#deptInput').trigger("change");
        $('#listModal').modal('hide');

    },
    search: true,
    refresh: true,
    xls: false


},{ //grid初始化參數5
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


},{ //grid初始化參數6
    caption: '錫膏序號查詢'+
    "<INPUT TYPE='button' NAME='delAllSn' ID='delAllSn' VALUE='刪除全部序號' style='color:black;font-size:12px'>",
    gid: 'jqGrid2',
    pager: '#jqGrid2Pager',
    shrinkToFit: true,
    gridDefinitionUrl: invokeURL + 'solder_paste_sn_query',//apiurl P
    colAPI: 'solder_paste_sn_query', //set colModel index
    fixedColFDb: true, //set db
    gridDefPostData: {

        
    },
    search: true,
    refresh: true,
    xls: true, del: true,
    delOption: {
    //delurl: invokeURL + "RMA_FROM_DELETE",
    delurl: invokeURL + "solder_paste_sn_delete",

    afterSubmit: function (response, postdata) {
        console.log("afterSubmit");
        // var res = $.parseJSON(response.responseText);
        // if (res && res.insertStatus) {
        //     alert(res.insertStatus);
        // }


        let msg = [];
        let url = $(this).getGridParam('delOption').delurl;
        let ids = $(this).getGridParam("selrow");
        let row = $(this).jqGrid('getRowData', ids[0]);


        return delSolderPasteSn(msg,url,ids,row);

        // let msg = [];
        // let url = $(this).getGridParam('delOption').delurl;
        // let ids = $(this).getGridParam("selrow");
        // console.log("afterSubmit ids="+ids);
        // // for (let i = 0; i < ids.length; i++) {
        // if(ids!=''){
        //     let row = $(this).jqGrid('getRowData', ids[0]);
        //     console.log("result = "+row.TI001);
        //     let postData = { 
        //         "TI001": row.TI001,
        //         "TI002": row.TI002
        //     };
        //     let result = ajaxGetData(invokeURL + "solder_paste_sn_delete", postData);
        //     // result = ajaxGetDatsa(url, postData);
        //     console.log(result);
        //     if (result[0]["result"] != "ok") {
        //         alert("delete failed")
        //         msg.push({
        //             "TI001": postData['TI001']
        //         }

        //       )
        //     }
        // }
        
        // // $(this).refreshGrid();
        // if (msg.length>0) {
        //     return [false, msg];
              
        // } else {
        //   return [true, "OK", "Delete a completed data!"];
           
        // }


    }
}
},{ //grid初始化參數7
    caption: '錫膏序號查詢'+
    "<INPUT TYPE='button' NAME='delAllSn' ID='delAllSn' VALUE='刪除全部序號' style='color:black;font-size:12px'>",
    gid: 'jqGrid2',
    pager: '#jqGrid2Pager',
    shrinkToFit: true,
    gridDefinitionUrl: invokeURL + 'solder_paste_sn_create',//apiurl P
    colAPI: 'solder_paste_sn_query', //set colModel index
    fixedColFDb: true, //set db
    gridDefPostData: {

        
    },
    search: true,
    refresh: true,
    xls: true, del: true,
    delOption: {
    //delurl: invokeURL + "RMA_FROM_DELETE",
    delurl: invokeURL + "solder_paste_sn_delete",

    afterSubmit: function (response, postdata) {
        console.log("afterSubmit");
        // var res = $.parseJSON(response.responseText);
        // if (res && res.insertStatus) {
        //     alert(res.insertStatus);
        // }

        let msg = [];
        let url = $(this).getGridParam('delOption').delurl;
        let ids = $(this).getGridParam("selrow");
        let row = $(this).jqGrid('getRowData', ids[0]);


        return delSolderPasteSn(msg,url,ids,row);


    }
}


},{ //grid初始化參數8 scraper_stockout


    caption: '刮刀狀態查詢',
    gid: 'jqGrid1',
    pager: '#jqGrid1Pager',
    shrinkToFit: true,
    gridDefinitionUrl: invokeURL + 'scraper_stockout',//apiurl P
    colAPI: 'scraper_stockout', //set colModel index
    fixedColFDb: true, //set db
    gridDefPostData: {

        
    },
    search: true,
    refresh: true,
    xls: true





    // caption: '錫膏序號查詢'+
    // "<INPUT TYPE='button' NAME='delAllSn' ID='delAllSn' VALUE='刪除全部序號' style='color:black;font-size:12px'>",
    // gid: 'jqGrid2',
    // pager: '#jqGrid2Pager',
    // shrinkToFit: true,
    // gridDefinitionUrl: invokeURL + 'solder_paste_sn_delete_all',//apiurl P
    // colAPI: 'solder_paste_sn_query', //set colModel index
    // fixedColFDb: true, //set db
    // gridDefPostData: {

        
    // },
    // search: true,
    // refresh: true,
    // xls: true, del:true,
    // delOption: {
    // //delurl: invokeURL + "RMA_FROM_DELETE",
    // delurl: invokeURL + "solder_paste_sn_delete",

    //  afterSubmit: function (response, postdata) {
    //         console.log("afterSubmit");
    //         // var res = $.parseJSON(response.responseText);
    //         // if (res && res.insertStatus) {
    //         //     alert(res.insertStatus);
    //         // }

    //         let msg = [];
    //         let url = $(this).getGridParam('delOption').delurl;
    //         let ids = $(this).getGridParam("selrow");
    //         let row = $(this).jqGrid('getRowData', ids[0]);


    //         return delSolderPasteSn(msg,url,ids,row);


    //     }
    // }


},{ //grid初始化參數  9   刮刀狀態查詢


    caption: '刮刀狀態查詢',
    gid: 'jqGrid1',
    pager: '#jqGrid1Pager',
    shrinkToFit: true,
    gridDefinitionUrl: invokeURL + 'scraper_stockin',//apiurl P
    colAPI: 'scraper_stockout', //set colModel index
    fixedColFDb: true, //set db
    gridDefPostData: {

        
    },
    search: true,
    refresh: true,
    xls: true




    // caption: '查詢結果',
    // gid: 'jqGrid1',
    // pager: '#jqGrid1Pager',
    // shrinkToFit: true,
    // gridDefinitionUrl: invokeURL + 'solder_paste_into_ac_control_record',//apiurl P
    // colAPI: 'solder_paste_into_ac_control_record', //set colModel index
    // fixedColFDb: true, //set db
    // gridDefPostData: {

        
    // },
    // search: true,
    // refresh: true,
    // xls: true

},{ //grid初始化參數  10 查詢作業
    caption: '查詢結果',
    gid: 'jqGrid1',
    pager: '#jqGrid1Pager',
    shrinkToFit: true,
    gridDefinitionUrl: invokeURL + 'scraper_stockout_query',//apiurl P
    colAPI: 'scraper_stockout', //set colModel index
    fixedColFDb: true, //set db
    gridDefPostData: {

        
    },
    search: true,
    refresh: true,
    xls: true

},{ //grid初始化參數  11 錫膏回溫作業
    caption: '目前可回溫的序號  &nbsp;&nbsp; '+
    "<INPUT TYPE='button' NAME='warmup' id='warmup' VALUE='回溫' style='color:black;font-size:12px'> &nbsp;&nbsp; ",
    gid: 'jqGrid2',
    pager: '#jqGrid2Pager',
    shrinkToFit: true,
    gridDefinitionUrl: invokeURL + 'solder_paste_warmup',//apiurl P
    colAPI: 'solder_paste_warmup', //set colModel index
    fixedColFDb: true, //set db
    gridDefPostData: {

        
    },
    search: true,
    refresh: true,
    xls: true

},{ //grid初始化參數  12 錫膏回溫作業
    caption: '目前回溫中的序號  &nbsp;&nbsp; ',
    gid: 'jqGrid3',
    pager: '#jqGrid3Pager',
    shrinkToFit: true,
    gridDefinitionUrl: invokeURL + 'solder_paste_warmup_enable',//apiurl P
    colAPI: 'solder_paste_warmup_enable', //set colModel index
    fixedColFDb: true, //set db
    gridDefPostData: {

        
    },
    search: true,
    refresh: true,
    xls: true

},{ //grid初始化參數  13 錫膏報廢作業
    caption: '已報廢的序號',
    gid: 'jqGrid1',
    pager: '#jqGrid1Pager',
    shrinkToFit: true,
    gridDefinitionUrl: invokeURL + 'solder_paste_return_query',//apiurl P
    // colAPI: 'solder_paste_return_query', //set colModel index
    fixedColFDb: false, //set db
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
     
     
      // 綁定點擊事件
	  $("#myModal").on("click", function(event) {
		// 如果用戶點擊的是模態框外部，關閉模態框
		if (event.target == this) {
		  $(this).hide();
		}
	  });

  // 綁定點擊事件
  $("#submit").on("click", function() {
    // 獲取輸入的序號開頭
    var serialNumber = $("#serialNumber").val();
    // 這裡可以根據需要進行相應的處理
    console.log(serialNumber);
    $("#myModal").hide();
  });

  // 彈出模態框
//   $("#myModal").show();

  // 綁定點擊事件
  $("#btn_Submit").on("click", function() {
    // 獲取輸入的序號開頭
    header = $("#header").val();
    startseq = $("#startseq").val();

    console.log(startseq);
    
    if(!Number.isInteger(parseInt(startseq))){ 
        alert('起始流水號請輸入數字！');
        return;
    } 
    createGrid(7);

    // console.log(serialNumber);
    $('#myModal1').modal('hide');
    // $("#myModal1").hide();
  });


  


  
});
 





function  getDefaultSetting(){


    let postData = { 
        "MSG":""
    };


    let result = ajaxGetData(invokeURL + "queryCompFac", postData);

    // alert(result[0]["MB002"]);
    // alert(result.length);

    var select = $("#Factory1"); 
    var option = null;

    $.each(result, function(index, value) { 
        console.log("索引：" + index + " 值：" + value);

        

        option = $("<option></option>").val(value["MB001"]).text(value["MB002"]);
        select.append(option);
    });


    // let postData = { 
    //     "MSG":""
    // };


    // let result = ajaxGetData(invokeURL + "queryCompFac", postData);

    
    // if (result[0]["MB002"] != "OK") {
    //     alert("Checking form failed:"+result[0]["MSG"]);
    // }else{

    //     alert("Checking form success:"+result[0]["MSG"]);

    //     // createGrid(1);
    // }



}





function frmEvent() { //form event function
 







    $('#searchBtn1').on('click', function () {

 
		if($('#TYPE_1').val()=='2'){//鋼板
 

            if($('#stocktype').val()=='2'){//出庫

					alert('鋼板出庫作業');
                    if($('#WO').val().trim()==''){
                        alert('請輸入製令單號！');
                        return;
                    }else if($('#SN3').val().trim()==''){
                        alert('請輸入鋼板Id！');
                        return;
                    }else if($('#employeeId3').val().trim()==''){
                        alert('請輸入employeeId！');
                        return;
                    }else if(!Number.isInteger(parseInt($('#tension1').val()))){
						alert('張力1請輸入數字！');
						return;
					}
					else if(!Number.isInteger(parseInt($('#tension2').val()))){
						alert('張力2請輸入數字！');
						return;
					}
					else if(!Number.isInteger(parseInt($('#tension3').val()))){
						alert('張力3請輸入數字！');
						return;
					}
					else if(!Number.isInteger(parseInt($('#tension4').val()))){
						alert('張力4請輸入數字！');
						return;
					}
					else if(!Number.isInteger(parseInt($('#tension5').val()))){
						alert('張力5請輸入數字！');
						return;
					}
				
				
				    //30~50
					if(!isZone($('#tension1').val())||!isZone($('#tension2').val())||!isZone($('#tension3').val())||!isZone($('#tension4').val())||!isZone($('#tension5').val())){
						alert('張力請介在30~50之間！');
						return;
					}
					

                    let postData = {
                        "USER":loginuser,
                        "TL001": $('#SN3').val(),
                        "TO005": $('#employeeId3').val(),
                        "MF001": $('#WO').val(), 
                        "RESULT":"",
                        "MSG":""
                    };
    
                    let result = ajaxGetData(invokeURL + "steel_paste_chkstockout", postData);
                    if (result[0]["RESULT"] != "OK") {
                        alert("出庫失敗:"+result[0]["MSG"]);
                    }else{
						alert("出庫成功");
                        createGrid(0);
                    }
    
    
            }else if($('#stocktype').val()=='1' ||$('#stocktype').val()=='3'||$('#stocktype').val()=='4'){//入庫

 
					alert('鋼板入庫/報廢/送廠作業:'+$('#stocktype').val());


                    if(!$('#ischeckclean_1').is(":checked")){


                        if($('#stocktype').val()!='4'){
                            alert('請確認是否清潔！');
                            return;

                        }
                        
                    } 


					if($('#SN3').val().trim()==''){
                        alert('請輸入鋼板Id！');
                        return;
                    }else if($('#employeeId3').val().trim()==''){
                        alert('請輸入employeeId！');
                        return;
                    }else if(!Number.isInteger(parseInt($('#tension1').val()))){
						alert('張力1請輸入數字！');
						return;
					}
					else if(!Number.isInteger(parseInt($('#tension2').val()))){
						alert('張力2請輸入數字！');
						return;
					}
					else if(!Number.isInteger(parseInt($('#tension3').val()))){
						alert('張力3請輸入數字！');
						return;
					}
					else if(!Number.isInteger(parseInt($('#tension4').val()))){
						alert('張力4請輸入數字！');
						return;
					}
					else if(!Number.isInteger(parseInt($('#tension5').val()))){
						alert('張力5請輸入數字！');
						return;
					}
				
				
				    //30~50
					if(!isZone($('#tension1').val())||!isZone($('#tension2').val())||!isZone($('#tension3').val())||!isZone($('#tension4').val())||!isZone($('#tension5').val())){
						alert('張力請介在30~50之間！');
						return;
					}
				
				// if(!$('#stir').prop("checked")){
				// 	alert('請確認有無清潔！');
				// 	return;
				
				// }
				


                let postData = { 
                    "CREATOR":loginuser,
                    "TO005": $('#employeeId3').val(),   
                    "TL001": $('#SN3').val(),
                    "FACTORY":$('#Factory1').val(),
                    "RESULT":"",
                    "MSG":""
                }; 

                let result = ajaxGetData(invokeURL + "steel_paste_chkstockin", postData);
                if (result[0]["RESULT"] != "OK") {
                    alert("作業失敗:"+result[0]["MSG"]);
                }else{
                    alert("鋼板入庫成功!"+result[0]["MSG"]);
					createGrid(1);
                    
                }

                


                

            }
		}if($('#TYPE_1').val()=='1'){//刮刀
		
			if($('#stocktype').val()=='2'){//出庫

					// alert('刮刀出庫作業');

                    createGrid(10);
                    var date =new Date();
                    $("#refreshtime").text("更新時間:"+date);
                    $('#showDiv1').show();

                    if($('#WO').val().trim()==''){
                        alert('請輸入製令單號！');
                        return;
                    }else if($('#SCRAP_SN3').val().trim()==''){
                        alert('請輸入刮刀Id！');
                        return;
                    }else if($('#employeeId3').val().trim()==''){
                        alert('請輸入employeeId！');
                        return;
                    }
				
				 
					

                    let postData = {
                        "USER":loginuser,
                        "BT005": $('#SCRAP_SN3').val(),
                        "BT003": $('#employeeId3').val(),
                        "MF001": $('#WO').val(), 
                        "RESULT":"",
                        "MSG":""
                    };
    
                    let result = ajaxGetData(invokeURL + "scraper_chkstockout", postData);
                    if (result[0]["RESULT"] != "OK") {
                        alert("刮刀出庫失敗:"+result[0]["MSG"]);
                    }else{
						// alert("刮刀出庫檢查成功:"+result[0]["MSG"]);
                        // createGrid(0);
 

						
						// 假設回傳的值為 'value1,value2,value3'，使用逗號分隔
						var values = result[0]["MSG"].split(',');
	
	
						$('#myForm').empty();
	
						// 將值加入到多選框中
						values.forEach(function(value) {
						  var checkboxHtml = '<input type="checkbox" name="option" value="' + value + '">' + value + '<br>';
						  $('#myForm').append(checkboxHtml);
						});
						
						
						// 點擊關閉按鈕時關閉 Modal
						$('.closemyModal2').on('click', function() {
						  // $('#myModal2').remove();
						  // $('#myModal2').modal('hide');
						  $('#myModal2').css('display', 'none');
						});
						
						$('#submitBtn').off('click');   
						// 點擊提交按鈕時取得所選擇的項目
						$('#submitBtn').on('click', function() {
						  var selectedOptions = [];
						  var selectedOptions01='';
						  $('input[name="option"]:checked').each(function() {
							selectedOptions.push($(this).val());
							selectedOptions01+=$(this).val()+',';
						  });

						  // 在這裡進行所選擇項目的處理
						  console.log('Selected options:', selectedOptions);
						  console.log('Selected options01:', selectedOptions01);
						  
						  
						  postData = {
								"USER":loginuser,
								"MA002": selectedOptions01,
								"MF001": $('#WO').val()
						  };
						  
						  listWo.length=0
						  console.log('listWo:'+listWo);
						  
						  let woResult = ajaxGetData(invokeURL + "scraper_chkstockout_wo", postData);
						  console.log('初創取得的資料:'+woResult);
						  
						  listWo=woResult;
						  
						  
						  
						  
						  displayModalWithData(woResult);//初創:製令製程明細
						  
						  
						  // 關閉 Modal
						  // $('#myModal2').remove();
						  // $('#myModal2').modal('hide');
						  $('#myModal2').css('display', 'none');
						});
						

						
						// 顯示 Modal
						$('#myModal2').css('display', 'block');
						 
						// $('#myModal2').modal('show');
						
                    }
    
    
            }else if($('#stocktype').val()=='1'||$('#stocktype').val()=='3'||$('#stocktype').val()=='4'){
				// alert('刮刀入庫/報廢/送廠作業:'+$('#stocktype').val()+',尚未建置');
				
                if($('#SCRAP_SN3').val().trim()==''){
                    alert('請輸入刮刀Id！');
                    return;
                }else if($('#employeeId3').val().trim()==''){
                    alert('請輸入employeeId！');
                    return;
                }else if($('#gap').val().trim()==''){                
					alert('請輸入縫隙！');
					return;
				}else if(!Number.isInteger(parseInt($('#gap').val()))){
					alert('縫隙請輸入數字！');
					return;
				}else if($('#gap').val().trim()>0.05 && $('#stocktype').val()=='1'){
					alert('縫隙不能超過0.05！');
					return;
				}else if(!$('#ischeckclean_1').is(":checked") && $('#stocktype').val()!='3'){
                    alert('請確認是否清潔！');
					return;
                } 





                if($('#stocktype').val()=='3'){
                    if($('#SCRAP2').val().trim()=='0'){                
                        alert('請選擇報廢原因！');
                        return;
                    }
                }

 
                
                let postData = {
                    "USER":loginuser,
                    "BT005": $('#SCRAP_SN3').val(),
                    "BT003": $('#employeeId3').val(),
                    "BU002": $('#stocktype').val(), 
                    "BU006": $('#gap').val(), 
                    "BU007": $('#SCRAP2').val(), 
                    "RESULT":"",
                    "MSG":""
                };

                let result = ajaxGetData(invokeURL + "scraper_chkstockin", postData);
                if (result[0]["RESULT"] != "OK") {
                    alert("Error:"+result[0]["MSG"]);
                }else{
                    createGrid(9);
                }
				




			
			}
		
		
		
		
		}



 
            

            
 
        

        
        //createGrid(5);
        var date =new Date();
        $("#refreshtime").text("更新時間:"+date);
        $('#showDiv1').show();

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
 


    // $('#TYPE3').change(function(){
    //     let sltValue=$(this).val();
    //     console.log(sltValue);
        
    //     if(sltValue=='1'){
    //         $('#Tab3SN').show();
    //     }else if(sltValue=='2'){
    //         $('#Tab3SN').hide();
    //     }

         
    //   });


		$('#tension_all_div').show(); 
		$('#stockInDate3_div').hide(); 
		$('#ischeckclean').hide(); 
		$('#SCRAP_div').hide(); 
		$('#SCRAP_div2').hide(); 
		$('#gap_div').hide(); 
		
		

      $('#stocktype').change(function(){
        let sltValue=$(this).val();
        console.log(sltValue);
        
		if($('#TYPE_1').val()=='2'){//鋼板
		
			$('#employeeId3_div').hide(); 
			$('#SCRAP_SN3_div').hide();  
			
			$('#SN3_div').hide();  
			$('#stockOutDate3_div').hide() ; 
			$('#WO3_div').hide();//LINE3_div
			$('#stockInDate3_div').hide(); 
			$('#tension_all_div').hide(); 
			$('#SCRAP_div').hide(); 
			$('#ischeckclean').hide(); 

			if(sltValue=='2'  ){ //出庫
				$('#employeeId3_div').show();
				$('#SN3_div').show(); 
				$('#stockOutDate3_div').show(); 
				$('#LINE3_div').show() ;
				$('#WO3_div').show();
				$('#tension_all_div').show(); 

			}else if(sltValue=='1' || sltValue=='4'){ //入庫
				$('#employeeId3_div').show();
				$('#SN3_div').show(); 
				$('#stockInDate3_div').show();
				$('#tension_all_div').show(); 
				$('#ischeckclean').show(); 
				
			}else if(sltValue=='3'){ //報廢
				$('#employeeId3_div').show();
				$('#SN3_div').show(); 
				$('#stockInDate3_div').show();
				$('#tension_all_div').show(); 
				$('#ischeckclean').show(); 
				$('#SCRAP_div').show(); 
			}else if(sltValue=='4'){ //送廠
				//$('#employeeId3_div').show();
				// $('#SN3_div').show(); 
				//$('#stockOutDate3_div').show();
				
			}
		}else if($('#TYPE_1').val()=='1'){//刮刀
		
			$('#employeeId3_div').hide(); 
			$('#SCRAP_SN3_div').hide();  
			$('#SN3_div').hide();  
			$('#stockOutDate3_div').hide() ; 
			$('#WO3_div').hide();//LINE3_div
			$('#stockInDate3_div').hide(); 
			$('#tension_all_div').hide(); 
			$('#SCRAP_div').hide(); 
			$('#ischeckclean').hide(); 
			$('#gap_div').hide();  
			$('#SCRAP_div2').hide(); 

			if(sltValue=='2'  ){ //出庫
				$('#employeeId3_div').show();
				$('#SCRAP_SN3_div').show(); 
				$('#stockOutDate3_div').show(); 
				$('#LINE3_div').show() ;
				$('#WO3_div').show(); 

			}else if(sltValue=='1' || sltValue=='4'){ //入庫
				$('#employeeId3_div').show();
				$('#SCRAP_SN3_div').show(); 
				$('#stockInDate3_div').show(); 
				$('#ischeckclean').show(); 
				$('#gap_div').show();  
				
			}else if(sltValue=='3'){ //報廢
				$('#employeeId3_div').show();
				$('#SCRAP_SN3_div').show(); 
				$('#stockInDate3_div').show(); 
				$('#ischeckclean').show();  
				$('#SCRAP_div2').show();  
				$('#gap_div').show();  
			}
		}
		
         
      });



    $("#formDate").datepicker({ //setuo datepcker
        format: "yyyymmdd",
        autoclose: true,
        todayHighlight: true,
        setDate: new Date(),
        zIndexOffset: 9999
    });


    $("#stockDate").datepicker({ //setuo datepcker
        format: "yyyymmdd",
        autoclose: true,
        todayHighlight: true,
        setDate: new Date(),
        zIndexOffset: 9999
    });
    // $("#Tabbtn1").trigger("click");



    $("#eDate").datepicker({ //setuo datepcker
        format: "yyyymmdd",
        autoclose: true,
        todayHighlight: true,
        setDate: new Date(),
        zIndexOffset: 9999
    });


    $("#sDate").datepicker({ //setuo datepcker
        format: "yyyymmdd",
        autoclose: true,
        todayHighlight: true,
        setDate: new Date(),
        zIndexOffset: 9999
    });



        $('#SCRAP_SN3_div').hide();


      $('#TYPE_1').change(function(){
        let sltValue=$(this).val();
        console.log(sltValue);
        
        $('#SN3_div').hide(); 
        $('#SCRAP_SN3_div').hide();
		
		$('#SCRAP_div').hide(); 
		$('#SCRAP_div2').hide();  
		$('#gap_div').hide();  

		if($('#TYPE_1').val()=='2'){//鋼板
			
				$('#employeeId3_div').hide(); 
				$('#SCRAP_SN3_div').hide();  
				
				$('#SN3_div').hide();  
				$('#stockOutDate3_div').hide() ; 
				$('#WO3_div').hide();//LINE3_div
				$('#stockInDate3_div').hide(); 
				$('#tension_all_div').hide(); 
				$('#SCRAP_div').hide(); 
				$('#ischeckclean').hide(); 

				if($('#stocktype').val()=='2'  ){ //出庫
					$('#employeeId3_div').show();
					$('#SN3_div').show(); 
					$('#stockOutDate3_div').show(); 
					$('#LINE3_div').show() ;
					$('#WO3_div').show();
					$('#tension_all_div').show(); 

				}else if($('#stocktype').val()=='1' || $('#stocktype').val()=='4'){ //入庫
					$('#employeeId3_div').show();
					$('#SN3_div').show(); 
					$('#stockInDate3_div').show();
					$('#tension_all_div').show(); 
					$('#ischeckclean').show(); 
					
				}else if($('#stocktype').val()=='3'){ //報廢
					$('#employeeId3_div').show();
					$('#SN3_div').show(); 
					$('#stockInDate3_div').show();
					$('#tension_all_div').show(); 
					$('#ischeckclean').show(); 
					$('#SCRAP_div').show(); 
				}else if($('#stocktype').val()=='4'){ //送廠
					//$('#employeeId3_div').show();
					// $('#SN3_div').show(); 
					//$('#stockOutDate3_div').show();
					
				}
			}else if($('#TYPE_1').val()=='1'){//刮刀
			
				$('#employeeId3_div').hide(); 
				$('#SCRAP_SN3_div').hide();  
				$('#SN3_div').hide();  
				$('#stockOutDate3_div').hide() ; 
				$('#WO3_div').hide();//LINE3_div
				$('#stockInDate3_div').hide(); 
				$('#tension_all_div').hide(); 
				$('#SCRAP_div').hide(); 
				$('#ischeckclean').hide(); 
				$('#gap_div').hide();  
				$('#SCRAP_div2').hide(); 

				if($('#stocktype').val()=='2'  ){ //出庫
					$('#employeeId3_div').show();
					$('#SCRAP_SN3_div').show(); 
					$('#stockOutDate3_div').show(); 
					$('#LINE3_div').show() ;
					$('#WO3_div').show(); 

				}else if($('#stocktype').val()=='1' || $('#stocktype').val()=='4'){ //入庫
					$('#employeeId3_div').show();
					$('#SCRAP_SN3_div').show(); 
					$('#stockInDate3_div').show(); 
					$('#ischeckclean').show(); 
					$('#gap_div').show();  
					
				}else if($('#stocktype').val()=='3'){ //報廢
					$('#employeeId3_div').show();
					$('#SCRAP_SN3_div').show(); 
					$('#stockInDate3_div').show(); 
					$('#ischeckclean').show();  
					$('#SCRAP_div2').show();  
					$('#gap_div').show();  
				}
			}
		

		
		

         
      });



	  
	  
	  //請輸入要出庫的製令單號
	 $('#submitBtn5').on('click',function (){
        // $('#listModal').modal('show');
        // createGrid(5);
		
		var orderNumberValue = $("#orderNumber").val();
		
		if(!orderNumberValue){
			console.log('無資料');
			$('#myModal5').modal('hide');
			return;
		}
		
		
		
		
		let postData = {
			"USER":loginuser,
			"BT005": $('#SCRAP_SN3').val(),
			"BT003": $('#employeeId3').val(),
			"MF001": orderNumberValue, 
			"RESULT":"",
			"MSG":""
		};

		let result = ajaxGetData(invokeURL + "scraper_chkstockout", postData);
		if (result[0]["RESULT"] != "OK") {
			alert("刮刀出庫檢查失敗:"+result[0]["MSG"]);
		}else{
			// alert("刮刀出庫檢查成功");
			// createGrid(0);


			
			// 假設回傳的值為 'value1,value2,value3'，使用逗號分隔
			var values = result[0]["MSG"].split(',');


			$('#myForm4').empty();

			// 將值加入到多選框中
			values.forEach(function(value) {
			  var checkboxHtml = '<input type="checkbox" name="option4" value="' + value + '">' + value + '<br>';
			  $('#myForm4').append(checkboxHtml);
			});
			
			$('.closemyModal4').off('click');   
			// 點擊關閉按鈕時關閉 Modal
			$('.closemyModal4').on('click', function() {
			  // $('#myModal4').remove();
			  $('#myModal4').modal('hide');
			  // $('#myModal4').css('display', 'none');
			  
			  
			});
			
            $('#submitBtn4').off('click');
			
			//二創 點擊提交按鈕時取得所選擇的項目
			$('#submitBtn4').on('click', function() {
			  var selectedOptions = [];
			  var selectedOptions01='';
			  $('input[name="option4"]:checked').each(function() {
				selectedOptions.push($(this).val());
				selectedOptions01+=$(this).val()+',';
			  });

			  // 在這裡進行所選擇項目的處理
			  console.log('Selected options:', selectedOptions);
			  console.log('Selected options01:', selectedOptions01);
			  
			  
			  postData = {
					"USER":loginuser,
					"MA002": selectedOptions01,
					"MF001": orderNumberValue
			  };
			  
			  
			  
			  let woResult = ajaxGetData(invokeURL + "scraper_chkstockout_wo", postData);
			  console.log('第二次取得的資料:'+ woResult);

				
				
			  console.log('目前儲存的資料:'+ listWo);
			  // console.log('listWo1:'+ listWo.get(0));
			  
				// listWo = woResult.reduce(function(acc, item) {
				  // acc.push(item);
				  // return acc;
				// }, listWo);
			  
			  // listWo.concat(woResult)
			  // $.merge( listWo, woResult );
			  
			  // var newArray =$.merge( $.merge([],listWo), woResult);
			  // var newArray = listWo.concat(woResult);
			  var newArray = [...listWo, ...woResult];
			  
			  listWo=newArray;
			  
			  console.log('組合後的資料:'+listWo);
			   
			  
			  displayModalWithData(listWo); //二創
			  
			  
			  // 關閉 Modal 
			  // $('#myModal4').css('display', 'none');
			  $('#myModal4').modal('hide');
			  
			});
				
				

			
			
			$("#myModal4").css("z-index", "1050");
			$("#myModal3").css("z-index", "1"); // 確保 myModal3 的 z-index 比 myModal2 小，這樣 myModal3 會在後面
			// $("#myModal4").css("display", "block"); // 顯示 myModal2
			
			$('#myModal4').modal('show');
			
			 
			
			
			
			
			
			// 顯示 Modal
			// $('#myModal4').css('display', 'block');
			 
			// $('#myModal2').modal('show');
			
		}
		
		
		 
		
		
		$('#myModal5').modal('hide');
		
		
		
    });
	  
	   
    
    currentDate = year + month +  strDate;  
    $('#stockOutDate').val(currentDate); 
	$('#stockInDate').val(currentDate);


	
	
  
	
	

	
	
	
	

}


// 顯示 Modal 並將資料放入表格中 async 
function displayModalWithData(data) {
  // 清空 #tableContainer 的內容
  $('#tableContainer').empty();

  // 產生表格標頭
  var tableHtml = '<table>';
  tableHtml += '<tr>';
  tableHtml += '<th>WO</th>';
  tableHtml += '<th>SKU</th>';
  tableHtml += '<th>SKU DESC</th>';
  tableHtml += '<th>Estimated output</th>';
  tableHtml += '<th>WO STATUS</th>';
  tableHtml += '<th>con-board num</th>';
  tableHtml += '<th>加工順序</th>';
  tableHtml += '<th>製程代號</th>';
  tableHtml += '<th>製程名稱</th>';
  tableHtml += '</tr>';

  // 產生表格內容
  data.forEach(function(row) {
    console.log('data.forEach=>'+row.MF001+':'+row.MG003);
    tableHtml += '<tr>';
    tableHtml += '<td>' + row.MF001 + '</td>';
    tableHtml += '<td>' + row.MB001 + '</td>';
    tableHtml += '<td>' + row.MB002 + '</td>';
    tableHtml += '<td>' + row.MF008 + '</td>';
    tableHtml += '<td>' + row.MF012 + '</td>';
    tableHtml += '<td>' + row.MB036 + '</td>';
    tableHtml += '<td>' + row.MG002 + '</td>';
    tableHtml += '<td>' + row.MG003 + '</td>';
    tableHtml += '<td>' + row.MA002 + '</td>';
    tableHtml += '</tr>';
  });

  tableHtml += '</table>';

  // 將表格放入 #tableContainer
  $('#tableContainer').append(tableHtml);

  
  $('.closemyModal3').off('click');   
    // 點擊關閉按鈕時關閉 Modal
	$('.closemyModal3').on('click', function() {
	  // $('#myModal3').remove();
	  $('#myModal3').modal('hide');
	  // $('#myModal3').css('display', 'none');
	  listWo.length = 0;
	});
	
  

    $('#submitBtntable').off('click');   
//製令製程明細 提交按鈕
$('#submitBtntable').on('click', function() {
    console.log('submitBtntable before listWo:', listWo);

 

 
    var isArrayOfArray = Array.isArray(listWo);
    console.log('listWo是Array嗎?'+isArrayOfArray);



    putData='';
        

    listWo.forEach(function(row) {  
        if(putData!=''){
            putData = putData+'@'+row.MF001+':'+row.MG003
        }else{
            putData = row.MF001+':'+row.MG003
        } 
    });
    
    console.log('去重前:'+putData);





    putData='';

    var uniqueArray = removeDuplicateObjects(listWo);  

    uniqueArray.forEach(function(row) {
        
        // console.log(row.MF001+':'+row.MG003);

        if(putData!=''){ 
            putData = putData+'@'+row.MF001+':'+row.MG003
        }else{
            putData = row.MF001+':'+row.MG003
        }  
    });

    console.log('去重後:'+putData);



    
    

//    let postData = {
//         "USER":loginuser,
//         "FACTORY":$('#Factory1').val(),
//         "BT005": $('#SCRAP_SN3').val(),
//         "BT003": $('#employeeId3').val(),
//         "DATA": putData
//     };

    // let result = ajaxGetData(invokeURL + "scraper_stockout", postData);
    
    createGrid(8);

    
    
    
    
    
    
    listWo.length = 0;
    console.log('submitBtntable after listWo:', listWo);
    
    
    $('#myModal3').modal('hide');
    // $('#myModal3').css('display', 'none');
    

});
  
  
  
  
   $("#myModal3").css("z-index", "1050");
   $("#myModal4").css("z-index", "1");
  
  
   // 顯示 Modal
   $('#myModal3').modal('show');
  // $('#myModal3').css('display', 'block');
  
  
  
  
  // if(!$("#myModal3").is(":visible")){
	// $('#myModal3').modal('show');
  // }
  
  
  
  
}


function removeDuplicateObjects(arr) {
    var seen = new Set();
    var uniqueArray = [];
  
    for (var i = 0; i < arr.length; i++) {
      var obj = arr[i];
      var objString = JSON.stringify(obj);
  
      if (!seen.has(objString)) {
        seen.add(objString);
        uniqueArray.push(obj);
      }
    }
  
    return uniqueArray;
  }





function createWoData(){
	console.log("createWoData");
	// $('#myModal5').css('display', 'block');
	$('#myModal5').modal('show');
	
	
	
}




function isZone(num){
    if(num >= 30 & num <=50){
        return true
    }

    return false
}
 
function gridButton() {

    $('#chkform').on('click', function () {
        console.log("chkform");

        var txt;
        var form = prompt("請輸入要確認的進料單號", "");
        if (form == null || form == "") {
            console.log("取消"); 

        } else {
            console.log("form:"+form);


            let postData = { 
                "TH001": form,
                "RESULT":"",
                "FACTORY":$('#Factory1').val(),
                "MSG":""
            };


            let result = ajaxGetData(invokeURL + "solder_paste_chkform", postData);
            
            console.log('solder_paste_chkform result'+result[0]["result"]);
            if (result[0]["RESULT"] != "OK") {
                alert("Checking form failed:"+result[0]["MSG"]);

            }else{
                result = ajaxGetData(invokeURL + "solder_paste_chkform1", postData);
                console.log('solder_paste_chkform1 result='+result[0]["RESULT"]);

                if (result[0]["RESULT"] != "OK") {
                    alert("Checking form failed:"+result[0]["MSG"]);
                }else{

                    alert("Checking form success:"+result[0]["MSG"]);

                    createGrid(1);
                }


            }


        }

        // if (confirm("Are you sure?")) {
        //     // CreateWO(0, 'Refurbish');
        // }
    });



    $('#cancelform').on('click', function () {
        console.log("cancelform");
        var form = prompt("請輸入要取消的進料單號", "");
        if (form == null || form == "") {
            console.log("取消"); 

        } else {
            console.log("form:"+form);

            let postData = { 
                "TH001": form,
                "FACTORY":$('#Factory1').val(),
                "RESULT":"",
                "MSG":""
            };

            let result = ajaxGetData(invokeURL + "solder_paste_cancelform", postData);
            if (result[0]["RESULT"] != "OK") {
                alert("Checking form failed:"+result[0]["MSG"]);
            }else{

                alert("Checking form success:"+result[0]["MSG"]);

                createGrid(1);
            }
        }
    });

    $('#delAllSn').on('click', function () {
        let grid = $("#" + gridList[6].gid);//678
        let data = $.trim(grid.getRowData()[0]["TI001"]);

        TH001_DEL=data;
        console.log("chkform"+data);
        if (confirm("確定要刪除錫膏單號:"+data+" 底下的全部序號嗎?")) {
            createGrid(8);
        }
    });
    
    // $('#chkform').prop('disabled', false); 
    // $('#cancelform').prop('disabled', true);  


    $('#warmup').on('click', function () {
        console.log("warmup");
        var SN = prompt("請輸入要回溫的序號", "");
        if (SN == null || SN == "") {
            console.log("取消"); 

        } else {
            console.log("序號:"+SN);

            let postData = { 
                "CREATOR":loginuser,
                "TH003": $('#employeeId3').val(),  
                "TJ002": '3',//$('#stocktype').val()
                "TI002": SN,
                "FACTORY":$('#Factory1').val(),
                "RESULT":"",
                "MSG":""
            };

            let result = ajaxGetData(invokeURL + "solder_paste_warmup_check", postData);
            if (result[0]["RESULT"] != "OK") {
                alert("warmup SN failed:"+result[0]["MSG"]);
            }else{

                alert("warmup SN success:"+result[0]["MSG"]);
                createGrid(11);
                createGrid(12);
                // createGrid(1);
            }
        }
    });







}


/*---------------------UI event Function Start--------------*/
/*---------------------Form Function Start--------------*/
function initFrm() { //init form
    $('#showDiv1').hide();

    $('#listModal').modal('hide');
 
    if (month < 10) {
        month = '0' + month;
    }
    
    if (strDate < 10) {
        strDate = '0' + strDate;
    }
    
    getDefaultSetting();
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


   
    
    var date = new Date().format('yyyyMMdd');
     
    //console.log("send_data====> "+pa );
    switch (id) {
        case 0: 
            let pa=JSON.stringify({
                "USER":loginuser,
                        "TL001": $('#SN3').val(),
                        "TO005": $('#employeeId3').val(),
                        "MF001": $('#WO').val(), 
                        "RESULT":"",
                        "MSG":""

            });
			
			 

            // console.log("url====> "+invokeURL + apiurl);

            options.gridDefPostData =JSON.parse(pa);
            $grid.createJqGrid(options);
            break;
        case 1: 
            let pa1=JSON.stringify({
                "CREATOR":loginuser,
                    "TO005": $('#employeeId3').val(),   
                    "TL001": $('#SN3').val(),
                    "TO001": $('#SN3').val(),
                    "TO002": $('#stocktype').val(),
                    "TO005": $('#employeeId3').val(),
                    "TO006": $('#tension1').val(),
                    "TO007": $('#tension2').val(),
                    "TO008": $('#tension3').val(),
                    "TO009": $('#tension4').val(),
                    "TO010": $('#tension5').val(),
                    "TN011": $('#SCRAP').val(),
                    "FACTORY":$('#Factory1').val()
            });

            // console.log("url====> "+invokeURL + apiurl);
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

        case 5:

            $grid.createJqGrid(options);
            break;

        case 6:  
            $grid.createJqGrid(options);
             
            // 新增自定義按鈕
            // $grid.jqGrid("navButtonAdd", "#jqGrid2Pager", {
            //     caption: "delete all", // 按鈕的文字
            //     buttonicon: "ui-icon-trash", // 按鈕的圖示
            //     onClickButton: function() { // 點擊按鈕觸發的事件
            //         if (confirm("確定要刪除全部資料？")) { 
            //             var ids = $grid.jqGrid("getDataIDs");
            //             for (var i = 0; i < ids.length; i++) {
            //                 $grid.jqGrid("delRowData", ids[i]);
            //             }
            //         }
            //     }
            // });
            break;
        case 7:

            // header = $("#header").val();
            // startseq = $("#startseq").val();
 
            let pa7=JSON.stringify({
                "TH001":TH001,
                "HEADER":header,
                "STARTNUM":startseq,
                "NUM":sn_num,
                "TYPE":type,
                "USER":"WEBUSER",
                "FACTORY":$("#Factory1").val()

            });
 
            options.gridDefPostData =JSON.parse(pa7);
            $grid.createJqGrid(options);

            // 新增自定義按鈕
            // $grid.jqGrid("navButtonAdd", "#jqGrid2Pager", {
            //     caption: "delete all", // 按鈕的文字
            //     buttonicon: "ui-icon-trash", // 按鈕的圖示
            //     onClickButton: function() { // 點擊按鈕觸發的事件
            //         if (confirm("確定要刪除全部資料？")) { 
            //             var ids = $grid.jqGrid("getDataIDs");
            //             for (var i = 0; i < ids.length; i++) {
            //                 $grid.jqGrid("delRowData", ids[i]);
            //             }
            //         }
            //     }
            // });

            break;
            

       case 8:

            // header = $("#header").val();
            // startseq = $("#startseq").val();
 
            let pa8=JSON.stringify({
                "USER":loginuser,
                "FACTORY":$('#Factory1').val(),
                "BT005": $('#SCRAP_SN3').val(),
                "BT003": $('#employeeId3').val(),
                "DATA": putData
            });
 
            options.gridDefPostData =JSON.parse(pa8);
            $grid.createJqGrid(options);
            break;

        case 9:

        



            // console.log("date====> "+currentDate);
            
            

            // if($('#record_type').val()=='1'){
            //     options.gridDefinitionUrl=invokeURL + 'solder_paste_into_ac_control_record';//apiurl P
            //     options.colAPI='solder_paste_into_ac_control_record'; //set colModel index
            //     options.caption="錫膏進場管制紀錄表";
            // }else if($('#record_type').val()=='2'){
            //     options.gridDefinitionUrl=invokeURL + 'solder_paste_return_to_room_record';//apiurl P
            //     options.colAPI='solder_paste_return_to_room_record'; //set colModel index 
            //     options.caption="錫膏回溫及攪拌紀錄表";
            // }
            
 

            let pa9=JSON.stringify({
                "USER":loginuser,
                "BT005": $('#SCRAP_SN3').val(),
                "BT003": $('#employeeId3').val(),
                "BU002": $('#stocktype').val(), 
                "BU006": $('#gap').val(), 
                "BU007": $('#SCRAP2').val(), 
            });
 
            console.log("pa9====> "+pa9);

            options.gridDefPostData =JSON.parse(pa9);
            $grid.createJqGrid(options);
            break;

        case 10://scraper_stockout_query

            // header = $("#header").val();
            // startseq = $("#startseq").val();
 
            let pa10=JSON.stringify({ 
                "USER":loginuser
            });
 
            options.gridDefPostData =JSON.parse(pa10);
            $grid.createJqGrid(options);
            break;

        case 11:


            var pdata=JSON.stringify({ 
                "TH003":$("#employeeId3").val(),
                "FACTORY":$("#Factory1").val()
            });

            options.gridDefPostData =JSON.parse(pdata);
            $grid.createJqGrid(options);
            break;

          case 12:


            var pdata=JSON.stringify({ 
                "TH003":$("#employeeId3").val(),
                "FACTORY":$("#Factory1").val()
            });

            options.gridDefPostData =JSON.parse(pdata);
            $grid.createJqGrid(options);
            break;

        case 13: 
            var pdata=JSON.stringify({ 
                "FACTORY":$("#Factory1").val()
            });

            options.gridDefPostData =JSON.parse(pdata);
            $grid.createJqGrid(options);
            break;


        default:

            break;
            
    }





    gridButton();

}



/*---------------------JqGrid Function End--------------*/
/*---------------------Chart Function Start--------------*/
/*---------------------Chart Function End--------------*/
/*---------------------Other Function Start--------------*/




function getWoList(wo){


}










function delSolderPasteSn(msg,url,ids,row){


    console.log("afterSubmit ids="+ids); 

    if(ids!=''){
        console.log("result = "+row.TI001);
        let postData = { 
            "TI001": row.TI001,
            "TI002": row.TI002
        };
        let result = ajaxGetData(invokeURL + "solder_paste_sn_delete", postData);
        // result = ajaxGetDatsa(url, postData);
        console.log(result);
        if (result[0]["result"] != "ok") {
            alert("delete failed")
            msg.push({
                "TI001": postData['TI001'],
                "TI002": postData['TI002']
            }

          )
        }
    }
    
    
    if (msg.length>0) {
        return [false, msg];
          
    } else {
      return [true, "OK", "Delete a completed data!"];
       
    }
}

function delSolderPaste(msg,url,ids,row){
    console.log("afterSubmit ids="+ids); 

    if(ids!=''){
        console.log("result = "+row.TH001);
        let postData = { 
            "TH001": row.TH001
        };
        let result = ajaxGetData(invokeURL + "solder_paste_delete", postData);
        // result = ajaxGetDatsa(url, postData);
        console.log(result);
        if (result[0]["result"] != "ok") {
            alert("delete failed")
            msg.push({
                "TH001": postData['TH001']
            }

          )
        }
    }
    
    
    if (msg.length>0) {
        return [false, msg];
          
    } else {
      return [true, "OK", "Delete a completed data!"];
       
    }


}


/*---------------------Other Function End--------------*/