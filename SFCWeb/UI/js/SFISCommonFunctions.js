function PassBatchRun(cdsCondition, cdsView, FDatabaseName, FUserId, FUserGroup, FTodayDate) { //過站+檢測紀錄
    let vReturnVal = {
        result: true,
        TA02X: '',
        errMsg: ''
    };
    let FupdateSSFMF = false;
    let FMG007;
    let FTA031;
    let FMG008;
    let FMG009;
    let FMG012;
    let FTA028;
    let FTA01X = cdsCondition.TA001;
    let FTA003 = cdsCondition.TA003;
    let FTA004 = cdsCondition.TA004;
    let FTA005 = cdsCondition.TA005;
    let FTA006 = cdsCondition.TA006;
    let FTA007 = cdsCondition.TA007;
    let FTA009 = cdsCondition.TA009;
    let FTA025 = cdsCondition.FTA025;

    let TA02X = ajaxGetData(invokeURL + "SFIS_GetTA02X_BatchRun", {
        FTA01X: FTA01X
    });
    console.log('TA02X', TA02X);
    if (TA02X[0].result == undefined) {
        let FTA02X = LPAD((parseInt(TA02X[0].TA02X) + 1).toString(), 4, '0');
        console.log('FTA02X', FTA02X);
        let FTA045 = cdsCondition.TA045;
        vReturnVal.TA02X = FTA02X;
        //2010/09/16 因為原本上線 QC 要求的 Touch up 程式上線後造成 dead lock, 因此修改程式,先判斷是否需要update 工單單頭資料
        //找製令狀態
        let GetSSFMF = ajaxGetData(invokeURL + "SFIS_GetSSFMF_BatchRun", {
            FTA005: FTA005
        });
        console.log('GetSSFMF', GetSSFMF);
        if (GetSSFMF[0].result == undefined) {
            let FMF006 = GetSSFMF[0].MF006;
            let FMF007 = GetSSFMF[0].MF007;
            let FMF016 = GetSSFMF[0].MF016;
            let FMF008 = GetSSFMF[0].MF008;
            let FMF009 = GetSSFMF[0].MF009;
            //判斷是否要更新 SSFMF 檔
            if (FMF006 == '') {
                FupdateSSFMF = true;

            } else {
                if ((FTA025 == '10') && (FMF016 == FTA007)) { //如果製程行為為 SMT 檢測 , 且為最後製程,則一定是要更新
                    FupdateSSFMF = true;
                } else if ((FTA009 != '3') && (FMF016 == FTA007)) {
                    FupdateSSFMF = true;
                } else {
                    FupdateSSFMF = false;
                }
            }
            //更新製令實際開工日,實際完工日,已生產量,製令狀態
            //傳入 生產日期,檢測結果,生產日期,檢測結果,製程代號,製令代號
            console.log('FupdateSSFMF', FupdateSSFMF);
            if (FupdateSSFMF) {
                let SSFMFBatchRunUPDATE = ajaxGetData(invokeURL + "SFIS_SSFMF_BatchRun_UPDATE", {
                    FTA003: FTA003,
                    FTA005: FTA005,
                    FTA007: FTA007,
                    FTA009: FTA009
                });
                console.log('SSFMFBatchRunUPDATE', SSFMFBatchRunUPDATE);
                if (SSFMFBatchRunUPDATE[0].result != 'ok') {
                    vReturnVal.result = false;
                    vReturnVal.errMsg = '更新製令開工,完工或已生產量資料失敗!';
                }
            }
            if (vReturnVal.result) {
                let GetSSFTABatchRun = ajaxGetData(invokeURL + "SFIS_GetSSFTA_BatchRun", {
                    FTA01X: FTA01X,
                    FTA005: FTA005,
                    FTA007: FTA007,
                    FTA006: FTA006
                });
                console.log('GetSSFTABatchRun', GetSSFTABatchRun);
                // 2013/10/31 因為上料沒有 NG 問題,同一製程不能重複投入,所以有此現象則擋住
                if (GetSSFTABatchRun[0].result == undefined) {
                    vReturnVal.result = false;
                    vReturnVal.errMsg = '序號已過此站,不可重複過站 !!';
                    FMG007 = 0;
                    FTA031 = '2';
                } else {
                    //如果不存在過站中,則投入數 +1
                    FMG007 = 1;
                    FTA031 = '1';
                    if (FTA009 != '3') { //如果 pass or ok , 完成數 +1
                        FMG008 = 1;
                        FMG009 = 0;
                    } else { //如果 NG , 待修數 +1
                        FMG008 = 0;
                        FMG009 = 1;
                    }
                    if ((FMG007 == 1) && (FTA009 != '3')) { //如果不存在過站且 pass or ok , 初檢ok數 +1
                        FMG012 = 1;
                        FTA028 = '1'; //初檢OK
                    } else {
                        FMG012 = 0;
                        FTA028 = '2'; ////初檢不 OK
                    }
                    //更新製令製程資料
                    let SSFMGBatchRunUPDATE = ajaxGetData(invokeURL + "SFIS_SSFMG_BatchRun_UPDATE", {
                        FMG007: FMG007,
                        FMG008: FMG008,
                        FMG009: FMG009,
                        FMG012: FMG012,
                        FTA003: FTA003,
                        FTA005: FTA005,
                        FTA006: FTA006,
                        FTA007: FTA007
                    });
                    console.log('SSFMGBatchRunUPDATE', SSFMGBatchRunUPDATE);
                    if (SSFMGBatchRunUPDATE[0].result != 'ok') {
                        vReturnVal.result = false;
                        vReturnVal.errMsg = '更新製令製程資料失敗!';
                    } else {
                        if (FTA009 == '3') { // NG
                            FTA009 = '02'; //設為維修中
                        } else {
                            FTA009 = '01'; //設為正常
                        }
                        if (FTA025 == '50') { //如果行為為入庫,則將生產序號狀態改為 09.入庫
                            FTA009 = '09';
                        }
                        //更新生產序號資料檔
                        let SSFMOBatchRunUPDATE = ajaxGetData(invokeURL + "SFIS_SSFMO_BatchRun_UPDATE", {
                            FTA02X: FTA02X,
                            FTA003: FTA003,
                            FTA004: FTA004,
                            FTA005: FTA005,
                            FTA006: FTA006,
                            FTA007: FTA007,
                            FTA009: FTA009,
                            FTA01X: FTA01X
                        });
                        console.log('SSFMOBatchRunUPDATE', SSFMOBatchRunUPDATE);
                        if (SSFMOBatchRunUPDATE[0].result != 'ok') {
                            vReturnVal.result = false;
                            vReturnVal.errMsg = '更新生產序號資料檔失敗!';
                        } else {
                            //新增序號 Key parts 明細
                            let modifyStatus = true;

                            if (cdsView == undefined) {
                                cdsView = [];

                            }
                            for (let i = 0; i < cdsView.length; i++) {
                                if (modifyStatus) {
                                    let SSFTQBatchRunUPDATE = ajaxGetData(invokeURL + "SFIS_SSFTQ_BatchRun_INSERT", {
                                        COMPANY: FDatabaseName,
                                        CREATOR: FUserId,
                                        USR_GROUP: FUserGroup,
                                        CREATE_DATE: FTodayDate,
                                        MODIFIER: FUserId,
                                        MODI_DATE: FTodayDate,
                                        FLAG: '1',
                                        TQ001: FTA01X,
                                        TQ002: FTA02X,
                                        TA01X: FTA01X,
                                        TA02X: FTA02X,
                                        TQ003: cdsView[i].NH003,
                                        TQ004: cdsView[i].TR004,
                                        TQ005: cdsView[i].TR005,
                                        TQ006: cdsView[i].TR006,
                                        TQ007: cdsView[i].TR007,
                                        TQ008: cdsView[i].TR008,
                                        TQ009: cdsView[i].TR009
                                    });
                                    console.log('SSFTQBatchRunUPDATE', SSFTQBatchRunUPDATE);
                                    if (SSFTQBatchRunUPDATE[0].result != 'ok') {
                                        modifyStatus = false;
                                    } else {

                                    }
                                }

                            }

                            if (!modifyStatus) {
                                vReturnVal.result = false;
                                vReturnVal.errMsg = '新增Key parts 明細資料檔失敗!';
                            } else {
                                //最後將此過站資料謝入過站檔
                                if (FTA045 != undefined && FTA045 != '') {
                                    FTA045 = FTA045.trim();
                                    if (FTA045 == '') {
                                        FTA045 = cdsCondition.FTA045;
                                    }
                                }
                                console.log('post', {
                                    TA001: FTA01X,
                                    TA002: FTA02X,
                                    TA003: FTA003,
                                    TA004: FTA004,
                                    TA005: FTA005,
                                    TA006: FTA006,
                                    TA007: FTA007,
                                    TA008: cdsCondition.TA008,
                                    TA009: cdsCondition.TA009,
                                    TA010: cdsCondition.TA010,
                                    TA011: cdsCondition.TA011,
                                    TA012: cdsCondition.TA012,
                                    TA013: cdsCondition.TA013,
                                    TA014: cdsCondition.TA014,
                                    TA015: cdsCondition.TA015,
                                    TA016: cdsCondition.TA016,
                                    TA017: cdsCondition.TA017,
                                    TA018: cdsCondition.TA018,
                                    TA019: cdsCondition.TA019,
                                    TA020: cdsCondition.TA020,
                                    TA021: cdsCondition.TA021,
                                    TA022: cdsCondition.TA022,
                                    TA023: cdsCondition.TA023,
                                    TA024: cdsCondition.TA024,
                                    TA025: cdsCondition.TA025,
                                    TA026: cdsCondition.TA026,
                                    TA027: cdsCondition.TA027,
                                    TA028: FTA028,
                                    TA029: cdsCondition.TA029,
                                    TA030: cdsCondition.TA030,
                                    TA031: FTA031,
                                    TA039: cdsCondition.TA039,
                                    TA040: cdsCondition.TA040,
                                    TA01X: FTA01X,
                                    TA02X: FTA02X,
                                    TA045: FTA045,
                                    TA047: cdsCondition.TA047,
                                    TA048: cdsCondition.TA048,
                                    COMPANY: FDatabaseName,
                                    CREATOR: FUserId,
                                    USR_GROUP: FUserGroup,
                                    CREATE_DATE: FTodayDate,
                                    MODIFIER: FUserId,
                                    MODI_DATE: FTodayDate,
                                    FLAG: '1'
                                });
                                let SSFTABatchRunINSERT = ajaxGetData(invokeURL + "SFIS_SSFTA_BatchRun_INSERT", {
                                    TA001: FTA01X,
                                    TA002: FTA02X,
                                    TA003: FTA003,
                                    TA004: FTA004,
                                    TA005: FTA005,
                                    TA006: FTA006,
                                    TA007: FTA007,
                                    TA008: cdsCondition.TA008,
                                    TA009: cdsCondition.TA009,
                                    TA010: cdsCondition.TA010,
                                    TA011: cdsCondition.TA011,
                                    TA012: cdsCondition.TA012,
                                    TA013: cdsCondition.TA013,
                                    TA014: cdsCondition.TA014,
                                    TA015: cdsCondition.TA015,
                                    TA016: cdsCondition.TA016,
                                    TA017: cdsCondition.TA017,
                                    TA018: cdsCondition.TA018,
                                    TA019: cdsCondition.TA019,
                                    TA020: cdsCondition.TA020,
                                    TA021: cdsCondition.TA021,
                                    TA022: cdsCondition.TA022,
                                    TA023: cdsCondition.TA023,
                                    TA024: cdsCondition.TA024,
                                    TA025: cdsCondition.TA025,
                                    TA026: cdsCondition.TA026,
                                    TA027: cdsCondition.TA027,
                                    TA028: FTA028,
                                    TA029: cdsCondition.TA029,
                                    TA030: cdsCondition.TA030,
                                    TA031: FTA031,
                                    TA039: cdsCondition.TA039,
                                    TA040: cdsCondition.TA040,
                                    TA01X: FTA01X,
                                    TA02X: FTA02X,
                                    TA045: FTA045,
                                    TA047: cdsCondition.TA047,
                                    TA048: cdsCondition.TA048,
                                    COMPANY: FDatabaseName,
                                    CREATOR: FUserId,
                                    USR_GROUP: FUserGroup,
                                    CREATE_DATE: FTodayDate,
                                    MODIFIER: FUserId,
                                    MODI_DATE: FTodayDate,
                                    FLAG: '1'
                                });
                                console.log('SSFTABatchRunINSERT', SSFTABatchRunINSERT);
                                if (SSFTABatchRunINSERT[0].result != 'ok') {
                                    vReturnVal.result = false;
                                    vReturnVal.errMsg = '新增到生產過站檔錯誤,生產序號 :' + FTA01X + ', 請查明後再執行!!';

                                }
                            }


                        }
                    }
                }
            }

        } else {
            vReturnVal.result = false;
            vReturnVal.errMsg = '查不到製令狀態!';

        }

    } else {
        vReturnVal.result = false;
        vReturnVal.errMsg = '查不到TA002資料!';

    }
    return vReturnVal;
}
//新增資料
function PassBatchRunOne(cdsCondition, cdsView, FDatabaseName, FUserId, FUserGroup, FTodayDate) {
    let vReturnVal = {
        result: true,
        errMsg: ''
    };
    // console.log(cdsCondition, cdsView, FDatabaseName, FUserId, FUserGroup, FTodayDate);
    let modifyStatus = true;
    let FTA003 = cdsCondition.TA003;
    let FTA004 = cdsCondition.TA004;
    let FTA005 = cdsCondition.TA005;
    let FTA006 = cdsCondition.TA006;
    let FTA007 = cdsCondition.TA007;
    let FTA030 = cdsCondition.TA030;
    for (let i = 0; i < cdsView.length; i++) {
        if (modifyStatus) {
            let SFTQTemp = ajaxGetData(invokeURL + "SFIS_SSFTQTemp_INSERT", {
                COMPANY: FDatabaseName,
                CREATOR: FUserId,
                USR_GROUP: FUserGroup,
                CREATE_DATE: FTodayDate,
                MODIFIER: FUserId,
                MODI_DATE: FTodayDate,
                FLAG: '1',
                TQ001: FTA030,
                TQ002: '0000',
                TQ003: cdsView[i].NH003,
                TQ004: cdsView[i].TR004,
                TQ005: cdsView[i].TR005,
                TQ006: cdsView[i].TR006,
                TQ007: cdsView[i].TR007,
                TQ008: cdsView[i].TR008,
                TQ009: ''
            });
            if (SFTQTemp[0].result != 'ok') {
                modifyStatus = false;
            }
        }

    }
    if (modifyStatus) {
        vReturnVal.result = false;
        vReturnVal.errMsg = '新增到Key parts暫存記錄檔失敗!';

    } else {
        //新增所有序號的SSFTQ 紀錄
        let KeypartsINSERT = ajaxGetData(invokeURL + "SFIS_Keyparts_INSERT", {
            FTA005: FTA005,
            FTA007: FTA007,
            FTA030: FTA030
        });
        if (KeypartsINSERT[0].result != 'ok') {
            vReturnVal.result = false;
            vReturnVal.errMsg = '新增到Key parts暫存記錄檔失敗!';
        } else {
            //刪除暫存的SSFTQ 紀錄
            let KeypartsDEL = ajaxGetData(invokeURL + "SFIS_SSFTQTemp_DELETE", {
                FTA030: FTA030
            });
            if (KeypartsDEL[0].result != 'ok') {
                vReturnVal.result = false;
                vReturnVal.errMsg = '刪除到Key parts暫存記錄檔失敗!!';
            } else {
                //更新SSFMO序號檔

                let SSFMOUPDATE = ajaxGetData(invokeURL + "SFIS_SSFMO_UPDATE", {
                    FTA003: FTA003,
                    FTA004: FTA004,
                    FTA005: FTA005,
                    FTA006: FTA006,
                    FTA007: FTA007
                });
                if (SSFMOUPDATE[0].result != 'ok') {
                    vReturnVal.result = false;
                    vReturnVal.errMsg = '更新SSFMO序號檔失敗!';
                } else {

                    //新增SSFTA 過站資訊檔
                    let SSFTAINSERT = ajaxGetData(invokeURL + "SFIS_SSFTA_INSERT", {
                        TA003: FTA003,
                        TA004: FTA004,
                        TA005: FTA005,
                        TA006: FTA006,
                        TA007: FTA007,
                        TA009: cdsCondition.TA009,
                        TA010: cdsCondition.TA010,
                        TA011: cdsCondition.TA011,
                        TA012: cdsCondition.TA012,
                        TA013: cdsCondition.TA013,
                        TA014: cdsCondition.TA014,
                        TA015: cdsCondition.TA015,
                        TA016: cdsCondition.TA016,
                        TA017: cdsCondition.TA017,
                        TA018: cdsCondition.TA018,
                        TA019: cdsCondition.TA019,
                        TA020: cdsCondition.TA020,
                        TA021: cdsCondition.TA021,
                        TA021: cdsCondition.TA021,
                        TA023: cdsCondition.TA023,
                        TA024: cdsCondition.TA024,
                        TA025: cdsCondition.TA025,
                        TA025: cdsCondition.TA025,
                        TA025: cdsCondition.TA025,
                        TA028: cdsCondition.TA028,
                        TA030: FTA030,
                        TA031: cdsCondition.TA031,
                        TA039: cdsCondition.TA039,
                        TA040: cdsCondition.TA040,
                        TA01X: FTA01X,
                        TA02X: FTA02X,
                        TA045: FTA045,
                        TA047: cdsCondition.TA047,
                        TA048: cdsCondition.TA048,
                        COMPANY: FDatabaseName,
                        CREATOR: FUserId,
                        USR_GROUP: FUserGroup,
                        CREATE_DATE: FTodayDate,
                        MODIFIER: FUserId,
                        MODI_DATE: FTodayDate,
                        FLAG: '1',
                        TA031: '1'
                    });
                    if (SSFTAINSERT[0].result != 'ok') {
                        vReturnVal.result = false;
                        vReturnVal.errMsg = '新增SSFTA過站資訊檔失敗!';
                    } else {
                        //更新製令的資料
                        let SSFMFUPDATE = ajaxGetData(invokeURL + "SFIS_SSFMF_UPDATE", {
                            FTA003: FTA003,
                            FTA005: FTA005,
                            FTA007: FTA007
                        });
                        if (SSFMFUPDATE[0].result != 'ok') {
                            vReturnVal.result = false;
                            vReturnVal.errMsg = '更新製令SSFMF失敗!';
                        } else {
                            //更新製令製程的資料
                            let SSFMGUPDATE = ajaxGetData(invokeURL + "SFIS_SSFMG_UPDATE", {
                                FTA003: FTA003,
                                FTA005: FTA005,
                                FTA006: FTA006,
                                FTA007: FTA007
                            });
                            if (SSFMGUPDATE[0].result != 'ok') {
                                vReturnVal.result = false;
                                vReturnVal.errMsg = '更新製令製程資料SSFMG失敗!';
                            } else {

                            }
                        }
                    }
                }
            }
        }

    }
    return vReturnVal;
}









