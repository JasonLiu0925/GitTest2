{ 
ver_20230921
BUG FIX：REELID ＆ BOX 尾數箱異常
1.數量檢查改到PROC一併處理 (fmcSSFI7046)
2.新增參數sSN 檢核時需排除自己 (fmcSSFI7046)
3.增加回傳刷入數量
4.新增功能2
5.新增fun3
}

unit fmcSSFI704;

interface

uses
  Windows, Messages, SysUtils, Classes, Graphics, Controls, Forms, Dialogs,
  AFM2BaseFM6, ImgList, AuditFlowClient, SimpRep, Menus, Db, DBClient,
  InfoClient, Grids, AdvDBGrids, InfoCtrls, ExtCtrls, StdCtrls, Buttons,
  InfoBut, ButtonLP2, ComCtrls, Mask, RefVals, BatchClient, AFM2BaseFM22,
  SUIImagePanel, DBGrids, DBCtrls, TeEngine, Series, TeeProcs, Chart,
  DBChart, SUIButton, TeeFunci, MMsystem, OoMisc, AdPort, LabelManager2_TLB,
  OleServer, clipbrd, FileCtrl, Spin, IdBaseComponent, IdComponent,
  IdStack, WinSock;

function Format(const Format: string; const Args: array of const): string;

procedure FmtStr(var Result: string; const Format: string;
  const Args: array of const);
const
   // add for debug
  ISDEBUG = False;
type
  TfrmcSSFI704 = class(TAFM2BaseForm22)
    rvMaster: TRefValComponent;
    rvDetail: TRefValComponent;
    BatchClient: TBatchClient;
    Splitter1: TSplitter;
    cdsQuery: TInfoClientDataSet;
    cdsQuery2: TInfoClientDataSet;
    InfoLabel1: TInfoLabel;
    idtMH0021: TEdit;
    InfoLabel2: TInfoLabel;
    idtMH0022: TEdit;
    btnInsert: TBitBtn;
    InfoLabel3: TInfoLabel;
    idtMH0023: TEdit;
    btnInsert2: TBitBtn;
    idtNum: TEdit;
    InfoLabel4: TInfoLabel;
    DataSource1: TDataSource;
    idtCount: TEdit;
    InfoLabel18: TInfoLabel;
    CBMH003: TComboBox;
    InfoLabel19: TInfoLabel;
    cdsViewCOMPANY: TStringField;
    cdsViewCREATOR: TStringField;
    cdsViewUSR_GROUP: TStringField;
    cdsViewCREATE_DATE: TStringField;
    cdsViewMODIFIER: TStringField;
    cdsViewMODI_DATE: TStringField;
    cdsViewFLAG: TFloatField;
    cdsViewTA001: TStringField;
    cdsViewTA002: TStringField;
    cdsViewTA003: TStringField;
    cdsViewTA004: TStringField;
    cdsViewTA005: TStringField;
    cdsViewTA006: TStringField;
    cdsViewTA007: TStringField;
    cdsViewTA008: TStringField;
    cdsViewTA009: TStringField;
    cdsViewTA010: TStringField;
    cdsViewTA011: TStringField;
    cdsViewTA012: TStringField;
    cdsViewTA013: TStringField;
    cdsViewTA014: TStringField;
    cdsViewTA015: TStringField;
    cdsViewTA016: TFloatField;
    cdsViewTA018: TStringField;
    cdsViewTA019: TFloatField;
    cdsViewTA020: TStringField;
    cdsViewTA021: TStringField;
    cdsViewTA022: TStringField;
    cdsViewTA01X: TStringField;
    cdsViewTA02X: TStringField;
    cdsMasterCOMPANY: TStringField;
    cdsMasterCREATOR: TStringField;
    cdsMasterUSR_GROUP: TStringField;
    cdsMasterCREATE_DATE: TStringField;
    cdsMasterMODIFIER: TStringField;
    cdsMasterMODI_DATE: TStringField;
    cdsMasterFLAG: TFloatField;
    cdsMasterTA001: TStringField;
    cdsMasterTA002: TStringField;
    cdsMasterTA003: TStringField;
    cdsMasterTA004: TStringField;
    cdsMasterTA005: TStringField;
    cdsMasterTA006: TStringField;
    cdsMasterTA007: TStringField;
    cdsMasterTA008: TStringField;
    cdsMasterTA009: TStringField;
    cdsMasterTA010: TStringField;
    cdsMasterTA011: TStringField;
    cdsMasterTA012: TStringField;
    cdsMasterTA013: TStringField;
    cdsMasterTA014: TStringField;
    cdsMasterTA015: TStringField;
    cdsMasterTA016: TFloatField;
    cdsMasterTA018: TStringField;
    cdsMasterTA019: TFloatField;
    cdsMasterTA020: TStringField;
    cdsMasterTA021: TStringField;
    cdsMasterTA022: TStringField;
    cdsMasterTA01X: TStringField;
    cdsMasterTA02X: TStringField;
    cdsMasterqrySSFTD: TDataSetField;
    cdsMasterqrySSFTC: TDataSetField;
    cdsMasterqrySSFTB: TDataSetField;
    cdsMasterTA007C: TStringField;
    cdsMasterTA010C: TStringField;
    cdsMasterTA011C: TStringField;
    cdsMasterTA012C: TStringField;
    cdsMasterTA013C: TStringField;
    cdsMasterTA008C: TStringField;
    cdsMasterTA022C: TStringField;
    cdsDetailCOMPANY: TStringField;
    cdsDetailCREATOR: TStringField;
    cdsDetailUSR_GROUP: TStringField;
    cdsDetailCREATE_DATE: TStringField;
    cdsDetailMODIFIER: TStringField;
    cdsDetailMODI_DATE: TStringField;
    cdsDetailFLAG: TFloatField;
    cdsDetailTB001: TStringField;
    cdsDetailTB002: TStringField;
    cdsDetailTB003: TStringField;
    cdsDetailTB004: TStringField;
    cdsDetailTA01X: TStringField;
    cdsDetailTA02X: TStringField;
    dbgdDetail1: TInfoDBGrid;
    cdsDetail1: TInfoClientDataSet;
    rvDetail1: TRefValComponent;
    dsDetail1: TDataSource;
    cdsDetail1COMPANY: TStringField;
    cdsDetail1CREATOR: TStringField;
    cdsDetail1USR_GROUP: TStringField;
    cdsDetail1CREATE_DATE: TStringField;
    cdsDetail1MODIFIER: TStringField;
    cdsDetail1MODI_DATE: TStringField;
    cdsDetail1FLAG: TFloatField;
    cdsDetail1TC001: TStringField;
    cdsDetail1TC002: TStringField;
    cdsDetail1TC003: TStringField;
    cdsDetail1TC004: TStringField;
    cdsDetail1TA01X: TStringField;
    cdsDetail1TA02X: TStringField;
    cdsDetail2: TInfoClientDataSet;
    rvDetai2: TRefValComponent;
    dsDetail2: TDataSource;
    cdsDetail2COMPANY: TStringField;
    cdsDetail2CREATOR: TStringField;
    cdsDetail2USR_GROUP: TStringField;
    cdsDetail2CREATE_DATE: TStringField;
    cdsDetail2MODIFIER: TStringField;
    cdsDetail2MODI_DATE: TStringField;
    cdsDetail2FLAG: TFloatField;
    cdsDetail2TD001: TStringField;
    cdsDetail2TD002: TStringField;
    cdsDetail2TD003: TMemoField;
    cdsDetail2TD004: TStringField;
    cdsDetail2TA01X: TStringField;
    cdsDetail2TA02X: TStringField;
    OpenDialog: TOpenDialog;
    AcdsCondition: TInfoClientDataSet;
    AdsCondition: TDataSource;
    ArvConditon: TRefValComponent;
    AcdsConditionTA007: TStringField;
    AcdsConditionTA022: TStringField;
    BcdsCondition: TInfoClientDataSet;
    BdsCondition: TDataSource;
    BrvConditon: TRefValComponent;
    BcdsConditionTA01X: TStringField;
    DcdsCondition: TInfoClientDataSet;
    DdsCondition: TDataSource;
    DrvConditon: TRefValComponent;
    cdsCounter: TInfoClientDataSet;
    dsCounter: TDataSource;
    cdsCounterPASS: TStringField;
    cdsCounterPASSNUM: TIntegerField;
    CcdsCondition: TInfoClientDataSet;
    CdsCondition: TDataSource;
    CrvConditon: TRefValComponent;
    CcdsConditionTA01X: TStringField;
    EcdsCondition: TInfoClientDataSet;
    EdsCondition: TDataSource;
    ErvConditon: TRefValComponent;
    FcdsCondition: TInfoClientDataSet;
    FdsCondition: TDataSource;
    FrvConditon: TRefValComponent;
    GcdsCondition: TInfoClientDataSet;
    GdsCondition: TDataSource;
    GrvConditon: TRefValComponent;
    HcdsCondition: TInfoClientDataSet;
    HdsCondition: TDataSource;
    HrvConditon: TRefValComponent;
    IcdsCondition: TInfoClientDataSet;
    IdsCondition: TDataSource;
    IrvConditon: TRefValComponent;
    JcdsCondition: TInfoClientDataSet;
    JdsCondition: TDataSource;
    JrvConditon: TRefValComponent;
    EcdsMAC: TInfoClientDataSet;
    EdsMAC: TDataSource;
    ErvMAC: TRefValComponent;
    EcdsMACTC000: TStringField;
    EcdsMACTC003: TStringField;
    EcdsMACTC000C: TStringField;
    DcdsCombine: TInfoClientDataSet;
    DdsCombine: TDataSource;
    DrvCombine: TRefValComponent;
    GcdsMAC: TInfoClientDataSet;
    GdsMAC: TDataSource;
    GrvMAC: TRefValComponent;
    GcdsMACTC000: TStringField;
    GcdsMACTC003: TStringField;
    GcdsMACTC000C: TStringField;
    cdsViewTA025: TStringField;
    cdsMasterTA025: TStringField;
    AcdsConditionTA011: TStringField;
    BcdsConditionTA015: TStringField;
    BcdsConditionTA012: TStringField;
    BcdsConditionTA013: TStringField;
    BcdsConditionTA014: TStringField;
    cdsMasterTA005C1: TStringField;
    cdsMasterTA005C2: TStringField;
    cdsMasterTA007C1: TStringField;
    cdsMasterTA007C2: TStringField;
    cdsViewTA023: TStringField;
    cdsMasterTA023: TStringField;
    cdsMasterTA023C: TStringField;
    dsBox1: TDataSource;
    cdsBox1: TInfoClientDataSet;
    cdsBox2: TInfoClientDataSet;
    dsBox2: TDataSource;
    cdsViewTA017: TFloatField;
    cdsMasterTA017: TFloatField;
    cdsMasterTA026: TStringField;
    cdsMasterTA027: TFloatField;
    cdsBox1COMPANY: TStringField;
    cdsBox1CREATOR: TStringField;
    cdsBox1USR_GROUP: TStringField;
    cdsBox1CREATE_DATE: TStringField;
    cdsBox1MODIFIER: TStringField;
    cdsBox1MODI_DATE: TStringField;
    cdsBox1FLAG: TFloatField;
    cdsBox1MQ001: TStringField;
    cdsBox1MQ002: TStringField;
    cdsBox1MQ003: TFloatField;
    cdsBox1MQ004: TFloatField;
    cdsBox1MF01X: TStringField;
    cdsBox2COMPANY: TStringField;
    cdsBox2CREATOR: TStringField;
    cdsBox2USR_GROUP: TStringField;
    cdsBox2CREATE_DATE: TStringField;
    cdsBox2MODIFIER: TStringField;
    cdsBox2MODI_DATE: TStringField;
    cdsBox2FLAG: TFloatField;
    cdsBox2MR001: TStringField;
    cdsBox2MR002: TStringField;
    cdsBox2MR003: TStringField;
    cdsBox2MR004: TStringField;
    cdsBox2MF01X: TStringField;
    cdsBox2MQ002: TStringField;
    CcdsConditionTA027: TFloatField;
    DcdsConditionTA01X: TStringField;
    DcdsConditionTB003: TStringField;
    DcdsConditionTA000: TStringField;
    EcdsCombine: TInfoClientDataSet;
    EdsCombine: TDataSource;
    ErvCombine: TRefValComponent;
    EcdsConditionTA01X: TStringField;
    EcdsConditionTB003: TStringField;
    EcdsConditionTA000: TStringField;
    EcdsConditionTA027: TFloatField;
    EcdsCombineTB003: TStringField;
    APort: TApdComPort;
    Timer: TTimer;
    cdsMasterTA028: TStringField;
    cdsMasterTA030: TStringField;
    GcdsConditionTA01X1: TStringField;
    GcdsConditionTA01X2: TStringField;
    FcdsConditionTA01X1: TStringField;
    FcdsConditionTA01X2: TStringField;
    cdsBatch: TInfoClientDataSet;
    FcdsConditionTA01X: TStringField;
    GcdsConditionTA01X: TStringField;
    HcdsConditionTA01X: TStringField;
    AcdsConditionTA005: TStringField;
    cdsMasterMF013: TStringField;
    Document: TDocument;
    CodeSoft: TApplication;
    cdsBatch2: TInfoClientDataSet;
    qryCheck: TInfoClientDataSet;
    Label2: TLabel;
    Label5: TLabel;
    cdsMasterTA031: TStringField;
    InPrintData: TInfoClientDataSet;
    dsInPrintData: TDataSource;
    OutPrintData: TInfoClientDataSet;
    dsOut2PrintData: TDataSource;
    AcdsConditionTA008: TStringField;
    IcdsConditionTA01X: TStringField;
    IcdsCombine: TInfoClientDataSet;
    IdsCombine: TDataSource;
    IrvCombine: TRefValComponent;
    IcdsConditionTB003: TStringField;
    IcdsConditionTA000: TStringField;
    cdsMasterTA037: TFloatField;
    cdsMasterTA038: TFloatField;
    CcdsConditionTA037: TFloatField;
    CcdsConditionTA038: TFloatField;
    EcdsConditionTA037: TFloatField;
    EcdsConditionTA038: TFloatField;
    JcdsConditionTA01X: TStringField;
    KcdsCombine: TInfoClientDataSet;
    KdsCombine: TDataSource;
    KrvCombine: TRefValComponent;
    KcdsCondition: TInfoClientDataSet;
    KdsCondition: TDataSource;
    KrvConditon: TRefValComponent;
    KcdsConditionTA01X: TStringField;
    KcdsConditionTB003: TStringField;
    KcdsConditionTA000: TStringField;
    JcdsConditionTA027: TFloatField;
    JcdsConditionTA037: TFloatField;
    JcdsConditionTA038: TFloatField;
    KcdsConditionTA027: TFloatField;
    KcdsConditionTA037: TFloatField;
    KcdsConditionTA038: TFloatField;
    suiImagePanel1: TsuiImagePanel;
    suiImagePanel2: TsuiImagePanel;
    PnlClear: TsuiImagePanel;
    DBChart1: TDBChart;
    Series1: TBarSeries;
    TeeFunction1: TAverageTeeFunction;
    suiImagePanel6: TsuiImagePanel;
    InfoLabel33: TInfoLabel;
    InfoLabel34: TInfoLabel;
    InfoLabel55: TInfoLabel;
    InfoLabel41: TInfoLabel;
    InfoLabel57: TInfoLabel;
    PidtTA003: TInfoDBEdit;
    PidtTA004: TInfoDBEdit;
    PidtTA005: TInfoDBEdit;
    BWeightStart: TsuiButton;
    BWeightStop: TsuiButton;
    PidtMF013: TInfoDBEdit;
    suiButton2: TsuiButton;
    suiImagePanel12: TsuiImagePanel;
    PageControl3: TPageControl;
    Tab0: TTabSheet;
    suiImagePanel4: TsuiImagePanel;
    APnlbutton: TsuiImagePanel;
    AbbConfirm: TsuiButton;
    APnlTA022: TsuiImagePanel;
    InfoLabel37: TInfoLabel;
    AidtTA022: TInfoDBEdit;
    APnlTA007: TsuiImagePanel;
    InfoLabel36: TInfoLabel;
    AidtTA007: TInfoDBEdit;
    APnlTA005: TsuiImagePanel;
    InfoLabel93: TInfoLabel;
    AidtTA005: TInfoDBEdit;
    APnlTA008: TsuiImagePanel;
    InfoLabel59: TInfoLabel;
    AidtTA008: TInfoDBEdit;
    Tab1: TTabSheet;
    suiImagePanel5: TsuiImagePanel;
    BPnlbutton: TsuiImagePanel;
    BbbConfirm: TsuiButton;
    BPnlTA01X: TsuiImagePanel;
    InfoLabel35: TInfoLabel;
    BidtTA01X: TInfoDBEdit;
    TabSheet10: TTabSheet;
    suiImagePanel7: TsuiImagePanel;
    CPnlbutton: TsuiImagePanel;
    CbbConfirm: TsuiButton;
    CPnlTA01X: TsuiImagePanel;
    InfoLabel42: TInfoLabel;
    CidtTA01X: TInfoDBEdit;
    CPnlTA027: TsuiImagePanel;
    InfoLabel44: TInfoLabel;
    InfoLabel43: TInfoLabel;
    CidtTA027: TInfoDBEdit;
    TabSheet11: TTabSheet;
    suiImagePanel9: TsuiImagePanel;
    DPnlbutton: TsuiImagePanel;
    DbbConfirm: TsuiButton;
    DPnlTA01X: TsuiImagePanel;
    InfoLabel47: TInfoLabel;
    DidtTA01X: TInfoDBEdit;
    DPnlTB003: TsuiImagePanel;
    InfoLabel46: TInfoLabel;
    DidtTB003: TInfoDBEdit;
    DPnlTA000: TsuiImagePanel;
    InfoLabel64: TInfoLabel;
    DidtTA000: TInfoDBEdit;
    TabSheet12: TTabSheet;
    suiImagePanel10: TsuiImagePanel;
    EPnlbutton: TsuiImagePanel;
    EbbConfirm: TsuiButton;
    EPnlTA01X: TsuiImagePanel;
    InfoLabel40: TInfoLabel;
    EidtTA01X: TInfoDBEdit;
    EPnlTB003: TsuiImagePanel;
    InfoLabel45: TInfoLabel;
    EidtTB003: TInfoDBEdit;
    EPnlTA000: TsuiImagePanel;
    InfoLabel48: TInfoLabel;
    EidtTA000: TInfoDBEdit;
    EdbgdTB003: TInfoDBGrid;
    EPnlTA027: TsuiImagePanel;
    InfoLabel49: TInfoLabel;
    InfoLabel50: TInfoLabel;
    EidtTA027: TInfoDBEdit;
    TabSheet14: TTabSheet;
    suiImagePanel13: TsuiImagePanel;
    FPnlbutton: TsuiImagePanel;
    FbbConfirm: TsuiButton;
    FPnlTA01X2: TsuiImagePanel;
    InfoLabel51: TInfoLabel;
    FidtTA01X2: TInfoDBEdit;
    FPnlTA01X1: TsuiImagePanel;
    InfoLabel52: TInfoLabel;
    FidtTA01X1: TInfoDBEdit;
    FidtTA026: TEdit;
    FidtTA01X: TInfoDBEdit;
    TabSheet15: TTabSheet;
    suiImagePanel17: TsuiImagePanel;
    GPnlbutton: TsuiImagePanel;
    GbbConfirm: TsuiButton;
    GPnlTA01X2: TsuiImagePanel;
    InfoLabel53: TInfoLabel;
    GidtTA01X2: TInfoDBEdit;
    GPnlTA01X1: TsuiImagePanel;
    InfoLabel54: TInfoLabel;
    GidtTA01X1: TInfoDBEdit;
    GidtTA026: TEdit;
    GidtTA01X: TInfoDBEdit;
    TabSheet16: TTabSheet;
    suiImagePanel14: TsuiImagePanel;
    suiImagePanel21: TsuiImagePanel;
    HbbConfirm: TsuiButton;
    HPnlTA01X: TsuiImagePanel;
    InfoLabel56: TInfoLabel;
    HidtTA01X: TInfoDBEdit;
    TabSheet20: TTabSheet;
    suiImagePanel22: TsuiImagePanel;
    suiImagePanel23: TsuiImagePanel;
    IbbConfirm: TsuiButton;
    IPnlTA01X: TsuiImagePanel;
    InfoLabel67: TInfoLabel;
    IidtTA01X: TInfoDBEdit;
    IPnlTA000: TsuiImagePanel;
    InfoLabel66: TInfoLabel;
    IidtTA000: TInfoDBEdit;
    IPnlTB003: TsuiImagePanel;
    InfoLabel68: TInfoLabel;
    IidtTB003: TInfoDBEdit;
    TabSheet21: TTabSheet;
    suiImagePanel25: TsuiImagePanel;
    suiImagePanel29: TsuiImagePanel;
    JbbConfirm: TsuiButton;
    JPnlTA01X: TsuiImagePanel;
    InfoLabel72: TInfoLabel;
    JidtTA01X: TInfoDBEdit;
    JPnlTA027: TsuiImagePanel;
    InfoLabel69: TInfoLabel;
    InfoLabel76: TInfoLabel;
    JidtTA027: TInfoDBEdit;
    TabSheet22: TTabSheet;
    suiImagePanel30: TsuiImagePanel;
    suiImagePanel31: TsuiImagePanel;
    kbbConfirm: TsuiButton;
    KPnlTA01X: TsuiImagePanel;
    InfoLabel73: TInfoLabel;
    KidtTA01X: TInfoDBEdit;
    KPnlTA000: TsuiImagePanel;
    InfoLabel74: TInfoLabel;
    KidtTA000: TInfoDBEdit;
    KPnlTB003: TsuiImagePanel;
    InfoLabel75: TInfoLabel;
    KidtTB003: TInfoDBEdit;
    KPnlTA027: TsuiImagePanel;
    InfoLabel77: TInfoLabel;
    InfoLabel78: TInfoLabel;
    KidtTA027: TInfoDBEdit;
    suiImagePanel3: TsuiImagePanel;
    suiImagePanel8: TsuiImagePanel;
    InfoLabel38: TInfoLabel;
    PidtTA026: TInfoDBEdit;
    PidtTA023C: TInfoDBEdit;
    PageControl4: TPageControl;
    TabSheet8: TTabSheet;
    suiImagePanel11: TsuiImagePanel;
    dbgdTB003: TInfoDBGrid;
    TabSheet9: TTabSheet;
    suiImagePanel20: TsuiImagePanel;
    InfoDBGrid1: TInfoDBGrid;
    TabSheet13: TTabSheet;
    Memo1: TMemo;
    TabSheet17: TTabSheet;
    PreViewImage: TImage;
    TabSheet18: TTabSheet;
    ParameterList: TListBox;
    CheckList: TListBox;
    Panel5: TPanel;
    MemoLog: TMemo;
    Panel6: TPanel;
    Panel7: TPanel;
    Label8: TLabel;
    InfoLabel5: TInfoLabel;
    bbCloseBox: TButton;
    Button24: TButton;
    Button26: TButton;
    BarcodeTempleFile: TEdit;
    Button27: TButton;
    idtSN: TEdit;
    Label11: TLabel;
    idtPrintCount: TEdit;
    UpDown: TUpDown;
    InfoLabel32: TInfoLabel;
    PidtTA022: TInfoDBEdit;
    PidtTA022C: TInfoDBEdit;
    InfoLabel80: TInfoLabel;
    CBComPort: TComboBox;
    InfoLabel31: TInfoLabel;
    PidtTA007: TInfoDBEdit;
    PidtTA007C: TInfoDBEdit;
    InfoLabel63: TInfoLabel;
    PidtTA008: TInfoDBEdit;
    PidtTA008C: TInfoDBEdit;
    suiButton1: TsuiButton;
    suiButton3: TsuiButton;
    cdsMasterTA005C: TStringField;
    cdsMasterTA005C3: TStringField;
    PidtTA005C2: TInfoDBEdit;
    PidtTA005C3: TInfoDBEdit;
    PidtTA005C: TInfoDBEdit;
    PidtTA005C1: TInfoDBEdit;
    InfoLabel6: TInfoLabel;
    InfoLabel7: TInfoLabel;
    InfoLabel8: TInfoLabel;
    InfoLabel9: TInfoLabel;
    qrySelect: TInfoClientDataSet;
    Timer1: TTimer;
    InfoLabel10: TInfoLabel;
    PidtTA006: TInfoDBEdit;
    cdsMasterNW004: TStringField;
    InfoLabel11: TInfoLabel;
    PidtNW004: TInfoDBEdit;
    show: TCheckBox;
    SpeedButton1: TSpeedButton;
    DdbgdPnl: TPanel;
    DdbgdTB003: TInfoDBGrid;
    DdbgdTA001: TInfoDBGrid;
    DcdsSerial: TInfoClientDataSet;
    DcdsSerialMG018: TStringField;
    DcdsSerialMG018C: TStringField;
    DcdsSerialTA001: TStringField;
    DdsSerial: TDataSource;
    DrvSerial: TRefValComponent;
    DcdsCombineNM003: TStringField;
    DcdsCombineTB003: TStringField;
    DcdsCombineNM003C: TStringField;
    IdbgdPnl: TPanel;
    IdbgdTB003: TInfoDBGrid;
    IcdsSerial: TInfoClientDataSet;
    IdsSerial: TDataSource;
    IrvSerial: TRefValComponent;
    IcdsSerialMG018: TStringField;
    IcdsSerialTA001: TStringField;
    IcdsSerialMG018C: TStringField;
    IcdsCombineNM003: TStringField;
    IcdsCombineTB003: TStringField;
    IcdsCombineNM003C: TStringField;
    IdbgdTA001: TInfoDBGrid;
    KcdsSerial: TInfoClientDataSet;
    KdsSerial: TDataSource;
    KrvSerial: TRefValComponent;
    KcdsCombineNM003: TStringField;
    KcdsCombineTB003: TStringField;
    KcdsCombineNM003C: TStringField;
    KdbgdPnl: TPanel;
    KdbgdTB003: TInfoDBGrid;
    KdbgdTA001: TInfoDBGrid;
    KcdsSerialMG018: TStringField;
    KcdsSerialTA001: TStringField;
    KcdsSerialMG018C: TStringField;
    CheckBox1: TCheckBox;
    Out2PrintData: TInfoClientDataSet;
    cdsQuery3: TInfoClientDataSet;
    APnlTA045: TsuiImagePanel;
    InfoLabel12: TInfoLabel;
    AidtTA045: TInfoDBEdit;
    cdsViewTA045: TFloatField;
    cdsMasterTA045: TFloatField;
    AcdsConditionTA045: TFloatField;
    InfoLabel13: TInfoLabel;
    PidtTA045: TInfoDBEdit;
    InfoLabel26: TInfoLabel;
    InfoLabel24: TInfoLabel;
    PidtTA020: TInfoDBEdit;
    idtTA018: TInfoDBEdit;
    APnlTA003: TsuiImagePanel;
    InfoLabel23: TInfoLabel;
    InfoLabel25: TInfoLabel;
    dtp_startDate: TDateTimePicker;
    dtp_startTime: TDateTimePicker;
    dtp_endDate: TDateTimePicker;
    dtp_endTime: TDateTimePicker;
    TimeConfirm: TBitBtn;
    APnlTA020: TsuiImagePanel;
    InfoLabel17: TInfoLabel;
    AidtTA020: TComboBox;
    cdsMasterTA039: TStringField;
    cdsOp: TInfoClientDataSet;
    cdsOpMV001: TStringField;
    cdsOpMV002: TStringField;
    dsOp: TDataSource;
    PanelEmpDetail: TPanel;
    dbgdOp: TInfoDBGrid;
    Label3: TLabel;
    etEmpId: TEdit;
    DBEdit1: TDBEdit;
    cdsViewTA039: TStringField;
    cdsMasterTA047: TStringField;
    cdsMasterTA048: TStringField;
    cdsMasterTA049: TFloatField;
    JcdsConditionTA049: TFloatField;
    CcdsConditionTA049: TFloatField;
    EcdsConditionTA049: TFloatField;
    KcdsConditionTA049: TFloatField;
    ComboBox_InOut: TComboBox;
    StaticText1: TStaticText;
    cdsAllowIP: TInfoClientDataSet;
    dsAllowIP: TDataSource;
    cdsAppurtenance: TInfoClientDataSet;
    DataSource2: TDataSource;
    bSetPrint: TsuiButton;
    infoReelid: TInfoLabel;   //(滿箱時)啟動ReelID結合 Visible = true:要結合 / false:不結合
    procedure cdsMasterAfterInsert(DataSet: TDataSet);
    procedure blpMasterStateChanged(BLPanel: TButtonLayoutPanel2;
      State: string);
    procedure cdsDetailNewRecord(DataSet: TDataSet);
    procedure btnConfirmClick(Sender: TObject);
    procedure cdsMasterBeforePost(DataSet: TDataSet);
    procedure cdsDetailBeforePost(DataSet: TDataSet);
    procedure cdsDetailAfterPost(DataSet: TDataSet);
    procedure cdsDetailAfterDelete(DataSet: TDataSet);
    procedure cdsViewBeforeOpen(DataSet: TDataSet);
    procedure btnMasterSaveClick(Sender: TObject);
    procedure btnDisConfirmClick(Sender: TObject);
    procedure btnNullifyClick(Sender: TObject);
    procedure cdsDetail1BeforePost(DataSet: TDataSet);
    procedure cdsDetail2BeforePost(DataSet: TDataSet);
    procedure cdsDetail1NewRecord(DataSet: TDataSet);
    procedure cdsDetail2NewRecord(DataSet: TDataSet);
    procedure Timer2Timer(Sender: TObject);
    procedure cdsMasterAfterPost(DataSet: TDataSet);
    procedure btnMasterInsertClick(Sender: TObject);
    procedure AbbConfirmClick(Sender: TObject);
    procedure AidtTA007KeyUp(Sender: TObject; var Key: Word;
      Shift: TShiftState);
    procedure AidtTA022KeyUp(Sender: TObject; var Key: Word;
      Shift: TShiftState);
    procedure BidtTA01XKeyUp(Sender: TObject; var Key: Word;
      Shift: TShiftState);
    procedure BbbConfirmClick(Sender: TObject);
    procedure PnlClearDblClick(Sender: TObject);
    procedure AidtTA007ButtonClick(Sender: TObject);
    procedure pmnGridClick(Sender: TObject);
    procedure btnMasterQueryClick(Sender: TObject);
    procedure FormKeyDown(Sender: TObject; var Key: Word;
      Shift: TShiftState);
    procedure cdsBox1BeforeOpen(DataSet: TDataSet);
    procedure cdsBox2BeforeOpen(DataSet: TDataSet);
    procedure cdsBox1AfterScroll(DataSet: TDataSet);
    procedure cdsMasterTA026Change(Sender: TField);
    procedure CidtTA01XKeyUp(Sender: TObject; var Key: Word;
      Shift: TShiftState);
    procedure CbbConfirmClick(Sender: TObject);
    procedure CidtTA027KeyUp(Sender: TObject; var Key: Word;
      Shift: TShiftState);
    procedure DidtTA000KeyUp(Sender: TObject; var Key: Word;
      Shift: TShiftState);
    procedure DidtTB003KeyUp(Sender: TObject; var Key: Word;
      Shift: TShiftState);
    procedure DidtTA01XKeyUp(Sender: TObject; var Key: Word;
      Shift: TShiftState);
    procedure DbbConfirmClick(Sender: TObject);
    procedure EidtTA000KeyUp(Sender: TObject; var Key: Word;
      Shift: TShiftState);
    procedure EidtTB003KeyUp(Sender: TObject; var Key: Word;
      Shift: TShiftState);
    procedure EidtTA01XKeyUp(Sender: TObject; var Key: Word;
      Shift: TShiftState);
    procedure EidtTA027KeyUp(Sender: TObject; var Key: Word;
      Shift: TShiftState);
    procedure EbbConfirmClick(Sender: TObject);
    procedure APortTriggerAvail(CP: TObject; Count: Word);
    procedure BWeightStartClick(Sender: TObject);
    procedure BWeightStopClick(Sender: TObject);
    procedure TimerTimer(Sender: TObject);
    procedure FidtTA01X1KeyUp(Sender: TObject; var Key: Word;
      Shift: TShiftState);
    procedure FidtTA01X2KeyUp(Sender: TObject; var Key: Word;
      Shift: TShiftState);
    procedure FbbConfirmClick(Sender: TObject);
    procedure GidtTA01X1KeyUp(Sender: TObject; var Key: Word;
      Shift: TShiftState);
    procedure GidtTA01X2KeyUp(Sender: TObject; var Key: Word;
      Shift: TShiftState);
    procedure GbbConfirmClick(Sender: TObject);
    procedure idtTA007ButtonClick(Sender: TObject);
    procedure idtTA022ButtonClick(Sender: TObject);
    procedure idtTA008ButtonClick(Sender: TObject);
    procedure idtTA010ButtonClick(Sender: TObject);
    procedure idtTA011ButtonClick(Sender: TObject);
    procedure idtTA012ButtonClick(Sender: TObject);
    procedure idtTA013ButtonClick(Sender: TObject);
    procedure idtTA023ButtonClick(Sender: TObject);
    procedure DidtTB003ButtonClick(Sender: TObject);
    procedure DidtTA01XButtonClick(Sender: TObject);
    procedure EidtTB003ButtonClick(Sender: TObject);
    procedure EidtTA01XButtonClick(Sender: TObject);
    procedure FidtTA01X1ButtonClick(Sender: TObject);
    procedure FidtTA01X2ButtonClick(Sender: TObject);
    procedure GidtTA01X1ButtonClick(Sender: TObject);
    procedure GidtTA01X2ButtonClick(Sender: TObject);
    procedure AidtTA005ButtonClick(Sender: TObject);
    procedure AidtTA005KeyUp(Sender: TObject; var Key: Word;
      Shift: TShiftState);
    procedure HidtTA01XKeyUp(Sender: TObject; var Key: Word;
      Shift: TShiftState);
    procedure HbbConfirmClick(Sender: TObject);
    procedure suiButton2Click(Sender: TObject);
    procedure suiButton1Click(Sender: TObject);
    procedure suiButton3Click(Sender: TObject);
    procedure btnRePrintClick(Sender: TObject);
    procedure AidtTA008KeyUp(Sender: TObject; var Key: Word;
      Shift: TShiftState);
    procedure IidtTA01XKeyUp(Sender: TObject; var Key: Word;
      Shift: TShiftState);
    procedure IbbConfirmClick(Sender: TObject);
    procedure PageControl3Change(Sender: TObject);
    procedure IidtTA000KeyUp(Sender: TObject; var Key: Word;
      Shift: TShiftState);
    procedure IidtTB003KeyUp(Sender: TObject; var Key: Word;
      Shift: TShiftState);
    procedure JidtTA01XKeyUp(Sender: TObject; var Key: Word;
      Shift: TShiftState);
    procedure JbbConfirmClick(Sender: TObject);
    procedure KidtTA000KeyUp(Sender: TObject; var Key: Word;
      Shift: TShiftState);
    procedure KidtTB003ButtonClick(Sender: TObject);
    procedure KidtTB003KeyUp(Sender: TObject; var Key: Word;
      Shift: TShiftState);
    procedure KidtTA01XKeyUp(Sender: TObject; var Key: Word;
      Shift: TShiftState);
    procedure kbbConfirmClick(Sender: TObject);
    procedure JidtTA027KeyUp(Sender: TObject; var Key: Word;
      Shift: TShiftState);
    procedure KidtTA027KeyUp(Sender: TObject; var Key: Word;
      Shift: TShiftState);
    procedure FormShow(Sender: TObject);
    procedure BarcodeTempleFileChange(Sender: TObject);
    procedure Button27Click(Sender: TObject);
    procedure Button26Click(Sender: TObject);
    procedure SetControlFocused();
    procedure MoveCursorToControl(control: TControl);
    function GetAbsolutePositionOfControl(control: TControl): TPoint;
    procedure idtSNKeyUp(Sender: TObject; var Key: Word;
      Shift: TShiftState);
    procedure Button24Click(Sender: TObject);
    procedure bbCloseBoxClick(Sender: TObject);
    procedure Timer1Timer(Sender: TObject);
    procedure showClick(Sender: TObject);
    procedure SpeedButton1Click(Sender: TObject);
    procedure DcdsSerialBeforeOpen(DataSet: TDataSet);
    procedure IcdsSerialBeforeOpen(DataSet: TDataSet);
    procedure KcdsSerialBeforeOpen(DataSet: TDataSet);
    procedure DcdsCombineAfterOpen(DataSet: TDataSet);
    procedure IcdsCombineAfterOpen(DataSet: TDataSet);
    procedure KcdsCombineAfterOpen(DataSet: TDataSet);
    procedure AidtTA045KeyUp(Sender: TObject; var Key: Word;
      Shift: TShiftState);
    procedure AidtTA020Change(Sender: TObject);
    procedure TimeConfirmClick(Sender: TObject);
    procedure btnLogoutClick(Sender: TObject);
    procedure btnLoginClick(Sender: TObject);
    procedure cdsMasterTA045Change(Sender: TField);
    procedure FormCreate(Sender: TObject);
    procedure FormActivate(Sender: TObject);
    procedure etEmpIdKeyUp(Sender: TObject; var Key: Word;
      Shift: TShiftState);
    procedure cdsAppurtenanceBeforeOpen(DataSet: TDataSet);
    procedure bSetPrintClick(Sender: TObject);
  private
    procedure SetGroupButtonEnabled;
    procedure MasterReCalculate;

    procedure SetPage(page: string; actpage: integer); //設定頁面
    procedure FrmProcess; //輸入製程,員工代號
    procedure FrmPack; //裝箱
    procedure FrmPackWeight; //裝箱->秤重
    procedure FrmCombinePack; //組合->裝箱
    procedure FrmCombinePackWeight; //組合->裝箱->秤重
    procedure FrmPackBatch; //裝箱批過
    procedure FrmCombinePackBatch; //組合->裝箱批過
    procedure FrmOnlinePack; //隨線裝箱
    procedure FrmCombineOnlinePack; //組合+隨線裝箱
    procedure FrmOnlinePackWeight; //隨線裝箱+秤重
    procedure FrmCombineOnlinePackWeight; //組合+隨線裝箱+秤重
    procedure FSwitch; //根據行為切換頁面
    procedure FSaveSN; //存檔前檢查
    procedure AddMemo(wavtype: string; mes: string); //寫入訊息到memo
    function FCheckSN(SN: TinfoDBEdit; Process, Connect, PassType, MO: string): Boolean; //檢查序號的目前狀態
    function FCheckLastSN(FTA01X, FTA005, FTA026: string): Boolean; //檢查是否為此箱最後的序號
    function FCheckFull(FTA005, FTA026, FMF013: string): Boolean; //檢查是否滿箱
    procedure SetTA005Caption(MO: string);
    function GetPassQty(sWO, sCurrentRoute: string): string;
    function FCheckExceed(SN: TinfoDBEdit; MO, Process: string): Boolean;
    function FCheckAllowPass(MO, Process: string): Boolean;
    function FCheckProp(MO, Process: string): Boolean;
    procedure OnLinePrint;
    function CheckWeightRange(sMO: string; fWeight: double; var Msg: string): Boolean;
    procedure FinishWeight(Field: TinfoDBEdit; Weight: string);
    procedure FindComport;
    procedure SelectComport;
    function GetCombineCount(MO, Process: string): Integer;
    procedure FReloadBarcodeTemplateFile();
    function GetSerialPart(SN: string): string; //取得序號的料號
    function IsCombined(SN, MO, Process: string): Boolean; //判斷是否為被組合序號
    function DIsCompleteInput(ctype: string): Boolean; //判斷是否已輸入所有序號
    function IIsCompleteInput(ctype: string): Boolean; //判斷是否已輸入所有序號
    function KIsCompleteInput(ctype: string): Boolean; //判斷是否已輸入所有序號
    function FWeightAllowPass: Boolean;
    procedure SaveLog(SN: string);
    function CheckTimeInterval:Boolean;//檢查時間輸入是否正確（區間：12小時） PT.20210930
    function GetLot:Boolean ; //判斷過站類別是否合法並取得批號                PT.20210930
    function InputOp(opCnt: integer): Boolean;
    function IsEmpDetailEnabled(PartNo: string): boolean;    
    function GetClientComputerName: String;   //20220316 PT. 過站時寫入 TA047，TA048
    function GetClientMAC(const IPAddress: string; var ErrCode : DWORD): String; //20220316 PT. 過站時寫入 TA047，TA048 
    function IsVersionCorrect: boolean;  
    function GetAlternativePart(snPart,sn,snType :string): string;  //20220729 PT. 取得替代料號
    function IsBoxReelIDCombine: Boolean;  //20230804 PT. 是否要結合箱號與客製REELID
    { Private declarations }
  public
    FLastTA01X: string; // 記錄前一筆生產序號
    FLastTA005: string; // 記錄前一筆製令單號
    FLastTA006: string; // 記錄前一筆加工順序
    FLastTA007: string; // 記錄前一筆製程代號
    FLastTA045: string; // 記錄前一筆人數
    FLastTA008: string; // 記錄前一筆檢測點代號
    FLastTA009: string; // 記錄前一筆檢測結果
    FLastTA011: string; // 記錄前一筆維修點代號
    FLastTA015: string; // 記錄前一筆維修註記
    FLastTA022: string; // 記錄前一筆員工代號
    FLastTA026: string; // 記錄前一筆裝箱號碼
    FLastPASS: Integer; // 記錄前一筆PASS數
    FLastOK: Integer; // 記錄前一筆OK數(完修)
    FLastNG: Integer; // 記錄前一筆NG數(報廢)
    FLastMF013: string; // 記錄前一筆每箱個數
    FLastTA005C: string; // 記錄前一筆批量
    FLastTA005C2: string; // 記錄前一筆料號
    FLastTA005C3: string; // 記錄前一筆名稱
    FLastNW004: string; // 記錄前一筆列印時機
    FLastTA018 :string; // 記錄前一筆批號
    FLastTA020 :string; // 記錄前一筆過站類別
    FLastTA003 :string; // 記錄前一筆日期
    FLastTA004 :string; // 記錄前一筆時間
    FFull: Boolean; //滿箱否資訊

    FLastFTA000: Integer; // 紀錄前一筆組合筆數

    Finput: Boolean; //是否在輸入狀態
    FOK: Boolean; //是否檢測 OK  (DEFAULT OK)

    FActPage1: Integer; //控制 pagecontrol 1
    FActPage2: Integer; //控制 pagecontrol 2
    FActPage3: Integer; //控制 pagecontrol 3
    FActPage4: Integer; //控制 pagecontrol 4

    FMA001: string; //製程代號
    FMA002: string; //製程名稱
    FMA004: string; //性質
    FMA009: string; //製程類別
    FMA010: string; //對應為修製程
    FMA011: string; //製程行為
    FMA012: string; //對應自動過站製程
    FMA014: string; //MAC碼類別

    FMF013: string; //每箱個數

    FBuffer: string;
    BStart: Boolean; //啟動秤重 true or false
    BWeight: Boolean; //可秤重   true or false
    BWrite: Boolean; //可寫入   true or false
    BField: TinfoDBEdit;

    FPrintSeq: string;
    sDate, eDate: TDatetime;
    sExceed, eExceed: TDatetime;
    sCheckSN, eCheckSN: TDatetime;
    sConfirm, eConfirm: TDatetime;
    sPrint, ePrint: TDatetime;
    sSave, eSave: TDatetime;
    sSound, eSound: TDatetime;
    FIP,FMAC,FComputerName: string;    //20220316 PT. 過站時寫入 TA047，TA048
    sReelID: string; //記錄REELID   PT. 20230804
    iQty: integer;
    { Public declarations }
  end;

