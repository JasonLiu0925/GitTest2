unit fmcSSFI7041;

interface

uses
  Windows, Messages, SysUtils, Classes, Graphics, Controls, Forms, Dialogs,
  RefVals, Db, DBClient, InfoClient, StdCtrls, Buttons,
  ExtCtrls, ComCtrls, Mask, InfoCtrls, RepClient,  SUIButton,
  SUIImagePanel,  ButtonLP2;

type
  TfrmcSSFI7041 = class(TForm)
    StatusBar: TStatusBar;
    memMessage: TListBox;
    pnlFunction: TsuiImagePanel;
    bbConfirm: TsuiButton;
    bbCancel: TsuiButton;
    pnlQuery: TPanel;
    pnlImage: TsuiImagePanel;
    InfoLabel11: TInfoLabel;
    idtMX001: TInfoDBEdit;
    idtMX002: TInfoDBEdit;
    RepClient: TRepClient;
    cdsCondition: TInfoClientDataSet;
    dsCondition: TDataSource;
    rvCondition: TRefValComponent;
    cdsSelect: TInfoClientDataSet;
    dsSelect: TDataSource;
    cdsGroup: TInfoClientDataSet;
    cdsQuery: TInfoClientDataSet;
    InfoLabel1: TInfoLabel;
    idtMX003: TInfoDBEdit;
    InfoLabel2: TInfoLabel;
    cdsConditionMX001: TStringField;
    cdsConditionMX002: TStringField;
    cdsConditionMX003: TStringField;
    procedure bbConfirmClick(Sender: TObject);
    procedure idtMX001ButtonClick(Sender: TObject);
    procedure FormShow(Sender: TObject);
  private
    procedure CheckKeyInField;
    { Private declarations }
  public
    FTA005,FTA007 : String;
    FAllowPass : Boolean;
    { Public declarations }
  end;

var
  frmcSSFI7041: TfrmcSSFI7041;

implementation

{$R *.DFM}

uses
  CommonUtils, ApUtils,DefineUtils,UserUtils,AFM2BaseFMUtils;

procedure TfrmcSSFI7041.FormShow(Sender: TObject);
begin
  inherited;
  cdsCondition.Open;
  cdsCondition.Edit;
  FAllowPass := False;
end;

procedure TfrmcSSFI7041.bbConfirmClick(Sender: TObject);
var
  hProgress : Thandle;
  vReturnVal : variant;
begin
  inherited;
  try
//  hProgress := ShowProgressForm('是否放行','放行檢查作業中,請稍候!!');
    CheckKeyInField;                  // 檢核該輸入的欄位是否有輸入
    //新增放行數量資料
    CallServerMethod('sSSFPassNew','SetAllowPassAdd',VarArrayOf([FTA005,FTA007,idtMX001.Text,idtMX002.Text,idtMX003.Text,GetNowDate,GetNowTime]),vReturnVal);
    // 判斷是否有錯誤
    if (vReturnVal[0]) then
    begin
      raise Exception.Create(vReturnVal[1]);
    end
    else
    begin
      FAllowPass := True;
      close;
    end;  
  finally
//  FreeProgressForm(hProgress);
  end;
end;

procedure TfrmcSSFI7041.CheckKeyInField;
begin
  if trim(cdsCondition.FieldByName('MX001').AsString) = '' then
  begin
    raise Exception.Create('放行者ID必須輸入!!');
  end;
  if trim(cdsCondition.FieldByName('MX002').AsString) = '' then
  begin
    raise Exception.Create('密碼必須輸入!!');
  end;
  if trim(cdsCondition.FieldByName('MX003').AsString) = '' then
  begin
    raise Exception.Create('放行數量必須輸入!!');
  end;
  if (StrtoInt(trim(cdsCondition.FieldByName('MX003').AsString)) <= 0) then
  begin
    raise Exception.Create('放行數量必須大於0!!');
  end;
end;

procedure TfrmcSSFI7041.idtMX001ButtonClick(Sender: TObject);
const
  SQLfmt = ' SELECT MX001 FROM SSFMX (NOLOCK)' +
           '  ORDER BY MX001 ' ;
begin
  inherited;
  if not EditShowQueryForm(Sender,SQLfmt) then Exit;
end;

initialization
  RegisterPackageClass(TfrmcSSFI7041);
end.
