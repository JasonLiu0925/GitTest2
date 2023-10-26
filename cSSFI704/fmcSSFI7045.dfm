object frmcSSFI7045: TfrmcSSFI7045
  Left = 466
  Top = 218
  Width = 561
  Height = 461
  Caption = '請刷入配件/EX Label'
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
  object StatusBar: TStatusBar
    Left = 0
    Top = 404
    Width = 545
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
  object pnlFunction: TsuiImagePanel
    Left = 0
    Top = 368
    Width = 545
    Height = 36
    AutoSize = False
    Align = alBottom
    Color = clWhite
    DrawStyle = suiTile
    object Label2: TLabel
      Left = 8
      Top = 12
      Width = 185
      Height = 13
      Caption = '配件 appurtenance / EX Label'
      Font.Charset = DEFAULT_CHARSET
      Font.Color = clWindowText
      Font.Height = -11
      Font.Name = 'MS Sans Serif'
      Font.Style = [fsBold]
      ParentFont = False
    end
    object editAppurtenance: TEdit
      Left = 192
      Top = 8
      Width = 177
      Height = 21
      Color = clInfoBk
      TabOrder = 0
      OnKeyUp = editAppurtenanceKeyUp
    end
  end
  object pnlQuery: TPanel
    Left = 0
    Top = 0
    Width = 545
    Height = 368
    Align = alClient
    BevelInner = bvRaised
    BevelOuter = bvLowered
    TabOrder = 2
    object pnlImage: TsuiImagePanel
      Left = 2
      Top = 2
      Width = 541
      Height = 364
      AutoSize = False
      Align = alClient
      Font.Charset = ANSI_CHARSET
      Font.Color = clWindowText
      Font.Height = -13
      Font.Name = '細明體'
      Font.Style = []
      Color = clWhite
      DrawStyle = suiTile
      object FdbgdSSFVF: TInfoDBGrid
        Left = 1
        Top = 1
        Width = 539
        Height = 294
        DefaultRowHeight = 17
        Align = alClient
        Color = clWhite
        DataSource = dsSSFVF
        FixedColor = 39423
        Font.Charset = CHINESEBIG5_CHARSET
        Font.Color = clWindowText
        Font.Height = -13
        Font.Name = '新細明體'
        Font.Style = []
        Options = [dgEditing, dgTitles, dgIndicator, dgColLines, dgRowLines, dgTabs, dgConfirmDelete, dgCancelOnExit]
        ParentFont = False
        ReadOnly = True
        TabOrder = 0
        TitleFont.Charset = CHINESEBIG5_CHARSET
        TitleFont.Color = clWhite
        TitleFont.Height = -13
        TitleFont.Name = '新細明體'
        TitleFont.Style = [fsBold]
        IntervalColor = 15921906
        Columns = <
          item
            Expanded = False
            FieldName = 'VF003'
            Width = 132
            Visible = True
            Fix = False
            CancelMouseFix = False
          end
          item
            Expanded = False
            FieldName = 'VF004'
            Width = 200
            Visible = True
            Fix = False
            CancelMouseFix = False
          end
          item
            Expanded = False
            FieldName = 'VF003x'
            Width = 141
            Visible = True
            Fix = False
            CancelMouseFix = False
          end>
      end
      object memMessage: TListBox
        Left = 1
        Top = 295
        Width = 539
        Height = 68
        Hint = '訊息區--顯示錯誤訊息'
        TabStop = False
        Align = alBottom
        Font.Charset = CHINESEBIG5_CHARSET
        Font.Color = clWindowText
        Font.Height = -12
        Font.Name = '新細明體'
        Font.Style = [fsBold]
        ItemHeight = 20
        ParentFont = False
        Style = lbOwnerDrawFixed
        TabOrder = 1
      end
    end
  end
  object cdsAppurtenance: TInfoClientDataSet
    Aggregates = <>
    CommandText = 
      'SELECT VF003,VF004,SPACE(40) VF003x'#13#10'FROM SSFVF(NOLOCK)'#9#9#9#9' '#13#10'WH' +
      'ERE 1=0'#13#10
    Params = <>
    ProviderName = 'GLModule.qrySelect'
    SQL.Strings = (
      'SELECT VF003,VF004,SPACE(40) VF003x'
      'FROM SSFVF(NOLOCK)'#9#9#9#9' '
      'WHERE 1=0')
    DisableTranslate = False
    Left = 12
    Top = 248
    InfoClient_ = {
      9619E0BD010000001800000003000000000003000000BE000556463030330100
      4900000002000753554254595045020049000A00466978656443686172000557
      4944544802000200280005564630303401004900000002000753554254595045
      020049000A004669786564436861720005574944544802000200280006564630
      30337801004900000002000753554254595045020049000A0046697865644368
      6172000557494454480200020028000100044C4349440400010000000000}
    InfoClient_Struct = {
      094669656C64446566730E01044E616D65060556463030330844617461547970
      6507086674537472696E670453697A6502280001044E616D6506055646303034
      08446174615479706507086674537472696E670453697A6502280001044E616D
      65060656463030337808446174615479706507086674537472696E670453697A
      6502280000095461626C654E616D6506115353465646284E4F4C4F434B290909
      09090E5461626C654E616D65416C696173060254310C50726F76696465724E61
      6D65060971727953656C6563741245787472614C6566744A6F696E4461746173
      0E0000}
    object cdsAppurtenanceVF003: TStringField
      DisplayLabel = '配件/EX Label 代碼'
      FieldName = 'VF003'
      FixedChar = True
      Size = 40
    end
    object cdsAppurtenanceVF004: TStringField
      DisplayLabel = '配件/EX Label 名稱'
      FieldName = 'VF004'
      FixedChar = True
      Size = 40
    end
    object cdsAppurtenanceVF003x: TStringField
      DisplayLabel = '配件/EX Label 代碼'
      FieldName = 'VF003x'
      FixedChar = True
      Size = 40
    end
  end
  object dsSSFVF: TDataSource
    DataSet = cdsAppurtenance
    Left = 52
    Top = 248
  end
end