var
  frmcSSFI704: TfrmcSSFI704;
  isChangingWorkOrder: boolean = true;
  getPrintParams: variant;
implementation

{$R *.DFM}

uses
  CommonUtils, dmcSSFI704u, AFM2BaseFMUtils, APUtils, DefineUtils, userutils,
  fmcSSFI7041, LabelUtils, fmcSSFI7042, fmcSSFI7043, fmcSSFI7044,
  fmcSSFI7045, fmcSSFI7046;

procedure TfrmcSSFI704.cdsViewBeforeOpen(DataSet: TDataSet);
begin
  FProgramName := 'SSFI704';
  FOrderBy := 'ORDER BY TA001,TA002';
  inherited;
  SetPage('ActPage3', 0);
  SetPage('ActPage4', 0);
  FLastTA01X := ''; // 記錄前一筆生產序號
  FLastTA005 := ''; // 記錄前一筆製令單號
  FLastTA006 := ''; // 記錄前一筆加工順序
  FLastTA007 := ''; // 記錄前一筆製程代號
  FLastTA008 := ''; // 記錄前一筆檢測點代號
  FLastTA009 := ''; // 記錄前一筆檢測結果
  FLastTA011 := ''; // 記錄前一筆維修點代號
  FLastTA015 := ''; // 記錄前一筆維修註記
  FLastTA022 := ''; // 記錄前一筆員工代號
  FLastTA026 := ''; // 記錄前一筆裝箱號碼
  FLastFTA000 := 0; // 紀錄前一筆組合筆數
  FLastMF013 := ''; // 記錄前一筆每箱個數
  FLastTA005C := ''; // 記錄前一筆批量
  FLastTA005C2 := ''; // 記錄前一筆料號
  FLastTA005C3 := ''; // 記錄前一筆名稱
  FLastNW004 := ''; // 記錄前一筆列印時機
  FLastTA045 := ''; // 記錄前一筆人數
  FLastTA018 := ''; // 記錄前一筆批號
  FLastTA020 := ''; // 記錄前一筆過站類別
  FLastTA003 := ''; // 記錄前一筆日期
  FLastTA004 := ''; // 記錄前一筆時間
  //設定計數器狀態
  FLastPASS := 0;
  cdsCounter.Close;
  cdsCounter.Open;
  cdsCounter.Append;
  cdsCounterPASS.Asstring := 'PASS';
  cdsCounterPASSNUM.Value := FLastPASS;
  cdsCounter.Post;
end;

procedure TfrmcSSFI704.cdsMasterAfterInsert(DataSet: TDataSet);
const
  //找出此序號的箱號
  SQLstr = ' SELECT A.MR002,B.MQ005,B.MQ006 ' +
    '   FROM SSFMR A(NOLOCK) ' +
    '   JOIN SSFMQ B(NOLOCK) ON (B.MQ001 = A.MR001 AND B.MQ002 = A.MR002) ' +
    '  WHERE A.MR001 = ''%s'' ' +
    '    AND A.MR003 = ''%s'' ';
begin
  inherited;
  with cdsQuery do
  begin
    Close;
    SQL.Clear;
    SQL.Add(format(SQLstr, [FLastTA005, FLastTA01X]));
    Open;
    if not eof then
      FLastTA026 := FieldByName('MR002').AsString // 記錄前一筆裝箱號碼
    else
      FLastTA026 := '';
  end;
  with DataSet do
  begin
    FieldByName('COMPANY').Value := FDatabaseName;
    FieldByName('CREATOR').Value := FUserId;
    FieldByName('USR_GROUP').Value := FUserGroup;
    FieldByName('CREATE_DATE').Value := GetNowDate;
    FieldByName('MODIFIER').Value := FUserId;
    FieldByName('MODI_DATE').Value := GetNowDate;
    FieldByName('FLAG').Value := 1;
    FieldByName('TA02X').Value := 'AUTO';
    FieldByName('TA003').Value := GetNowDate;
    FieldByName('TA004').Value := GetNowTime;
    FieldByName('TA030').Value := TRIM(FieldByName('TA003').Value) + TRIM(FieldByName('TA004').Value);
    if (FLastTA020='Z') then begin
    FieldByName('TA003').Value := FLastTA003;
    FieldByName('TA004').Value := FLastTA004;
    end;
    FieldByName('TA005').AsString := FLastTA005; // 製令單號
    FieldByName('TA006').AsString := FLastTA006; // 加工順序
    FieldByName('TA007').AsString := FLastTA007; // 製程代號
    FieldByName('TA008').AsString := FLastTA008; // 檢測點代號
    FieldByName('TA009').AsString := '1'; // 檢測結果預設為 1.PASS
    FieldByName('TA011').AsString := FLastTA011; // 維修點代號
    FieldByName('TA022').AsString := FLastTA022; // 員工代號
    FieldByName('TA026').AsString := FLastTA026; // 裝箱號碼
    FieldByName('TA020').Value := FLastTA020; // P:單板過站
    FieldByName('TA018').Value := FLastTA018; // 過站批號
    FieldByName('TA028').Value := '1'; // 初檢OK 固定寫 '1' OK
    FieldByName('MF013').Value := FLastMF013; // 每箱個數
    FieldByName('TA005C').Value := FLastTA005C; // 批量
    FieldByName('TA005C1').Value := GetPassQty(FLastTA005, FLastTA007); // 完成數
    FieldByName('TA005C2').Value := FLastTA005C2; // 料號        
    FieldByName('TA005C3').Value := FLastTA005C3; // 名稱
    FieldByName('NW004').Value := FLastNW004; // 列印時機
    FieldByName('TA045').AsString := FLastTA045; // 人數
    FieldByName('TA039').AsString := FProgramName + ' ' + StatusBar.Panels[3].Text;
    FieldByName('TA047').AsString := FComputerName + '@@'+ FMAC;
    FieldByName('TA048').AsString := FIP;
  end;
end;

procedure TfrmcSSFI704.blpMasterStateChanged(BLPanel: TButtonLayoutPanel2;
  State: string);
begin
  inherited;
//  idtTB017.ReadOnly := (State<>'Query');   //單據日期
  if (State = 'Edit') or (State = 'Insert') then
  begin
    pnlDetail.Visible := False;
    pnlTotal.Visible := True;
    pnlImage1.Visible := True;
  end
  else
  begin
    pnlDetail.Visible := True;
    pnlTotal.Visible := False;
    pnlImage1.Visible := False;
  end;
//  end;
//  if (State<>'Init') and (State<>'Query') then
//  begin
//    EnableControls([],[idtMF002,idtMF003,idtMF004,idtMF005,idtMF006,idtMF007,idtMF008,idtMF009,idtMF010,idtMF011,idtMF012,idtMF013,idtMF014,idtMF015]);
//    EnableControlsColor([],[idtMF002,idtMF003,idtMF004,idtMF005,idtMF006,idtMF007,idtMF008,idtMF009,idtMF010,idtMF011,idtMF012,idtMF013,idtMF014,idtMF015]);
//  end;

end;

procedure TfrmcSSFI704.SetGroupButtonEnabled;
var
  I: Integer;
  sAssignStr: string;
  bBtnEnable: array[0..5] of Boolean;
begin
  inherited;
  if (FMF005 = 'Y') then
  begin
    // 超級使用者
    if ((blpMaster.State = 'Init') or (blpMaster.State = 'Browse')) then
    begin
      for I := 0 to 5 do
      begin
        bBtnEnable[I] := True;
      end;
    end
    else
    begin
      for I := 0 to 5 do
        bBtnEnable[I] := False;
    end;
  end
  else begin
    // 設定不同群組是否可以編輯、刪除、確認、取確
    // 設定同群組是否可以編輯、刪除、確認、取確
    if (cdsMaster.Eof) then
      sAssignStr := FBasePower
    else begin
      if (cdsMasterUSR_GROUP.AsString <> FUserGroup) then
        sAssignStr := FOtherPower
      else begin
        if (cdsMasterCREATOR.AsString <> FUserId) then
          sAssignStr := FSamePower
        else
          sAssignStr := FBasePower;
      end;
    end;

    // 新增&修改&刪除
    if ((blpMaster.State = 'Init') or (blpMaster.State = 'Browse')) then
    begin
      for I := 1 to 4 do
        bBtnEnable[I] := (Copy(sAssignStr, I + 1, 1) = 'Y');
      bBtnEnable[0] := (Copy(FBasePower, 9, 1) = 'Y');
    end
    else
    begin
      for I := 0 to 5 do
        bBtnEnable[I] := False;
    end;
  end;

  if (cdsMaster.RecordCount = 0) then
  begin
    // 筆數為0，則編輯鈕、刪除鈕、確認鈕、取消確認鈕、作廢鈕皆先Disable
    for I := 1 to 5 do
      bBtnEnable[I] := False;
  end
  else begin
    // 已確認的單據，不可編輯、刪除、確認
    if (cdsMasterTA021.AsString = 'Y') or
      (cdsMasterTA021.AsString = 'V') then
    begin
      for I := 1 to 3 do
        bBtnEnable[I] := False; // 編輯鈕、刪除鈕、確認鈕
      if (bBtnEnable[4]) then bBtnEnable[4] := True; // 取確鈕
    end
    else if (bBtnEnable[4]) then bBtnEnable[4] := False; // 取確鈕

    bBtnEnable[5] := bBtnEnable[1]; // 作廢鈕：可編輯即可作廢
  end;

//  for I := 2 to 5 do
//    bBtnEnable[I] := False;                                 // 刪除鈕,確認鈕,取確鈕,作廢鈕
  for I := 1 to 3 do
    bBtnEnable[I] := False; // 編輯鈕,刪除鈕,確認鈕

  for I := 0 to 5 do
    FButtonName[I].Enabled := bBtnEnable[I];

  SetPopMenuCaption; // 設定 PopMenu 的 Caption
end;

procedure TfrmcSSFI704.cdsMasterBeforePost(DataSet: TDataSet);
var
  RequireStr: string;
begin
  inherited;
  MasterReCalculate; // 計算總計
  RequireStr := 'TA01X,TA02X,TA003,TA004,TA005,TA007,TA008';
//  CheckMasterRequiredFields(Self, DataSet, RequireStr);
  // 必要欄位齊全後再新增
  if (cdsMasterFLAG.AsString = '') then
    cdsMasterFLAG.Value := 0;

  with cdsMaster do
  begin
   if FieldByName('TA020').Value <> 'Z' then begin
      FieldByName('TA003').Value := GetNowDate;
      FieldByName('TA004').Value := GetNowTime;
   end;
      FieldByName('TA030').Value := TRIM(GetNowDate) + TRIM(GetNowTime);
      FieldByName('TA025').AsString := FMA011;
  end;

  if (FormState in [fsEdit]) then
  begin
    cdsMasterFLAG.Value := cdsMasterFLAG.Value + 1;
    cdsMasterMODIFIER.Value := LowerCase(FUserId);
    cdsMasterMODI_DATE.Value := GetNowDate;
    cdsMasterTA039.Value := FProgramName + ' ' + StatusBar.Panels[3].Text;;
    cdsMasterTA047.Value := FComputerName + '@@'+ FMAC;
    cdsMasterTA048.Value := FIP;
  end;
end;

procedure TfrmcSSFI704.MasterReCalculate;
var
  iQty: Integer;
begin
{  with cdsDetail do
  begin
    // 單身總數量
    if (FieldByName('MJ002S').AsString = '') then
      iQTY := 0
    else
      iQTY := FieldByName('MJ002S').Value;
  end;
  cdsMaster.FieldByName('MI002').Value := iQty;         // 總數量
}
end;

procedure TfrmcSSFI704.cdsDetailNewRecord(DataSet: TDataSet);
var
  sSeqNo: string;
begin
  inherited;
  with DataSet do
  begin
    FieldByName('COMPANY').Value := FDatabaseName;
    FieldByName('CREATOR').Value := FUserId;
    FieldByName('USR_GROUP').Value := FUserGroup;
    FieldByName('CREATE_DATE').Value := GetNowDate;
    FieldByName('MODIFIER').Value := FUserId;
    FieldByName('MODI_DATE').Value := GetNowDate;
    FieldByName('FLAG').Value := 1;
    FieldByName('TB001').Value := FieldByName('TA01X').AsString;

{    sSeqNo := DataSet.FieldByName('Max_SeqNo').AsString;
    if (sSeqNo = '') then sSeqNo := '0';
    FieldByName('MG002').Value :=
           Format('%.'+IntToStr(cdsDetailMG002.Size)+'d',[(Round(StrToInt(sSeqNo)/10)+1)*10]);
}
//    FieldByName('MB002').Value := GetMaxSeqNo(cdsDetail,cdsDetailMB002.Size);
  end;
end;

procedure TfrmcSSFI704.cdsDetail1NewRecord(DataSet: TDataSet);
var
  sSeqNo: string;
begin
  inherited;
  with DataSet do
  begin
    FieldByName('COMPANY').Value := FDatabaseName;
    FieldByName('CREATOR').Value := FUserId;
    FieldByName('USR_GROUP').Value := FUserGroup;
    FieldByName('CREATE_DATE').Value := GetNowDate;
    FieldByName('MODIFIER').Value := FUserId;
    FieldByName('MODI_DATE').Value := GetNowDate;
    FieldByName('FLAG').Value := 1;
    FieldByName('TC001').Value := FieldByName('TA01X').AsString;

{    sSeqNo := DataSet.FieldByName('Max_SeqNo').AsString;
    if (sSeqNo = '') then sSeqNo := '0';
    FieldByName('MG002').Value :=
           Format('%.'+IntToStr(cdsDetailMG002.Size)+'d',[(Round(StrToInt(sSeqNo)/10)+1)*10]);
}
//    FieldByName('MB002').Value := GetMaxSeqNo(cdsDetail,cdsDetailMB002.Size);
  end;
end;

procedure TfrmcSSFI704.cdsDetail2NewRecord(DataSet: TDataSet);
var
  sSeqNo: string;
