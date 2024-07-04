 /*---------------------公用變數 Start--------------*/
var apiurl = getUrlVars()['type']; 
var lineData = new Array();
var gridRows = new Array();
var header; 
var type;
var sn_num;//序號數量
var TL001;
var solderPaste;
var TH001_DEL;
var sn="";
var date = new Date();
var seperator1 = "-";
var seperator2 = ":";

var chobtnsku;
var BT001;

var year = date.getFullYear();
var month = date.getMonth() + 1;
var strDate = date.getDate();
var currentDate;

var loginuser = null;

var gridList = [{ //grid初始化參數  0
    caption: "創建鋼板頁面 &nbsp;&nbsp; "+
    "<INPUT TYPE='button' NAME='chkform' id='chkform' VALUE='單據確認' style='color:black;font-size:12px'> &nbsp;&nbsp; " +
    "<INPUT TYPE='button' NAME='cancelform' id='cancelform' VALUE='單據取確' style='color:black;font-size:12px'>", 
    gid: 'jqGrid1',
    pager: '#jqGrid1Pager',
    shrinkToFit: false,
    gridDefinitionUrl: invokeURL + 'steel_paste_create',//apiurl P
    colAPI: 'steel_paste_query', //set colModel index
    fixedColFDb: true, //set db
    gridDefPostData: {

        
    },
    search: true,
    refresh: true,
    xls: true,
    edit:true,
    del:false,
    delOption: {
        //delurl: invokeURL + "RMA_FROM_DELETE",
        delurl: invokeURL + "",
    
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
    
    
                return delSolderPaste(msg,url,ids,row);

            }
        }

},{ //grid初始化參數 1
    caption: "鋼板查詢頁面 &nbsp;&nbsp; "+
    "<INPUT TYPE='button' NAME='chkform' id='chkform' VALUE='單據確認' style='color:black;font-size:12px'> &nbsp;&nbsp; " +
    "<INPUT TYPE='button' NAME='cancelform' id='cancelform' VALUE='單據取確' style='color:black;font-size:12px'>", 
    gid: 'jqGrid1',
    pager: '#jqGrid1Pager',
    // rowNum: 20,
    viewrecords: true, 
    shrinkToFit: false,
    gridDefinitionUrl: invokeURL + 'steel_paste_query',//apiurl P
    colAPI: 'steel_paste_query', //set colModel index
    fixedColFDb: true, //set db
    gridDefPostData: {
        "solderPaste":""
    },
    search: true,
    refresh: true,
    xls: true, 
    del:false,
    delOption: {
        //delurl: invokeURL + "RMA_FROM_DELETE",
        delurl: invokeURL + "solder_paste_delete",
    
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
    
    
                return delSolderPaste(msg,url,ids,row);

            }
        },    
    edit: true,
        editOption: {
            editurl: invokeURL + "",
            serializeEditData: function (postData) {
                console.log("editOption"+postData);

                let ids = $(this).getGridParam("selrow");
                console.log("serializeEditData ids="+ids);
                let row = $(this).jqGrid('getRowData', ids[0]);
                console.log("ordernumber = "+row.TL001); 
                console.log("note = "+postData.TH010); 


                let pa=JSON.stringify({
                    "ordernumber": row.TL001, 
                    "note": postData.TH010
                });
              
              console.log(pa);
              return pa;
            }
        },
        ondblClickRow:function(rowid,iRow,iCol,e){
            var curPage = $("#jqGrid1").getGridParam("page");//当前页码
            var pageSize = $("#jqGrid1").getGridParam("rowNum");//每页显示的记录条数
            var curRowNum = parseInt((curPage-1)*pageSize) + parseInt(rowid); //当前双击的行的行号

            console.log('curPage',curPage);
            console.log('pageSize',pageSize);
            console.log('curRowNum',curRowNum);
    
            let grid = $("#" + gridList[1].gid);
            let data = $.trim(grid.getRowData()[curRowNum-1]["TL001"]);
    
            let postData = { 
                "TL001": data
            };
            TL001 = data;


            let result = ajaxGetData(invokeURL + "steel_paste_pcb_query",postData);

            console.log('grid',grid);//jqGrid2
            console.log('TL001',data); //取得加工順序

                      

            
            if(result[0].TM001 == undefined){

                // sn_num = $.trim(grid.getRowData()[curRowNum-1]["TH009"]);
                // console.log('sn_num',sn_num);  
                //沒值就創建
                $('#myModal1').modal('show');
                

            }else{
                //如果有值就查
                // gridList[6].gridDefPostData['TL001'] = data; 
                createGrid(6);
            }



           
    
        }

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
        
        if(chobtnsku=='sku'){
            $('#SKU').val(data.料號);
        }else if(chobtnsku=='partsku'){
            $('#PARTSKU').val(data.料號);
        }



        
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
    caption: '鋼板PCB查詢6',
    gid: 'jqGrid2',
    pager: '#jqGrid2Pager',
    shrinkToFit: true,
    gridDefinitionUrl: invokeURL + 'steel_paste_pcb_query',//apiurl P
    colAPI: 'steel_paste_pcb_query', //set colModel index
    fixedColFDb: true, //set db
    gridDefPostData: {

        
    },
    search: true,
    refresh: true,
    xls: true, del: true,add: true,
    addOption: {
        // search:true,
        addurl: invokeURL + "steel_paste_pcb_create_btn",
        serializeEditData: function (postData) {
            console.log("addOption"+postData);
            

		// var grid = $("#gridId");
		// var allData = [];
		// var rowIds = grid.jqGrid("getDataIDs");

		// for (var i = 0; i < rowIds.length; i++) {
		  // var rowData = grid.jqGrid("getRowData", rowIds[i]);
		  // allData.push(rowData);
		// }

		// console.log(allData);
		
		
		
		
		
          let pa=JSON.stringify({
				"TL001":TL001,
                "HEADER":postData.TM002,
                "USER":loginuser,
                "FACTORY":$("#Factory1").val()
          });
          
          console.log(pa);
          return pa;
      }

    },
	
	
	
	
	
    delOption: {
    //delurl: invokeURL + "RMA_FROM_DELETE",
    delurl: invokeURL + "",

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
    caption: '鋼板序號查詢7',
    gid: 'jqGrid2',
    pager: '#jqGrid2Pager',
    shrinkToFit: true,
    gridDefinitionUrl: invokeURL + 'steel_paste_pcb_create',//apiurl P
    colAPI: 'steel_paste_pcb_query', //set colModel index
    fixedColFDb: true, //set db
    gridDefPostData: {

        
    },
    search: true,
    refresh: true,
    xls: true, del: true,add: true,
       addOption: {
        // search:true,
        addurl: invokeURL + "steel_paste_pcb_create_btn",
        serializeEditData: function (postData) {
            console.log("addOption"+postData);
            

		// var grid = $("#gridId");
		// var allData = [];
		// var rowIds = grid.jqGrid("getDataIDs");

		// for (var i = 0; i < rowIds.length; i++) {
		  // var rowData = grid.jqGrid("getRowData", rowIds[i]);
		  // allData.push(rowData);
		// }

		// console.log(allData);
		
		
		
		
		
          let pa=JSON.stringify({
				"TL001":TL001,
                "HEADER":postData.TM002,
                "USER":loginuser,
                "FACTORY":$("#Factory1").val()
          });
          
          console.log(pa);
          return pa;
      }

    },
	
	
	
	
	
		delOption: {
		//delurl: invokeURL + "RMA_FROM_DELETE",
		delurl: invokeURL + "",

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


},{ //grid初始化參數8
    caption: '鋼板序號查詢',
    gid: 'jqGrid2',
    pager: '#jqGrid2Pager',
    shrinkToFit: true,
    gridDefinitionUrl: invokeURL + 'solder_paste_sn_delete_all',//apiurl P
    colAPI: 'solder_paste_sn_query', //set colModel index
    fixedColFDb: true, //set db
    gridDefPostData: {

        
    },
    search: true,
    refresh: true,
    xls: true, del:false,
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


},{ //grid初始化參數  9   創建刮刀頁面
    caption: "創建刮刀頁面 &nbsp;&nbsp; "+
    "<INPUT TYPE='button' NAME='chkform_sc' id='chkform_sc' VALUE='單據確認' style='color:black;font-size:12px'> &nbsp;&nbsp; " +
    "<INPUT TYPE='button' NAME='cancelform_sc' id='cancelform_sc' VALUE='單據取確' style='color:black;font-size:12px'>", 
    gid: 'jqGrid1',
    pager: '#jqGrid1Pager',
    shrinkToFit: false,
    gridDefinitionUrl: invokeURL + 'scraper_create',//apiurl P
    colAPI: 'scraper_query', //set colModel index
    fixedColFDb: true, //set db
    gridDefPostData: {

        
    },
    search: true,
    refresh: true,
    xls: true,
    edit:true,
    del:false,
    delOption: {
        //delurl: invokeURL + "RMA_FROM_DELETE",
        delurl: invokeURL + "",
    
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
    
    
                return delSolderPaste(msg,url,ids,row);

            }
        }

},{ //grid初始化參數  10 刮刀查詢頁面
   caption: "刮刀查詢頁面 &nbsp;&nbsp; "+
    "<INPUT TYPE='button' NAME='chkform_sc' id='chkform_sc' VALUE='單據確認' style='color:black;font-size:12px'> &nbsp;&nbsp; " +
    "<INPUT TYPE='button' NAME='cancelform_sc' id='cancelform_sc' VALUE='單據取確' style='color:black;font-size:12px'>", 
    gid: 'jqGrid1',
    pager: '#jqGrid1Pager',
    // rowNum: 20,
    viewrecords: true, 
    shrinkToFit: false,
    gridDefinitionUrl: invokeURL + 'scraper_query',//apiurl P
    colAPI: 'scraper_query', //set colModel index
    fixedColFDb: true, //set db
    gridDefPostData: {
        
    },
    search: true,
    refresh: true,
    xls: true, 
    del:false,
    delOption: {
        //delurl: invokeURL + "RMA_FROM_DELETE",
        delurl: invokeURL + "",
    
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
    
    
                return delSolderPaste(msg,url,ids,row);

            }
        },    
    edit: true,
        editOption: {
            editurl: invokeURL + "",
            serializeEditData: function (postData) {
                console.log("editOption"+postData);

                let ids = $(this).getGridParam("selrow");
                console.log("serializeEditData ids="+ids);
                let row = $(this).jqGrid('getRowData', ids[0]);
                console.log("ordernumber = "+row.BT001); 
                console.log("note = "+postData.TH010); 


                let pa=JSON.stringify({
                    "ordernumber": row.BT001, 
                    "note": postData.TH010
                });
              
              console.log(pa);
              return pa;
            }
        }

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
    loginuser = getcooky("UID")
     
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

    console.log(header);
    
  
    createGrid(7);
	createGrid(6);

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
 


    $('#createForm').on('click', function () {

		// createGrid(0); TYPE_1
		
		
		if($('#TYPE_1').val()=='2'){
	
			if($('#version').val().trim()==''){
				alert('請輸入版本！');
				return;
			}else if($('#employeeId').val().trim()==''){                
				alert('請輸入員工編號！');
				return;
			}else if($('#formDate').val().trim()==''){                
				alert('請輸入單據日期！');
				return;
			}else if($('#thickness').val().trim()==''){                
				alert('請輸入厚度！');
				return;
			}else if($('#numofboards').val().trim()==''){                
				alert('請輸入連板數！');
				return;
			}else if($('#limitnum').val().trim()==''){                
				alert('請輸入限用次數！');
				return;
			}
			// else if($('#accumulationlimitnum').val().trim()==''){                
				// alert('請輸入累積使用次數！');
				// return;
			// }else if($('#remaining_times').val().trim()==''){                
				// alert('請輸入剩餘次數！');
				// return;
			// }
			// else if($('#steel_plate_serial_number').val().trim()==''){                
				// alert('請輸入鋼板編號！');
				// return;
			// }
			else if($('#locate_serial_number').val().trim()==''){                
				alert('請輸入儲位編號！');
				return;
			}else if($('#SKU').val().trim()==''){                
				alert('請輸入料號！');
				return;
			}
			// else if($('#PARTSKU').val().trim()==''){                
				// alert('請輸入零件料號！');
				// return;
			// }
			else if($('#tension1').val().trim()==''){                
				alert('請輸入張力1！');
				return;
			}else if($('#tension2').val().trim()==''){                
				alert('請輸入張力2！');
				return;
			}else if($('#tension3').val().trim()==''){                
				alert('請輸入張力3！');
				return;
			}else if($('#tension4').val().trim()==''){                
				alert('請輸入張力4！');
				return;
			}else if($('#tension5').val().trim()==''){                
				alert('請輸入張力5！');
				return;
			} 
			else if($('#stockDate').val().trim()==''){                
				alert('請輸入製造日期！');
				return;
			} 
			else if(!Number.isInteger(parseInt($('#thickness').val()))){
				alert('厚度請輸入數字！');
				return;
			}
			else if(!Number.isInteger(parseInt($('#numofboards').val()))){
				alert('連板數請輸入數字！');
				return;
			}
			else if(!Number.isInteger(parseInt($('#limitnum').val()))){
				alert('限用次數請輸入數字！');
				return;
			}
			// else if(!Number.isInteger(parseInt($('#accumulationlimitnum').val()))){
				// alert('累積使用次數請輸入數字！');
				// return;
			// }
			// else if(!Number.isInteger(parseInt($('#remaining_times').val()))){
				// alert('剩餘次數請輸入數字！');
				// return;
			// }
			else if(!Number.isInteger(parseInt($('#tension1').val()))){
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

			//45~55
			if(!isZone($('#tension1').val())||!isZone($('#tension2').val())||!isZone($('#tension3').val())||!isZone($('#tension4').val())||!isZone($('#tension5').val())){
				alert('張力請介在45~55之間！');
				return;
			}





			
			var yes = confirm('請確認以下資料 : 廠別'+$('#Factory1').val()+
			',單據日期:'+$('#formDate').val()+',員工編號:'+$('#employeeId').val()+
			',基板面:'+$('#TL010').val()+',版本:'+$('#version').val()+',厚度:'+$('#thickness').val()+
			',連板數:'+$('#numofboards').val()+',限用次數:'+$('#limitnum').val()+',儲位編號:'+$('#locate_serial_number').val()+',料號:'+$('#SKU').val());

			if (yes) {
				// alert('你按了確定按鈕');
				// $('.toast').toast('show!')
				// createGrid(0);
	  
				let postData = {  
					"TL003": $('#employeeId').val(),
					"TL008": $('#SKU').val(), 
					"TL022": $('#PARTSKU').val(),  
                    "TL007": $('#locate_serial_number').val(),
					"RESULT":"",
					"MSG":""
				};
				
				let result = ajaxGetData(invokeURL + "steel_paste_chkdata", postData);
				if (result[0]["RESULT"] != "OK") {
					alert("Checking form failed:"+result[0]["MSG"]);
				}else{
				
					alert("Checking form success:"+result[0]["MSG"]);
				
				   createGrid(0);
				}
				


			} else {
				alert('動作取消');
			}

			createGrid(1);
		}else if($('#TYPE_1').val()=='1'){//刮刀
		
				// createGrid(0);
	
				if($('#employeeId').val().trim()==''){                
					alert('請輸入員工編號！');
					return;
				}else if($('#formDate').val().trim()==''){                
					alert('請輸入單據日期！');
					return;
				}else if($('#gap').val().trim()==''){                
					alert('請輸入縫隙！');
					return;
				}else if($('#limitnum').val().trim()==''){                
					alert('請輸入限用次數！');
					return;
				}
				else if($('#scraper_serial_number').val().trim()==''){                
					alert('請輸入刮刀編號！');
					return;
				} 
				else if($('#stockDate').val().trim()==''){                
					alert('請輸入製造日期！');
					return;
				} 
				else if(!Number.isInteger(parseInt($('#gap').val()))){
					alert('縫隙請輸入數字！');
					return;
				}
				else if(!Number.isInteger(parseInt($('#limitnum').val()))){
					alert('限用次數請輸入數字！');
					return;
				}else if($('#gap').val().trim()>0.05){
					alert('縫隙不能超過0.05！');
					return;
				}






				
				var yes = confirm('請確認以下資料 : 廠別'+$('#Factory1').val()+
				',單據日期:'+$('#formDate').val()+',員工編號:'+$('#employeeId').val()+
				',基板面:'+$('#TL010').val()+',縫隙:'+$('#gap').val()+
				',限用次數:'+$('#limitnum').val()+',刮刀編號:'+$('#scraper_serial_number').val());

				if (yes) {
					// alert('你按了確定按鈕');
					// $('.toast').toast('show!')
					// createGrid(0);
		  
					let postData = {  
						"BT003": $('#employeeId').val().trim(), 
						"BT005":$('#scraper_serial_number').val().trim(),
						"RESULT":"",
						"MSG":""
					};
					
					let result = ajaxGetData(invokeURL + "scraper_chkdata", postData);
					if (result[0]["RESULT"] != "OK") {
						alert("Checking form failed:"+result[0]["MSG"]);
					}else{
					
						alert("Checking form success:"+result[0]["MSG"]);
					
					   createGrid(9);
					}
					


				} else {
					alert('動作取消');
				}
		
		
		}

		
        var date =new Date();
        $("#refreshtime").text("更新時間:"+date);
        $('#showDiv1').show();
		
		
		
		
		
		
		
    });


    

    $('#searchBtn1').on('click', function () {

 		if($('#TYPE_1').val()=='2'){
			var form = prompt("請輸入要查詢的鋼板進料單號", "");

            console.log("form:"+form);
            TL001=form;

            createGrid(1);
			
		}else if($('#TYPE_1').val()=='1'){//刮刀
		
		
		    var form = prompt("請輸入要查詢的刮刀進料單號", "");

            console.log("form:"+form);
            BT001=form;

            createGrid(10);
		
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
        chobtnsku='sku';
        createGrid(3);
    });

    $('#partsku').on('click',function (){
        $('#listModal').modal('show');
        chobtnsku='partsku';
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



      $('#TYPE_1').change(function(){
        let sltValue=$(this).val();
        console.log(sltValue);
        
        $('#formDate_div').hide(); 
        $('#employeeId_div').hide();  
        $('#TL010_div').hide() ; 
        $('#version_div').hide();//LINE3_div
        $('#thickness_div').hide(); 
		$('#numofboards_div').hide(); 
		$('#limitnum_div').hide(); 
		$('#locate_serial_number_div').hide(); 
		
		$('#SKU_div').hide(); 
		$('#PARTSKU_div').hide(); 
		$('#checknum_div').hide(); 
		$('#stockDate_div').hide(); 
		$('#tension1_div').hide(); 
		$('#tension2_div').hide(); 
		$('#tension3_div').hide(); 
		$('#tension4_div').hide(); 
		$('#tension5_div').hide(); 
		   
		
		
		$('#scraper_serial_number_div').hide();  
		$('#length_div').hide();  
		$('#gap_div').hide();  		

        if(sltValue=='2'){ //鋼板
            $('#formDate_div').show(); 
			$('#employeeId_div').show();  
			$('#TL010_div').show() ; 
			$('#version_div').show();//LINE3_div
			$('#thickness_div').show(); 
			$('#numofboards_div').show(); 
			$('#limitnum_div').show(); 
			$('#locate_serial_number_div').show(); 
			
			$('#SKU_div').show(); 
			$('#PARTSKU_div').show(); 
			$('#checknum_div').show(); 
			$('#stockDate_div').show(); 
			$('#tension1_div').show(); 
			$('#tension2_div').show(); 
			$('#tension3_div').show(); 
			$('#tension4_div').show(); 
			$('#tension5_div').show(); 
		

        }else if(sltValue=='1'){ //刮刀
            $('#formDate_div').show(); 
			$('#employeeId_div').show();  
			$('#limitnum_div').show();   
			$('#scraper_serial_number_div').show();  
			$('#checknum_div').show();  
			$('#stockDate_div').show();  
			$('#length_div').show();  
			$('#gap_div').show();   
			
			
             
        }

         
      });

   
			$('#scraper_serial_number_div').hide();   
			$('#length_div').hide();  
			$('#gap_div').hide();   
	  
	  
    
    currentDate = year + month +  strDate; 



    $('#stockOutDate').val(currentDate);






}


function isZone(num){
    if(num >= 45 & num <=55){
        return true
    }

    return false
}
 
function gridButton() {

    $('#chkform').on('click', function () {
        console.log("chkform");

        var txt;
        var form = prompt("請輸入要確認的鋼板進料單號", "");
        if (form == null || form == "") {
            console.log("取消"); 

        } else {
            console.log("form:"+form);


            let postData = { 
                "TL001": form,
				"USER":loginuser,
                "RESULT":"",
                "FACTORY":$('#Factory1').val(),
                "MSG":""
            };


            let result = ajaxGetData(invokeURL + "steel_paste_chkdata1", postData);
            
            console.log('steel_paste_chkdata1 result'+result[0]["RESULT"]);
            if (result[0]["RESULT"] != "OK") {
                alert("Checking form failed:"+result[0]["MSG"]);

            }else{
				// alert("Checking form success:"+result[0]["MSG"]);
			
                result = ajaxGetData(invokeURL + "steel_paste_chkform", postData);
                console.log('steel_paste_chkform result='+result[0]["RESULT"]);

                if (result[0]["RESULT"] != "OK") {
                    alert("Checking form failed1:"+result[0]["MSG"]);
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
                "TL001": form,
                "FACTORY":$('#Factory1').val(),
				"USER":loginuser,
                "RESULT":"",
                "MSG":""
            };

            let result = ajaxGetData(invokeURL + "steel_paste_cancelform", postData);
            if (result[0]["RESULT"] != "OK") {
                alert("Checking form failed:"+result[0]["MSG"]);
            }else{

                alert("Checking form success:"+result[0]["MSG"]);

                createGrid(1);
            }
        }
    });


	
	
	
	   $('#chkform_sc').on('click', function () {
        console.log("chkform");

        var txt;
        var form = prompt("請輸入要確認的刮刀進料單號", "");
        if (form == null || form == "") {
            console.log("取消"); 

        } else {
            console.log("form:"+form);


            let postData = { 
                "BT001": form,
				"USER":loginuser,
                "RESULT":"",
                "FACTORY":$('#Factory1').val(),
                "MSG":""
            };


            let result = ajaxGetData(invokeURL + "scraper_chkdata1", postData);
            
            console.log('scraper_chkdata1 result'+result[0]["RESULT"]);
            if (result[0]["RESULT"] != "OK") {
                alert("Checking form failed:"+result[0]["MSG"]);

            }else{
				// alert("Checking form success:"+result[0]["MSG"]);
			
                result = ajaxGetData(invokeURL + "scraper_chkform", postData);
                console.log('scraper_chkform result='+result[0]["RESULT"]);

                if (result[0]["RESULT"] != "OK") {
                    alert("Checking form failed1:"+result[0]["MSG"]);
                }else{

                    alert("Checking form success:"+result[0]["MSG"]);

                    createGrid(10);
                }


            }


        }

        // if (confirm("Are you sure?")) {
        //     // CreateWO(0, 'Refurbish');
        // }
    });



    $('#cancelform_sc').on('click', function () {
        console.log("cancelform");
        var form = prompt("請輸入要取消的進料單號", "");
        if (form == null || form == "") {
            console.log("取消"); 

        } else {
            console.log("form:"+form);

            let postData = { 
                "BT001": form,
                "FACTORY":$('#Factory1').val(),
				"USER":loginuser,
                "RESULT":"",
                "MSG":""
            };

            let result = ajaxGetData(invokeURL + "scraper_cancelform", postData);
            if (result[0]["RESULT"] != "OK") {
                alert("Checking form failed:"+result[0]["MSG"]);
            }else{

                alert("Checking form success:"+result[0]["MSG"]);

                createGrid(10);
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
            // options.caption = "創建鋼板進料單號";
            let pa=JSON.stringify({
                "TL002":$('#formDate').val(),
                "TL003":$('#employeeId').val(),
                "TL004":'',//$('#TL004').val()
                "TL005":$('#stockDate').val(),
                "TL006":$('#steel_plate_serial_number').val(),
                "TL007":$('#locate_serial_number').val(),
                "TL008":$('#SKU').val(),
                "TL022":$('#PARTSKU').val(), 
                "TL009":$('#version').val(),
                "TL010":$('#TL010').val(),
                "TL011":$('#thickness').val(),//$('#checknum').val()
                "TL013":$('#limitnum').val(),
                "TL014":$('#numofboards').val(),
                "TL015":'',//$('#remaining_times').val()
                "TL016":'',
                "TL017":'', //$('#accumulationlimitnum').val()
                "TL012":$('#tension1').val(),
                "TL018":$('#tension2').val(),
                "TL019":$('#tension3').val(),
                "TL020":$('#tension4').val(),
                "TL021":$('#tension5').val(),
                "FACTORY":$('#Factory1').val(),

                "TL001":"",
                "USER":loginuser

            });

            // console.log("url====> "+invokeURL + apiurl);

            options.gridDefPostData =JSON.parse(pa);
            $grid.createJqGrid(options);
            break;
        case 1: 
            let pa1=JSON.stringify({
                "TL001":TL001==null?'':TL001,//$('#solderPaste').val()
                "FACTORY":$("#Factory1").val()
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
		
		
		
		     let pa6=JSON.stringify({
                "TL001":TL001,
                "HEADER":header,
                "USER":loginuser,
                "FACTORY":$("#Factory1").val()

            });
 
            options.gridDefPostData =JSON.parse(pa6);
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
 
 
            let pa7=JSON.stringify({
                "TL001":TL001,
                "HEADER":header,
                "USER":loginuser,
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
 
 
            let pa8=JSON.stringify({
                "TH001":TH001_DEL,
                "FACTORY":$("#Factory1").val()
            });
 
            options.gridDefPostData =JSON.parse(pa8);
            $grid.createJqGrid(options);
            break;

        case 9:

            let pa9=JSON.stringify({
				
				"BT001":'',
				"BT002":$('#formDate').val(),
				"BT003":$('#employeeId').val(),
				"BT004":$('#stockDate').val(),
				"BT005":$('#scraper_serial_number').val(),
				"BT006":'',
				"BT007":$('#length').val(),
				"BT008":$('#gap').val(),
				"BT009":$('#limitnum').val(),
				"BT010":'',
				"BT011":'',
				"BT012":'N',
				
				
				
				
				
                "FACTORY":$('#Factory1').val(), 
                "USER":loginuser

            });

            // console.log("url====> "+invokeURL + apiurl);

            options.gridDefPostData =JSON.parse(pa9);
            $grid.createJqGrid(options);
            break;

		case 10:
		     let pa10=JSON.stringify({
                "BT001":BT001==null?'':BT001,//$('#solderPaste').val()
                "FACTORY":$("#Factory1").val()
            });

            // console.log("url====> "+invokeURL + apiurl);
            options.gridDefPostData =JSON.parse(pa10);



            $grid.createJqGrid(options);
		
            break;
        case 11:


            var pdata=JSON.stringify({
                "TH004":$("#TH004_3").val(),
                "TH003":$("#employeeId3").val(),
                "FACTORY":$("#Factory1").val()
            });

            options.gridDefPostData =JSON.parse(pdata);
            $grid.createJqGrid(options);
            break;

          case 12:


            var pdata=JSON.stringify({
                "TH004":$("#TH004_3").val(),
                "TH003":$("#employeeId3").val(),
                "FACTORY":$("#Factory1").val()
            });

            options.gridDefPostData =JSON.parse(pdata);
            $grid.createJqGrid(options);
            break;

        case 13: 
            var pdata=JSON.stringify({
                "TH004":$("#TH004_3").val(), 
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

function delSolderPasteSn(msg,url,ids,row){


    console.log("afterSubmit ids="+ids); 

    if(ids!=''){
        console.log("result = "+row.TM001);
        let postData = { 
            "TM001": row.TM001,
            "TM002": row.TM002
        };
        let result = ajaxGetData(invokeURL + "steel_paste_pcb_delete", postData);
        // result = ajaxGetDatsa(url, postData);
        console.log(result);
        if (result[0]["result"] != "ok") {
            alert("delete failed")
            msg.push({
                "TM001": postData['TM001'],
                "TM002": postData['TM002']
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
        let result = ajaxGetData(invokeURL + "", postData);
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