function LPAD(Str, Len, Pad, ) {
    let result = '';
    for (let i = 0; i <= (Len - Str.length - 1); i++) {
        result += Pad;
    }
    result += Str;
    return result;
}

//初始流程
//--------------過站檢查
//傳入序號+製程+連結方式+過站屬性找出目前狀態
/*
  MO001 := Params[0]; //生產序號
  MA001 := Params[1]; //製程代號
  MP004 := Params[2]; //製程連結方式 1. 一般  3.被組合
  MA013 := Params[3]; //過站屬性 1.一般 2.自動過站
  MO007 := Params[4]; //製令
  傳入 : 生產序號,製程代號,加工順序,製程連結方式,過站屬性,製令
  {回傳：有無錯誤,錯誤訊息 }
*/
function GetPassStatus(SN, Process, POrder, Connect, PassType, MO) {
    console.log(SN, Process, POrder, PassType, Connect, MO);
    let vReturnVal = {
        result: false,
        errMsg: ''
    };
    let FMO001 = SN; //生產序號
    let FMA001 = Process; //製程代號
    let FMP004 = Connect; //製程連結方式 1. 一般  3.被組合
    let FMA013 = PassType; //過站屬性 1.一般 2.自動過站
    let FMO007 = MO; //製令
    let FMO008 = ''; //目前加工順序
    let FMO009 = ''; //目前製程代號
    let snStatus = true;
    /*找出序號相關資料     
      {傳入：序號}
      {回傳：有無筆數、生產序號(MO001),序號類別(MO002),目前序號(MO004),目前生產日期(MO005),目前生產時間(MO006),
             目前製令單號(MO007),目前加工順序(MO008),目前製程代號(MO009),目前維修製程代號(MO010),序號狀態(MO011),
             裝箱號碼(MO012),出貨通知單號(MO013),出貨箱號(MO014),所屬料號(MO015),所屬製令(MO016),
             棧板號碼(MO017),出貨棧板號碼(MO018),簽出入狀態(MO020) , 重測狀態(MB009), 重測簽出入狀態(MB008),目前重測製程代號(MB004) }
     */
    let FSSFMOData = ajaxGetData(invokeURL + "SFIS_GetSSFMO1", { //回傳 (工單)MF001,(站點)MG003,完成數量(MF008),預計產量(MF008),總放行數量(LA007)
        MO001: SN
    });
    if (FSSFMOData[0].result == undefined) {
        snStatus = true;
    } else {
        //序號不存在 檢查是否在歷史區
        let RestoreSNprocess = GetRestoreSNprocess(SN);
        switch (RestoreSNprocess.errorCode) {
            case 0: //歷史區複製正常 
                FSSFMOData = ajaxGetData(invokeURL + "SFIS_GetSSFMO1", { //重新找出序號相關資料  傳入 : 序號
                    MO001: SN
                });
                if (FSSFMOData[0].result == undefined) {
                    snStatus = true;
                } else {
                    snStatus = false;
                    vReturnVal.errMsg = FSSFMOData[0].result;
                    vReturnVal.result = false;
                }
                break;
            case 1: //複製歷史區錯誤
                snStatus = false;
                vReturnVal.errMsg = RestoreSNprocess.errMsg;
                vReturnVal.result = false;
                break;
            case 2: //如果歷史區也找不到 檢查是不是外部序號
                let ExternalSNprocess = GetExternalSNprocess(SN, MO, POrder, Connect);
                if (ExternalSNprocess.result) {
                    FSSFMOData = ajaxGetData(invokeURL + "SFIS_GetSSFMO1", { //重新找出序號相關資料  傳入 : 序號
                        MO001: SN
                    });
                    if (FSSFMOData[0].result == undefined) {
                        snStatus = true;
                    } else {
                        snStatus = false;
                        vReturnVal.errMsg = FSSFMOData[0].result;
                        vReturnVal.result = false;
                    }
                } else {
                    snStatus = false;
                    vReturnVal.errMsg = ExternalSNprocess.errMsg;
                    vReturnVal.result = false;
                }
                break;
        }

    }


    if (snStatus) { //查到序號
        /*過站製令找出製令狀態及製程狀態   傳入 : 製令,製程
    {傳入：製令,製程}
  {回傳：有無筆數、製令單號(MF001),產品料號(MF002),製令狀態(MF012),產品名稱(MB002),預計產量(MF008),
         可重工否(MW003),前製程(MF021),每箱個數(MF013),加工順序(MG002),製程行為(MG015),
         允許換出製令(MF022),允許換入製令(MF023),途程代號(MF003),途程版本(MF024),允許同機板換出製令(MF027),允許同機板換入製令(MF028),
         簽出入卡關否(MF034),重測卡關否(MF035)}
    */
        FMO008 = FSSFMOData[0].MO008;
        FMO009 = FSSFMOData[0].MO009;
        let FSSFMFData = ajaxGetData(invokeURL + "SFIS_GetSSFMF", { //回傳 (工單)MF001,(站點)MG003,完成數量(MF008),預計產量(MF008),總放行數量(LA007)
            MF001: MO,
            MG003: Process
        });

        if (FSSFMFData[0].result == undefined) {
            switch (parseInt(FSSFMFData[0].MF012)) {
                case 1:
                case 2:

                    if (!checkReworkProcess(MO, SN).result && (FSSFMFData[0].MF020 == '重工' || FSSFMFData[0].MF020 == '03')) {
                        vReturnVal.errMsg = '重工製令前製程卡關檢查失敗:序號於前製令無指定製程站別(' + FSSFMFData[0].MF037 + ')的過站紀錄,不可過站！！'
                        vReturnVal.result = false;
                    } else {
                        if (FSSFMFData[0].MW003 == 'Y') {
                            //重工流程
                            //GetReworkprocess()
                            vReturnVal = GetReworkprocess(SN, Process, POrder, Connect, MO, FSSFMOData, FSSFMFData);
                        } else {
                            //判斷序號狀態  1.正常 2.維修中 3.完修 4.報廢 5.被組合 6.裝箱 7.待驗 8.批退 9.入庫 10.出貨
                            switch (parseInt(FSSFMOData[0].MO011)) {
                                case 1:
                                case 6:
                                case 9:
                                case 5:
                                    //序號正常,呼叫一般流程

                                    vReturnVal = GetNormalPassStatus(SN, Process, POrder, Connect, MO, FSSFMOData, FSSFMFData);
                                    break;
                                case 2:
                                    //序號維修中,呼叫維修中流程
                                    // vReturnVal = GetRepairPassStatus(FMO001, FMA001, FMA013, FSSFMOData);
                                    // vReturnVal = GetRepairPassStatus(FMO001, FMA001, FMA013, FSSFMOData);
                                    break;

                                case 3:
                                case 8:
                                    //序號完修,呼叫完修流程
                                    // vReturnVal := GetFixedPassStatus(FMO001, FMA001, FSSFMOData);
                                    //  vReturnVal = GetFixedPassStatus(FMO001, FMA001, FSSFMOData);
                                    break;

                                case 4:

                                    vReturnVal.errMsg = '生產序號已被報廢不可過此站！！';
                                    vReturnVal.result = true;
                                    break;
                               /* case 5:

                                    vReturnVal.errMsg = '生產序號已被組合不可過此站！！';
                                    vReturnVal.result = true;
                                    break;
                                    */
                                case 7:

                                    vReturnVal.errMsg = '生產序號正在待驗中不可過此站';
                                    vReturnVal.result = true;
                                    break;
                                case 10:

                                    vReturnVal.errMsg = '生產序號已被出貨不可過此站！！';
                                    vReturnVal.result = true;
                                    break;
                                case 11:
                                case 12:

                                    vReturnVal.errMsg = '生產序號已在重測中不可過此站！！';
                                    vReturnVal.result = true;
                                    break;
                                default:

                                    vReturnVal.errMsg = '序號狀態異常不可過此站！！';
                                    vReturnVal.result = true;

                            }
                        }
                    }
                    break;
                case 3:
                    vReturnVal.errMsg = '製令暫停中不可過此站！！';
                    vReturnVal.result = true;
                    break;
                case 4:
                    vReturnVal.errMsg = '製令已取消不可過此站！！';
                    vReturnVal.result = true;
                    break;
                case 5:
                    vReturnVal.errMsg = '製令已完工不可過此站！！';
                    vReturnVal.result = true;
                    break;
                case 6:
                    vReturnVal.errMsg = '製令已結案不可過此站！！';
                    vReturnVal.result = true;
                    break;
            }
        } else {
            vReturnVal.errMsg = '工單資料不存在！！';
            vReturnVal.result = true;

        }


    } else { //查不到序號
        vReturnVal.errMsg = '生產序號不存在！！';
        vReturnVal.result = true;

    }
    return vReturnVal;


}
////一般流程
//序號是正常時的檢查流程
//傳入,生產序號,製程代號,製程連結方式,序號相關資料
//{回傳：有無錯誤,錯誤訊息,製令單號,加工順序,製程代號 }