begin
  inherited;
  with DataSet do
  begin
    FieldByName('COMPANY').Value := FDatabaseName;
    FieldByName('CREATOR').Value := FUserId;
    FieldByName('USR_GROUP').Value := FUserGroup;
    FieldByName('CREATE_DATE').Value := GetNowDate;
    FieldByName('MODIFIER').Value := FUserId;
    FieldByName('MODI_DATE').Value := GetNowDate;
    FieldByName('FLAG').Value := 1;
    FieldByName('TD001').Value := FieldByName('TA01X').AsString;

{    sSeqNo := DataSet.FieldByName('Max_SeqNo').AsString;
    if (sSeqNo = '') then sSeqNo := '0';
    FieldByName('MG002').Value :=
           Format('%.'+IntToStr(cdsDetailMG002.Size)+'d',[(Round(StrToInt(sSeqNo)/10)+1)*10]);
}
//    FieldByName('MB002').Value := GetMaxSeqNo(cdsDetail,cdsDetailMB002.Size);
  end;
end;

procedure TfrmcSSFI704.cdsDetailAfterDelete(DataSet: TDataSet);
begin
  inherited;
  with cdsMaster do
  begin
    DisableControls;
    Edit;
    MasterReCalculate; // 計算總計
    Post;
    EnableControls;
  end;
end;

procedure TfrmcSSFI704.cdsDetailBeforePost(DataSet: TDataSet);
var
  RequireStr: string;
begin
  inherited;
  if (cdsDetailTB003.AsString = '') then
  begin
    dbgdDetail.SelectedIndex := 1;
    raise Exception.Create('被組合生產序號不可為空白!');
  end;

  // 必要欄位齊全後再新增
  if (cdsDetailFLAG.AsString = '') then
    cdsDetailFLAG.Value := 0;

  if (FormState in [fsEdit]) then
  begin
    cdsDetailFLAG.Value := cdsDetailFLAG.Value + 1;
    cdsDetailMODIFIER.Value := LowerCase(FUserId);
    cdsDetailMODI_DATE.Value := GetNowDate;
  end;
end;

procedure TfrmcSSFI704.cdsDetail1BeforePost(DataSet: TDataSet);
var
  RequireStr: string;
begin
  inherited;
  if (cdsDetail1TC003.AsString = '') then
  begin
    dbgdDetail.SelectedIndex := 1;
    raise Exception.Create('MAC碼不可為空白!');
  end;

  // 必要欄位齊全後再新增
  if (cdsDetail1FLAG.AsString = '') then
    cdsDetail1FLAG.Value := 0;

  if (FormState in [fsEdit]) then
  begin
    cdsDetail1FLAG.Value := cdsDetail1FLAG.Value + 1;
    cdsDetail1MODIFIER.Value := LowerCase(FUserId);
    cdsDetail1MODI_DATE.Value := GetNowDate;
  end;
end;

procedure TfrmcSSFI704.cdsDetail2BeforePost(DataSet: TDataSet);
var
  RequireStr: string;
begin
  inherited;
  if (cdsDetail2TD003.AsString = '') then
  begin
    dbgdDetail.SelectedIndex := 1;
    raise Exception.Create('檢測值不可為空白!');
  end;

  // 必要欄位齊全後再新增
  if (cdsDetail2FLAG.AsString = '') then
    cdsDetail2FLAG.Value := 0;

  if (FormState in [fsEdit]) then
  begin
    cdsDetail2FLAG.Value := cdsDetail2FLAG.Value + 1;
    cdsDetail2MODIFIER.Value := LowerCase(FUserId);
    cdsDetail2MODI_DATE.Value := GetNowDate;
  end;
end;

procedure TfrmcSSFI704.cdsDetailAfterPost(DataSet: TDataSet);
begin
  inherited;
  MasterReCalculate; // 計算總計
end;

procedure TfrmcSSFI704.btnMasterSaveClick(Sender: TObject);
const
  execSQL = ' DECLARE @msg VARCHAR(500),@isPass VARCHAR(20) '
          + ' exec [dbo].[SSFI704_Appurtenance] ''%s'',''%s'', @msg output,@isPass output '
          + ' SELECT @isPass as [isPass],@msg as [msg] ';

  execSQL2= ' DECLARE @ResultValue INT,@Msg VARCHAR(200) '
          + ' exec [dbo].[SSFI704_BoxReelIDCombine] :WO,:SN,:SN_SEQ,:BOX,:REELID,:QTY,:TYPE, @ResultValue output,@Msg output '
          + ' SELECT @ResultValue as [isPass],@Msg as [msg] ';
var
  sCurrState,sAppurtenanceList: string;
  vInput, vReturnVal: Variant;
begin
  sSave := now;
  button26.Enabled := false;
  sCurrState := blpMaster.State;

  if ((sCurrState = 'Insert') or
    (sCurrState = 'Edit')) then
  begin
    if (cdsDetail.State in [dsInsert, dsEdit]) then
      //cdsDetail.Post;

{    if (cdsDetail.RecordCount = 0) or
       ((cdsDetail.RecordCount = 1) and (cdsDetail.FieldByName('MH002').AsString = '')) then
       raise Exception.Create('無單身資料不可存檔!');
}
  end;

  GetLot;
  FSwitch;

  //確認程式版次
  if not IsVersionCorrect then begin
    EnableControls([], [PageControl3]);
    exit;
  end;

  inherited;
  CallServerMethod('sSSFI704', 'Arista_Customized_Carton_id', VarArrayOf([PidtTA005.Text, PidtTA026.Text]), vReturnVal);
  PidtTA026.Text := vReturnVal[0];

  vInput := VarArrayOf([cdsOp.Data,cdsMasterTA001.value,cdsMasterTA002.value]);
  CallServerMethod('sSSFI710', 'InsertOp', vInput, vReturnVal);     //實名制

  {  start 寫入配件 20220923 }
  if cdsAppurtenance.RecordCount > 0 then
  begin
    try
      try
        cdsQuery.Close;
        cdsQuery.sql.clear;
        cdsQuery.sql.add(Format(execSQL,[cdsMasterTA001.value,cdsMasterTA002.value]));
        cdsQuery.Open;
        AddMemo('OK', cdsQuery.FieldByName('msg').AsString);
        //AddMemoMessage(FormatDateTime('YYYY/MM/DD HH:MM:SS',now)+ ' : '+ cdsQuery.FieldByName('msg').AsString);
      except on E: Exception do
        AddMemo('ERROR', E.Message);
        //AddMemoMessage(FormatDateTime('YYYY/MM/DD HH:MM:SS',now)+ ' : '+ E.Message);
      end;
    finally
      cdsQuery.Close;
      cdsQuery.sql.clear;
    end;
  end;
  {  end 寫入配件  }

  {  start 寫入BOX ＆ REELID 20230804 }
  if (sReelID <> '') and (infoReelid.Visible) then
  begin
    try
      try
        cdsQuery.Close;
        cdsQuery.sql.clear;
        cdsQuery.sql.add(execSQL2);
        cdsQuery.Params.ParamByName('WO').AsString     := PidtTA005.Text;       //VI003
        cdsQuery.Params.ParamByName('SN').AsString     := cdsMasterTA001.value; //TA01X
        cdsQuery.Params.ParamByName('SN_SEQ').AsString := cdsMasterTA002.value; //TA02X
        cdsQuery.Params.ParamByName('BOX').AsString    := PidtTA026.Text;       //VI004
        cdsQuery.Params.ParamByName('REELID').AsString := sReelID;              //VI001
        cdsQuery.Params.ParamByName('QTY').AsInteger   := iQty;                 //VI008
        cdsQuery.Params.ParamByName('TYPE').AsInteger  := 2;                    //1:檢核 2:寫入
        cdsQuery.Open;
        if cdsQuery.FieldByName('isPass').AsInteger = 0 then
        begin
          AddMemo('OK', '箱號與REELID綁定成功... ' + cdsQuery.FieldByName('msg').AsString);
        end
        else
        begin
          AddMemo('ERROR','箱號與REELID綁定失敗... ' + cdsQuery.FieldByName('msg').AsString);
        end;
      except on E: Exception do
        AddMemo('ERROR','箱號與REELID綁定失敗... ' + E.Message);
      end;
    finally
      sReelID :='';
      iQty := 0;
      cdsQuery.Close;
      cdsQuery.sql.clear;
    end;
  end;
  {  end 寫入BOX ＆ REELID }

  if (vReturnVal[0] <> 'true') then AddMemo('ERROR', vReturnVal[1]);

  eSave := now;

  if (sCurrState = 'Insert') then
  begin
    AddMemo('OK', '生產序號:' + FLastTA01X + '裝箱處理完成!!');

    if FCheckFull(PidtTA005.Text, PidtTA026.Text, FlastMF013) then
    begin
      sSound := now;
      AddMemo('FULL', '已滿箱,請換箱!!');
      Ffull := True;
      eSound := now;
    end;

    //模組化的線上列印
    if (BarcodeTempleFile.Text <> '') then
      if (FlastNW004 = '3') or ((FlastNW004 = '4') and (Ffull)) then //如果是 3.存檔後  或是 4.滿箱後且已滿箱
      begin
        sPrint := now;
        // 20160506 always reload local template file before print
        //FReloadBarcodeTemplateFile;
        OnlinePrint;
        ePrint := now;
      end;



    //紀錄累積的 PASS  數
    FLastPASS := FLastPASS + 1;
    cdsCounter.First;
    cdsCounter.Edit;
    cdsCounterPASSNUM.Value := FLastPASS;
    cdsCounter.Post;

    btnMasterInsert.Click;
  end;
end;

procedure TfrmcSSFI704.btnConfirmClick(Sender: TObject);
var
  vReturnVal: Variant;
  ErrMsg: string;
  i: integer;
begin
  inherited;
  // 檢核是否可以做卡號配發確認動作
  //  CallServerMethod('sSIMI012','CheckConfirm',VarArrayOf([cdsMasterTB01X.AsString, cdsMasterTB02X.AsString,FMF007,FMF005]));
  // vReturnVal回傳值：0-錯誤筆數 1-總筆數
{  vReturnVal := BatchClient.Run(VarArrayOf(['DO',cdsMasterMI01X.AsString,FUserId,FUserGroup,FMF007,FMF005]));

  ErrMsg := '裝箱作業確認完成，作業筆數 ' + vReturnVal[1] + ' ，錯誤筆數 ' +
             vReturnVal[0] + ' ，請查看Log';
  AddMemoMessage(ErrMsg);

  if  VarIsArray(vReturnVal[2]) then
  begin
    for i := 1 to VarArrayHighBound(vReturnVal[2],1) do
    begin
      AddMemoMessage(vReturnVal[2][i]);
    end;
  end;
  DoRefreshMasterDetailData;   }
end;

procedure TfrmcSSFI704.btnDisConfirmClick(Sender: TObject);
var
  vReturnVal: Variant;
  ErrMsg: string;
  i: integer;
begin
  inherited;
  // vReturnVal回傳值：0-錯誤筆數 1-總筆數
{  vReturnVal := BatchClient.Run(VarArrayOf(['UNDO',cdsMasterMI01X.AsString,FUserId,FUserGroup,FMF007,FMF005]));

  ErrMsg := '裝箱作業取確完成，作業筆數 ' + vReturnVal[1] + ' ，錯誤筆數 ' +
             vReturnVal[0] + ' ，請查看Log';
  AddMemoMessage(ErrMsg);

  if  VarIsArray(vReturnVal[2]) then
  begin
    for i := 1 to VarArrayHighBound(vReturnVal[2],1) do
    begin
      AddMemoMessage(vReturnVal[2][i]);
    end;
  end;
  DoRefreshMasterDetailData;  }
end;

procedure TfrmcSSFI704.btnNullifyClick(Sender: TObject);
var
  vReturnVal: Variant;
  ErrMsg: string;
  i: integer;
begin
  inherited;
  // vReturnVal回傳值：0-錯誤筆數 1-總筆數
{  vReturnVal := BatchClient.Run(VarArrayOf(['DISCARD',cdsMasterMI01X.AsString,FUserId,FUserGroup,FMF007,FMF005]));

  ErrMsg := '裝箱作業作廢完成，作業筆數 ' + vReturnVal[1] + ' ，錯誤筆數 ' +
             vReturnVal[0] + ' ，請查看Log';
  AddMemoMessage(ErrMsg);

  if  VarIsArray(vReturnVal[2]) then
  begin
    for i := 1 to VarArrayHighBound(vReturnVal[2],1) do
    begin
      AddMemoMessage(vReturnVal[2][i]);
    end;
  end;
  DoRefreshMasterDetailData;    }
end;

procedure TfrmcSSFI704.Timer2Timer(Sender: TObject);
begin
end;

//自動存檔測試

procedure TfrmcSSFI704.cdsMasterAfterPost(DataSet: TDataSet);
begin                           
  inherited;
  FLastTA01X := cdsMasterTA01X.AsString; // 記錄前一筆生產序號
  FLastTA005 := cdsMasterTA005.AsString; // 記錄前一筆製令單號
  FLastTA006 := cdsMasterTA006.AsString; // 記錄前一筆加工順序
  FLastTA007 := cdsMasterTA007.AsString; // 記錄前一筆製程代號
  FLastTA008 := cdsMasterTA008.AsString; // 記錄前一筆檢測點代號
  FLastTA009 := cdsMasterTA009.AsString; // 記錄前一筆檢測結果
  FLastTA011 := cdsMasterTA011.AsString; // 記錄前一筆維修點代號
  FLastTA015 := cdsMasterTA015.AsString; // 記錄前一筆維修註記
  cdsOp.First;
  FLastTA022 := cdsOp.FieldByName('MV001').AsString;//cdsMasterTA022.AsString; // 記錄前一筆員工代號
  FLastTA045 := cdsMasterTA045.AsString; // 記錄前一筆人數
  FLastTA018 := cdsMasterTA018.AsString; // 記錄前一筆批號
  FLastTA020 := cdsMasterTA020.AsString; // 記錄前一筆過站類別
  FLastTA003 := cdsMasterTA003.AsString; // 記錄前一筆過站日期
  FLastTA004 := cdsMasterTA004.AsString; // 記錄前一筆過站時間
//  FLastTA026   := cdsMasterTA026.AsString;     // 記錄前一筆裝箱號碼
//  FLastMF013   := cdsMasterMF013.AsString;     // 記錄前一筆每箱個數
//  FLastTA005C  := cdsMasterTA005C.AsString;    // 記錄前一筆批量
//  FLastTA005C2 := cdsMasterTA005C2.AsString;   // 記錄前一筆料號
//  FLastTA005C3 := cdsMasterTA005C3.AsString;   // 記錄前一筆名稱
//  FLastNW004   := cdsMasterNW004.AsString;     // 記錄前一筆列印時機

//  PidtTA005C1.Text:=GetPassQty(PidtTA005.Text,PidtTA007.Text);
end;

procedure TfrmcSSFI704.SetPage(page: string; actpage: integer); //設定頁面
begin
  if page = 'ActPage3' then
  begin
    PageControl3.ActivePageIndex := actPage;
    FActPage3 := actPage;
  end;
  if page = 'ActPage4' then
  begin
    PageControl4.ActivePageIndex := actPage;
    FActPage4 := actPage;
  end;
end;

procedure TfrmcSSFI704.AddMemo(wavtype: string; mes: string);
begin
  if WavType = 'OK' then
  begin
    PlaySound('OK.wav', 0, snd_Async);
    MemoLog.Color := clLime;
  end
  else if WavType = 'ERROR' then
  begin
    PlaySound('ERROR.wav', 0, snd_Async);
    MemoLog.Color := clRed;
  end
  else if WavType = 'FULL' then
  begin
    PlaySound('FULL.wav', 0, snd_Async);
    MemoLog.Color := clLime;
  end
  else if WavType = 'PRINT' then //印表時不發聲
    MemoLog.Color := clLime;
  MemoLog.Lines.Add('日期:' + GetNowDate + ' 時間:' + Formatdatetime('hh:mm:ss', now) + ' 訊息:' + mes);
end;

procedure TfrmcSSFI704.PnlClearDblClick(Sender: TObject);
begin
  inherited;
  //清除計數器的值
  FLastPASS := 0;
  cdsCounter.First;
  cdsCounter.Edit;
  cdsCounterPASSNUM.Value := FLastPASS;
  cdsCounter.Post;
end;

procedure TfrmcSSFI704.FSwitch; //根據行為切換頁面
begin
  //將所有 condition 關閉
  AcdsCondition.Close;
  BcdsCondition.Close;
  CcdsCondition.Close;
  DcdsCondition.Close;
  EcdsCondition.Close;
  FcdsCondition.Close;
  GcdsCondition.Close;
  HcdsCondition.Close;
  IcdsCondition.Close;
  JcdsCondition.Close;
  KcdsCondition.Close;
  FFull := False;
  if ((cdsMasterTA005.AsString = '') or (cdsMasterTA007.AsString = '') or (cdsMasterTA008.AsString = '') or (cdsMasterTA022.AsString = '') or (cdsMasterTA045.AsString = '') or (cdsMasterTA020.AsString = '')) then
  begin
    FrmProcess;
    Exit;
  end;

  if (FMA011 >= '26') and (FMA011 <= '29') then
    bbCloseBox.Visible := True
  else
    bbCloseBox.Visible := False;

  case StrtoInt(FMA011) of
    20: begin
        FrmPack;
        Exit;
      end;
    21: begin
        FrmPackWeight;
        Exit;
      end;
    22: begin
        FrmCombinePack;
        Exit;
      end;
    23: begin
        FrmCombinePackWeight;
        Exit;
      end;
    24: begin
        FrmPackBatch;
        Exit;
      end;
    25: begin
        FrmCombinePackBatch;
        Exit;
      end;
    26: begin
        FrmOnlinePack;
        Exit;
      end;
    27: begin
        FrmCombineOnlinePack;
        Exit;
      end;
    28: begin
        FrmOnlinePackWeight;
        Exit;
      end;
    29: begin
        FrmCombineOnlinePackWeight;
        Exit;
      end;
  else
    raise exception.Create('沒有對應的製程行為,請聯絡MIS人員 !!');
  end;
end;

procedure TfrmcSSFI704.FSaveSN; //存檔前檢查
begin
  //將所有 condition 關閉
  AcdsCondition.Close;
  BcdsCondition.Close;
  CcdsCondition.Close;
  DcdsCondition.Close;
  EcdsCondition.Close;
  FcdsCondition.Close;
  GcdsCondition.Close;
  HcdsCondition.Close;
  IcdsCondition.Close;
  JcdsCondition.Close;
  KcdsCondition.Close;
  if Finput then
  begin
    btnMasterSave.Click;
  end
  else
    btnMasterCancel.Click;
end;
//Connect:製程連結方式 1. 一般  3.被組合
//PassType:過站屬性 1.一般 2.自動過站
function TfrmcSSFI704.FCheckSN(SN: TinfoDBEdit; Process, Connect, PassType, MO: string): Boolean; //檢查序號的目前狀態
const
  //找出序號被包裝的箱號
  SQLstr = ' SELECT MR002 ' +
    '   FROM SSFMR (NOLOCK) ' +
    '  WHERE MR001 = ''%s'' ' +
    '    AND MR003 = ''%s'' ';
var
  vReturnVal: variant;
begin
  result := False;
  if SN.Text = '' then exit;
    //傳入序號+製程+連結方式+過站屬性 找出目前狀態
  CallServerMethod('sSSFPassV2', 'GetPassStatus', VarArrayOf([SN.text, Process, Connect, PassType, MO]), vReturnVal);
    // 判斷是否有錯誤
  if (vReturnVal[0]) then
  begin
    AddMemo('ERROR', vReturnVal[1]);
    SN.SelectAll;
    Exit;
  end;

  if (Connect = '1') then //如果要找的連結方式是一般或是組合
  begin
    begin
      if ((StrtoInt(FMA011) <> 26) and (StrtoInt(FMA011) <> 27) and (StrtoInt(FMA011) <> 28) and (StrtoInt(FMA011) <> 29)) then //非隨線裝箱的必需找出裝箱號碼
      begin
          //找出裝箱號碼(傳入製令,序號0
        with cdsQuery do
        begin
          Close;
          SQL.Clear;
          SQL.Add(format(SQLstr, [vReturnVal[2], SN.Text]));
          Open;
          if Eof then
          begin
            AddMemo('ERROR', '此序號找不到相對應的裝箱號碼,不可過站!!');
            SN.SelectAll;
            Exit;
          end
          else
          begin
            if RecordCount > 1 then
            begin
              AddMemo('ERROR', '此序號找到 1 筆以上相對應的裝箱號碼,不可過站!!');
              SN.SelectAll;
              Exit;
            end
            else
              cdsMasterTA026.Asstring := FieldByName('MR002').AsString;
          end;
        end;
      end;
    end;
  end;
  if Connect = '1' then
  begin
    cdsAppurtenance.Close;
    cdsAppurtenance.Open;
    if (cdsAppurtenance.RecordCount = 0) //無配件
      then result := True
    else begin                    //需刷配件 20220922
      frmcSSFI7045 := TfrmcSSFI7045.Create(nil);
      try
        frmcSSFI7045.Params := VarArrayOf([cdsAppurtenance.Data]);
        frmcSSFI7045.Showmodal;

        if (frmcSSFI7045.FAllowPass) then result := True
        else begin
          result := False;
          AddMemo('ERROR', '未完成配件/EX Label刷入，無法過站!!');
        end;
      finally
        frmcSSFI7045.Free;
      end;
    end;

    //BOX & REELID 綁定
    if infoReelid.Visible then
    begin
      //判斷是否為此箱最後一個序號
      if FCheckLastSN(SN.Text, PidtTA005.Text, PidtTA026.Text) then
      begin
        frmcSSFI7046 := TfrmcSSFI7046.Create(nil);
        sReelID := '';
        iQty    := 0 ;
        try
          frmcSSFI7046.sSN := SN.Text;
          frmcSSFI7046.sWO := PidtTA005.Text;
          frmcSSFI7046.sBox := PidtTA026.Text;
          frmcSSFI7046.Showmodal;

          if (frmcSSFI7046.bAllowPass) then
          begin
            sReelID := frmcSSFI7046.sReelId;
            iQty    := frmcSSFI7046.iQty;
            if sReelID <> '' then
            begin
              result := True;
              AddMemoMessage('['+FormatDateTime('YYYY/MM/DD HH:MM:SS',now)+ ']  REELID Check Pass ... ['+ sReelID + ']');
            end
            else 
            begin
              result := False;
              AddMemo('ERROR', '讀取不到REELID 請重新操作...');
            end;
          end
          else begin
            sReelID := '';
            result := False;
            AddMemo('ERROR', frmcSSFI7046.sErrMsg + ' 請重新操作...');
          end;
        finally
          frmcSSFI7046.Free;
        end;
      end;
    end;    
  end
  else result := True;
end;

procedure TfrmcSSFI704.btnMasterInsertClick(Sender: TObject);
begin
//  inherited;
//  dbgdView.Visible := False;
  cdsMaster.Insert;
  Finput := True;
  FOK := True;
  //執行過站
  FrmProcess;
end;

procedure TfrmcSSFI704.FrmProcess; //切換頁面到 輸入製程,員工代號....
var
  i: integer;
  sString: TStringList;
  vReturnVal: variant;
begin
  SetPage('ActPage3', 0);
  SetPage('ActPage4', 0);
  AcdsCondition.Close;
  AcdsCondition.Open;
  AcdsCondition.Insert;
  if cdsMasterTA005.AsString <> '' then
    AidtTA005.Text := cdsMasterTA005.AsString;
  if cdsMasterTA007.AsString <> '' then
    AidtTA007.Text := cdsMasterTA007.AsString;
  if cdsMasterTA022.AsString <> '' then
    AidtTA022.Text := cdsMasterTA022.AsString;
  if cdsMasterTA008.AsString <> '' then
    AidtTA008.Text := cdsMasterTA008.AsString;
  if cdsMasterTA045.AsString <> '' then
    AidtTA045.Text := cdsMasterTA045.AsString;
  if cdsMasterTA020.AsString <> '' then
    AidtTA020.Text := cdsMasterTA020.AsString;
  if cdsMasterTA018.AsString <> '' then
    idtTA018.Text := cdsMasterTA018.AsString;
  //判斷要輸入的值,將游標移到欄位上
  if (cdsMasterTA005.AsString = '') then
  begin
    APnlTA005.Visible := True;
    APnlTA007.Visible := False;
    APnlTA022.Visible := False;
    APnlTA008.Visible := False;
    APnlTA020.Visible := False;
    APnlTA003.Visible := False;
    APnlTA045.Visible := False;
    AidtTA005.SetFocus;
  end
  else if (cdsMasterTA007.AsString = '') then
  begin
    APnlTA005.Visible := False;
    APnlTA007.Visible := True;
    APnlTA022.Visible := False;
    APnlTA008.Visible := False;
    APnlTA020.Visible := False;
    APnlTA003.Visible := False;    
    APnlTA045.Visible := False;
    AidtTA007.SetFocus;
  end
  else if (cdsMasterTA022.AsString = '') then
  begin
    APnlTA005.Visible := False;
    APnlTA007.Visible := False;
    APnlTA022.Visible := True;
    APnlTA008.Visible := False;
    APnlTA020.Visible := False;
    APnlTA003.Visible := False;
    APnlTA045.Visible := False;
    AidtTA022.SetFocus;
  end
  else if (cdsMasterTA008.AsString = '') then
  begin
    APnlTA005.Visible := False;
    APnlTA007.Visible := False;
    APnlTA022.Visible := False;
    APnlTA008.Visible := True;
    APnlTA020.Visible := False;
    APnlTA003.Visible := False;
    APnlTA045.Visible := False;
    AidtTA008.SetFocus;
  end
  else if (cdsMasterTA020.AsString = '') then
  begin
    APnlTA005.Visible := False;
    APnlTA007.Visible := False;
    APnlTA022.Visible := False;
    APnlTA008.Visible := False;
    APnlTA020.Visible := True;
    APnlTA003.Visible := False;
    APnlTA045.Visible := False;
    AidtTA020.Enabled := True;
    AidtTA020.SetFocus;
  end
  else if (cdsMasterTA045.AsString = '') then
  begin
    APnlTA005.Visible := False;
    APnlTA007.Visible := False;
    APnlTA022.Visible := False;
    APnlTA008.Visible := False;
    APnlTA020.Visible := False;
    APnlTA003.Visible := False;    
    APnlTA045.Visible := True;
    AidtTA045.SetFocus;
  end
  else
    AbbConfirmClick(nil);
end;

procedure TfrmcSSFI704.FrmPack; //裝箱
begin
  SetPage('ActPage3', 1);
  SetPage('ActPage4', 1);
  BcdsCondition.Close;
  BcdsCondition.Open;
  BcdsCondition.Insert;

  BPnlTA01X.Visible := True;
  BidtTA01X.SetFocus;
end;

procedure TfrmcSSFI704.FrmPackWeight; //裝箱->秤重
begin
  SetPage('ActPage3', 2);
  SetPage('ActPage4', 1);
  CcdsCondition.Close;
  CcdsCondition.Open;
  CcdsCondition.Insert;

  CPnlTA01X.Visible := True;
  CPnlTA027.Visible := False;
  CidtTA01X.SetFocus;
end;

procedure TfrmcSSFI704.FrmCombinePack; //組合->裝箱
begin
  SetPage('ActPage3', 3);
  SetPage('ActPage4', 1);
  DcdsCondition.Close;
  DcdsCondition.Open;
  DcdsCondition.Insert;
  DcdsCombine.Close;
  DcdsCombine.Open;
  DcdsSerial.Close;
  DcdsSerial.Open;
  DdbgdPnl.Height := 150;

  //依照被組合的料號數量顯示被組合數量
  DcdsConditionTA000.AsString := IntToStr(GetCombineCount(PidtTA005.text, PidtTA007.text));

  //2012/03/08
  if (DcdsConditionTA000.AsString = '0') then
  begin
    AddMemo('ERROR', '組合數量不可為0 ,表示此製令製程沒有完成設定,請聯絡SFIS 管理人員!!');
    DPnlTB003.Visible := False;
    DPnlTA01X.Visible := False;
    DdbgdTB003.Color := clWhite;
    DdbgdTA001.Color := clWhite;
    Exit;
  end
  else
  //判斷要輸入的值,將游標移到欄位上
  begin
    DPnlTB003.Visible := False;
    DPnlTA01X.Visible := True;
    DidtTA01X.SetFocus;
    //顯示被組合grid顏色為綠色
    DdbgdTB003.Color := clLime;
    DdbgdTA001.Color := clWhite;
  end;

end;

