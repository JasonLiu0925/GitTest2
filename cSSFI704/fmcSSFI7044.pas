unit fmcSSFI7044;

interface

uses
  Windows, Messages, SysUtils, Classes, Graphics, Controls, Forms, Dialogs,
  RefVals, Db, DBClient, InfoClient, StdCtrls, Buttons,
  ExtCtrls, ComCtrls, Mask, InfoCtrls, RepClient, SUIButton,
  SUIImagePanel, ButtonLP2, Grids, AdvDBGrids;

type
  TfrmcSSFI7044 = class(TForm)
    StatusBar: TStatusBar;
    pnlFunction: TsuiImagePanel;
    pnlQuery: TPanel;
    pnlImage: TsuiImagePanel;
    cdsOp: TInfoClientDataSet;
    dsOp: TDataSource;
    FdbgdSSFBQ: TInfoDBGrid;
    Label1: TLabel;
    cdsOpMV001: TStringField;
    cdsOpMV002: TStringField;
    Label2: TLabel;
    etOp: TEdit;
    Panel1: TPanel;
    Label3: TLabel;
    procedure FormShow(Sender: TObject);
    procedure etOpKeyUp(Sender: TObject; var Key: Word;
      Shift: TShiftState);
  private
    count: integer;
    { Private declarations }
  public
    FAllowPass: Boolean;
    Params: Variant;
    { Public declarations }
  end;

var
  frmcSSFI7044: TfrmcSSFI7044;

implementation

{$R *.DFM}

uses
  CommonUtils, ApUtils, DefineUtils, UserUtils, AFM2BaseFMUtils;

procedure TfrmcSSFI7044.FormShow(Sender: TObject);
begin
  inherited;
  FAllowPass := False;
  cdsOp.Data := Params[0];
  count := Params[1];
  Label3.Caption := '應輸入' + inttostr(count) + '人';
end;

procedure TfrmcSSFI7044.etOpKeyUp(Sender: TObject; var Key: Word;
  Shift: TShiftState);
var
  vReturnVal: variant;
begin
  inherited;

  if Key = VK_RETURN then
  begin

    if trim(etOp.Text) = '' then exit;

    if cdsOp.Locate('MV001', trim(etOp.Text), [loCaseInsensitive]) then
    begin
      Label1.caption := '員工代號' + trim(etOp.Text) + '已輸入過了!!';
      etOp.Text := '';
      Exit;
    end;

    //找員工代號
    CallServerMethod('sSSFmethod', 'GetCMSMV', VarArrayOf([trim(etOp.Text)]), vReturnVal);
    if not vReturnVal[0] then
    begin
      Label1.caption := '員工代號' + trim(etOp.Text) + '不存在!!';
      etOp.Text := '';
      Exit;
    end;

    Label1.caption := '';

    cdsOp.append;
    cdsOp.FieldByName('MV001').AsString := vReturnVal[1];
    cdsOp.FieldByName('MV002').AsString := vReturnVal[2];
    cdsOp.Post;

    etOp.Text := '';

    if (cdsOp.RecordCount = count) then
    begin
      FAllowPass := True;
      close;
    end;
  end;
end;

initialization
  RegisterPackageClass(TfrmcSSFI7044);
end.