function GetNormalPassStatus(SN, Process, POrder, Connect, MO, FSSFMOData, FSSFMFData) {
    //console.log(SN, Process, POrder, Connect, MO, FSSFMOData, FSSFMFData);
    let vReturnVal = {
        result: false,
        errMsg: ''
    };
    let FMO008 = FSSFMOData[0].MO008;
    let FMO009 = FSSFMOData[0].MO009;
    let SKU = FSSFMOData[0].MO015;
    let nMF002 = '';
    console.log('FSSFMFData[0][8]', FSSFMFData[0][8]);
    //判斷是否允許投入數大於(預計產量+放行量)
    cInputQty = CheckInputQty(SN, Process, Connect, MO);
    if (!cInputQty.result) {
        vReturnVal.errMsg = '製程投入數量不可大於預計產量！！!!';
        vReturnVal.result = true;
    } else {
        let tieWOprocess = GetTieWOprocess(FSSFMOData, MO, SN);

        //綁工單流程是否有異常
        if (tieWOprocess.result) { //異常
            vReturnVal = tieWOprocess;
        } else {
            //基本條件流程是否異常
            let BaseCondprocess = GetBaseCondprocess(MO, POrder, SKU, Connect, FSSFMFData[0].MF002);
            console.log('BaseCondprocess', BaseCondprocess);
            if (BaseCondprocess.result) {
                vReturnVal = BaseCondprocess;
            } else {
                //有目前製程
                if (Process != '') {
                    //目前製令 = 過站製令
                    if (FSSFMOData[0].MO007 == MO) {
                        //呼叫站別順序流程

                        vReturnVal = GetSiteOrderprocess(MO, Process, FMO008, SN, FSSFMFData[0].MG002, SKU);
                    } else {
                        //傳入目前製令,目前製程                  
                        let SSFMFData = ajaxGetData(invokeURL + "SFIS_GetSSFMF", { //回傳 (工單)MF001,(站點)MG003,完成數量(MF008),預計產量(MF008),總放行數量(LA007)
                            MF001: FSSFMOData[0].MO007,
                            MG003: FSSFMOData[0].MO009
                        });

                        if (SSFMFData[0].result == undefined) {
                            nMF002 = SSFMFData[0].MF002;
                            if (nMF002 == FSSFMFData[0].MF002) {

                                let ChangeWOprocess = GetChangeWOprocess(MO, Process, FSSFMFData, FSSFMOData);
                                console.log('ChangeWOprocess', ChangeWOprocess);
                                if (ChangeWOprocess.result) {

                                    vReturnVal = ChangeWOprocess;
                                } else {
                                    //呼叫站別順序流程

                                    vReturnVal = GetSiteOrderprocess(MO, Process, FMO008, SN, FSSFMFData[0].MG002, SKU);
                                }
                            }
                        } else {

                            //2011/07/27 新版 1.7 的判斷, 共用料的判斷, 過站製令料號和目前製令料號的S-BOM使用料號必須完全一樣 , 才算是共用料
                            let IsChildPart = IsChildPartEqual(FSSFMFData[0].MF002, nMF002);

                            if (!IsChildPart.result) { //表示沒有找到不一樣的使用料號,因此算共用料,可走換製令判斷
                                let ChangeWOprocess2 = GetChangeWOprocess(MO, Process, FSSFMFData, FSSFMOData);
                                //換製令流程是否異常
                                if (ChangeWOprocess2.result) {
                                    vReturnVal = ChangeWOprocess2;
                                } else {
                                    //呼叫站別順序流程
                                    vReturnVal = GetSiteOrderprocess(MO, Process, FMO008, SN, FSSFMFData[0].MG002, SKU);
                                }

                            } else {
                                //2011/09/02 新版 1.10 修改成  製令料號展開S-BOM階料號及途程後有序號料號存在其中製程中 的話就不能過站,否則就可以過站
                                //傳入目前製令料號,序號料號, 製令料號  , 找所有在 S-BOM 之中是否還有序號料號存在的製程 (目前工單製程不算在內)                           
                                let childPartExist2 = ajaxGetData(invokeURL + "SFIS_GetChildPartExist2", { //回傳 (工單)MF001,(站點)MG003,完成數量(MF008),預計產量(MF008),總放行數量(LA007)
                                    nMF002: nMF002,
                                    MO015: FSSFMOData[0].MO015,
                                    MF002: FSSFMFData[0].MF002
                                });
                                if (childPartExist2.result == undefined) {

                                } else { //是否無其他 S-BOM 途程有含此序號料號
                                    //傳入 目前製令,目前加工順序,過站加工順序 (用 9999 最大值來找),序號料號
                                    let normalNonSpot = ajaxGetData(invokeURL + "SFIS_GetNormalNonSpot", { //{傳入：製令,目前加工順序,過站加工順序,序號料號 }{回傳：有無筆數、加工順序(MG002),製程(MG003),料號(MG018),被裁版料號(MG019),被組合料號(NM003)}
                                        MO: MO,
                                        POrder: POrder,
                                        MG002: '9999',
                                        SKU: SKU
                                    });
                                    //有下一非抽檢製程需過站
                                    if (normalNonSpot.result == undefined) {
                                        let nextProcess = normalNonSpot[0].MG003;
                                        if (nextProcess == Process) {
                                            //傳入目前製令料號,過站製令料號  , 找所有在 S-BOM 之中是否58 階料號是相同的,表示是同機板
                                            let SamePCBChangeWOprocess = GetSamePCBChangeWOprocess(MO, Process, nMF002, FSSFMFData[0].MF002);
                                            if (!SamePCBChangeWOprocess.result) {
                                                vReturnVal.result = false;
                                            }
                                        } else {

                                            vReturnVal.errMsg = '序號在目前製令:' + FSSFMOData[0].MO007 + ' 還有下一製程:' + nextProcess + ' 尚未過站,不可過站！！';
                                            vReturnVal.result = true;
                                        }
                                    } else {

                                        let SNPassData = ajaxGetData(invokeURL + "SFIS_GetSNPassData", { //{傳入：序號,製令,製程 } {回傳：有無筆數、序號(TA001),SEQ(TA002)}
                                            SN: SN,
                                            MO: MO,
                                            Process: Process
                                        });
                                        if (SNPassData[0].result == undefined) {
                                            ReturnVal.result = true;
                                        }
                                        //呼叫站別順序流程
                                        vReturnVal = GetSiteOrderprocess(MO, Process, FMO008, SN, FSSFMFData[0].MG002, SKU);
                                    }
                                }

                            }


                        }
                    }
                } else {
                    //製令料號等於序號料號
                    if (FSSFMFData[0].MF002 = FSSFMOData[0].MO015) {
                        //呼叫站別順序流程
                        vReturnVal = GetSiteOrderprocess(MO, Process, FMO008, SN, FSSFMFData[0].MG002, SKU);
                    } else {
                        //2011/09/02 新版 1.10 修改成  製令料號展開S-BOM階料號及途程後有序號料號存在其中製程中 的話就不能過站,否則就可以過站
                        let childPartExist = ajaxGetData(invokeURL + "SFIS_GetChildPartExist", { // {傳入：序號料號,製令料號 } {回傳：有無筆數、父階料號(NJ001),序號料號(NJ002),途程代號(MD001),加工順序(MD002),製程代號(MD003),料號(MD004),被裁版料號(MD005),被組合料號(NK003) }
                            MO015: FSSFMOData[0].MO015,
                            MF002: FSSFMFData[0].MF002
                        });
                        if (childPartExist[0].result == undefined) { //是否無其他 S-BOM 途程有含此序號料號
                            vReturnVal.errMsg = '序號還有其他途程尚未過站,不可過站！！';
                            vReturnVal.result = true;
                        } else {
                            //呼叫站別順序流程
                            vReturnVal = GetSiteOrderprocess(MO, Process, FMO008, SN, FSSFMFData[0].MG002, SKU);
                        }
                    }
                }
            }
        }
    }
    return vReturnVal;
}
//基本條件流程
function GetBaseCondprocess(MO, POrder, SKU, Connect, MF002) {
    let vReturnVal = {
        result: false,
        errMsg: ''
    };
    //console.log(MO, POrder, SKU, Connect, MF002);
    //傳入 製令,過站加工順序,序號料號, 找出過站序號料號是否存在過站製程料號且連結方式一致
    let partExist = ajaxGetData(invokeURL + "SFIS_GetPartExist", { //{傳入：製令,加工順序,序號料號 } {回傳：有無筆數、料號(PART),連結方式(LINK)}
        MO: MO,
        POrder: POrder,
        SKU: SKU,
        Connect: Connect
    });
    console.log('partExist', partExist);
    //序號料號存在過站製程料號否
    if (partExist[0].result == undefined) {
        vReturnVal.result = false;
    } else {
        alternativePart = GetAlternativePart(SKU, MF002);
        // console.log('alternativePart', alternativePart);
        if (alternativePart.result) {
            let partExist2 = ajaxGetData(invokeURL + "SFIS_GetPartExist", { //{傳入：製令,加工順序,序號料號 } {回傳：有無筆數、料號(PART),連結方式(LINK)}
                MO: MO,
                POrder: POrder,
                SKU: alternativePart.data[0][alternativePart.FieldStr[0]],
                Connect: Connect
            });

            if (partExist2[0].result == undefined) {
                vReturnVal.result = false;
            } else {
                vReturnVal.errMsg = '序號料號連結方式與過站製程料號連結方式不同,不可過站！！';
                vReturnVal.result = true;
            }
        } else {
            vReturnVal.errMsg = '序號料號不存在過站製程料號中,不可過站！！';
            vReturnVal.result = true;
        }
    }
    return vReturnVal;
}
//同機板換製令流程
function GetSamePCBChangeWOprocess(MO, Process, nMF002, MF002) {
    let vReturnVal = {
        result: false,
        errMsg: ''
    };
    let iEqual = false;

    //傳入目前製令料號,過站製令料號 ,找目前製令料號S-BOM所用58階機板和過站製令料號S-BOM所用58階機板相同否
    let GetSamePCBChangeWOprocess1 = ajaxGetData(invokeURL + "SFIS_GetSamePCBChangeWOprocess", {
        MF002: nMF002
    });
    let GetSamePCBChangeWOprocess2 = ajaxGetData(invokeURL + "SFIS_GetSamePCBChangeWOprocess", {
        MF002: MF002
    });
    if ((GetSamePCBChangeWOprocess1[0].result == undefined) && (GetSamePCBChangeWOprocess2[0].result == undefined)) {
        //先找出目前製令料號中的所有 58 階機板,再依次檢查有沒有存在過站製令料號中的 58階機板
        for (let i = 0; i < GetSamePCBChangeWOprocess1.length; i++) {
            if (!iEqual) {
                for (let j = 0; j < GetSamePCBChangeWOprocess2.length; j++) {

                    if (GetSamePCBChangeWOprocess1[i].NJ002 != GetSamePCBChangeWOprocess2[j].NJ002) {
                        iEqual = true;
                    }
                }
            }
        }

    }
    if (iEqual) { //如果 58 階機板相同
        //目前製令找出製令狀態及製程狀態   傳入 : 目前製令,目前製程
        let SSFMFData = ajaxGetData(invokeURL + "SFIS_GetSSFMF", { //回傳 (工單)MF001,(站點)MG003,完成數量(MF008),預計產量(MF008),總放行數量(LA007)
            MF001: MO,
            MG003: Process
        });
        if (SSFMFData[0].result == undefined) {
            if (SSFMFData[0].MF027 == 'Y') {
                //過站製令同意同機板換入製令否
                if (SSFMFData[0].MF028 == 'Y') {
                    //過站製令同意同機板換入製令否
                    vReturnVal.result = false;
                } else {

                    vReturnVal.errMsg = '過站製令:' + MO + ' 是不允許同機板換入製令的,不可過站！！';
                    vReturnVal.result = true;
                }
            } else {

                vReturnVal.errMsg = '序號目前製令:' + MO + ' 是不允許同機板換出製令的,不可過站！！';
                vReturnVal.result = true;
            }
        }

    } else {

        vReturnVal.errMsg = '序號目前製令:' + MO + ' 和過站製令並沒有相同的機板,不允許同機板換製令,不可過站！！';
        vReturnVal.result = true;
    }
    return vReturnVal;
}
//共用料的判斷, 過站製令料號和目前製令料號的S-BOM使用料號必須完全一樣 , 才算是共用料
function IsChildPartEqual(MF002, nMF002) {
    let vReturnVal = {
        result: false,
        errMsg: ''
    };
    let iEqual = true;
    //比較過站製令料號及目前製令料號的 S-BOM使用料號是否完全一樣

    //{傳入：過站製令料號,目前製令料號 }
    //傳入序號料號, 過站製令料號  , 找過站製令料號在 S-BOM 有存在序號料號
    let childPart1 = ajaxGetData(invokeURL + "SFIS_GetChildPart", { // {傳入：料號 }{回傳：有無筆數、S-BOM 下一階料號(NJ0021,NJ0022)}
        NJ001: MF002
    });
    let childPart2 = ajaxGetData(invokeURL + "SFIS_GetChildPart", { // {傳入：料號 }{回傳：有無筆數、S-BOM 下一階料號(NJ0021,NJ0022)}
        NJ001: nMF002
    });
    if ((childPart1[0].result == undefined) && (childPart2[0].result == undefined)) {
        if (childPart1.length != childPart2.length) {
            for (let i = 0; i < childPart1.length; i++) {
                if (iEqual) {
                    if (childPart1[i].NJ002 != childPart2[i].NJ002) {
                        iEqual = false;
                    }
                }
            }
        } else {
            iEqual = false;
        }

    }
    vReturnVal.result = iEqual;
    return vReturnVal;
}
//呼叫站別順序流程
function GetSiteOrderprocess(MO, Process, FMO008, SN, MG002, SKU) {
    let vReturnVal = {
        result: false,
        errMsg: ''
    };
    console.log(MG002, FMO008);
    //過站製程加工順序 > 目前製程加工順序 否
    if (MG002 > FMO008) {
        // if (MG002 < FMO008) { //?
        //傳入 製令,目前加工順序,過站加工順序,序號料號
        //檢查是否為替代料
        let normalNonSpot = ajaxGetData(invokeURL + "SFIS_GetNormalNonSpot", { //{傳入：製令,目前加工順序,過站加工順序,序號料號 }{回傳：有無筆數、加工順序(MG002),製程(MG003),料號(MG018),被裁版料號(MG019),被組合料號(NM003)}
            MO: MO,
            POrder: FMO008,
            MG002: MG002,
            SKU: SKU
        });

        //過站製程及目前製程之間是否存在一般過站及非抽檢行為的製程站  且序號料號存在製程料號中
        console.log('normalNonSpot', normalNonSpot);
        if (normalNonSpot[0].result == undefined) {

            vReturnVal.errMsg = '序號還有下一製程:' + normalNonSpot[0].MG003 + ' 尚未過站,不可過站！！';
            vReturnVal.result = true;
        } else {
            vReturnVal.result = false;
        }
    } else {
        //呼叫重測流程
        vReturnVal = GetReTestprocess(SN, MO, Process);
    }
    return vReturnVal;
}
//換製令流程
function GetChangeWOprocess(MO, Process, FSSFMFData, FSSFMOData) {
    let vReturnVal = {
        result: false,
        errMsg: ''
    };
    //目前製令找出製令狀態及製程狀態   傳入 : 目前製令,目前製程
    let SSFMFData = ajaxGetData(invokeURL + "SFIS_GetSSFMF", { //回傳 (工單)MF001,(站點)MG003,完成數量(MF008),預計產量(MF008),總放行數量(LA007)
        MF001: MO,
        MG003: Process
    });
    //目前製令同意換出製令否
    if (SSFMFData[0].result == undefined) {
        if (SSFMFData[0].MF022 == 'Y') {
            //過站製令同意換入製令否
            if (FSSFMFData[0].MF023 == 'Y') {
                //途程及版本是否相同
                if ((FSSFMFData[0].MF003 == SSFMFData[0].MF003) && (FSSFMFData[0].MF024 == SSFMFData[0].MF024)) {
                    vReturnVal.result = false;
                } else {
                    vReturnVal.errMsg = '目前製令及過站製令途程及版本不相同,不允許換製令,不可過站！！';
                    vReturnVal.result = true;
                }

            } else {
                vReturnVal.errMsg = '過站製令:' + MO + ' 是不允許換入製令的,不可過站！！';
                vReturnVal.result = true;
            }
        }
    } else {
        vReturnVal.errMsg = '序號目前製令:' + FSSFMOData[0].MO007 + ' 是不允許換出製令的,不可過站！！';
        vReturnVal.result = true;
    }
    return vReturnVal;
}
//重測流程
function GetReTestprocess(SN, MO, Process) {
    let vReturnVal = {
        result: false,
        errMsg: ''
    };
    //找出序號在此製令及製程有測試資料否
    let SNPassData = ajaxGetData(invokeURL + "SFIS_GetSNPassData", { //{傳入：序號,製令,製程 } {回傳：有無筆數、序號(TA001),SEQ(TA002)}
        SN: SN,
        MO: MO,
        Process: Process
    });
    //存在過站記錄否
    if (SNPassData[0].result == undefined) {
        vReturnVal.errMsg = '序號已過此站,不可重複過站 !! (不開放重測功能) ！！';
        vReturnVal.result = true;
    } else {
        vReturnVal.errMsg = '序號在此製程沒有過站記錄表示無法重測,不可過站！！';
        vReturnVal.result = true;
    }
    return vReturnVal;
}

