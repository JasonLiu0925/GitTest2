object frmcSSFI7043: TfrmcSSFI7043
  Left = 533
  Top = 309
  Width = 610
  Height = 457
  Caption = '請確認客製屬性'
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
    Width = 594
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
    Width = 594
    Height = 80
    AutoSize = False
    Align = alBottom
    Color = clWhite
    DrawStyle = suiTile
    object Label1: TLabel
      Left = 8
      Top = 8
      Width = 408
      Height = 13
      Caption = 
        '如屬性的「值」是空白或不正確，請按「否」，並洽詢工業工程人員做確' +
        '認。'
      Color = clWhite
      Font.Charset = DEFAULT_CHARSET
      Font.Color = clRed
      Font.Height = -11
      Font.Name = 'MS Sans Serif'
      Font.Style = []
      ParentColor = False
      ParentFont = False
    end
    object bbConfirm: TsuiButton
      Left = 81
      Top = 48
      Width = 100
      Height = 23
      UIStyle = WinXP
      Font.Charset = CHINESEBIG5_CHARSET
      Font.Color = clBlack
      Font.Height = -15
      Font.Name = '新細明體'
      Font.Style = []
      Caption = '是(&Y)'
      AutoSize = False
      ParentFont = False
      TabOrder = 0
      Transparent = False
      ModalResult = 0
      Glyph.Data = {
        76010000424D7601000000000000760000002800000020000000100000000100
        04000000000000010000120B0000120B00001000000000000000000000000000
        800000800000008080008000000080008000808000007F7F7F00BFBFBF000000
        FF0000FF000000FFFF00FF000000FF00FF00FFFF0000FFFFFF00555555555555
        555555555555555555555555555555555555555555FF55555555555559055555
        55555555577FF5555555555599905555555555557777F5555555555599905555
        555555557777FF5555555559999905555555555777777F555555559999990555
        5555557777777FF5555557990599905555555777757777F55555790555599055
        55557775555777FF5555555555599905555555555557777F5555555555559905
        555555555555777FF5555555555559905555555555555777FF55555555555579
        05555555555555777FF5555555555557905555555555555777FF555555555555
        5990555555555555577755555555555555555555555555555555}
      Layout = blGlyphLeft
      Spacing = 4
      ResHandle = 0
      OnClick = bbConfirmClick
    end
    object bbCancel: TsuiButton
      Left = 410
      Top = 48
      Width = 100
      Height = 23
      UIStyle = WinXP
      Font.Charset = ANSI_CHARSET
      Font.Color = clWindowText
      Font.Height = -15
      Font.Name = '新細明體'
      Font.Style = []
      Caption = '否(&N)'
      AutoSize = False
      ParentFont = False
      TabOrder = 1
      Transparent = False
      ModalResult = 2
      Glyph.Data = {
        36060000424D3606000000000000360000002800000020000000100000000100
        18000000000000060000130B0000130B00000000000000000000C0C0C0C0C0C0
        C0C0C0C0C0C0C0C0C0C0C0C0C0C0C0C0C0C0C0C0C0C0C0C0C0C0C0C0C0C0C0C0
        C0C0C0C0C0C0C0C0C0C0C0C0C0C0C0C0C0C0C0C0C0C0C0C0C0C0C0C0C0C0C0C0
        C0C0C0C0C0C0C0C0C0C0C0C0C0C0C0C0C0C0C0C0C0C0C0C0C0C0C0C0C0C0C0C0
        000080808080C0C0C0C0C0C0C0C0C0C0C0C0C0C0C0C0C0C0C0C0C0C0C0C0C0C0
        C00000FFC0C0C0C0C0C0C0C0C0C0C0C0FFFFFFC0C0C0C0C0C0C0C0C0C0C0C0C0
        C0C0C0C0C0C0C0C0C0C0C0C0C0C0C0C0C0FFFFFFC0C0C0C0C0C0C0C0C0C0C0C0
        0000FF000080808080C0C0C0C0C0C0C0C0C0C0C0C0C0C0C0C0C0C0C0C0C0C0C0
        C0C0C0C0C0C0C0C0C0C0C0C0C0C0C0C0808080FFFFFFC0C0C0C0C0C0C0C0C0C0
        C0C0C0C0C0C0C0C0C0C0C0FFFFFFC0C0C0C0C0C0C0C0C0C0C0C0C0C0C0C0C0C0
        0000FF0000FF000080808080C0C0C0C0C0C0C0C0C0C0C0C0C0C0C00000FF8080
        80C0C0C0C0C0C0C0C0C0C0C0C0C0C0C0808080808080FFFFFFC0C0C0C0C0C0C0
        C0C0C0C0C0C0C0C0FFFFFF808080C0C0C0C0C0C0C0C0C0C0C0C0C0C0C0C0C0C0
        C0C0C00000FF0000FF000080808080C0C0C0C0C0C00000FF0000FF8080808080
        80C0C0C0C0C0C0C0C0C0C0C0C0C0C0C0C0C0C0808080808080FFFFFFC0C0C0C0
        C0C0C0C0C0FFFFFF808080C0C0C0C0C0C0C0C0C0C0C0C0C0C0C0C0C0C0C0C0C0
        C0C0C0C0C0C00000FF0000FF0000808080800000FF0000FF000080808080C0C0
        C0C0C0C0C0C0C0C0C0C0C0C0C0C0C0C0C0C0C0C0C0C0808080808080FFFFFFC0
        C0C0FFFFFF808080808080C0C0C0C0C0C0C0C0C0C0C0C0C0C0C0C0C0C0C0C0C0
        C0C0C0C0C0C0C0C0C00000FF0000FF0000800000FF000080808080C0C0C0C0C0
        C0C0C0C0C0C0C0C0C0C0C0C0C0C0C0C0C0C0C0C0C0C0C0C0C0808080808080FF
        FFFF808080808080C0C0C0C0C0C0C0C0C0C0C0C0C0C0C0C0C0C0C0C0C0C0C0C0
        C0C0C0C0C0C0C0C0C0C0C0C00000FF0000FF000080808080C0C0C0C0C0C0C0C0
        C0C0C0C0C0C0C0C0C0C0C0C0C0C0C0C0C0C0C0C0C0C0C0C0C0C0C0C080808080
        8080808080C0C0C0C0C0C0C0C0C0C0C0C0C0C0C0C0C0C0C0C0C0C0C0C0C0C0C0
        C0C0C0C0C0C0C0C0C00000FF0000FF0000800000FF808080C0C0C0C0C0C0C0C0
        C0C0C0C0C0C0C0C0C0C0C0C0C0C0C0C0C0C0C0C0C0C0C0C0C080808080808080
        8080808080C0C0C0C0C0C0C0C0C0C0C0C0C0C0C0C0C0C0C0C0C0C0C0C0C0C0C0
        C0C0C0C0C0C00000FF0000FF0000808080800000FF0000FF808080C0C0C0C0C0
        C0C0C0C0C0C0C0C0C0C0C0C0C0C0C0C0C0C0C0C0C0C0808080808080808080C0
        C0C0808080808080C0C0C0C0C0C0C0C0C0C0C0C0C0C0C0C0C0C0C0C0C0C0C0C0
        C0C0C00000FF0000FF000080808080C0C0C0C0C0C00000FF0000FF808080C0C0
        C0C0C0C0C0C0C0C0C0C0C0C0C0C0C0C0C0C0C0808080808080808080C0C0C0C0
        C0C0C0C0C0808080808080C0C0C0C0C0C0C0C0C0C0C0C0C0C0C0C0C0C0C0C0C0
        0000FF0000FF000080808080C0C0C0C0C0C0C0C0C0C0C0C00000FF808080C0C0
        C0C0C0C0C0C0C0C0C0C0C0C0C0C0C0C0808080808080808080C0C0C0C0C0C0C0
        C0C0C0C0C0C0C0C0808080C0C0C0C0C0C0C0C0C0C0C0C0C0C0C0C0C0C0C0C0C0
        0000FF000080808080C0C0C0C0C0C0C0C0C0C0C0C0C0C0C0C0C0C0C0C0C08080
        80C0C0C0C0C0C0C0C0C0C0C0C0C0C0C0808080808080C0C0C0C0C0C0C0C0C0C0
        C0C0C0C0C0C0C0C0C0C0C0C0C0C0C0C0C0C0C0C0C0C0C0C0C0C0C0C0C0C0C0C0
        C0C0C0C0C0C0C0C0C0C0C0C0C0C0C0C0C0C0C0C0C0C0C0C0C0C0C0C0C0C00000
        FF808080C0C0C0C0C0C0C0C0C0C0C0C0C0C0C0C0C0C0C0C0C0C0C0C0C0C0C0C0
        C0C0C0C0C0C0C0C0C0C0C0C0C0C0808080C0C0C0C0C0C0C0C0C0C0C0C0C0C0C0
        C0C0C0C0C0C0C0C0C0C0C0C0C0C0C0C0C0C0C0C0C0C0C0C0C0C0C0C0C0C0C0C0
        C0C0C0C0C0C0C0C0C0C0C0C0C0C0C0C0C0C0C0C0C0C0C0C0C0C0C0C0C0C0C0C0
        C0C0C0C0C0C0C0C0C0C0C0C0C0C0C0C0C0C0C0C0C0C0C0C0C0C0C0C0C0C0C0C0
        C0C0C0C0C0C0C0C0C0C0C0C0C0C0C0C0C0C0C0C0C0C0C0C0C0C0C0C0C0C0C0C0
        C0C0C0C0C0C0C0C0C0C0C0C0C0C0C0C0C0C0C0C0C0C0C0C0C0C0C0C0C0C0C0C0
        C0C0C0C0C0C0C0C0C0C0C0C0C0C0C0C0C0C0C0C0C0C0C0C0C0C0}
      Layout = blGlyphLeft
      Spacing = 4
      ResHandle = 0
    end
  end
  object pnlQuery: TPanel
    Left = 0
    Top = 0
    Width = 594
    Height = 320
    Align = alClient
    BevelInner = bvRaised
    BevelOuter = bvLowered
    TabOrder = 2
    object pnlImage: TsuiImagePanel
      Left = 2
      Top = 2
      Width = 590
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
        Top = 1
        Width = 588
        Height = 314
        DefaultRowHeight = 17
        Align = alClient
        Color = clWhite
        DataSource = FdsSSFBQ
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
            FieldName = 'BP004'
            Width = 158
            Visible = True
            Fix = False
            CancelMouseFix = False
          end
          item
            Expanded = False
            FieldName = 'BQ004'
            Visible = True
            Fix = False
            CancelMouseFix = False
          end>
      end
    end
  end
  object FcdsSSFBQ: TInfoClientDataSet
    Aggregates = <>
    CommandText = 
      #13#10'select MF001,BQ003,BQ004,BP004,BP005,BP006 from SSFMF(nolock)'#13 +
      #10'inner join SSFNT(nolock)'#13#10'on NT003 = MF002'#13#10'inner join SSFBP(no' +
      'lock)'#13#10'on BP001 = NT001'#13#10'and BP002 = NT002'#13#10'left join SSFBQ(nolo' +
      'ck)'#13#10'on BQ001 = MF001'#13#10'and BQ002 = BP003'#13#10'and BQ003 = BP004'#13#10'whe' +
      're 1=0'#13#10
    Params = <>
    ProviderName = 'GLModule.qrySelect'
    SQL.Strings = (
      ''
      'select MF001,BQ003,BQ004,BP004,BP005,BP006 from SSFMF(nolock)'
      'inner join SSFNT(nolock)'
      'on NT003 = MF002'
      'inner join SSFBP(nolock)'
      'on BP001 = NT001'
      'and BP002 = NT002'
      'left join SSFBQ(nolock)'
      'on BQ001 = MF001'
      'and BQ002 = BP003'
      'and BQ003 = BP004'
      'where 1=0')
    DisableTranslate = False
    Left = 12
    Top = 248
    object FcdsSSFBQMF001: TStringField
      DisplayLabel = '製令號碼'
      FieldName = 'MF001'
      FixedChar = True
      Size = 15
    end
    object FcdsSSFBQBQ003: TStringField
      DisplayLabel = '屬性'
      FieldName = 'BQ003'
      FixedChar = True
      Size = 50
    end
    object FcdsSSFBQBQ004: TStringField
      DisplayLabel = '值'
      FieldName = 'BQ004'
      FixedChar = True
      Size = 50
    end
    object FcdsSSFBQBP004: TStringField
      DisplayLabel = '屬性'
      FieldName = 'BP004'
      FixedChar = True
      Size = 50
    end
    object FcdsSSFBQBP005: TStringField
      DisplayLabel = '值'
      FieldName = 'BP005'
      FixedChar = True
      Size = 50
    end
    object FcdsSSFBQBP006: TStringField
      DisplayLabel = '列印填充值'
      FieldName = 'BP006'
      FixedChar = True
      Size = 50
    end
  end
  object FdsSSFBQ: TDataSource
    DataSet = FcdsSSFBQ
    Left = 52
    Top = 248
  end
end
