object frmcSSFI7044: TfrmcSSFI7044
  Left = 610
  Top = 263
  Width = 614
  Height = 457
  Caption = '請輸入員工代號'
  Color = clBtnFace
  Font.Charset = DEFAULT_CHARSET
  Font.Color = clWindowText
  Font.Height = -11
  Font.Name = 'MS Sans Serif'
  Font.Style = []
  OldCreateOrder = True
  Position = poScreenCenter
  OnShow = FormShow
  PixelsPerInch = 96
  TextHeight = 13
  object StatusBar: TStatusBar
    Left = 0
    Top = 400
    Width = 598
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
    Top = 320
    Width = 598
    Height = 80
    AutoSize = False
    Align = alBottom
    Color = clWhite
    DrawStyle = suiTile
    object Label1: TLabel
      Left = 1
      Top = 66
      Width = 596
      Height = 13
      Align = alBottom
      Color = clWhite
      Font.Charset = DEFAULT_CHARSET
      Font.Color = clRed
      Font.Height = -11
      Font.Name = 'MS Sans Serif'
      Font.Style = []
      ParentColor = False
      ParentFont = False
    end
    object Label2: TLabel
      Left = 8
      Top = 12
      Width = 57
      Height = 13
      Caption = '員工代號:'
      Font.Charset = DEFAULT_CHARSET
      Font.Color = clWindowText
      Font.Height = -11
      Font.Name = 'MS Sans Serif'
      Font.Style = [fsBold]
      ParentFont = False
    end
    object etOp: TEdit
      Left = 88
      Top = 8
      Width = 177
      Height = 21
      TabOrder = 0
      OnKeyUp = etOpKeyUp
    end
  end
  object pnlQuery: TPanel
    Left = 0
    Top = 0
    Width = 598
    Height = 320
    Align = alClient
    BevelInner = bvRaised
    BevelOuter = bvLowered
    TabOrder = 2
    object pnlImage: TsuiImagePanel
      Left = 2
      Top = 2
      Width = 594
      Height = 316
      AutoSize = False
      Align = alClient
      Font.Charset = ANSI_CHARSET
      Font.Color = clWindowText
      Font.Height = -13
      Font.Name = '細明體'
      Font.Style = []
      Color = clWhite
      DrawStyle = suiTile
      object FdbgdSSFBQ: TInfoDBGrid
        Left = 1
        Top = 42
        Width = 592
        Height = 273
        DefaultRowHeight = 17
        Align = alClient
        Color = clWhite
        DataSource = dsOp
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
            FieldName = 'MV001'
            Width = 158
            Visible = True
            Fix = False
            CancelMouseFix = False
          end
          item
            Expanded = False
            FieldName = 'MV002'
            Width = 258
            Visible = True
            Fix = False
            CancelMouseFix = False
          end>
      end
      object Panel1: TPanel
        Left = 1
        Top = 1
        Width = 592
        Height = 41
        Align = alTop
        TabOrder = 1
        object Label3: TLabel
          Left = 0
          Top = 17
          Width = 7
          Height = 13
        end
      end
    end
  end
  object cdsOp: TInfoClientDataSet
    Aggregates = <>
    CommandText = 'select MV001,MV002 from CMSMV(nolock)'#13#10'where 1=0'#13#10
    Params = <>
    ProviderName = 'GLModule.qrySelect'
    SQL.Strings = (
      'select MV001,MV002 from CMSMV(nolock)'
      'where 1=0')
    DisableTranslate = False
    Left = 12
    Top = 248
    object cdsOpMV001: TStringField
      DisplayLabel = '員工代號'
      FieldName = 'MV001'
      FixedChar = True
      Size = 10
    end
    object cdsOpMV002: TStringField
      DisplayLabel = '姓名'
      FieldName = 'MV002'
      FixedChar = True
      Size = 10
    end
  end
  object dsOp: TDataSource
    DataSet = cdsOp
    Left = 52
    Top = 248
  end
end