function GetAlternativePart(Part, ProductPart) {
    let vReturnVal = {
        result: true,
        FieldStr: [],
        data: [],
        errMsg: ''
    };
    //檢查是否為替代料
    let partExist1 = ajaxGetData(invokeURL + "SFIS_GetAlternativePart1", { //{傳入：替代料號,過站製令料號}{回傳：過站料號}
        MO015: Part,
        MF002: ProductPart
    });
    console.log(partExist1);
    if (partExist1[0].result == undefined) {
        let partExist2 = ajaxGetData(invokeURL + "SFIS_GetAlternativePart2", { //{傳入：替代料號,過站製令料號}{回傳：過站料號}
            AF002: partExist1[0].LOOKUP_DESC,
            AF003: Part
        });
        if (partExist2[0].result == undefined) {
            vReturnVal.result = true;
            vReturnVal.data = partExist2;
            vReturnVal.FieldStr = ['AF002'];
        } else {
            vReturnVal.data = partExist1;
            vReturnVal.FieldStr = ['LOOKUP_CODE', 'LOOKUP_DESC'];
        }
    } else {
        vReturnVal.result = false;
    }

    return vReturnVal;
}
//檢查是否允許投入數大於(預計產量+放行量)
function CheckInputQty(SN, Process, Connect, MO) {
    let vReturnVal = {
        result: true,
        errMsg: ''
    };
    if (Connect == '1') { //只有序號為一般時才檢查
        let CheckInputQty = ajaxGetData(invokeURL + "SFIS_CheckInputQty1", {
            MO: MO,
            Process: Process

        });
        if (CheckInputQty[0].result == undefined) {
            if (CheckInputQty[0].MF026 != 'Y' && (parseInt(CheckInputQty[0].MG007) >= (parseInt(CheckInputQty[0].MF008) + parseInt(CheckInputQty[0].LA007)))) {

                let CheckSN = ajaxGetData(invokeURL + "SFIS_CheckInputSN", {
                    MO: MO,
                    Process: Process,
                    SN: SN

                });
                if (CheckInputQty[0].result != undefined) { //找不到此序號過站記錄,表示為新投入序號
                    vReturnVal.errMsg = '投入數量不可大於預計產量!!';
                    vReturnVal.result = false;
                }
            } else {
                   vReturnVal.errMsg = '投入數量不可大於預計產量!!';
                   vReturnVal.result = false;
            }

        }
        else{
             vReturnVal.errMsg = 'CheckInputQty API 找不到資料!!';
             vReturnVal.result = false;
        }
    }
    return vReturnVal;
} //綁製令流程
function GetTieWOprocess(FSSFMOData, MO, SN) {
    let vReturnVal = {
        result: false,
        errMsg: ''
    };
    //序號綁製令否
    if (FSSFMOData[0].MO016 != '') {
        //綁製令與過站製令相同或過站製令有值
        if ((FSSFMOData[0].MO016 == MO) || (FSSFMOData[0].MO007 != '')) {
            vReturnVal.result = false;
        } else {
            //找出序號所綁製令是否有任何過站記錄
            let checkWOHistory = ajaxGetData(invokeURL + "SFIS_GetWOHistory", {
                MO: MO,
                SN: SN

            });
            if (CheckInputQty[0].result == undefined) {
                vReturnVal.result = false;
            } else {
                vReturnVal.result = true;
                vReturnVal.errMsg = '序號有綁製令:' + FSSFMOData[0].MO016 + ',與過站製令不同,不可過站！！';
            }

        }
    } else {
        vReturnVal.result = false;
    }
    return vReturnVal;
}