procedure TfrmcSSFI704.FrmCombinePackWeight; //組合->裝箱->秤重
begin
  SetPage('ActPage3', 4);
  SetPage('ActPage4', 1);
  EcdsCondition.Close;
  EcdsCondition.Open;
  EcdsCondition.Insert;
  EcdsCombine.Close;
  EcdsCombine.Open;
  EdbgdTB003.Height := 90;

  if FLastFTA000 <> 0 then
  begin
    EcdsConditionTA000.AsString := IntToStr(FLastFTA000);
    EPnlTB003.Visible := True;
    EPnlTA01X.Visible := False;
    EPnlTA027.Visible := False;
    EidtTB003.SetFocus;
  end
  else
  begin
    FLastFTA000 := GetCombineCount(PidtTA005.text, PidtTA007.text);
    EcdsConditionTA000.AsString := IntToStr(FLastFTA000);
    if FLastFTA000 <> 0 then
    begin
      EPnlTB003.Visible := True;
      EPnlTA01X.Visible := False;
      EPnlTA027.Visible := False;
      EidtTB003.SetFocus;
    end
    else
    begin
      EPnlTB003.Visible := False;
      EPnlTA01X.Visible := True;
      EPnlTA027.Visible := False;
      EidtTA01X.SetFocus;
    end;
  end;
end;

procedure TfrmcSSFI704.FrmPackBatch; //裝箱批過
begin
  SetPage('ActPage3', 5);
  SetPage('ActPage4', 1);
  FcdsCondition.Close;
  FcdsCondition.Open;
  FcdsCondition.Insert;

  FPnlTA01X1.Visible := True;
  FPnlTA01X2.Visible := False;
  FidtTA01X1.SetFocus;
end;

procedure TfrmcSSFI704.FrmCombinePackBatch; //組合->裝箱批過
begin
  SetPage('ActPage3', 6);
  SetPage('ActPage4', 1);
  GcdsCondition.Close;
  GcdsCondition.Open;
  GcdsCondition.Insert;
//  GcdsCombine.Close;
//  GcdsCombine.Open;
//  GdbgdTB003.Height := 90;

{  if FLastFTA000 <> 0 then
  begin
    DcdsConditionTA000.AsString := IntToStr(FLastFTA000);
    DPnlTB003.Visible := True;
    DPnlTA01X.Visible := False;
    DidtTB003.SetFocus;
  end
  else
  begin
    DPnlTB003.Visible := False;
    DPnlTA01X.Visible := False;
    DidtTA000.SetFocus;
  end;
 }
  GPnlTA01X1.Visible := True;
  GPnlTA01X2.Visible := False;
  GidtTA01X1.SetFocus;
end;

procedure TfrmcSSFI704.FrmOnlinePack; //隨線裝箱
begin
  SetPage('ActPage3', 7);
  SetPage('ActPage4', 1);
  HcdsCondition.Close;
  HcdsCondition.Open;
  HcdsCondition.Insert;

  HPnlTA01X.Visible := True;
  HidtTA01X.SetFocus;


end;

procedure TfrmcSSFI704.FrmCombineOnlinePack; //組合+隨線裝箱
begin
  SetPage('ActPage3', 8);
  SetPage('ActPage4', 1);
  IcdsCondition.Close;
  IcdsCondition.Open;
  IcdsCondition.Insert;
  IcdsCombine.Close;
  IcdsCombine.Open;
  IcdsSerial.Close;
  IcdsSerial.Open;
  IdbgdPnl.Height := 150;


  //依照被組合的料號數量顯示被組合數量
  IcdsConditionTA000.AsString := IntToStr(GetCombineCount(PidtTA005.text, PidtTA007.text));

  //2012/03/08
  if (IcdsConditionTA000.AsString = '0') then
  begin
    AddMemo('ERROR', '組合數量不可為0 ,表示此製令製程沒有完成設定,請聯絡SFIS 管理人員!!');
    IPnlTB003.Visible := False;
    IPnlTA01X.Visible := False;
    IdbgdTB003.Color := clWhite;
    IdbgdTA001.Color := clWhite;
    Exit;
  end
  else
  //判斷要輸入的值,將游標移到欄位上
  begin
    IPnlTB003.Visible := False;
    IPnlTA01X.Visible := True;
    IidtTA01X.SetFocus;
    //顯示被組合grid顏色為綠色
    IdbgdTB003.Color := clLime;
    IdbgdTA001.Color := clWhite;
  end;

end;

procedure TfrmcSSFI704.FrmOnlinePackWeight; //隨線裝箱+秤重
begin
  SetPage('ActPage3', 9);
  SetPage('ActPage4', 1);
  JcdsCondition.Close;
  JcdsCondition.Open;
  JcdsCondition.Insert;
  JPnlTA01X.Visible := True;
  JPnlTA027.Visible := False;
  JidtTA01X.SetFocus;

end;

procedure TfrmcSSFI704.FrmCombineOnlinePackWeight; //組合+隨線裝箱+秤重
begin
  SetPage('ActPage3', 10);
  SetPage('ActPage4', 1);
  KcdsCondition.Close;
  KcdsCondition.Open;
  KcdsCondition.Insert;
  KcdsCombine.Close;
  KcdsCombine.Open;
  KcdsSerial.Close;
  KcdsSerial.Open;
  KdbgdPnl.Height := 150;


  //依照被組合的料號數量顯示被組合數量
  KcdsConditionTA000.AsString := IntToStr(GetCombineCount(PidtTA005.text, PidtTA007.text));

  //2012/03/08
  if (KcdsConditionTA000.AsString = '0') then
  begin
    AddMemo('ERROR', '組合數量不可為0 ,表示此製令製程沒有完成設定,請聯絡SFIS 管理人員!!');
    KPnlTB003.Visible := False;
    KPnlTA01X.Visible := False;
    KPnlTA027.Visible := False;
    KdbgdTB003.Color := clWhite;
    KdbgdTA001.Color := clWhite;
    Exit;
  end
  else
  //判斷要輸入的值,將游標移到欄位上
  begin
    KPnlTB003.Visible := False;
    KPnlTA01X.Visible := True;
    KPnlTA027.Visible := False;
    KidtTA01X.SetFocus;
    //顯示被組合grid顏色為綠色
    KdbgdTB003.Color := clLime;
    KdbgdTA001.Color := clWhite;
  end;
end;


procedure TfrmcSSFI704.AidtTA007ButtonClick(Sender: TObject);
const
  //只有挑出裝箱類的製程
  SQLfmt = ' SELECT MA001,MA002 FROM SSFMA (NOLOCK) ' +
    ' WHERE MA009 = ''2'' ' +
    ' ORDER BY MA001';
begin
  inherited;
  if not EditShowQueryForm(Sender, SQLfmt) then Exit;
end;

procedure TfrmcSSFI704.AidtTA007KeyUp(Sender: TObject; var Key: Word;
  Shift: TShiftState);
var
  vReturnVal: variant;
begin
  inherited;
  if Key = VK_RETURN then
  begin
    if trim(AidtTA007.Text) = '' then exit;
    //找裝箱製程
    CallServerMethod('sSSFmethod', 'GetSSFMA', VarArrayOf([AidtTA007.Text, '2']), vReturnVal);
    // 判斷是否存在
    if (vReturnVal[0]) then
    begin
//      FMA001 := vReturnVal[1];
//      FMA002 := vReturnVal[2];
//      FMA004 := vReturnVal[3];
//      FMA009 := vReturnVal[6];
//      FMA010 := vReturnVal[7];
      FMA011 := vReturnVal[8]; //製程行為
//      FMA012 := vReturnVal[9]; //對應自動過站製程
//      FMA014 := vReturnVal[11];
    end
    else
    begin
      AddMemo('ERROR', '裝箱製程代號不存在!!');
      AidtTA007.SelectAll;
      Exit;
    end;
    //找製令製程存在否
    CallServerMethod('sSSFmethod', 'GetSSFMG', VarArrayOf([AidtTA005.Text, AidtTA007.Text]), vReturnVal);
    if not vReturnVal[0] then
    begin
      AddMemo('ERROR', '製令:' + AidtTA005.Text + ' 沒有此製程存在!!');
      AidtTA007.SelectAll;
      Exit;
    end;

    if (FCheckProp(AidtTA005.Text, AidtTA007.Text)) then
    begin

//    PidtTA006.Text    := vReturnVal[2];
//    PidtTA005C1.Text  := GetPassQty(PidtTA005.Text,PidtTA007.Text);

      cdsMaster.Edit;
      cdsMasterTA006.Text := vReturnVal[2];
      with InPrintData do
      begin
        Close;
        SQL.Clear;
        SQL.Add('SELECT TA005,TA007 FROM SSFTA(NOLOCK) WHERE 1=0');
        Open;
        Insert;
        FieldByName('TA005').AsString := AidtTA005.Text;
        FieldByName('TA007').AsString := AidtTA007.Text;
        Post;
      end;
      CallServerMethod('sPrintMethod', 'getPrintParams', VarArrayOf([InPrintData.Data]), vReturnVal);
    // 判斷是否有錯誤
      if (vReturnVal[0]) then
      begin
        OutPrintData.Data := vReturnVal[2];
        FLastNW004 := OutPrintData.FieldByName('NW004').AsString;
      end;

      APnlTA005.Visible := False;
      APnlTA007.Visible := False;
      APnlTA022.Visible := True;
      APnlTA008.Visible := False;
      APnlTA020.Visible := False;
      APnlTA003.Visible := False;    
      APnlTA045.Visible := False;
      AidtTA022.SetFocus;
    end
    else
    begin
      suiButton2Click(nil);
      AddMemo('ERROR', '客製屬性有問題請洽工業工程人員!!');
    end;

  end;
end;

procedure TfrmcSSFI704.AidtTA022KeyUp(Sender: TObject; var Key: Word;
  Shift: TShiftState);
var
  vReturnVal: variant;
begin
  inherited;
  if Key = VK_RETURN then
  begin
    if trim(AidtTA022.Text) = '' then exit;
    //找員工代號
    CallServerMethod('sSSFmethod', 'GetCMSMV', VarArrayOf([AidtTA022.Text]), vReturnVal);
    if not vReturnVal[0] then
    begin
      AddMemo('ERROR', '員工代號不存在!!');
      AidtTA022.SelectAll;
      Exit;
    end;
    

    cdsOp.close;
    cdsOp.open;
    cdsOp.append;
    cdsOp.FieldByName('MV001').AsString := vReturnVal[1];
    cdsOp.FieldByName('MV002').AsString := vReturnVal[2];
    cdsOp.Post;

    APnlTA005.Visible := False;
    APnlTA007.Visible := False;
    APnlTA022.Visible := False;
    APnlTA008.Visible := True;
    APnlTA020.Visible := False;
    APnlTA003.Visible := False;   
    APnlTA045.Visible := False;
    AidtTA008.SetFocus;
  end;
end;

procedure TfrmcSSFI704.AbbConfirmClick(Sender: TObject);
begin
  inherited;
  if (cdsMasterTA005.AsString = '') and
    (trim(AidtTA005.Text) = '') then
  begin
    AidtTA005.SetFocus;
    AddMemo('ERROR', '製令單號必須輸入!!');
    Abort;
  end;
  if (cdsMasterTA007.AsString = '') and
    (trim(AidtTA007.Text) = '') then
  begin
    AidtTA007.SetFocus;
    AddMemo('ERROR', '製程代號必須輸入!!');
    Abort;
  end;
  if (cdsMasterTA022.AsString = '') and
    (trim(AidtTA022.Text) = '') then
  begin
    AidtTA022.SetFocus;
    AddMemo('ERROR', '員工代號必須輸入!!');
    Abort;
  end;
  if (cdsMasterTA008.AsString = '') and
    (trim(AidtTA008.Text) = '') then
  begin
    AidtTA008.SetFocus;
    AddMemo('ERROR', '工作站代號必須輸入!!');
    Abort;
  end;
  if (cdsMasterTA045.AsString = '') and
    (trim(AidtTA045.Text) = '') then
  begin
    AidtTA045.SetFocus;
    AddMemo('ERROR', '人數必須輸入!!');
    Abort;
  end;

  if (cdsMasterTA005.AsString = '') then
    cdsMasterTA005.Asstring := AcdsConditionTA005.AsString;
  if (cdsMasterTA022.AsString = '') then
    cdsMasterTA022.Asstring := AcdsConditionTA022.AsString;
  if (cdsMasterTA007.AsString = '') then
    cdsMasterTA007.Asstring := AcdsConditionTA007.AsString;
  if (cdsMasterTA008.AsString = '') then
    cdsMasterTA008.Asstring := AcdsConditionTA008.AsString;
  if (cdsMasterTA045.AsString = '') then
    cdsMasterTA045.Asstring := AcdsConditionTA045.AsString;
  SetTA005Caption(AidtTA005.Text);
  cdsMasterNW004.Text := FlastNW004;
  cdsMasterTA005C1.Text := GetPassQty(AidtTA005.Text, AidtTA007.Text);

  //call 製程對應的行為模式procedure
  FSwitch;
  
  //帶出預設的 標籤檔案 (路徑+檔名)
  if Trim(BarcodeTempleFile.Text) = '' then
    BarcodeTempleFile.Text := GetLabelFile(cdsMasterTA005.AsString, cdsMasterTA007.AsString);

  //帶出預設的 列印張數
  if idtPrintCount.Text = '0' then
    idtPrintCount.Text := GetLabelNum(cdsMasterTA005.AsString, cdsMasterTA007.AsString);
            
  infoReelid.Visible := IsBoxReelIDCombine;

end;

procedure TfrmcSSFI704.BidtTA01XKeyUp(Sender: TObject; var Key: Word;
  Shift: TShiftState);
begin
  inherited;
  if Key = VK_RETURN then
  begin
    if trim(BidtTA01X.Text) = '' then Exit;
    //20070303 增加檢查限制完成數不能超過批量+總放行數量 功能
    if not FCheckExceed(BidtTA01X, PidtTA005.Text, PidtTA007.Text) then Exit;
    //傳入序號+製程+連結方式+過站屬性找出目前狀態
    if not FCheckSN(BidtTA01X, PidtTA007.Text, '1', '1', PidtTA005.Text) then Exit;

    BcdsCondition.Post;
    FPrintSeq := BidtTA01X.Text;
    BbbConfirmClick(sender);
  end;
end;

procedure TfrmcSSFI704.BbbConfirmClick(Sender: TObject);
begin
  inherited;
  if trim(BidtTA01X.Text) = '' then
  begin
    raise Exception.Create('生產序號必須輸入!!');
    abort;
  end;
  cdsMasterTA01X.Asstring := BcdsConditionTA01X.AsString;

  //call 存檔前檢查
  FSaveSN;
end;

procedure TfrmcSSFI704.pmnGridClick(Sender: TObject);
begin
//  inherited;
  dbgdView.Visible := not dbgdView.Visible;
end;

procedure TfrmcSSFI704.btnMasterQueryClick(Sender: TObject);
begin
  inherited;
  with cdsMaster do
  begin
    FieldByName('TA003').Value := GetNowDate;
    FieldByName('TA007').AsString := FLastTA007; // 製程代號
    FieldByName('TA011').AsString := FLastTA011; // 維修點代號
    FieldByName('TA022').AsString := FLastTA022; // 員工代號
    FieldByName('TA020').Value := FLastTA020;//'P'; // 單板過站
    FieldByName('TA018').Value := FLastTA018;
    FieldByName('TA045').AsString := FLastTA045; // 人數
    FieldByName('TA039').AsString := FProgramName + ' ' + StatusBar.Panels[3].Text;
    FieldByName('TA047').AsString := FComputerName + '@@'+ FMAC;
    FieldByName('TA048').AsString := FIP;
  end;
end;

procedure TfrmcSSFI704.FormKeyDown(Sender: TObject; var Key: Word;
  Shift: TShiftState);
begin
  inherited;
  if Key = VK_ESCAPE then
  begin
    if ((blpMaster.State = 'Insert')) then
    begin
      FSwitch;
      AddMemo('ERROR', 'Reset 鍵已觸發!!');
    end;
  end;
end;

procedure TfrmcSSFI704.cdsBox1BeforeOpen(DataSet: TDataSet);
begin
  inherited;
  cdsBox1.Params.ParamByName('MQ001').AsString := cdsMasterTA005.AsString;
end;

procedure TfrmcSSFI704.cdsBox2BeforeOpen(DataSet: TDataSet);
begin
  inherited;
//  cdsBox2.Params.ParamByName('MR001').AsString := cdsBox1MQ001.AsString;
//  cdsBox2.Params.ParamByName('MR002').AsString := cdsBox1MQ002.AsString;
  cdsBox2.Params.ParamByName('MR001').AsString := cdsMasterTA005.AsString;
  cdsBox2.Params.ParamByName('MR002').AsString := cdsMasterTA026.AsString;
end;

procedure TfrmcSSFI704.cdsBox1AfterScroll(DataSet: TDataSet);
begin
  inherited;
  if not cdsBox1.eof then
  begin
    cdsBox2.Close;
    cdsBox2.Open;
  end;
end;

procedure TfrmcSSFI704.cdsMasterTA026Change(Sender: TField);
begin
  inherited;
  if not ((blpMaster.State = 'Edit') or (blpMaster.State = 'Insert')) then Exit;
  if trim(Sender.Asstring) = '' then Exit;
  cdsBox1.Close;
  cdsBox1.Open;
  cdsBox2.Close;
  cdsBox2.Open;
//  cdsBox1.Locate('MQ002',VARARRAYOF([cdsMasterTA026.AsString]),[loCaseInsensitive]);
end;

procedure TfrmcSSFI704.CidtTA01XKeyUp(Sender: TObject; var Key: Word;
  Shift: TShiftState);
begin
  inherited;
  if Key = VK_RETURN then
  begin
    if trim(CidtTA01X.Text) = '' then Exit;
    //20070303 增加檢查限制完成數不能超過批量+總放行數量 功能
    if not FCheckExceed(CidtTA01X, PidtTA005.Text, PidtTA007.Text) then Exit;
    //傳入序號+製程+連結方式+過站屬性找出目前狀態
    if not FCheckSN(CidtTA01X, PidtTA007.Text, '1', '1', PidtTA005.Text) then Exit;
    //判斷是否是此箱最後一件
    //if FCheckLastSN(CidtTA01X.Text, cdsMasterTA005.AsString, cdsMasterTA026.AsString) then
    //begin
    CpnlTA01X.Visible := False;
    CpnlTA027.Visible := True;
    CidtTA027.SetFocus;
    BField := CidtTA027;
     //開啟 COM port ,讀取秤重值
    BWeightStartClick(Sender);
    //end
    //else
    //begin
      //CcdsCondition.Post;
    FPrintSeq := CidtTA01X.Text;
      //CbbConfirmClick(sender);
    //end;
  end;
end;

procedure TfrmcSSFI704.CidtTA027KeyUp(Sender: TObject; var Key: Word;
  Shift: TShiftState);
var
  fweight: double;
  Msg: string;
begin
  inherited;
  if Key = VK_RETURN then
  begin
    if trim(CidtTA027.Text) = '' then Exit;
    try                         
      strtofloat(CidtTA027.Text);
    except
      begin
        AddMemo('ERROR', '請輸入數字!!');
        CidtTA027.SelectAll;
        Exit;
      end;
    end;
    fweight := strtofloat(Cidtta027.text);
    if not CheckWeightRange(PidtTA005.Text, fweight, Msg) then
    begin
      AddMemo('ERROR', Msg);
      CidtTA027.SelectAll;
      BWrite := True;
      Exit;
    end;

    BWeightStopClick(Sender);

    CcdsCondition.Post;
    CbbConfirmClick(sender);
  end;
end;

procedure TfrmcSSFI704.CbbConfirmClick(Sender: TObject);
begin
  inherited;
  if trim(CidtTA01X.Text) = '' then
  begin
    raise Exception.Create('生產序號必須輸入!!');
    abort;
  end;
  cdsMasterTA01X.Asstring := CcdsConditionTA01X.AsString;
  cdsMasterTA027.Asstring := CcdsConditionTA027.AsString;
  cdsMasterTA037.Asstring := CcdsConditionTA037.AsString;
  cdsMasterTA038.Asstring := CcdsConditionTA038.AsString;
  cdsMasterTA049.Asstring := CcdsConditionTA049.AsString;
  //call 存檔前檢查
  FSaveSN;
end;

function TfrmcSSFI704.FCheckLastSN(FTA01X, FTA005, FTA026: string): Boolean; //檢查是否為此箱最後的序號
const
  //找出是否為此箱最後的序號
  SQLstr = ' SELECT MR002 ' +
    '   FROM SSFMR (NOLOCK) ' +
    '  WHERE MR001 = ''%s'' ' +
    '    AND MR002 = ''%s'' ' +
    '    AND MR003 <> ''%s'' ' +
    '    AND ISNULL(MR004,'''') = '''' ';
begin
  result := False;
  with cdsQuery do
  begin
    Close;
    SQL.Clear;
    SQL.Add(format(SQLstr, [FTA005, FTA026, FTA01X]));
    Open;
    if not Eof then //表示不是最後一件
      Exit;
  end;
  result := True;
end;

function TfrmcSSFI704.FCheckFull(FTA005, FTA026, FMF013: string): Boolean; //檢查是否滿箱
const
  //找出此箱是否滿箱
  SQLstr = ' SELECT COUNT(*) CNT ' +
    '   FROM SSFMR (NOLOCK) ' +
    '  WHERE MR001 = ''%s'' ' +
    '    AND MR002 = ''%s'' ' +
    '    AND ISNULL(MR004,'''') <> '''' ';
begin
  result := False;
  with cdsQuery do
  begin
    Close;
    SQL.Clear;
    SQL.Add(format(SQLstr, [FTA005, FTA026]));
    Open;
    if (FieldByName('CNT').AsString <> FMF013) then // 表示不滿箱
      Exit;
  end;
  result := True;
end;


procedure TfrmcSSFI704.DidtTA000KeyUp(Sender: TObject; var Key: Word;
  Shift: TShiftState);
begin
  inherited;
  if Key = VK_RETURN then
  begin
    if (trim(DidtTA000.Text) = '') or (trim(DidtTA000.Text) = '0') then exit;
    try
      strtoint(DidtTA000.Text);
    except
      begin
        AddMemo('ERROR', '請輸入數字!!');
        DidtTA000.SelectAll;
        Exit;
      end;
    end;
    DPnlTB003.Visible := True;
    DPnlTA01X.Visible := False;
    DidtTB003.SetFocus;
  end;
end;

procedure TfrmcSSFI704.DidtTB003KeyUp(Sender: TObject; var Key: Word;
  Shift: TShiftState);
begin
  inherited;
  if Key = VK_RETURN then
  begin
    if trim(DidtTB003.Text) = '' then exit;
    if DcdsCombine.Locate('TB003', DidtTB003.Text, [loCaseInsensitive]) then
    begin
      AddMemo('ERROR', '被組合的序號不可相同!!');
      Exit;
    end;
    //傳入序號+製程+連結方式+過站屬性找出目前狀態(找被組合)
    if not FCheckSN(DidtTB003, PidtTA007.Text, '3', '1', PidtTA005.Text) then Exit;

    DcdsCombine.Append;
    DcdsCombineTB003.AsString := DidtTB003.Text;
    DcdsCombine.Post;
    if DcdsCombine.RecordCount < StrToInt(DidtTA000.Text) then
    begin
      DidtTB003.Text := '';
      Exit;
    end;
    DPnlTB003.Visible := False;
    DPnlTA01X.Visible := True;
    DidtTA01X.SetFocus;
  end;
end;

procedure TfrmcSSFI704.DidtTA01XKeyUp(Sender: TObject; var Key: Word;
  Shift: TShiftState);
var
  FPart: string;
begin
  inherited;
  if Key = VK_RETURN then
  begin
    if trim(DidtTA01X.Text) = '' then exit;
    //20070303 增加檢查限制完成數不能超過批量+總放行數量 功能
    if not FCheckExceed(DidtTA01X, PidtTA005.Text, PidtTA007.Text) then Exit;

//    FPart := GetSerialPart(DidtTA01X.Text);

    if not (DIsCompleteInput('combine')) then //如果被組合還沒有完成,則檢查被組合

    //判斷序號屬於被組合還是組合後
//    if (IsCombined(DidtTA01X.Text,PidtTA005.Text,PidtTA007.Text)) then   // 如果是被組合的序號
    begin
      //傳入序號+製程+連結方式+過站屬性找出目前狀態
      if not FCheckSN(DidtTA01X, PidtTA007.Text, '3', '1', PidtTA005.Text) then Exit;
      FPart := GetSerialPart(DidtTA01X.Text);       
      if not DcdsCombine.Locate('NM003', VarArrayOf([FPart]), [loCaseInsensitive]) then 
        FPart := GetAlternativePart(FPart,DidtTA01X.Text,'3');
      //先找是否有重複資料
      if DcdsCombine.Locate('NM003;TB003', VarArrayOf([FPart, DidtTA01X.Text]), [loCaseInsensitive]) then
      begin
        if (DcdsCombine.FieldByName('TB003').AsString <> '') then
        begin
          AddMemo('ERROR', '此料號:' + FPart + ' 序號:' + DidtTA01X.Text + ' 已有輸入序號,不可重複輸入!!');
        end
      end
      //再找有否符合料號且序號尚未輸入
      else if DcdsCombine.Locate('NM003;TB003', VarArrayOf([FPart, '']), [loCaseInsensitive]) then
      begin
        if (DcdsCombine.FieldByName('TB003').AsString <> '') then
        begin
          AddMemo('ERROR', '此料號:' + FPart + ' 已有輸入序號,不可重複輸入!!');
        end
        else
        begin
          DcdsCombine.Edit;
          DcdsCombine.FieldByName('TB003').AsString := DidtTA01X.Text;
          DcdsCombine.Post;
        end;
      end
      //通通找不到,表示此料號都有輸入序號
      else
        AddMemo('ERROR', '此料號:' + FPart + ' 已完成序號輸入,不可重複輸入!!');
    end
//    else if not (DIsCompleteInput('combine')) then  //先判斷是否被組合序號都已經輸入完成
//    begin
//       AddMemo('ERROR','請先輸入所有的被組合序號才能輸入組合後序號!!');
//    end
    else //序號是組合後的序號
    begin
      //傳入序號+製程+連結方式+過站屬性找出目前狀態
      if not FCheckSN(DidtTA01X, PidtTA007.Text, '1', '1', PidtTA005.Text) then Exit;
      FPart := GetSerialPart(DidtTA01X.Text);
      if not DcdsSerial.Locate('MG018', FPart, [loCaseInsensitive])  then 
        FPart := GetAlternativePart(FPart,DidtTA01X.Text,'1');
      if DcdsSerial.Locate('MG018', FPart, [loCaseInsensitive]) then
      begin
        if (DcdsSerial.FieldByName('TA001').AsString <> '') then
        begin
          AddMemo('ERROR', '此料號:' + FPart + ' 已有輸入序號,不可重複輸入!!');
        end
        else
        begin
          DcdsSerial.Edit;
          DcdsSerial.FieldByName('TA001').AsString := DidtTA01X.Text;
          DcdsSerial.Post;
        end;
      end;
      FPrintSeq := DidtTA01X.Text;
    end;
    //判斷是否要換色
    if (DIsCompleteInput('combine')) then
    begin
      DdbgdTB003.Color := clWhite;
      DdbgdTA001.Color := clLime;
    end;

    //判斷是否所有的組合及被組合都有序號
    if (DIsCompleteInput('all')) then
    begin
      DcdsCondition.Post;
      DbbConfirmClick(sender);
    end;
//    DidtTA01X.SelectAll;
    DidtTA01X.Clear;
  end;
end;

procedure TfrmcSSFI704.DbbConfirmClick(Sender: TObject);
begin
  inherited;
  if trim(DidtTA01X.Text) = '' then
  begin
    raise Exception.Create('生產序號必須輸入!!');
    abort;
  end;


  cdsMasterTA01X.Asstring := DcdsConditionTA01X.AsString;

  begin
    //取得DcdsSerial 的序號為組合後序號
    cdsMasterTA01X.Asstring := DcdsSerialTA001.AsString;

    DcdsCombine.First;
    while not DcdsCombine.Eof do
    begin
      cdsDetail.Append;
      cdsDetailTB003.AsString := DcdsCombineTB003.AsString;
      cdsDetail.Post;
      DcdsCombine.Next;
    end;
  end;

  //call 存檔前檢查
  FSaveSN;

end;

procedure TfrmcSSFI704.EidtTA000KeyUp(Sender: TObject; var Key: Word;
  Shift: TShiftState);
begin
  inherited;
  if Key = VK_RETURN then
  begin
    if (trim(EidtTA000.Text) = '') or (trim(EidtTA000.Text) = '0') then exit;
    try
      strtoint(EidtTA000.Text);
    except
      begin
        AddMemo('ERROR', '請輸入數字!!');
        EidtTA000.SelectAll;
        Exit;
      end;
    end;
    EPnlTB003.Visible := True;
    EPnlTA01X.Visible := False;
    EPnlTA027.Visible := False;
    EidtTB003.SetFocus;
  end;
