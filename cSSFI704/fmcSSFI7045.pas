unit fmcSSFI7045;

interface

uses
  Windows, Messages, SysUtils, Classes, Graphics, Controls, Forms, Dialogs,
  RefVals, Db, DBClient, InfoClient, StdCtrls, Buttons,
  ExtCtrls, ComCtrls, Mask, InfoCtrls, RepClient, SUIButton,
  SUIImagePanel, ButtonLP2, Grids, AdvDBGrids;

type
  TfrmcSSFI7045 = class(TForm)
    StatusBar: TStatusBar;
    pnlFunction: TsuiImagePanel;
    pnlQuery: TPanel;
    pnlImage: TsuiImagePanel;
    cdsAppurtenance: TInfoClientDataSet;
    dsSSFVF: TDataSource;
    FdbgdSSFVF: TInfoDBGrid;
    Label2: TLabel;
    editAppurtenance: TEdit;
    memMessage: TListBox;
    cdsAppurtenanceVF003: TStringField;
    cdsAppurtenanceVF004: TStringField;
    cdsAppurtenanceVF003x: TStringField;
    procedure FormShow(Sender: TObject);
    procedure editAppurtenanceKeyUp(Sender: TObject; var Key: Word;
      Shift: TShiftState);
    procedure FormActivate(Sender: TObject);
  private
    count: integer;
    { Private declarations }
  public
    FAllowPass: Boolean;
    Params: Variant;
    { Public declarations }
  end;

var
  frmcSSFI7045: TfrmcSSFI7045;

implementation

{$R *.DFM}

uses
  CommonUtils, ApUtils, DefineUtils, UserUtils, AFM2BaseFMUtils;

procedure TfrmcSSFI7045.FormShow(Sender: TObject);
begin
  inherited;
  FAllowPass := False;
  cdsAppurtenance.Data := Params[0];
end;

procedure TfrmcSSFI7045.editAppurtenanceKeyUp(Sender: TObject; var Key: Word;
  Shift: TShiftState);
var
  vReturnVal: variant;
begin
  inherited;
  if Key = VK_RETURN then
  begin
    editAppurtenance.Text := trim(editAppurtenance.Text);
    if editAppurtenance.Text = '' then exit;

    with cdsAppurtenance do
    begin
      if Locate('VF003', editAppurtenance.Text, [loCaseInsensitive]) then
      begin
        Edit;
        FieldByName('VF003x').AsString := editAppurtenance.Text;
        Post;
      end
      else
      begin
        Showmessage('查無此配件/EX Label序號');
        editAppurtenance.SelectAll;
        exit;
      end;
      First;
      while not Eof do
      begin
        if FieldByName('VF003x').AsString = '' then break;
        Next;
        if Eof then
        begin
          FAllowPass := True;
          Self.close;
        end;
      end;
      editAppurtenance.SelectAll;
    end; 
  end;
end;

procedure TfrmcSSFI7045.FormActivate(Sender: TObject);
begin
  editAppurtenance.SetFocus;
end;

initialization
  RegisterPackageClass(TfrmcSSFI7045);
end.