function GetRepairPassStatus(FMO001, FMA001, FMA013, FSSFMOData) {

}

function GetFixedPassStatus(FMO001, FMA001, FSSFMOData) {

}
//重工流程
function GetReworkprocess(SN, Process, POrder, Connect, MO, FSSFMOData, FSSFMFData) {
    let vReturnVal = {
        result: false,
        errMsg: ''
    };
    //基本條件流程是否異常
    let BaseCondprocess = GetBaseCondprocess(MO, POrder, SKU, Connect, FSSFMFData[0].MF002);
    if (BaseCondprocess.result) {
        vReturnVal = BaseCondprocess;
    } else {
        if (FSSFMOData[0].MO007 == MO) { //目前製令 = 過站製令

            switch (parseInt(FSSFMOData[0].MO011)) {
                case 1:
                case 6:
                case 9:
                
               
                    //序號正常,呼叫一般流程

                    vReturnVal = GetNormalPassStatus(SN, Process, POrder, Connect, MO, FSSFMOData, FSSFMFData);
                    break;
                case 2:
                    //序號維修中,呼叫維修中流程
                    // vReturnVal = GetRepairPassStatus(FMO001, FMA001, FMA013, FSSFMOData);
                    // vReturnVal = GetRepairPassStatus(FMO001, FMA001, FMA013, FSSFMOData);
                    break;

                case 3:
                case 8:
                    //序號完修,呼叫完修流程
                    // vReturnVal := GetFixedPassStatus(FMO001, FMA001, FSSFMOData);
                    //  vReturnVal = GetFixedPassStatus(FMO001, FMA001, FSSFMOData);
                    break;

                case 4:

                    vReturnVal.errMsg = '生產序號已被報廢不可過此站！！';
                    vReturnVal.result = false;
                    break;
                
                case 5:

                    vReturnVal.errMsg = '生產序號已被組合不可過此站！！';
                    vReturnVal.result = false;
                    break;
                    
                case 7:

                    vReturnVal.errMsg = '生產序號正在待驗中不可過此站';
                    vReturnVal.result = false;
                    break;
                case 10:

                    vReturnVal.errMsg = '生產序號已被出貨不可過此站！！';
                    vReturnVal.result = false;
                    break;
                case 11:
                case 12:

                    vReturnVal.errMsg = '生產序號已在重測中不可過此站！！';
                    vReturnVal.result = false;
                    break;
                default:

                    vReturnVal.errMsg = '序號狀態異常不可過此站！！';
                    vReturnVal.result = false;

            }


        } else {
            //清空目前加工順序及目前製程
            //FMO008 := '';
            //FMO009 := '';
            vReturnVal = GetSiteOrderprocess(MO, Process, FMO008, SN, FSSFMFData[0].MG002, SKU);
        }
    }
    return vReturnVal;
}