end;

procedure TfrmcSSFI704.EidtTB003KeyUp(Sender: TObject; var Key: Word;
  Shift: TShiftState);
begin
  inherited;
  if Key = VK_RETURN then
  begin
    if trim(EidtTB003.Text) = '' then exit;
    if EcdsCombine.Locate('TB003', EidtTB003.Text, [loCaseInsensitive]) then
    begin
      AddMemo('ERROR', '被組合的序號不可相同!!');
      Exit;
    end;
    //傳入序號+製程+連結方式+過站屬性找出目前狀態(找被組合)
    if not FCheckSN(EidtTB003, PidtTA007.Text, '3', '1', PidtTA005.Text) then Exit;

    EcdsCombine.Append;
    EcdsCombineTB003.AsString := EidtTB003.Text;
    EcdsCombine.Post;
    if EcdsCombine.RecordCount < StrToInt(EidtTA000.Text) then
    begin
      EidtTB003.Text := '';
      Exit;
    end;
    EPnlTB003.Visible := False;
    EPnlTA01X.Visible := True;
    EPnlTA027.Visible := False;
    EidtTA01X.SetFocus;
  end;
end;

procedure TfrmcSSFI704.EidtTA01XKeyUp(Sender: TObject; var Key: Word;
  Shift: TShiftState);
begin
  inherited;
  if Key = VK_RETURN then
  begin
    if trim(EidtTA01X.Text) = '' then Exit;
    //20070303 增加檢查限制完成數不能超過批量+總放行數量 功能
    if not FCheckExceed(EidtTA01X, PidtTA005.Text, PidtTA007.Text) then Exit;
    //傳入序號+製程+連結方式+過站屬性找出目前狀態
    if not FCheckSN(EidtTA01X, PidtTA007.Text, '1', '1', PidtTA005.Text) then Exit;
    //判斷是否是此箱最後一件
    //if FCheckLastSN(EidtTA01X.Text, cdsMasterTA005.AsString, cdsMasterTA026.AsString) then
    //begin
    EPnlTB003.Visible := False;
    EpnlTA01X.Visible := False;
    EpnlTA027.Visible := True;
    EidtTA027.SetFocus;
    BField := EidtTA027;
     //開啟 COM port ,讀取秤重值
    BWeightStartClick(Sender);
    //end
    //else
    //begin
      //EcdsCondition.Post;
    FPrintSeq := EidtTA01X.Text;
      //EbbConfirmClick(sender);
    //end;
  end;
end;

procedure TfrmcSSFI704.EidtTA027KeyUp(Sender: TObject; var Key: Word;
  Shift: TShiftState);
var
  fweight: double;
  Msg: string;
begin
  inherited;
  if Key = VK_RETURN then
  begin
    if trim(EidtTA027.Text) = '' then Exit;
    try
      strtofloat(EidtTA027.Text);
    except
      begin
        AddMemo('ERROR', '請輸入數字!!');
        EidtTA027.SelectAll;
        Exit;
      end;
    end;
    fweight := strtofloat(eidtta027.text);
    if not CheckWeightRange(PidtTA005.Text, fweight, Msg) then
    begin
      AddMemo('ERROR', Msg);
      EidtTA027.SelectAll;
      BWrite := True;
      Exit;
    end;

    BWeightStopClick(Sender);

    EcdsCondition.Post;
    EbbConfirmClick(sender);
  end;
end;

procedure TfrmcSSFI704.EbbConfirmClick(Sender: TObject);
begin
  inherited;
  if trim(EidtTA01X.Text) = '' then
  begin
    raise Exception.Create('生產序號必須輸入!!');
    abort;
  end;

  FLastFTA000 := StrtoInt(EidtTA000.Text);

  cdsMasterTA01X.Asstring := EcdsConditionTA01X.AsString;
  cdsMasterTA027.Asstring := EcdsConditionTA027.AsString;
  cdsMasterTA037.Asstring := EcdsConditionTA037.AsString;
  cdsMasterTA038.Asstring := EcdsConditionTA038.AsString;
  cdsMasterTA049.Asstring := EcdsConditionTA049.AsString;
  EcdsCombine.First;
  while not EcdsCombine.Eof do
  begin
    cdsDetail.Append;
    cdsDetailTB003.AsString := EcdsCombineTB003.AsString;
    cdsDetail.Post;
    EcdsCombine.Next;
  end;

  //call 存檔前檢查
  FSaveSN;

end;

procedure TfrmcSSFI704.FidtTA01X1KeyUp(Sender: TObject; var Key: Word;
  Shift: TShiftState);
begin
  inherited;
  if Key = VK_RETURN then
  begin
    if trim(FidtTA01X1.Text) = '' then Exit;
    //20070303 增加檢查限制完成數不能超過批量+總放行數量 功能
    if not FCheckExceed(FidtTA01X, PidtTA005.Text, PidtTA007.Text) then Exit;
    //傳入序號+製程+連結方式+過站屬性找出目前狀態
    if not FCheckSN(FidtTA01X1, PidtTA007.Text, '1', '1', PidtTA005.Text) then Exit;

    FidtTA026.Text := cdsMasterTA026.AsString;
    FPnlTA01X1.Visible := False;
    FPnlTA01X2.Visible := True;
    FidtTA01X2.SetFocus;
  end;
end;

procedure TfrmcSSFI704.FidtTA01X2KeyUp(Sender: TObject; var Key: Word;
  Shift: TShiftState);
begin
  inherited;
  if Key = VK_RETURN then
  begin
    if trim(FidtTA01X2.Text) = '' then Exit;
    //傳入序號+製程+連結方式+過站屬性找出目前狀態
    if not FCheckSN(FidtTA01X2, PidtTA007.Text, '1', '1', PidtTA005.Text) then Exit;

    if (FidtTA026.Text <> cdsMasterTA026.AsString) then
    begin
      AddMemo('ERROR', '生產序號迄所屬的箱號與生產序號起所屬的箱號不同,不可過站!!');
      exit;
    end;

    FcdsCondition.Post;
    FbbConfirmClick(sender);
  end;
end;

procedure TfrmcSSFI704.FbbConfirmClick(Sender: TObject);
const
  //找出此箱範圍的序號
  SQLstr = ' SELECT MR003 ' +
    '   FROM SSFMR (NOLOCK) ' +
    '  WHERE MR001 = ''%s'' ' +
    '    AND MR002 = ''%s'' ' +
    '    AND ISNULL(MR004,'''') = '''' ';
var
  iCount: Cardinal;
begin
  inherited;
  iCount := 0;
  if trim(FidtTA01X1.Text) = '' then
  begin
    raise Exception.Create('生產序號起必須輸入!!');
    abort;
  end;
  if trim(FidtTA01X2.Text) = '' then
  begin
    raise Exception.Create('生產序號迄必須輸入!!');
    abort;
  end;

  //找出此箱的序號區間(且尚未過站的)
  with cdsBatch do
  begin
    Close;
    SQL.Clear;
    SQL.Add(format(SQLstr, [PidtTA005.Text, FidtTA026.Text]));
    Open;
    first;
    //先檢查是否此箱內的序號狀態是否可過站
    while not Eof do
    begin
      FidtTA01X.Text := FieldByName('MR003').AsString;
      //傳入序號+製程+連結方式+過站屬性找出目前狀態
      if not FCheckSN(FidtTA01X, PidtTA007.Text, '1', '1', PidtTA005.Text) then
      begin
        FidtTA01X2.SelectAll;
        Exit;
      end;
      Inc(iCount);
      next;
    end;
    first;
    while not Eof do
    begin
      //裝箱批過
      cdsMasterTA01X.Asstring := FieldByName('MR003').AsString;
      btnMasterSave.Click;
      AddMemo('OK', '序號:' + FieldByName('MR003').AsString + ' 已裝箱');
      next;
    end;
  end;


  //call 存檔前檢查
//  FSaveSN;
end;

procedure TfrmcSSFI704.GidtTA01X1KeyUp(Sender: TObject; var Key: Word;
  Shift: TShiftState);
begin
  inherited;
  if Key = VK_RETURN then
  begin
    if trim(GidtTA01X1.Text) = '' then Exit;
    //20070303 增加檢查限制完成數不能超過批量+總放行數量 功能
    if not FCheckExceed(GidtTA01X, PidtTA005.Text, PidtTA007.Text) then Exit;
    //傳入序號+製程+連結方式+過站屬性找出目前狀態
    if not FCheckSN(GidtTA01X1, PidtTA007.Text, '1', '1', PidtTA005.Text) then Exit;

    GidtTA026.Text := cdsMasterTA026.AsString;
    GPnlTA01X1.Visible := False;
    GPnlTA01X2.Visible := True;
    GidtTA01X2.SetFocus;
  end;
end;

procedure TfrmcSSFI704.GidtTA01X2KeyUp(Sender: TObject; var Key: Word;
  Shift: TShiftState);
begin
  inherited;
  if Key = VK_RETURN then
  begin
    if trim(GidtTA01X2.Text) = '' then Exit;
    //傳入序號+製程+連結方式+過站屬性找出目前狀態
    if not FCheckSN(GidtTA01X2, PidtTA007.Text, '1', '1', PidtTA005.Text) then Exit;

    if (GidtTA026.Text <> cdsMasterTA026.AsString) then
    begin
      AddMemo('ERROR', '生產序號迄所屬的箱號與生產序號起所屬的箱號不同,不可過站!!');
      exit;
    end;

    GcdsCondition.Post;
    GbbConfirmClick(sender);
  end;
end;

procedure TfrmcSSFI704.GbbConfirmClick(Sender: TObject);
const   
  //2010/06/29 改成 找出序號起迄的序號才過站
  //找出此箱範圍的序號
  SQLstr = ' SELECT MR003,MR005 ' +
    '   FROM SSFMR (NOLOCK) ' +
    '  WHERE MR001 = ''%s'' ' +
    '    AND MR002 = ''%s'' ' +
    '    AND MR003 BETWEEN ''%s'' AND ''%s'' ' +
    '    AND ISNULL(MR004,'''') = '''' ';
begin
  inherited;
  if trim(GidtTA01X1.Text) = '' then
  begin
    raise Exception.Create('生產序號起必須輸入!!');
    abort;
  end;
  if trim(GidtTA01X2.Text) = '' then
  begin
    raise Exception.Create('生產序號迄必須輸入!!');
    abort;
  end;

  //找出此箱的序號區間(且尚未過站的)
  with cdsBatch do
  begin
    Close;
    SQL.Clear;
    SQL.Add(format(SQLstr, [PidtTA005.Text, GidtTA026.Text, GidtTA01X1.Text, GidtTA01X2.Text]));
    Open;
    first;
    //先檢查是否此箱內的序號狀態是否可過站
    while not Eof do
    begin
      GidtTA01X.Text := FieldByName('MR005').AsString;
      //傳入序號+製程+連結方式+過站屬性找出目前狀態(找被組合)
      if not FCheckSN(GidtTA01X, PidtTA007.Text, '3', '1', PidtTA005.Text) then
      begin
        FidtTA01X2.SelectAll;
        Exit;
      end;
      GidtTA01X.Text := FieldByName('MR003').AsString;
      //傳入序號+製程+連結方式+過站屬性找出目前狀態
      if not FCheckSN(GidtTA01X, PidtTA007.Text, '1', '1', PidtTA005.Text) then
      begin
        FidtTA01X2.SelectAll;
        Exit;
      end;
      next;
    end;
    first;
    while not Eof do
    begin
      //組合->裝箱批過
      cdsMasterTA01X.Asstring := FieldByName('MR003').AsString;
      //新增被組合資料
      cdsDetail.Append;
      cdsDetailTB003.AsString := FieldByName('MR005').AsString;
      cdsDetail.Post;

      btnMasterSave.Click;
      next;
    end;
  end;

  //call 存檔前檢查
//  FSaveSN;
end;

procedure TfrmcSSFI704.APortTriggerAvail(CP: TObject; Count: Word);
var
  C: Char;
  I: Integer;
  sWeight: string;
  fWeight: Single;
  debug: string; // 為了 debug 時候用的變數
begin
  debug := 'N';
  for I := 1 to Count do
  begin
    C := APort.GetChar;
    if C = #$0A then //完成一行讀取
    begin
      memo1.Lines.Add(FBuffer); //先將讀取的值寫在畫面上
      if BStart then //開始秤重為 True 時才作下面的事
      begin
        if BWeight then //可讀取秤重值
        begin
          if Pos('ST', FBuffer) > 0 then //秤重值為穩定
          begin
            if (BField.Focused) or (debug = 'Y') then //如果現在游標正在重量欄位上
//            if (trim(BField.Text) <> '')  then
//            if (cdsDetailTE03X.AsString <> '')  then    //有箱號
            begin
              sWeight := Trim(Copy(FBuffer, 9, 6));
              fWeight := StrToFloat(sWeight) * 1000;
              sWeight := FloatToStr(fWeight);
              if (fWeight <> 0) and (BWrite) then //秤重值不為0且可寫入
              begin
//                cdsDetail.Edit;
//                cdsDetailTF004.Asfloat := StrToFloat(Format('%0.2f',[fWeight]));
                BField.Text := sWeight;
                BWrite := False;
                FinishWeight(BField, sWeight);
              end;
            end;
            BWeight := false;
          end;
        end;
{        else if (not BWeight) and (not BWrite) then
        begin
          if (Pos('ST',FBuffer) > 0) or (Pos('US',FBuffer)>0) then   //秤重值為穩定或不穩定
          begin
            sWeight := Trim(Copy(FBuffer, 4, 7));
            fWeight := StrToFloat(sWeight);
            if (fWeight = 0)  then   //秤重值為0,則跳下一筆
            begin
              cdsDetail.Next;
              BWrite := True;
            end;
          end;
        end;     }
      end;
      FBuffer := ''; //清掉 Buffer
    end
    else
      FBuffer := FBuffer + C;
  end;
end;

procedure TfrmcSSFI704.BWeightStartClick(Sender: TObject);
begin
  inherited;
  if not APort.Open then
  begin
    SelectComPort;
    try
      APort.Open := True;
    except
      addmemomessage('無法開啟Com port 讀取秤重機!1' + formatdatetime('hh:nn:ss', now));
    end;
  end;
  addmemomessage('開始秤重計時!!' + formatdatetime('hh:nn:ss', now));
  BStart := True;
  BWeight := False;
  BWrite := True;
  //兩秒測一次
  Timer.Interval := 2 * 1000;
  Timer.Enabled := True;

end;

procedure TfrmcSSFI704.BWeightStopClick(Sender: TObject);
begin
  inherited;
  addmemomessage('停止秤重計時!!' + formatdatetime('hh:nn:ss', now));
  BStart := True;
  BWeight := False;
  BWrite := True;
  Timer.Enabled := False;
  Aport.Open := False;
end;

procedure TfrmcSSFI704.TimerTimer(Sender: TObject);
begin
  inherited;
  if not Aport.Open then
  begin
    BWeightStopClick(Sender);
    exit;
  end;
  addmemomessage('讀取秤重數字!!' + formatdatetime('hh:nn:ss', now));
  BWeight := True;
end;

procedure TfrmcSSFI704.idtTA007ButtonClick(Sender: TObject);
const
  SQLfmt = ' SELECT MA001,MA002 FROM SSFMA(NOLOCK) ' +
    ' ORDER BY MA001 ';
begin
  inherited;
  if not EditShowQueryForm(Sender, SQLfmt) then Exit;
end;

procedure TfrmcSSFI704.idtTA022ButtonClick(Sender: TObject);
const
  SQLfmt = ' SELECT MV001,MV002 FROM CMSMV(NOLOCK) ' +
    ' ORDER BY MV001 ';
begin
  inherited;
  if not EditShowQueryForm(Sender, SQLfmt) then Exit;
end;

procedure TfrmcSSFI704.idtTA008ButtonClick(Sender: TObject);
const
  SQLfmt = ' SELECT ML001,ML002 FROM SSFML(NOLOCK) ' +
    ' ORDER BY ML001 ';
begin
  inherited;
  if not EditShowQueryForm(Sender, SQLfmt) then Exit;
end;

procedure TfrmcSSFI704.idtTA010ButtonClick(Sender: TObject);
const
  SQLfmt = ' SELECT MI001,MI002 FROM SSFMI(NOLOCK) ' +
    ' ORDER BY MI001 ';
begin
  inherited;
  if not EditShowQueryForm(Sender, SQLfmt) then Exit;
end;

procedure TfrmcSSFI704.idtTA011ButtonClick(Sender: TObject);
const
  SQLfmt = ' SELECT MM001,MM002 FROM SSFMM(NOLOCK) ' +
    ' ORDER BY MM001 ';
begin
  inherited;
  if not EditShowQueryForm(Sender, SQLfmt) then Exit;
end;

procedure TfrmcSSFI704.idtTA012ButtonClick(Sender: TObject);
const
  SQLfmt = ' SELECT MJ001,MJ002 FROM SSFMJ(NOLOCK) ' +
    ' ORDER BY MJ001 ';
begin
  inherited;
  if not EditShowQueryForm(Sender, SQLfmt) then Exit;
end;

procedure TfrmcSSFI704.idtTA013ButtonClick(Sender: TObject);
const
  SQLfmt = ' SELECT MK001,MK002 FROM SSFMK(NOLOCK) ' +
    ' ORDER BY MK001 ';
begin
  inherited;
  if not EditShowQueryForm(Sender, SQLfmt) then Exit;
end;

procedure TfrmcSSFI704.idtTA023ButtonClick(Sender: TObject);
const
  SQLfmt = ' SELECT MI001,MI002 FROM SSFMI(NOLOCK) ' +
    ' ORDER BY MI001 ';
begin
  inherited;
  if not EditShowQueryForm(Sender, SQLfmt) then Exit;
end;

procedure TfrmcSSFI704.DidtTB003ButtonClick(Sender: TObject);
const
  SQLfmt = ' SELECT MO001 FROM SSFMO(NOLOCK) ' +
    ' ORDER BY MO001 ';
begin
  inherited;
  if not EditShowQueryForm(Sender, SQLfmt) then Exit;
end;

procedure TfrmcSSFI704.DidtTA01XButtonClick(Sender: TObject);
const
  SQLfmt = ' SELECT MO001 FROM SSFMO(NOLOCK) ' +
    ' ORDER BY MO001 ';
begin
  inherited;
  if not EditShowQueryForm(Sender, SQLfmt) then Exit;
end;

procedure TfrmcSSFI704.EidtTB003ButtonClick(Sender: TObject);
const
  SQLfmt = ' SELECT MO001 FROM SSFMO(NOLOCK) ' +
    ' ORDER BY MO001 ';
begin
  inherited;
  if not EditShowQueryForm(Sender, SQLfmt) then Exit;
end;

procedure TfrmcSSFI704.EidtTA01XButtonClick(Sender: TObject);
const
  SQLfmt = ' SELECT MO001 FROM SSFM(NOLOCK) ' +
    ' ORDER BY M001 ';
begin
  inherited;
  if not EditShowQueryForm(Sender, SQLfmt) then Exit;
end;

procedure TfrmcSSFI704.FidtTA01X1ButtonClick(Sender: TObject);
const
  SQLfmt = ' SELECT MO001 FROM SSFMO(NOLOCK) ' +
    ' ORDER BY MO001 ';
begin
  inherited;
  if not EditShowQueryForm(Sender, SQLfmt) then Exit;
end;

procedure TfrmcSSFI704.FidtTA01X2ButtonClick(Sender: TObject);
const
  SQLfmt = ' SELECT MO001 FROM SSFMO(NOLOCK) ' +
    ' ORDER BY MO001 ';
begin
  inherited;
  if not EditShowQueryForm(Sender, SQLfmt) then Exit;
end;

procedure TfrmcSSFI704.GidtTA01X1ButtonClick(Sender: TObject);
const
  SQLfmt = ' SELECT MO001 FROM SSFMO(NOLOCK) ' +
    ' ORDER BY MO001 ';
begin
  inherited;
  if not EditShowQueryForm(Sender, SQLfmt) then Exit;
end;

procedure TfrmcSSFI704.GidtTA01X2ButtonClick(Sender: TObject);
const
  SQLfmt = ' SELECT MO001 FROM SSFMO(NOLOCK) ' +
    ' ORDER BY MO001 ';
begin
  inherited;
  if not EditShowQueryForm(Sender, SQLfmt) then Exit;
end;

procedure TfrmcSSFI704.AidtTA005ButtonClick(Sender: TObject);
const
  SQLfmt = ' SELECT MF001 FROM SSFMF (NOLOCK) ' +
    ' ORDER BY MF001';
begin
  inherited;
  if not EditShowQueryForm(Sender, SQLfmt) then Exit;
end;

procedure TfrmcSSFI704.AidtTA005KeyUp(Sender: TObject; var Key: Word;
  Shift: TShiftState);
var
  vReturnVal: variant;
begin
  inherited;
//  SetKeyinTimer(TinfoDBEdit(Sender),True);
  if Key = VK_RETURN then
  begin
//    SetKeyinTimer(nil,False);
    if trim(AidtTA005.Text) = '' then exit;
    //找一般製程
    CallServerMethod('sSSFmethod', 'GetSSFMF', VarArrayOf([AidtTA005.Text]), vReturnVal);
    if not vReturnVal[0] then
    begin
      AddMemo('ERROR', '製令單號不存在!!');
      AidtTA005.SelectAll;
      Exit;
    end
    else
    begin
      FMF013 := vReturnVal[8];
      if ((FMF013 = '') or (FMF013 = '0')) then
      begin
        AddMemo('ERROR', '製令尚未設定每箱個數,不可以裝箱!!');
        AidtTA005.SelectAll;
        exit;
      end;
    end;
    
    APnlTA005.Visible := False;
    APnlTA007.Visible := True;
    APnlTA022.Visible := False;
    APnlTA008.Visible := False;
    APnlTA020.Visible := False;
    APnlTA003.Visible := False;    
    APnlTA045.Visible := False;
    AidtTA007.SetFocus;
  end;
end;


function TfrmcSSFI704.IsEmpDetailEnabled(PartNo: string): boolean;
const
  sqlstr = ' select LOOKUP_VALUE ' +
    ' from SSFTP(nolock) ' +
    ' where LOOKUP_CATALOG = ''EMP'' ' +
    ' and LOOKUP_CODE = ''COUNT'' ' +
    ' and ENABLED = ''Y'' ';
var
  value: string;
begin
  result := false;
  with cdsQuery do
  begin
    close;
    sql.clear;
    sql.add(sqlstr);
    open;
    while not eof do
    begin
      value := trim(fieldbyname('LOOKUP_VALUE').AsString);
      if (copy(PartNo, 1, length(value)) = value) then
      begin
        result := true;
        break;
      end;
      next;
    end;
  end;
end;

procedure TfrmcSSFI704.HidtTA01XKeyUp(Sender: TObject; var Key: Word;
  Shift: TShiftState);
const
  //找出此序號的箱號
  SQLstr = ' SELECT A.MR002,B.MQ005,B.MQ006 ' +
    '   FROM SSFMR A(NOLOCK) ' +
    '   JOIN SSFMQ B(NOLOCK) ON (B.MQ001 = A.MR001 AND B.MQ002 = A.MR002) ' +
    '  WHERE A.MR001 = ''%s'' ' +
    '    AND A.MR003 = ''%s'' ';
var
  vReturnVal: variant;
begin
  inherited;
  button26.enabled := false;
  if Key = VK_RETURN then
  begin
    // 2014/05/18 測試反應時間
    sDate := now;
    eDate := now;
    sExceed := now;
    eExceed := now;
    sCheckSN := now;
    eCheckSN := now;
    sConfirm := now;
    eConfirm := now;
    sPrint := now;
    ePrint := now;
    //20070303 增加檢查限制完成數不能超過批量+總放行數量 功能
    sExceed := now;
    if not FCheckExceed(HidtTA01X, PidtTA005.Text, PidtTA007.Text) then
      Exit;
    eExceed := now;
    //傳入序號+製程+連結方式+過站屬性找出目前狀態
    sCheckSN := now;
    if not FCheckSN(HidtTA01X, PidtTA007.Text, '1', '1', PidtTA005.Text) then Exit;
    eCheckSN := now;

    if (PidtTA026.Text = '') then
    begin
      if MessageDlg('目前無箱號,確定要產生新的箱號 ?',
        mtConfirmation, [mbYes, mbNo], 0) = mrNo then
      begin
        MessageDlg('請查詢出尚未裝滿箱的箱號再繼續裝箱 !!', mtInformation,
          [mbOk], 0);

        HidtTA01X.SelectAll;
        exit;
      end;
    end;
{
    //取得箱號
    CallServerMethod('sSSFI704','GetBoxNO',VarArrayOf([PidtTA005.Text,FMF013,PidtTA026.Text]),vReturnVal);
    if not vReturnVal[0] then
    begin
      AddMemo('ERROR','無法取得箱號!!');
      HidtTA01X.SelectAll;
      exit;
    end
    else
    begin
      PidtTA026.Text := vReturnVal[1];
      cdsMasterTA026.AsString := PidtTA026.Text;
    end;}
    HcdsCondition.Post;
    //2010/07/22 改成模組化線上列印 ,先保留 序號 值
    FPrintSeq := HidtTA01X.Text;
    sConfirm := now;
    HbbConfirmClick(Sender);
    eConfirm := now;
    eDate := now;
    SaveLog(FPrintSeq);
  end;

end;

procedure TfrmcSSFI704.HbbConfirmClick(Sender: TObject);
begin
  inherited;
  if trim(HidtTA01X.Text) = '' then
  begin
    raise Exception.Create('生產序號必須輸入!!');
    abort;
  end;

  cdsMasterTA01X.Asstring := HcdsConditionTA01X.AsString;

  //call 存檔前檢查
  FSaveSN;
end;

function Format(const Format: string; const Args: array of const): string;
begin
  FmtStr(Result, Format, Args);
end;

procedure FmtStr(var Result: string; const Format: string;
  const Args: array of const);
var
  Len, BufLen: Integer;
  Buffer: array[0..4097] of Char;
begin
  BufLen := SizeOf(Buffer);
  if Length(Format) < (BufLen - (BufLen div 4)) then
    Len := FormatBuf(Buffer, BufLen - 1, Pointer(Format)^, Length(Format), Args)
  else
  begin
    BufLen := Length(Format);
    Len := BufLen;
  end;
  if Len >= BufLen - 1 then
  begin
    while Len >= BufLen - 1 do
    begin
      Inc(BufLen, BufLen);
      Result := ''; // prevent copying of existing data, for speed
      SetLength(Result, BufLen);
      Len := FormatBuf(Pointer(Result)^, BufLen - 1, Pointer(Format)^,
        Length(Format), Args);
    end;
    SetLength(Result, Len);
  end
  else
    SetString(Result, Buffer, Len);
end;

procedure TfrmcSSFI704.suiButton2Click(Sender: TObject);
begin
  inherited;
  begin
    if ((FormState = fsInsert)) then
    begin
      cdsView.Close;
      cdsView.Open;
      cdsMaster.Close;
      cdsMaster.Open;
      cdsMaster.Edit;
      cdsOp.Close;
      cdsOp.Open;
      cdsBox1.Close;
      cdsBox1.Open;
      cdsBox2.Close;
      cdsBox2.Open;
      {AcdsCondition.Close;
      AcdsCondition.Open;
      FLastTA01X:= '';
      FLastTA005:= '';
      FLastTA006:= '';
      FLastTA007:= '';
      FLastTA045:= '';
      FLastTA008:= '';
      FLastTA009:= '';
      FLastTA011:= '';
      FLastTA015:= '';
      FLastTA022:= '';
      FLastTA026:= '';
      FLastTA020 := '';
      FLastTA018 := '';
      FLastTA003 := '';
      FLastTA004 := '';
      FLastFTA000 := 0;
      FLastTA005C2:= '';
      FLastTA005C3:= '';  }
      idtSN.Text :='';
      CBComPort.ItemIndex := 0;
      idtPrintCount.Text := '0';
      PanelEmpDetail.Visible := false;
      AidtTA020.ItemIndex:=0;

{      cdsMasterTA005.AsString := '';
      cdsMasterTA005C2.AsString := '';
      cdsMasterTA005C3.AsString := '';
      cdsMasterTA006.AsString := '';
      cdsMasterTA007.AsString := '';
      cdsMasterTA007C.AsString := '';
      cdsMasterTA008.AsString := '';
      cdsMasterTA008C.AsString := '';
      cdsMasterTA022.AsString := '';
      cdsMasterTA022C.AsString := '';
      PidtTA026.Text := '';
      cdsMasterTA026.AsString := '';
      cdsMasterTA045.AsString := ''; 
      FLastTA005 := '';
      FLastTA007 := '';
      FLastTA008 := '';
      FLastTA022 := '';

      FLastTA045 := '';
      FLastTA018 := '';
      cdsMasterTA020.AsString := '';
      cdsMasterTA018.AsString := '';  
      AidtTA020.Enabled := True;
      AidtTA020.ItemIndex:=0;
      FLastTA020 := '';
      FLastTA018 := '';
      FLastTA003 := '';
      FLastTA004 := '';          }
      infoReelid.Visible := false;
      FSwitch;
      AddMemo('OK', '換製令鍵已觸發!!');
      cdsMasterTA003.AsString := GetNowDate;
      cdsMasterTA004.AsString := GetNowTime;
      button26.enabled := false;
      //順便將樣板也清空,因為製令不同
      BarcodeTempleFile.Text := '';
    end;
  end;
