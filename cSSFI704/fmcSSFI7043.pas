unit fmcSSFI7043;

interface

uses
  Windows, Messages, SysUtils, Classes, Graphics, Controls, Forms, Dialogs,
  RefVals, Db, DBClient, InfoClient, StdCtrls, Buttons,
  ExtCtrls, ComCtrls, Mask, InfoCtrls, RepClient, SUIButton,
  SUIImagePanel, ButtonLP2, Grids, AdvDBGrids;

type
  TfrmcSSFI7043 = class(TForm)
    StatusBar: TStatusBar;
    pnlFunction: TsuiImagePanel;
    bbConfirm: TsuiButton;
    bbCancel: TsuiButton;
    pnlQuery: TPanel;
    pnlImage: TsuiImagePanel;
    FcdsSSFBQ: TInfoClientDataSet;
    FdsSSFBQ: TDataSource;
    FcdsSSFBQMF001: TStringField;
    FcdsSSFBQBQ003: TStringField;
    FcdsSSFBQBQ004: TStringField;
    FcdsSSFBQBP004: TStringField;
    FcdsSSFBQBP005: TStringField;
    FcdsSSFBQBP006: TStringField;
    FdbgdSSFBQ: TInfoDBGrid;
    Label1: TLabel;
    procedure bbConfirmClick(Sender: TObject);
    procedure FormShow(Sender: TObject);
  private
    { Private declarations }
  public
    FAllowPass: Boolean;
    Params: Variant;
    { Public declarations }
  end;

var
  frmcSSFI7043: TfrmcSSFI7043;

implementation

{$R *.DFM}

uses
  CommonUtils, ApUtils, DefineUtils, UserUtils, AFM2BaseFMUtils;

procedure TfrmcSSFI7043.FormShow(Sender: TObject);
begin
  inherited;
  FAllowPass := False;
  FcdsSSFBQ.Data := Params[0];
end;

procedure TfrmcSSFI7043.bbConfirmClick(Sender: TObject);
begin
  inherited;
  FcdsSSFBQ.first;
  while not FcdsSSFBQ.eof do
  begin
    if (trim(FcdsSSFBQBQ004.AsString) = '') then
    begin
      raise Exception.Create(trim(FcdsSSFBQBP004.AsString) + '的值是空白的，請確認!!');
      exit;
    end;
    FcdsSSFBQ.next;
  end;
  FAllowPass := True;
  close;
end;

initialization
  RegisterPackageClass(TfrmcSSFI7043);
end.