function checkReworkProcess(MO, SN) {
    let vReturnVal = {
        errorCode: 0, //0-pass,1-複製錯誤,2-查不到
        result: false,
        errMsg: ''
    };
    let ReworkProcess1 = ajaxGetData(invokeURL + "SFIS_checkReworkProcess1", {
        MF001: MO
    });
    if (ReworkProcess1[0].result == undefined) {
        if (ReworkProcess1[0].MF037 == 'NA') {
            vReturnVal.result = true;
        } else {
            let ReworkProcess2 = ajaxGetData(invokeURL + "SFIS_checkReworkProcess1", {
                MO: MO,
                SN: SN
            });
            if (ReworkProcess2[0].result == undefined) {
                vReturnVal.result = true;
            } else {
                vReturnVal.result = false;
            }
        }
    } else {}
    return vReturnVal;

}
//恢復序號流程
function GetRestoreSNprocess(SN) {
    let vReturnVal = {
        errorCode: 0, //0-pass,1-複製錯誤,2-查不到
        result: true,
        errMsg: ''
    };
    let FSSFMOData = ajaxGetData(invokeURL + "SFIS_DB3_SSFMO_SN_SELECT", { //回傳 (SN)MO001
        MO001: SN
    });
    if (FSSFMOData[0].result == undefined) {
        let recoverSSFMO = ajaxGetData(invokeURL + "SFIS_recoverSSFMO", { //Copy SSFMO 恢復生產序號
            MO001: SN
        });
        if (recoverSSFMO[0].result == 'ok') {
            let recoverSSFTA = ajaxGetData(invokeURL + "SFIS_recoverSSFTA", { //Copy SSFTA 回復最後一筆過站明細
                TA001: SN
            });
            if (recoverSSFTA[0].result == 'ok') {} else {
                vReturnVal.errMsg = '複製SSFTA資料錯誤！！';
                vReturnVal.result = false;
                vReturnVal.errorCode = 1;
            }
        } else {
            vReturnVal.errMsg = '恢復生產序號發生錯誤！！';
            vReturnVal.result = false;
            vReturnVal.errorCode = 1;
        }

    } else {
        vReturnVal.errMsg = '生產序號不存在！！';
        vReturnVal.result = false;
        vReturnVal.errorCode = 2;
    }
    return vReturnVal;
}
//外部序號流程
function GetExternalSNprocess(SN, MO, POrder, LINK) {
    let vReturnVal = {
        result: true,
        errorCode: 0, //0-pass,1-複製錯誤,2-查不到
        errMsg: ''
    };
    //{傳入：製令,加工順序,連結方式 }
    //{回傳：料號(PART),序號長度(MB078)}
    let ExternalSN = ajaxGetData(invokeURL + "SFIS_ExternalSNprocess_SELECT", { //找出過站製程料號中相同的連結方式中有沒有料號是屬於外部序號
        MO: MO, //製令
        POrder: POrder, //加工順序
        LINK: LINK //連結方式
    });
    console.log('ExternalSN', ExternalSN);
    if (ExternalSN[0].result == undefined) {
        /*if (parseInt(ExternalSN[0].MB078) == SN.length) { //先判斷長度是否符合

            let ExternalSNCV = ajaxGetData(invokeURL + "SFIS_ExternalSNCharacteristicValue_SELECT ", { //找出此料號的序號特徵值
                AC001: ExternalSN[0].PART
            });
            console.log('ExternalSNCV',ExternalSNCV);
            if (ExternalSNCV[0].result == undefined) {
                let fFindPart = true;
                $.each(ExternalSNCV, function (i, item) { //根據特徵值及啟始位置判斷是否符合     
                    let sValue = item.AC002;
                    let iStart = parseInt(item.AC003) - 1;
                    if (fFindPart) {
                        if (SN.substr(iStart, sValue.length) != sValue) {
                            fFindPart = false;
                        }
                    }


                });
                if (fFindPart) { //如果此料號的所有特徵值都符合,則新增一筆資料到 SSFMO , 並且重新找出序號相關資料
                    let ExternalSNIn = ajaxGetData(invokeURL + "SFIS_ExternalSN_SSFMO_INSERT ", { //找出此料號的序號特徵值
                        MO001: SN,
                        MO015: ExternalSN.PART
                    });
                    if (ExternalSNIn[0].result == 'ok') {
                        vReturnVal.errorCode = 0;
                        console.log('外部序號新增完成');
                    } else {
                        vReturnVal.errMsg = '新增生產序號發生錯誤！！';
                        vReturnVal.result = false;
                        vReturnVal.errorCode = 1;
                    }
                }
            } else {
                vReturnVal.errMsg = '生產序號不存在！！';
                vReturnVal.result = false;
                vReturnVal.errorCode = 2;
            }
        }*/
        if (parseInt(ExternalSN[0].MB078) == SN.length) { //先判斷長度是否符合

            let ExternalSNIn = ajaxGetData(invokeURL + "SFIS_ExternalSN_SSFMO_INSERT ", { //找出此料號的序號特徵值
                MO001: SN,
                MO015: ExternalSN.PART
            });
            if (ExternalSNIn[0].result == 'ok') {
                vReturnVal.errorCode = 0;
                console.log('外部序號新增完成');
            } else {
                vReturnVal.errMsg = '新增生產序號發生錯誤！！';
                vReturnVal.result = false;
                vReturnVal.errorCode = 1;
            }
        } else {
            vReturnVal.errMsg = '生產序號不存在！！';
            vReturnVal.result = false;
            vReturnVal.errorCode = 2;
        }

    } else {
        vReturnVal.errMsg = '生產序號不存在！！';
        vReturnVal.result = false;
        vReturnVal.errorCode = 2;
    }
    return vReturnVal;

}
//檢查工單數量是否超出
function FCheckExceed(MO, Process) {
    let vReturnVal = {
        result: false, //不超過
        errMsg: ''
    };
    let result = GetAllowPassStatus(MO, Process);
    if (result.result) { // 判斷是否有錯誤
        //判斷是否要增加放行數
        if (!FCheckAllowPass(MO, Process)) { //不放行
            vReturnVal.errMsg = result.errMsg;
            vReturnVal.result = true;
        }

    }
    return vReturnVal;
}
//跳出視窗要求增加放行數
function FCheckAllowPass(MO, Process) {
    let result = false;
    return result;
}
//傳入製令,製程 檢查 批量 + 總放行數量 是否 > 完成數
function GetAllowPassStatus(MO, Process) {
    let vReturnVal = {
        result: false, //不超過
        errMsg: '',
        MF008: '', //完成數量
        MG008: '', //預計產量
        LA007: '' //總放行數量
    };
    let AllowPassStatu = ajaxGetData(invokeURL + "SFIS_GetAllowPassStatu", { //回傳 (工單)MF001,(站點)MG003,完成數量(MF008),預計產量(MF008),總放行數量(LA007)
        MF001: MO,
        MG003: Process
    });
    if (AllowPassStatu[0]['result'] == undefined) { //查到資料
        //檢查 完成數量 + 總放行數量 是否 大於 預計產量
        if ((AllowPassStatu[0].MF008 + AllowPassStatu[0].LA007) > AllowPassStatu[0].MG008) {
            vReturnVal.MF008 = AllowPassStatu[0].MF008;
            vReturnVal.MG008 = AllowPassStatu[0].MG008;
            vReturnVal.LA007 = AllowPassStatu[0].LA007;
        } else {
            vReturnVal.errMsg = '完成數已經大於或等於批量+總放行數量,不可再過站！！';
            vReturnVal.result = true;

        }


    } else {
        vReturnVal.errMsg = '找不到此製令製程的批量及完成數！！';
        vReturnVal.result = true;
    }
    return vReturnVal;

}