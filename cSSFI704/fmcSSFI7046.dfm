object frmcSSFI7046: TfrmcSSFI7046
  Left = 641
  Top = 309
  Width = 359
  Height = 162
  Caption = '請刷入REELID & QTY'
  Color = clBtnFace
  Font.Charset = DEFAULT_CHARSET
  Font.Color = clWindowText
  Font.Height = -11
  Font.Name = 'MS Sans Serif'
  Font.Style = []
  OldCreateOrder = True
  Position = poScreenCenter
  OnActivate = FormActivate
  OnShow = FormShow
  PixelsPerInch = 96
  TextHeight = 13
  object Label3: TLabel
    Left = 44
    Top = 36
    Width = 59
    Height = 13
    Caption = '數量Qty：'
    Font.Charset = DEFAULT_CHARSET
    Font.Color = clWindowText
    Font.Height = -11
    Font.Name = 'MS Sans Serif'
    Font.Style = [fsBold]
    ParentFont = False
  end
  object Label1: TLabel
    Left = 46
    Top = 68
    Width = 57
    Height = 13
    Caption = 'Reel ID：'
    Font.Charset = DEFAULT_CHARSET
    Font.Color = clWindowText
    Font.Height = -11
    Font.Name = 'MS Sans Serif'
    Font.Style = [fsBold]
    ParentFont = False
  end
  object StatusBar: TStatusBar
    Left = 0
    Top = 105
    Width = 343
    Height = 19
    Panels = <
      item
        Alignment = taCenter
        Text = '狀態'
        Width = 50
      end
      item
        Alignment = taCenter
        Style = psOwnerDraw
        Text = '瀏覽'
        Width = 50
      end
      item
        Style = psOwnerDraw
        Text = '說明'
        Width = 150
      end>
    SimplePanel = False
  end
  object edtQty: TEdit
    Left = 118
    Top = 32
    Width = 177
    Height = 21
    Color = clInfoBk
    TabOrder = 1
    OnKeyUp = edtQtyKeyUp
  end
  object edtReelid: TEdit
    Left = 118
    Top = 64
    Width = 177
    Height = 21
    Color = clInfoBk
    TabOrder = 2
    OnKeyUp = edtReelidKeyUp
  end
  object cdsQuery: TInfoClientDataSet
    Aggregates = <>
    Params = <>
    ProviderName = 'GLModule.qrySelect'
    DisableTranslate = False
    Left = 2
    Top = 1
  end
end