end;

procedure TfrmcSSFI704.suiButton1Click(Sender: TObject);
begin
  inherited;
  begin
    if ((FormState = fsInsert)) then
    begin
      cdsMasterTA007.AsString := '';
      cdsMasterTA008.AsString := '';
      PidtTA026.Text := '';
      cdsMasterTA026.AsString := '';
      FSwitch;
      AddMemo('OK', '換製程鍵已觸發!!');
    end;
  end;
end;

procedure TfrmcSSFI704.suiButton3Click(Sender: TObject);
begin
  inherited;
  begin
    if ((FormState = fsInsert)) then
    begin
      cdsMasterTA022.AsString := '';
      FSwitch;
      AddMemo('OK', '換員工代號鍵已觸發!!');
    end;
  end;
end;

//20070303 增加檢查限制完成數不能超過批量+總放行數量 功能

function TfrmcSSFI704.FCheckExceed(SN: TinfoDBEdit; MO, Process: string): Boolean;
var
  vReturnVal: variant;
begin
  result := True;
  //傳入製令,製程 檢查 批量 + 總放行數量 是否 > 完成數
  CallServerMethod('sSSFPassNew', 'GetAllowPassStatus', VarArrayOf([MO, Process]), vReturnVal);
  // 判斷是否有錯誤
  if (vReturnVal[0]) then
  begin
    //判斷是否要增加放行數
    if not FCheckAllowPass(PidtTA005.Text, PidtTA007.Text) then //不放行
    begin
      AddMemo('ERROR', vReturnVal[1]);
      SN.SelectAll;
      result := False;
    end;
  end;
end;

function TfrmcSSFI704.FCheckAllowPass(MO, Process: string): Boolean;
begin
  result := False;
  frmcSSFI7041 := TfrmcSSFI7041.Create(nil);
//  frmcSSFI7041 := TfrmcSSFI7041.Create(Application);
  try
    frmcSSFI7041.FTA005 := MO;
    frmcSSFI7041.FTA007 := Process;
    frmcSSFI7041.Showmodal;
    if (frmcSSFI7041.FAllowPass) then
    begin
//      showmessage('放行');
      result := True;
    end;
  finally
    frmcSSFI7041.Free;
  end;
end;

function TfrmcSSFI704.FCheckProp(MO, Process: string): Boolean;
const
  sqlstr = ' select MF001,BQ003,BQ004,BP004,BP005,BP006 from SSFMF(nolock) ' +
    ' inner join SSFNT(nolock) ' +
    ' on NT003 = MF002 ' +
    ' inner join SSFBP(nolock) ' +
    ' on BP001 = NT001 ' +
    ' and BP002 = NT002 ' +
    ' left join SSFBQ(nolock) ' +
    ' on BQ001 = MF001 ' +
    ' and BQ002 = BP003 ' +
    ' and BQ003 = BP004 ' +
    ' where 1=1 ' +
    ' and MF001 = :MF001 ' +
    ' and BP003 = :BP003 ';
begin
  result := False;

  cdsQuery3.close;
  cdsQuery3.sql.clear;
  cdsQuery3.SQL.Add(sqlstr);
  cdsQuery3.Params[0].AsString := MO;
  cdsQuery3.Params[1].AsString := Process;
  cdsQuery3.Open;

  if cdsQuery3.eof then
  begin
    result := True;
  end
  else
  begin
    frmcSSFI7043 := TfrmcSSFI7043.Create(Self);
    try
      frmcSSFI7043.Params := VarArrayOf([cdsQuery3.Data]);
      frmcSSFI7043.Showmodal;
      if (frmcSSFI7043.FAllowPass) then
        result := True;
    finally
      frmcSSFI7043.Free;
    end;
  end;

end;

function TfrmcSSFI704.FWeightAllowPass: Boolean;
begin
  result := False;
  frmcSSFI7042 := TfrmcSSFI7042.Create(nil);
//  frmcSSFI7041 := TfrmcSSFI7041.Create(Application);
  try
//    frmcSSFI7042.FTA005 := MO;
//    frmcSSFI7042.FTA007 := Process;
    frmcSSFI7042.Showmodal;
    if (frmcSSFI7042.FAllowPass) then
    begin
      cdsMasterTA022.Value := '放' + frmcSSFI7042.FPassUser;
//      showmessage('放行');
      result := True;
    end;                 
  finally
    frmcSSFI7042.Free;
  end;
end;

procedure TfrmcSSFI704.btnRePrintClick(Sender: TObject);
begin
  inherited;
  Document.PrintDocument(UpDown.Position);
  Document.FormFeed;
  AddMemo('OK', '序號 : ' + Fprintseq + ' 重列印處理完成!!');
  Document.CopyToClipboard;
  PreViewimage.Picture.Assign(Clipboard);
end;

procedure TfrmcSSFI704.OnLinePrint;
const
  //找出此製令製程被組合序號起迄的資料
  SQLstr1 = ' SELECT A.TA005,A.TA007,B.TB003,A.TA001 ' +
    '   FROM SSFTA A(NOLOCK) ' +
    '   JOIN SSFTB B(NOLOCK) ON (B.TB001 = A.TA001 AND B.TB002 = A.TA002) ' +
    '  WHERE A.TA005 = ''%s'' ' +
    '    AND A.TA007 = ''%s'' ' +
    '    AND A.TA001 = ''%s'' ' +
    '  ORDER BY A.TA001 ';
  //找出此製令製程序號起迄資料
  SQLstr2 = ' SELECT TA005,TA007,TA001 ' +
    '   FROM SSFTA(NOLOCK) ' +
    '  WHERE TA005 = ''%s'' ' +
    '    AND TA007 = ''%s'' ' +
    '    AND TA001 = ''%s'' ' +
    '  ORDER BY TA001 ';
var
  vReturnVal: variant;
  i, j, k, Fprint: integer;
  sSN, sMAC: string;
  sFieldName: string;
  iPrint: integer;
  test:string;
  testInt: integer;
begin
  if FPrintSeq = '' then exit;
  //暫停 1 秒
  sleep(1000);
{  if ParameterList.Items.Count = 0 then
  begin
    AddMemo('ERROR','沒有參數,無法依樣版輸入條碼,請重新挑選新的樣板!!');
    exit;
  end;}
  //先找出參數設定
  with InPrintData do
  begin
    Close;
    SQL.Clear;
    SQL.Add('SELECT TA005,TA007 FROM SSFTA(NOLOCK) WHERE 1=0');
    Open;
    Insert;
//    FieldByName('TA005').AsString := 'BB0519';
//    FieldByName('TA007').AsString := 'AS04';
    FieldByName('TA005').AsString := PidtTA005.Text;
    FieldByName('TA007').AsString := PidtTA007.Text;
    Post;
  end;
  if (isChangingWorkOrder) then
  begin
    if (ISDEBUG) then AddMemo('DEBUG', 'debug: CallServerMethod:sPrintMethod:getPrintParams start');
    CallServerMethod('sPrintMethod', 'getPrintParams', VarArrayOf([InPrintData.Data]), vReturnVal);
    if (ISDEBUG) then AddMemo('DEBUG', 'debug: CallServerMethod:sPrintMethod:getPrintParams end');
    getPrintParams := vReturnVal;
    isChangingWorkOrder := false;
  end
  else
  begin
    vReturnVal := getPrintParams;
  end;

  // 判斷是否有錯誤
  if (vReturnVal[0]) then
  begin
    Out2PrintData.Data := vReturnVal[2];
  end
  else
  begin
    button26.enabled := false;
    raise Exception.Create('錯誤!!' + vReturnVal[1]);
    Exit;
  end;
         // ---------- DEBUG ONLY ---------------
  for j := 0 to Out2PrintData.Fields.count - 1 do
  begin
    if (ISDEBUG) then AddMemo('DEBUG', 'debug: Out2PrintData.Fields[' + intToStr(j) + '] NAME=' + Out2PrintData.Fields[j].FieldName);
    if (ISDEBUG) then AddMemo('DEBUG', 'debug: Out2PrintData.Fields[' + intToStr(j) + '] VALUE=' + Out2PrintData.FieldByName(Out2PrintData.Fields[j].FieldName).AsString);
  end;
  j := 0;
        //-----------------------------------
  with InPrintData do
  begin
    Close;
    SQL.Clear;
    if (Out2PrintData.FieldByName('NW005').AsString = '1') then //被組合
      SQL.Add(format(SQLstr1, [PidtTA005.Text, PidtTA007.Text, FPrintSeq]))
    else
      SQL.Add(format(SQLstr2, [PidtTA005.Text, PidtTA007.Text, FPrintSeq]));
    Open;
  end;
         // ---------- DEBUG ONLY ---------------
  for j := 0 to InPrintData.Fields.count - 1 do
  begin
    if (ISDEBUG) then AddMemo('DEBUG', 'debug: InPrintData.Fields[' + intToStr(j) + '] NAME=' + InPrintData.Fields[j].FieldName);
    if (ISDEBUG) then AddMemo('DEBUG', 'debug: InPrintData.Fields[' + intToStr(j) + '] VALUE=' + InPrintData.FieldByName(InPrintData.Fields[j].FieldName).AsString);
  end;
  j := 0;
       // -----------------------------------
  CallServerMethod('sPrintMethod', 'getLabelData', VarArrayOf([InPrintData.Data]), vReturnVal);
  // 判斷是否有錯誤
  if (vReturnVal[0]) then
  begin
    OutPrintData.Data := vReturnVal[2];
    //OutPrintData.FieldByName('CARTON').AsString:='1211';
    //OutPrintData.Post;
    //test:= OutPrintData.FieldByName('CARTONID').AsString;
    //SpinEdit1.Value:=OutPrintData.RecordCount;
    //Label1.Caption:=test;
  end
  else
  begin
    button26.enabled := false;
    AddMemo('ERROR', '錯誤!!' + vReturnVal[1]);
    Exit;
  end;
           // ---------- DEBUG ONLY ---------------
  for j := 0 to OutPrintData.Fields.count - 1 do
  begin
    if (ISDEBUG) then AddMemo('DEBUG', 'debug: OutPrintData.Fields[' + intToStr(j) + '] NAME=' + OutPrintData.Fields[j].FieldName);
    if (ISDEBUG) then AddMemo('DEBUG', 'debug: OutPrintData.Fields[' + intToStr(j) + '] VALUE=' + OutPrintData.FieldByName(OutPrintData.Fields[j].FieldName).AsString);
  end;
  j := 0;
       // -----------------------------------
  with OutPrintData do
  begin
    iPrint := 1;
    while iPrint < 5 do
    begin
      try

        //先清空變數
        for i := 1 to Document.Variables.formvariables.Count do
        begin
          Document.Variables.FormVariables.Item(i).value := '';
        end;

        //依變數名稱一一找出對應值
        // ---------- DEBUG ONLY ---------------
        for j := 0 to Fields.count - 1 do
        begin
          if (ISDEBUG) then AddMemo('DEBUG', 'debug: Fields[' + intToStr(j) + '] NAME=' + Fields[j].FieldName);
          if (ISDEBUG) then AddMemo('DEBUG', 'debug: Fields[' + intToStr(j) + '] VALUE=' + FieldByName(Fields[j].FieldName).AsString);
        end;
        j := 0;
        for j := 1 to Document.Variables.formvariables.Count do
        begin
          if (ISDEBUG) then AddMemo('DEBUG', 'debug: FormVariables.Item[' + intToStr(j) + ']=' +
              Document.Variables.FormVariables.Item(j).name);
        end;
        //-----------------------------------
        j := 0;
        for k := 0 to Fields.count - 1 do
        begin
          inc(j);
          sFieldName := Fields[k].FieldName;
          if (ISDEBUG) then AddMemo('DEBUG', 'debug: Fields[' + intToStr(i) + ']=' + sFieldName);
          for i := 1 to Document.Variables.formvariables.Count do
          begin
            if (UpperCase(Document.Variables.FormVariables.Item(i).name) = UpperCase(sFieldName)) then
            begin
              Document.Variables.FormVariables.Item(i).value := FieldByName(sFieldName).AsString;
              if (ISDEBUG) then AddMemo('DEBUG', 'debug: Item[' + intToStr(i) + ']=' + FieldByName(sFieldName).AsString);
            end;
          end;
        end;
        Fprint := StrToInt(idtPrintCount.Text);
        if (FPrint = 0) then
          FPrint := 1;
        Document.PrintDocument(FPrint);
        Document.FormFeed;
        AddMemo('PRINT', '序號:' + FPrintSeq + ' Label列印處理完成!!');
        iPrint := 5;
      except
        on E: Exception do
        begin
          if iPrint < 4 then
          begin
            iPrint := iPrint + 1;
            sleep(2000);
            addmemo('PRINT', '錯誤嘗試 ' + inttostr(iprint) + '(' + e.message + ')');
          end
          else
            showmessage(e.message);
        end;
      end;
//        MemoLog.Lines.Add(FormatDateTime('YYYY/MM/DD hh:mm',now)+'序號:'+Out2PrintData.FieldByName('TA001').AsString +' 送出列印 !!');
      try
        Document.CopyToClipboard;
        PreViewimage.Picture.Assign(Clipboard);
      except
        iPrint := 5;
      end;
    end;
  end;
end;

procedure TfrmcSSFI704.AidtTA008KeyUp(Sender: TObject; var Key: Word;
  Shift: TShiftState);
var
  vReturnVal: variant;
begin
  inherited;
  if Key = VK_RETURN then
  begin
    if trim(AidtTA008.Text) = '' then exit;
    //找工作站代號
    CallServerMethod('sSSFmethod', 'GetSSFML', VarArrayOf([AidtTA008.Text]), vReturnVal);
    if (not vReturnVal[0]) or (vReturnVal[3] <> 'N') then
    begin
      AddMemo('ERROR', '工作站代號不存在!!');
      AidtTA008.SelectAll;
      Exit;
    end;
    APnlTA005.Visible := False;
    APnlTA007.Visible := False;
    APnlTA022.Visible := False;
    APnlTA008.Visible := False;
    APnlTA020.Visible := False;
    APnlTA003.Visible := False;
    APnlTA045.Visible := True;
    AidtTA045.Enabled := True;
    AidtTA045.SetFocus;
    //AcdsCondition.Post;
    //AbbConfirmClick(sender);
  end;
end;

procedure TfrmcSSFI704.IidtTA01XKeyUp(Sender: TObject; var Key: Word;
  Shift: TShiftState);
const
  //找出此序號的箱號
  SQLstr = ' SELECT A.MR002,B.MQ005,B.MQ006 ' +
    '   FROM SSFMR A(NOLOCK) ' +
    '   JOIN SSFMQ B(NOLOCK) ON (B.MQ001 = A.MR001 AND B.MQ002 = A.MR002) ' +
    '  WHERE A.MR001 = ''%s'' ' +
    '    AND A.MR003 = ''%s'' ';
var
  vReturnVal: variant;
  FPart: string;
begin

  inherited;
  if Key = VK_RETURN then
  begin
    if trim(IidtTA01X.Text) = '' then exit;

    //20070303 增加檢查限制完成數不能超過批量+總放行數量 功能
    if not FCheckExceed(IidtTA01X, PidtTA005.Text, PidtTA007.Text) then Exit;


//    FPart := GetSerialPart(IidtTA01X.Text);

    if not (IIsCompleteInput('combine')) then //如果被組合還沒有完成,則檢查被組合

    //判斷序號屬於被組合還是組合後
//    if (IsCombined(IidtTA01X.Text,PidtTA005.Text,PidtTA007.Text)) then   // 如果是被組合的序號
    begin
      //傳入序號+製程+連結方式+過站屬性找出目前狀態
      if not FCheckSN(IidtTA01X, PidtTA007.Text, '3', '1', PidtTA005.Text) then Exit;
      FPart := GetSerialPart(IidtTA01X.Text);
      if not IcdsCombine.Locate('NM003', VarArrayOf([FPart]), [loCaseInsensitive]) then
        FPart := GetAlternativePart(FPart,IidtTA01X.Text,'3');  //是不是替代料 
      //先找是否有重複資料
      if IcdsCombine.Locate('NM003;TB003', VarArrayOf([FPart, IidtTA01X.Text]), [loCaseInsensitive]) then
      begin
        if (IcdsCombine.FieldByName('TB003').AsString <> '') then
        begin
          AddMemo('ERROR', '此料號:' + FPart + ' 序號:' + IidtTA01X.Text + ' 已有輸入序號,不可重複輸入!!');
        end
      end
      //再找有否符合料號且序號尚未輸入
      else if IcdsCombine.Locate('NM003;TB003', VarArrayOf([FPart, '']), [loCaseInsensitive]) then
      begin
        if (IcdsCombine.FieldByName('TB003').AsString <> '') then
        begin
          AddMemo('ERROR', '此料號:' + FPart + ' 已有輸入序號,不可重複輸入!!');
        end
        else
        begin
          IcdsCombine.Edit;
          IcdsCombine.FieldByName('TB003').AsString := IidtTA01X.Text;
          IcdsCombine.Post;
        end;
      end
      //通通找不到,表示此料號都有輸入序號
      else
        AddMemo('ERROR', '此料號:' + FPart + ' 已完成序號輸入,不可重複輸入!!');
    end
//    else if not (IIsCompleteInput('combine')) then  //先判斷是否被組合序號都已經輸入完成
//    begin
//       AddMemo('ERROR','請先輸入所有的被組合序號才能輸入組合後序號!!');
//    end
    else //序號是組合後的序號
    begin
      //傳入序號+製程+連結方式+過站屬性找出目前狀態
      if not FCheckSN(IidtTA01X, PidtTA007.Text, '1', '1', PidtTA005.Text) then Exit;
      FPart := GetSerialPart(IidtTA01X.Text);
      if not IcdsSerial.Locate('MG018', FPart, [loCaseInsensitive]) then
        FPart := GetAlternativePart(FPart,IidtTA01X.Text,'1');  //是不是替代料

      if IcdsSerial.Locate('MG018', FPart, [loCaseInsensitive]) then
      begin
        if (IcdsSerial.FieldByName('TA001').AsString <> '') then
        begin
          AddMemo('ERROR', '此料號:' + FPart + ' 已有輸入序號,不可重複輸入!!');
        end
        else
        begin
          if (PidtTA026.Text = '') then
          begin
            if MessageDlg('目前無箱號,確定要產生新的箱號 ?',
              mtConfirmation, [mbYes, mbNo], 0) = mrNo then
            begin
              MessageDlg('請查詢出尚未裝滿箱的箱號再繼續裝箱 !!', mtInformation,
                [mbOk], 0);
              IidtTA01X.SelectAll;
              exit;
            end;
          end;

{          //取得箱號
          CallServerMethod('sSSFI704','GetBoxNO',VarArrayOf([PidtTA005.Text,FMF013,PidtTA026.Text]),vReturnVal);
          if not vReturnVal[0] then
          begin
            AddMemo('ERROR','無法取得箱號!!');
            IidtTA01X.SelectAll;
            exit;
          end
          else
          begin
            PidtTA026.Text := vReturnVal[1];
            cdsMasterTA026.AsString := PidtTA026.Text;
          end;
 }
          IcdsSerial.Edit;
          IcdsSerial.FieldByName('TA001').AsString := IidtTA01X.Text;
          IcdsSerial.Post;
        end;
      end;
      FPrintSeq := IidtTA01X.Text;
    end;
    //判斷是否要換色
    if (IIsCompleteInput('combine')) then
    begin
      IdbgdTB003.Color := clWhite;
      IdbgdTA001.Color := clLime;
    end;
    //判斷是否所有的組合及被組合都有序號
    if (IIsCompleteInput('all')) then
    begin
      IcdsCondition.Post;
      IbbConfirmClick(sender);
    end;
//    IidtTA01X.SelectAll;
    IidtTA01X.Clear;
  end;

end;

procedure TfrmcSSFI704.IbbConfirmClick(Sender: TObject);
begin
  inherited;
  if trim(IidtTA01X.Text) = '' then
  begin
    raise Exception.Create('生產序號必須輸入!!');
    abort;
  end;


  cdsMasterTA01X.Asstring := IcdsConditionTA01X.AsString;

  begin
    //取得DcdsSerial 的序號為組合後序號
    cdsMasterTA01X.Asstring := IcdsSerialTA001.AsString;

    IcdsCombine.First;
    while not IcdsCombine.Eof do
    begin
      cdsDetail.Append;
      cdsDetailTB003.AsString := IcdsCombineTB003.AsString;
      cdsDetail.Post;
      IcdsCombine.Next;
    end;
  end;

  FSaveSN;
end;

procedure TfrmcSSFI704.PageControl3Change(Sender: TObject);
begin
  inherited;
  PageControl3.ActivePageIndex := FActPage3;
end;

procedure TfrmcSSFI704.IidtTA000KeyUp(Sender: TObject; var Key: Word;
  Shift: TShiftState);
begin
  inherited;
  if Key = VK_RETURN then
  begin
    if (trim(IidtTA000.Text) = '') or (trim(IidtTA000.Text) = '0') then exit;
    try
      strtoint(IidtTA000.Text);
    except
      begin
        AddMemo('ERROR', '請輸入數字!!');
        IidtTA000.SelectAll;
        Exit;
      end;
    end;
    IPnlTB003.Visible := True;
    IPnlTA01X.Visible := False;
    IidtTB003.SetFocus;
  end;

end;

procedure TfrmcSSFI704.IidtTB003KeyUp(Sender: TObject; var Key: Word;
  Shift: TShiftState);
begin
  inherited;
  if Key = VK_RETURN then
  begin
    if trim(IidtTB003.Text) = '' then exit;
    if IcdsCombine.Locate('TB003', IidtTB003.Text, [loCaseInsensitive]) then
    begin
      AddMemo('ERROR', '被組合的序號不可相同!!');
      Exit;
    end;
    //傳入序號+製程+連結方式+過站屬性找出目前狀態(找被組合)
    if not FCheckSN(IidtTB003, PidtTA007.Text, '3', '1', PidtTA005.Text) then Exit;

    IcdsCombine.Append;
    IcdsCombineTB003.AsString := IidtTB003.Text;
    IcdsCombine.Post;
    if IcdsCombine.RecordCount < StrToInt(IidtTA000.Text) then
    begin
      IidtTB003.Text := '';
      Exit;
    end;
    IPnlTB003.Visible := False;
    IPnlTA01X.Visible := True;
    IidtTA01X.SetFocus;
  end;

end;

function TfrmcSSFI704.CheckWeightRange(sMO: string; fWeight: double; var Msg: string): Boolean;
const
  //找出此製令料號的秤重標準值及誤差值
  SQLstr = ' SELECT B.MB014,B.MB038,B.MB041  ' +
    '   FROM SSFMF A (NOLOCK) ' +
    '   JOIN INVMB B (NOLOCK) ON (B.MB001 = A.MF002) ' +
    '  WHERE A.MF001 = ''%s'' ';
var
  fStandard, fLimit_upper, fLimit_lower: double;
begin
  result := False;
  with cdsQuery do
  begin
    Close;
    SQL.Clear;
    SQL.Add(format(SQLstr, [sMO]));
    Open;
    if not eof then
    begin
      fStandard := cdsQuery.FieldByName('MB014').Asfloat;
      //fLimit := cdsQuery.FieldByName('MB038').Asfloat;
      fLimit_upper := cdsQuery.FieldByName('MB038').Asfloat;
      fLimit_lower := cdsQuery.FieldByName('MB041').Asfloat;

      if BField = CidtTA027 then
      begin
        CcdsCondition.Edit;
        CcdsConditionTA037.AsFloat := fStandard;
        CcdsConditionTA038.AsFloat := fLimit_upper;
        CcdsConditionTA049.AsFloat := fLimit_lower;
      end;
      if BField = EidtTA027 then
      begin
        EcdsCondition.Edit;
        EcdsConditionTA037.AsFloat := fStandard;
        EcdsConditionTA038.AsFloat := fLimit_upper;
        EcdsConditionTA049.AsFloat := fLimit_lower;
      end;
      if BField = JidtTA027 then
      begin
        JcdsCondition.Edit;
        JcdsConditionTA037.AsFloat := fStandard;
        JcdsConditionTA038.AsFloat := fLimit_upper;
        JcdsConditionTA049.AsFloat := fLimit_lower;
      end;
      if BField = KidtTA027 then
      begin
        KcdsCondition.Edit;
        KcdsConditionTA037.AsFloat := fStandard;
        KcdsConditionTA038.AsFloat := fLimit_upper;
        KcdsConditionTA049.AsFloat := fLimit_lower;
      end;
      if not ((fStandard - fLimit_lower <= fWeight) and (fWeight <= fStandard + fLimit_upper)) then
      begin
        Msg := '秤重值 : ' + floattostr(fweight) + '不在 (' + floattostr(fStandard - fLimit_lower) + ' ~ ' + floattostr(fStandard + fLimit_upper) + ') 之間' +
          ' 標準值 : ' + floattostr(fStandard) + ' 誤差值下限 : ' + floattostr(fLimit_lower) + ' 誤差值上限 : ' + floattostr(fLimit_upper) + ' ,請確認後再次秤重!';
        Exit;
      end;
    end
    else
    begin
      Msg := '找不到此料號的標準秤重值!!';
      exit;
    end;
  end;
  result := True;
end;

procedure TfrmcSSFI704.FinishWeight(Field: TinfoDBEdit; Weight: string);
var
  key: word;
  shift: TShiftState;
begin
  key := VK_RETURN;
  if Field = CidtTA027 then
  begin
    CcdsCondition.Edit;
    CidtTA027.Text := Weight;
    CcdsConditionTA027.AsString := CidtTA027.Text;
    CidtTA027KeyUp(nil, key, shift);
  end;
  if Field = EidtTA027 then
  begin
    EcdsCondition.Edit;
    EidtTA027.Text := Weight;
    EcdsConditionTA027.AsString := EidtTA027.Text;
    EidtTA027KeyUp(nil, key, shift);
  end;
  if Field = JidtTA027 then
  begin
    JcdsCondition.Edit;
    JidtTA027.Text := Weight;
    JcdsConditionTA027.AsString := JidtTA027.Text;
    JidtTA027KeyUp(nil, key, shift);
  end;
  if Field = KidtTA027 then
  begin
    KcdsCondition.Edit;
    KidtTA027.Text := Weight;
    KcdsConditionTA027.AsString := KidtTA027.Text;
    KidtTA027KeyUp(nil, key, shift);
  end;
end;

procedure TfrmcSSFI704.JidtTA01XKeyUp(Sender: TObject; var Key: Word;
  Shift: TShiftState);
const
  //找出此序號的箱號
  SQLstr = ' SELECT A.MR002,B.MQ005,B.MQ006 ' +
    '   FROM SSFMR A(NOLOCK) ' +
    '   JOIN SSFMQ B(NOLOCK) ON (B.MQ001 = A.MR001 AND B.MQ002 = A.MR002) ' +
    '  WHERE A.MR001 = ''%s'' ' +
    '    AND A.MR003 = ''%s'' ';
  SQLstr2 = ' SELECT TB001 FROM SSFTB(NOLOCK) WHERE TB003 = ''%s'' ';
var
  vReturnVal: variant;
begin

  inherited;
  if Key = VK_RETURN then
  begin
    //20121107 臨時處理 IO  機種WHG-NAPG/A PRODUCT LFP ,由 刷入被組合號碼帶出組合後號碼
    if checkbox1.Checked then
    begin
      with qrySelect do
      begin
        Close;
        SQL.Clear;
        SQL.Add(Format(SQLstr2, [JidtTA01X.Text]));
        Open;
        if not eof then
          JidtTA01X.Text := FieldByName('TB001').AsString;
      end;
    end;
    //20070303 增加檢查限制完成數不能超過批量+總放行數量 功能
    if not FCheckExceed(JidtTA01X, PidtTA005.Text, PidtTA007.Text) then
      Exit;
    //傳入序號+製程+連結方式+過站屬性找出目前狀態
    if not FCheckSN(JidtTA01X, PidtTA007.Text, '1', '1', PidtTA005.Text) then Exit;

    if (PidtTA026.Text = '') then
    begin
      if MessageDlg('目前無箱號,確定要產生新的箱號 ?',
        mtConfirmation, [mbYes, mbNo], 0) = mrNo then
      begin
        MessageDlg('請查詢出尚未裝滿箱的箱號再繼續裝箱 !!', mtInformation,
          [mbOk], 0);

        JidtTA01X.SelectAll;
        exit;
      end;
    end;

