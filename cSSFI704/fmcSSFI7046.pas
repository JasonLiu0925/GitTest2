{ 
ver_20230921 PT.
數量檢查改到PROC一併處理
新增參數sSN 檢核時需排除自己
}

unit fmcSSFI7046;

interface

uses
  Windows, Messages, SysUtils, Classes, Graphics, Controls, Forms, Dialogs,
  RefVals, Db, DBClient, InfoClient, StdCtrls, Buttons,
  ExtCtrls, ComCtrls, Mask, InfoCtrls, RepClient, SUIButton,
  SUIImagePanel, ButtonLP2, Grids, AdvDBGrids;

type
  TfrmcSSFI7046 = class(TForm)
    StatusBar: TStatusBar;
    Label3: TLabel;
    edtQty: TEdit;
    Label1: TLabel;
    edtReelid: TEdit;
    cdsQuery: TInfoClientDataSet;
    procedure FormShow(Sender: TObject);
    procedure FormActivate(Sender: TObject);
    procedure edtQtyKeyUp(Sender: TObject; var Key: Word;
      Shift: TShiftState);
    procedure edtReelidKeyUp(Sender: TObject; var Key: Word;
      Shift: TShiftState);
  private
    count: integer;
    { Private declarations }
  public
    bAllowPass: Boolean;
    sWO, sBox, sReelId, sErrMsg, sSN: String;
    iQty: integer;
    { Public declarations }
  end;

var
  frmcSSFI7046: TfrmcSSFI7046;

implementation

{$R *.DFM}

uses
  CommonUtils, ApUtils, DefineUtils, UserUtils, AFM2BaseFMUtils, fmcSSFI704;

procedure TfrmcSSFI7046.FormShow(Sender: TObject);
begin
  inherited;
  bAllowPass := False;
  sReelId := '';
  iQty    := 0;
  sErrMsg := '';
  edtQty.ReadOnly := false;
  edtReelid.ReadOnly := true;
end;

procedure TfrmcSSFI7046.FormActivate(Sender: TObject);
begin
  edtReelid.Color := cl3DLight;
  edtQty.SetFocus;
end;

procedure TfrmcSSFI7046.edtQtyKeyUp(Sender: TObject; var Key: Word;
  Shift: TShiftState);
var qty: integer;
begin
  if Key = VK_RETURN then
  begin
    if trim(edtQty.Text) = '' then Exit;
    try
      qty := strtoint(edtQty.Text);
      edtQty.ReadOnly := true;
      edtReelid.ReadOnly := false;
      sReelId := '';
      edtReelid.Color := clInfoBk;
      edtReelid.SetFocus;
    except on E: Exception do
      begin
        sErrMsg := E.Message;
        MessageDlg(sErrMsg, mtError, [mbOk], 0);
      end;
    end;
  end;
end;

procedure TfrmcSSFI7046.edtReelidKeyUp(Sender: TObject; var Key: Word;
  Shift: TShiftState);
const 
  execSQL2= ' DECLARE @ResultValue INT,@Msg VARCHAR(200) '
          + ' exec [dbo].[SSFI704_BoxReelIDCombine] :WO,:SN,:SN_SEQ,:BOX,:REELID,:QTY,:TYPE, @ResultValue output,@Msg output '
          + ' SELECT @ResultValue as [isPass],@Msg as [msg] ';
begin
  if Key = VK_RETURN then
  begin
    if trim(edtReelid.Text) = '' then Exit;
    try
        cdsQuery.Close;
        cdsQuery.sql.clear;
        cdsQuery.sql.add(execSQL2);
        cdsQuery.Params.ParamByName('WO').AsString     := sWO;
        cdsQuery.Params.ParamByName('SN').AsString     := sSN;
        cdsQuery.Params.ParamByName('SN_SEQ').AsString := '';
        cdsQuery.Params.ParamByName('BOX').AsString    := sBox;
        cdsQuery.Params.ParamByName('REELID').AsString := edtReelid.Text;
        cdsQuery.Params.ParamByName('QTY').AsInteger   := strtoint(edtQty.Text);
        cdsQuery.Params.ParamByName('TYPE').AsInteger  := 1;     //1:檢核 2:寫入
        cdsQuery.Open;
        if cdsQuery.FieldByName('isPass').AsInteger = 0 then
        begin
          iQty    := strtoint(edtQty.Text);
          sReelid := edtReelid.Text;
          bAllowPass := True;
        end
        else
        begin
          iQty    := 0 ;
          sReelid := '';
          sErrMsg := cdsQuery.FieldByName('msg').AsString;
        end;
    except on E: Exception do
        sErrMsg := E.Message;
    end;
    Self.close;
  end;
end;

initialization
  RegisterPackageClass(TfrmcSSFI7046);
end.