{    //取得箱號
    CallServerMethod('sSSFI704','GetBoxNO',VarArrayOf([PidtTA005.Text,FMF013,PidtTA026.Text]),vReturnVal);
    if not vReturnVal[0] then
    begin
      AddMemo('ERROR','無法取得箱號!!');
      JidtTA01X.SelectAll;
      exit;
    end
    else
    begin
      PidtTA026.Text := vReturnVal[1];
      cdsMasterTA026.AsString := PidtTA026.Text;
    end;
    }

    //2010/07/22 改成模組化線上列印 ,先保留 序號 值
    FPrintSeq := JidtTA01X.Text;

    JpnlTA01X.Visible := False;
    JpnlTA027.Visible := True;
    JidtTA027.SetFocus;
    BField := JidtTA027;
    //開啟 COM port ,讀取秤重值
    BWeightStartClick(Sender);
  end;
end;

procedure TfrmcSSFI704.JbbConfirmClick(Sender: TObject);
begin
  inherited;
  if trim(JidtTA01X.Text) = '' then
  begin
    raise Exception.Create('裝箱生產序號必須輸入!!');
    abort;
  end;
  cdsMasterTA01X.Asstring := JcdsConditionTA01X.AsString;
  cdsMasterTA027.Asstring := JcdsConditionTA027.AsString;
  cdsMasterTA037.Asstring := JcdsConditionTA037.AsString;
  cdsMasterTA038.Asstring := JcdsConditionTA038.AsString;
  cdsMasterTA049.Asstring := JcdsConditionTA049.AsString;          
  //call 存檔前檢查                                             
  FSaveSN;


end;

procedure TfrmcSSFI704.KidtTA000KeyUp(Sender: TObject; var Key: Word;
  Shift: TShiftState);
begin
  inherited;
  if Key = VK_RETURN then
  begin
    if (trim(KidtTA000.Text) = '') or (trim(KidtTA000.Text) = '0') then exit;
    try
      strtoint(KidtTA000.Text);
    except
      begin
        AddMemo('ERROR', '請輸入數字!!');
        KidtTA000.SelectAll;
        Exit;
      end;
    end;
    KPnlTB003.Visible := True;
    KPnlTA01X.Visible := False;
    KidtTB003.SetFocus;
  end;


end;

procedure TfrmcSSFI704.KidtTB003ButtonClick(Sender: TObject);
const
  SQLfmt = ' SELECT MO001 FROM SSFMO(NOLOCK) ' +
    ' ORDER BY MO001 ';
begin
  inherited;
  if not EditShowQueryForm(Sender, SQLfmt) then Exit;
end;

procedure TfrmcSSFI704.KidtTB003KeyUp(Sender: TObject; var Key: Word;
  Shift: TShiftState);
begin
  inherited;
  if Key = VK_RETURN then
  begin
    if trim(KidtTB003.Text) = '' then exit;
    if KcdsCombine.Locate('TB003', KidtTB003.Text, [loCaseInsensitive]) then
    begin
      AddMemo('ERROR', '被組合的序號不可相同!!');
      Exit;
    end;
    //傳入序號+製程+連結方式+過站屬性找出目前狀態(找被組合)
    if not FCheckSN(KidtTB003, PidtTA007.Text, '3', '1', PidtTA005.Text) then Exit;

    KcdsCombine.Append;
    KcdsCombineTB003.AsString := KidtTB003.Text;
    KcdsCombine.Post;
    if KcdsCombine.RecordCount < StrToInt(KidtTA000.Text) then
    begin
      KidtTB003.Text := '';
      Exit;
    end;
    KPnlTB003.Visible := False;
    KPnlTA01X.Visible := True;
    KPnlTA027.Visible := False;
    KidtTA01X.SetFocus;
  end;


end;

procedure TfrmcSSFI704.KidtTA01XKeyUp(Sender: TObject; var Key: Word;
  Shift: TShiftState);
const
  //找出此序號的箱號
  SQLstr = ' SELECT A.MR002,B.MQ005,B.MQ006 ' +
    '   FROM SSFMR A(NOLOCK) ' +
    '   JOIN SSFMQ B(NOLOCK) ON (B.MQ001 = A.MR001 AND B.MQ002 = A.MR002) ' +
    '  WHERE A.MR001 = ''%s'' ' +
    '    AND A.MR003 = ''%s'' ';
var
  vReturnVal: variant;
  FPart: string;
begin

  inherited;
  if Key = VK_RETURN then
  begin
    if trim(KidtTA01X.Text) = '' then exit;

    //20070303 增加檢查限制完成數不能超過批量+總放行數量 功能
    if not FCheckExceed(KidtTA01X, PidtTA005.Text, PidtTA007.Text) then Exit;


//    FPart := GetSerialPart(KidtTA01X.Text);
    if not (KIsCompleteInput('combine')) then //如果被組合還沒有完成,則檢查被組合

    //判斷序號屬於被組合還是組合後
//    if (IsCombined(KidtTA01X.Text,PidtTA005.Text,PidtTA007.Text)) then   // 如果是被組合的序號
    begin
      //傳入序號+製程+連結方式+過站屬性找出目前狀態
      if not FCheckSN(KidtTA01X, PidtTA007.Text, '3', '1', PidtTA005.Text) then Exit;
      FPart := GetSerialPart(KidtTA01X.Text);
      if not KcdsCombine.Locate('NM003', VarArrayOf([FPart]), [loCaseInsensitive]) then
        FPart := GetAlternativePart(FPart,KidtTA01X.Text,'3'); 
      //先找是否有重複資料
      if KcdsCombine.Locate('NM003;TB003', VarArrayOf([FPart, KidtTA01X.Text]), [loCaseInsensitive]) then
      begin
        if (KcdsCombine.FieldByName('TB003').AsString <> '') then
        begin
          AddMemo('ERROR', '此料號:' + FPart + ' 序號:' + KidtTA01X.Text + ' 已有輸入序號,不可重複輸入!!');
        end
      end
      //再找有否符合料號且序號尚未輸入
      else if KcdsCombine.Locate('NM003;TB003', VarArrayOf([FPart, '']), [loCaseInsensitive]) then
      begin
        if (KcdsCombine.FieldByName('TB003').AsString <> '') then
        begin
          AddMemo('ERROR', '此料號:' + FPart + ' 已有輸入序號,不可重複輸入!!');
        end
        else
        begin
          KcdsCombine.Edit;
          KcdsCombine.FieldByName('TB003').AsString := KidtTA01X.Text;
          KcdsCombine.Post;
        end;
      end
      //通通找不到,表示此料號都有輸入序號
      else
        AddMemo('ERROR', '此料號:' + FPart + ' 已完成序號輸入,不可重複輸入!!');
    end
//    else if not (KIsCompleteInput('combine')) then  //先判斷是否被組合序號都已經輸入完成
//    begin
//       AddMemo('ERROR','請先輸入所有的被組合序號才能輸入組合後序號!!');
//    end
    else //序號是組合後的序號
    begin
      //傳入序號+製程+連結方式+過站屬性找出目前狀態
      if not FCheckSN(KidtTA01X, PidtTA007.Text, '1', '1', PidtTA005.Text) then Exit;
      FPart := GetSerialPart(KidtTA01X.Text);
      if not KcdsSerial.Locate('MG018', FPart, [loCaseInsensitive]) then
        FPart := GetAlternativePart(FPart,KidtTA01X.Text,'1');
      if KcdsSerial.Locate('MG018', FPart, [loCaseInsensitive]) then
      begin
        if (KcdsSerial.FieldByName('TA001').AsString <> '') then
        begin
          AddMemo('ERROR', '此料號:' + FPart + ' 已有輸入序號,不可重複輸入!!');
        end
        else
        begin
          if (PidtTA026.Text = '') then
          begin
            if MessageDlg('目前無箱號,確定要產生新的箱號 ?',
              mtConfirmation, [mbYes, mbNo], 0) = mrNo then
            begin
              MessageDlg('請查詢出尚未裝滿箱的箱號再繼續裝箱 !!', mtInformation,
                [mbOk], 0);
              KidtTA01X.SelectAll;
              exit;
            end;
          end;

{          //取得箱號
          CallServerMethod('sSSFI704','GetBoxNO',VarArrayOf([PidtTA005.Text,FMF013,PidtTA026.Text]),vReturnVal);
          if not vReturnVal[0] then
          begin
            AddMemo('ERROR','無法取得箱號!!');
            KidtTA01X.SelectAll;
            exit;
          end
          else
          begin
            PidtTA026.Text := vReturnVal[1];
            cdsMasterTA026.AsString := PidtTA026.Text;
          end;}

          KcdsSerial.Edit;
          KcdsSerial.FieldByName('TA001').AsString := KidtTA01X.Text;
          KcdsSerial.Post;
        end;
      end;
      FPrintSeq := KidtTA01X.Text;
    end;
    //判斷是否要換色
    if (KIsCompleteInput('combine')) then
    begin
      KdbgdTB003.Color := clWhite;
      KdbgdTA001.Color := clLime;
    end;
    //判斷是否所有的組合及被組合都有序號
    if (KIsCompleteInput('all')) then
    begin
      KcdsCondition.Post;
//      KbbConfirmClick(sender);
      KPnlTB003.Visible := False;
      KPnlTA01X.Visible := False;
      KPnlTA027.Visible := True;
      KidtTA027.SetFocus;
      BField := KidtTA027;
      //開啟 COM port ,讀取秤重值
      BWeightStartClick(Sender);
    end;
//    KidtTA01X.SelectAll;
    KidtTA01X.Clear;
  end;

end;

procedure TfrmcSSFI704.kbbConfirmClick(Sender: TObject);
begin
  inherited;
  if trim(KidtTA01X.Text) = '' then
  begin
    raise Exception.Create('生產序號必須輸入!!');
    abort;
  end;

  cdsMasterTA01X.Asstring := KcdsConditionTA01X.AsString;
  cdsMasterTA027.Asstring := KcdsConditionTA027.AsString;
  cdsMasterTA037.Asstring := KcdsConditionTA037.AsString;
  cdsMasterTA038.Asstring := KcdsConditionTA038.AsString;
  cdsMasterTA049.Asstring := KcdsConditionTA049.AsString;
  begin
    //取得DcdsSerial 的序號為組合後序號
    cdsMasterTA01X.Asstring := KcdsSerialTA001.AsString;

    KcdsCombine.First;
    while not KcdsCombine.Eof do
    begin
      cdsDetail.Append;
      cdsDetailTB003.AsString := KcdsCombineTB003.AsString;
      cdsDetail.Post;
      KcdsCombine.Next;
    end;
  end;

  FSaveSN;
end;

procedure TfrmcSSFI704.JidtTA027KeyUp(Sender: TObject; var Key: Word;
  Shift: TShiftState);
var
  fweight: double;
  Msg: string;
  vReturnVal: variant;
begin
  inherited;
  if Key = VK_RETURN then
  begin
    if trim(JidtTA027.Text) = '' then Exit;
    try
      strtofloat(JidtTA027.Text);
    except
      begin
        AddMemo('ERROR', '請輸入數字!!');
        JidtTA027.SelectAll;
        Exit;
      end;
    end;
    fweight := strtofloat(Jidtta027.text);
    if not CheckWeightRange(PidtTA005.Text, fweight, Msg) then
    begin
      AddMemo('ERROR', Msg);
      if MessageDlg('秤重值不在標準值範圍內,確定要以此重量存檔 ?',
        mtConfirmation, [mbYes, mbNo], 0) = mrNo then
      begin
{        AddMemo('ERROR','請重新秤重!!');
        JidtTA027.SelectAll;
        BWrite  := True;
        Exit;}
        //2013/02/05  I/O 稽核後要求更改流程,此時重新刷入序號
        BWeightStopClick(Sender);
        FSwitch;
        AddMemo('ERROR', '秤重值不在標準值範圍內,請重新輸入序號!!');
        Exit;
      end
      else
      begin
        if not FWeightAllowPass then
        begin
{          AddMemo('ERROR','不合法放行,請重新秤重!!');
          JidtTA027.SelectAll;
          BWrite  := True;
          Exit; }
          //2013/02/05  I/O 稽核後要求更改流程,此時重新刷入序號
          BWeightStopClick(Sender);
          FSwitch;
          AddMemo('ERROR', '不合法放行,秤重值不在標準值範圍內,請重新輸入序號!!');
          Exit;
        end;
      end;
    end;

    BWeightStopClick(Sender);

    JcdsCondition.Post;
    JbbConfirmClick(sender);
  end;
end;

procedure TfrmcSSFI704.KidtTA027KeyUp(Sender: TObject; var Key: Word;
  Shift: TShiftState);
var
  fweight: double;
  Msg: string;
  vReturnVal: variant;
begin
  inherited;
  if Key = VK_RETURN then
  begin
    if trim(KidtTA027.Text) = '' then Exit;
    try
      strtofloat(KidtTA027.Text);
    except
      begin
        AddMemo('ERROR', '請輸入數字!!');
        KidtTA027.SelectAll;
        Exit;
      end;
    end;
    fweight := strtofloat(Kidtta027.text);
    if not CheckWeightRange(PidtTA005.Text, fweight, Msg) then
    begin
      AddMemo('ERROR', Msg);
      if MessageDlg('秤重值不在標準值範圍內,確定要以此重量存檔 ?',
        mtConfirmation, [mbYes, mbNo], 0) = mrNo then
      begin
        AddMemo('ERROR', '請重新秤重!!');
        KidtTA027.SelectAll;
        BWrite := True;
        Exit;
      end
      else
      begin
        if not FWeightAllowPass then
        begin
          BWeightStopClick(Sender);
          FSwitch;
          AddMemo('ERROR', '不合法放行,秤重值不在標準值範圍內,請重新輸入序號!!');
          Exit;
        end;
      end;
    end;

    BWeightStopClick(Sender);

    KcdsCondition.Post;
    KbbConfirmClick(sender);
  end;
end;

procedure TfrmcSSFI704.FindComport;
var
  KeyHandle: HKEY;
  ErrCode, Index: Integer;
  ValueName, Data: string;
  ValueLen, DataLen, ValueType: DWORD;
  TmpPorts: TStringList;
begin
  ErrCode := RegOpenKeyEx(
    HKEY_LOCAL_MACHINE,
    'HARDWARE\DEVICEMAP\SERIALCOMM',
    0,
    KEY_READ,
    KeyHandle);

  if ErrCode <> ERROR_SUCCESS then
  begin
    showMessage(format('(Comport Load Error...)Fail to Open Key , ErrorCode : %d', [ErrCode]));
   // raise Exception.CreateFmt('Fail to Open Key , ErrorCode : %d', [ErrCode]);
    exit;
  end;

  TmpPorts := TStringList.Create;
  try
    Index := 0;
    repeat
      ValueLen := 256;
      DataLen := 256;
      SetLength(ValueName, ValueLen);
      SetLength(Data, DataLen);
      ErrCode := RegEnumValue(
        KeyHandle,
        Index,
        PChar(ValueName),
        Cardinal(ValueLen),
        nil,
        @ValueType,
        PByte(PChar(Data)),
        @DataLen);

      if ErrCode = ERROR_SUCCESS then
      begin
        SetLength(Data, DataLen);
        TmpPorts.Add(Data);
        Inc(Index);
      end
      else
        if ErrCode <> ERROR_NO_MORE_ITEMS then
          raise Exception.CreateFmt('Fail to enumerates Key , ErrorCode : %d', [ErrCode]);

    until (ErrCode <> ERROR_SUCCESS);

    TmpPorts.Sort;
    CBComPort.Items.Assign(TmpPorts);
    CBComPort.ItemIndex := 0;
  finally
    RegCloseKey(KeyHandle);
    TmpPorts.Free;
  end;
end;

procedure TfrmcSSFI704.SelectComport;
var
  ComStr: string;
begin
  ComStr := CBComPort.Items.Strings[CBComPort.itemindex];
  try
    Aport.ComNumber := StrtoInt(COPY(ComStr, pos('COM', UpperCase(ComStr)) + 3, Length(ComStr) - pos('COM', UpperCase(ComStr))));
  except
    raise Exception.Create('無法指定Comport !!');
  end;
end;

procedure TfrmcSSFI704.FormShow(Sender: TObject);
begin
  inherited;
  try
    FindComPort;
  except
  end;  
  //  btnMasterInsertClick(sender);
  if ISDEBUG then AddMemo('ERROR', 'FormShow');
end;

function TfrmcSSFI704.GetCombineCount(MO, Process: string): Integer;
const
  //找出此製令製程的被組合數量
  SQLstr = ' SELECT ISNULL(SUM(ISNULL(B.NM004,0)),0) CNT ' +
    '   FROM SSFMG A(NOLOCK)  ' +
    '   JOIN SSFNM B(NOLOCK) ON (B.NM001 = A.MG001 AND B.NM002 = A.MG002) ' +
    '  WHERE A.MG001 = ''%s'' ' +
    '    AND A.MG003 = ''%s'' ';
begin
  with cdsBatch do
  begin
    Close;
    SQL.Clear;
    SQL.Add(format(SQLstr, [MO, Process]));
    Open;
    result := FieldByName('CNT').AsInteger;
  end;
end;

procedure TfrmcSSFI704.FReloadBarcodeTemplateFile();
var
  i: integer;
begin
  inherited;
  if (BarcodeTempleFile.Text <> '') then
  begin
    try
      CodeSoft.Connect;
    //  CodeSoft.Visible := true;
      CodeSoft.Documents.CloseAll(false);
      Document.ConnectTo(CodeSoft.Documents.Open(BarcodeTempleFile.Text, true));
      Document.CopyToClipboard;
      PreViewimage.Picture.Assign(Clipboard);
      ParameterList.Items.Clear;
      for i := 1 to Document.Variables.formvariables.Count do
      begin
        ParameterList.Items.Add(Document.Variables.formvariables.Item(i).name);
      end;
      if ParameterList.Items.Count = 0 then
      begin
        AddMemo('ERROR', '沒有參數,無法依樣版輸入條碼,請重新挑選新的樣板!!');
        codesoft.Documents.CloseAll(false);
        PreViewimage.Picture.Assign(nil);
        ParameterList.Items.Clear;
        CheckList.Items.Clear;
        codesoft.Disconnect;
      end;
    except
     // raise exception.Create('無法連結 CodeSoft , 請確定有安裝 CodeSoft 軟體後再執行本程式 !!')
      on E: Exception do
        raise exception.Create(E.ClassName + ' error raised, with message : ' + E.Message);
    end;
  end
  else //清空
  begin
    codesoft.Documents.CloseAll(false);
    PreViewimage.Picture.Assign(nil);
    ParameterList.Items.Clear;
    CheckList.Items.Clear;
    codesoft.Disconnect;
  end;

end;
//20160506 change to call FReloadBarcodeTemplateFile

procedure TfrmcSSFI704.BarcodeTempleFileChange(Sender: TObject);
begin
  FReloadBarcodeTemplateFile;
end;

{
procedure TfrmcSSFI704.BarcodeTempleFileChange(Sender: TObject);
var
  i: integer;
begin
  inherited;
  if (BarcodeTempleFile.Text <> '') then
  begin
    try
      CodeSoft.Connect;
    //  CodeSoft.Visible := true;
      CodeSoft.Documents.CloseAll(false);
      Document.ConnectTo(CodeSoft.Documents.Open(BarcodeTempleFile.Text, true));
      Document.CopyToClipboard;
      PreViewimage.Picture.Assign(Clipboard);
      ParameterList.Items.Clear;
      for i := 1 to Document.Variables.formvariables.Count do
      begin
        ParameterList.Items.Add(Document.Variables.formvariables.Item(i).name);
      end;
      if ParameterList.Items.Count = 0 then
      begin
        AddMemo('ERROR', '沒有參數,無法依樣版輸入條碼,請重新挑選新的樣板!!');
        codesoft.Documents.CloseAll(false);
        PreViewimage.Picture.Assign(nil);
        ParameterList.Items.Clear;
        CheckList.Items.Clear;
        codesoft.Disconnect;
      end;
    except
      raise exception.Create('無法連結 CodeSoft , 請確定有安裝 CodeSoft 軟體後再執行本程式 !!')
    end;
  end
  else //清空
  begin
    codesoft.Documents.CloseAll(false);
    PreViewimage.Picture.Assign(nil);
    ParameterList.Items.Clear;
    CheckList.Items.Clear;
    codesoft.Disconnect;
  end;

end;
}

procedure TfrmcSSFI704.Button27Click(Sender: TObject);
begin
  inherited;
  opendialog.Execute;
  if opendialog.FileName <> '' then
    BarcodeTempleFile.Text := OpenDialog.FileName;
end;

procedure TfrmcSSFI704.SetTA005Caption(MO: string);
const
  //找製令的料號,名稱
  SQLfmt = ' SELECT MF002,MB002,MF013 ' +
    '   FROM SSFMF A(NOLOCK) ' +
    '   JOIN INVMB B(NOLOCK) ON (B.MB001 = A.MF002) ' +
    '  WHERE MF001 = ''%s'' ';
begin
  with qrySelect do
  begin
    Close;
    SQL.Clear;
    SQL.Add(Format(SQLfmt, [MO]));
    Open;
    if not eof then
    begin
//      PidtTA005C2.Text := FieldByName('MF002').AsString;
//      PidtTA005C3.Text := FieldByName('MB002').AsString;
//      PidtMF013.Text   := FieldByName('MF013').AsString;
      cdsMaster.Edit;
      cdsMasterTA005C2.Text := FieldByName('MF002').AsString;
      cdsMasterTA005C3.Text := FieldByName('MB002').AsString;
      cdsMasterMF013.Text := FieldByName('MF013').AsString;
      FLastTA005C2 := FieldByName('MF002').AsString;
      FLastTA005C3 := FieldByName('MB002').AsString;
      FLastMF013 := FieldByName('MF013').AsString;
    end
    else
    begin
      cdsMasterTA005C2.Text := '';
      cdsMasterTA005C3.Text := '';
      cdsMasterMF013.Text := '';
      FLastTA005C2 := '';
      FLastTA005C3 := '';
      FLastMF013 := '';
    end;
  end
end;

function TfrmcSSFI704.GetPassQty(sWO, sCurrentRoute: string): string;
begin
  if ((sWO = '') or (sCurrentRoute = '')) then
  begin
    Result := '0';
    Exit;
  end;
  with qrySelect do
  begin
    Close;
    SQL.Text := 'select count(distinct TA001) as QTY from SSFTA (nolock) where TA005=:WO and TA007=:CurrentRoute and TA009 in (''1'',''2'') ';
    Params.ParamByName('WO').AsString := sWO;
    Params.ParamByName('CurrentRoute').AsString := sCurrentRoute;
    Open;
    Result := FieldByName('QTY').AsString;
  end;
end;

procedure TfrmcSSFI704.Button26Click(Sender: TObject);
begin
  inherited;
  if (PidtTA026.Text = '') then exit;
  // 20160506 always reload local template file before print
  FReloadBarcodeTemplateFile;
    //2010/07/22 改成 模組化的線上列印
  OnlinePrint;
  SetControlFocused();
  MoveCursorToControl(ActiveControl);
  button26.enabled := false;
end;

procedure TfrmcSSFI704.SetControlFocused();
begin
  ActiveControl := nil;
  if PageControl3.ActivePage = Tab1 then
    BidtTA01X.SetFocus;
  if PageControl3.ActivePage = TabSheet10 then
    CidtTA01X.SetFocus;
  if PageControl3.ActivePage = TabSheet11 then
    DidtTA01X.SetFocus;
  if PageControl3.ActivePage = TabSheet12 then
    EidtTA01X.SetFocus;
  if PageControl3.ActivePage = TabSheet14 then
    FidtTA01X1.SetFocus;
  if PageControl3.ActivePage = TabSheet15 then
    GidtTA01X1.SetFocus;
  if PageControl3.ActivePage = TabSheet16 then
    HidtTA01X.SetFocus;
  if PageControl3.ActivePage = TabSheet20 then
    IidtTA01X.SetFocus;
  if PageControl3.ActivePage = TabSheet21 then
    JidtTA01X.SetFocus;
  if PageControl3.ActivePage = TabSheet22 then
    KidtTA01X.SetFocus;
end;

procedure TfrmcSSFI704.MoveCursorToControl(control: TControl);
var
  mousePos: TPoint;
begin
  if control = nil then
    control := PageControl3;

  if control <> nil then
  begin
    mousePos := GetAbsolutePositionOfControl(control);
    mousePos.X := mousePos.X + control.Width div 2;
    mousePos.Y := mousePos.Y + control.Height div 2;
    Mouse.CursorPos := ClientToScreen(mousePos);
  end;
end;

function TfrmcSSFI704.GetAbsolutePositionOfControl(control: TControl): TPoint;
var
  mousePos: TPoint;
  parentControl: TControl;
begin
  if control <> nil then
  begin
    mousePos.X := control.Left;
    mousePos.Y := control.Top;
    parentControl := control.Parent;
    while parentControl <> nil do
    begin
      if parentControl = Self then
        Break
      else
      begin
        mousePos.X := mousePos.X + parentControl.Left;
        mousePos.Y := mousePos.Y + parentControl.Top;
        parentControl := parentControl.Parent;
      end;
    end;
  end;
  Result := mousePos;
end;

procedure TfrmcSSFI704.idtSNKeyUp(Sender: TObject; var Key: Word;
  Shift: TShiftState);
const
  //找出此序號的箱號
  SQLstr = ' SELECT A.MR002,B.MQ005,B.MQ006 ' +
    '   FROM SSFMR A(NOLOCK) ' +
    '   JOIN SSFMQ B(NOLOCK) ON (B.MQ001 = A.MR001 AND B.MQ002 = A.MR002) ' +
    '  WHERE A.MR001 = ''%s'' ' +
    '    AND A.MR003 = ''%s'' ';
begin
  inherited;
  if Key = VK_RETURN then
  begin
    //找出序號的箱號
    with cdsBatch do
    begin
      Close;
      SQL.Clear;
      SQL.Add(format(SQLstr, [PidtTA005.Text, idtSN.Text]));
      Open;
      if not eof then
      begin
        PidtTA026.Text := FieldByName('MR002').AsString;
        cdsMasterTA026.AsString := PidtTA026.Text;
        FPrintSeq := idtSN.Text;
        button26.enabled := true;
      end
      else
      begin
        AddMemo('ERROR', '此序號尚未裝箱!!');
      end;
    end;
    idtSN.SelectAll;
  end;
end;

procedure TfrmcSSFI704.Button24Click(Sender: TObject);
begin
  inherited;
  cdsMasterTA026.AsString := '';
end;

procedure TfrmcSSFI704.bbCloseBoxClick(Sender: TObject);
var
  vReturnVal: variant;
begin
  inherited;
  if PidtTA026.Text = '' then exit;
  CallServerMethod('sSSFI704', 'SetFullBox', VarArrayOf([PidtTA005.Text, PidtTA026.Text]), vReturnVal);
  if not (vReturnVal[0]) then
  begin
    raise Exception.Create(vReturnVal[1]);
    exit;
  end
  else
  begin
    AddMemo('OK', '強制滿箱完成!!');
    button26.enabled := true;
  end;
end;

procedure TfrmcSSFI704.Timer1Timer(Sender: TObject);
begin
  inherited;
  btnMasterInsertClick(sender);
  timer1.Enabled := false;
end;

procedure TfrmcSSFI704.showClick(Sender: TObject);
begin
  inherited;
  try
    if (BarcodeTempleFile.Text <> '') then
    begin
      codesoft.Visible := show.Checked;
    end;
  except
  end;
end;

procedure TfrmcSSFI704.SpeedButton1Click(Sender: TObject);
begin
  inherited;
  if (BarcodeTempleFile.Text <> '') then
  begin
    BarcodeTempleFile.Text := '';
    codesoft.Documents.CloseAll(false);
    PreViewimage.Picture.Assign(nil);
    codesoft.Disconnect;
  end;
end;

procedure TfrmcSSFI704.DcdsSerialBeforeOpen(DataSet: TDataSet);
begin
  inherited;
  DcdsSerial.Params.ParamByName('MG001').Asstring := cdsMasterTA005.AsString;
  DcdsSerial.Params.ParamByName('MG003').Asstring := cdsMasterTA007.AsString;
end;

function TfrmcSSFI704.GetSerialPart(SN: string): string; //取得序號的料號
const
  //找出此序號的料號
  SQLstr = ' SELECT MO015 ' +
    '   FROM SSFMO (NOLOCK)  ' +
    '  WHERE MO001 = ''%s''  ';
begin
  with cdsquery do
  begin
    Close;
    SQL.Clear;
    SQL.Add(format(SQLstr, [SN]));
    Open;
    result := FieldByName('MO015').AsString;
  end;
end;

function TfrmcSSFI704.IsCombined(SN, MO, Process: string): Boolean; //判斷是否為被組合序號
const
  //找出序號是否為此製令製程被組合
  SQLstr = ' SELECT * ' +
    '   FROM SSFMG A(NOLOCK)  ' +
    '   JOIN SSFNM B(NOLOCK) ON (B.NM001 = A.MG001 AND B.NM002 = A.MG002) ' +
    '   JOIN SSFMO C(NOLOCK) ON (C.MO001 = ''%s'' AND C.MO015 = B.NM003) ' +
    '  WHERE A.MG001 = ''%s'' ' +
    '    AND A.MG003 = ''%s'' ';
begin
  with cdsquery do
  begin
    Close;
    SQL.Clear;
    SQL.Add(format(SQLstr, [SN, MO, Process]));
    Open;
    if Eof then
      result := False
    else
      result := True;
  end;
end;

function TfrmcSSFI704.DIsCompleteInput(ctype: string): Boolean; //判斷是否已輸入所有序號
begin
  if (ctype = 'combine') or (ctype = 'all') then
  begin
    with DcdsCombine do
    begin
      First;
      while not Eof do
      begin
        if FieldByName('TB003').AsString = '' then
        begin
          result := False;
          exit;
        end;
        next;
      end;
    end;
  end;
  if (ctype = 'serial') or (ctype = 'all') then
  begin
    with DcdsSerial do
    begin
      First;
      while not Eof do
      begin
        if FieldByName('TA001').AsString = '' then
        begin
          result := False;
          exit;
        end;
        next;
      end;
    end;
  end;
  result := True;
end;

function TfrmcSSFI704.IIsCompleteInput(ctype: string): Boolean; //判斷是否已輸入所有序號
begin
  if (ctype = 'combine') or (ctype = 'all') then
  begin
    with IcdsCombine do
    begin
      First;
      while not Eof do
      begin
        if FieldByName('TB003').AsString = '' then
        begin
          result := False;
          exit;
        end;
        next;
      end;
    end;
  end;
  if (ctype = 'serial') or (ctype = 'all') then
  begin
    with IcdsSerial do
    begin
      First;
      while not Eof do
      begin
        if FieldByName('TA001').AsString = '' then
        begin
          result := False;
          exit;
        end;
        next;
      end;
    end;
  end;
  result := True;
end;

function TfrmcSSFI704.KIsCompleteInput(ctype: string): Boolean; //判斷是否已輸入所有序號
begin
  if (ctype = 'combine') or (ctype = 'all') then
  begin
    with KcdsCombine do
    begin
      First;
      while not Eof do
      begin
        if FieldByName('TB003').AsString = '' then
        begin
          result := False;
          exit;
        end;
        next;
      end;
    end;
  end;
  if (ctype = 'serial') or (ctype = 'all') then
  begin
    with KcdsSerial do
    begin
      First;
      while not Eof do
      begin
        if FieldByName('TA001').AsString = '' then
        begin
          result := False;
          exit;
        end;
        next;
      end;
    end;
  end;
  result := True;
end;

procedure TfrmcSSFI704.IcdsSerialBeforeOpen(DataSet: TDataSet);
begin
  inherited;
  IcdsSerial.Params.ParamByName('MG001').Asstring := cdsMasterTA005.AsString;
  IcdsSerial.Params.ParamByName('MG003').Asstring := cdsMasterTA007.AsString;
end;

procedure TfrmcSSFI704.KcdsSerialBeforeOpen(DataSet: TDataSet);
begin
  inherited;
  KcdsSerial.Params.ParamByName('MG001').Asstring := cdsMasterTA005.AsString;
  KcdsSerial.Params.ParamByName('MG003').Asstring := cdsMasterTA007.AsString;
end;

procedure TfrmcSSFI704.DcdsCombineAfterOpen(DataSet: TDataSet);
const
  //找製令製程的被組合料號及數量
  SQLfmt = ' SELECT NM003,NM004 ' +
    '   FROM SSFNM A(NOLOCK) ' +
    '   JOIN SSFMG B(NOLOCK) ON (B.MG001 = A.NM001 AND B.MG002 = A.NM002) ' +
    '  WHERE MG001 = ''%s'' ' +
    '    AND MG003 = ''%s'' ';
var
  i, j: integer;
begin
  with qrySelect do
  begin
    Close;
    SQL.Clear;
    SQL.Add(Format(SQLfmt, [cdsMasterTA005.AsString, cdsMasterTA007.AsString]));
    Open;
    while not eof do
    begin
      j := FieldByName('NM004').AsInteger;
      for i := 1 to j do
      begin
        DataSet.Append;
        DataSet.FieldByName('NM003').AsString := FieldByName('NM003').AsString;
        DataSet.Post;
      end;
      next;
    end;
  end;
end;

procedure TfrmcSSFI704.IcdsCombineAfterOpen(DataSet: TDataSet);
const
  //找製令製程的被組合料號及數量
  SQLfmt = ' SELECT NM003,NM004 ' +
    '   FROM SSFNM A(NOLOCK) ' +
    '   JOIN SSFMG B(NOLOCK) ON (B.MG001 = A.NM001 AND B.MG002 = A.NM002) ' +
    '  WHERE MG001 = ''%s'' ' +
    '    AND MG003 = ''%s'' ';
var
  i, j: integer;
begin
  with qrySelect do
  begin
    Close;
    SQL.Clear;
    SQL.Add(Format(SQLfmt, [cdsMasterTA005.AsString, cdsMasterTA007.AsString]));
    Open;
    while not eof do
    begin
      j := FieldByName('NM004').AsInteger;
      for i := 1 to j do
      begin
        DataSet.Append;
        DataSet.FieldByName('NM003').AsString := FieldByName('NM003').AsString;
        DataSet.Post;
      end;
      next;
    end;
  end;
end;

procedure TfrmcSSFI704.KcdsCombineAfterOpen(DataSet: TDataSet);
const
  //找製令製程的被組合料號及數量
  SQLfmt = ' SELECT NM003,NM004 ' +
    '   FROM SSFNM A(NOLOCK) ' +
    '   JOIN SSFMG B(NOLOCK) ON (B.MG001 = A.NM001 AND B.MG002 = A.NM002) ' +
    '  WHERE MG001 = ''%s'' ' +
    '    AND MG003 = ''%s'' ';
var
  i, j: integer;
begin
  with qrySelect do
  begin
    Close;
    SQL.Clear;
    SQL.Add(Format(SQLfmt, [cdsMasterTA005.AsString, cdsMasterTA007.AsString]));
    Open;
    while not eof do
    begin
      j := FieldByName('NM004').AsInteger;
      for i := 1 to j do
      begin
        DataSet.Append;
        DataSet.FieldByName('NM003').AsString := FieldByName('NM003').AsString;
        DataSet.Post;
      end;
      next;
    end;
  end;
end;

procedure TfrmcSSFI704.SaveLog(SN: string);
const
  //找參數是否要 log 存檔
  SQLfmt = ' SELECT LOOKUP_CODE,LOOKUP_VALUE ' +
    '   FROM SSFTP(NOLOCK) ' +
    '  WHERE LOOKUP_CATALOG = ''LOG'' ' +
    '    AND ENABLED = ''Y'' ' +
    '    AND LOOKUP_CODE = ''%s'' ' +
    '    AND LOOKUP_VALUE = ''%s'' ';
  Directory = 'C:\SFIS\log';
  FileName = '.LOG';
var
  LOG_STR: string;
  LogFile: string;
  F: TextFile;
  iDate, iExceed, iCheckSN, iConfirm, iPrint, iSave, iSound: extended;
begin
//  with qrySelect do
  iDate := (eDate - sDate) * 24 * 60 * 60;
  iExceed := (eExceed - sExceed) * 24 * 60 * 60;
  iCheckSN := (eCheckSN - sCheckSN) * 24 * 60 * 60;
  iConfirm := (eConfirm - sConfirm) * 24 * 60 * 60;
  iPrint := (ePrint - sPrint) * 24 * 60 * 60;
  iSave := (eSave - sSave) * 24 * 60 * 60;
  iSound := (eSound - sSound) * 24 * 60 * 60;
  begin
    qrySelect.Close;
    qrySelect.SQL.Clear;
    qrySelect.SQL.Add(Format(SQLfmt, [PidtTA005.Text, PidtTA007.Text]));
    qrySelect.Open;
    if not qrySelect.eof then //log存檔
    begin
      LOG_STR := Formatdatetime('YYYY/MM/DD hh:mm:ss.zzz', now);
      LOG_STR := LOG_STR + ' MO:' + PidtTA005.Text + ' Process:' + PidtTA007.Text + ' SN:' + SN;
      LOG_STR := LOG_STR + ' ProcessTime:' + trim(Format('%13.3f', [iDate]));
      LOG_STR := LOG_STR + ' Exceed:' + trim(Format('%13.3f', [iExceed]));
      LOG_STR := LOG_STR + ' CheckSN:' + trim(Format('%13.3f', [iCheckSN]));
      LOG_STR := LOG_STR + ' Confirm:' + trim(Format('%13.3f', [iConfirm]));
      LOG_STR := LOG_STR + ' (Print:' + trim(Format('%13.3f', [iPrint]));
      LOG_STR := LOG_STR + ' Save:' + trim(Format('%13.3f', [iSave]));
      LOG_STR := LOG_STR + ' Sound:' + trim(Format('%13.3f', [iSound])) + ')';
      LogFile := Directory + '\' + FProgramName + Formatdatetime('YYYYMMDDHH', now) + FileName;
      if not DirectoryExists(Directory) then
        if not CreateDir(Directory) then
        begin
//          raise Exception.Create('無法建立LOG資料夾: '+ Directory);
          exit;
        end;

      AssignFile(F, LogFile);
      if FileExists(LogFile) then
        Append(F)
      else
        Rewrite(F);
      writeln(F, LOG_STR);
      Flush(F);
      CloseFile(F);
    end;
  end
end;

procedure TfrmcSSFI704.AidtTA045KeyUp(Sender: TObject; var Key: Word;
  Shift: TShiftState);
var
  qty: integer;
begin
  if Key = VK_RETURN then
  begin
    if trim(AidtTA045.Text) = '' then exit;

    try
      qty := strtoint(trim(AidtTA045.Text));
      if ((qty < 1) or (qty > 99)) then
      begin
        AddMemo('ERROR', '請先輸入正確的數字1-99!!');
        AidtTA045.SetFocus;
        exit;
      end;
    except
      AddMemo('ERROR', '請先輸入正確的數字1-99!!');
      AidtTA045.SetFocus;
      exit;
    end;

    if (qty > 1) then
    begin
      if not InputOp(qty) then begin
          AidtTA045.SetFocus;
          exit;
      end;
    end;
    PanelEmpDetail.Visible := true;

    APnlTA005.Visible := False;
    APnlTA007.Visible := False;
    APnlTA022.Visible := False;
    APnlTA008.Visible := False;
    APnlTA020.Visible := True;
    APnlTA003.Visible := False;
    APnlTA045.Visible := False;
    AidtTA020.Enabled := True;
    AidtTA020.SetFocus;
  {  AcdsCondition.Post;
    AbbConfirmClick(sender);       }
  end;
end;

procedure TfrmcSSFI704.AidtTA020Change(Sender: TObject);
var  vReturnVal: variant;
begin
  inherited;
  (Sender as TComboBox).Enabled:=false;
  cdsMasterTA018.Value:='';
  cdsMasterTA020.Value:=Copy(AidtTA020.Text, 1, 1);
  dtp_startDate.Date:=Date();
  dtp_startTime.Time:=Time();
  dtp_endDate.Date:=Date();
  dtp_endTime.Time:=Time();
  if(cdsMasterTA020.Value='Z') then begin
    (Sender as TComboBox).Enabled:=true;
    APnlTA005.Visible := False;
    APnlTA007.Visible := False;
    APnlTA022.Visible := False;
    APnlTA008.Visible := False;
    APnlTA020.Visible := False;
    APnlTA003.Visible := True;
    APnlTA045.Visible := False;
    dtp_startDate.SetFocus;
    exit;
  end;

  if (cdsMasterTA020.Value='P') or (cdsMasterTA020.Value='X') then begin
   if GetLot then begin
     AcdsCondition.Post;
     AbbConfirmClick(sender);
   end
   else begin
     cdsMasterTA020.Value := '';
    (Sender as TComboBox).Enabled:=true;
     Exit;
   end;
  end;
end;

procedure TfrmcSSFI704.TimeConfirmClick(Sender: TObject);
begin
  inherited;
  if not CheckTimeInterval then Exit; //檢查時間區間 20210930 PT.
  if GetLot then begin                //檢查過站類別並取批號 20210930 PT.
    AcdsCondition.Post;
    AbbConfirmClick(sender);
  end;
end;

function TfrmcSSFI704.CheckTimeInterval:Boolean;
var sDT,eDT: TDateTime;
begin
 result:= False;
 sDT:=StrToDateTime(FormatDateTime('YYYY/MM/DD',dtp_startDate.Date)+' '+FormatDateTime('HH:MM:SS',dtp_startTime.Time));
 eDT:=StrToDateTime(FormatDateTime('YYYY/MM/DD',dtp_endDate.Date)+' '+FormatDateTime('HH:MM:SS',dtp_endTime.Time));
 if(sDT>eDT) then begin
  AddMemo('ERROR', '時間輸入錯誤');
  exit;
 end;

 if(sDT+EncodeTime(12, 0, 0, 0)<eDT)then begin
  AddMemo('ERROR', '時間區間不得超過12小時');
  exit;
 end;
 result:= True;
end;

function TfrmcSSFI704.GetLot:Boolean;
var
   vReturnVal: Variant;
   List: TStringList;
   sD,sT,eD,eT:string;
   hProgress: Thandle;
begin
  if (cdsMasterTA005.AsString = '') then
    cdsMasterTA005.Asstring := AcdsConditionTA005.AsString;
  if (cdsMasterTA022.AsString = '') then
    cdsMasterTA022.Asstring := AcdsConditionTA022.AsString;
  if (cdsMasterTA007.AsString = '') then
    cdsMasterTA007.Asstring := AcdsConditionTA007.AsString;
  if (cdsMasterTA008.AsString = '') then
    cdsMasterTA008.Asstring := AcdsConditionTA008.AsString;
  if (cdsMasterTA045.AsString = '') then
    cdsMasterTA045.Asstring := AcdsConditionTA045.AsString;

  if cdsMasterTA020.Value = 'Z' then begin
    sD:=FormatDateTime('YYYYMMDD',dtp_startDate.Date);
    sT:=FormatDateTime('HHMMSS',dtp_startTime.Time);
    eD:=FormatDateTime('YYYYMMDD',dtp_endDate.Time);
    eT:=FormatDateTime('HHMMSS',dtp_endTime.Time);
  end
  else begin
    sD:=GetNowDate;
    sT:=GetNowTime;
    eD:=GetNowDate;
    eT:=GetNowTime;
  end;
  if (ISDEBUG) then AddMemo('DEBUG', 'debug: CallServerMethod:CheckLotMethod start');
  if (ISDEBUG) then AddMemo('DEBUG', Format('param:[cdsMasterTA005]%s,[TA007]%s,[startDate]%s,[startTime]%s,[endDate]%s,[endTime]%s,[TA020]%s,[TA008]%s,[TA045]%s',[trim(cdsMasterTA005.AsString),trim(cdsMasterTA007.AsString),sD,sT,eD,eT,cdsMasterTA020.Value,trim(cdsMasterTA008.AsString),trim(cdsMasterTA045.AsString)]));
  if (ISDEBUG) then AddMemo('DEBUG', Format('param:[AcdsConditionTA005]%s,[TA007]%s,[startDate]%s,[startTime]%s,[endDate]%s,[endTime]%s,[TA020]%s,[TA008]%s,[TA045]%s',[trim(AcdsConditionTA005.AsString),trim(AcdsConditionTA007.AsString),sD,sT,eD,eT,cdsMasterTA020.Value,trim(AcdsConditionTA008.AsString),trim(AcdsConditionTA045.AsString)]));

  try
      hProgress := ShowProgressForm('請稍候', '資料讀取中...');
      CallServerMethod('sSSFI710', 'CheckLot',
                        VarArrayOf([    trim(cdsMasterTA005.AsString),      //wo                    0
                                        trim(cdsMasterTA007.AsString),      //station               1
                                        sD,                                 //checkInOutStartDate   2
                                        sT,                                 //checkInOutStartTime   3
                                        eD,                                 //eDate                 4
                                        eT,                                 //eTime                 5
                                        cdsMasterTA020.Value,               //passType              6
                                        trim(cdsMasterTA008.AsString),      //line                  7
                                        trim(cdsMasterTA045.AsString),      //人數                  8
                                        FIP                                 //IP 20220411           9
                                        ])
                        , vReturnVal);
  finally
      FreeProgressForm(hProgress);
  end;
    if (ISDEBUG) then AddMemo('DEBUG', 'debug: CallServerMethod:CheckLotMethod end. '+vReturnVal[0]+' '+vReturnVal[1]+' '+vReturnVal[2] );
    if (vReturnVal[0]='false') then begin

      if POS('人數',vReturnVal[1])>0 then begin
        cdsMasterTA020.Value := '';
        cdsMasterTA018.Value := '';
        APnlTA005.Visible := False;
        APnlTA007.Visible := False;
        APnlTA022.Visible := False;
        APnlTA008.Visible := False;
        APnlTA020.Visible := False;
        APnlTA003.Visible := False;
        APnlTA045.Visible := True;
        AidtTA045.SetFocus;
        AidtTA045.Text := '';
        cdsMasterTA045.AsString :='';
        cdsOp.close;
        cdsOp.open;
        cdsOp.append;
        cdsOp.FieldByName('MV001').AsString := PidtTA022.Text;
        cdsOp.FieldByName('MV002').AsString := PidtTA022C.Text;
        cdsOp.Post;
      end
      else begin
        cdsMasterTA020.Value := '';
        cdsMasterTA018.Value := '';
        APnlTA005.Visible := False;
        APnlTA007.Visible := False;
        APnlTA022.Visible := False;
        APnlTA008.Visible := False;
        APnlTA020.Visible := True;
        APnlTA003.Visible := False;
        APnlTA045.Visible := False;
        AidtTA020.Enabled := True;
        AidtTA020.ItemIndex:=0;
        APnlTA020.SetFocus;
      end;
      AddMemo('ERROR',vReturnVal[1]);
      result:= False;
      exit;
    end;

    if (vReturnVal[0]='true') then
    begin
      List:= TStringList.Create;
      List.CommaText :=vReturnVal[2];
      cdsMasterTA018.Value := List[0];
      cdsMasterTA003.AsString:=List[1];
      cdsMasterTA004.AsString:=List[2];
      List.Free;
      result:= True;
      exit;
    end;
end;

function TfrmcSSFI704.InputOp(opCnt: integer): Boolean;
begin
  result := False;

  frmcSSFI7044 := TfrmcSSFI7044.Create(Self);
  try
    frmcSSFI7044.Params := VarArrayOf([cdsOp.Data, opCnt]);
    frmcSSFI7044.Showmodal;
    if (frmcSSFI7044.FAllowPass) then
    begin
      cdsOp.Data := frmcSSFI7044.cdsOp.Data;
      result := True;
    end;
  finally
    frmcSSFI7044.Free;
  end;
end;

procedure TfrmcSSFI704.btnLogoutClick(Sender: TObject);
var
  count: integer;
begin
  inherited;
  if trim(etEmpId.Text) = '' then exit;

  if not cdsOp.Active then exit;

  if (cdsOp.RecordCount > 1) then
  begin
    if cdsOp.Locate('MV001', trim(etEmpId.Text), [loCaseInsensitive]) then
    begin
      cdsOp.Delete;
      if (trim(PidtTA022.Text) = trim(etEmpId.Text)) then
      begin
        cdsOp.First;
        cdsMasterTA022.AsString := cdsOp.FieldByName('MV001').AsString;
        PidtTA022.Text := cdsOp.FieldByName('MV001').AsString;
        FLastTA022 := cdsOp.FieldByName('MV001').AsString;
      end;
      count := cdsOp.RecordCount;
      cdsMasterTA045.AsFloat := count;
      PidtTA045.Text := inttostr(count);
      FLastTA045 := cdsMasterTA045.AsString;
    end
    else
      AddMemo('ERROR','找不到員工代號 ' + trim(etEmpId.Text) + '!!');
  end
  else
    AddMemo('ERROR','不可刷退!!');
    etEmpId.Text := '';
end;

procedure TfrmcSSFI704.btnLoginClick(Sender: TObject);
var
  count: integer;
  vReturnVal: variant;
  empId: string;
begin
  empId := trim(etEmpId.Text);
  if trim(etEmpId.Text) = '' then exit;

  if not cdsOp.Active then exit;

  if cdsOp.Locate('MV001', empId, [loCaseInsensitive]) then
    AddMemo('ERROR','員工代號 ' + empId + '已存在!!')
  else
  begin
    //找員工代號
    CallServerMethod('sSSFmethod', 'GetCMSMV', VarArrayOf([empId]), vReturnVal);
    if vReturnVal[0] then
    begin
      cdsOp.append;
      cdsOp.FieldByName('MV001').AsString := vReturnVal[1];
      cdsOp.FieldByName('MV002').AsString := vReturnVal[2];
      cdsOp.Post;
      count := cdsOp.RecordCount;
      PidtTA045.Text := inttostr(count);
      cdsMasterTA045.AsFloat := count;
      FLastTA045 := cdsMasterTA045.AsString;
      FLastTA022 := cdsOp.FieldByName('MV001').AsString;
    end
    else
      AddMemo('ERROR','員工代號 ' + empId + '不存在!!');
  end;

  etEmpId.Text := '';
end;

procedure TfrmcSSFI704.cdsMasterTA045Change(Sender: TField);
begin
  inherited;
  if (trim(cdsMasterTA045.AsString) = '') or (trim(cdsMasterTA045.AsString) ='0') then
      PanelEmpDetail.Visible := false
  else
     PanelEmpDetail.Visible := true;
end;

procedure TfrmcSSFI704.FormCreate(Sender: TObject);
var err         :DWORD;
    IPs         : TStrings;
    i           :Integer;
    fStack      :TIdStack;
    sAllowIP    :string;
begin  
  inherited;
 //20220616 取得IP.MAC.主機名稱：
  fStack:= TIdStack.CreateStack;
  IPs   := TStringList.Create;
  IPs   := fStack.LocalAddresses;
  FIP   := '';
  cdsAllowIP.Close;
  cdsAllowIP.Open;
  if (cdsAllowIP.RecordCount>0) then
  begin
    cdsAllowIP.First;
    while not cdsAllowIP.Eof do
    begin
      sAllowIP := cdsAllowIP.FieldByName('LOOKUP_VALUE').Asstring;
      for i := 0 to IPs.Count-1 do
      begin
        if (Pos(sAllowIP, IPs[i])>0) then
        begin
          FIP := IPs[i];
          Break;
        end
      end;
      if FIP <> '' then Break;
      cdsAllowIP.Next;
    end;
  end;

  if FIP='' then FIP := IPs[0];
  FMAC         := GetClientMAC(FIP,err);
  FComputerName:= GetClientComputerName;
  StatusBar.Panels[4].Text:=FIP;
  StatusBar.Panels[5].Text:=FMAC;
  StatusBar.Panels[6].Text:=FComputerName;
  StatusBar.Panels[4].Width:=100;
  StatusBar.Panels[5].Width:=130;
  StatusBar.Panels[6].Width:=130;

end;


function SendArp(DestIP,SrcIP:ULONG;pMacAddr:pointer;PhyAddrLen:pointer) : DWord; StdCall; external 'iphlpapi.dll' name 'SendARP';
  function TfrmcSSFI704.GetClientMAC(const IPAddress: string; var ErrCode : DWORD): String;//用IP找出MAC
  var
    MacAddr    : Array[0..5] of Byte;
    DestIP     : ULONG;
    PhyAddrLen : ULONG;
    WSAData    : TWSAData;
  begin
    Result    :='';
    WSAStartup($0101, WSAData);
    try
      ZeroMemory(@MacAddr,SizeOf(MacAddr));
      DestIP    :=inet_addr(PAnsiChar(IPAddress));
      PhyAddrLen:=SizeOf(MacAddr);
      ErrCode   :=SendArp(DestIP,0,@MacAddr,@PhyAddrLen);
      if ErrCode = 0 then
        Result:=Format('%2.2x-%2.2x-%2.2x-%2.2x-%2.2x-%2.2x',[MacAddr[0], MacAddr[1],MacAddr[2], MacAddr[3], MacAddr[4], MacAddr[5]])
    finally
      WSACleanup;
    end;
  end;

function TfrmcSSFI704.GetClientComputerName:String;//找出電腦名稱
var
 ComputerName: array[0..MAX_COMPUTERNAME_LENGTH+1] of char;
 Size: Cardinal;
begin
  result:='';
  Size := MAX_COMPUTERNAME_LENGTH+1;
  GetComputerName(ComputerName, Size);
  Result:=StrPas(ComputerName);
end;

procedure TfrmcSSFI704.FormActivate(Sender: TObject);
var   vReturnVal: variant;
begin
  inherited;
  //確認程式版次
  if not IsVersionCorrect then begin
    btnMasterExitClick(nil);
  end; 
end;

procedure TfrmcSSFI704.etEmpIdKeyUp(Sender: TObject; var Key: Word;
  Shift: TShiftState);
begin
  inherited;
  etEmpId.Text := trim(etEmpId.Text);
  if (Key = VK_RETURN) then begin
  if ComboBox_InOut.ItemIndex = 0 then btnLoginClick(nil);
  if ComboBox_InOut.ItemIndex = 1 then btnLogoutClick(nil);
  etEmpId.SetFocus;
  end;
end;

function TfrmcSSFI704.IsVersionCorrect: boolean;
var vReturnVal: variant;
begin
  Result := True;
  CallServerMethod('sSSFI710','GetVersion',VarArrayOf([FProgramName]),vReturnVal);
  if (not vReturnVal[0]) then AddMemoMessage('程式版本檢查錯誤...！['+StatusBar.Panels[3].Text +'->'+ vReturnVal[1] +' ]')
  else if (StatusBar.Panels[3].Text <> vReturnVal[1]) then begin
       Showmessage('程式版本已更新，請關閉系統重載！['+ StatusBar.Panels[3].Text +'->'+ vReturnVal[1]+' ]');
       AddMemoMessage('程式版本已更新，請關閉系統重載！['+ StatusBar.Panels[3].Text +'->'+ vReturnVal[1]+' ]');
       Result := False;
  end;
end;

//替代料號
function TfrmcSSFI704.GetAlternativePart(snPart,sn,snType :string): string;
const
sqlstr = ' DECLARE @msg VARCHAR(500),@isPass VARCHAR(20) '
         + ' exec [dbo].[SSFpassV2CheckSNPartIsOk] ''%s'',''%s'',''%s'',''%s'', @msg output,@isPass OUTPUT '
         + ' SELECT @isPass as [Pass],@msg as [PART] ';
begin
  //替代料
  with cdsQuery do
  begin
    Close;
    SQL.Clear;
    SQL.Add(Format(sqlstr, [PidtTA005.Text,sn,snType,PidtTA007.Text]));
    Open;
    if (not Eof) and (FieldByName('Pass').AsString = 'TRUE') then
    begin
      Result := FieldByName('PART').AsString;
    end
    else Result := snPart;
  end;
end;

procedure TfrmcSSFI704.cdsAppurtenanceBeforeOpen(DataSet: TDataSet);
const
 sqlstr='SELECT VF003,VF004,SPACE(40) VF003x '
    + 'FROM SSFVF(NOLOCK) '
    + 'WHERE VF005='#39'Y'#39' '
    + ' AND VF001 IN (''%s'', ''%s'') '
    + ' AND VF002=''%s'' ';
begin
  inherited;
  with cdsAppurtenance do
  begin
    Close;
    SQL.Clear;
    SQL.Add(Format(sqlstr, [PidtTA005C2.Text,PidtTA005.Text,PidtTA007.Text]));
  end;
end;

procedure TfrmcSSFI704.bSetPrintClick(Sender: TObject);
begin
  inherited;
  if (BarcodeTempleFile.Text <> '') then
  begin
    codesoft.Dialogs.Item(lppxPrinterSelectDialog).show;
  end;
end;

function TfrmcSSFI704.IsBoxReelIDCombine: Boolean;
var vReturnVal,aa: variant;
begin
  CallServerMethod('sSSFmethod', 'GetSSFTP', VarArrayOf(['BOX_REELID', cdsMasterTA007.AsString,cdsMasterTA005C2.AsString]), vReturnVal);
  result := vReturnVal[0];  
end;

initialization
  RegisterPackageClass(TfrmcSSFI704);
end.

