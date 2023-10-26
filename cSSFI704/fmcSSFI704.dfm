inherited frmcSSFI704: TfrmcSSFI704
  Left = 554
  Top = 158
  Caption = 'frmcSSFI704'
  ClientHeight = 750
  ClientWidth = 1239
  OnActivate = FormActivate
  OnCloseQuery = nil
  PixelsPerInch = 96
  TextHeight = 15
  object Splitter1: TSplitter [0]
    Left = 0
    Top = 42
    Width = 1239
    Height = 2
    Cursor = crVSplit
    Align = alTop
  end
  inherited StatusBar: TStatusBar
    Top = 731
    Width = 1239
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
      end
      item
        Text = 'ver_20230921'
        Width = 100
      end>
  end
  inherited memMessage: TListBox
    Top = 663
    Width = 1239
    Height = 68
  end
  inherited Panel1: TPanel
    Width = 1239
    Visible = False
    inherited blpMaster: TButtonLayoutPanel2
      Left = 226
      Width = 1176
      Align = alNone
      States = <
        item
          State = 'Init'
        end
        item
          State = 'Browse'
          EnabledControlsStr_ = 
            'btnMasterInsert'#13#10'btnMasterModify'#13#10'btnMasterDelete'#13#10'btnMasterQuer' +
            'y'#13#10'btnMasterExit'#13#10'btnNullify'#13#10'btnConfirm'
        end
        item
          State = 'Edit'
          EnabledControlsStr_ = 'btnMasterSave'#13#10'btnMasterCancel'
        end
        item
          State = 'Insert'
          EnabledControlsStr_ = 'btnMasterSave'#13#10'btnMasterCancel'
        end
        item
          State = 'Delete'
          EnabledControlsStr_ = 'btnMasterSave'#13#10'btnMasterCancel'
        end
        item
          State = 'Query'
          EnabledControlsStr_ = 'btnMasterSave'#13#10'btnMasterCancel'
        end>
      inherited btnNullify: TInfoButton
        OnClick = btnNullifyClick
      end
      inherited btnDisConfirm: TInfoButton
        OnClick = btnDisConfirmClick
      end
      inherited btnConfirm: TInfoButton
        OnClick = btnConfirmClick
      end
    end
  end
  inherited pnlMaster: TPanel
    Top = 44
    Width = 1239
    Height = 615
    Align = alClient
    inherited Splitter2: TSplitter
      Left = 151
      Width = 2
      Height = 613
    end
    inherited dbgdView: TInfoDBGrid
      Width = 150
      Height = 613
      Color = clWhite
      FixedColor = 39423
      Font.Height = -13
      Font.Name = '新細明體'
      TitleFont.Height = -13
      Visible = False
      IntervalColor = 15921906
      Columns = <
        item
          Expanded = False
          FieldName = 'TA01X'
          PickList.Strings = ()
          Visible = True
          Fix = False
          CancelMouseFix = False
          Description.Strings = ()
        end
        item
          Expanded = False
          FieldName = 'TA02X'
          PickList.Strings = ()
          Visible = True
          Fix = False
          CancelMouseFix = False
          Description.Strings = ()
        end>
    end
    inherited pnlImage: TsuiImagePanel
      Left = 153
      Width = 1085
      Height = 613
      Picture.Data = {00}
      Font.Height = -13
      inherited imgPicture: TImage
        Left = 450
      end
      object Label2: TLabel
        Left = 600
        Top = 8
        Width = 42
        Height = 13
        Caption = 'Label2'
      end
      object Label5: TLabel
        Left = 176
        Top = 8
        Width = 42
        Height = 13
        Caption = 'Label5'
      end
      object suiImagePanel1: TsuiImagePanel
        Left = 1
        Top = 1
        Width = 1083
        Height = 147
        AutoSize = False
        Align = alTop
        DrawStyle = suiTile
        object suiImagePanel2: TsuiImagePanel
          Left = 862
          Top = 1
          Width = 220
          Height = 145
          Picture.Data = {
            07544269746D6170F6000000424DF60000000000000036000000280000000800
            0000080000000100180000000000C0000000C40E0000C40E0000000000000000
            0000EFEFEFEFEFEFEFEFEFEFEFEFEFEFEFEFEFEFEFEFEFEFEFEFEFEBEFEFEBEF
            EFEBEFEFEBEFEFEBEFEFEBEFEFEBEFEFEBEFEFEFEFEFEFEFEFEFEFEFEFEFEFEF
            EFEFEFEFEFEFEFEFEFEFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF
            FFFFEFEFEFEFEFEFEFEFEFEFEFEFEFEFEFEFEFEFEFEFEFEFEFEFEFEBEFEFEBEF
            EFEBEFEFEBEFEFEBEFEFEBEFEFEBEFEFEBEFEFEFEFEFEFEFEFEFEFEFEFEFEFEF
            EFEFEFEFEFEFEFEFEFEFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF
            FFFF}
          AutoSize = False
          Align = alRight
          DrawStyle = suiTile
          object PnlClear: TsuiImagePanel
            Left = 1
            Top = 131
            Width = 218
            Height = 13
            AutoSize = False
            Align = alBottom
            Caption = 'Clear'
            Color = clYellow
            DrawStyle = suiTile
            OnDblClick = PnlClearDblClick
          end
          object DBChart1: TDBChart
            Left = 1
            Top = 1
            Width = 218
            Height = 130
            BackWall.Brush.Color = clWhite
            BackWall.Brush.Style = bsClear
            Gradient.Direction = gdBottomTop
            Gradient.EndColor = clAqua
            Gradient.Visible = True
            MarginBottom = 0
            MarginLeft = 0
            MarginRight = 0
            MarginTop = 0
            Title.Font.Charset = ANSI_CHARSET
            Title.Font.Color = clBlue
            Title.Font.Height = -11
            Title.Font.Name = '新細明體'
            Title.Font.Style = []
            Title.Text.Strings = (
              '數量')
            Align = alClient
            TabOrder = 1
            object Series1: TBarSeries
              Marks.ArrowLength = 20
              Marks.Style = smsValue
              Marks.Visible = True
              DataSource = cdsCounter
              SeriesColor = 4259584
              ShowInLegend = False
              Title = '計數器PASS'
              XLabelsSource = 'PASS'
              XValues.DateTime = False
              XValues.Name = 'X'
              XValues.Multiplier = 1
              XValues.Order = loAscending
              YValues.DateTime = False
              YValues.Name = 'Bar'
              YValues.Multiplier = 1
              YValues.Order = loNone
              YValues.ValueSource = 'PASSNUM'
              object TeeFunction1: TAverageTeeFunction
              end
            end
          end
        end
        object suiImagePanel6: TsuiImagePanel
          Left = 1
          Top = 1
          Width = 523
          Height = 145
          AutoSize = False
          Alignment = taLeftJustify
          Align = alClient
          Font.Charset = CHINESEBIG5_CHARSET
          Font.Color = clWindowText
          Font.Height = -13
          Font.Name = '新細明體'
          Font.Style = []
          Color = clWhite
          DrawStyle = suiTile
          object InfoLabel33: TInfoLabel
            Left = 22
            Top = 70
            Width = 52
            Height = 13
            Caption = '裝箱日期'
            Alignment = taRightJustify
            Color = clWhite
            ParentColor = False
          end
          object InfoLabel34: TInfoLabel
            Left = 169
            Top = 71
            Width = 52
            Height = 13
            Caption = '裝箱時間'
            Alignment = taRightJustify
            Color = clWhite
            ParentColor = False
          end
          object InfoLabel55: TInfoLabel
            Left = 22
            Top = 6
            Width = 52
            Height = 13
            Caption = '製令單號'
            Alignment = taRightJustify
            Color = clWhite
            ParentColor = False
          end
          object InfoLabel41: TInfoLabel
            Left = 358
            Top = 118
            Width = 112
            Height = 16
            Caption = '按 Esc 鍵可Reset'
            Alignment = taRightJustify
            Color = clWhite
            Font.Charset = CHINESEBIG5_CHARSET
            Font.Color = clRed
            Font.Height = -16
            Font.Name = '新細明體'
            Font.Style = []
            ParentColor = False
            ParentFont = False
          end
          object InfoLabel57: TInfoLabel
            Left = 483
            Top = 29
            Width = 52
            Height = 13
            Caption = '每箱個數'
            Alignment = taRightJustify
            Color = clWhite
            ParentColor = False
          end
          object InfoLabel32: TInfoLabel
            Left = 22
            Top = 111
            Width = 52
            Height = 13
            Caption = '員工代號'
            Alignment = taRightJustify
            Color = clWhite
            ParentColor = False
          end
          object InfoLabel80: TInfoLabel
            Left = 343
            Top = 53
            Width = 47
            Height = 13
            Caption = 'Com Port'
            Alignment = taRightJustify
            Color = clWhite
            ParentColor = False
          end
          object InfoLabel31: TInfoLabel
            Left = 22
            Top = 49
            Width = 52
            Height = 13
            Caption = '製程代號'
            Alignment = taRightJustify
            Color = clWhite
            ParentColor = False
          end
          object InfoLabel63: TInfoLabel
            Left = 9
            Top = 90
            Width = 65
            Height = 13
            Caption = '工作站代號'
            Alignment = taRightJustify
            Color = clWhite
            ParentColor = False
          end
          object InfoLabel6: TInfoLabel
            Left = 209
            Top = 6
            Width = 26
            Height = 13
            Caption = '料號'
            Alignment = taRightJustify
            Color = clWhite
            ParentColor = False
          end
          object InfoLabel7: TInfoLabel
            Left = 346
            Top = 6
            Width = 26
            Height = 13
            Caption = '名稱'
            Alignment = taRightJustify
            Color = clWhite
            ParentColor = False
          end
          object InfoLabel8: TInfoLabel
            Left = 346
            Top = 30
            Width = 26
            Height = 13
            Caption = '批量'
            Alignment = taRightJustify
            Color = clWhite
            ParentColor = False
          end
          object InfoLabel9: TInfoLabel
            Left = 495
            Top = 53
            Width = 39
            Height = 13
            Caption = '完成數'
            Alignment = taRightJustify
            Color = clWhite
            ParentColor = False
          end
          object InfoLabel10: TInfoLabel
            Left = 21
            Top = 28
            Width = 52
            Height = 13
            Caption = '加工順序'
            Alignment = taRightJustify
            Color = clWhite
            ParentColor = False
          end
          object InfoLabel11: TInfoLabel
            Left = 482
            Top = 77
            Width = 52
            Height = 13
            Caption = '列印時機'
            Alignment = taRightJustify
            Color = clWhite
            ParentColor = False
          end
          object InfoLabel13: TInfoLabel
            Left = 508
            Top = 101
            Width = 26
            Height = 13
            Caption = '人數'
            Alignment = taRightJustify
            Color = clWhite
            ParentColor = False
          end
          object InfoLabel26: TInfoLabel
            Left = 623
            Top = 77
            Width = 52
            Height = 13
            Caption = '過站類別'
            Alignment = taRightJustify
            Color = clWhite
            ParentColor = False
          end
          object InfoLabel24: TInfoLabel
            Left = 623
            Top = 101
            Width = 52
            Height = 13
            Caption = '過站批號'
            Alignment = taRightJustify
            Color = clWhite
            ParentColor = False
          end
          object infoReelid: TInfoLabel
            Left = 537
            Top = 118
            Width = 117
            Height = 20
            Caption = '滿箱結合REELID'
            Alignment = taRightJustify
            Color = clWhite
            Font.Charset = CHINESEBIG5_CHARSET
            Font.Color = clBlue
            Font.Height = -16
            Font.Name = '微軟正黑體'
            Font.Style = []
            ParentColor = False
            ParentFont = False
            Visible = False
          end
          object PidtTA003: TInfoDBEdit
            Left = 76
            Top = 68
            Width = 94
            Height = 21
            TabStop = False
            CharCase = ecUpperCase
            Color = 15790320
            DataField = 'TA003'
            DataSource = dsMaster
            ButtonWidth = 17
            LinkStyle = lsDate
            ReadOnly = True
            TabOrder = 0
            DisableColor = 15790320
          end
          object PidtTA004: TInfoDBEdit
            Left = 224
            Top = 69
            Width = 89
            Height = 21
            TabStop = False
            CharCase = ecUpperCase
            Color = 15790320
            DataField = 'TA004'
            DataSource = dsMaster
            ButtonWidth = 17
            ReadOnly = True
            TabOrder = 1
            DisableColor = 15790320
          end
          object PidtTA005: TInfoDBEdit
            Left = 76
            Top = 3
            Width = 121
            Height = 21
            TabStop = False
            CharCase = ecUpperCase
            Color = 15790320
            DataField = 'TA005'
            DataSource = dsMaster
            ButtonWidth = 17
            LinkStyle = lsEllipsis
            ReadOnly = True
            TabOrder = 2
            DisableColor = 15790320
          end
          object BWeightStart: TsuiButton
            Left = 619
            Top = 3
            Width = 95
            Height = 23
            UIStyle = MacOS
            Caption = '開始秤重(&W)'
            AutoSize = False
            Visible = False
            TabOrder = 3
            Transparent = False
            ModalResult = 0
            Layout = blGlyphLeft
            Spacing = 4
            ResHandle = 0
            OnClick = BWeightStartClick
          end
          object BWeightStop: TsuiButton
            Left = 724
            Top = 3
            Width = 94
            Height = 23
            UIStyle = MacOS
            Caption = '停止秤重(&C)'
            AutoSize = False
            Visible = False
            TabOrder = 4
            Transparent = False
            ModalResult = 0
            Layout = blGlyphLeft
            Spacing = 4
            ResHandle = 0
            OnClick = BWeightStopClick
          end
          object PidtMF013: TInfoDBEdit
            Left = 538
            Top = 26
            Width = 71
            Height = 21
            TabStop = False
            CharCase = ecUpperCase
            Color = 15790320
            DataField = 'MF013'
            DataSource = dsMaster
            ButtonWidth = 17
            ReadOnly = True
            TabOrder = 5
            DisableColor = 15790320
          end
          object suiButton2: TsuiButton
            Left = 374
            Top = 74
            Width = 79
            Height = 23
            UIStyle = WinXP
            Caption = '換製令'
            AutoSize = False
            TabOrder = 6
            Transparent = False
            ModalResult = 0
            Glyph.Data = {
              76010000424D7601000000000000760000002800000020000000100000000100
              04000000000000010000120B0000120B00001000000000000000000000000000
              800000800000008080008000000080008000808000007F7F7F00BFBFBF000000
              FF0000FF000000FFFF00FF000000FF00FF00FFFF0000FFFFFF00333300000000
              0000333377777777777733330FFFFFFFFFF033337F3FFF3F3FF733330F000F0F
              00F033337F777373773733330FFFFFFFFFF033337F3FF3FF3FF733330F00F00F
              00F033337F773773773733330FFFFFFFFFF033337FF3333FF3F7333300FFFF00
              F0F03333773FF377F7373330FB00F0F0FFF0333733773737F3F7330FB0BF0FB0
              F0F0337337337337373730FBFBF0FB0FFFF037F333373373333730BFBF0FB0FF
              FFF037F3337337333FF700FBFBFB0FFF000077F333337FF37777E0BFBFB000FF
              0FF077FF3337773F7F37EE0BFB0BFB0F0F03777FF3733F737F73EEE0BFBF00FF
              00337777FFFF77FF7733EEEE0000000003337777777777777333}
            Layout = blGlyphLeft
            Spacing = 4
            ResHandle = 0
            OnClick = suiButton2Click
          end
          object PidtTA022: TInfoDBEdit
            Left = 76
            Top = 110
            Width = 94
            Height = 21
            TabStop = False
            CharCase = ecUpperCase
            Color = 15790320
            DataField = 'TA022'
            DataSource = dsMaster
            ButtonWidth = 17
            LinkStyle = lsEllipsis
            ReadOnly = True
            TabOrder = 7
            DisableColor = 15790320
          end
          object PidtTA022C: TInfoDBEdit
            Left = 171
            Top = 112
            Width = 167
            Height = 17
            TabStop = False
            BorderStyle = bsNone
            Color = clWhite
            DataField = 'TA022C'
            DataSource = dsMaster
            ButtonWidth = 17
            ReadOnly = True
            TabOrder = 8
            DisableColor = 15790320
          end
          object CBComPort: TComboBox
            Left = 394
            Top = 49
            Width = 85
            Height = 21
            Color = 11927549
            Font.Charset = CHINESEBIG5_CHARSET
            Font.Color = clWindowText
            Font.Height = -13
            Font.Name = '新細明體'
            Font.Style = []
            ItemHeight = 13
            ParentFont = False
            TabOrder = 9
          end
          object PidtTA007: TInfoDBEdit
            Left = 76
            Top = 46
            Width = 94
            Height = 21
            TabStop = False
            CharCase = ecUpperCase
            Color = 15790320
            DataField = 'TA007'
            DataSource = dsMaster
            ButtonWidth = 17
            LinkStyle = lsEllipsis
            ReadOnly = True
            TabOrder = 10
            DisableColor = 15790320
          end
          object PidtTA007C: TInfoDBEdit
            Left = 171
            Top = 49
            Width = 142
            Height = 18
            TabStop = False
            BorderStyle = bsNone
            Color = clWhite
            DataField = 'TA007C'
            DataSource = dsMaster
            ButtonWidth = 17
            ReadOnly = True
            TabOrder = 11
            DisableColor = 15790320
          end
          object PidtTA008: TInfoDBEdit
            Left = 76
            Top = 89
            Width = 94
            Height = 21
            TabStop = False
            CharCase = ecUpperCase
            Color = 15790320
            DataField = 'TA008'
            DataSource = dsMaster
            ButtonWidth = 17
            LinkStyle = lsEllipsis
            ReadOnly = True
            TabOrder = 12
            DisableColor = 15790320
          end
          object PidtTA008C: TInfoDBEdit
            Left = 171
            Top = 91
            Width = 142
            Height = 18
            TabStop = False
            BorderStyle = bsNone
            Color = clWhite
            DataField = 'TA008C'
            DataSource = dsMaster
            ButtonWidth = 17
            ReadOnly = True
            TabOrder = 13
            DisableColor = 15790320
          end
          object suiButton1: TsuiButton
            Left = 631
            Top = 33
            Width = 76
            Height = 23
            UIStyle = WinXP
            Font.Charset = CHINESEBIG5_CHARSET
            Font.Color = clWindowText
            Font.Height = -12
            Font.Name = '新細明體'
            Font.Style = []
            Caption = '換製程'
            AutoSize = False
            Visible = False
            ParentFont = False
            TabOrder = 14
            Transparent = False
            ModalResult = 0
            Glyph.Data = {
              76010000424D7601000000000000760000002800000020000000100000000100
              04000000000000010000120B0000120B00001000000000000000000000000000
              800000800000008080008000000080008000808000007F7F7F00BFBFBF000000
              FF0000FF000000FFFF00FF000000FF00FF00FFFF0000FFFFFF00333300000000
              0000333377777777777733330FFFFFFFFFF033337F3FFF3F3FF733330F000F0F
              00F033337F777373773733330FFFFFFFFFF033337F3FF3FF3FF733330F00F00F
              00F033337F773773773733330FFFFFFFFFF033337FF3333FF3F7333300FFFF00
              F0F03333773FF377F7373330FB00F0F0FFF0333733773737F3F7330FB0BF0FB0
              F0F0337337337337373730FBFBF0FB0FFFF037F333373373333730BFBF0FB0FF
              FFF037F3337337333FF700FBFBFB0FFF000077F333337FF37777E0BFBFB000FF
              0FF077FF3337773F7F37EE0BFB0BFB0F0F03777FF3733F737F73EEE0BFBF00FF
              00337777FFFF77FF7733EEEE0000000003337777777777777333}
            Layout = blGlyphLeft
            Spacing = 4
            ResHandle = 0
            OnClick = suiButton1Click
          end
          object suiButton3: TsuiButton
            Left = 717
            Top = 32
            Width = 96
            Height = 23
            UIStyle = WinXP
            Caption = '換員工代號'
            AutoSize = False
            Visible = False
            TabOrder = 15
            Transparent = False
            ModalResult = 0
            Glyph.Data = {
              76010000424D7601000000000000760000002800000020000000100000000100
              04000000000000010000120B0000120B00001000000000000000000000000000
              800000800000008080008000000080008000808000007F7F7F00BFBFBF000000
              FF0000FF000000FFFF00FF000000FF00FF00FFFF0000FFFFFF00333300000000
              0000333377777777777733330FFFFFFFFFF033337F3FFF3F3FF733330F000F0F
              00F033337F777373773733330FFFFFFFFFF033337F3FF3FF3FF733330F00F00F
              00F033337F773773773733330FFFFFFFFFF033337FF3333FF3F7333300FFFF00
              F0F03333773FF377F7373330FB00F0F0FFF0333733773737F3F7330FB0BF0FB0
              F0F0337337337337373730FBFBF0FB0FFFF037F333373373333730BFBF0FB0FF
              FFF037F3337337333FF700FBFBFB0FFF000077F333337FF37777E0BFBFB000FF
              0FF077FF3337773F7F37EE0BFB0BFB0F0F03777FF3733F737F73EEE0BFBF00FF
              00337777FFFF77FF7733EEEE0000000003337777777777777333}
            Layout = blGlyphLeft
            Spacing = 4
            ResHandle = 0
            OnClick = suiButton3Click
          end
          object PidtTA005C2: TInfoDBEdit
            Left = 240
            Top = 3
            Width = 100
            Height = 21
            TabStop = False
            CharCase = ecUpperCase
            Color = 15790320
            DataField = 'TA005C2'
            DataSource = dsMaster
            ButtonWidth = 17
            ReadOnly = True
            TabOrder = 16
            DisableColor = 15790320
          end
          object PidtTA005C3: TInfoDBEdit
            Left = 373
            Top = 3
            Width = 236
            Height = 21
            TabStop = False
            CharCase = ecUpperCase
            Color = 15790320
            DataField = 'TA005C3'
            DataSource = dsMaster
            ButtonWidth = 17
            ReadOnly = True
            TabOrder = 17
            DisableColor = 15790320
          end
          object PidtTA005C: TInfoDBEdit
            Left = 374
            Top = 27
            Width = 54
            Height = 21
            TabStop = False
            CharCase = ecUpperCase
            Color = 15790320
            DataField = 'TA005C'
            DataSource = dsMaster
            ButtonWidth = 17
            ReadOnly = True
            TabOrder = 18
            DisableColor = 15790320
          end
          object PidtTA005C1: TInfoDBEdit
            Left = 538
            Top = 50
            Width = 70
            Height = 21
            TabStop = False
            CharCase = ecUpperCase
            Color = 15790320
            DataField = 'TA005C1'
            DataSource = dsMaster
            ButtonWidth = 17
            ReadOnly = True
            TabOrder = 19
            DisableColor = 15790320
          end
          object PidtTA006: TInfoDBEdit
            Left = 76
            Top = 25
            Width = 94
            Height = 21
            TabStop = False
            CharCase = ecUpperCase
            Color = 15790320
            DataField = 'TA006'
            DataSource = dsMaster
            ButtonWidth = 17
            LinkStyle = lsEllipsis
            ReadOnly = True
            TabOrder = 20
            DisableColor = 15790320
          end
          object PidtNW004: TInfoDBEdit
            Left = 539
            Top = 74
            Width = 69
            Height = 21
            TabStop = False
            CharCase = ecUpperCase
            Color = 15790320
            DataField = 'NW004'
            DataSource = dsMaster
            ButtonWidth = 17
            LinkStyle = lsEllipsis
            ReadOnly = True
            TabOrder = 21
            DisableColor = 15790320
          end
          object PidtTA045: TInfoDBEdit
            Left = 538
            Top = 97
            Width = 70
            Height = 21
            TabStop = False
            CharCase = ecUpperCase
            Color = 15790320
            DataField = 'TA045'
            DataSource = dsMaster
            ButtonWidth = 17
            ReadOnly = True
            TabOrder = 22
            DisableColor = 15790320
          end
          object PidtTA020: TInfoDBEdit
            Left = 676
            Top = 75
            Width = 109
            Height = 21
            Color = 15790320
            DataField = 'TA020'
            DataSource = dsMaster
            ButtonWidth = 17
            LinkStyle = lsLookupGrid
            ReadOnly = True
            TabOrder = 23
          end
          object idtTA018: TInfoDBEdit
            Left = 676
            Top = 99
            Width = 109
            Height = 21
            Color = 15790320
            DataField = 'TA018'
            DataSource = dsMaster
            ButtonWidth = 17
            ReadOnly = True
            TabOrder = 24
          end
          object DBEdit1: TDBEdit
            Left = 272
            Top = 152
            Width = 124
            Height = 21
            DataField = 'TA039'
            DataSource = dsMaster
            TabOrder = 25
          end
        end
        object PanelEmpDetail: TPanel
          Left = 524
          Top = 1
          Width = 338
          Height = 145
          Align = alRight
          Alignment = taLeftJustify
          BevelOuter = bvNone
          Caption = 'PanelEmpDetail'
          ParentColor = True
          TabOrder = 2
          object Label3: TLabel
            Left = 208
            Top = 36
            Width = 28
            Height = 13
            Caption = '工號'
          end
          object dbgdOp: TInfoDBGrid
            Left = 0
            Top = 0
            Width = 201
            Height = 145
            DefaultRowHeight = 17
            Align = alLeft
            DataSource = dsOp
            FixedColor = 39423
            Font.Charset = CHINESEBIG5_CHARSET
            Font.Color = clWindowText
            Font.Height = -13
            Font.Name = '新細明體'
            Font.Style = []
            Options = [dgEditing, dgTitles, dgIndicator, dgColLines, dgRowLines, dgTabs, dgConfirmDelete, dgCancelOnExit]
            ParentColor = True
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
                Width = 80
                Visible = True
                Fix = False
                CancelMouseFix = False
              end
              item
                Expanded = False
                FieldName = 'MV002'
                Width = 80
                Visible = True
                Fix = False
                CancelMouseFix = False
              end>
          end
          object etEmpId: TEdit
            Left = 240
            Top = 32
            Width = 81
            Height = 21
            Font.Charset = CHINESEBIG5_CHARSET
            Font.Color = clWindowText
            Font.Height = -13
            Font.Name = '新細明體'
            Font.Style = []
            ParentFont = False
            TabOrder = 1
            OnKeyUp = etEmpIdKeyUp
          end
          object ComboBox_InOut: TComboBox
            Left = 205
            Top = 8
            Width = 113
            Height = 21
            Style = csDropDownList
            Color = 11927549
            Font.Charset = CHINESEBIG5_CHARSET
            Font.Color = clBlack
            Font.Height = -13
            Font.Name = '新細明體'
            Font.Style = []
            ItemHeight = 13
            ParentFont = False
            TabOrder = 2
            Items.Strings = (
              'Check in 刷入'
              'Check out 刷退')
          end
          object StaticText1: TStaticText
            Left = 224
            Top = 56
            Width = 95
            Height = 17
            Caption = '按下Enter插入'
            TabOrder = 3
          end
        end
      end
      object suiImagePanel12: TsuiImagePanel
        Left = 1
        Top = 148
        Width = 1083
        Height = 255
        AutoSize = False
        Align = alTop
        Font.Charset = CHINESEBIG5_CHARSET
        Font.Color = clWindowText
        Font.Height = -12
        Font.Name = '新細明體'
        Font.Style = []
        DrawStyle = suiTile
        object PageControl3: TPageControl
          Left = 1
          Top = 1
          Width = 774
          Height = 253
          ActivePage = Tab0
          Align = alClient
          TabOrder = 0
          OnChange = PageControl3Change
          object Tab0: TTabSheet
            Caption = '過站'
            ImageIndex = 9
            object suiImagePanel4: TsuiImagePanel
              Left = 0
              Top = 0
              Width = 766
              Height = 226
              AutoSize = False
              Align = alClient
              Font.Charset = CHINESEBIG5_CHARSET
              Font.Color = clWindowText
              Font.Height = -13
              Font.Name = '新細明體'
              Font.Style = []
              Color = clWhite
              DrawStyle = suiTile
              object APnlbutton: TsuiImagePanel
                Left = 1
                Top = 203
                Width = 764
                Height = 22
                AutoSize = False
                Align = alBottom
                Color = clWhite
                DrawStyle = suiTile
                object AbbConfirm: TsuiButton
                  Left = 180
                  Top = 0
                  Width = 100
                  Height = 22
                  UIStyle = WinXP
                  Caption = '確定(&S)'
                  AutoSize = False
                  Visible = False
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
                  OnClick = AbbConfirmClick
                end
              end
              object APnlTA022: TsuiImagePanel
                Left = 1
                Top = 67
                Width = 764
                Height = 22
                AutoSize = False
                Align = alBottom
                Color = clWhite
                DrawStyle = suiTile
                object InfoLabel37: TInfoLabel
                  Left = 123
                  Top = 3
                  Width = 52
                  Height = 13
                  Caption = '員工代號'
                  Alignment = taRightJustify
                  Color = clWhite
                  ParentColor = False
                end
                object AidtTA022: TInfoDBEdit
                  Left = 180
                  Top = 0
                  Width = 171
                  Height = 23
                  CharCase = ecUpperCase
                  Color = 13289984
                  DataField = 'TA022'
                  DataSource = AdsCondition
                  ButtonWidth = 17
                  Font.Charset = CHINESEBIG5_CHARSET
                  Font.Color = clWindowText
                  Font.Height = -15
                  Font.Name = '新細明體'
                  Font.Style = [fsBold]
                  LinkStyle = lsEllipsis
                  ParentFont = False
                  TabOrder = 0
                  OnKeyUp = AidtTA022KeyUp
                  DisableColor = 15790320
                end
              end
              object APnlTA007: TsuiImagePanel
                Left = 1
                Top = 45
                Width = 764
                Height = 22
                AutoSize = False
                Align = alBottom
                Color = clWhite
                DrawStyle = suiTile
                object InfoLabel36: TInfoLabel
                  Left = 123
                  Top = 3
                  Width = 52
                  Height = 13
                  Caption = '製程代號'
                  Alignment = taRightJustify
                  Color = clWhite
                  ParentColor = False
                end
                object AidtTA007: TInfoDBEdit
                  Left = 180
                  Top = 0
                  Width = 171
                  Height = 23
                  CharCase = ecUpperCase
                  Color = 13289984
                  DataField = 'TA007'
                  DataSource = AdsCondition
                  ButtonWidth = 17
                  Font.Charset = CHINESEBIG5_CHARSET
                  Font.Color = clWindowText
                  Font.Height = -15
                  Font.Name = '新細明體'
                  Font.Style = [fsBold]
                  LinkStyle = lsEllipsis
                  ParentFont = False
                  TabOrder = 0
                  OnButtonClick = AidtTA007ButtonClick
                  OnKeyUp = AidtTA007KeyUp
                  DisableColor = 15790320
                end
              end
              object APnlTA005: TsuiImagePanel
                Left = 1
                Top = 23
                Width = 764
                Height = 22
                AutoSize = False
                Align = alBottom
                Color = clWhite
                DrawStyle = suiTile
                object InfoLabel93: TInfoLabel
                  Left = 123
                  Top = 3
                  Width = 52
                  Height = 13
                  Caption = '製令單號'
                  Alignment = taRightJustify
                  Color = clWhite
                  ParentColor = False
                end
                object AidtTA005: TInfoDBEdit
                  Left = 180
                  Top = 0
                  Width = 171
                  Height = 23
                  CharCase = ecUpperCase
                  Color = 13289984
                  DataField = 'TA005'
                  DataSource = AdsCondition
                  ButtonWidth = 17
                  Font.Charset = CHINESEBIG5_CHARSET
                  Font.Color = clWindowText
                  Font.Height = -15
                  Font.Name = '新細明體'
                  Font.Style = [fsBold]
                  LinkStyle = lsEllipsis
                  ParentFont = False
                  TabOrder = 0
                  OnButtonClick = AidtTA005ButtonClick
                  OnKeyUp = AidtTA005KeyUp
                  DisableColor = 15790320
                end
              end
              object APnlTA008: TsuiImagePanel
                Left = 1
                Top = 89
                Width = 764
                Height = 22
                AutoSize = False
                Align = alBottom
                Color = clWhite
                DrawStyle = suiTile
                object InfoLabel59: TInfoLabel
                  Left = 110
                  Top = 3
                  Width = 65
                  Height = 13
                  Caption = '工作站代號'
                  Alignment = taRightJustify
                  Color = clWhite
                  ParentColor = False
                end
                object AidtTA008: TInfoDBEdit
                  Left = 180
                  Top = 0
                  Width = 171
                  Height = 23
                  CharCase = ecUpperCase
                  Color = 13289984
                  DataField = 'TA008'
                  DataSource = AdsCondition
                  ButtonWidth = 17
                  Font.Charset = CHINESEBIG5_CHARSET
                  Font.Color = clWindowText
                  Font.Height = -15
                  Font.Name = '新細明體'
                  Font.Style = [fsBold]
                  LinkStyle = lsEllipsis
                  MaxLength = 10
                  ParentFont = False
                  TabOrder = 0
                  OnKeyUp = AidtTA008KeyUp
                  DisableColor = 15790320
                end
              end
              object APnlTA045: TsuiImagePanel
                Left = 1
                Top = 181
                Width = 764
                Height = 22
                AutoSize = False
                Align = alBottom
                Color = clWhite
                DrawStyle = suiTile
                object InfoLabel12: TInfoLabel
                  Left = 149
                  Top = 3
                  Width = 26
                  Height = 13
                  Caption = '人數'
                  Alignment = taRightJustify
                  Color = clWhite
                  ParentColor = False
                end
                object AidtTA045: TInfoDBEdit
                  Left = 180
                  Top = 0
                  Width = 171
                  Height = 23
                  CharCase = ecUpperCase
                  Color = 13289984
                  DataField = 'TA045'
                  DataSource = AdsCondition
                  ButtonWidth = 17
                  Font.Charset = CHINESEBIG5_CHARSET
                  Font.Color = clWindowText
                  Font.Height = -15
                  Font.Name = '新細明體'
                  Font.Style = [fsBold]
                  MaxLength = 10
                  ParentFont = False
                  TabOrder = 0
                  OnKeyUp = AidtTA045KeyUp
                  DisableColor = 15790320
                end
              end
              object APnlTA003: TsuiImagePanel
                Left = 1
                Top = 133
                Width = 764
                Height = 48
                AutoSize = False
                Align = alBottom
                Color = clWhite
                DrawStyle = suiTile
                Visible = False
                object InfoLabel23: TInfoLabel
                  Left = 123
                  Top = 3
                  Width = 52
                  Height = 13
                  Caption = '開始時間'
                  Alignment = taRightJustify
                  Color = clWhite
                  ParentColor = False
                end
                object InfoLabel25: TInfoLabel
                  Left = 123
                  Top = 25
                  Width = 52
                  Height = 13
                  Caption = '結束時間'
                  Alignment = taRightJustify
                  Color = clWhite
                  ParentColor = False
                end
                object dtp_startDate: TDateTimePicker
                  Left = 179
                  Top = 1
                  Width = 80
                  Height = 21
                  CalAlignment = dtaLeft
                  Date = 44438.4283241435
                  Time = 44438.4283241435
                  Color = 11927549
                  DateFormat = dfShort
                  DateMode = dmComboBox
                  Kind = dtkDate
                  ParseInput = False
                  TabOrder = 0
                end
                object dtp_startTime: TDateTimePicker
                  Left = 265
                  Top = 1
                  Width = 106
                  Height = 21
                  CalAlignment = dtaLeft
                  Date = 44438.4301755787
                  Time = 44438.4301755787
                  Color = 11927549
                  DateFormat = dfShort
                  DateMode = dmComboBox
                  Kind = dtkTime
                  ParseInput = False
                  TabOrder = 1
                end
                object dtp_endDate: TDateTimePicker
                  Left = 179
                  Top = 25
                  Width = 81
                  Height = 21
                  CalAlignment = dtaLeft
                  Date = 44438.4283241435
                  Time = 44438.4283241435
                  Color = 11927549
                  DateFormat = dfShort
                  DateMode = dmComboBox
                  Kind = dtkDate
                  ParseInput = False
                  TabOrder = 2
                end
                object dtp_endTime: TDateTimePicker
                  Left = 265
                  Top = 25
                  Width = 106
                  Height = 21
                  CalAlignment = dtaLeft
                  Date = 44438.4301755787
                  Time = 44438.4301755787
                  Color = 11927549
                  DateFormat = dfShort
                  DateMode = dmComboBox
                  Kind = dtkTime
                  ParseInput = False
                  TabOrder = 3
                end
                object TimeConfirm: TBitBtn
                  Left = 376
                  Top = 24
                  Width = 75
                  Height = 21
                  Caption = '時間確定'
                  TabOrder = 4
                  OnClick = TimeConfirmClick
                end
              end
              object APnlTA020: TsuiImagePanel
                Left = 1
                Top = 111
                Width = 764
                Height = 22
                AutoSize = False
                Align = alBottom
                Color = clWhite
                DrawStyle = suiTile
                Visible = False
                object InfoLabel17: TInfoLabel
                  Left = 123
                  Top = 3
                  Width = 52
                  Height = 13
                  Caption = '過站類別'
                  Alignment = taRightJustify
                  Color = clWhite
                  ParentColor = False
                end
                object AidtTA020: TComboBox
                  Left = 179
                  Top = 0
                  Width = 145
                  Height = 21
                  Style = csDropDownList
                  ItemHeight = 13
                  TabOrder = 0
                  OnChange = AidtTA020Change
                  Items.Strings = (
                    ''
                    'P：一般過站'
                    'X：未結過站'
                    'Z：補刷過站')
                end
              end
            end
          end
          object Tab1: TTabSheet
            Caption = '裝箱'
            object suiImagePanel5: TsuiImagePanel
              Left = 0
              Top = 0
              Width = 551
              Height = 226
              AutoSize = False
              Align = alClient
              Font.Charset = CHINESEBIG5_CHARSET
              Font.Color = clWindowText
              Font.Height = -13
              Font.Name = '新細明體'
              Font.Style = []
              Color = clWhite
              DrawStyle = suiTile
              object BPnlbutton: TsuiImagePanel
                Left = 1
                Top = 203
                Width = 549
                Height = 22
                AutoSize = False
                Align = alBottom
                Color = clWhite
                DrawStyle = suiTile
                object BbbConfirm: TsuiButton
                  Left = 180
                  Top = 0
                  Width = 100
                  Height = 22
                  UIStyle = WinXP
                  Caption = '確定(&S)'
                  AutoSize = False
                  Visible = False
                  TabStop = True
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
                  OnClick = BbbConfirmClick
                end
              end
              object BPnlTA01X: TsuiImagePanel
                Left = 1
                Top = 181
                Width = 549
                Height = 22
                AutoSize = False
                Align = alBottom
                Color = clWhite
                DrawStyle = suiTile
                object InfoLabel35: TInfoLabel
                  Left = 123
                  Top = 2
                  Width = 52
                  Height = 13
                  Caption = '生產序號'
                  Alignment = taRightJustify
                  Color = clWhite
                  ParentColor = False
                end
                object BidtTA01X: TInfoDBEdit
                  Left = 180
                  Top = 0
                  Width = 285
                  Height = 23
                  CharCase = ecUpperCase
                  Color = 13289984
                  DataField = 'TA01X'
                  DataSource = BdsCondition
                  ButtonWidth = 17
                  Font.Charset = CHINESEBIG5_CHARSET
                  Font.Color = clWindowText
                  Font.Height = -15
                  Font.Name = '新細明體'
                  Font.Style = [fsBold]
                  LinkStyle = lsEllipsis
                  ParentFont = False
                  TabOrder = 0
                  OnKeyUp = BidtTA01XKeyUp
                  DisableColor = 15790320
                end
              end
            end
          end
          object TabSheet10: TTabSheet
            Caption = '裝箱秤重'
            ImageIndex = 2
            object suiImagePanel7: TsuiImagePanel
              Left = 0
              Top = 0
              Width = 551
              Height = 226
              AutoSize = False
              Align = alClient
              Font.Charset = CHINESEBIG5_CHARSET
              Font.Color = clWindowText
              Font.Height = -13
              Font.Name = '新細明體'
              Font.Style = []
              Color = clWhite
              DrawStyle = suiTile
              object CPnlbutton: TsuiImagePanel
                Left = 1
                Top = 203
                Width = 549
                Height = 22
                AutoSize = False
                Align = alBottom
                Color = clWhite
                DrawStyle = suiTile
                object CbbConfirm: TsuiButton
                  Left = 180
                  Top = 0
                  Width = 100
                  Height = 22
                  UIStyle = WinXP
                  Caption = '確定(&S)'
                  AutoSize = False
                  Visible = False
                  TabStop = True
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
                  OnClick = CbbConfirmClick
                end
              end
              object CPnlTA01X: TsuiImagePanel
                Left = 1
                Top = 132
                Width = 549
                Height = 22
                AutoSize = False
                Align = alBottom
                Color = clWhite
                DrawStyle = suiTile
                object InfoLabel42: TInfoLabel
                  Left = 123
                  Top = 2
                  Width = 52
                  Height = 13
                  Caption = '生產序號'
                  Alignment = taRightJustify
                  Color = clWhite
                  ParentColor = False
                end
                object CidtTA01X: TInfoDBEdit
                  Left = 180
                  Top = 0
                  Width = 285
                  Height = 23
                  Color = 13289984
                  DataField = 'TA01X'
                  DataSource = CdsCondition
                  ButtonWidth = 17
                  Font.Charset = CHINESEBIG5_CHARSET
                  Font.Color = clWindowText
                  Font.Height = -15
                  Font.Name = '新細明體'
                  Font.Style = [fsBold]
                  LinkStyle = lsEllipsis
                  ParentFont = False
                  TabOrder = 0
                  OnKeyUp = CidtTA01XKeyUp
                  DisableColor = 15790320
                end
              end
              object CPnlTA027: TsuiImagePanel
                Left = 1
                Top = 154
                Width = 549
                Height = 49
                AutoSize = False
                Align = alBottom
                Color = clWhite
                DrawStyle = suiTile
                object InfoLabel44: TInfoLabel
                  Left = 123
                  Top = 26
                  Width = 52
                  Height = 13
                  Caption = '裝箱重量'
                  Alignment = taRightJustify
                  Color = clWhite
                  ParentColor = False
                end
                object InfoLabel43: TInfoLabel
                  Left = 180
                  Top = 2
                  Width = 133
                  Height = 13
                  Caption = '已滿箱,請輸入此箱重量'
                  Alignment = taRightJustify
                  Color = clWhite
                  ParentColor = False
                end
                object CidtTA027: TInfoDBEdit
                  Left = 180
                  Top = 24
                  Width = 205
                  Height = 23
                  CharCase = ecUpperCase
                  Color = 13289984
                  DataField = 'TA027'
                  DataSource = CdsCondition
                  ButtonWidth = 17
                  Font.Charset = CHINESEBIG5_CHARSET
                  Font.Color = clWindowText
                  Font.Height = -15
                  Font.Name = '新細明體'
                  Font.Style = [fsBold]
                  ParentFont = False
                  TabOrder = 0
                  OnKeyUp = CidtTA027KeyUp
                  DisableColor = 15790320
                end
              end
            end
          end
          object TabSheet11: TTabSheet
            Caption = '組合->裝箱'
            ImageIndex = 3
            object suiImagePanel9: TsuiImagePanel
              Left = 0
              Top = 0
              Width = 766
              Height = 226
              AutoSize = False
              Align = alClient
              Font.Charset = CHINESEBIG5_CHARSET
              Font.Color = clWindowText
              Font.Height = -13
              Font.Name = '新細明體'
              Font.Style = []
              Color = clWhite
              DrawStyle = suiTile
              object DPnlbutton: TsuiImagePanel
                Left = 1
                Top = 203
                Width = 764
                Height = 22
                AutoSize = False
                Align = alBottom
                Color = clWhite
                DrawStyle = suiTile
                object DbbConfirm: TsuiButton
                  Left = 180
                  Top = 0
                  Width = 100
                  Height = 22
                  UIStyle = WinXP
                  Caption = '確定(&S)'
                  AutoSize = False
                  Visible = False
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
                  OnClick = DbbConfirmClick
                end
              end
              object DPnlTA01X: TsuiImagePanel
                Left = 1
                Top = 181
                Width = 764
                Height = 22
                AutoSize = False
                Align = alBottom
                Color = clWhite
                DrawStyle = suiTile
                object InfoLabel47: TInfoLabel
                  Left = 122
                  Top = 2
                  Width = 52
                  Height = 13
                  Caption = '生產序號'
                  Alignment = taRightJustify
                  Color = clWhite
                  ParentColor = False
                end
                object DidtTA01X: TInfoDBEdit
                  Left = 180
                  Top = 0
                  Width = 285
                  Height = 23
                  Color = 13289984
                  DataField = 'TA01X'
                  DataSource = DdsCondition
                  ButtonWidth = 17
                  Font.Charset = CHINESEBIG5_CHARSET
                  Font.Color = clWindowText
                  Font.Height = -15
                  Font.Name = '新細明體'
                  Font.Style = [fsBold]
                  LinkStyle = lsEllipsis
                  ParentFont = False
                  TabOrder = 0
                  OnButtonClick = DidtTA01XButtonClick
                  OnKeyUp = DidtTA01XKeyUp
                  DisableColor = 15790320
                end
              end
              object DPnlTB003: TsuiImagePanel
                Left = 1
                Top = 159
                Width = 764
                Height = 22
                AutoSize = False
                Align = alBottom
                Color = clWhite
                DrawStyle = suiTile
                object InfoLabel46: TInfoLabel
                  Left = 75
                  Top = 2
                  Width = 99
                  Height = 13
                  Caption = '(被組合)生產序號'
                  Alignment = taRightJustify
                  Color = clWhite
                  ParentColor = False
                end
                object DidtTB003: TInfoDBEdit
                  Left = 180
                  Top = 0
                  Width = 285
                  Height = 23
                  CharCase = ecUpperCase
                  Color = 13289984
                  DataField = 'TB003'
                  DataSource = DdsCondition
                  ButtonWidth = 17
                  Font.Charset = CHINESEBIG5_CHARSET
                  Font.Color = clWindowText
                  Font.Height = -15
                  Font.Name = '新細明體'
                  Font.Style = [fsBold]
                  LinkStyle = lsEllipsis
                  ParentFont = False
                  TabOrder = 0
                  OnButtonClick = DidtTB003ButtonClick
                  OnKeyUp = DidtTB003KeyUp
                  DisableColor = 15790320
                end
              end
              object DPnlTA000: TsuiImagePanel
                Left = 1
                Top = 48
                Width = 764
                Height = 22
                AutoSize = False
                Align = alTop
                Color = clWhite
                DrawStyle = suiTile
                object InfoLabel64: TInfoLabel
                  Left = 123
                  Top = 3
                  Width = 52
                  Height = 13
                  Caption = '組合數量'
                  Alignment = taRightJustify
                  Color = clWhite
                  ParentColor = False
                end
                object DidtTA000: TInfoDBEdit
                  Left = 180
                  Top = 0
                  Width = 73
                  Height = 23
                  CharCase = ecUpperCase
                  Color = clGray
                  DataField = 'TA000'
                  DataSource = DdsCondition
                  ButtonWidth = 17
                  Font.Charset = CHINESEBIG5_CHARSET
                  Font.Color = clRed
                  Font.Height = -15
                  Font.Name = '新細明體'
                  Font.Style = [fsBold]
                  ParentFont = False
                  ReadOnly = True
                  TabOrder = 0
                  OnKeyUp = DidtTA000KeyUp
                  DisableColor = 15790320
                end
              end
              object DdbgdPnl: TPanel
                Left = 1
                Top = 1
                Width = 764
                Height = 47
                Align = alTop
                Caption = 'DdbgdPnl'
                TabOrder = 4
                object DdbgdTB003: TInfoDBGrid
                  Left = 1
                  Top = 1
                  Width = 380
                  Height = 45
                  DefaultRowHeight = 17
                  Align = alLeft
                  Color = clWhite
                  DataSource = DdsCombine
                  FixedColor = 39423
                  Font.Charset = CHINESEBIG5_CHARSET
                  Font.Color = clWindowText
                  Font.Height = -13
                  Font.Name = '新細明體'
                  Font.Style = []
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
                      ButtonStyle = cbsEllipsis
                      Expanded = False
                      FieldName = 'NM003'
                      Width = 92
                      Visible = True
                      Fix = False
                      CancelMouseFix = False
                    end
                    item
                      Expanded = False
                      FieldName = 'NM003C'
                      Width = 144
                      Visible = True
                      Fix = False
                      CancelMouseFix = False
                    end
                    item
                      Expanded = False
                      FieldName = 'TB003'
                      Width = 118
                      Visible = True
                      Fix = False
                      CancelMouseFix = False
                    end>
                end
                object DdbgdTA001: TInfoDBGrid
                  Left = 381
                  Top = 1
                  Width = 382
                  Height = 45
                  DefaultRowHeight = 17
                  Align = alClient
                  Color = clWhite
                  DataSource = DdsSerial
                  FixedColor = 39423
                  Font.Charset = CHINESEBIG5_CHARSET
                  Font.Color = clWindowText
                  Font.Height = -13
                  Font.Name = '新細明體'
                  Font.Style = []
                  ParentFont = False
                  ReadOnly = True
                  TabOrder = 1
                  TitleFont.Charset = CHINESEBIG5_CHARSET
                  TitleFont.Color = clWhite
                  TitleFont.Height = -13
                  TitleFont.Name = '新細明體'
                  TitleFont.Style = [fsBold]
                  IntervalColor = 15921906
                  Columns = <
                    item
                      Expanded = False
                      FieldName = 'MG018'
                      Width = 87
                      Visible = True
                      Fix = False
                      CancelMouseFix = False
                    end
                    item
                      Expanded = False
                      FieldName = 'MG018C'
                      Width = 144
                      Visible = True
                      Fix = False
                      CancelMouseFix = False
                    end
                    item
                      ButtonStyle = cbsEllipsis
                      Expanded = False
                      FieldName = 'TA001'
                      Width = 115
                      Visible = True
                      Fix = False
                      CancelMouseFix = False
                    end>
                end
              end
            end
          end
          object TabSheet12: TTabSheet
            Caption = '組合->裝箱->秤重'
            ImageIndex = 4
            object suiImagePanel10: TsuiImagePanel
              Left = 0
              Top = 0
              Width = 766
              Height = 226
              AutoSize = False
              Align = alClient
              Color = clWhite
              DrawStyle = suiTile
              object EPnlbutton: TsuiImagePanel
                Left = 1
                Top = 203
                Width = 764
                Height = 22
                AutoSize = False
                Align = alBottom
                Font.Charset = CHINESEBIG5_CHARSET
                Font.Color = clWindowText
                Font.Height = -13
                Font.Name = '新細明體'
                Font.Style = []
                Color = clWhite
                DrawStyle = suiTile
                object EbbConfirm: TsuiButton
                  Left = 180
                  Top = 0
                  Width = 100
                  Height = 22
                  UIStyle = WinXP
                  Caption = '確定(&S)'
                  AutoSize = False
                  Visible = False
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
                  OnClick = EbbConfirmClick
                end
              end
              object EPnlTA01X: TsuiImagePanel
                Left = 1
                Top = 132
                Width = 764
                Height = 22
                AutoSize = False
                Align = alBottom
                Font.Charset = CHINESEBIG5_CHARSET
                Font.Color = clWindowText
                Font.Height = -13
                Font.Name = '新細明體'
                Font.Style = []
                Color = clWhite
                DrawStyle = suiTile
                object InfoLabel40: TInfoLabel
                  Left = 75
                  Top = 3
                  Width = 99
                  Height = 13
                  Caption = '生產序號(組合後)'
                  Alignment = taRightJustify
                  Color = clWhite
                  ParentColor = False
                end
                object EidtTA01X: TInfoDBEdit
                  Left = 180
                  Top = 0
                  Width = 285
                  Height = 23
                  Color = 13289984
                  DataField = 'TA01X'
                  DataSource = EdsCondition
                  ButtonWidth = 17
                  Font.Charset = CHINESEBIG5_CHARSET
                  Font.Color = clWindowText
                  Font.Height = -15
                  Font.Name = '新細明體'
                  Font.Style = [fsBold]
                  LinkStyle = lsEllipsis
                  ParentFont = False
                  TabOrder = 0
                  OnButtonClick = EidtTA01XButtonClick
                  OnKeyUp = EidtTA01XKeyUp
                  DisableColor = 15790320
                end
              end
              object EPnlTB003: TsuiImagePanel
                Left = 1
                Top = 110
                Width = 764
                Height = 22
                AutoSize = False
                Align = alBottom
                Font.Charset = CHINESEBIG5_CHARSET
                Font.Color = clWindowText
                Font.Height = -13
                Font.Name = '新細明體'
                Font.Style = []
                Color = clWhite
                DrawStyle = suiTile
                object InfoLabel45: TInfoLabel
                  Left = 75
                  Top = 3
                  Width = 99
                  Height = 13
                  Caption = '(被組合)生產序號'
                  Alignment = taRightJustify
                  Color = clWhite
                  ParentColor = False
                end
                object EidtTB003: TInfoDBEdit
                  Left = 180
                  Top = 0
                  Width = 285
                  Height = 23
                  CharCase = ecUpperCase
                  Color = 13289984
                  DataField = 'TB003'
                  DataSource = EdsCondition
                  ButtonWidth = 17
                  Font.Charset = CHINESEBIG5_CHARSET
                  Font.Color = clWindowText
                  Font.Height = -15
                  Font.Name = '新細明體'
                  Font.Style = [fsBold]
                  LinkStyle = lsEllipsis
                  ParentFont = False
                  TabOrder = 0
                  OnButtonClick = EidtTB003ButtonClick
                  OnKeyUp = EidtTB003KeyUp
                  DisableColor = 15790320
                end
              end
              object EPnlTA000: TsuiImagePanel
                Left = 1
                Top = 25
                Width = 764
                Height = 22
                AutoSize = False
                Align = alTop
                Font.Charset = CHINESEBIG5_CHARSET
                Font.Color = clWindowText
                Font.Height = -13
                Font.Name = '新細明體'
                Font.Style = []
                Color = clWhite
                DrawStyle = suiTile
                object InfoLabel48: TInfoLabel
                  Left = 123
                  Top = 3
                  Width = 52
                  Height = 13
                  Caption = '組合數量'
                  Alignment = taRightJustify
                  Color = clWhite
                  ParentColor = False
                end
                object EidtTA000: TInfoDBEdit
                  Left = 180
                  Top = 0
                  Width = 73
                  Height = 23
                  CharCase = ecUpperCase
                  Color = 11927549
                  DataField = 'TA000'
                  DataSource = EdsCondition
                  ButtonWidth = 17
                  Font.Charset = CHINESEBIG5_CHARSET
                  Font.Color = clWindowText
                  Font.Height = -15
                  Font.Name = '新細明體'
                  Font.Style = [fsBold]
                  ParentFont = False
                  ReadOnly = True
                  TabOrder = 0
                  OnKeyUp = EidtTA000KeyUp
                  DisableColor = 15790320
                end
              end
              object EdbgdTB003: TInfoDBGrid
                Left = 1
                Top = 1
                Width = 764
                Height = 24
                DefaultRowHeight = 17
                Align = alTop
                Color = clWhite
                DataSource = EdsCombine
                FixedColor = 39423
                Font.Charset = CHINESEBIG5_CHARSET
                Font.Color = clWindowText
                Font.Height = -13
                Font.Name = '新細明體'
                Font.Style = []
                Options = [dgEditing, dgTitles, dgIndicator, dgColLines, dgRowLines, dgTabs, dgConfirmDelete, dgCancelOnExit]
                ParentFont = False
                ReadOnly = True
                TabOrder = 4
                TitleFont.Charset = CHINESEBIG5_CHARSET
                TitleFont.Color = clWhite
                TitleFont.Height = -13
                TitleFont.Name = '新細明體'
                TitleFont.Style = [fsBold]
                IntervalColor = 15921906
                Columns = <
                  item
                    ButtonStyle = cbsEllipsis
                    Expanded = False
                    FieldName = 'TB003'
                    Width = 278
                    Visible = True
                    Fix = False
                    CancelMouseFix = False
                  end>
              end
              object EPnlTA027: TsuiImagePanel
                Left = 1
                Top = 154
                Width = 764
                Height = 49
                AutoSize = False
                Align = alBottom
                Font.Charset = CHINESEBIG5_CHARSET
                Font.Color = clWindowText
                Font.Height = -13
                Font.Name = '新細明體'
                Font.Style = []
                Color = clWhite
                DrawStyle = suiTile
                object InfoLabel49: TInfoLabel
                  Left = 123
                  Top = 28
                  Width = 52
                  Height = 13
                  Caption = '裝箱重量'
                  Alignment = taRightJustify
                  Color = clWhite
                  ParentColor = False
                end
                object InfoLabel50: TInfoLabel
                  Left = 180
                  Top = 2
                  Width = 133
                  Height = 13
                  Caption = '已滿箱,請輸入此箱重量'
                  Alignment = taRightJustify
                  Color = clWhite
                  ParentColor = False
                end
                object EidtTA027: TInfoDBEdit
                  Left = 180
                  Top = 24
                  Width = 205
                  Height = 23
                  CharCase = ecUpperCase
                  Color = 13289984
                  DataField = 'TA027'
                  DataSource = EdsCondition
                  ButtonWidth = 17
                  Font.Charset = CHINESEBIG5_CHARSET
                  Font.Color = clWindowText
                  Font.Height = -15
                  Font.Name = '新細明體'
                  Font.Style = [fsBold]
                  ParentFont = False
                  TabOrder = 0
                  OnKeyUp = EidtTA027KeyUp
                  DisableColor = 15790320
                end
              end
            end
          end
          object TabSheet14: TTabSheet
            Caption = '裝箱批過'
            ImageIndex = 5
            object suiImagePanel13: TsuiImagePanel
              Left = 0
              Top = 0
              Width = 551
              Height = 226
              AutoSize = False
              Align = alClient
              Font.Charset = CHINESEBIG5_CHARSET
              Font.Color = clWindowText
              Font.Height = -13
              Font.Name = '新細明體'
              Font.Style = []
              Color = clWhite
              DrawStyle = suiTile
              object FPnlbutton: TsuiImagePanel
                Left = 1
                Top = 203
                Width = 549
                Height = 22
                AutoSize = False
                Align = alBottom
                Color = clWhite
                DrawStyle = suiTile
                object FbbConfirm: TsuiButton
                  Left = 180
                  Top = 0
                  Width = 100
                  Height = 22
                  UIStyle = WinXP
                  Caption = '確定(&S)'
                  AutoSize = False
                  Visible = False
                  TabStop = True
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
                  OnClick = FbbConfirmClick
                end
              end
              object FPnlTA01X2: TsuiImagePanel
                Left = 1
                Top = 181
                Width = 549
                Height = 22
                AutoSize = False
                Align = alBottom
                Color = clWhite
                DrawStyle = suiTile
                object InfoLabel51: TInfoLabel
                  Left = 110
                  Top = 3
                  Width = 65
                  Height = 13
                  Caption = '生產序號迄'
                  Alignment = taRightJustify
                  Color = clWhite
                  ParentColor = False
                end
                object FidtTA01X2: TInfoDBEdit
                  Left = 180
                  Top = 0
                  Width = 285
                  Height = 23
                  Color = 13289984
                  DataField = 'TA01X2'
                  DataSource = FdsCondition
                  ButtonWidth = 17
                  Font.Charset = CHINESEBIG5_CHARSET
                  Font.Color = clWindowText
                  Font.Height = -15
                  Font.Name = '新細明體'
                  Font.Style = [fsBold]
                  LinkStyle = lsEllipsis
                  ParentFont = False
                  TabOrder = 0
                  OnButtonClick = FidtTA01X2ButtonClick
                  OnKeyUp = FidtTA01X2KeyUp
                  DisableColor = 15790320
                end
              end
              object FPnlTA01X1: TsuiImagePanel
                Left = 1
                Top = 159
                Width = 549
                Height = 22
                AutoSize = False
                Align = alBottom
                Color = clWhite
                DrawStyle = suiTile
                object InfoLabel52: TInfoLabel
                  Left = 110
                  Top = 4
                  Width = 65
                  Height = 13
                  Caption = '生產序號起'
                  Alignment = taRightJustify
                  Color = clWhite
                  ParentColor = False
                end
                object FidtTA01X1: TInfoDBEdit
                  Left = 180
                  Top = 1
                  Width = 285
                  Height = 23
                  Color = 13289984
                  DataField = 'TA01X1'
                  DataSource = FdsCondition
                  ButtonWidth = 17
                  Font.Charset = CHINESEBIG5_CHARSET
                  Font.Color = clWindowText
                  Font.Height = -15
                  Font.Name = '新細明體'
                  Font.Style = [fsBold]
                  LinkStyle = lsEllipsis
                  ParentFont = False
                  TabOrder = 0
                  OnButtonClick = FidtTA01X1ButtonClick
                  OnKeyUp = FidtTA01X1KeyUp
                  DisableColor = 15790320
                end
              end
              object FidtTA026: TEdit
                Left = 180
                Top = 48
                Width = 121
                Height = 21
                CharCase = ecUpperCase
                TabOrder = 3
                Visible = False
              end
              object FidtTA01X: TInfoDBEdit
                Left = 180
                Top = 18
                Width = 120
                Height = 23
                CharCase = ecUpperCase
                DataField = 'TA01X'
                DataSource = FdsCondition
                ButtonWidth = 17
                Font.Charset = CHINESEBIG5_CHARSET
                Font.Color = clWindowText
                Font.Height = -15
                Font.Name = '新細明體'
                Font.Style = [fsBold]
                ParentFont = False
                TabOrder = 4
                Visible = False
                DisableColor = 15790320
              end
            end
          end
          object TabSheet15: TTabSheet
            Caption = '組合->裝箱批過'
            ImageIndex = 6
            object suiImagePanel17: TsuiImagePanel
              Left = 0
              Top = 0
              Width = 1048
              Height = 226
              AutoSize = False
              Align = alClient
              Font.Charset = CHINESEBIG5_CHARSET
              Font.Color = clWindowText
              Font.Height = -13
              Font.Name = '新細明體'
              Font.Style = []
              Color = clWhite
              DrawStyle = suiTile
              object GPnlbutton: TsuiImagePanel
                Left = 1
                Top = 203
                Width = 1046
                Height = 22
                AutoSize = False
                Align = alBottom
                Color = clWhite
                DrawStyle = suiTile
                object GbbConfirm: TsuiButton
                  Left = 180
                  Top = 0
                  Width = 100
                  Height = 22
                  UIStyle = WinXP
                  Caption = '確定(&S)'
                  AutoSize = False
                  Visible = False
                  TabStop = True
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
                  OnClick = GbbConfirmClick
                end
              end
              object GPnlTA01X2: TsuiImagePanel
                Left = 1
                Top = 181
                Width = 1046
                Height = 22
                AutoSize = False
                Align = alBottom
                Color = clWhite
                DrawStyle = suiTile
                object InfoLabel53: TInfoLabel
                  Left = 110
                  Top = 3
                  Width = 65
                  Height = 13
                  Caption = '生產序號迄'
                  Alignment = taRightJustify
                  Color = clWhite
                  ParentColor = False
                end
                object GidtTA01X2: TInfoDBEdit
                  Left = 180
                  Top = 0
                  Width = 285
                  Height = 23
                  Color = 13289984
                  DataField = 'TA01X2'
                  DataSource = GdsCondition
                  ButtonWidth = 17
                  Font.Charset = CHINESEBIG5_CHARSET
                  Font.Color = clWindowText
                  Font.Height = -15
                  Font.Name = '新細明體'
                  Font.Style = [fsBold]
                  LinkStyle = lsEllipsis
                  ParentFont = False
                  TabOrder = 0
                  OnButtonClick = GidtTA01X2ButtonClick
                  OnKeyUp = GidtTA01X2KeyUp
                  DisableColor = 15790320
                end
              end
              object GPnlTA01X1: TsuiImagePanel
                Left = 1
                Top = 159
                Width = 1046
                Height = 22
                AutoSize = False
                Align = alBottom
                Color = clWhite
                DrawStyle = suiTile
                object InfoLabel54: TInfoLabel
                  Left = 110
                  Top = 5
                  Width = 65
                  Height = 13
                  Caption = '生產序號起'
                  Alignment = taRightJustify
                  Color = clWhite
                  ParentColor = False
                end
                object GidtTA01X1: TInfoDBEdit
                  Left = 180
                  Top = 1
                  Width = 285
                  Height = 23
                  Color = 13289984
                  DataField = 'TA01X1'
                  DataSource = GdsCondition
                  ButtonWidth = 17
                  Font.Charset = CHINESEBIG5_CHARSET
                  Font.Color = clWindowText
                  Font.Height = -15
                  Font.Name = '新細明體'
                  Font.Style = [fsBold]
                  LinkStyle = lsEllipsis
                  ParentFont = False
                  TabOrder = 0
                  OnButtonClick = GidtTA01X1ButtonClick
                  OnKeyUp = GidtTA01X1KeyUp
                  DisableColor = 15790320
                end
              end
              object GidtTA026: TEdit
                Left = 180
                Top = 48
                Width = 121
                Height = 21
                CharCase = ecUpperCase
                TabOrder = 3
                Visible = False
              end
              object GidtTA01X: TInfoDBEdit
                Left = 180
                Top = 18
                Width = 120
                Height = 23
                CharCase = ecUpperCase
                DataField = 'TA01X'
                DataSource = GdsCondition
                ButtonWidth = 17
                Font.Charset = CHINESEBIG5_CHARSET
                Font.Color = clWindowText
                Font.Height = -15
                Font.Name = '新細明體'
                Font.Style = [fsBold]
                ParentFont = False
                TabOrder = 4
                Visible = False
                DisableColor = 15790320
              end
            end
          end
          object TabSheet16: TTabSheet
            Caption = '隨線裝箱'
            ImageIndex = 7
            object suiImagePanel14: TsuiImagePanel
              Left = 0
              Top = 0
              Width = 766
              Height = 226
              AutoSize = False
              Align = alClient
              Font.Charset = CHINESEBIG5_CHARSET
              Font.Color = clWindowText
              Font.Height = -13
              Font.Name = '新細明體'
              Font.Style = []
              Caption = '-'
              Color = clWhite
              DrawStyle = suiTile
              object suiImagePanel21: TsuiImagePanel
                Left = 1
                Top = 203
                Width = 764
                Height = 22
                AutoSize = False
                Align = alBottom
                Color = clWhite
                DrawStyle = suiTile
                object HbbConfirm: TsuiButton
                  Left = 180
                  Top = 0
                  Width = 100
                  Height = 22
                  UIStyle = WinXP
                  Caption = '確定(&S)'
                  AutoSize = False
                  Visible = False
                  TabStop = True
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
                  OnClick = HbbConfirmClick
                end
              end
              object HPnlTA01X: TsuiImagePanel
                Left = 1
                Top = 181
                Width = 764
                Height = 22
                AutoSize = False
                Align = alBottom
                Color = clWhite
                DrawStyle = suiTile
                object InfoLabel56: TInfoLabel
                  Left = 123
                  Top = 3
                  Width = 52
                  Height = 13
                  Caption = '生產序號'
                  Alignment = taRightJustify
                  Color = clWhite
                  ParentColor = False
                end
                object HidtTA01X: TInfoDBEdit
                  Left = 180
                  Top = 0
                  Width = 285
                  Height = 23
                  Color = 13289984
                  DataField = 'TA01X'
                  DataSource = HdsCondition
                  ButtonWidth = 17
                  Font.Charset = CHINESEBIG5_CHARSET
                  Font.Color = clWindowText
                  Font.Height = -15
                  Font.Name = '新細明體'
                  Font.Style = [fsBold]
                  LinkStyle = lsEllipsis
                  ParentFont = False
                  TabOrder = 0
                  OnKeyUp = HidtTA01XKeyUp
                  DisableColor = 15790320
                end
              end
            end
          end
          object TabSheet20: TTabSheet
            Caption = '組合->隨線裝箱'
            ImageIndex = 9
            object suiImagePanel22: TsuiImagePanel
              Left = 0
              Top = 0
              Width = 766
              Height = 226
              AutoSize = False
              Align = alClient
              Font.Charset = CHINESEBIG5_CHARSET
              Font.Color = clWindowText
              Font.Height = -13
              Font.Name = '新細明體'
              Font.Style = []
              Color = clWhite
              DrawStyle = suiTile
              object suiImagePanel23: TsuiImagePanel
                Left = 1
                Top = 203
                Width = 764
                Height = 22
                AutoSize = False
                Align = alBottom
                Color = clWhite
                DrawStyle = suiTile
                object IbbConfirm: TsuiButton
                  Left = 180
                  Top = 0
                  Width = 100
                  Height = 22
                  UIStyle = WinXP
                  Caption = '確定(&S)'
                  AutoSize = False
                  Visible = False
                  TabStop = True
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
                  OnClick = IbbConfirmClick
                end
              end
              object IPnlTA01X: TsuiImagePanel
                Left = 1
                Top = 181
                Width = 764
                Height = 22
                AutoSize = False
                Align = alBottom
                Color = clWhite
                DrawStyle = suiTile
                object InfoLabel67: TInfoLabel
                  Left = 122
                  Top = 4
                  Width = 52
                  Height = 13
                  Caption = '生產序號'
                  Alignment = taRightJustify
                  Color = clWhite
                  ParentColor = False
                end
                object IidtTA01X: TInfoDBEdit
                  Left = 180
                  Top = 0
                  Width = 285
                  Height = 23
                  Color = 13289984
                  DataField = 'TA01X'
                  DataSource = IdsCondition
                  ButtonWidth = 17
                  Font.Charset = CHINESEBIG5_CHARSET
                  Font.Color = clWindowText
                  Font.Height = -15
                  Font.Name = '新細明體'
                  Font.Style = [fsBold]
                  LinkStyle = lsEllipsis
                  ParentFont = False
                  TabOrder = 0
                  OnKeyUp = IidtTA01XKeyUp
                  DisableColor = 15790320
                end
              end
              object IPnlTA000: TsuiImagePanel
                Left = 1
                Top = 48
                Width = 764
                Height = 23
                AutoSize = False
                Align = alTop
                Color = clWhite
                DrawStyle = suiTile
                object InfoLabel66: TInfoLabel
                  Left = 123
                  Top = 3
                  Width = 52
                  Height = 13
                  Caption = '組合數量'
                  Alignment = taRightJustify
                  Color = clWhite
                  ParentColor = False
                end
                object IidtTA000: TInfoDBEdit
                  Left = 180
                  Top = 0
                  Width = 73
                  Height = 23
                  CharCase = ecUpperCase
                  Color = clGray
                  DataField = 'TA000'
                  DataSource = IdsCondition
                  ButtonWidth = 17
                  Font.Charset = CHINESEBIG5_CHARSET
                  Font.Color = clRed
                  Font.Height = -15
                  Font.Name = '新細明體'
                  Font.Style = [fsBold]
                  ParentFont = False
                  ReadOnly = True
                  TabOrder = 0
                  OnKeyUp = IidtTA000KeyUp
                  DisableColor = 15790320
                end
              end
              object IPnlTB003: TsuiImagePanel
                Left = 1
                Top = 159
                Width = 764
                Height = 22
                AutoSize = False
                Align = alBottom
                Color = clWhite
                DrawStyle = suiTile
                object InfoLabel68: TInfoLabel
                  Left = 75
                  Top = 4
                  Width = 99
                  Height = 13
                  Caption = '(被組合)生產序號'
                  Alignment = taRightJustify
                  Color = clWhite
                  ParentColor = False
                end
                object IidtTB003: TInfoDBEdit
                  Left = 180
                  Top = 0
                  Width = 285
                  Height = 23
                  Color = 13289984
                  DataField = 'TB003'
                  DataSource = IdsCondition
                  ButtonWidth = 17
                  Font.Charset = CHINESEBIG5_CHARSET
                  Font.Color = clWindowText
                  Font.Height = -15
                  Font.Name = '新細明體'
                  Font.Style = [fsBold]
                  LinkStyle = lsEllipsis
                  ParentFont = False
                  TabOrder = 0
                  OnButtonClick = DidtTB003ButtonClick
                  OnKeyUp = IidtTB003KeyUp
                  DisableColor = 15790320
                end
              end
              object IdbgdPnl: TPanel
                Left = 1
                Top = 1
                Width = 764
                Height = 47
                Align = alTop
                Caption = 'IdbgdPnl'
                TabOrder = 4
                object IdbgdTB003: TInfoDBGrid
                  Left = 1
                  Top = 1
                  Width = 380
                  Height = 45
                  DefaultRowHeight = 17
                  Align = alLeft
                  Color = clWhite
                  DataSource = IdsCombine
                  FixedColor = 39423
                  Font.Charset = CHINESEBIG5_CHARSET
                  Font.Color = clWindowText
                  Font.Height = -13
                  Font.Name = '新細明體'
                  Font.Style = []
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
                      FieldName = 'NM003'
                      Width = 92
                      Visible = True
                      Fix = False
                      CancelMouseFix = False
                    end
                    item
                      Expanded = False
                      FieldName = 'NM003C'
                      Width = 144
                      Visible = True
                      Fix = False
                      CancelMouseFix = False
                    end
                    item
                      ButtonStyle = cbsEllipsis
                      Expanded = False
                      FieldName = 'TB003'
                      Width = 118
                      Visible = True
                      Fix = False
                      CancelMouseFix = False
                    end>
                end
                object IdbgdTA001: TInfoDBGrid
                  Left = 381
                  Top = 1
                  Width = 382
                  Height = 45
                  DefaultRowHeight = 17
                  Align = alClient
                  Color = clWhite
                  DataSource = IdsSerial
                  FixedColor = 39423
                  Font.Charset = CHINESEBIG5_CHARSET
                  Font.Color = clWindowText
                  Font.Height = -13
                  Font.Name = '新細明體'
                  Font.Style = []
                  ParentFont = False
                  ReadOnly = True
                  TabOrder = 1
                  TitleFont.Charset = CHINESEBIG5_CHARSET
                  TitleFont.Color = clWhite
                  TitleFont.Height = -13
                  TitleFont.Name = '新細明體'
                  TitleFont.Style = [fsBold]
                  IntervalColor = 15921906
                  Columns = <
                    item
                      Expanded = False
                      FieldName = 'MG018'
                      Width = 87
                      Visible = True
                      Fix = False
                      CancelMouseFix = False
                    end
                    item
                      Expanded = False
                      FieldName = 'MG018C'
                      Width = 144
                      Visible = True
                      Fix = False
                      CancelMouseFix = False
                    end
                    item
                      ButtonStyle = cbsEllipsis
                      Expanded = False
                      FieldName = 'TA001'
                      Width = 115
                      Visible = True
                      Fix = False
                      CancelMouseFix = False
                    end>
                end
              end
            end
          end
          object TabSheet21: TTabSheet
            Caption = '隨線裝箱->秤重'
            ImageIndex = 10
            object suiImagePanel25: TsuiImagePanel
              Left = 0
              Top = 0
              Width = 766
              Height = 226
              AutoSize = False
              Align = alClient
              Font.Charset = CHINESEBIG5_CHARSET
              Font.Color = clWindowText
              Font.Height = -13
              Font.Name = '新細明體'
              Font.Style = []
              Color = clWhite
              DrawStyle = suiTile
              object suiImagePanel29: TsuiImagePanel
                Left = 1
                Top = 203
                Width = 764
                Height = 22
                AutoSize = False
                Align = alBottom
                Color = clWhite
                DrawStyle = suiTile
                object JbbConfirm: TsuiButton
                  Left = 180
                  Top = 0
                  Width = 100
                  Height = 22
                  UIStyle = WinXP
                  Caption = '確定(&S)'
                  AutoSize = False
                  Visible = False
                  TabStop = True
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
                  OnClick = JbbConfirmClick
                end
              end
              object JPnlTA01X: TsuiImagePanel
                Left = 1
                Top = 109
                Width = 764
                Height = 45
                AutoSize = False
                Align = alBottom
                Color = clWhite
                DrawStyle = suiTile
                object InfoLabel72: TInfoLabel
                  Left = 123
                  Top = 21
                  Width = 52
                  Height = 13
                  Caption = '生產序號'
                  Alignment = taRightJustify
                  Color = clWhite
                  ParentColor = False
                end
                object JidtTA01X: TInfoDBEdit
                  Left = 180
                  Top = 19
                  Width = 285
                  Height = 23
                  Color = 13289984
                  DataField = 'TA01X'
                  DataSource = JdsCondition
                  ButtonWidth = 17
                  Font.Charset = CHINESEBIG5_CHARSET
                  Font.Color = clWindowText
                  Font.Height = -15
                  Font.Name = '新細明體'
                  Font.Style = [fsBold]
                  LinkStyle = lsEllipsis
                  ParentFont = False
                  TabOrder = 0
                  OnKeyUp = JidtTA01XKeyUp
                  DisableColor = 15790320
                end
                object CheckBox1: TCheckBox
                  Left = 475
                  Top = 21
                  Width = 227
                  Height = 17
                  Caption = '機種 WHG-NAPG/A PRODUCT LFP'
                  TabOrder = 1
                end
              end
              object JPnlTA027: TsuiImagePanel
                Left = 1
                Top = 154
                Width = 764
                Height = 49
                AutoSize = False
                Align = alBottom
                Color = clWhite
                DrawStyle = suiTile
                object InfoLabel69: TInfoLabel
                  Left = 123
                  Top = 26
                  Width = 52
                  Height = 13
                  Caption = '裝箱重量'
                  Alignment = taRightJustify
                  Color = clWhite
                  ParentColor = False
                end
                object InfoLabel76: TInfoLabel
                  Left = 180
                  Top = 2
                  Width = 133
                  Height = 13
                  Caption = '已滿箱,請輸入此箱重量'
                  Alignment = taRightJustify
                  Color = clWhite
                  ParentColor = False
                end
                object JidtTA027: TInfoDBEdit
                  Left = 180
                  Top = 24
                  Width = 205
                  Height = 23
                  CharCase = ecUpperCase
                  Color = 13289984
                  DataField = 'TA027'
                  DataSource = JdsCondition
                  ButtonWidth = 17
                  Font.Charset = CHINESEBIG5_CHARSET
                  Font.Color = clWindowText
                  Font.Height = -15
                  Font.Name = '新細明體'
                  Font.Style = [fsBold]
                  ParentFont = False
                  TabOrder = 0
                  OnKeyUp = JidtTA027KeyUp
                  DisableColor = 15790320
                end
              end
            end
          end
          object TabSheet22: TTabSheet
            Caption = '組合->隨線裝箱->秤重'
            ImageIndex = 11
            object suiImagePanel30: TsuiImagePanel
              Left = 0
              Top = 0
              Width = 766
              Height = 226
              AutoSize = False
              Align = alClient
              Font.Charset = CHINESEBIG5_CHARSET
              Font.Color = clWindowText
              Font.Height = -13
              Font.Name = '新細明體'
              Font.Style = []
              Color = clWhite
              DrawStyle = suiTile
              object suiImagePanel31: TsuiImagePanel
                Left = 1
                Top = 203
                Width = 764
                Height = 22
                AutoSize = False
                Align = alBottom
                Color = clWhite
                DrawStyle = suiTile
                object kbbConfirm: TsuiButton
                  Left = 180
                  Top = 0
                  Width = 100
                  Height = 22
                  UIStyle = WinXP
                  Caption = '確定(&S)'
                  AutoSize = False
                  Visible = False
                  TabStop = True
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
                  OnClick = kbbConfirmClick
                end
              end
              object KPnlTA01X: TsuiImagePanel
                Left = 1
                Top = 132
                Width = 764
                Height = 22
                AutoSize = False
                Align = alBottom
                Color = clWhite
                DrawStyle = suiTile
                object InfoLabel73: TInfoLabel
                  Left = 122
                  Top = 4
                  Width = 52
                  Height = 13
                  Caption = '生產序號'
                  Alignment = taRightJustify
                  Color = clWhite
                  ParentColor = False
                end
                object KidtTA01X: TInfoDBEdit
                  Left = 180
                  Top = 0
                  Width = 285
                  Height = 23
                  CharCase = ecUpperCase
                  Color = 13289984
                  DataField = 'TA01X'
                  DataSource = KdsCondition
                  ButtonWidth = 17
                  Font.Charset = CHINESEBIG5_CHARSET
                  Font.Color = clWindowText
                  Font.Height = -15
                  Font.Name = '新細明體'
                  Font.Style = [fsBold]
                  LinkStyle = lsEllipsis
                  ParentFont = False
                  TabOrder = 0
                  OnKeyUp = KidtTA01XKeyUp
                  DisableColor = 15790320
                end
              end
              object KPnlTA000: TsuiImagePanel
                Left = 1
                Top = 48
                Width = 764
                Height = 23
                AutoSize = False
                Align = alTop
                Color = clWhite
                DrawStyle = suiTile
                object InfoLabel74: TInfoLabel
                  Left = 123
                  Top = 3
                  Width = 52
                  Height = 13
                  Caption = '組合數量'
                  Alignment = taRightJustify
                  Color = clWhite
                  ParentColor = False
                end
                object KidtTA000: TInfoDBEdit
                  Left = 180
                  Top = 0
                  Width = 73
                  Height = 23
                  CharCase = ecUpperCase
                  Color = clGray
                  DataField = 'TA000'
                  DataSource = KdsCondition
                  ButtonWidth = 17
                  Font.Charset = CHINESEBIG5_CHARSET
                  Font.Color = clRed
                  Font.Height = -15
                  Font.Name = '新細明體'
                  Font.Style = [fsBold]
                  ParentFont = False
                  ReadOnly = True
                  TabOrder = 0
                  OnKeyUp = KidtTA000KeyUp
                  DisableColor = 15790320
                end
              end
              object KPnlTB003: TsuiImagePanel
                Left = 1
                Top = 110
                Width = 764
                Height = 22
                AutoSize = False
                Align = alBottom
                Color = clWhite
                DrawStyle = suiTile
                object InfoLabel75: TInfoLabel
                  Left = 75
                  Top = 4
                  Width = 99
                  Height = 13
                  Caption = '(被組合)生產序號'
                  Alignment = taRightJustify
                  Color = clWhite
                  ParentColor = False
                end
                object KidtTB003: TInfoDBEdit
                  Left = 180
                  Top = 0
                  Width = 285
                  Height = 23
                  CharCase = ecUpperCase
                  Color = 13289984
                  DataField = 'TB003'
                  DataSource = KdsCondition
                  ButtonWidth = 17
                  Font.Charset = CHINESEBIG5_CHARSET
                  Font.Color = clWindowText
                  Font.Height = -15
                  Font.Name = '新細明體'
                  Font.Style = [fsBold]
                  LinkStyle = lsEllipsis
                  ParentFont = False
                  TabOrder = 0
                  OnButtonClick = KidtTB003ButtonClick
                  OnKeyUp = KidtTB003KeyUp
                  DisableColor = 15790320
                end
              end
              object KPnlTA027: TsuiImagePanel
                Left = 1
                Top = 154
                Width = 764
                Height = 49
                AutoSize = False
                Align = alBottom
                Color = clWhite
                DrawStyle = suiTile
                object InfoLabel77: TInfoLabel
                  Left = 123
                  Top = 27
                  Width = 52
                  Height = 13
                  Caption = '裝箱重量'
                  Alignment = taRightJustify
                  Color = clWhite
                  ParentColor = False
                end
                object InfoLabel78: TInfoLabel
                  Left = 180
                  Top = 2
                  Width = 133
                  Height = 13
                  Caption = '已滿箱,請輸入此箱重量'
                  Alignment = taRightJustify
                  Color = clWhite
                  ParentColor = False
                end
                object KidtTA027: TInfoDBEdit
                  Left = 180
                  Top = 24
                  Width = 205
                  Height = 23
                  CharCase = ecUpperCase
                  Color = 13289984
                  DataField = 'TA027'
                  DataSource = KdsCondition
                  ButtonWidth = 17
                  Font.Charset = CHINESEBIG5_CHARSET
                  Font.Color = clWindowText
                  Font.Height = -15
                  Font.Name = '新細明體'
                  Font.Style = [fsBold]
                  ParentFont = False
                  TabOrder = 0
                  OnKeyUp = KidtTA027KeyUp
                  DisableColor = 15790320
                end
              end
              object KdbgdPnl: TPanel
                Left = 1
                Top = 1
                Width = 764
                Height = 47
                Align = alTop
                Caption = 'KdbgdPnl'
                TabOrder = 5
                object KdbgdTB003: TInfoDBGrid
                  Left = 1
                  Top = 1
                  Width = 380
                  Height = 45
                  DefaultRowHeight = 17
                  Align = alLeft
                  Color = clWhite
                  DataSource = KdsCombine
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
                      FieldName = 'NM003'
                      Width = 92
                      Visible = True
                      Fix = False
                      CancelMouseFix = False
                    end
                    item
                      Expanded = False
                      FieldName = 'NM003C'
                      Width = 144
                      Visible = True
                      Fix = False
                      CancelMouseFix = False
                    end
                    item
                      ButtonStyle = cbsEllipsis
                      Expanded = False
                      FieldName = 'TB003'
                      Width = 118
                      Visible = True
                      Fix = False
                      CancelMouseFix = False
                    end>
                end
                object KdbgdTA001: TInfoDBGrid
                  Left = 381
                  Top = 1
                  Width = 382
                  Height = 45
                  DefaultRowHeight = 17
                  Align = alClient
                  Color = clWhite
                  DataSource = KdsSerial
                  FixedColor = 39423
                  Font.Charset = CHINESEBIG5_CHARSET
                  Font.Color = clWindowText
                  Font.Height = -13
                  Font.Name = '新細明體'
                  Font.Style = []
                  ParentFont = False
                  ReadOnly = True
                  TabOrder = 1
                  TitleFont.Charset = CHINESEBIG5_CHARSET
                  TitleFont.Color = clWhite
                  TitleFont.Height = -13
                  TitleFont.Name = '新細明體'
                  TitleFont.Style = [fsBold]
                  IntervalColor = 15921906
                  Columns = <
                    item
                      Expanded = False
                      FieldName = 'MG018'
                      Width = 87
                      Visible = True
                      Fix = False
                      CancelMouseFix = False
                    end
                    item
                      Expanded = False
                      FieldName = 'MG018C'
                      Width = 144
                      Visible = True
                      Fix = False
                      CancelMouseFix = False
                    end
                    item
                      ButtonStyle = cbsEllipsis
                      Expanded = False
                      FieldName = 'TA001'
                      Width = 115
                      Visible = True
                      Fix = False
                      CancelMouseFix = False
                    end>
                end
              end
            end
          end
        end
        object suiImagePanel3: TsuiImagePanel
          Left = 775
          Top = 1
          Width = 307
          Height = 253
          Picture.Data = {
            07544269746D6170F6000000424DF60000000000000036000000280000000800
            0000080000000100180000000000C0000000C40E0000C40E0000000000000000
            0000EFEFEFEFEFEFEFEFEFEFEFEFEFEFEFEFEFEFEFEFEFEFEFEFEFEBEFEFEBEF
            EFEBEFEFEBEFEFEBEFEFEBEFEFEBEFEFEBEFEFEFEFEFEFEFEFEFEFEFEFEFEFEF
            EFEFEFEFEFEFEFEFEFEFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF
            FFFFEFEFEFEFEFEFEFEFEFEFEFEFEFEFEFEFEFEFEFEFEFEFEFEFEFEBEFEFEBEF
            EFEBEFEFEBEFEFEBEFEFEBEFEFEBEFEFEBEFEFEFEFEFEFEFEFEFEFEFEFEFEFEF
            EFEFEFEFEFEFEFEFEFEFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF
            FFFF}
          AutoSize = False
          Align = alRight
          DrawStyle = suiTile
          object suiImagePanel8: TsuiImagePanel
            Left = 1
            Top = 1
            Width = 305
            Height = 28
            AutoSize = False
            Align = alTop
            Font.Charset = CHINESEBIG5_CHARSET
            Font.Color = clWindowText
            Font.Height = -13
            Font.Name = '新細明體'
            Font.Style = []
            Color = clWhite
            DrawStyle = suiTile
            object InfoLabel38: TInfoLabel
              Left = 7
              Top = 2
              Width = 52
              Height = 13
              Caption = '裝箱號碼'
              Alignment = taRightJustify
              Color = clWhite
              ParentColor = False
            end
            object PidtTA026: TInfoDBEdit
              Left = 63
              Top = 1
              Width = 162
              Height = 21
              TabStop = False
              CharCase = ecUpperCase
              Color = 15790320
              DataField = 'TA026'
              DataSource = dsMaster
              ButtonWidth = 17
              LinkStyle = lsEllipsis
              ReadOnly = True
              TabOrder = 0
              DisableColor = 15790320
            end
            object PidtTA023C: TInfoDBEdit
              Left = 227
              Top = 2
              Width = 142
              Height = 20
              TabStop = False
              BorderStyle = bsNone
              Color = clWhite
              DataField = 'TA023C'
              DataSource = dsMaster
              ButtonWidth = 17
              ReadOnly = True
              TabOrder = 1
              DisableColor = 15790320
            end
          end
          object PageControl4: TPageControl
            Left = 1
            Top = 29
            Width = 305
            Height = 223
            ActivePage = TabSheet8
            Align = alClient
            TabOrder = 1
            object TabSheet8: TTabSheet
              Caption = '箱號'
              ImageIndex = 9
              object suiImagePanel11: TsuiImagePanel
                Left = 0
                Top = 0
                Width = 297
                Height = 196
                Picture.Data = {
                  07544269746D6170F6000000424DF60000000000000036000000280000000800
                  0000080000000100180000000000C0000000C40E0000C40E0000000000000000
                  0000EFEFEFEFEFEFEFEFEFEFEFEFEFEFEFEFEFEFEFEFEFEFEFEFEFEBEFEFEBEF
                  EFEBEFEFEBEFEFEBEFEFEBEFEFEBEFEFEBEFEFEFEFEFEFEFEFEFEFEFEFEFEFEF
                  EFEFEFEFEFEFEFEFEFEFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF
                  FFFFEFEFEFEFEFEFEFEFEFEFEFEFEFEFEFEFEFEFEFEFEFEFEFEFEFEBEFEFEBEF
                  EFEBEFEFEBEFEFEBEFEFEBEFEFEBEFEFEBEFEFEFEFEFEFEFEFEFEFEFEFEFEFEF
                  EFEFEFEFEFEFEFEFEFEFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF
                  FFFF}
                AutoSize = False
                Align = alClient
                DrawStyle = suiTile
                object dbgdTB003: TInfoDBGrid
                  Left = 1
                  Top = 1
                  Width = 295
                  Height = 194
                  DefaultRowHeight = 17
                  Align = alClient
                  Color = clWhite
                  DataSource = dsBox1
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
                      ButtonStyle = cbsEllipsis
                      Expanded = False
                      FieldName = 'MQ002'
                      Width = 123
                      Visible = True
                      Fix = False
                      CancelMouseFix = False
                    end
                    item
                      Expanded = False
                      FieldName = 'MQ003'
                      Width = 73
                      Visible = True
                      Fix = False
                      CancelMouseFix = False
                    end
                    item
                      Expanded = False
                      FieldName = 'MQ004'
                      Width = 75
                      Visible = True
                      Fix = False
                      CancelMouseFix = False
                    end>
                end
              end
            end
            object TabSheet9: TTabSheet
              Caption = '裝箱明細'
              object suiImagePanel20: TsuiImagePanel
                Left = 0
                Top = 0
                Width = 297
                Height = 196
                Picture.Data = {
                  07544269746D6170F6000000424DF60000000000000036000000280000000800
                  0000080000000100180000000000C0000000C40E0000C40E0000000000000000
                  0000EFEFEFEFEFEFEFEFEFEFEFEFEFEFEFEFEFEFEFEFEFEFEFEFEFEBEFEFEBEF
                  EFEBEFEFEBEFEFEBEFEFEBEFEFEBEFEFEBEFEFEFEFEFEFEFEFEFEFEFEFEFEFEF
                  EFEFEFEFEFEFEFEFEFEFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF
                  FFFFEFEFEFEFEFEFEFEFEFEFEFEFEFEFEFEFEFEFEFEFEFEFEFEFEFEBEFEFEBEF
                  EFEBEFEFEBEFEFEBEFEFEBEFEFEBEFEFEBEFEFEFEFEFEFEFEFEFEFEFEFEFEFEF
                  EFEFEFEFEFEFEFEFEFEFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF
                  FFFF}
                AutoSize = False
                Align = alClient
                DrawStyle = suiTile
                object InfoDBGrid1: TInfoDBGrid
                  Left = 1
                  Top = 1
                  Width = 295
                  Height = 194
                  DefaultRowHeight = 17
                  Align = alClient
                  Color = clWhite
                  DataSource = dsBox2
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
                      ButtonStyle = cbsEllipsis
                      Expanded = False
                      FieldName = 'MR002'
                      Width = 79
                      Visible = True
                      Fix = False
                      CancelMouseFix = False
                    end
                    item
                      Expanded = False
                      FieldName = 'MR003'
                      Width = 92
                      Visible = True
                      Fix = False
                      CancelMouseFix = False
                    end
                    item
                      Expanded = False
                      FieldName = 'MR004'
                      Width = 105
                      Visible = True
                      Fix = False
                      CancelMouseFix = False
                    end>
                end
              end
            end
            object TabSheet13: TTabSheet
              Caption = '秤重機'
              ImageIndex = 2
              object Memo1: TMemo
                Left = 0
                Top = 0
                Width = 297
                Height = 196
                Align = alClient
                ScrollBars = ssBoth
                TabOrder = 0
              end
            end
            object TabSheet17: TTabSheet
              Caption = '預覽'
              ImageIndex = 3
              object PreViewImage: TImage
                Left = 0
                Top = 0
                Width = 297
                Height = 196
                Align = alClient
                Stretch = True
              end
            end
            object TabSheet18: TTabSheet
              Caption = '印表參數'
              ImageIndex = 4
              object ParameterList: TListBox
                Left = 0
                Top = 0
                Width = 129
                Height = 196
                Align = alLeft
                Columns = 2
                ItemHeight = 12
                Sorted = True
                TabOrder = 0
              end
              object CheckList: TListBox
                Left = 129
                Top = 0
                Width = 168
                Height = 196
                Align = alClient
                ItemHeight = 12
                TabOrder = 1
              end
            end
          end
        end
      end
      object Panel5: TPanel
        Left = 1
        Top = 403
        Width = 1083
        Height = 209
        Align = alClient
        Caption = 'Panel5'
        TabOrder = 2
        object MemoLog: TMemo
          Left = 1
          Top = 1
          Width = 776
          Height = 207
          TabStop = False
          Align = alClient
          Font.Charset = CHINESEBIG5_CHARSET
          Font.Color = clBlue
          Font.Height = -16
          Font.Name = '新細明體'
          Font.Style = [fsBold]
          ParentFont = False
          ReadOnly = True
          TabOrder = 0
        end
        object Panel6: TPanel
          Left = 777
          Top = 1
          Width = 305
          Height = 207
          Align = alRight
          Caption = 'Panel6'
          TabOrder = 1
          object Panel7: TPanel
            Left = 1
            Top = 1
            Width = 303
            Height = 205
            Align = alClient
            BevelInner = bvLowered
            Color = clWhite
            TabOrder = 0
            object Label8: TLabel
              Left = 24
              Top = 12
              Width = 154
              Height = 13
              Caption = '裝箱Label 條碼樣板檔案'
              Color = clWhite
              ParentColor = False
            end
            object InfoLabel5: TInfoLabel
              Left = 26
              Top = 108
              Width = 154
              Height = 13
              Caption = '輸入生產序號序尋找箱號'
              Alignment = taRightJustify
              Color = clWhite
              ParentColor = False
            end
            object Label11: TLabel
              Left = 22
              Top = 63
              Width = 56
              Height = 13
              Caption = '列印張數'
            end
            object SpeedButton1: TSpeedButton
              Left = 268
              Top = 29
              Width = 23
              Height = 25
              Hint = '清空樣板'
              Glyph.Data = {
                76010000424D7601000000000000760000002800000020000000100000000100
                04000000000000010000120B0000120B00001000000000000000000000000000
                800000800000008080008000000080008000808000007F7F7F00BFBFBF000000
                FF0000FF000000FFFF00FF000000FF00FF00FFFF0000FFFFFF00555555555555
                55555FFFFFFF5F55FFF5777777757559995777777775755777F7555555555550
                305555555555FF57F7F555555550055BB0555555555775F777F55555550FB000
                005555555575577777F5555550FB0BF0F05555555755755757F555550FBFBF0F
                B05555557F55557557F555550BFBF0FB005555557F55575577F555500FBFBFB0
                B05555577F555557F7F5550E0BFBFB00B055557575F55577F7F550EEE0BFB0B0
                B05557FF575F5757F7F5000EEE0BFBF0B055777FF575FFF7F7F50000EEE00000
                B0557777FF577777F7F500000E055550805577777F7555575755500000555555
                05555777775555557F5555000555555505555577755555557555}
              NumGlyphs = 2
              ParentShowHint = False
              ShowHint = True
              Visible = False
              OnClick = SpeedButton1Click
            end
            object bbCloseBox: TButton
              Left = 203
              Top = 143
              Width = 75
              Height = 25
              Caption = '強制滿箱'
              TabOrder = 0
              OnClick = bbCloseBoxClick
            end
            object Button24: TButton
              Left = 203
              Top = 104
              Width = 75
              Height = 25
              Caption = '清空箱號'
              TabOrder = 1
              Visible = False
              OnClick = Button24Click
            end
            object Button26: TButton
              Left = 179
              Top = 62
              Width = 99
              Height = 25
              Caption = '列印箱號Label'
              Enabled = False
              TabOrder = 2
              OnClick = Button26Click
            end
            object BarcodeTempleFile: TEdit
              Left = 20
              Top = 34
              Width = 218
              Height = 21
              ReadOnly = True
              TabOrder = 3
              OnChange = BarcodeTempleFileChange
            end
            object Button27: TButton
              Left = 240
              Top = 30
              Width = 23
              Height = 25
              Caption = '...'
              Font.Charset = CHINESEBIG5_CHARSET
              Font.Color = clWindowText
              Font.Height = -12
              Font.Name = '新細明體'
              Font.Style = []
              ParentFont = False
              TabOrder = 4
              Visible = False
              OnClick = Button27Click
            end
            object idtSN: TEdit
              Left = 26
              Top = 125
              Width = 170
              Height = 21
              CharCase = ecUpperCase
              Color = 13289984
              Font.Charset = CHINESEBIG5_CHARSET
              Font.Color = clWindowText
              Font.Height = -13
              Font.Name = '新細明體'
              Font.Style = [fsBold]
              ParentFont = False
              TabOrder = 5
              OnKeyUp = idtSNKeyUp
            end
            object idtPrintCount: TEdit
              Left = 79
              Top = 58
              Width = 35
              Height = 21
              TabOrder = 6
              Text = '0'
            end
            object UpDown: TUpDown
              Left = 114
              Top = 58
              Width = 16
              Height = 21
              Associate = idtPrintCount
              Min = 0
              Position = 0
              TabOrder = 7
              Wrap = False
            end
            object show: TCheckBox
              Left = 205
              Top = 9
              Width = 54
              Height = 17
              Caption = 'Show'
              TabOrder = 8
              Visible = False
              OnClick = showClick
            end
            object bSetPrint: TsuiButton
              Left = 177
              Top = 183
              Width = 104
              Height = 23
              UIStyle = WinXP
              Caption = '設定印表機'
              AutoSize = False
              TabOrder = 9
              Transparent = False
              ModalResult = 0
              Glyph.Data = {
                76010000424D7601000000000000760000002800000020000000100000000100
                04000000000000010000130B0000130B00001000000000000000000000000000
                800000800000008080008000000080008000808000007F7F7F00BFBFBF000000
                FF0000FF000000FFFF00FF000000FF00FF00FFFF0000FFFFFF00300000000000
                00033FFFFFFFFFFFFFFF0888888888888880777777777777777F088888888888
                8880777777777777777F0000000000000000FFFFFFFFFFFFFFFF0F8F8F8F8F8F
                8F80777777777777777F08F8F8F8F8F8F9F0777777777777777F0F8F8F8F8F8F
                8F807777777777777F7F0000000000000000777777777777777F3330FFFFFFFF
                03333337F3FFFF3F7F333330F0000F0F03333337F77773737F333330FFFFFFFF
                03333337F3FF3FFF7F333330F00F000003333337F773777773333330FFFF0FF0
                33333337F3FF7F3733333330F08F0F0333333337F7737F7333333330FFFF0033
                33333337FFFF7733333333300000033333333337777773333333}
              Layout = blGlyphRight
              Spacing = 4
              ResHandle = 0
              OnClick = bSetPrintClick
            end
          end
        end
      end
    end
  end
  inherited pnlDetail: TPanel
    Top = 659
    Width = 1239
    Height = 4
    Align = alBottom
    inherited dbgdDetail: TInfoDBGrid
      Top = 9
      Width = 394
      Height = 60
      Align = alNone
      Columns = <
        item
          ButtonStyle = cbsEllipsis
          Expanded = False
          FieldName = 'TB003'
          PickList.Strings = ()
          Width = 237
          Visible = True
          Fix = False
          CancelMouseFix = False
          Description.Strings = ()
        end>
    end
    object dbgdDetail1: TInfoDBGrid
      Left = 400
      Top = 9
      Width = 386
      Height = 60
      DefaultRowHeight = 17
      Color = 16120306
      DataSource = dsDetail1
      FixedColor = 8421440
      Font.Charset = CHINESEBIG5_CHARSET
      Font.Color = clWindowText
      Font.Height = -15
      Font.Name = '新細明體'
      Font.Style = []
      Options = [dgEditing, dgTitles, dgIndicator, dgColLines, dgRowLines, dgTabs, dgConfirmDelete, dgCancelOnExit]
      ParentFont = False
      TabOrder = 1
      TitleFont.Charset = CHINESEBIG5_CHARSET
      TitleFont.Color = clWhite
      TitleFont.Height = -15
      TitleFont.Name = '新細明體'
      TitleFont.Style = [fsBold]
      IntervalColor = clMenu
      Columns = <
        item
          ButtonStyle = cbsEllipsis
          Expanded = False
          FieldName = 'TC003'
          Width = 237
          Visible = True
          Fix = False
          CancelMouseFix = False
        end>
    end
  end
  inherited pnlTotal: TPanel
    Top = 659
    Width = 1239
    Height = 0
    Visible = True
    inherited pnlImage1: TsuiImagePanel
      Left = 41
      Width = 792
      Height = 64
      Align = alNone
      object InfoLabel1: TInfoLabel
        Left = 149
        Top = 11
        Width = 64
        Height = 16
        Caption = '起始序號'
        Alignment = taRightJustify
        Color = 15790320
        Font.Charset = CHINESEBIG5_CHARSET
        Font.Color = clBlack
        Font.Height = -16
        Font.Name = '新細明體'
        Font.Style = []
        ParentColor = False
        ParentFont = False
      end
      object InfoLabel2: TInfoLabel
        Left = 403
        Top = 10
        Width = 16
        Height = 16
        Caption = '至'
        Alignment = taRightJustify
        Color = 15790320
        Font.Charset = CHINESEBIG5_CHARSET
        Font.Color = clBlack
        Font.Height = -16
        Font.Name = '新細明體'
        Font.Style = []
        ParentColor = False
        ParentFont = False
      end
      object InfoLabel3: TInfoLabel
        Left = 149
        Top = 39
        Width = 64
        Height = 16
        Caption = '起始序號'
        Alignment = taRightJustify
        Color = 15790320
        Font.Charset = CHINESEBIG5_CHARSET
        Font.Color = clBlack
        Font.Height = -16
        Font.Name = '新細明體'
        Font.Style = []
        ParentColor = False
        ParentFont = False
      end
      object InfoLabel4: TInfoLabel
        Left = 421
        Top = 38
        Width = 32
        Height = 16
        Caption = '片數'
        Alignment = taRightJustify
        Color = 15790320
        Font.Charset = CHINESEBIG5_CHARSET
        Font.Color = clBlack
        Font.Height = -16
        Font.Name = '新細明體'
        Font.Style = []
        ParentColor = False
        ParentFont = False
      end
      object InfoLabel18: TInfoLabel
        Left = 770
        Top = 7
        Width = 16
        Height = 16
        Caption = '筆'
        Alignment = taRightJustify
        Color = 15790320
        Font.Charset = CHINESEBIG5_CHARSET
        Font.Color = clBlack
        Font.Height = -16
        Font.Name = '新細明體'
        Font.Style = []
        ParentColor = False
        ParentFont = False
      end
      object InfoLabel19: TInfoLabel
        Left = 9
        Top = 10
        Width = 64
        Height = 16
        Caption = '連結方式'
        Alignment = taRightJustify
        Color = 15790320
        Font.Charset = CHINESEBIG5_CHARSET
        Font.Color = clBlack
        Font.Height = -16
        Font.Name = '新細明體'
        Font.Style = []
        ParentColor = False
        ParentFont = False
      end
      object idtMH0021: TEdit
        Left = 216
        Top = 8
        Width = 185
        Height = 23
        TabOrder = 0
      end
      object idtMH0022: TEdit
        Left = 422
        Top = 8
        Width = 186
        Height = 23
        TabOrder = 1
      end
      object btnInsert: TBitBtn
        Left = 611
        Top = 6
        Width = 75
        Height = 25
        Caption = '加入'
        Default = True
        TabOrder = 2
        Glyph.Data = {
          DE010000424DDE01000000000000760000002800000024000000120000000100
          0400000000006801000000000000000000001000000000000000000000000000
          80000080000000808000800000008000800080800000C0C0C000808080000000
          FF0000FF000000FFFF00FF000000FF00FF00FFFF0000FFFFFF00333333333333
          3333333333333333333333330000333333333333333333333333F33333333333
          00003333344333333333333333388F3333333333000033334224333333333333
          338338F3333333330000333422224333333333333833338F3333333300003342
          222224333333333383333338F3333333000034222A22224333333338F338F333
          8F33333300003222A3A2224333333338F3838F338F33333300003A2A333A2224
          33333338F83338F338F33333000033A33333A222433333338333338F338F3333
          0000333333333A222433333333333338F338F33300003333333333A222433333
          333333338F338F33000033333333333A222433333333333338F338F300003333
          33333333A222433333333333338F338F00003333333333333A22433333333333
          3338F38F000033333333333333A223333333333333338F830000333333333333
          333A333333333333333338330000333333333333333333333333333333333333
          0000}
        NumGlyphs = 2
      end
      object idtMH0023: TEdit
        Left = 216
        Top = 36
        Width = 184
        Height = 23
        TabOrder = 3
      end
      object btnInsert2: TBitBtn
        Left = 611
        Top = 35
        Width = 75
        Height = 25
        Caption = '加入'
        Default = True
        TabOrder = 5
        Glyph.Data = {
          DE010000424DDE01000000000000760000002800000024000000120000000100
          0400000000006801000000000000000000001000000000000000000000000000
          80000080000000808000800000008000800080800000C0C0C000808080000000
          FF0000FF000000FFFF00FF000000FF00FF00FFFF0000FFFFFF00333333333333
          3333333333333333333333330000333333333333333333333333F33333333333
          00003333344333333333333333388F3333333333000033334224333333333333
          338338F3333333330000333422224333333333333833338F3333333300003342
          222224333333333383333338F3333333000034222A22224333333338F338F333
          8F33333300003222A3A2224333333338F3838F338F33333300003A2A333A2224
          33333338F83338F338F33333000033A33333A222433333338333338F338F3333
          0000333333333A222433333333333338F338F33300003333333333A222433333
          333333338F338F33000033333333333A222433333333333338F338F300003333
          33333333A222433333333333338F338F00003333333333333A22433333333333
          3338F38F000033333333333333A223333333333333338F830000333333333333
          333A333333333333333338330000333333333333333333333333333333333333
          0000}
        NumGlyphs = 2
      end
      object idtNum: TEdit
        Left = 458
        Top = 36
        Width = 63
        Height = 23
        TabOrder = 4
      end
      object idtCount: TEdit
        Left = 692
        Top = 6
        Width = 73
        Height = 23
        Color = clInfoBk
        ReadOnly = True
        TabOrder = 6
      end
      object CBMH003: TComboBox
        Left = 8
        Top = 32
        Width = 134
        Height = 23
        ItemHeight = 15
        TabOrder = 7
        Items.Strings = (
          '1.一般'
          '2.組合'
          '3.被組合'
          '4.組合及被組合')
      end
    end
  end
  inherited dsView: TDataSource
    Left = 48
    Top = 48
  end
  inherited dsMaster: TDataSource
    Left = 48
    Top = 92
  end
  inherited dsDetail: TDataSource
    Left = 88
    Top = 134
  end
  inherited cdsView: TInfoClientDataSet
    AutoCalcFields = False
    CommandText = 'SELECT TOP 50 *'#13#10'FROM SSFTA(NOLOCK)'#13#10
    PacketRecords = 10
    ProviderName = 'GLModule.qrySelect'
    SQL.Strings = (
      'SELECT TOP 50 *'
      'FROM SSFTA(NOLOCK)')
    TableName = 'SSFTA'
    Left = 12
    Top = 48
    object cdsViewCOMPANY: TStringField
      FieldName = 'COMPANY'
      FixedChar = True
      Size = 10
    end
    object cdsViewCREATOR: TStringField
      FieldName = 'CREATOR'
      FixedChar = True
      Size = 10
    end
    object cdsViewUSR_GROUP: TStringField
      FieldName = 'USR_GROUP'
      FixedChar = True
      Size = 10
    end
    object cdsViewCREATE_DATE: TStringField
      FieldName = 'CREATE_DATE'
      FixedChar = True
      Size = 8
    end
    object cdsViewMODIFIER: TStringField
      FieldName = 'MODIFIER'
      FixedChar = True
      Size = 10
    end
    object cdsViewMODI_DATE: TStringField
      FieldName = 'MODI_DATE'
      FixedChar = True
      Size = 8
    end
    object cdsViewFLAG: TFloatField
      FieldName = 'FLAG'
    end
    object cdsViewTA001: TStringField
      DisplayLabel = '生產序號'
      FieldName = 'TA001'
      FixedChar = True
      Size = 29
    end
    object cdsViewTA002: TStringField
      DisplayLabel = '序號'
      FieldName = 'TA002'
      FixedChar = True
      Size = 4
    end
    object cdsViewTA003: TStringField
      DisplayLabel = '生產日期'
      FieldName = 'TA003'
      FixedChar = True
      Size = 10
    end
    object cdsViewTA004: TStringField
      DisplayLabel = '生產時間'
      FieldName = 'TA004'
      FixedChar = True
      Size = 8
    end
    object cdsViewTA005: TStringField
      DisplayLabel = '製令單號'
      FieldName = 'TA005'
      FixedChar = True
      Size = 15
    end
    object cdsViewTA006: TStringField
      DisplayLabel = '加工順序'
      FieldName = 'TA006'
      FixedChar = True
      Size = 4
    end
    object cdsViewTA007: TStringField
      DisplayLabel = '製程代號'
      FieldName = 'TA007'
      FixedChar = True
      Size = 6
    end
    object cdsViewTA008: TStringField
      DisplayLabel = '檢測點代號'
      FieldName = 'TA008'
      FixedChar = True
      Size = 6
    end
    object cdsViewTA009: TStringField
      DisplayLabel = '檢測結果'
      FieldName = 'TA009'
      FixedChar = True
      Size = 1
    end
    object cdsViewTA010: TStringField
      DisplayLabel = '不良狀況代號'
      FieldName = 'TA010'
      FixedChar = True
      Size = 6
    end
    object cdsViewTA011: TStringField
      DisplayLabel = '維修點代號'
      FieldName = 'TA011'
      FixedChar = True
      Size = 6
    end
    object cdsViewTA012: TStringField
      DisplayLabel = '維修原因代號'
      FieldName = 'TA012'
      FixedChar = True
      Size = 6
    end
    object cdsViewTA013: TStringField
      DisplayLabel = '不良責任歸屬代號'
      FieldName = 'TA013'
      FixedChar = True
      Size = 6
    end
    object cdsViewTA014: TStringField
      DisplayLabel = '維修備註'
      FieldName = 'TA014'
      FixedChar = True
      Size = 80
    end
    object cdsViewTA015: TStringField
      DisplayLabel = '維修註記'
      FieldName = 'TA015'
      FixedChar = True
      Size = 1
    end
    object cdsViewTA016: TFloatField
      DisplayLabel = 'BURN IN 溫度'
      FieldName = 'TA016'
    end
    object cdsViewTA018: TStringField
      DisplayLabel = '過站批號'
      FieldName = 'TA018'
      FixedChar = True
      Size = 14
    end
    object cdsViewTA019: TFloatField
      DisplayLabel = '過站批號工時'
      FieldName = 'TA019'
    end
    object cdsViewTA020: TStringField
      DisplayLabel = '過站類別'
      FieldName = 'TA020'
      FixedChar = True
      Size = 1
    end
    object cdsViewTA021: TStringField
      DisplayLabel = '確認碼'
      FieldName = 'TA021'
      FixedChar = True
      Size = 1
    end
    object cdsViewTA022: TStringField
      DisplayLabel = '員工代號'
      FieldName = 'TA022'
      FixedChar = True
      Size = 10
    end
    object cdsViewTA01X: TStringField
      DisplayLabel = '生產序號'
      FieldName = 'TA01X'
      FixedChar = True
      Size = 29
    end
    object cdsViewTA02X: TStringField
      DisplayLabel = '序號'
      FieldName = 'TA02X'
      FixedChar = True
      Size = 4
    end
    object cdsViewTA025: TStringField
      DisplayLabel = '製程行為'
      DisplayWidth = 2
      FieldName = 'TA025'
      FixedChar = True
      Size = 2
    end
    object cdsViewTA023: TStringField
      DisplayLabel = '進維修不良狀況'
      FieldName = 'TA023'
      FixedChar = True
      Size = 6
    end
    object cdsViewTA017: TFloatField
      DisplayLabel = 'BURN IN 時間'
      FieldName = 'TA017'
    end
    object cdsViewTA045: TFloatField
      DisplayLabel = '人數'
      FieldName = 'TA045'
    end
    object cdsViewTA039: TStringField
      FieldName = 'TA039'
      FixedChar = True
      Size = 100
    end
  end
  inherited cdsMaster: TInfoClientDataSet
    AutoCalcFields = False
    CommandText = 
      'SELECT *'#13#10'FROM SSFTA (NOLOCK)'#13#10'WHERE TA01X =:TA01X'#13#10'AND TA02X = ' +
      ':TA02X'#13#10
    FieldDefs = <
      item
        Name = 'COMPANY'
        Attributes = [faFixed]
        DataType = ftString
        Size = 10
      end
      item
        Name = 'CREATOR'
        Attributes = [faFixed]
        DataType = ftString
        Size = 10
      end
      item
        Name = 'USR_GROUP'
        Attributes = [faFixed]
        DataType = ftString
        Size = 10
      end
      item
        Name = 'CREATE_DATE'
        Attributes = [faFixed]
        DataType = ftString
        Size = 8
      end
      item
        Name = 'MODIFIER'
        Attributes = [faFixed]
        DataType = ftString
        Size = 10
      end
      item
        Name = 'MODI_DATE'
        Attributes = [faFixed]
        DataType = ftString
        Size = 8
      end
      item
        Name = 'FLAG'
        DataType = ftFloat
      end
      item
        Name = 'TA001'
        Attributes = [faFixed]
        DataType = ftString
        Size = 29
      end
      item
        Name = 'TA002'
        Attributes = [faFixed]
        DataType = ftString
        Size = 4
      end
      item
        Name = 'TA003'
        Attributes = [faFixed]
        DataType = ftString
        Size = 10
      end
      item
        Name = 'TA004'
        Attributes = [faFixed]
        DataType = ftString
        Size = 8
      end
      item
        Name = 'TA005'
        Attributes = [faFixed]
        DataType = ftString
        Size = 15
      end
      item
        Name = 'TA006'
        Attributes = [faFixed]
        DataType = ftString
        Size = 4
      end
      item
        Name = 'TA007'
        Attributes = [faFixed]
        DataType = ftString
        Size = 6
      end
      item
        Name = 'TA008'
        Attributes = [faFixed]
        DataType = ftString
        Size = 6
      end
      item
        Name = 'TA009'
        Attributes = [faFixed]
        DataType = ftString
        Size = 1
      end
      item
        Name = 'TA010'
        Attributes = [faFixed]
        DataType = ftString
        Size = 6
      end
      item
        Name = 'TA011'
        Attributes = [faFixed]
        DataType = ftString
        Size = 6
      end
      item
        Name = 'TA012'
        Attributes = [faFixed]
        DataType = ftString
        Size = 6
      end
      item
        Name = 'TA013'
        Attributes = [faFixed]
        DataType = ftString
        Size = 6
      end
      item
        Name = 'TA014'
        Attributes = [faFixed]
        DataType = ftString
        Size = 80
      end
      item
        Name = 'TA015'
        Attributes = [faFixed]
        DataType = ftString
        Size = 1
      end
      item
        Name = 'TA016'
        DataType = ftFloat
      end
      item
        Name = 'TA017'
        DataType = ftFloat
      end
      item
        Name = 'TA018'
        Attributes = [faFixed]
        DataType = ftString
        Size = 14
      end
      item
        Name = 'TA019'
        DataType = ftFloat
      end
      item
        Name = 'TA020'
        Attributes = [faFixed]
        DataType = ftString
        Size = 1
      end
      item
        Name = 'TA021'
        Attributes = [faFixed]
        DataType = ftString
        Size = 1
      end
      item
        Name = 'TA022'
        Attributes = [faFixed]
        DataType = ftString
        Size = 10
      end
      item
        Name = 'TA023'
        Attributes = [faFixed]
        DataType = ftString
        Size = 6
      end
      item
        Name = 'TA024'
        Attributes = [faFixed]
        DataType = ftString
        Size = 6
      end
      item
        Name = 'TA025'
        Attributes = [faFixed]
        DataType = ftString
        Size = 2
      end
      item
        Name = 'TA026'
        Attributes = [faFixed]
        DataType = ftString
        Size = 19
      end
      item
        Name = 'TA027'
        DataType = ftFloat
      end
      item
        Name = 'TA028'
        Attributes = [faFixed]
        DataType = ftString
        Size = 1
      end
      item
        Name = 'TA029'
        Attributes = [faFixed]
        DataType = ftString
        Size = 255
      end
      item
        Name = 'TA030'
        Attributes = [faFixed]
        DataType = ftString
        Size = 18
      end
      item
        Name = 'TA031'
        Attributes = [faFixed]
        DataType = ftString
        Size = 1
      end
      item
        Name = 'TA01X'
        Attributes = [faFixed]
        DataType = ftString
        Size = 29
      end
      item
        Name = 'TA02X'
        Attributes = [faFixed]
        DataType = ftString
        Size = 4
      end
      item
        Name = 'TA032'
        Attributes = [faFixed]
        DataType = ftString
        Size = 17
      end
      item
        Name = 'TA033'
        Attributes = [faFixed]
        DataType = ftString
        Size = 10
      end
      item
        Name = 'TA034'
        Attributes = [faFixed]
        DataType = ftString
        Size = 1
      end
      item
        Name = 'TA035'
        Attributes = [faFixed]
        DataType = ftString
        Size = 255
      end
      item
        Name = 'TA036'
        Attributes = [faFixed]
        DataType = ftString
        Size = 1
      end
      item
        Name = 'TA037'
        DataType = ftFloat
      end
      item
        Name = 'TA038'
        DataType = ftFloat
      end
      item
        Name = 'TA039'
        Attributes = [faFixed]
        DataType = ftString
        Size = 100
      end
      item
        Name = 'TA040'
        Attributes = [faFixed]
        DataType = ftString
        Size = 1
      end
      item
        Name = 'TA041'
        Attributes = [faFixed]
        DataType = ftString
        Size = 1
      end
      item
        Name = 'TA042'
        Attributes = [faFixed]
        DataType = ftString
        Size = 1
      end
      item
        Name = 'TA043'
        Attributes = [faFixed]
        DataType = ftString
        Size = 255
      end
      item
        Name = 'TA044'
        Attributes = [faFixed]
        DataType = ftString
        Size = 1
      end
      item
        Name = 'TA045'
        DataType = ftFloat
      end
      item
        Name = 'TA046'
        Attributes = [faFixed]
        DataType = ftString
        Size = 2
      end
      item
        Name = 'TA047'
        Attributes = [faFixed]
        DataType = ftString
        Size = 100
      end
      item
        Name = 'TA048'
        Attributes = [faFixed]
        DataType = ftString
        Size = 100
      end
      item
        Name = 'TA049'
        DataType = ftFloat
      end
      item
        Name = 'qrySSFTD'
        DataType = ftDataSet
      end
      item
        Name = 'qrySSFTC'
        DataType = ftDataSet
      end
      item
        Name = 'qrySSFTB'
        DataType = ftDataSet
      end>
    PacketRecords = 10
    Params = <
      item
        DataType = ftString
        Name = 'TA01X'
        ParamType = ptUnknown
      end
      item
        DataType = ftString
        Name = 'TA02X'
        ParamType = ptUnknown
      end>
    ProviderName = 'sSSFI704.qrySSFTA'
    BeforePost = cdsMasterBeforePost
    AfterPost = cdsMasterAfterPost
    SQL.Strings = (
      'SELECT *'
      'FROM SSFTA (NOLOCK)'
      'WHERE TA01X =:TA01X'
      'AND TA02X = :TA02X')
    TableName = 'SSFTA'
    EnableServerModified = True
    CalcCacheDatas = <
      item
        Name = 'TB005'
        CalcFields = 'TB005C'
      end
      item
        Name = 'TB008'
        CalcFields = 'TB008C'
      end
      item
        Name = 'TB010'
        CalcFields = 'TB010C'
      end
      item
        Name = 'TB01X'
        CalcFields = 'TB01XC'
      end>
    Left = 12
    Top = 92
    object cdsMasterCOMPANY: TStringField
      FieldName = 'COMPANY'
      FixedChar = True
      Size = 10
    end
    object cdsMasterCREATOR: TStringField
      FieldName = 'CREATOR'
      FixedChar = True
      Size = 10
    end
    object cdsMasterUSR_GROUP: TStringField
      FieldName = 'USR_GROUP'
      FixedChar = True
      Size = 10
    end
    object cdsMasterCREATE_DATE: TStringField
      FieldName = 'CREATE_DATE'
      FixedChar = True
      Size = 8
    end
    object cdsMasterMODIFIER: TStringField
      FieldName = 'MODIFIER'
      FixedChar = True
      Size = 10
    end
    object cdsMasterMODI_DATE: TStringField
      FieldName = 'MODI_DATE'
      FixedChar = True
      Size = 8
    end
    object cdsMasterFLAG: TFloatField
      FieldName = 'FLAG'
    end
    object cdsMasterTA001: TStringField
      DisplayLabel = '生產序號'
      FieldName = 'TA001'
      FixedChar = True
      Size = 29
    end
    object cdsMasterTA002: TStringField
      DisplayLabel = '序號'
      FieldName = 'TA002'
      FixedChar = True
      Size = 4
    end
    object cdsMasterTA003: TStringField
      DisplayLabel = '生產日期'
      FieldName = 'TA003'
      FixedChar = True
      Size = 10
    end
    object cdsMasterTA004: TStringField
      DisplayLabel = '生產時間'
      FieldName = 'TA004'
      FixedChar = True
      Size = 8
    end
    object cdsMasterTA005: TStringField
      DisplayLabel = '製令單號'
      FieldName = 'TA005'
      FixedChar = True
      Size = 15
    end
    object cdsMasterTA006: TStringField
      DisplayLabel = '加工順序'
      FieldName = 'TA006'
      FixedChar = True
      Size = 4
    end
    object cdsMasterTA007: TStringField
      DisplayLabel = '製程代號'
      FieldName = 'TA007'
      FixedChar = True
      Size = 6
    end
    object cdsMasterTA008: TStringField
      DisplayLabel = '工作站代號'
      FieldName = 'TA008'
      FixedChar = True
      Size = 6
    end
    object cdsMasterTA009: TStringField
      DisplayLabel = '檢測結果'
      FieldName = 'TA009'
      FixedChar = True
      Size = 1
    end
    object cdsMasterTA010: TStringField
      DisplayLabel = '不良狀況代號'
      FieldName = 'TA010'
      FixedChar = True
      Size = 6
    end
    object cdsMasterTA011: TStringField
      DisplayLabel = '維修點代號'
      FieldName = 'TA011'
      FixedChar = True
      Size = 6
    end
    object cdsMasterTA012: TStringField
      DisplayLabel = '維修原因代號'
      FieldName = 'TA012'
      FixedChar = True
      Size = 6
    end
    object cdsMasterTA013: TStringField
      DisplayLabel = '不良責任歸屬代號'
      FieldName = 'TA013'
      FixedChar = True
      Size = 6
    end
    object cdsMasterTA014: TStringField
      DisplayLabel = '維修備註'
      FieldName = 'TA014'
      FixedChar = True
      Size = 80
    end
    object cdsMasterTA015: TStringField
      DisplayLabel = '維修註記'
      FieldName = 'TA015'
      FixedChar = True
      Size = 1
    end
    object cdsMasterTA016: TFloatField
      DisplayLabel = 'BURN IN 溫度'
      FieldName = 'TA016'
    end
    object cdsMasterTA018: TStringField
      DisplayLabel = '過站批號'
      FieldName = 'TA018'
      FixedChar = True
      Size = 14
    end
    object cdsMasterTA019: TFloatField
      DisplayLabel = '過站批號工時'
      FieldName = 'TA019'
    end
    object cdsMasterTA020: TStringField
      DisplayLabel = '過站類別'
      FieldName = 'TA020'
      FixedChar = True
      Size = 1
    end
    object cdsMasterTA021: TStringField
      DisplayLabel = '確認碼'
      FieldName = 'TA021'
      FixedChar = True
      Size = 1
    end
    object cdsMasterTA022: TStringField
      DisplayLabel = '員工代號'
      FieldName = 'TA022'
      FixedChar = True
      Size = 10
    end
    object cdsMasterTA01X: TStringField
      DisplayLabel = '生產序號'
      FieldName = 'TA01X'
      FixedChar = True
      Size = 29
    end
    object cdsMasterTA02X: TStringField
      DisplayLabel = '序號'
      FieldName = 'TA02X'
      FixedChar = True
      Size = 4
    end
    object cdsMasterqrySSFTD: TDataSetField
      FieldName = 'qrySSFTD'
      IncludeObjectField = False
    end
    object cdsMasterqrySSFTC: TDataSetField
      FieldName = 'qrySSFTC'
      IncludeObjectField = False
    end
    object cdsMasterqrySSFTB: TDataSetField
      FieldName = 'qrySSFTB'
      IncludeObjectField = False
    end
    object cdsMasterTA007C: TStringField
      FieldKind = fkCalculated
      FieldName = 'TA007C'
      Calculated = True
    end
    object cdsMasterTA010C: TStringField
      FieldKind = fkCalculated
      FieldName = 'TA010C'
      Calculated = True
    end
    object cdsMasterTA011C: TStringField
      FieldKind = fkCalculated
      FieldName = 'TA011C'
      Calculated = True
    end
    object cdsMasterTA012C: TStringField
      FieldKind = fkCalculated
      FieldName = 'TA012C'
      Calculated = True
    end
    object cdsMasterTA013C: TStringField
      FieldKind = fkCalculated
      FieldName = 'TA013C'
      Calculated = True
    end
    object cdsMasterTA008C: TStringField
      FieldKind = fkCalculated
      FieldName = 'TA008C'
      Calculated = True
    end
    object cdsMasterTA022C: TStringField
      FieldKind = fkCalculated
      FieldName = 'TA022C'
      Calculated = True
    end
    object cdsMasterTA025: TStringField
      DisplayLabel = '製程行為'
      DisplayWidth = 2
      FieldName = 'TA025'
      FixedChar = True
      Size = 2
    end
    object cdsMasterTA007C1: TStringField
      FieldKind = fkCalculated
      FieldName = 'TA007C1'
      Calculated = True
    end
    object cdsMasterTA007C2: TStringField
      FieldKind = fkCalculated
      FieldName = 'TA007C2'
      Calculated = True
    end
    object cdsMasterTA023: TStringField
      FieldName = 'TA023'
      FixedChar = True
      Size = 6
    end
    object cdsMasterTA023C: TStringField
      FieldKind = fkCalculated
      FieldName = 'TA023C'
      Calculated = True
    end
    object cdsMasterTA017: TFloatField
      DisplayLabel = 'BURN IN 時間'
      FieldName = 'TA017'
    end
    object cdsMasterTA026: TStringField
      DisplayWidth = 19
      FieldName = 'TA026'
      OnChange = cdsMasterTA026Change
      FixedChar = True
      Size = 19
    end
    object cdsMasterTA027: TFloatField
      FieldName = 'TA027'
    end
    object cdsMasterTA028: TStringField
      FieldName = 'TA028'
      FixedChar = True
      Size = 1
    end
    object cdsMasterTA030: TStringField
      FieldName = 'TA030'
      FixedChar = True
      Size = 18
    end
    object cdsMasterTA031: TStringField
      FieldName = 'TA031'
      FixedChar = True
      Size = 1
    end
    object cdsMasterTA037: TFloatField
      FieldName = 'TA037'
    end
    object cdsMasterTA038: TFloatField
      FieldName = 'TA038'
    end
    object cdsMasterTA005C: TStringField
      FieldKind = fkCalculated
      FieldName = 'TA005C'
      Calculated = True
    end
    object cdsMasterTA005C1: TStringField
      FieldKind = fkCalculated
      FieldName = 'TA005C1'
      Calculated = True
    end
    object cdsMasterTA005C2: TStringField
      FieldKind = fkCalculated
      FieldName = 'TA005C2'
      Calculated = True
    end
    object cdsMasterTA005C3: TStringField
      FieldKind = fkCalculated
      FieldName = 'TA005C3'
      Calculated = True
    end
    object cdsMasterMF013: TStringField
      FieldKind = fkCalculated
      FieldName = 'MF013'
      Calculated = True
    end
    object cdsMasterNW004: TStringField
      FieldKind = fkCalculated
      FieldName = 'NW004'
      Calculated = True
    end
    object cdsMasterTA045: TFloatField
      DisplayLabel = '人數'
      FieldName = 'TA045'
      OnChange = cdsMasterTA045Change
    end
    object cdsMasterTA039: TStringField
      FieldName = 'TA039'
      FixedChar = True
      Size = 100
    end
    object cdsMasterTA047: TStringField
      FieldName = 'TA047'
      FixedChar = True
      Size = 100
    end
    object cdsMasterTA048: TStringField
      FieldName = 'TA048'
      FixedChar = True
      Size = 100
    end
    object cdsMasterTA049: TFloatField
      FieldName = 'TA049'
    end
  end
  inherited cdsDetail: TInfoClientDataSet
    AutoCalcFields = False
    DataSetField = cdsMasterqrySSFTB
    PacketRecords = 10
    BeforePost = cdsDetailBeforePost
    AfterPost = cdsDetailAfterPost
    AfterDelete = cdsDetailAfterDelete
    OnNewRecord = cdsDetailNewRecord
    EnableServerModified = True
    CalcCacheDatas = <
      item
        Name = 'TC004'
        CalcFields = 'TC004C'
      end>
    Left = 12
    Top = 135
    object cdsDetailCOMPANY: TStringField
      FieldName = 'COMPANY'
      FixedChar = True
      Size = 10
    end
    object cdsDetailCREATOR: TStringField
      FieldName = 'CREATOR'
      FixedChar = True
      Size = 10
    end
    object cdsDetailUSR_GROUP: TStringField
      FieldName = 'USR_GROUP'
      FixedChar = True
      Size = 10
    end
    object cdsDetailCREATE_DATE: TStringField
      FieldName = 'CREATE_DATE'
      FixedChar = True
      Size = 8
    end
    object cdsDetailMODIFIER: TStringField
      FieldName = 'MODIFIER'
      FixedChar = True
      Size = 10
    end
    object cdsDetailMODI_DATE: TStringField
      FieldName = 'MODI_DATE'
      FixedChar = True
      Size = 8
    end
    object cdsDetailFLAG: TFloatField
      FieldName = 'FLAG'
    end
    object cdsDetailTB001: TStringField
      DisplayLabel = '生產序號'
      FieldName = 'TB001'
      FixedChar = True
      Size = 29
    end
    object cdsDetailTB002: TStringField
      DisplayLabel = '序號'
      FieldName = 'TB002'
      FixedChar = True
      Size = 4
    end
    object cdsDetailTB003: TStringField
      DisplayLabel = '被組合生產序號'
      FieldName = 'TB003'
      FixedChar = True
      Size = 29
    end
    object cdsDetailTB004: TStringField
      DisplayLabel = '確認碼'
      FieldName = 'TB004'
      FixedChar = True
      Size = 1
    end
    object cdsDetailTA01X: TStringField
      DisplayLabel = '生產序號'
      FieldName = 'TA01X'
      FixedChar = True
      Size = 29
    end
    object cdsDetailTA02X: TStringField
      DisplayLabel = '序號'
      FieldName = 'TA02X'
      FixedChar = True
      Size = 4
    end
  end
  inherited PopupMenu: TPopupMenu
    AutoPopup = False
    Left = 12
    Top = 309
  end
  inherited TempCDS: TInfoClientDataSet
    Left = 130
    Top = 134
  end
  inherited CheckDetailKeyCDS: TInfoClientDataSet
    Left = 130
    Top = 90
  end
  inherited pmDetailGrid: TPopupMenu
    Left = 88
    Top = 309
  end
  inherited AuditFlowClient: TAuditFlowClient
    OwnerForm = Owner
  end
  inherited pmWorkModule: TPopupMenu
    Left = 48
    Top = 309
  end
  inherited pMaintain: TPopupMenu
    Left = 130
    Top = 308
  end
  inherited imlPicture: TImageList
    Left = 12
    Top = 266
  end
  object rvMaster: TRefValComponent
    DataSource = dsMaster
    RefVals = <
      item
        DataField = 'TA003'
        DataLength = 0
        DataScale = 0
        EditMaskID = '05'
        CheckLookup = True
        LookupType = ltNone
        RuleType = rtNone
        RuleValue_ = nil
      end
      item
        DataField = 'TA007'
        DataLength = 0
        DataScale = 0
        CheckLookup = False
        ErrorMsg = '製程代號不存在!!'
        LookupType = ltDBServer
        RuleType = rtNone
        RuleValue_ = nil
        LookupTableName_ = 'SSFMA'
        LookupKeyFieldPairs_ = 'MA001='#39':TA007'#39
        LookupResultField_ = 'MA001'
        LookupGridColumnDatasStr_ = 
          '$BinaryEncodeString000000031606010E01094669656C644E616D6506054D4' +
          '130303109416C69676E6D656E74070D74614C6566744A75737469667905436F6' +
          'C6F720707636C57686974650C466F6E742E43686172736574070F44454641554' +
          'C545F434841525345540A466F6E742E436F6C6F720707636C426C61636B0B466' +
          'F6E742E48656967687402F509466F6E742E4E616D65060D4D532053616E73205' +
          '3657269660A466F6E742E5374796C650B0005576964746802000E5469746C654' +
          '16C69676E6D656E74070D74614C6566744A7573746966790C5469746C6543617' +
          '074696F6E0608BB73B57BA54EB8B90A5469746C65436F6C6F720706636C47726' +
          '179115469746C65466F6E742E43686172736574070F44454641554C545F43484' +
          '1525345540F5469746C65466F6E742E436F6C6F720707636C576869746510546' +
          '9746C65466F6E742E48656967687402F50E5469746C65466F6E742E4E616D650' +
          '60D4D532053616E732053657269660F5469746C65466F6E742E5374796C650B0' +
          '0095461626C654E616D6506055353464D410756697369626C650900010946696' +
          '56C644E616D6506054D4130303209416C69676E6D656E74070D74614C6566744' +
          'A75737469667905436F6C6F720707636C57686974650C466F6E742E436861727' +
          '36574070F44454641554C545F434841525345540A466F6E742E436F6C6F72070' +
          '7636C426C61636B0B466F6E742E48656967687402F509466F6E742E4E616D650' +
          '60D4D532053616E732053657269660A466F6E742E5374796C650B00055769647' +
          '46802000E5469746C65416C69676E6D656E74070D74614C6566744A757374696' +
          '6790C5469746C6543617074696F6E0608BB73B57BA657BAD90A5469746C65436' +
          'F6C6F720706636C47726179115469746C65466F6E742E43686172736574070F4' +
          '4454641554C545F434841525345540F5469746C65466F6E742E436F6C6F72070' +
          '7636C5768697465105469746C65466F6E742E48656967687402F50E5469746C6' +
          '5466F6E742E4E616D65060D4D532053616E732053657269660F5469746C65466' +
          'F6E742E5374796C650B00095461626C654E616D6506055353464D41075669736' +
          '9626C65090000'
        ChildRefValsStr_ = 
          '$BinaryEncodeString000000003C100A0E01044E616D6506065441303037430' +
          '9446174614669656C640606544130303743114C6F6F6B7570526573756C74466' +
          '9656C6406054D413030320000'
      end
      item
        DataField = 'TA008'
        DataLength = 0
        DataScale = 0
        CheckLookup = True
        LookupType = ltDBServer
        RuleType = rtNone
        RuleValue_ = nil
        LookupTableName_ = 'SSFML'
        LookupKeyFieldPairs_ = 'ML001='#39':TA008'#39
        LookupResultField_ = 'ML001'
        LookupGridColumnDatasStr_ = 
          '$BinaryEncodeString000000031A09FD0E01094669656C644E616D6506054D4' +
          'C30303109416C69676E6D656E74070D74614C6566744A75737469667905436F6' +
          'C6F720707636C57686974650C466F6E742E43686172736574070F44454641554' +
          'C545F434841525345540A466F6E742E436F6C6F720707636C426C61636B0B466' +
          'F6E742E48656967687402F509466F6E742E4E616D65060D4D532053616E73205' +
          '3657269660A466F6E742E5374796C650B0005576964746802000E5469746C654' +
          '16C69676E6D656E74070D74614C6566744A7573746966790C5469746C6543617' +
          '074696F6E060AC0CBB4FAC249A54EB8B90A5469746C65436F6C6F720706636C4' +
          '7726179115469746C65466F6E742E43686172736574070F44454641554C545F4' +
          '34841525345540F5469746C65466F6E742E436F6C6F720707636C57686974651' +
          '05469746C65466F6E742E48656967687402F50E5469746C65466F6E742E4E616' +
          'D65060D4D532053616E732053657269660F5469746C65466F6E742E5374796C6' +
          '50B00095461626C654E616D6506055353464D4C0756697369626C65090001094' +
          '669656C644E616D6506054D4C30303209416C69676E6D656E74070D74614C656' +
          '6744A75737469667905436F6C6F720707636C57686974650C466F6E742E43686' +
          '172736574070F44454641554C545F434841525345540A466F6E742E436F6C6F7' +
          '20707636C426C61636B0B466F6E742E48656967687402F509466F6E742E4E616' +
          'D65060D4D532053616E732053657269660A466F6E742E5374796C650B0005576' +
          '964746802000E5469746C65416C69676E6D656E74070D74614C6566744A75737' +
          '46966790C5469746C6543617074696F6E060AC0CBB4FAC249A657BAD90A54697' +
          '46C65436F6C6F720706636C47726179115469746C65466F6E742E43686172736' +
          '574070F44454641554C545F434841525345540F5469746C65466F6E742E436F6' +
          'C6F720707636C5768697465105469746C65466F6E742E48656967687402F50E5' +
          '469746C65466F6E742E4E616D65060D4D532053616E732053657269660F54697' +
          '46C65466F6E742E5374796C650B00095461626C654E616D6506055353464D4C0' +
          '756697369626C65090000'
        ChildRefValsStr_ = 
          '$BinaryEncodeString000000003C10170E01044E616D6506065441303038430' +
          '9446174614669656C640606544130303843114C6F6F6B7570526573756C74466' +
          '9656C6406054D4C3030320000'
      end
      item
        DataField = 'TA009'
        DataLength = 0
        DataScale = 0
        CheckLookup = True
        LookupType = ltConst
        RuleType = rtNone
        RuleValue_ = nil
        RefStr_ = '1'#13#10'2'#13#10'3'#13#10
        ValStr_ = 'PASS'#13#10'OK'#13#10'NG'#13#10
      end
      item
        DataField = 'TA010'
        DataLength = 0
        DataScale = 0
        CheckLookup = True
        LookupType = ltDBServer
        RuleType = rtNone
        RuleValue_ = nil
        LookupTableName_ = 'SSFMI'
        LookupKeyFieldPairs_ = 'MI001='#39':TA010'#39
        LookupResultField_ = 'MI001'
        LookupGridColumnDatasStr_ = 
          '$BinaryEncodeString000000031E0B250E01094669656C644E616D6506054D4' +
          '930303109416C69676E6D656E74070D74614C6566744A75737469667905436F6' +
          'C6F720707636C57686974650C466F6E742E43686172736574070F44454641554' +
          'C545F434841525345540A466F6E742E436F6C6F720707636C426C61636B0B466' +
          'F6E742E48656967687402F509466F6E742E4E616D65060D4D532053616E73205' +
          '3657269660A466F6E742E5374796C650B0005576964746802000E5469746C654' +
          '16C69676E6D656E74070D74614C6566744A7573746966790C5469746C6543617' +
          '074696F6E060CA4A3A87DAAACAA70A54EB8B90A5469746C65436F6C6F7207066' +
          '36C47726179115469746C65466F6E742E43686172736574070F44454641554C5' +
          '45F434841525345540F5469746C65466F6E742E436F6C6F720707636C5768697' +
          '465105469746C65466F6E742E48656967687402F50E5469746C65466F6E742E4' +
          'E616D65060D4D532053616E732053657269660F5469746C65466F6E742E53747' +
          '96C650B00095461626C654E616D6506055353464D490756697369626C6509000' +
          '1094669656C644E616D6506054D4930303209416C69676E6D656E74070D74614' +
          'C6566744A75737469667905436F6C6F720707636C57686974650C466F6E742E4' +
          '3686172736574070F44454641554C545F434841525345540A466F6E742E436F6' +
          'C6F720707636C426C61636B0B466F6E742E48656967687402F509466F6E742E4' +
          'E616D65060D4D532053616E732053657269660A466F6E742E5374796C650B000' +
          '5576964746802000E5469746C65416C69676E6D656E74070D74614C6566744A7' +
          '573746966790C5469746C6543617074696F6E060CA4A3A87DAAACAA70A657BAD' +
          '90A5469746C65436F6C6F720706636C47726179115469746C65466F6E742E436' +
          '86172736574070F44454641554C545F434841525345540F5469746C65466F6E7' +
          '42E436F6C6F720707636C5768697465105469746C65466F6E742E48656967687' +
          '402F50E5469746C65466F6E742E4E616D65060D4D532053616E7320536572696' +
          '60F5469746C65466F6E742E5374796C650B00095461626C654E616D650605535' +
          '3464D490756697369626C65090000'
        ChildRefValsStr_ = 
          '$BinaryEncodeString000000003C10060E01044E616D6506065441303130430' +
          '9446174614669656C640606544130313043114C6F6F6B7570526573756C74466' +
          '9656C6406054D493030320000'
      end
      item
        DataField = 'TA011'
        DataLength = 0
        DataScale = 0
        CheckLookup = True
        ErrorMsg = '維修點代號不存在!!'
        LookupType = ltDBServer
        RuleType = rtNone
        RuleValue_ = nil
        LookupTableName_ = 'SSFMM'
        LookupKeyFieldPairs_ = 'MM001='#39':TA011'#39
        LookupResultField_ = 'MM001'
        LookupGridColumnDatasStr_ = 
          '$BinaryEncodeString000000031A0A010E01094669656C644E616D6506054D4' +
          'D30303109416C69676E6D656E74070D74614C6566744A75737469667905436F6' +
          'C6F720707636C57686974650C466F6E742E43686172736574070F44454641554' +
          'C545F434841525345540A466F6E742E436F6C6F720707636C426C61636B0B466' +
          'F6E742E48656967687402F509466F6E742E4E616D65060D4D532053616E73205' +
          '3657269660A466F6E742E5374796C650B0005576964746802000E5469746C654' +
          '16C69676E6D656E74070D74614C6566744A7573746966790C5469746C6543617' +
          '074696F6E060ABAFBADD7C249A54EB8B90A5469746C65436F6C6F720706636C4' +
          '7726179115469746C65466F6E742E43686172736574070F44454641554C545F4' +
          '34841525345540F5469746C65466F6E742E436F6C6F720707636C57686974651' +
          '05469746C65466F6E742E48656967687402F50E5469746C65466F6E742E4E616' +
          'D65060D4D532053616E732053657269660F5469746C65466F6E742E5374796C6' +
          '50B00095461626C654E616D6506055353464D4D0756697369626C65090001094' +
          '669656C644E616D6506054D4D30303209416C69676E6D656E74070D74614C656' +
          '6744A75737469667905436F6C6F720707636C57686974650C466F6E742E43686' +
          '172736574070F44454641554C545F434841525345540A466F6E742E436F6C6F7' +
          '20707636C426C61636B0B466F6E742E48656967687402F509466F6E742E4E616' +
          'D65060D4D532053616E732053657269660A466F6E742E5374796C650B0005576' +
          '964746802000E5469746C65416C69676E6D656E74070D74614C6566744A75737' +
          '46966790C5469746C6543617074696F6E060ABAFBADD7C249A657BAD90A54697' +
          '46C65436F6C6F720706636C47726179115469746C65466F6E742E43686172736' +
          '574070F44454641554C545F434841525345540F5469746C65466F6E742E436F6' +
          'C6F720707636C5768697465105469746C65466F6E742E48656967687402F50E5' +
          '469746C65466F6E742E4E616D65060D4D532053616E732053657269660F54697' +
          '46C65466F6E742E5374796C650B00095461626C654E616D6506055353464D4D0' +
          '756697369626C65090000'
        ChildRefValsStr_ = 
          '$BinaryEncodeString000000003C100C0E01044E616D6506065441303131430' +
          '9446174614669656C640606544130313143114C6F6F6B7570526573756C74466' +
          '9656C6406054D4D3030320000'
      end
      item
        DataField = 'TA012'
        DataLength = 0
        DataScale = 0
        CheckLookup = True
        LookupType = ltDBServer
        RuleType = rtNone
        RuleValue_ = nil
        LookupTableName_ = 'SSFMJ'
        LookupKeyFieldPairs_ = 'MJ001='#39':TA012'#39
        LookupResultField_ = 'MJ001'
        LookupGridColumnDatasStr_ = 
          '$BinaryEncodeString000000031E0D1B0E01094669656C644E616D6506054D4' +
          'A30303109416C69676E6D656E74070D74614C6566744A75737469667905436F6' +
          'C6F720707636C57686974650C466F6E742E43686172736574070F44454641554' +
          'C545F434841525345540A466F6E742E436F6C6F720707636C426C61636B0B466' +
          'F6E742E48656967687402F509466F6E742E4E616D65060D4D532053616E73205' +
          '3657269660A466F6E742E5374796C650B0005576964746802000E5469746C654' +
          '16C69676E6D656E74070D74614C6566744A7573746966790C5469746C6543617' +
          '074696F6E060CBAFBADD7ADECA65DA54EB8B90A5469746C65436F6C6F7207066' +
          '36C47726179115469746C65466F6E742E43686172736574070F44454641554C5' +
          '45F434841525345540F5469746C65466F6E742E436F6C6F720707636C5768697' +
          '465105469746C65466F6E742E48656967687402F50E5469746C65466F6E742E4' +
          'E616D65060D4D532053616E732053657269660F5469746C65466F6E742E53747' +
          '96C650B00095461626C654E616D6506055353464D4A0756697369626C6509000' +
          '1094669656C644E616D6506054D4A30303209416C69676E6D656E74070D74614' +
          'C6566744A75737469667905436F6C6F720707636C57686974650C466F6E742E4' +
          '3686172736574070F44454641554C545F434841525345540A466F6E742E436F6' +
          'C6F720707636C426C61636B0B466F6E742E48656967687402F509466F6E742E4' +
          'E616D65060D4D532053616E732053657269660A466F6E742E5374796C650B000' +
          '5576964746802000E5469746C65416C69676E6D656E74070D74614C6566744A7' +
          '573746966790C5469746C6543617074696F6E060CBAFBADD7ADECA65DA657BAD' +
          '90A5469746C65436F6C6F720706636C47726179115469746C65466F6E742E436' +
          '86172736574070F44454641554C545F434841525345540F5469746C65466F6E7' +
          '42E436F6C6F720707636C5768697465105469746C65466F6E742E48656967687' +
          '402F50E5469746C65466F6E742E4E616D65060D4D532053616E7320536572696' +
          '60F5469746C65466F6E742E5374796C650B00095461626C654E616D650605535' +
          '3464D4A0756697369626C65090000'
        ChildRefValsStr_ = 
          '$BinaryEncodeString000000003C100B0E01044E616D6506065441303132430' +
          '9446174614669656C640606544130313243114C6F6F6B7570526573756C74466' +
          '9656C6406054D4A3030320000'
      end
      item
        DataField = 'TA013'
        DataLength = 0
        DataScale = 0
        CheckLookup = True
        LookupType = ltDBServer
        RuleType = rtNone
        RuleValue_ = nil
        LookupTableName_ = 'SSFMK'
        LookupKeyFieldPairs_ = 'MK001='#39':TA013'#39
        LookupResultField_ = 'MK001'
        LookupGridColumnDatasStr_ = 
          '$BinaryEncodeString00000003220EE90E01094669656C644E616D6506054D4' +
          'B30303109416C69676E6D656E74070D74614C6566744A75737469667905436F6' +
          'C6F720707636C57686974650C466F6E742E43686172736574070F44454641554' +
          'C545F434841525345540A466F6E742E436F6C6F720707636C426C61636B0B466' +
          'F6E742E48656967687402F509466F6E742E4E616D65060D4D532053616E73205' +
          '3657269660A466F6E742E5374796C650B0005576964746802000E5469746C654' +
          '16C69676E6D656E74070D74614C6566744A7573746966790C5469746C6543617' +
          '074696F6E060CA4A3A87DB364A5F4C26BC4DD0A5469746C65436F6C6F7207066' +
          '36C47726179115469746C65466F6E742E43686172736574070F44454641554C5' +
          '45F434841525345540F5469746C65466F6E742E436F6C6F720707636C5768697' +
          '465105469746C65466F6E742E48656967687402F50E5469746C65466F6E742E4' +
          'E616D65060D4D532053616E732053657269660F5469746C65466F6E742E53747' +
          '96C650B00095461626C654E616D6506055353464D4B0756697369626C6509000' +
          '1094669656C644E616D6506054D4B30303209416C69676E6D656E74070D74614' +
          'C6566744A75737469667905436F6C6F720707636C57686974650C466F6E742E4' +
          '3686172736574070F44454641554C545F434841525345540A466F6E742E436F6' +
          'C6F720707636C426C61636B0B466F6E742E48656967687402F509466F6E742E4' +
          'E616D65060D4D532053616E732053657269660A466F6E742E5374796C650B000' +
          '5576964746802000E5469746C65416C69676E6D656E74070D74614C6566744A7' +
          '573746966790C5469746C6543617074696F6E0610A4A3A87DB364A5F4C26BC4D' +
          'DA657BAD90A5469746C65436F6C6F720706636C47726179115469746C65466F6' +
          'E742E43686172736574070F44454641554C545F434841525345540F5469746C6' +
          '5466F6E742E436F6C6F720707636C5768697465105469746C65466F6E742E486' +
          '56967687402F50E5469746C65466F6E742E4E616D65060D4D532053616E73205' +
          '3657269660F5469746C65466F6E742E5374796C650B00095461626C654E616D6' +
          '506055353464D4B0756697369626C65090000'
        ChildRefValsStr_ = 
          '$BinaryEncodeString000000003C100E0E01044E616D6506065441303133430' +
          '9446174614669656C640606544130313343114C6F6F6B7570526573756C74466' +
          '9656C6406054D4B3030320000'
      end
      item
        DataField = 'TA015'
        DataLength = 0
        DataScale = 0
        CheckLookup = True
        LookupType = ltConst
        RuleType = rtNone
        RuleValue_ = nil
        RefStr_ = '1'#13#10'2'#13#10
        ValStr_ = '完修'#13#10'報廢'#13#10
      end
      item
        DataField = 'TA020'
        DataLength = 0
        DataScale = 0
        CheckLookup = True
        LookupType = ltConst
        RuleType = rtNone
        RuleValue_ = nil
        RefStr_ = 'P'#13#10'B'#13#10'X'#13#10'Z'#13#10
        ValStr_ = '單板過站'#13#10'批次過站'#13#10'未結過站'#13#10'補刷過站'#13#10
      end
      item
        DataField = 'TA021'
        DataLength = 0
        DataScale = 0
        CheckLookup = True
        LookupType = ltConst
        RuleType = rtNone
        RuleValue_ = nil
        RefStr_ = 'Y'#13#10'N'#13#10'U'#13#10'V'#13#10
        ValStr_ = '已確認'#13#10'未確認'#13#10'確認失敗'#13#10'作廢'#13#10
      end
      item
        DataField = 'TA022'
        DataLength = 0
        DataScale = 0
        CheckLookup = True
        ErrorMsg = '員工代號不存在!!'
        LookupType = ltDBServer
        RuleType = rtNone
        RuleValue_ = nil
        LookupTableName_ = 'CMSMV'
        LookupKeyFieldPairs_ = 'MV001='#39':TA022'#39
        LookupResultField_ = 'MV001'
        LookupGridColumnDatasStr_ = 
          '$BinaryEncodeString000000031607090E01094669656C644E616D6506054D5' +
          '630303109416C69676E6D656E74070D74614C6566744A75737469667905436F6' +
          'C6F720707636C57686974650C466F6E742E43686172736574070F44454641554' +
          'C545F434841525345540A466F6E742E436F6C6F720707636C426C61636B0B466' +
          'F6E742E48656967687402F509466F6E742E4E616D65060D4D532053616E73205' +
          '3657269660A466F6E742E5374796C650B0005576964746802000E5469746C654' +
          '16C69676E6D656E74070D74614C6566744A7573746966790C5469746C6543617' +
          '074696F6E0608ADFBA475A54EB8B90A5469746C65436F6C6F720706636C47726' +
          '179115469746C65466F6E742E43686172736574070F44454641554C545F43484' +
          '1525345540F5469746C65466F6E742E436F6C6F720707636C576869746510546' +
          '9746C65466F6E742E48656967687402F50E5469746C65466F6E742E4E616D650' +
          '60D4D532053616E732053657269660F5469746C65466F6E742E5374796C650B0' +
          '0095461626C654E616D650605434D534D560756697369626C650900010946696' +
          '56C644E616D6506054D5630303209416C69676E6D656E74070D74614C6566744' +
          'A75737469667905436F6C6F720707636C57686974650C466F6E742E436861727' +
          '36574070F44454641554C545F434841525345540A466F6E742E436F6C6F72070' +
          '7636C426C61636B0B466F6E742E48656967687402F509466F6E742E4E616D650' +
          '60D4D532053616E732053657269660A466F6E742E5374796C650B00055769647' +
          '46802000E5469746C65416C69676E6D656E74070D74614C6566744A757374696' +
          '6790C5469746C6543617074696F6E0608ADFBA475A657BAD90A5469746C65436' +
          'F6C6F720706636C47726179115469746C65466F6E742E43686172736574070F4' +
          '4454641554C545F434841525345540F5469746C65466F6E742E436F6C6F72070' +
          '7636C5768697465105469746C65466F6E742E48656967687402F50E5469746C6' +
          '5466F6E742E4E616D65060D4D532053616E732053657269660F5469746C65466' +
          'F6E742E5374796C650B00095461626C654E616D650605434D534D56075669736' +
          '9626C65090000'
        ChildRefValsStr_ = 
          '$BinaryEncodeString000000003C10190E01044E616D6506065441303232430' +
          '9446174614669656C640606544130323243114C6F6F6B7570526573756C74466' +
          '9656C6406054D563030320000'
      end
      item
        DataField = 'TA025'
        DataLength = 0
        DataScale = 0
        CheckLookup = True
        LookupType = ltConst
        RuleType = rtNone
        RuleValue_ = nil
        RefStr_ = '01'#13#10'02'#13#10'03'#13#10'04'#13#10'05'#13#10'06'#13#10'07'#13#10'08'#13#10'20'#13#10'21'#13#10'22'#13#10'23'#13#10'30'#13#10'A'#13#10'B'#13#10
        ValStr_ = 
          'PASS'#13#10'檢測'#13#10'BURN IN '#13#10'MAC'#13#10'組合'#13#10'檢測+MAC'#13#10'MAC+檢測'#13#10'檢測+組合'#13#10 +
          '裝箱'#13#10'裝箱+秤重'#13#10'組合+裝箱'#13#10'組合+裝箱+秤重'#13#10'維修'#13#10'出貨'#13#10
      end
      item
        DataField = 'TA023'
        DataLength = 0
        DataScale = 0
        CheckLookup = True
        LookupType = ltDBServer
        RuleType = rtNone
        RuleValue_ = nil
        LookupTableName_ = 'SSFMI'
        LookupKeyFieldPairs_ = 'MI001='#39':TA023'#39
        LookupResultField_ = 'MI001'
        LookupGridColumnDatasStr_ = 
          '$BinaryEncodeString000000031E0B250E01094669656C644E616D6506054D4' +
          '930303109416C69676E6D656E74070D74614C6566744A75737469667905436F6' +
          'C6F720707636C57686974650C466F6E742E43686172736574070F44454641554' +
          'C545F434841525345540A466F6E742E436F6C6F720707636C426C61636B0B466' +
          'F6E742E48656967687402F509466F6E742E4E616D65060D4D532053616E73205' +
          '3657269660A466F6E742E5374796C650B0005576964746802000E5469746C654' +
          '16C69676E6D656E74070D74614C6566744A7573746966790C5469746C6543617' +
          '074696F6E060CA4A3A87DAAACAA70A54EB8B90A5469746C65436F6C6F7207066' +
          '36C47726179115469746C65466F6E742E43686172736574070F44454641554C5' +
          '45F434841525345540F5469746C65466F6E742E436F6C6F720707636C5768697' +
          '465105469746C65466F6E742E48656967687402F50E5469746C65466F6E742E4' +
          'E616D65060D4D532053616E732053657269660F5469746C65466F6E742E53747' +
          '96C650B00095461626C654E616D6506055353464D490756697369626C6509000' +
          '1094669656C644E616D6506054D4930303209416C69676E6D656E74070D74614' +
          'C6566744A75737469667905436F6C6F720707636C57686974650C466F6E742E4' +
          '3686172736574070F44454641554C545F434841525345540A466F6E742E436F6' +
          'C6F720707636C426C61636B0B466F6E742E48656967687402F509466F6E742E4' +
          'E616D65060D4D532053616E732053657269660A466F6E742E5374796C650B000' +
          '5576964746802000E5469746C65416C69676E6D656E74070D74614C6566744A7' +
          '573746966790C5469746C6543617074696F6E060CA4A3A87DAAACAA70A657BAD' +
          '90A5469746C65436F6C6F720706636C47726179115469746C65466F6E742E436' +
          '86172736574070F44454641554C545F434841525345540F5469746C65466F6E7' +
          '42E436F6C6F720707636C5768697465105469746C65466F6E742E48656967687' +
          '402F50E5469746C65466F6E742E4E616D65060D4D532053616E7320536572696' +
          '60F5469746C65466F6E742E5374796C650B00095461626C654E616D650605535' +
          '3464D490756697369626C65090000'
        ChildRefValsStr_ = 
          '$BinaryEncodeString000000003C100E0E01044E616D6506065441303233430' +
          '9446174614669656C640606544130323343114C6F6F6B7570526573756C74466' +
          '9656C6406054D493030320000'
      end
      item
        DataField = 'TA005'
        DataLength = 0
        DataScale = 0
        CheckLookup = True
        LookupType = ltDBServer
        RuleType = rtNone
        RuleValue_ = nil
        LookupTableName_ = 'SSFMF'
        LookupKeyFieldPairs_ = 'MF001='#39':TA005'#39
        LookupResultField_ = 'MF001'
        LookupGridColumnDatasStr_ = 
          '$BinaryEncodeString000000018C83650E01094669656C644E616D6506054D4' +
          '630303109416C69676E6D656E74070D74614C6566744A75737469667905436F6' +
          'C6F720707636C57686974650C466F6E742E43686172736574070F44454641554' +
          'C545F434841525345540A466F6E742E436F6C6F720707636C426C61636B0B466' +
          'F6E742E48656967687402F509466F6E742E4E616D65060D4D532053616E73205' +
          '3657269660A466F6E742E5374796C650B0005576964746802000E5469746C654' +
          '16C69676E6D656E74070D74614C6566744A7573746966790C5469746C6543617' +
          '074696F6E0608BB73A54FB3E6B8B90A5469746C65436F6C6F720706636C47726' +
          '179115469746C65466F6E742E43686172736574070F44454641554C545F43484' +
          '1525345540F5469746C65466F6E742E436F6C6F720707636C576869746510546' +
          '9746C65466F6E742E48656967687402F50E5469746C65466F6E742E4E616D650' +
          '60D4D532053616E732053657269660F5469746C65466F6E742E5374796C650B0' +
          '0095461626C654E616D6506055353464D460756697369626C65090000'
        ChildRefValsStr_ = 
          '$BinaryEncodeString000000003C10110E01044E616D6506065441303035430' +
          '9446174614669656C640606544130303543114C6F6F6B7570526573756C74466' +
          '9656C6406054D463030380000'
      end
      item
        DataField = 'NW004'
        DataLength = 0
        DataScale = 0
        CheckLookup = True
        LookupType = ltConst
        RuleType = rtNone
        RuleValue_ = nil
        RefStr_ = '1'#13#10'2'#13#10'3'#13#10'4'#13#10
        ValStr_ = '被組合後'#13#10'組合後'#13#10'存檔後'#13#10'滿箱後'#13#10
      end>
    Left = 88
    Top = 90
  end
  object rvDetail: TRefValComponent
    DataSource = dsDetail
    Left = 48
    Top = 135
  end
  object BatchClient: TBatchClient
    ServerPackageName = 'sSFSI023'
    ServerMethodName = 'Confirm'
    ShowProgress = True
    ProgressType = ptBatchLoop
    Left = 48
    Top = 266
  end
  object cdsQuery: TInfoClientDataSet
    Aggregates = <>
    Params = <>
    ProviderName = 'GLModule.qrySelect'
    DisableTranslate = False
    Left = 130
    Top = 177
  end
  object cdsQuery2: TInfoClientDataSet
    Aggregates = <>
    Params = <>
    ProviderName = 'GLModule.qrySelect'
    DisableTranslate = False
    Left = 130
    Top = 221
  end
  object DataSource1: TDataSource
    DataSet = cdsQuery2
    Left = 88
    Top = 265
  end
  object cdsDetail1: TInfoClientDataSet
    Aggregates = <>
    AutoCalcFields = False
    DataSetField = cdsMasterqrySSFTC
    PacketRecords = 10
    Params = <>
    BeforePost = cdsDetail1BeforePost
    OnNewRecord = cdsDetail1NewRecord
    EnableServerModified = True
    CalcCacheDatas = <
      item
        Name = 'TC004'
        CalcFields = 'TC004C'
      end>
    DisableTranslate = False
    Left = 12
    Top = 179
    object cdsDetail1COMPANY: TStringField
      FieldName = 'COMPANY'
      FixedChar = True
      Size = 10
    end
    object cdsDetail1CREATOR: TStringField
      FieldName = 'CREATOR'
      FixedChar = True
      Size = 10
    end
    object cdsDetail1USR_GROUP: TStringField
      FieldName = 'USR_GROUP'
      FixedChar = True
      Size = 10
    end
    object cdsDetail1CREATE_DATE: TStringField
      FieldName = 'CREATE_DATE'
      FixedChar = True
      Size = 8
    end
    object cdsDetail1MODIFIER: TStringField
      FieldName = 'MODIFIER'
      FixedChar = True
      Size = 10
    end
    object cdsDetail1MODI_DATE: TStringField
      FieldName = 'MODI_DATE'
      FixedChar = True
      Size = 8
    end
    object cdsDetail1FLAG: TFloatField
      FieldName = 'FLAG'
    end
    object cdsDetail1TC001: TStringField
      DisplayLabel = '生產序號'
      FieldName = 'TC001'
      FixedChar = True
      Size = 29
    end
    object cdsDetail1TC002: TStringField
      DisplayLabel = '序號'
      FieldName = 'TC002'
      FixedChar = True
      Size = 4
    end
    object cdsDetail1TC003: TStringField
      DisplayLabel = 'MAC碼'
      FieldName = 'TC003'
      FixedChar = True
      Size = 29
    end
    object cdsDetail1TC004: TStringField
      DisplayLabel = '確認碼'
      FieldName = 'TC004'
      FixedChar = True
      Size = 1
    end
    object cdsDetail1TA01X: TStringField
      DisplayLabel = '生產序號'
      FieldName = 'TA01X'
      FixedChar = True
      Size = 29
    end
    object cdsDetail1TA02X: TStringField
      DisplayLabel = '序號'
      FieldName = 'TA02X'
      FixedChar = True
      Size = 4
    end
  end
  object rvDetail1: TRefValComponent
    DataSource = dsDetail1
    Left = 48
    Top = 179
  end
  object dsDetail1: TDataSource
    DataSet = cdsDetail1
    Left = 88
    Top = 178
  end
  object cdsDetail2: TInfoClientDataSet
    Aggregates = <>
    AutoCalcFields = False
    DataSetField = cdsMasterqrySSFTD
    PacketRecords = 10
    Params = <>
    BeforePost = cdsDetail2BeforePost
    OnNewRecord = cdsDetail2NewRecord
    EnableServerModified = True
    CalcCacheDatas = <
      item
        Name = 'TC004'
        CalcFields = 'TC004C'
      end>
    DisableTranslate = False
    Left = 12
    Top = 222
    object cdsDetail2COMPANY: TStringField
      FieldName = 'COMPANY'
      FixedChar = True
      Size = 10
    end
    object cdsDetail2CREATOR: TStringField
      FieldName = 'CREATOR'
      FixedChar = True
      Size = 10
    end
    object cdsDetail2USR_GROUP: TStringField
      FieldName = 'USR_GROUP'
      FixedChar = True
      Size = 10
    end
    object cdsDetail2CREATE_DATE: TStringField
      FieldName = 'CREATE_DATE'
      FixedChar = True
      Size = 8
    end
    object cdsDetail2MODIFIER: TStringField
      FieldName = 'MODIFIER'
      FixedChar = True
      Size = 10
    end
    object cdsDetail2MODI_DATE: TStringField
      FieldName = 'MODI_DATE'
      FixedChar = True
      Size = 8
    end
    object cdsDetail2FLAG: TFloatField
      FieldName = 'FLAG'
    end
    object cdsDetail2TD001: TStringField
      DisplayLabel = '生產序號'
      FieldName = 'TD001'
      FixedChar = True
      Size = 29
    end
    object cdsDetail2TD002: TStringField
      DisplayLabel = '序號'
      FieldName = 'TD002'
      FixedChar = True
      Size = 4
    end
    object cdsDetail2TD003: TMemoField
      DisplayLabel = '檢測值'
      FieldName = 'TD003'
      BlobType = ftMemo
    end
    object cdsDetail2TD004: TStringField
      DisplayLabel = '確認碼'
      FieldName = 'TD004'
      FixedChar = True
      Size = 1
    end
    object cdsDetail2TA01X: TStringField
      DisplayLabel = '生產序號'
      FieldName = 'TA01X'
      FixedChar = True
      Size = 29
    end
    object cdsDetail2TA02X: TStringField
      DisplayLabel = '序號'
      FieldName = 'TA02X'
      FixedChar = True
      Size = 4
    end
  end
  object rvDetai2: TRefValComponent
    DataSource = dsDetail2
    Left = 48
    Top = 222
  end
  object dsDetail2: TDataSource
    DataSet = cdsDetail2
    Left = 88
    Top = 221
  end
  object OpenDialog: TOpenDialog
    Filter = '*.lab|*.lab'
    Left = 12
    Top = 353
  end
  object AcdsCondition: TInfoClientDataSet
    Aggregates = <>
    CommandText = 
      'SELECT TA005,TA007,TA022,TA011,TA008,TA045'#13#10'FROM SSFTA(NOLOCK)'#13#10 +
      'WHERE 1=0'#13#10
    Params = <>
    ProviderName = 'GLModule.qrySelect'
    SQL.Strings = (
      'SELECT TA005,TA007,TA022,TA011,TA008,TA045'
      'FROM SSFTA(NOLOCK)'
      'WHERE 1=0')
    DisableTranslate = False
    ConnectToServer = False
    Left = 193
    Top = 450
    InfoClient_ = {
      9619E0BD0100000018000000060000000000030000002F010554413030350100
      4900000002000753554254595045020049000A00466978656443686172000557
      49445448020002000F0005544130303701004900000002000753554254595045
      020049000A004669786564436861720005574944544802000200060005544130
      323201004900000002000753554254595045020049000A004669786564436861
      7200055749445448020002000A00055441303131010049000000020007535542
      54595045020049000A0046697865644368617200055749445448020002000600
      05544130303801004900000002000753554254595045020049000A0046697865
      6443686172000557494454480200020006000554413034350800040000000000
      0100044C4349440400010000000000}
    InfoClient_Struct = {
      094669656C64446566730E01044E616D65060554413030350844617461547970
      6507086674537472696E670453697A65020F0001044E616D6506055441303037
      08446174615479706507086674537472696E670453697A6502060001044E616D
      650605544130323208446174615479706507086674537472696E670453697A65
      020A0001044E616D650605544130313108446174615479706507086674537472
      696E670453697A6502060001044E616D65060554413030380844617461547970
      6507086674537472696E670453697A6502060001044E616D6506055441303435
      08446174615479706507076674466C6F61740000095461626C654E616D650605
      53534654410E5461626C654E616D65416C696173060254310C50726F76696465
      724E616D65060971727953656C6563741245787472614C6566744A6F696E4461
      7461730E0000}
    object AcdsConditionTA007: TStringField
      FieldName = 'TA007'
      FixedChar = True
      Size = 6
    end
    object AcdsConditionTA022: TStringField
      FieldName = 'TA022'
      FixedChar = True
      Size = 10
    end
    object AcdsConditionTA011: TStringField
      FieldName = 'TA011'
      FixedChar = True
      Size = 6
    end
    object AcdsConditionTA005: TStringField
      FieldName = 'TA005'
      FixedChar = True
      Size = 15
    end
    object AcdsConditionTA008: TStringField
      FieldName = 'TA008'
      FixedChar = True
      Size = 6
    end
    object AcdsConditionTA045: TFloatField
      FieldName = 'TA045'
    end
  end
  object AdsCondition: TDataSource
    DataSet = AcdsCondition
    Left = 226
    Top = 450
  end
  object ArvConditon: TRefValComponent
    DataSource = AdsCondition
    RefVals = <
      item
        DataField = 'TA005'
        DataLength = 0
        DataScale = 0
        CheckLookup = True
        ErrorMsg = '製令單號不存在'
        LookupType = ltDBServer
        RuleType = rtNone
        RuleValue_ = nil
        LookupProviderName_ = 'GLModule.qrySelect'
        LookupTableName_ = 'SSFMF'
        LookupKeyFieldPairs_ = 'MF001='#39':TA005'#39
        LookupResultField_ = 'MF001'
        LookupGridColumnDatasStr_ = 
          '$BinaryEncodeString000000018C83650E01094669656C644E616D6506054D4' +
          '630303109416C69676E6D656E74070D74614C6566744A75737469667905436F6' +
          'C6F720707636C57686974650C466F6E742E43686172736574070F44454641554' +
          'C545F434841525345540A466F6E742E436F6C6F720707636C426C61636B0B466' +
          'F6E742E48656967687402F509466F6E742E4E616D65060D4D532053616E73205' +
          '3657269660A466F6E742E5374796C650B0005576964746802000E5469746C654' +
          '16C69676E6D656E74070D74614C6566744A7573746966790C5469746C6543617' +
          '074696F6E0608BB73A54FB3E6B8B90A5469746C65436F6C6F720706636C47726' +
          '179115469746C65466F6E742E43686172736574070F44454641554C545F43484' +
          '1525345540F5469746C65466F6E742E436F6C6F720707636C576869746510546' +
          '9746C65466F6E742E48656967687402F50E5469746C65466F6E742E4E616D650' +
          '60D4D532053616E732053657269660F5469746C65466F6E742E5374796C650B0' +
          '0095461626C654E616D6506055353464D460756697369626C65090000'
      end
      item
        DataField = 'TA007'
        DataLength = 0
        DataScale = 0
        CheckLookup = False
        ErrorMsg = '製程代號不存在!!'
        LookupType = ltDBServer
        RuleType = rtNone
        RuleValue_ = nil
        LookupProviderName_ = 'GLModule.qrySelect'
        LookupTableName_ = 'SSFMA'
        LookupKeyFieldPairs_ = 'MA001='#39':TA007'#39
        LookupResultField_ = 'MA001'
        LookupGridColumnDatasStr_ = 
          '$BinaryEncodeString000000031606010E01094669656C644E616D6506054D4' +
          '130303109416C69676E6D656E74070D74614C6566744A75737469667905436F6' +
          'C6F720707636C57686974650C466F6E742E43686172736574070F44454641554' +
          'C545F434841525345540A466F6E742E436F6C6F720707636C426C61636B0B466' +
          'F6E742E48656967687402F509466F6E742E4E616D65060D4D532053616E73205' +
          '3657269660A466F6E742E5374796C650B0005576964746802000E5469746C654' +
          '16C69676E6D656E74070D74614C6566744A7573746966790C5469746C6543617' +
          '074696F6E0608BB73B57BA54EB8B90A5469746C65436F6C6F720706636C47726' +
          '179115469746C65466F6E742E43686172736574070F44454641554C545F43484' +
          '1525345540F5469746C65466F6E742E436F6C6F720707636C576869746510546' +
          '9746C65466F6E742E48656967687402F50E5469746C65466F6E742E4E616D650' +
          '60D4D532053616E732053657269660F5469746C65466F6E742E5374796C650B0' +
          '0095461626C654E616D6506055353464D410756697369626C650900010946696' +
          '56C644E616D6506054D4130303209416C69676E6D656E74070D74614C6566744' +
          'A75737469667905436F6C6F720707636C57686974650C466F6E742E436861727' +
          '36574070F44454641554C545F434841525345540A466F6E742E436F6C6F72070' +
          '7636C426C61636B0B466F6E742E48656967687402F509466F6E742E4E616D650' +
          '60D4D532053616E732053657269660A466F6E742E5374796C650B00055769647' +
          '46802000E5469746C65416C69676E6D656E74070D74614C6566744A757374696' +
          '6790C5469746C6543617074696F6E0608BB73B57BA657BAD90A5469746C65436' +
          'F6C6F720706636C47726179115469746C65466F6E742E43686172736574070F4' +
          '4454641554C545F434841525345540F5469746C65466F6E742E436F6C6F72070' +
          '7636C5768697465105469746C65466F6E742E48656967687402F50E5469746C6' +
          '5466F6E742E4E616D65060D4D532053616E732053657269660F5469746C65466' +
          'F6E742E5374796C650B00095461626C654E616D6506055353464D41075669736' +
          '9626C65090000'
      end
      item
        DataField = 'TA022'
        DataLength = 0
        DataScale = 0
        CheckLookup = False
        ErrorMsg = '員工代號不存在!!'
        LookupType = ltDBServer
        RuleType = rtNone
        RuleValue_ = nil
        LookupTableName_ = 'CMSMV'
        LookupKeyFieldPairs_ = 'MV001='#39':TA022'#39
        LookupResultField_ = 'MV001'
        LookupGridColumnDatasStr_ = 
          '$BinaryEncodeString000000031607090E01094669656C644E616D6506054D5' +
          '630303109416C69676E6D656E74070D74614C6566744A75737469667905436F6' +
          'C6F720707636C57686974650C466F6E742E43686172736574070F44454641554' +
          'C545F434841525345540A466F6E742E436F6C6F720707636C426C61636B0B466' +
          'F6E742E48656967687402F509466F6E742E4E616D65060D4D532053616E73205' +
          '3657269660A466F6E742E5374796C650B0005576964746802000E5469746C654' +
          '16C69676E6D656E74070D74614C6566744A7573746966790C5469746C6543617' +
          '074696F6E0608ADFBA475A54EB8B90A5469746C65436F6C6F720706636C47726' +
          '179115469746C65466F6E742E43686172736574070F44454641554C545F43484' +
          '1525345540F5469746C65466F6E742E436F6C6F720707636C576869746510546' +
          '9746C65466F6E742E48656967687402F50E5469746C65466F6E742E4E616D650' +
          '60D4D532053616E732053657269660F5469746C65466F6E742E5374796C650B0' +
          '0095461626C654E616D650605434D534D560756697369626C650900010946696' +
          '56C644E616D6506054D5630303209416C69676E6D656E74070D74614C6566744' +
          'A75737469667905436F6C6F720707636C57686974650C466F6E742E436861727' +
          '36574070F44454641554C545F434841525345540A466F6E742E436F6C6F72070' +
          '7636C426C61636B0B466F6E742E48656967687402F509466F6E742E4E616D650' +
          '60D4D532053616E732053657269660A466F6E742E5374796C650B00055769647' +
          '46802000E5469746C65416C69676E6D656E74070D74614C6566744A757374696' +
          '6790C5469746C6543617074696F6E0608ADFBA475A657BAD90A5469746C65436' +
          'F6C6F720706636C47726179115469746C65466F6E742E43686172736574070F4' +
          '4454641554C545F434841525345540F5469746C65466F6E742E436F6C6F72070' +
          '7636C5768697465105469746C65466F6E742E48656967687402F50E5469746C6' +
          '5466F6E742E4E616D65060D4D532053616E732053657269660F5469746C65466' +
          'F6E742E5374796C650B00095461626C654E616D650605434D534D56075669736' +
          '9626C65090000'
      end
      item
        DataField = 'TA011'
        DataLength = 0
        DataScale = 0
        CheckLookup = False
        ErrorMsg = '維修點代號不存在!!'
        LookupType = ltDBServer
        RuleType = rtNone
        RuleValue_ = nil
        LookupTableName_ = 'SSFMM'
        LookupKeyFieldPairs_ = 'MM001='#39':TA011'#39
        LookupResultField_ = 'MM001'
        LookupGridColumnDatasStr_ = 
          '$BinaryEncodeString000000031A0A010E01094669656C644E616D6506054D4' +
          'D30303109416C69676E6D656E74070D74614C6566744A75737469667905436F6' +
          'C6F720707636C57686974650C466F6E742E43686172736574070F44454641554' +
          'C545F434841525345540A466F6E742E436F6C6F720707636C426C61636B0B466' +
          'F6E742E48656967687402F509466F6E742E4E616D65060D4D532053616E73205' +
          '3657269660A466F6E742E5374796C650B0005576964746802000E5469746C654' +
          '16C69676E6D656E74070D74614C6566744A7573746966790C5469746C6543617' +
          '074696F6E060ABAFBADD7C249A54EB8B90A5469746C65436F6C6F720706636C4' +
          '7726179115469746C65466F6E742E43686172736574070F44454641554C545F4' +
          '34841525345540F5469746C65466F6E742E436F6C6F720707636C57686974651' +
          '05469746C65466F6E742E48656967687402F50E5469746C65466F6E742E4E616' +
          'D65060D4D532053616E732053657269660F5469746C65466F6E742E5374796C6' +
          '50B00095461626C654E616D6506055353464D4D0756697369626C65090001094' +
          '669656C644E616D6506054D4D30303209416C69676E6D656E74070D74614C656' +
          '6744A75737469667905436F6C6F720707636C57686974650C466F6E742E43686' +
          '172736574070F44454641554C545F434841525345540A466F6E742E436F6C6F7' +
          '20707636C426C61636B0B466F6E742E48656967687402F509466F6E742E4E616' +
          'D65060D4D532053616E732053657269660A466F6E742E5374796C650B0005576' +
          '964746802000E5469746C65416C69676E6D656E74070D74614C6566744A75737' +
          '46966790C5469746C6543617074696F6E060ABAFBADD7C249A657BAD90A54697' +
          '46C65436F6C6F720706636C47726179115469746C65466F6E742E43686172736' +
          '574070F44454641554C545F434841525345540F5469746C65466F6E742E436F6' +
          'C6F720707636C5768697465105469746C65466F6E742E48656967687402F50E5' +
          '469746C65466F6E742E4E616D65060D4D532053616E732053657269660F54697' +
          '46C65466F6E742E5374796C650B00095461626C654E616D6506055353464D4D0' +
          '756697369626C65090000'
      end
      item
        DataField = 'TA008'
        DataLength = 0
        DataScale = 0
        CheckLookup = True
        LookupType = ltDBServer
        RuleType = rtNone
        RuleValue_ = nil
        LookupTableName_ = 'SSFML'
        LookupKeyFieldPairs_ = 'ML001='#39':TA008'#39';ML005='#39'N'#39
        LookupResultField_ = 'ML001'
        LookupGridColumnDatasStr_ = 
          '$BinaryEncodeString000000031A08430E01094669656C644E616D6506054D4' +
          'C30303109416C69676E6D656E74070D74614C6566744A75737469667905436F6' +
          'C6F720707636C57686974650C466F6E742E43686172736574070F44454641554' +
          'C545F434841525345540A466F6E742E436F6C6F720707636C426C61636B0B466' +
          'F6E742E48656967687402F509466F6E742E4E616D65060D4D532053616E73205' +
          '3657269660A466F6E742E5374796C650B0005576964746802000E5469746C654' +
          '16C69676E6D656E74070D74614C6566744A7573746966790C5469746C6543617' +
          '074696F6E060AA475A740AFB8A54EB8B90A5469746C65436F6C6F720706636C4' +
          '7726179115469746C65466F6E742E43686172736574070F44454641554C545F4' +
          '34841525345540F5469746C65466F6E742E436F6C6F720707636C57686974651' +
          '05469746C65466F6E742E48656967687402F50E5469746C65466F6E742E4E616' +
          'D65060D4D532053616E732053657269660F5469746C65466F6E742E5374796C6' +
          '50B00095461626C654E616D6506055353464D4C0756697369626C65090001094' +
          '669656C644E616D6506054D4C30303209416C69676E6D656E74070D74614C656' +
          '6744A75737469667905436F6C6F720707636C57686974650C466F6E742E43686' +
          '172736574070F44454641554C545F434841525345540A466F6E742E436F6C6F7' +
          '20707636C426C61636B0B466F6E742E48656967687402F509466F6E742E4E616' +
          'D65060D4D532053616E732053657269660A466F6E742E5374796C650B0005576' +
          '964746802000E5469746C65416C69676E6D656E74070D74614C6566744A75737' +
          '46966790C5469746C6543617074696F6E060AA475A740AFB8A657BAD90A54697' +
          '46C65436F6C6F720706636C47726179115469746C65466F6E742E43686172736' +
          '574070F44454641554C545F434841525345540F5469746C65466F6E742E436F6' +
          'C6F720707636C5768697465105469746C65466F6E742E48656967687402F50E5' +
          '469746C65466F6E742E4E616D65060D4D532053616E732053657269660F54697' +
          '46C65466F6E742E5374796C650B00095461626C654E616D6506055353464D4C0' +
          '756697369626C65090000'
      end>
    Left = 259
    Top = 450
  end
  object BcdsCondition: TInfoClientDataSet
    Aggregates = <>
    CommandText = 
      'SELECT TA01X,TA015,TA012,TA013,TA014'#13#10'FROM SSFTA(NOLOCK)'#13#10'WHERE ' +
      '1=0'#13#10
    Params = <>
    ProviderName = 'GLModule.qrySelect'
    SQL.Strings = (
      'SELECT TA01X,TA015,TA012,TA013,TA014'
      'FROM SSFTA(NOLOCK)'
      'WHERE 1=0')
    DisableTranslate = False
    ConnectToServer = False
    Left = 193
    Top = 493
    InfoClient_ = {
      9619E0BD01000000180000000500000000000300000021010554413031580100
      4900000002000753554254595045020049000A00466978656443686172000557
      4944544802000200190005544130313501004900000002000753554254595045
      020049000A004669786564436861720005574944544802000200010005544130
      313201004900000002000753554254595045020049000A004669786564436861
      7200055749445448020002000600055441303133010049000000020007535542
      54595045020049000A0046697865644368617200055749445448020002000600
      05544130313401004900000002000753554254595045020049000A0046697865
      6443686172000557494454480200020050000100044C43494404000100000000
      00}
    InfoClient_Struct = {
      094669656C64446566730E01044E616D65060554413031580844617461547970
      6507086674537472696E670453697A6502190001044E616D6506055441303135
      08446174615479706507086674537472696E670453697A6502010001044E616D
      650605544130313208446174615479706507086674537472696E670453697A65
      02060001044E616D650605544130313308446174615479706507086674537472
      696E670453697A6502060001044E616D65060554413031340844617461547970
      6507086674537472696E670453697A6502500000095461626C654E616D650605
      53534654410E5461626C654E616D65416C696173060254310C50726F76696465
      724E616D65060971727953656C6563741245787472614C6566744A6F696E4461
      7461730E0000}
    object BcdsConditionTA01X: TStringField
      FieldName = 'TA01X'
      FixedChar = True
      Size = 29
    end
    object BcdsConditionTA015: TStringField
      FieldName = 'TA015'
      FixedChar = True
      Size = 1
    end
    object BcdsConditionTA012: TStringField
      FieldName = 'TA012'
      FixedChar = True
      Size = 6
    end
    object BcdsConditionTA013: TStringField
      FieldName = 'TA013'
      FixedChar = True
      Size = 6
    end
    object BcdsConditionTA014: TStringField
      FieldName = 'TA014'
      FixedChar = True
      Size = 80
    end
  end
  object BdsCondition: TDataSource
    DataSet = BcdsCondition
    Left = 226
    Top = 492
  end
  object BrvConditon: TRefValComponent
    DataSource = BdsCondition
    RefVals = <
      item
        DataField = 'TA01X'
        DataLength = 0
        DataScale = 0
        CheckLookup = False
        ErrorMsg = '生產序號不存在!!'
        LookupType = ltDBServer
        RuleType = rtNone
        RuleValue_ = nil
        LookupProviderName_ = 'GLModule.qrySelect'
        LookupTableName_ = 'SSFMO'
        LookupKeyFieldPairs_ = 'MO001='#39':TA01X'#39
        LookupResultField_ = 'MO001'
        LookupGridColumnDatasStr_ = 
          '$BinaryEncodeString000000018C83F10E01094669656C644E616D6506054D4' +
          'F30303109416C69676E6D656E74070D74614C6566744A75737469667905436F6' +
          'C6F720707636C57686974650C466F6E742E43686172736574070F44454641554' +
          'C545F434841525345540A466F6E742E436F6C6F720707636C426C61636B0B466' +
          'F6E742E48656967687402F509466F6E742E4E616D65060D4D532053616E73205' +
          '3657269660A466F6E742E5374796C650B0005576964746802000E5469746C654' +
          '16C69676E6D656E74070D74614C6566744A7573746966790C5469746C6543617' +
          '074696F6E0608A5CDB2A3A7C7B8B90A5469746C65436F6C6F720706636C47726' +
          '179115469746C65466F6E742E43686172736574070F44454641554C545F43484' +
          '1525345540F5469746C65466F6E742E436F6C6F720707636C576869746510546' +
          '9746C65466F6E742E48656967687402F50E5469746C65466F6E742E4E616D650' +
          '60D4D532053616E732053657269660F5469746C65466F6E742E5374796C650B0' +
          '0095461626C654E616D6506055353464D4F0756697369626C65090000'
      end
      item
        DataField = 'TA015'
        DataLength = 0
        DataScale = 0
        CheckLookup = False
        ErrorMsg = '維修註記不存在!!'
        LookupType = ltConst
        RuleType = rtNone
        RuleValue_ = nil
        RefStr_ = '1'#13#10'2'#13#10
        ValStr_ = '完修'#13#10'報廢'#13#10
      end
      item
        DataField = 'TA012'
        DataLength = 0
        DataScale = 0
        CheckLookup = False
        ErrorMsg = '維修原因代號不存在!!'
        LookupType = ltDBServer
        RuleType = rtNone
        RuleValue_ = nil
        LookupTableName_ = 'SSFMJ'
        LookupKeyFieldPairs_ = 'MJ001='#39':TA012'#39
        LookupResultField_ = 'MJ001'
        LookupGridColumnDatasStr_ = 
          '$BinaryEncodeString000000031E0D1B0E01094669656C644E616D6506054D4' +
          'A30303109416C69676E6D656E74070D74614C6566744A75737469667905436F6' +
          'C6F720707636C57686974650C466F6E742E43686172736574070F44454641554' +
          'C545F434841525345540A466F6E742E436F6C6F720707636C426C61636B0B466' +
          'F6E742E48656967687402F509466F6E742E4E616D65060D4D532053616E73205' +
          '3657269660A466F6E742E5374796C650B0005576964746802000E5469746C654' +
          '16C69676E6D656E74070D74614C6566744A7573746966790C5469746C6543617' +
          '074696F6E060CBAFBADD7ADECA65DA54EB8B90A5469746C65436F6C6F7207066' +
          '36C47726179115469746C65466F6E742E43686172736574070F44454641554C5' +
          '45F434841525345540F5469746C65466F6E742E436F6C6F720707636C5768697' +
          '465105469746C65466F6E742E48656967687402F50E5469746C65466F6E742E4' +
          'E616D65060D4D532053616E732053657269660F5469746C65466F6E742E53747' +
          '96C650B00095461626C654E616D6506055353464D4A0756697369626C6509000' +
          '1094669656C644E616D6506054D4A30303209416C69676E6D656E74070D74614' +
          'C6566744A75737469667905436F6C6F720707636C57686974650C466F6E742E4' +
          '3686172736574070F44454641554C545F434841525345540A466F6E742E436F6' +
          'C6F720707636C426C61636B0B466F6E742E48656967687402F509466F6E742E4' +
          'E616D65060D4D532053616E732053657269660A466F6E742E5374796C650B000' +
          '5576964746802000E5469746C65416C69676E6D656E74070D74614C6566744A7' +
          '573746966790C5469746C6543617074696F6E060CBAFBADD7ADECA65DA657BAD' +
          '90A5469746C65436F6C6F720706636C47726179115469746C65466F6E742E436' +
          '86172736574070F44454641554C545F434841525345540F5469746C65466F6E7' +
          '42E436F6C6F720707636C5768697465105469746C65466F6E742E48656967687' +
          '402F50E5469746C65466F6E742E4E616D65060D4D532053616E7320536572696' +
          '60F5469746C65466F6E742E5374796C650B00095461626C654E616D650605535' +
          '3464D4A0756697369626C65090000'
      end
      item
        DataField = 'TA013'
        DataLength = 0
        DataScale = 0
        CheckLookup = False
        ErrorMsg = '不良責任歸屬代號不存在!!'
        LookupType = ltDBServer
        RuleType = rtNone
        RuleValue_ = nil
        LookupTableName_ = 'SSFMK'
        LookupKeyFieldPairs_ = 'MK001='#39':TA013'#39
        LookupResultField_ = 'MK001'
        LookupGridColumnDatasStr_ = 
          '$BinaryEncodeString00000003220EE90E01094669656C644E616D6506054D4' +
          'B30303109416C69676E6D656E74070D74614C6566744A75737469667905436F6' +
          'C6F720707636C57686974650C466F6E742E43686172736574070F44454641554' +
          'C545F434841525345540A466F6E742E436F6C6F720707636C426C61636B0B466' +
          'F6E742E48656967687402F509466F6E742E4E616D65060D4D532053616E73205' +
          '3657269660A466F6E742E5374796C650B0005576964746802000E5469746C654' +
          '16C69676E6D656E74070D74614C6566744A7573746966790C5469746C6543617' +
          '074696F6E060CA4A3A87DB364A5F4C26BC4DD0A5469746C65436F6C6F7207066' +
          '36C47726179115469746C65466F6E742E43686172736574070F44454641554C5' +
          '45F434841525345540F5469746C65466F6E742E436F6C6F720707636C5768697' +
          '465105469746C65466F6E742E48656967687402F50E5469746C65466F6E742E4' +
          'E616D65060D4D532053616E732053657269660F5469746C65466F6E742E53747' +
          '96C650B00095461626C654E616D6506055353464D4B0756697369626C6509000' +
          '1094669656C644E616D6506054D4B30303209416C69676E6D656E74070D74614' +
          'C6566744A75737469667905436F6C6F720707636C57686974650C466F6E742E4' +
          '3686172736574070F44454641554C545F434841525345540A466F6E742E436F6' +
          'C6F720707636C426C61636B0B466F6E742E48656967687402F509466F6E742E4' +
          'E616D65060D4D532053616E732053657269660A466F6E742E5374796C650B000' +
          '5576964746802000E5469746C65416C69676E6D656E74070D74614C6566744A7' +
          '573746966790C5469746C6543617074696F6E0610A4A3A87DB364A5F4C26BC4D' +
          'DA657BAD90A5469746C65436F6C6F720706636C47726179115469746C65466F6' +
          'E742E43686172736574070F44454641554C545F434841525345540F5469746C6' +
          '5466F6E742E436F6C6F720707636C5768697465105469746C65466F6E742E486' +
          '56967687402F50E5469746C65466F6E742E4E616D65060D4D532053616E73205' +
          '3657269660F5469746C65466F6E742E5374796C650B00095461626C654E616D6' +
          '506055353464D4B0756697369626C65090000'
      end>
    Left = 259
    Top = 493
  end
  object DcdsCondition: TInfoClientDataSet
    Aggregates = <>
    CommandText = 
      'SELECT TA01X,TA01X AS TB003,TA000=SPACE(2)'#13#10'FROM SSFTA(NOLOCK)'#13#10 +
      'WHERE 1=0'#13#10#13#10
    Params = <>
    ProviderName = 'GLModule.qrySelect'
    SQL.Strings = (
      'SELECT TA01X,TA01X AS TB003,TA000=SPACE(2)'
      'FROM SSFTA(NOLOCK)'
      'WHERE 1=0'
      '')
    DisableTranslate = False
    ConnectToServer = False
    Left = 193
    Top = 578
    InfoClient_ = {
      9619E0BD010000001800000003000000000003000000BD000554413031580100
      4900000002000753554254595045020049000A00466978656443686172000557
      4944544802000200190005544230303301004900000002000753554254595045
      020049000A004669786564436861720005574944544802000200190005544130
      303001004900000002000753554254595045020049000A004669786564436861
      72000557494454480200020002000100044C4349440400010000000000}
    InfoClient_Struct = {
      094669656C64446566730E01044E616D65060554413031580844617461547970
      6507086674537472696E670453697A6502190001044E616D6506055442303033
      08446174615479706507086674537472696E670453697A6502190001044E616D
      650605544130303008446174615479706507086674537472696E670453697A65
      02020000095461626C654E616D65060553534654410E5461626C654E616D6541
      6C696173060254310C50726F76696465724E616D65060971727953656C656374
      1245787472614C6566744A6F696E44617461730E0000}
    object DcdsConditionTA01X: TStringField
      FieldName = 'TA01X'
      FixedChar = True
      Size = 29
    end
    object DcdsConditionTB003: TStringField
      FieldName = 'TB003'
      FixedChar = True
      Size = 29
    end
    object DcdsConditionTA000: TStringField
      FieldName = 'TA000'
      FixedChar = True
      Size = 2
    end
  end
  object DdsCondition: TDataSource
    DataSet = DcdsCondition
    Left = 226
    Top = 577
  end
  object DrvConditon: TRefValComponent
    DataSource = DdsCondition
    RefVals = <
      item
        DataField = 'TA01X'
        DataLength = 0
        DataScale = 0
        CheckLookup = True
        ErrorMsg = '生產序號不存在!!'
        LookupType = ltDBServer
        RuleType = rtNone
        RuleValue_ = nil
        LookupProviderName_ = 'GLModule.qrySelect'
        LookupTableName_ = 'SSFMO'
        LookupKeyFieldPairs_ = 'MO001='#39':TA01X'#39
        LookupResultField_ = 'MO001'
        LookupGridColumnDatasStr_ = 
          '$BinaryEncodeString000000018C83F10E01094669656C644E616D6506054D4' +
          'F30303109416C69676E6D656E74070D74614C6566744A75737469667905436F6' +
          'C6F720707636C57686974650C466F6E742E43686172736574070F44454641554' +
          'C545F434841525345540A466F6E742E436F6C6F720707636C426C61636B0B466' +
          'F6E742E48656967687402F509466F6E742E4E616D65060D4D532053616E73205' +
          '3657269660A466F6E742E5374796C650B0005576964746802000E5469746C654' +
          '16C69676E6D656E74070D74614C6566744A7573746966790C5469746C6543617' +
          '074696F6E0608A5CDB2A3A7C7B8B90A5469746C65436F6C6F720706636C47726' +
          '179115469746C65466F6E742E43686172736574070F44454641554C545F43484' +
          '1525345540F5469746C65466F6E742E436F6C6F720707636C576869746510546' +
          '9746C65466F6E742E48656967687402F50E5469746C65466F6E742E4E616D650' +
          '60D4D532053616E732053657269660F5469746C65466F6E742E5374796C650B0' +
          '0095461626C654E616D6506055353464D4F0756697369626C65090000'
      end>
    Left = 259
    Top = 578
  end
  object cdsCounter: TInfoClientDataSet
    Aggregates = <>
    CommandText = 'SELECT PASS='#39'PASS'#39',PASSNUM=999999'#13#10'FROM SSFTA'#13#10'WHERE 1=0'#13#10' '#13#10
    Params = <>
    ProviderName = 'GLModule.qrySelect'
    SQL.Strings = (
      'SELECT PASS='#39'PASS'#39',PASSNUM=999999'
      'FROM SSFTA'
      'WHERE 1=0'
      ' ')
    DisableTranslate = False
    ConnectToServer = False
    Left = 12
    Top = 396
    InfoClient_ = {
      9619E0BD01000000180000000200000000000300000068000450415353010049
      00000002000753554254595045020049000A0046697865644368617200055749
      44544802000200040007504153534E554D04000100000000000100044C434944
      0400010000000000}
    InfoClient_Struct = {
      094669656C64446566730E01044E616D65060450415353084461746154797065
      07086674537472696E670453697A6502040001044E616D650607504153534E55
      4D08446174615479706507096674496E74656765720000095461626C654E616D
      65060553534654410E5461626C654E616D65416C696173060254310C50726F76
      696465724E616D65060971727953656C6563741245787472614C6566744A6F69
      6E44617461730E0000}
    object cdsCounterPASS: TStringField
      FieldName = 'PASS'
      FixedChar = True
      Size = 4
    end
    object cdsCounterPASSNUM: TIntegerField
      FieldName = 'PASSNUM'
    end
  end
  object dsCounter: TDataSource
    DataSet = cdsCounter
    Left = 48
    Top = 396
  end
  object CcdsCondition: TInfoClientDataSet
    Aggregates = <>
    CommandText = 
      'SELECT TA01X,TA027,TA037,TA038,TA049'#13#10'FROM SSFTA(NOLOCK)'#13#10'WHERE ' +
      '1=0'#13#10
    Params = <>
    ProviderName = 'GLModule.qrySelect'
    SQL.Strings = (
      'SELECT TA01X,TA027,TA037,TA038,TA049'
      'FROM SSFTA(NOLOCK)'
      'WHERE 1=0')
    DisableTranslate = False
    ConnectToServer = False
    Left = 193
    Top = 535
    InfoClient_ = {
      9619E0BD01000000180000000500000000000300000091000554413031580100
      4900000002000753554254595045020049000A00466978656443686172000557
      49445448020002001D0005544130323708000400000000000554413033370800
      0400000000000554413033380800040000000000055441303439080004000000
      00000100044C4349440400010000000000}
    InfoClient_Struct = {
      094669656C64446566730E01044E616D65060554413031580844617461547970
      6507086674537472696E670453697A65021D0001044E616D6506055441303237
      08446174615479706507076674466C6F61740001044E616D6506055441303337
      08446174615479706507076674466C6F61740001044E616D6506055441303338
      08446174615479706507076674466C6F61740001044E616D6506055441303439
      08446174615479706507076674466C6F61740000095461626C654E616D65060D
      5353465441284E4F4C4F434B290E5461626C654E616D65416C69617306025431
      0C50726F76696465724E616D65060971727953656C6563741245787472614C65
      66744A6F696E44617461730E0000}
    object CcdsConditionTA01X: TStringField
      FieldName = 'TA01X'
      FixedChar = True
      Size = 29
    end
    object CcdsConditionTA027: TFloatField
      FieldName = 'TA027'
    end
    object CcdsConditionTA037: TFloatField
      FieldName = 'TA037'
    end
    object CcdsConditionTA038: TFloatField
      FieldName = 'TA038'
    end
    object CcdsConditionTA049: TFloatField
      FieldName = 'TA049'
    end
  end
  object CdsCondition: TDataSource
    DataSet = CcdsCondition
    Left = 226
    Top = 535
  end
  object CrvConditon: TRefValComponent
    DataSource = CdsCondition
    RefVals = <
      item
        DataField = 'TA008'
        DataLength = 0
        DataScale = 0
        CheckLookup = True
        ErrorMsg = '檢測點代號不存在!!'
        LookupType = ltDBServer
        RuleType = rtNone
        RuleValue_ = nil
        LookupProviderName_ = 'GLModule.qrySelect'
        LookupTableName_ = 'SSFML'
        LookupKeyFieldPairs_ = 'ML001='#39':TA008'#39
        LookupResultField_ = 'ML001'
        LookupGridColumnDatasStr_ = 
          '$BinaryEncodeString000000031A09FD0E01094669656C644E616D6506054D4' +
          'C30303109416C69676E6D656E74070D74614C6566744A75737469667905436F6' +
          'C6F720707636C57686974650C466F6E742E43686172736574070F44454641554' +
          'C545F434841525345540A466F6E742E436F6C6F720707636C426C61636B0B466' +
          'F6E742E48656967687402F509466F6E742E4E616D65060D4D532053616E73205' +
          '3657269660A466F6E742E5374796C650B0005576964746802000E5469746C654' +
          '16C69676E6D656E74070D74614C6566744A7573746966790C5469746C6543617' +
          '074696F6E060AC0CBB4FAC249A54EB8B90A5469746C65436F6C6F720706636C4' +
          '7726179115469746C65466F6E742E43686172736574070F44454641554C545F4' +
          '34841525345540F5469746C65466F6E742E436F6C6F720707636C57686974651' +
          '05469746C65466F6E742E48656967687402F50E5469746C65466F6E742E4E616' +
          'D65060D4D532053616E732053657269660F5469746C65466F6E742E5374796C6' +
          '50B00095461626C654E616D6506055353464D4C0756697369626C65090001094' +
          '669656C644E616D6506054D4C30303209416C69676E6D656E74070D74614C656' +
          '6744A75737469667905436F6C6F720707636C57686974650C466F6E742E43686' +
          '172736574070F44454641554C545F434841525345540A466F6E742E436F6C6F7' +
          '20707636C426C61636B0B466F6E742E48656967687402F509466F6E742E4E616' +
          'D65060D4D532053616E732053657269660A466F6E742E5374796C650B0005576' +
          '964746802000E5469746C65416C69676E6D656E74070D74614C6566744A75737' +
          '46966790C5469746C6543617074696F6E060AC0CBB4FAC249A657BAD90A54697' +
          '46C65436F6C6F720706636C47726179115469746C65466F6E742E43686172736' +
          '574070F44454641554C545F434841525345540F5469746C65466F6E742E436F6' +
          'C6F720707636C5768697465105469746C65466F6E742E48656967687402F50E5' +
          '469746C65466F6E742E4E616D65060D4D532053616E732053657269660F54697' +
          '46C65466F6E742E5374796C650B00095461626C654E616D6506055353464D4C0' +
          '756697369626C65090000'
      end
      item
        DataField = 'TA009'
        DataLength = 0
        DataScale = 0
        CheckLookup = True
        ErrorMsg = '檢測值不存在!!'
        LookupType = ltConst
        RuleType = rtNone
        RuleValue_ = nil
        RefStr_ = '1'#13#10'2'#13#10'3'#13#10
        ValStr_ = 'PASS'#13#10'OK'#13#10'NG'#13#10
      end
      item
        DataField = 'TA010'
        DataLength = 0
        DataScale = 0
        CheckLookup = True
        ErrorMsg = '不良狀況代號不存在!!'
        LookupType = ltDBServer
        RuleType = rtNone
        RuleValue_ = nil
        LookupTableName_ = 'SSFMI'
        LookupKeyFieldPairs_ = 'MI001='#39':TA010'#39
        LookupResultField_ = 'MI001'
        LookupGridColumnDatasStr_ = 
          '$BinaryEncodeString000000031E0B250E01094669656C644E616D6506054D4' +
          '930303109416C69676E6D656E74070D74614C6566744A75737469667905436F6' +
          'C6F720707636C57686974650C466F6E742E43686172736574070F44454641554' +
          'C545F434841525345540A466F6E742E436F6C6F720707636C426C61636B0B466' +
          'F6E742E48656967687402F509466F6E742E4E616D65060D4D532053616E73205' +
          '3657269660A466F6E742E5374796C650B0005576964746802000E5469746C654' +
          '16C69676E6D656E74070D74614C6566744A7573746966790C5469746C6543617' +
          '074696F6E060CA4A3A87DAAACAA70A54EB8B90A5469746C65436F6C6F7207066' +
          '36C47726179115469746C65466F6E742E43686172736574070F44454641554C5' +
          '45F434841525345540F5469746C65466F6E742E436F6C6F720707636C5768697' +
          '465105469746C65466F6E742E48656967687402F50E5469746C65466F6E742E4' +
          'E616D65060D4D532053616E732053657269660F5469746C65466F6E742E53747' +
          '96C650B00095461626C654E616D6506055353464D490756697369626C6509000' +
          '1094669656C644E616D6506054D4930303209416C69676E6D656E74070D74614' +
          'C6566744A75737469667905436F6C6F720707636C57686974650C466F6E742E4' +
          '3686172736574070F44454641554C545F434841525345540A466F6E742E436F6' +
          'C6F720707636C426C61636B0B466F6E742E48656967687402F509466F6E742E4' +
          'E616D65060D4D532053616E732053657269660A466F6E742E5374796C650B000' +
          '5576964746802000E5469746C65416C69676E6D656E74070D74614C6566744A7' +
          '573746966790C5469746C6543617074696F6E060CA4A3A87DAAACAA70A657BAD' +
          '90A5469746C65436F6C6F720706636C47726179115469746C65466F6E742E436' +
          '86172736574070F44454641554C545F434841525345540F5469746C65466F6E7' +
          '42E436F6C6F720707636C5768697465105469746C65466F6E742E48656967687' +
          '402F50E5469746C65466F6E742E4E616D65060D4D532053616E7320536572696' +
          '60F5469746C65466F6E742E5374796C650B00095461626C654E616D650605535' +
          '3464D490756697369626C65090000'
      end
      item
        DataField = 'TA01X'
        DataLength = 0
        DataScale = 0
        CheckLookup = True
        ErrorMsg = '生產序號不存在!!'
        LookupType = ltDBServer
        RuleType = rtNone
        RuleValue_ = nil
        LookupTableName_ = 'SSFMO'
        LookupKeyFieldPairs_ = 'MO001='#39':TA01X'#39
        LookupResultField_ = 'MO001'
        LookupGridColumnDatasStr_ = 
          '$BinaryEncodeString000000018C83F10E01094669656C644E616D6506054D4' +
          'F30303109416C69676E6D656E74070D74614C6566744A75737469667905436F6' +
          'C6F720707636C57686974650C466F6E742E43686172736574070F44454641554' +
          'C545F434841525345540A466F6E742E436F6C6F720707636C426C61636B0B466' +
          'F6E742E48656967687402F509466F6E742E4E616D65060D4D532053616E73205' +
          '3657269660A466F6E742E5374796C650B0005576964746802000E5469746C654' +
          '16C69676E6D656E74070D74614C6566744A7573746966790C5469746C6543617' +
          '074696F6E0608A5CDB2A3A7C7B8B90A5469746C65436F6C6F720706636C47726' +
          '179115469746C65466F6E742E43686172736574070F44454641554C545F43484' +
          '1525345540F5469746C65466F6E742E436F6C6F720707636C576869746510546' +
          '9746C65466F6E742E48656967687402F50E5469746C65466F6E742E4E616D650' +
          '60D4D532053616E732053657269660F5469746C65466F6E742E5374796C650B0' +
          '0095461626C654E616D6506055353464D4F0756697369626C65090000'
      end>
    Left = 259
    Top = 535
  end
  object EcdsCondition: TInfoClientDataSet
    Aggregates = <>
    CommandText = 
      'SELECT TA01X,TA01X AS TB003,TA000=SPACE(2),TA027,TA037,TA038,TA0' +
      '49'#13#10'FROM SSFTA(NOLOCK)'#13#10'WHERE 1=0'#13#10
    Params = <>
    ProviderName = 'GLModule.qrySelect'
    SQL.Strings = (
      
        'SELECT TA01X,TA01X AS TB003,TA000=SPACE(2),TA027,TA037,TA038,TA0' +
        '49'
      'FROM SSFTA(NOLOCK)'
      'WHERE 1=0')
    DisableTranslate = False
    ConnectToServer = False
    Left = 326
    Top = 451
    InfoClient_ = {
      9619E0BD010000001800000007000000000003000000F5000554413031580100
      4900000002000753554254595045020049000A00466978656443686172000557
      49445448020002001D0005544230303301004900000002000753554254595045
      020049000A0046697865644368617200055749445448020002001D0005544130
      303001004900000002000753554254595045020049000A004669786564436861
      7200055749445448020002000200055441303237080004000000000005544130
      3337080004000000000005544130333808000400000000000554413034390800
      0400000000000100044C4349440400010000000000}
    InfoClient_Struct = {
      094669656C64446566730E01044E616D65060554413031580844617461547970
      6507086674537472696E670453697A65021D0001044E616D6506055442303033
      08446174615479706507086674537472696E670453697A65021D0001044E616D
      650605544130303008446174615479706507086674537472696E670453697A65
      02020001044E616D650605544130323708446174615479706507076674466C6F
      61740001044E616D650605544130333708446174615479706507076674466C6F
      61740001044E616D650605544130333808446174615479706507076674466C6F
      61740001044E616D650605544130343908446174615479706507076674466C6F
      61740000095461626C654E616D65060D5353465441284E4F4C4F434B290E5461
      626C654E616D65416C696173060254310C50726F76696465724E616D65060971
      727953656C6563741245787472614C6566744A6F696E44617461730E0000}
    object EcdsConditionTA01X: TStringField
      FieldName = 'TA01X'
      FixedChar = True
      Size = 29
    end
    object EcdsConditionTB003: TStringField
      FieldName = 'TB003'
      FixedChar = True
      Size = 29
    end
    object EcdsConditionTA000: TStringField
      FieldName = 'TA000'
      FixedChar = True
      Size = 2
    end
    object EcdsConditionTA027: TFloatField
      FieldName = 'TA027'
    end
    object EcdsConditionTA037: TFloatField
      FieldName = 'TA037'
    end
    object EcdsConditionTA038: TFloatField
      FieldName = 'TA038'
    end
    object EcdsConditionTA049: TFloatField
      FieldName = 'TA049'
    end
  end
  object EdsCondition: TDataSource
    DataSet = EcdsCondition
    Left = 357
    Top = 450
  end
  object ErvConditon: TRefValComponent
    DataSource = EdsCondition
    RefVals = <
      item
        DataField = 'TA01X'
        DataLength = 0
        DataScale = 0
        CheckLookup = True
        ErrorMsg = '生產序號不存在!!'
        LookupType = ltDBServer
        RuleType = rtNone
        RuleValue_ = nil
        LookupProviderName_ = 'GLModule.qrySelect'
        LookupTableName_ = 'SSFMO'
        LookupKeyFieldPairs_ = 'MO001='#39':TA01X'#39
        LookupResultField_ = 'MO001'
        LookupGridColumnDatasStr_ = 
          '$BinaryEncodeString000000018C83F10E01094669656C644E616D6506054D4' +
          'F30303109416C69676E6D656E74070D74614C6566744A75737469667905436F6' +
          'C6F720707636C57686974650C466F6E742E43686172736574070F44454641554' +
          'C545F434841525345540A466F6E742E436F6C6F720707636C426C61636B0B466' +
          'F6E742E48656967687402F509466F6E742E4E616D65060D4D532053616E73205' +
          '3657269660A466F6E742E5374796C650B0005576964746802000E5469746C654' +
          '16C69676E6D656E74070D74614C6566744A7573746966790C5469746C6543617' +
          '074696F6E0608A5CDB2A3A7C7B8B90A5469746C65436F6C6F720706636C47726' +
          '179115469746C65466F6E742E43686172736574070F44454641554C545F43484' +
          '1525345540F5469746C65466F6E742E436F6C6F720707636C576869746510546' +
          '9746C65466F6E742E48656967687402F50E5469746C65466F6E742E4E616D650' +
          '60D4D532053616E732053657269660F5469746C65466F6E742E5374796C650B0' +
          '0095461626C654E616D6506055353464D4F0756697369626C65090000'
      end>
    Left = 389
    Top = 451
  end
  object FcdsCondition: TInfoClientDataSet
    Aggregates = <>
    CommandText = 
      'SELECT TA01X,TA01X AS TA01X1,TA01X AS TA01X2'#13#10'FROM SSFTA(NOLOCK)' +
      #13#10'WHERE 1=0'#13#10
    Params = <>
    ProviderName = 'GLModule.qrySelect'
    SQL.Strings = (
      'SELECT TA01X,TA01X AS TA01X1,TA01X AS TA01X2'
      'FROM SSFTA(NOLOCK)'
      'WHERE 1=0')
    DisableTranslate = False
    ConnectToServer = False
    Left = 326
    Top = 493
    InfoClient_ = {
      9619E0BD010000001800000003000000000003000000BF000554413031580100
      4900000002000753554254595045020049000A00466978656443686172000557
      4944544802000200190006544130315831010049000000020007535542545950
      45020049000A0046697865644368617200055749445448020002001900065441
      3031583201004900000002000753554254595045020049000A00466978656443
      686172000557494454480200020019000100044C4349440400010000000000}
    InfoClient_Struct = {
      094669656C64446566730E01044E616D65060554413031580844617461547970
      6507086674537472696E670453697A6502190001044E616D6506065441303158
      3108446174615479706507086674537472696E670453697A6502190001044E61
      6D65060654413031583208446174615479706507086674537472696E67045369
      7A6502190000095461626C654E616D65060553534654410E5461626C654E616D
      65416C696173060254310C50726F76696465724E616D65060971727953656C65
      63741245787472614C6566744A6F696E44617461730E0000}
    object FcdsConditionTA01X: TStringField
      FieldName = 'TA01X'
      FixedChar = True
      Size = 29
    end
    object FcdsConditionTA01X1: TStringField
      FieldName = 'TA01X1'
      FixedChar = True
      Size = 29
    end
    object FcdsConditionTA01X2: TStringField
      FieldName = 'TA01X2'
      FixedChar = True
      Size = 29
    end
  end
  object FdsCondition: TDataSource
    DataSet = FcdsCondition
    Left = 357
    Top = 492
  end
  object FrvConditon: TRefValComponent
    DataSource = FdsCondition
    RefVals = <
      item
        DataField = 'TA01X1'
        DataLength = 0
        DataScale = 0
        CheckLookup = True
        ErrorMsg = '生產序號不存在!!'
        LookupType = ltDBServer
        RuleType = rtNone
        RuleValue_ = nil
        LookupProviderName_ = 'GLModule.qrySelect'
        LookupTableName_ = 'SSFMO'
        LookupKeyFieldPairs_ = 'MO001='#39':TA01X1'#39
        LookupResultField_ = 'MO001'
        LookupGridColumnDatasStr_ = 
          '$BinaryEncodeString000000018C83F10E01094669656C644E616D6506054D4' +
          'F30303109416C69676E6D656E74070D74614C6566744A75737469667905436F6' +
          'C6F720707636C57686974650C466F6E742E43686172736574070F44454641554' +
          'C545F434841525345540A466F6E742E436F6C6F720707636C426C61636B0B466' +
          'F6E742E48656967687402F509466F6E742E4E616D65060D4D532053616E73205' +
          '3657269660A466F6E742E5374796C650B0005576964746802000E5469746C654' +
          '16C69676E6D656E74070D74614C6566744A7573746966790C5469746C6543617' +
          '074696F6E0608A5CDB2A3A7C7B8B90A5469746C65436F6C6F720706636C47726' +
          '179115469746C65466F6E742E43686172736574070F44454641554C545F43484' +
          '1525345540F5469746C65466F6E742E436F6C6F720707636C576869746510546' +
          '9746C65466F6E742E48656967687402F50E5469746C65466F6E742E4E616D650' +
          '60D4D532053616E732053657269660F5469746C65466F6E742E5374796C650B0' +
          '0095461626C654E616D6506055353464D4F0756697369626C65090000'
      end
      item
        DataField = 'TA01X2'
        DataLength = 0
        DataScale = 0
        CheckLookup = True
        ErrorMsg = '生產序號不存在!!'
        LookupType = ltDBServer
        RuleType = rtNone
        RuleValue_ = nil
        LookupTableName_ = 'SSFMO'
        LookupKeyFieldPairs_ = 'MO001='#39':TA01X2'#39
        LookupResultField_ = 'MO001'
        LookupGridColumnDatasStr_ = 
          '$BinaryEncodeString000000018C83F10E01094669656C644E616D6506054D4' +
          'F30303109416C69676E6D656E74070D74614C6566744A75737469667905436F6' +
          'C6F720707636C57686974650C466F6E742E43686172736574070F44454641554' +
          'C545F434841525345540A466F6E742E436F6C6F720707636C426C61636B0B466' +
          'F6E742E48656967687402F509466F6E742E4E616D65060D4D532053616E73205' +
          '3657269660A466F6E742E5374796C650B0005576964746802000E5469746C654' +
          '16C69676E6D656E74070D74614C6566744A7573746966790C5469746C6543617' +
          '074696F6E0608A5CDB2A3A7C7B8B90A5469746C65436F6C6F720706636C47726' +
          '179115469746C65466F6E742E43686172736574070F44454641554C545F43484' +
          '1525345540F5469746C65466F6E742E436F6C6F720707636C576869746510546' +
          '9746C65466F6E742E48656967687402F50E5469746C65466F6E742E4E616D650' +
          '60D4D532053616E732053657269660F5469746C65466F6E742E5374796C650B0' +
          '0095461626C654E616D6506055353464D4F0756697369626C65090000'
      end>
    Left = 389
    Top = 493
  end
  object GcdsCondition: TInfoClientDataSet
    Aggregates = <>
    CommandText = 
      'SELECT TA01X,TA01X AS TA01X1,TA01X AS TA01X2'#13#10'FROM SSFTA(NOLOCK)' +
      #13#10'WHERE 1=0'#13#10
    Params = <>
    ProviderName = 'GLModule.qrySelect'
    SQL.Strings = (
      'SELECT TA01X,TA01X AS TA01X1,TA01X AS TA01X2'
      'FROM SSFTA(NOLOCK)'
      'WHERE 1=0')
    DisableTranslate = False
    ConnectToServer = False
    Left = 326
    Top = 535
    InfoClient_ = {
      9619E0BD010000001800000003000000000003000000BF000554413031580100
      4900000002000753554254595045020049000A00466978656443686172000557
      4944544802000200190006544130315831010049000000020007535542545950
      45020049000A0046697865644368617200055749445448020002001900065441
      3031583201004900000002000753554254595045020049000A00466978656443
      686172000557494454480200020019000100044C4349440400010000000000}
    InfoClient_Struct = {
      094669656C64446566730E01044E616D65060554413031580844617461547970
      6507086674537472696E670453697A6502190001044E616D6506065441303158
      3108446174615479706507086674537472696E670453697A6502190001044E61
      6D65060654413031583208446174615479706507086674537472696E67045369
      7A6502190000095461626C654E616D65060553534654410E5461626C654E616D
      65416C696173060254310C50726F76696465724E616D65060971727953656C65
      63741245787472614C6566744A6F696E44617461730E0000}
    object GcdsConditionTA01X1: TStringField
      FieldName = 'TA01X1'
      FixedChar = True
      Size = 29
    end
    object GcdsConditionTA01X2: TStringField
      FieldName = 'TA01X2'
      FixedChar = True
      Size = 29
    end
    object GcdsConditionTA01X: TStringField
      FieldName = 'TA01X'
      FixedChar = True
      Size = 29
    end
  end
  object GdsCondition: TDataSource
    DataSet = GcdsCondition
    Left = 357
    Top = 535
  end
  object GrvConditon: TRefValComponent
    DataSource = GdsCondition
    RefVals = <
      item
        DataField = 'TA01X1'
        DataLength = 0
        DataScale = 0
        CheckLookup = True
        ErrorMsg = '生產序號不存在!!'
        LookupType = ltDBServer
        RuleType = rtNone
        RuleValue_ = nil
        LookupProviderName_ = 'GLModule.qrySelect'
        LookupTableName_ = 'SSFMO'
        LookupKeyFieldPairs_ = 'MO001='#39':TA01X1'#39
        LookupResultField_ = 'MO001'
        LookupGridColumnDatasStr_ = 
          '$BinaryEncodeString000000018C83F10E01094669656C644E616D6506054D4' +
          'F30303109416C69676E6D656E74070D74614C6566744A75737469667905436F6' +
          'C6F720707636C57686974650C466F6E742E43686172736574070F44454641554' +
          'C545F434841525345540A466F6E742E436F6C6F720707636C426C61636B0B466' +
          'F6E742E48656967687402F509466F6E742E4E616D65060D4D532053616E73205' +
          '3657269660A466F6E742E5374796C650B0005576964746802000E5469746C654' +
          '16C69676E6D656E74070D74614C6566744A7573746966790C5469746C6543617' +
          '074696F6E0608A5CDB2A3A7C7B8B90A5469746C65436F6C6F720706636C47726' +
          '179115469746C65466F6E742E43686172736574070F44454641554C545F43484' +
          '1525345540F5469746C65466F6E742E436F6C6F720707636C576869746510546' +
          '9746C65466F6E742E48656967687402F50E5469746C65466F6E742E4E616D650' +
          '60D4D532053616E732053657269660F5469746C65466F6E742E5374796C650B0' +
          '0095461626C654E616D6506055353464D4F0756697369626C65090000'
      end
      item
        DataField = 'TA01X2'
        DataLength = 0
        DataScale = 0
        CheckLookup = True
        ErrorMsg = '生產序號不存在!!'
        LookupType = ltDBServer
        RuleType = rtNone
        RuleValue_ = nil
        LookupTableName_ = 'SSFMO'
        LookupKeyFieldPairs_ = 'MO001='#39':TA01X2'#39
        LookupResultField_ = 'MO001'
        LookupGridColumnDatasStr_ = 
          '$BinaryEncodeString000000018C83F10E01094669656C644E616D6506054D4' +
          'F30303109416C69676E6D656E74070D74614C6566744A75737469667905436F6' +
          'C6F720707636C57686974650C466F6E742E43686172736574070F44454641554' +
          'C545F434841525345540A466F6E742E436F6C6F720707636C426C61636B0B466' +
          'F6E742E48656967687402F509466F6E742E4E616D65060D4D532053616E73205' +
          '3657269660A466F6E742E5374796C650B0005576964746802000E5469746C654' +
          '16C69676E6D656E74070D74614C6566744A7573746966790C5469746C6543617' +
          '074696F6E0608A5CDB2A3A7C7B8B90A5469746C65436F6C6F720706636C47726' +
          '179115469746C65466F6E742E43686172736574070F44454641554C545F43484' +
          '1525345540F5469746C65466F6E742E436F6C6F720707636C576869746510546' +
          '9746C65466F6E742E48656967687402F50E5469746C65466F6E742E4E616D650' +
          '60D4D532053616E732053657269660F5469746C65466F6E742E5374796C650B0' +
          '0095461626C654E616D6506055353464D4F0756697369626C65090000'
      end>
    Left = 389
    Top = 534
  end
  object HcdsCondition: TInfoClientDataSet
    Aggregates = <>
    CommandText = 'SELECT TA01X'#13#10'FROM SSFTA(NOLOCK)'#13#10'WHERE 1=0'#13#10#13#10
    Params = <>
    ProviderName = 'GLModule.qrySelect'
    SQL.Strings = (
      'SELECT TA01X'
      'FROM SSFTA(NOLOCK)'
      'WHERE 1=0'
      '')
    DisableTranslate = False
    ConnectToServer = False
    Left = 326
    Top = 577
    InfoClient_ = {
      9619E0BD01000000180000000100000000000300000059000554413031580100
      4900000002000753554254595045020049000A00466978656443686172000557
      494454480200020019000100044C4349440400010000000000}
    InfoClient_Struct = {
      094669656C64446566730E01044E616D65060554413031580844617461547970
      6507086674537472696E670453697A6502190000095461626C654E616D650605
      53534654410E5461626C654E616D65416C696173060254310C50726F76696465
      724E616D65060971727953656C6563741245787472614C6566744A6F696E4461
      7461730E0000}
    object HcdsConditionTA01X: TStringField
      FieldName = 'TA01X'
      FixedChar = True
      Size = 29
    end
  end
  object HdsCondition: TDataSource
    DataSet = HcdsCondition
    Left = 357
    Top = 577
  end
  object HrvConditon: TRefValComponent
    DataSource = HdsCondition
    RefVals = <
      item
        DataField = 'TA01X'
        DataLength = 0
        DataScale = 0
        CheckLookup = True
        LookupType = ltDBServer
        RuleType = rtNone
        RuleValue_ = nil
        LookupTableName_ = 'SSFMO'
        LookupKeyFieldPairs_ = 'MO001='#39':TA01X'#39
        LookupResultField_ = 'MO001'
        LookupGridColumnDatasStr_ = 
          '$BinaryEncodeString000000018C83F10E01094669656C644E616D6506054D4' +
          'F30303109416C69676E6D656E74070D74614C6566744A75737469667905436F6' +
          'C6F720707636C57686974650C466F6E742E43686172736574070F44454641554' +
          'C545F434841525345540A466F6E742E436F6C6F720707636C426C61636B0B466' +
          'F6E742E48656967687402F509466F6E742E4E616D65060D4D532053616E73205' +
          '3657269660A466F6E742E5374796C650B0005576964746802000E5469746C654' +
          '16C69676E6D656E74070D74614C6566744A7573746966790C5469746C6543617' +
          '074696F6E0608A5CDB2A3A7C7B8B90A5469746C65436F6C6F720706636C47726' +
          '179115469746C65466F6E742E43686172736574070F44454641554C545F43484' +
          '1525345540F5469746C65466F6E742E436F6C6F720707636C576869746510546' +
          '9746C65466F6E742E48656967687402F50E5469746C65466F6E742E4E616D650' +
          '60D4D532053616E732053657269660F5469746C65466F6E742E5374796C650B0' +
          '0095461626C654E616D6506055353464D4F0756697369626C65090000'
      end>
    Left = 389
    Top = 576
  end
  object IcdsCondition: TInfoClientDataSet
    Aggregates = <>
    CommandText = 
      'SELECT TA01X,TA01X AS TB003,TA000=SPACE(2)'#13#10'FROM SSFTA(NOLOCK)'#13#10 +
      'WHERE 1=0'#13#10
    Params = <>
    ProviderName = 'GLModule.qrySelect'
    SQL.Strings = (
      'SELECT TA01X,TA01X AS TB003,TA000=SPACE(2)'
      'FROM SSFTA(NOLOCK)'
      'WHERE 1=0')
    DisableTranslate = False
    ConnectToServer = False
    Left = 453
    Top = 452
    InfoClient_ = {
      9619E0BD010000001800000003000000000003000000BD000554413031580100
      4900000002000753554254595045020049000A00466978656443686172000557
      4944544802000200190005544230303301004900000002000753554254595045
      020049000A004669786564436861720005574944544802000200190005544130
      303001004900000002000753554254595045020049000A004669786564436861
      72000557494454480200020002000100044C4349440400010000000000}
    InfoClient_Struct = {
      094669656C64446566730E01044E616D65060554413031580844617461547970
      6507086674537472696E670453697A6502190001044E616D6506055442303033
      08446174615479706507086674537472696E670453697A6502190001044E616D
      650605544130303008446174615479706507086674537472696E670453697A65
      02020000095461626C654E616D65060553534654410E5461626C654E616D6541
      6C696173060254310C50726F76696465724E616D65060971727953656C656374
      1245787472614C6566744A6F696E44617461730E0000}
    object IcdsConditionTA01X: TStringField
      FieldName = 'TA01X'
      FixedChar = True
      Size = 29
    end
    object IcdsConditionTB003: TStringField
      FieldName = 'TB003'
      FixedChar = True
      Size = 29
    end
    object IcdsConditionTA000: TStringField
      FieldName = 'TA000'
      FixedChar = True
      Size = 2
    end
  end
  object IdsCondition: TDataSource
    DataSet = IcdsCondition
    Left = 485
    Top = 452
  end
  object IrvConditon: TRefValComponent
    DataSource = IdsCondition
    RefVals = <
      item
        DataField = 'TA01X'
        DataLength = 0
        DataScale = 0
        CheckLookup = True
        LookupType = ltDBServer
        RuleType = rtNone
        RuleValue_ = nil
        LookupTableName_ = 'SSFMO'
        LookupKeyFieldPairs_ = 'MO001='#39':TA01X'#39
        LookupResultField_ = 'MO001'
        LookupGridColumnDatasStr_ = 
          '$BinaryEncodeString000000018C83F10E01094669656C644E616D6506054D4' +
          'F30303109416C69676E6D656E74070D74614C6566744A75737469667905436F6' +
          'C6F720707636C57686974650C466F6E742E43686172736574070F44454641554' +
          'C545F434841525345540A466F6E742E436F6C6F720707636C426C61636B0B466' +
          'F6E742E48656967687402F509466F6E742E4E616D65060D4D532053616E73205' +
          '3657269660A466F6E742E5374796C650B0005576964746802000E5469746C654' +
          '16C69676E6D656E74070D74614C6566744A7573746966790C5469746C6543617' +
          '074696F6E0608A5CDB2A3A7C7B8B90A5469746C65436F6C6F720706636C47726' +
          '179115469746C65466F6E742E43686172736574070F44454641554C545F43484' +
          '1525345540F5469746C65466F6E742E436F6C6F720707636C576869746510546' +
          '9746C65466F6E742E48656967687402F50E5469746C65466F6E742E4E616D650' +
          '60D4D532053616E732053657269660F5469746C65466F6E742E5374796C650B0' +
          '0095461626C654E616D6506055353464D4F0756697369626C65090000'
      end>
    Left = 517
    Top = 451
  end
  object JcdsCondition: TInfoClientDataSet
    Aggregates = <>
    CommandText = 
      'SELECT TA01X,TA027,TA037,TA038,TA049'#13#10' FROM SSFTA(NOLOCK)'#13#10' WHER' +
      'E 1=0'#13#10#13#10#13#10' '#13#10
    Params = <>
    ProviderName = 'GLModule.qrySelect'
    SQL.Strings = (
      'SELECT TA01X,TA027,TA037,TA038,TA049'
      ' FROM SSFTA(NOLOCK)'
      ' WHERE 1=0'
      ''
      ''
      ' ')
    DisableTranslate = False
    ConnectToServer = False
    Left = 453
    Top = 494
    InfoClient_ = {
      9619E0BD01000000180000000500000000000300000091000554413031580100
      4900000002000753554254595045020049000A00466978656443686172000557
      49445448020002001D0005544130323708000400000000000554413033370800
      0400000000000554413033380800040000000000055441303439080004000000
      00000100044C4349440400010000000000}
    InfoClient_Struct = {
      094669656C64446566730E01044E616D65060554413031580844617461547970
      6507086674537472696E670453697A65021D0001044E616D6506055441303237
      08446174615479706507076674466C6F61740001044E616D6506055441303337
      08446174615479706507076674466C6F61740001044E616D6506055441303338
      08446174615479706507076674466C6F61740001044E616D6506055441303439
      08446174615479706507076674466C6F61740000095461626C654E616D65060D
      5353465441284E4F4C4F434B290E5461626C654E616D65416C69617306025431
      0C50726F76696465724E616D65060971727953656C6563741245787472614C65
      66744A6F696E44617461730E0000}
    object JcdsConditionTA01X: TStringField
      FieldName = 'TA01X'
      FixedChar = True
      Size = 29
    end
    object JcdsConditionTA027: TFloatField
      FieldName = 'TA027'
    end
    object JcdsConditionTA037: TFloatField
      FieldName = 'TA037'
    end
    object JcdsConditionTA038: TFloatField
      FieldName = 'TA038'
    end
    object JcdsConditionTA049: TFloatField
      FieldName = 'TA049'
    end
  end
  object JdsCondition: TDataSource
    DataSet = JcdsCondition
    Left = 485
    Top = 494
  end
  object JrvConditon: TRefValComponent
    DataSource = JdsCondition
    RefVals = <
      item
        DataField = 'TA01X'
        DataLength = 0
        DataScale = 0
        CheckLookup = True
        LookupType = ltDBServer
        RuleType = rtNone
        RuleValue_ = nil
        LookupTableName_ = 'SSFMO'
        LookupKeyFieldPairs_ = 'MO001='#39':TA01X'#39
        LookupResultField_ = 'MO001'
        LookupGridColumnDatasStr_ = 
          '$BinaryEncodeString000000018C83F10E01094669656C644E616D6506054D4' +
          'F30303109416C69676E6D656E74070D74614C6566744A75737469667905436F6' +
          'C6F720707636C57686974650C466F6E742E43686172736574070F44454641554' +
          'C545F434841525345540A466F6E742E436F6C6F720707636C426C61636B0B466' +
          'F6E742E48656967687402F509466F6E742E4E616D65060D4D532053616E73205' +
          '3657269660A466F6E742E5374796C650B0005576964746802000E5469746C654' +
          '16C69676E6D656E74070D74614C6566744A7573746966790C5469746C6543617' +
          '074696F6E0608A5CDB2A3A7C7B8B90A5469746C65436F6C6F720706636C47726' +
          '179115469746C65466F6E742E43686172736574070F44454641554C545F43484' +
          '1525345540F5469746C65466F6E742E436F6C6F720707636C576869746510546' +
          '9746C65466F6E742E48656967687402F50E5469746C65466F6E742E4E616D650' +
          '60D4D532053616E732053657269660F5469746C65466F6E742E5374796C650B0' +
          '0095461626C654E616D6506055353464D4F0756697369626C65090000'
      end>
    Left = 517
    Top = 493
  end
  object EcdsMAC: TInfoClientDataSet
    Aggregates = <>
    CommandText = 'SELECT TC000=SPACE(6),TC003'#13#10'FROM SSFTC(NOLOCK)'#13#10'WHERE 1=0'#13#10' '#13#10
    Params = <>
    ProviderName = 'GLModule.qrySelect'
    SQL.Strings = (
      'SELECT TC000=SPACE(6),TC003'
      'FROM SSFTC(NOLOCK)'
      'WHERE 1=0'
      ' ')
    DisableTranslate = False
    ConnectToServer = False
    Left = 857
    Top = 447
    InfoClient_ = {
      9619E0BD0100000018000000020000000000030000008B000554433030300100
      4900000002000753554254595045020049000A00466978656443686172000557
      4944544802000200060005544330303301004900000002000753554254595045
      020049000A00466978656443686172000557494454480200020019000100044C
      4349440400010000000000}
    InfoClient_Struct = {
      094669656C64446566730E01044E616D65060554433030300844617461547970
      6507086674537472696E670453697A6502060001044E616D6506055443303033
      08446174615479706507086674537472696E670453697A650219000009546162
      6C654E616D65060553534654430E5461626C654E616D65416C69617306025431
      0C50726F76696465724E616D65060971727953656C6563741245787472614C65
      66744A6F696E44617461730E0000}
    object EcdsMACTC000: TStringField
      DisplayLabel = 'MAC碼類別'
      FieldName = 'TC000'
      FixedChar = True
      Size = 6
    end
    object EcdsMACTC003: TStringField
      DisplayLabel = 'MAC碼'
      FieldName = 'TC003'
      FixedChar = True
      Size = 29
    end
    object EcdsMACTC000C: TStringField
      DisplayLabel = 'MAC碼名稱'
      FieldKind = fkCalculated
      FieldName = 'TC000C'
      Calculated = True
    end
  end
  object EdsMAC: TDataSource
    DataSet = EcdsMAC
    Left = 900
    Top = 423
  end
  object ErvMAC: TRefValComponent
    DataSource = EdsMAC
    RefVals = <
      item
        DataField = 'TC000'
        DataLength = 0
        DataScale = 0
        CheckLookup = True
        ErrorMsg = 'MAC碼類別不存在'
        LookupType = ltDBServer
        RuleType = rtNone
        RuleValue_ = nil
        LookupProviderName_ = 'GLModule.qrySelect'
        LookupTableName_ = 'SSFMN'
        LookupKeyFieldPairs_ = 'MN001='#39':TC000'#39
        LookupResultField_ = 'MN001'
        LookupGridColumnDatasStr_ = 
          '$BinaryEncodeString000000031C08550E01094669656C644E616D6506054D4' +
          'E30303109416C69676E6D656E74070D74614C6566744A75737469667905436F6' +
          'C6F720707636C57686974650C466F6E742E43686172736574070F44454641554' +
          'C545F434841525345540A466F6E742E436F6C6F720707636C426C61636B0B466' +
          'F6E742E48656967687402F509466F6E742E4E616D65060D4D532053616E73205' +
          '3657269660A466F6E742E5374796C650B0005576964746802000E5469746C654' +
          '16C69676E6D656E74070D74614C6566744A7573746966790C5469746C6543617' +
          '074696F6E06094D4143BD58C3FEA74F0A5469746C65436F6C6F720706636C477' +
          '26179115469746C65466F6E742E43686172736574070F44454641554C545F434' +
          '841525345540F5469746C65466F6E742E436F6C6F720707636C5768697465105' +
          '469746C65466F6E742E48656967687402F50E5469746C65466F6E742E4E616D6' +
          '5060D4D532053616E732053657269660F5469746C65466F6E742E5374796C650' +
          'B00095461626C654E616D6506055353464D4E0756697369626C6509000109466' +
          '9656C644E616D6506054D4E30303209416C69676E6D656E74070D74614C65667' +
          '44A75737469667905436F6C6F720707636C57686974650C466F6E742E4368617' +
          '2736574070F44454641554C545F434841525345540A466F6E742E436F6C6F720' +
          '707636C426C61636B0B466F6E742E48656967687402F509466F6E742E4E616D6' +
          '5060D4D532053616E732053657269660A466F6E742E5374796C650B000557696' +
          '4746802000E5469746C65416C69676E6D656E74070D74614C6566744A7573746' +
          '966790C5469746C6543617074696F6E060D4D4143BD58C3FEA74FA657BAD90A5' +
          '469746C65436F6C6F720706636C47726179115469746C65466F6E742E4368617' +
          '2736574070F44454641554C545F434841525345540F5469746C65466F6E742E4' +
          '36F6C6F720707636C5768697465105469746C65466F6E742E48656967687402F' +
          '50E5469746C65466F6E742E4E616D65060D4D532053616E732053657269660F5' +
          '469746C65466F6E742E5374796C650B00095461626C654E616D6506055353464' +
          'D4E0756697369626C65090000'
        ChildRefValsStr_ = 
          '$BinaryEncodeString000000003C100D0E01044E616D6506065443303030430' +
          '9446174614669656C640606544330303043114C6F6F6B7570526573756C74466' +
          '9656C6406054D4E3030320000'
      end
      item
        DataField = 'TC003'
        DataLength = 0
        DataScale = 0
        CheckLookup = True
        ErrorMsg = 'MAC碼不存在!!'
        LookupType = ltDBServer
        RuleType = rtNone
        RuleValue_ = nil
        LookupTableName_ = 'SSFMO'
        LookupKeyFieldPairs_ = 'MO001='#39':TC003'#39
        LookupResultField_ = 'MO001'
        LookupGridColumnDatasStr_ = 
          '$BinaryEncodeString0000000189802E0E01094669656C644E616D6506054D4' +
          'F30303109416C69676E6D656E74070D74614C6566744A75737469667905436F6' +
          'C6F720707636C57686974650C466F6E742E43686172736574070F44454641554' +
          'C545F434841525345540A466F6E742E436F6C6F720707636C426C61636B0B466' +
          'F6E742E48656967687402F509466F6E742E4E616D65060D4D532053616E73205' +
          '3657269660A466F6E742E5374796C650B0005576964746802000E5469746C654' +
          '16C69676E6D656E74070D74614C6566744A7573746966790C5469746C6543617' +
          '074696F6E06054D4143BD580A5469746C65436F6C6F720706636C47726179115' +
          '469746C65466F6E742E43686172736574070F44454641554C545F43484152534' +
          '5540F5469746C65466F6E742E436F6C6F720707636C5768697465105469746C6' +
          '5466F6E742E48656967687402F50E5469746C65466F6E742E4E616D65060D4D5' +
          '32053616E732053657269660F5469746C65466F6E742E5374796C650B0009546' +
          '1626C654E616D6506055353464D4F0756697369626C65090000'
      end>
    Left = 975
    Top = 447
  end
  object DcdsCombine: TInfoClientDataSet
    Aggregates = <>
    CommandText = 
      'SELECT NM003,SPACE(29) TB003'#13#10'FROM SSFNM A(NOLOCK)'#13#10'JOIN SSFMG B' +
      '(NOLOCK) ON (B.MG001 = A.NM001 AND B.MG002 = A.NM002)'#13#10'WHERE 1=0' +
      #13#10' '#13#10#13#10#13#10
    Params = <>
    ProviderName = 'GLModule.qrySelect'
    AfterOpen = DcdsCombineAfterOpen
    SQL.Strings = (
      'SELECT NM003,SPACE(29) TB003'
      'FROM SSFNM A(NOLOCK)'
      
        'JOIN SSFMG B(NOLOCK) ON (B.MG001 = A.NM001 AND B.MG002 = A.NM002' +
        ')'
      'WHERE 1=0'
      ' '
      ''
      '')
    DisableTranslate = False
    Left = 593
    Top = 451
    object DcdsCombineNM003: TStringField
      DisplayLabel = '被組合料號'
      FieldName = 'NM003'
      FixedChar = True
      Size = 40
    end
    object DcdsCombineNM003C: TStringField
      DisplayLabel = '被組合名稱'
      FieldKind = fkCalculated
      FieldName = 'NM003C'
      Calculated = True
    end
    object DcdsCombineTB003: TStringField
      DisplayLabel = '被組合生產序號'
      FieldName = 'TB003'
      FixedChar = True
      Size = 29
    end
  end
  object DdsCombine: TDataSource
    DataSet = DcdsCombine
    Left = 628
    Top = 451
  end
  object DrvCombine: TRefValComponent
    DataSource = DdsCombine
    RefVals = <
      item
        DataField = 'TB003'
        DataLength = 0
        DataScale = 0
        CheckLookup = True
        ErrorMsg = '生產序號不存在!!'
        LookupType = ltDBServer
        RuleType = rtNone
        RuleValue_ = nil
        LookupProviderName_ = 'GLModule.qrySelect'
        LookupTableName_ = 'SSFMO'
        LookupKeyFieldPairs_ = 'MO001='#39':TB003'#39
        LookupResultField_ = 'MO001'
        LookupGridColumnDatasStr_ = 
          '$BinaryEncodeString000000018C83F10E01094669656C644E616D6506054D4' +
          'F30303109416C69676E6D656E74070D74614C6566744A75737469667905436F6' +
          'C6F720707636C57686974650C466F6E742E43686172736574070F44454641554' +
          'C545F434841525345540A466F6E742E436F6C6F720707636C426C61636B0B466' +
          'F6E742E48656967687402F509466F6E742E4E616D65060D4D532053616E73205' +
          '3657269660A466F6E742E5374796C650B0005576964746802000E5469746C654' +
          '16C69676E6D656E74070D74614C6566744A7573746966790C5469746C6543617' +
          '074696F6E0608A5CDB2A3A7C7B8B90A5469746C65436F6C6F720706636C47726' +
          '179115469746C65466F6E742E43686172736574070F44454641554C545F43484' +
          '1525345540F5469746C65466F6E742E436F6C6F720707636C576869746510546' +
          '9746C65466F6E742E48656967687402F50E5469746C65466F6E742E4E616D650' +
          '60D4D532053616E732053657269660F5469746C65466F6E742E5374796C650B0' +
          '0095461626C654E616D6506055353464D4F0756697369626C65090000'
      end
      item
        DataField = 'NM003'
        DataLength = 0
        DataScale = 0
        CheckLookup = True
        LookupType = ltDBServer
        RuleType = rtNone
        RuleValue_ = nil
        LookupTableName_ = 'INVMB'
        LookupKeyFieldPairs_ = 'MB001='#39':NM003'#39
        LookupResultField_ = 'MB001'
        LookupGridColumnDatasStr_ = 
          '$BinaryEncodeString000000030E01C40E01094669656C644E616D6506054D4' +
          '230303109416C69676E6D656E74070D74614C6566744A75737469667905436F6' +
          'C6F720707636C57686974650C466F6E742E43686172736574070F44454641554' +
          'C545F434841525345540A466F6E742E436F6C6F720707636C426C61636B0B466' +
          'F6E742E48656967687402F509466F6E742E4E616D65060D4D532053616E73205' +
          '3657269660A466F6E742E5374796C650B0005576964746802000E5469746C654' +
          '16C69676E6D656E74070D74614C6566744A7573746966790C5469746C6543617' +
          '074696F6E0604AEC6B8B90A5469746C65436F6C6F720706636C4772617911546' +
          '9746C65466F6E742E43686172736574070F44454641554C545F4348415253455' +
          '40F5469746C65466F6E742E436F6C6F720707636C5768697465105469746C654' +
          '66F6E742E48656967687402F50E5469746C65466F6E742E4E616D65060D4D532' +
          '053616E732053657269660F5469746C65466F6E742E5374796C650B000954616' +
          '26C654E616D650605494E564D420756697369626C65090001094669656C644E6' +
          '16D6506054D4230303209416C69676E6D656E74070D74614C6566744A7573746' +
          '9667905436F6C6F720707636C57686974650C466F6E742E43686172736574070' +
          'F44454641554C545F434841525345540A466F6E742E436F6C6F720707636C426' +
          'C61636B0B466F6E742E48656967687402F509466F6E742E4E616D65060D4D532' +
          '053616E732053657269660A466F6E742E5374796C650B0005576964746802000' +
          'E5469746C65416C69676E6D656E74070D74614C6566744A7573746966790C546' +
          '9746C6543617074696F6E0604A657BAD90A5469746C65436F6C6F720706636C4' +
          '7726179115469746C65466F6E742E43686172736574070F44454641554C545F4' +
          '34841525345540F5469746C65466F6E742E436F6C6F720707636C57686974651' +
          '05469746C65466F6E742E48656967687402F50E5469746C65466F6E742E4E616' +
          'D65060D4D532053616E732053657269660F5469746C65466F6E742E5374796C6' +
          '50B00095461626C654E616D650605494E564D420756697369626C65090000'
        ChildRefValsStr_ = 
          '$BinaryEncodeString000000003C100F0E01044E616D6506064E4D303033430' +
          '9446174614669656C6406064E4D30303343114C6F6F6B7570526573756C74466' +
          '9656C6406054D423030320000'
      end>
    Left = 663
    Top = 451
  end
  object GcdsMAC: TInfoClientDataSet
    Aggregates = <>
    CommandText = 'SELECT TC000=SPACE(6),TC003'#13#10'FROM SSFTC(NOLOCK)'#13#10'WHERE 1=0'#13#10' '#13#10
    Params = <>
    ProviderName = 'GLModule.qrySelect'
    SQL.Strings = (
      'SELECT TC000=SPACE(6),TC003'
      'FROM SSFTC(NOLOCK)'
      'WHERE 1=0'
      ' ')
    DisableTranslate = False
    ConnectToServer = False
    Left = 905
    Top = 495
    InfoClient_ = {
      9619E0BD0100000018000000020000000000030000008B000554433030300100
      4900000002000753554254595045020049000A00466978656443686172000557
      4944544802000200060005544330303301004900000002000753554254595045
      020049000A00466978656443686172000557494454480200020019000100044C
      4349440400010000000000}
    InfoClient_Struct = {
      094669656C64446566730E01044E616D65060554433030300844617461547970
      6507086674537472696E670453697A6502060001044E616D6506055443303033
      08446174615479706507086674537472696E670453697A650219000009546162
      6C654E616D65060553534654430E5461626C654E616D65416C69617306025431
      0C50726F76696465724E616D65060971727953656C6563741245787472614C65
      66744A6F696E44617461730E0000}
    object GcdsMACTC000: TStringField
      DisplayLabel = 'MAC碼類別'
      FieldName = 'TC000'
      FixedChar = True
      Size = 6
    end
    object GcdsMACTC003: TStringField
      DisplayLabel = 'MAC碼'
      FieldName = 'TC003'
      FixedChar = True
      Size = 29
    end
    object GcdsMACTC000C: TStringField
      DisplayLabel = 'MAC碼名稱'
      FieldKind = fkCalculated
      FieldName = 'TC000C'
      Calculated = True
    end
  end
  object GdsMAC: TDataSource
    DataSet = GcdsMAC
    Left = 940
    Top = 495
  end
  object GrvMAC: TRefValComponent
    DataSource = GdsMAC
    RefVals = <
      item
        DataField = 'TC000'
        DataLength = 0
        DataScale = 0
        CheckLookup = True
        ErrorMsg = 'MAC碼類別不存在'
        LookupType = ltDBServer
        RuleType = rtNone
        RuleValue_ = nil
        LookupProviderName_ = 'GLModule.qrySelect'
        LookupTableName_ = 'SSFMN'
        LookupKeyFieldPairs_ = 'MN001='#39':TC000'#39
        LookupResultField_ = 'MN001'
        LookupGridColumnDatasStr_ = 
          '$BinaryEncodeString000000031C08550E01094669656C644E616D6506054D4' +
          'E30303109416C69676E6D656E74070D74614C6566744A75737469667905436F6' +
          'C6F720707636C57686974650C466F6E742E43686172736574070F44454641554' +
          'C545F434841525345540A466F6E742E436F6C6F720707636C426C61636B0B466' +
          'F6E742E48656967687402F509466F6E742E4E616D65060D4D532053616E73205' +
          '3657269660A466F6E742E5374796C650B0005576964746802000E5469746C654' +
          '16C69676E6D656E74070D74614C6566744A7573746966790C5469746C6543617' +
          '074696F6E06094D4143BD58C3FEA74F0A5469746C65436F6C6F720706636C477' +
          '26179115469746C65466F6E742E43686172736574070F44454641554C545F434' +
          '841525345540F5469746C65466F6E742E436F6C6F720707636C5768697465105' +
          '469746C65466F6E742E48656967687402F50E5469746C65466F6E742E4E616D6' +
          '5060D4D532053616E732053657269660F5469746C65466F6E742E5374796C650' +
          'B00095461626C654E616D6506055353464D4E0756697369626C6509000109466' +
          '9656C644E616D6506054D4E30303209416C69676E6D656E74070D74614C65667' +
          '44A75737469667905436F6C6F720707636C57686974650C466F6E742E4368617' +
          '2736574070F44454641554C545F434841525345540A466F6E742E436F6C6F720' +
          '707636C426C61636B0B466F6E742E48656967687402F509466F6E742E4E616D6' +
          '5060D4D532053616E732053657269660A466F6E742E5374796C650B000557696' +
          '4746802000E5469746C65416C69676E6D656E74070D74614C6566744A7573746' +
          '966790C5469746C6543617074696F6E060D4D4143BD58C3FEA74FA657BAD90A5' +
          '469746C65436F6C6F720706636C47726179115469746C65466F6E742E4368617' +
          '2736574070F44454641554C545F434841525345540F5469746C65466F6E742E4' +
          '36F6C6F720707636C5768697465105469746C65466F6E742E48656967687402F' +
          '50E5469746C65466F6E742E4E616D65060D4D532053616E732053657269660F5' +
          '469746C65466F6E742E5374796C650B00095461626C654E616D6506055353464' +
          'D4E0756697369626C65090000'
        ChildRefValsStr_ = 
          '$BinaryEncodeString000000003C100D0E01044E616D6506065443303030430' +
          '9446174614669656C640606544330303043114C6F6F6B7570526573756C74466' +
          '9656C6406054D4E3030320000'
      end
      item
        DataField = 'TC003'
        DataLength = 0
        DataScale = 0
        CheckLookup = True
        ErrorMsg = 'MAC碼不存在!!'
        LookupType = ltDBServer
        RuleType = rtNone
        RuleValue_ = nil
        LookupTableName_ = 'SSFMO'
        LookupKeyFieldPairs_ = 'MO001='#39':TC003'#39
        LookupResultField_ = 'MO001'
        LookupGridColumnDatasStr_ = 
          '$BinaryEncodeString0000000189802E0E01094669656C644E616D6506054D4' +
          'F30303109416C69676E6D656E74070D74614C6566744A75737469667905436F6' +
          'C6F720707636C57686974650C466F6E742E43686172736574070F44454641554' +
          'C545F434841525345540A466F6E742E436F6C6F720707636C426C61636B0B466' +
          'F6E742E48656967687402F509466F6E742E4E616D65060D4D532053616E73205' +
          '3657269660A466F6E742E5374796C650B0005576964746802000E5469746C654' +
          '16C69676E6D656E74070D74614C6566744A7573746966790C5469746C6543617' +
          '074696F6E06054D4143BD580A5469746C65436F6C6F720706636C47726179115' +
          '469746C65466F6E742E43686172736574070F44454641554C545F43484152534' +
          '5540F5469746C65466F6E742E436F6C6F720707636C5768697465105469746C6' +
          '5466F6E742E48656967687402F50E5469746C65466F6E742E4E616D65060D4D5' +
          '32053616E732053657269660F5469746C65466F6E742E5374796C650B0009546' +
          '1626C654E616D6506055353464D4F0756697369626C65090000'
      end>
    Left = 975
    Top = 495
  end
  object dsBox1: TDataSource
    DataSet = cdsBox1
    Left = 130
    Top = 395
  end
  object cdsBox1: TInfoClientDataSet
    Aggregates = <>
    CommandText = 'SELECT *'#13#10'FROM SSFMQ (NOLOCK)'#13#10'WHERE MQ001 = :MQ001'#13#10
    Params = <
      item
        DataType = ftString
        Name = 'MQ001'
        ParamType = ptUnknown
      end>
    ProviderName = 'GLModule.qrySelect'
    BeforeOpen = cdsBox1BeforeOpen
    AfterScroll = cdsBox1AfterScroll
    SQL.Strings = (
      'SELECT *'
      'FROM SSFMQ (NOLOCK)'
      'WHERE MQ001 = :MQ001')
    DisableTranslate = False
    Left = 88
    Top = 396
    InfoClient_ = {
      9619E0BD01000000180000000200000000000300000068000450415353010049
      00000002000753554254595045020049000A0046697865644368617200055749
      44544802000200040007504153534E554D04000100000000000100044C434944
      0400010000000000}
    InfoClient_Struct = {
      094669656C64446566730E01044E616D65060450415353084461746154797065
      07086674537472696E670453697A6502040001044E616D650607504153534E55
      4D08446174615479706507096674496E74656765720000095461626C654E616D
      65060553534654410E5461626C654E616D65416C696173060254310C50726F76
      696465724E616D65060971727953656C6563741245787472614C6566744A6F69
      6E44617461730E0000}
    object cdsBox1COMPANY: TStringField
      FieldName = 'COMPANY'
      FixedChar = True
      Size = 10
    end
    object cdsBox1CREATOR: TStringField
      FieldName = 'CREATOR'
      FixedChar = True
      Size = 10
    end
    object cdsBox1USR_GROUP: TStringField
      FieldName = 'USR_GROUP'
      FixedChar = True
      Size = 10
    end
    object cdsBox1CREATE_DATE: TStringField
      FieldName = 'CREATE_DATE'
      FixedChar = True
      Size = 8
    end
    object cdsBox1MODIFIER: TStringField
      FieldName = 'MODIFIER'
      FixedChar = True
      Size = 10
    end
    object cdsBox1MODI_DATE: TStringField
      FieldName = 'MODI_DATE'
      FixedChar = True
      Size = 8
    end
    object cdsBox1FLAG: TFloatField
      FieldName = 'FLAG'
    end
    object cdsBox1MQ001: TStringField
      DisplayLabel = '製令單號'
      FieldName = 'MQ001'
      FixedChar = True
      Size = 15
    end
    object cdsBox1MQ002: TStringField
      DisplayLabel = '裝箱號碼'
      FieldName = 'MQ002'
      FixedChar = True
      Size = 19
    end
    object cdsBox1MQ003: TFloatField
      DisplayLabel = '預計重量'
      FieldName = 'MQ003'
    end
    object cdsBox1MQ004: TFloatField
      DisplayLabel = '實際重量'
      FieldName = 'MQ004'
    end
    object cdsBox1MF01X: TStringField
      FieldName = 'MF01X'
      FixedChar = True
      Size = 15
    end
  end
  object cdsBox2: TInfoClientDataSet
    Aggregates = <>
    CommandText = 
      'SELECT *'#13#10'FROM SSFMR (NOLOCK)'#13#10'WHERE MR001 = :MR001'#13#10'AND       M' +
      'R002 = :MR002'#13#10
    Params = <
      item
        DataType = ftString
        Name = 'MR001'
        ParamType = ptUnknown
      end
      item
        DataType = ftString
        Name = 'MR002'
        ParamType = ptUnknown
      end>
    ProviderName = 'GLModule.qrySelect'
    BeforeOpen = cdsBox2BeforeOpen
    SQL.Strings = (
      'SELECT *'
      'FROM SSFMR (NOLOCK)'
      'WHERE MR001 = :MR001'
      'AND       MR002 = :MR002')
    DisableTranslate = False
    Left = 88
    Top = 440
    InfoClient_ = {
      9619E0BD01000000180000000200000000000300000068000450415353010049
      00000002000753554254595045020049000A0046697865644368617200055749
      44544802000200040007504153534E554D04000100000000000100044C434944
      0400010000000000}
    InfoClient_Struct = {
      094669656C64446566730E01044E616D65060450415353084461746154797065
      07086674537472696E670453697A6502040001044E616D650607504153534E55
      4D08446174615479706507096674496E74656765720000095461626C654E616D
      65060553534654410E5461626C654E616D65416C696173060254310C50726F76
      696465724E616D65060971727953656C6563741245787472614C6566744A6F69
      6E44617461730E0000}
    object cdsBox2COMPANY: TStringField
      FieldName = 'COMPANY'
      FixedChar = True
      Size = 10
    end
    object cdsBox2CREATOR: TStringField
      FieldName = 'CREATOR'
      FixedChar = True
      Size = 10
    end
    object cdsBox2USR_GROUP: TStringField
      FieldName = 'USR_GROUP'
      FixedChar = True
      Size = 10
    end
    object cdsBox2CREATE_DATE: TStringField
      FieldName = 'CREATE_DATE'
      FixedChar = True
      Size = 8
    end
    object cdsBox2MODIFIER: TStringField
      FieldName = 'MODIFIER'
      FixedChar = True
      Size = 10
    end
    object cdsBox2MODI_DATE: TStringField
      FieldName = 'MODI_DATE'
      FixedChar = True
      Size = 8
    end
    object cdsBox2FLAG: TFloatField
      FieldName = 'FLAG'
    end
    object cdsBox2MR001: TStringField
      DisplayLabel = '製令單號'
      FieldName = 'MR001'
      FixedChar = True
      Size = 15
    end
    object cdsBox2MR002: TStringField
      DisplayLabel = '裝箱號碼'
      FieldName = 'MR002'
      FixedChar = True
      Size = 19
    end
    object cdsBox2MR003: TStringField
      DisplayLabel = '預計生產序號'
      FieldName = 'MR003'
      FixedChar = True
      Size = 29
    end
    object cdsBox2MR004: TStringField
      DisplayLabel = '實際生產序號'
      FieldName = 'MR004'
      FixedChar = True
      Size = 29
    end
    object cdsBox2MF01X: TStringField
      FieldName = 'MF01X'
      FixedChar = True
      Size = 15
    end
    object cdsBox2MQ002: TStringField
      FieldName = 'MQ002'
      FixedChar = True
      Size = 19
    end
  end
  object dsBox2: TDataSource
    DataSet = cdsBox2
    Left = 130
    Top = 439
  end
  object EcdsCombine: TInfoClientDataSet
    Aggregates = <>
    CommandText = 'SELECT TB003'#13#10'FROM SSFTB(NOLOCK)'#13#10'WHERE 1=0'#13#10' '#13#10
    Params = <>
    ProviderName = 'GLModule.qrySelect'
    SQL.Strings = (
      'SELECT TB003'
      'FROM SSFTB(NOLOCK)'
      'WHERE 1=0'
      ' ')
    DisableTranslate = False
    ConnectToServer = False
    Left = 593
    Top = 493
    InfoClient_ = {
      9619E0BD01000000180000000100000000000300000059000554423030330100
      4900000002000753554254595045020049000A00466978656443686172000557
      494454480200020019000100044C4349440400010000000000}
    InfoClient_Struct = {
      094669656C64446566730E01044E616D65060554423030330844617461547970
      6507086674537472696E670453697A6502190000095461626C654E616D650605
      53534654420E5461626C654E616D65416C696173060254310C50726F76696465
      724E616D65060971727953656C6563741245787472614C6566744A6F696E4461
      7461730E0000}
    object EcdsCombineTB003: TStringField
      DisplayLabel = '被組合生產序號'
      FieldName = 'TB003'
      FixedChar = True
      Size = 29
    end
  end
  object EdsCombine: TDataSource
    DataSet = EcdsCombine
    Left = 628
    Top = 493
  end
  object ErvCombine: TRefValComponent
    DataSource = EdsCombine
    RefVals = <
      item
        DataField = 'TB003'
        DataLength = 0
        DataScale = 0
        CheckLookup = True
        ErrorMsg = '生產序號不存在!!'
        LookupType = ltDBServer
        RuleType = rtNone
        RuleValue_ = nil
        LookupTableName_ = 'SSFMO'
        LookupKeyFieldPairs_ = 'MO001='#39':TB003'#39
        LookupResultField_ = 'MO001'
        LookupGridColumnDatasStr_ = 
          '$BinaryEncodeString000000018C83F10E01094669656C644E616D6506054D4' +
          'F30303109416C69676E6D656E74070D74614C6566744A75737469667905436F6' +
          'C6F720707636C57686974650C466F6E742E43686172736574070F44454641554' +
          'C545F434841525345540A466F6E742E436F6C6F720707636C426C61636B0B466' +
          'F6E742E48656967687402F509466F6E742E4E616D65060D4D532053616E73205' +
          '3657269660A466F6E742E5374796C650B0005576964746802000E5469746C654' +
          '16C69676E6D656E74070D74614C6566744A7573746966790C5469746C6543617' +
          '074696F6E0608A5CDB2A3A7C7B8B90A5469746C65436F6C6F720706636C47726' +
          '179115469746C65466F6E742E43686172736574070F44454641554C545F43484' +
          '1525345540F5469746C65466F6E742E436F6C6F720707636C576869746510546' +
          '9746C65466F6E742E48656967687402F50E5469746C65466F6E742E4E616D650' +
          '60D4D532053616E732053657269660F5469746C65466F6E742E5374796C650B0' +
          '0095461626C654E616D6506055353464D4F0756697369626C65090000'
      end>
    Left = 663
    Top = 493
  end
  object APort: TApdComPort
    ComNumber = 1
    Baud = 9600
    Parity = pEven
    DataBits = 7
    TraceName = 'APRO.TRC'
    LogName = 'APRO.LOG'
    OnTriggerAvail = APortTriggerAvail
    Left = 90
    Top = 490
  end
  object Timer: TTimer
    Enabled = False
    OnTimer = TimerTimer
    Left = 130
    Top = 352
  end
  object cdsBatch: TInfoClientDataSet
    Aggregates = <>
    Params = <>
    ProviderName = 'GLModule.qrySelect'
    DisableTranslate = False
    Left = 48
    Top = 353
  end
  object Document: TDocument
    AutoConnect = False
    ConnectKind = ckRunningOrNew
    Left = 48
    Top = 440
  end
  object CodeSoft: TApplication
    AutoConnect = False
    ConnectKind = ckNewInstance
    AutoQuit = True
    Left = 12
    Top = 440
  end
  object cdsBatch2: TInfoClientDataSet
    Aggregates = <>
    Params = <>
    ProviderName = 'GLModule.qrySelect'
    DisableTranslate = False
    Left = 88
    Top = 353
  end
  object qryCheck: TInfoClientDataSet
    Aggregates = <>
    Params = <>
    ProviderName = 'GLModule.qrySelect'
    DisableTranslate = False
    Left = 130
    Top = 265
  end
  object InPrintData: TInfoClientDataSet
    Aggregates = <>
    AutoCalcFields = False
    Params = <>
    ProviderName = 'GLModule.qrySelect'
    DisableTranslate = False
    Left = 11
    Top = 489
  end
  object dsInPrintData: TDataSource
    DataSet = InPrintData
    Left = 49
    Top = 489
  end
  object OutPrintData: TInfoClientDataSet
    Aggregates = <>
    AutoCalcFields = False
    Params = <>
    ProviderName = 'GLModule.qrySelect'
    DisableTranslate = False
    Left = 13
    Top = 537
  end
  object dsOut2PrintData: TDataSource
    DataSet = OutPrintData
    Left = 52
    Top = 537
  end
  object IcdsCombine: TInfoClientDataSet
    Aggregates = <>
    CommandText = 
      'SELECT NM003,SPACE(29) TB003'#13#10'FROM SSFNM A(NOLOCK)'#13#10'JOIN SSFMG B' +
      '(NOLOCK) ON (B.MG001 = A.NM001 AND B.MG002 = A.NM002)'#13#10'WHERE 1=0' +
      #13#10
    Params = <>
    ProviderName = 'GLModule.qrySelect'
    AfterOpen = IcdsCombineAfterOpen
    SQL.Strings = (
      'SELECT NM003,SPACE(29) TB003'
      'FROM SSFNM A(NOLOCK)'
      
        'JOIN SSFMG B(NOLOCK) ON (B.MG001 = A.NM001 AND B.MG002 = A.NM002' +
        ')'
      'WHERE 1=0')
    DisableTranslate = False
    Left = 593
    Top = 537
    object IcdsCombineNM003: TStringField
      DisplayLabel = '被組合料號'
      FieldName = 'NM003'
      FixedChar = True
      Size = 40
    end
    object IcdsCombineNM003C: TStringField
      DisplayLabel = '被組合名稱'
      FieldKind = fkCalculated
      FieldName = 'NM003C'
      Calculated = True
    end
    object IcdsCombineTB003: TStringField
      DisplayLabel = '被組合生產序號'
      FieldName = 'TB003'
      FixedChar = True
      Size = 29
    end
  end
  object IdsCombine: TDataSource
    DataSet = IcdsCombine
    Left = 628
    Top = 537
  end
  object IrvCombine: TRefValComponent
    DataSource = IdsCombine
    RefVals = <
      item
        DataField = 'TB003'
        DataLength = 0
        DataScale = 0
        CheckLookup = True
        ErrorMsg = '生產序號不存在!!'
        LookupType = ltDBServer
        RuleType = rtNone
        RuleValue_ = nil
        LookupProviderName_ = 'GLModule.qrySelect'
        LookupTableName_ = 'SSFMO'
        LookupKeyFieldPairs_ = 'MO001='#39':TB003'#39
        LookupResultField_ = 'MO001'
        LookupGridColumnDatasStr_ = 
          '$BinaryEncodeString000000018C83F10E01094669656C644E616D6506054D4' +
          'F30303109416C69676E6D656E74070D74614C6566744A75737469667905436F6' +
          'C6F720707636C57686974650C466F6E742E43686172736574070F44454641554' +
          'C545F434841525345540A466F6E742E436F6C6F720707636C426C61636B0B466' +
          'F6E742E48656967687402F509466F6E742E4E616D65060D4D532053616E73205' +
          '3657269660A466F6E742E5374796C650B0005576964746802000E5469746C654' +
          '16C69676E6D656E74070D74614C6566744A7573746966790C5469746C6543617' +
          '074696F6E0608A5CDB2A3A7C7B8B90A5469746C65436F6C6F720706636C47726' +
          '179115469746C65466F6E742E43686172736574070F44454641554C545F43484' +
          '1525345540F5469746C65466F6E742E436F6C6F720707636C576869746510546' +
          '9746C65466F6E742E48656967687402F50E5469746C65466F6E742E4E616D650' +
          '60D4D532053616E732053657269660F5469746C65466F6E742E5374796C650B0' +
          '0095461626C654E616D6506055353464D4F0756697369626C65090000'
      end
      item
        DataField = 'NM003'
        DataLength = 0
        DataScale = 0
        CheckLookup = True
        LookupType = ltDBServer
        RuleType = rtNone
        RuleValue_ = nil
        LookupTableName_ = 'INVMB'
        LookupKeyFieldPairs_ = 'MB001='#39':NM003'#39
        LookupResultField_ = 'MB001'
        LookupGridColumnDatasStr_ = 
          '$BinaryEncodeString000000030E01C40E01094669656C644E616D6506054D4' +
          '230303109416C69676E6D656E74070D74614C6566744A75737469667905436F6' +
          'C6F720707636C57686974650C466F6E742E43686172736574070F44454641554' +
          'C545F434841525345540A466F6E742E436F6C6F720707636C426C61636B0B466' +
          'F6E742E48656967687402F509466F6E742E4E616D65060D4D532053616E73205' +
          '3657269660A466F6E742E5374796C650B0005576964746802000E5469746C654' +
          '16C69676E6D656E74070D74614C6566744A7573746966790C5469746C6543617' +
          '074696F6E0604AEC6B8B90A5469746C65436F6C6F720706636C4772617911546' +
          '9746C65466F6E742E43686172736574070F44454641554C545F4348415253455' +
          '40F5469746C65466F6E742E436F6C6F720707636C5768697465105469746C654' +
          '66F6E742E48656967687402F50E5469746C65466F6E742E4E616D65060D4D532' +
          '053616E732053657269660F5469746C65466F6E742E5374796C650B000954616' +
          '26C654E616D650605494E564D420756697369626C65090001094669656C644E6' +
          '16D6506054D4230303209416C69676E6D656E74070D74614C6566744A7573746' +
          '9667905436F6C6F720707636C57686974650C466F6E742E43686172736574070' +
          'F44454641554C545F434841525345540A466F6E742E436F6C6F720707636C426' +
          'C61636B0B466F6E742E48656967687402F509466F6E742E4E616D65060D4D532' +
          '053616E732053657269660A466F6E742E5374796C650B0005576964746802000' +
          'E5469746C65416C69676E6D656E74070D74614C6566744A7573746966790C546' +
          '9746C6543617074696F6E0604A657BAD90A5469746C65436F6C6F720706636C4' +
          '7726179115469746C65466F6E742E43686172736574070F44454641554C545F4' +
          '34841525345540F5469746C65466F6E742E436F6C6F720707636C57686974651' +
          '05469746C65466F6E742E48656967687402F50E5469746C65466F6E742E4E616' +
          'D65060D4D532053616E732053657269660F5469746C65466F6E742E5374796C6' +
          '50B00095461626C654E616D650605494E564D420756697369626C65090000'
        ChildRefValsStr_ = 
          '$BinaryEncodeString000000003C100F0E01044E616D6506064E4D303033430' +
          '9446174614669656C6406064E4D30303343114C6F6F6B7570526573756C74466' +
          '9656C6406054D423030320000'
      end>
    Left = 663
    Top = 537
  end
  object KcdsCombine: TInfoClientDataSet
    Aggregates = <>
    CommandText = 
      'SELECT NM003,SPACE(29) TB003'#13#10'FROM SSFNM A(NOLOCK)'#13#10'JOIN SSFMG B' +
      '(NOLOCK) ON (B.MG001 = A.NM001 AND B.MG002 = A.NM002)'#13#10'WHERE 1=0' +
      #13#10#13#10
    Params = <>
    ProviderName = 'GLModule.qrySelect'
    AfterOpen = KcdsCombineAfterOpen
    SQL.Strings = (
      'SELECT NM003,SPACE(29) TB003'
      'FROM SSFNM A(NOLOCK)'
      
        'JOIN SSFMG B(NOLOCK) ON (B.MG001 = A.NM001 AND B.MG002 = A.NM002' +
        ')'
      'WHERE 1=0'
      '')
    DisableTranslate = False
    Left = 593
    Top = 580
    object KcdsCombineNM003: TStringField
      DisplayLabel = '被組合料號'
      FieldName = 'NM003'
      FixedChar = True
      Size = 40
    end
    object KcdsCombineNM003C: TStringField
      DisplayLabel = '被組合名稱'
      FieldKind = fkCalculated
      FieldName = 'NM003C'
      Calculated = True
    end
    object KcdsCombineTB003: TStringField
      DisplayLabel = '被組合生產序號'
      FieldName = 'TB003'
      FixedChar = True
      Size = 29
    end
  end
  object KdsCombine: TDataSource
    DataSet = KcdsCombine
    Left = 628
    Top = 580
  end
  object KrvCombine: TRefValComponent
    DataSource = KdsCombine
    RefVals = <
      item
        DataField = 'TB003'
        DataLength = 0
        DataScale = 0
        CheckLookup = True
        ErrorMsg = '生產序號不存在!!'
        LookupType = ltDBServer
        RuleType = rtNone
        RuleValue_ = nil
        LookupProviderName_ = 'GLModule.qrySelect'
        LookupTableName_ = 'SSFMO'
        LookupKeyFieldPairs_ = 'MO001='#39':TB003'#39
        LookupResultField_ = 'MO001'
        LookupGridColumnDatasStr_ = 
          '$BinaryEncodeString000000018C83F10E01094669656C644E616D6506054D4' +
          'F30303109416C69676E6D656E74070D74614C6566744A75737469667905436F6' +
          'C6F720707636C57686974650C466F6E742E43686172736574070F44454641554' +
          'C545F434841525345540A466F6E742E436F6C6F720707636C426C61636B0B466' +
          'F6E742E48656967687402F509466F6E742E4E616D65060D4D532053616E73205' +
          '3657269660A466F6E742E5374796C650B0005576964746802000E5469746C654' +
          '16C69676E6D656E74070D74614C6566744A7573746966790C5469746C6543617' +
          '074696F6E0608A5CDB2A3A7C7B8B90A5469746C65436F6C6F720706636C47726' +
          '179115469746C65466F6E742E43686172736574070F44454641554C545F43484' +
          '1525345540F5469746C65466F6E742E436F6C6F720707636C576869746510546' +
          '9746C65466F6E742E48656967687402F50E5469746C65466F6E742E4E616D650' +
          '60D4D532053616E732053657269660F5469746C65466F6E742E5374796C650B0' +
          '0095461626C654E616D6506055353464D4F0756697369626C65090000'
      end
      item
        DataField = 'NM003'
        DataLength = 0
        DataScale = 0
        CheckLookup = True
        LookupType = ltDBServer
        RuleType = rtNone
        RuleValue_ = nil
        LookupTableName_ = 'INVMB'
        LookupKeyFieldPairs_ = 'MB001='#39':NM003'#39
        LookupResultField_ = 'MB001'
        LookupGridColumnDatasStr_ = 
          '$BinaryEncodeString000000030E01C40E01094669656C644E616D6506054D4' +
          '230303109416C69676E6D656E74070D74614C6566744A75737469667905436F6' +
          'C6F720707636C57686974650C466F6E742E43686172736574070F44454641554' +
          'C545F434841525345540A466F6E742E436F6C6F720707636C426C61636B0B466' +
          'F6E742E48656967687402F509466F6E742E4E616D65060D4D532053616E73205' +
          '3657269660A466F6E742E5374796C650B0005576964746802000E5469746C654' +
          '16C69676E6D656E74070D74614C6566744A7573746966790C5469746C6543617' +
          '074696F6E0604AEC6B8B90A5469746C65436F6C6F720706636C4772617911546' +
          '9746C65466F6E742E43686172736574070F44454641554C545F4348415253455' +
          '40F5469746C65466F6E742E436F6C6F720707636C5768697465105469746C654' +
          '66F6E742E48656967687402F50E5469746C65466F6E742E4E616D65060D4D532' +
          '053616E732053657269660F5469746C65466F6E742E5374796C650B000954616' +
          '26C654E616D650605494E564D420756697369626C65090001094669656C644E6' +
          '16D6506054D4230303209416C69676E6D656E74070D74614C6566744A7573746' +
          '9667905436F6C6F720707636C57686974650C466F6E742E43686172736574070' +
          'F44454641554C545F434841525345540A466F6E742E436F6C6F720707636C426' +
          'C61636B0B466F6E742E48656967687402F509466F6E742E4E616D65060D4D532' +
          '053616E732053657269660A466F6E742E5374796C650B0005576964746802000' +
          'E5469746C65416C69676E6D656E74070D74614C6566744A7573746966790C546' +
          '9746C6543617074696F6E0604A657BAD90A5469746C65436F6C6F720706636C4' +
          '7726179115469746C65466F6E742E43686172736574070F44454641554C545F4' +
          '34841525345540F5469746C65466F6E742E436F6C6F720707636C57686974651' +
          '05469746C65466F6E742E48656967687402F50E5469746C65466F6E742E4E616' +
          'D65060D4D532053616E732053657269660F5469746C65466F6E742E5374796C6' +
          '50B00095461626C654E616D650605494E564D420756697369626C65090000'
        ChildRefValsStr_ = 
          '$BinaryEncodeString000000003C100F0E01044E616D6506064E4D303033430' +
          '9446174614669656C6406064E4D30303343114C6F6F6B7570526573756C74466' +
          '9656C6406054D423030320000'
      end>
    Left = 663
    Top = 580
  end
  object KcdsCondition: TInfoClientDataSet
    Aggregates = <>
    CommandText = 
      'SELECT TA01X,TA01X AS TB003,TA000=SPACE(2),TA027,TA037,TA038,TA0' +
      '49'#13#10'FROM SSFTA(NOLOCK)'#13#10'WHERE 1=0'#13#10
    Params = <>
    ProviderName = 'GLModule.qrySelect'
    SQL.Strings = (
      
        'SELECT TA01X,TA01X AS TB003,TA000=SPACE(2),TA027,TA037,TA038,TA0' +
        '49'
      'FROM SSFTA(NOLOCK)'
      'WHERE 1=0')
    DisableTranslate = False
    ConnectToServer = False
    Left = 454
    Top = 537
    InfoClient_ = {
      9619E0BD010000001800000007000000000003000000F5000554413031580100
      4900000002000753554254595045020049000A00466978656443686172000557
      49445448020002001D0005544230303301004900000002000753554254595045
      020049000A0046697865644368617200055749445448020002001D0005544130
      303001004900000002000753554254595045020049000A004669786564436861
      7200055749445448020002000200055441303237080004000000000005544130
      3337080004000000000005544130333808000400000000000554413034390800
      0400000000000100044C4349440400010000000000}
    InfoClient_Struct = {
      094669656C64446566730E01044E616D65060554413031580844617461547970
      6507086674537472696E670453697A65021D0001044E616D6506055442303033
      08446174615479706507086674537472696E670453697A65021D0001044E616D
      650605544130303008446174615479706507086674537472696E670453697A65
      02020001044E616D650605544130323708446174615479706507076674466C6F
      61740001044E616D650605544130333708446174615479706507076674466C6F
      61740001044E616D650605544130333808446174615479706507076674466C6F
      61740001044E616D650605544130343908446174615479706507076674466C6F
      61740000095461626C654E616D65060D5353465441284E4F4C4F434B290E5461
      626C654E616D65416C696173060254310C50726F76696465724E616D65060971
      727953656C6563741245787472614C6566744A6F696E44617461730E0000}
    object KcdsConditionTA01X: TStringField
      FieldName = 'TA01X'
      FixedChar = True
      Size = 29
    end
    object KcdsConditionTB003: TStringField
      FieldName = 'TB003'
      FixedChar = True
      Size = 29
    end
    object KcdsConditionTA000: TStringField
      FieldName = 'TA000'
      FixedChar = True
      Size = 2
    end
    object KcdsConditionTA027: TFloatField
      FieldName = 'TA027'
    end
    object KcdsConditionTA037: TFloatField
      FieldName = 'TA037'
    end
    object KcdsConditionTA038: TFloatField
      FieldName = 'TA038'
    end
    object KcdsConditionTA049: TFloatField
      FieldName = 'TA049'
    end
  end
  object KdsCondition: TDataSource
    DataSet = KcdsCondition
    Left = 488
    Top = 537
  end
  object KrvConditon: TRefValComponent
    DataSource = KdsCondition
    RefVals = <
      item
        DataField = 'TA01X'
        DataLength = 0
        DataScale = 0
        CheckLookup = True
        LookupType = ltDBServer
        RuleType = rtNone
        RuleValue_ = nil
        LookupTableName_ = 'SSFMO'
        LookupKeyFieldPairs_ = 'MO001='#39':TA01X'#39
        LookupResultField_ = 'MO001'
        LookupGridColumnDatasStr_ = 
          '$BinaryEncodeString000000018C83F10E01094669656C644E616D6506054D4' +
          'F30303109416C69676E6D656E74070D74614C6566744A75737469667905436F6' +
          'C6F720707636C57686974650C466F6E742E43686172736574070F44454641554' +
          'C545F434841525345540A466F6E742E436F6C6F720707636C426C61636B0B466' +
          'F6E742E48656967687402F509466F6E742E4E616D65060D4D532053616E73205' +
          '3657269660A466F6E742E5374796C650B0005576964746802000E5469746C654' +
          '16C69676E6D656E74070D74614C6566744A7573746966790C5469746C6543617' +
          '074696F6E0608A5CDB2A3A7C7B8B90A5469746C65436F6C6F720706636C47726' +
          '179115469746C65466F6E742E43686172736574070F44454641554C545F43484' +
          '1525345540F5469746C65466F6E742E436F6C6F720707636C576869746510546' +
          '9746C65466F6E742E48656967687402F50E5469746C65466F6E742E4E616D650' +
          '60D4D532053616E732053657269660F5469746C65466F6E742E5374796C650B0' +
          '0095461626C654E616D6506055353464D4F0756697369626C65090000'
      end>
    Left = 521
    Top = 537
  end
  object qrySelect: TInfoClientDataSet
    Aggregates = <>
    AutoCalcFields = False
    Params = <>
    ProviderName = 'GLModule.qrySelect'
    DisableTranslate = False
    Left = 127
    Top = 488
  end
  object Timer1: TTimer
    OnTimer = Timer1Timer
    Left = 123
    Top = 535
  end
  object DcdsSerial: TInfoClientDataSet
    Aggregates = <>
    CommandText = 
      'SELECT MG018,SPACE(29) TA001'#13#10'FROM  SSFMG (NOLOCK)'#13#10'WHERE MG001 ' +
      '= :MG001'#13#10'AND   MG003 = :MG003'#13#10' '#13#10
    Params = <
      item
        DataType = ftString
        Name = 'MG001'
        ParamType = ptUnknown
      end
      item
        DataType = ftString
        Name = 'MG003'
        ParamType = ptUnknown
      end>
    ProviderName = 'GLModule.qrySelect'
    BeforeOpen = DcdsSerialBeforeOpen
    SQL.Strings = (
      'SELECT MG018,SPACE(29) TA001'
      'FROM  SSFMG (NOLOCK)'
      'WHERE MG001 = :MG001'
      'AND   MG003 = :MG003'
      ' ')
    DisableTranslate = False
    Left = 721
    Top = 452
    object DcdsSerialMG018: TStringField
      DisplayLabel = '序號料號'
      FieldName = 'MG018'
      FixedChar = True
      Size = 40
    end
    object DcdsSerialMG018C: TStringField
      DisplayLabel = '序號名稱'
      FieldKind = fkCalculated
      FieldName = 'MG018C'
      Calculated = True
    end
    object DcdsSerialTA001: TStringField
      DisplayLabel = '生產序號'
      FieldName = 'TA001'
      FixedChar = True
      Size = 29
    end
  end
  object DdsSerial: TDataSource
    DataSet = DcdsSerial
    Left = 756
    Top = 452
  end
  object DrvSerial: TRefValComponent
    DataSource = DdsSerial
    RefVals = <
      item
        DataField = 'TA001'
        DataLength = 0
        DataScale = 0
        CheckLookup = True
        ErrorMsg = '生產序號不存在!!'
        LookupType = ltDBServer
        RuleType = rtNone
        RuleValue_ = nil
        LookupProviderName_ = 'GLModule.qrySelect'
        LookupTableName_ = 'SSFMO'
        LookupKeyFieldPairs_ = 'MO001='#39':TA001'#39
        LookupResultField_ = 'MO001'
        LookupGridColumnDatasStr_ = 
          '$BinaryEncodeString000000018C83F10E01094669656C644E616D6506054D4' +
          'F30303109416C69676E6D656E74070D74614C6566744A75737469667905436F6' +
          'C6F720707636C57686974650C466F6E742E43686172736574070F44454641554' +
          'C545F434841525345540A466F6E742E436F6C6F720707636C426C61636B0B466' +
          'F6E742E48656967687402F509466F6E742E4E616D65060D4D532053616E73205' +
          '3657269660A466F6E742E5374796C650B0005576964746802000E5469746C654' +
          '16C69676E6D656E74070D74614C6566744A7573746966790C5469746C6543617' +
          '074696F6E0608A5CDB2A3A7C7B8B90A5469746C65436F6C6F720706636C47726' +
          '179115469746C65466F6E742E43686172736574070F44454641554C545F43484' +
          '1525345540F5469746C65466F6E742E436F6C6F720707636C576869746510546' +
          '9746C65466F6E742E48656967687402F50E5469746C65466F6E742E4E616D650' +
          '60D4D532053616E732053657269660F5469746C65466F6E742E5374796C650B0' +
          '0095461626C654E616D6506055353464D4F0756697369626C65090000'
      end
      item
        DataField = 'MG018'
        DataLength = 0
        DataScale = 0
        CheckLookup = True
        LookupType = ltDBServer
        RuleType = rtNone
        RuleValue_ = nil
        LookupTableName_ = 'INVMB'
        LookupKeyFieldPairs_ = 'MB001='#39':MG018'#39
        LookupResultField_ = 'MB001'
        LookupGridColumnDatasStr_ = 
          '$BinaryEncodeString000000030E01C40E01094669656C644E616D6506054D4' +
          '230303109416C69676E6D656E74070D74614C6566744A75737469667905436F6' +
          'C6F720707636C57686974650C466F6E742E43686172736574070F44454641554' +
          'C545F434841525345540A466F6E742E436F6C6F720707636C426C61636B0B466' +
          'F6E742E48656967687402F509466F6E742E4E616D65060D4D532053616E73205' +
          '3657269660A466F6E742E5374796C650B0005576964746802000E5469746C654' +
          '16C69676E6D656E74070D74614C6566744A7573746966790C5469746C6543617' +
          '074696F6E0604AEC6B8B90A5469746C65436F6C6F720706636C4772617911546' +
          '9746C65466F6E742E43686172736574070F44454641554C545F4348415253455' +
          '40F5469746C65466F6E742E436F6C6F720707636C5768697465105469746C654' +
          '66F6E742E48656967687402F50E5469746C65466F6E742E4E616D65060D4D532' +
          '053616E732053657269660F5469746C65466F6E742E5374796C650B000954616' +
          '26C654E616D650605494E564D420756697369626C65090001094669656C644E6' +
          '16D6506054D4230303209416C69676E6D656E74070D74614C6566744A7573746' +
          '9667905436F6C6F720707636C57686974650C466F6E742E43686172736574070' +
          'F44454641554C545F434841525345540A466F6E742E436F6C6F720707636C426' +
          'C61636B0B466F6E742E48656967687402F509466F6E742E4E616D65060D4D532' +
          '053616E732053657269660A466F6E742E5374796C650B0005576964746802000' +
          'E5469746C65416C69676E6D656E74070D74614C6566744A7573746966790C546' +
          '9746C6543617074696F6E0604A657BAD90A5469746C65436F6C6F720706636C4' +
          '7726179115469746C65466F6E742E43686172736574070F44454641554C545F4' +
          '34841525345540F5469746C65466F6E742E436F6C6F720707636C57686974651' +
          '05469746C65466F6E742E48656967687402F50E5469746C65466F6E742E4E616' +
          'D65060D4D532053616E732053657269660F5469746C65466F6E742E5374796C6' +
          '50B00095461626C654E616D650605494E564D420756697369626C65090000'
        ChildRefValsStr_ = 
          '$BinaryEncodeString000000003C100D0E01044E616D6506064D47303138430' +
          '9446174614669656C6406064D4730313843114C6F6F6B7570526573756C74466' +
          '9656C6406054D423030320000'
      end>
    Left = 791
    Top = 452
  end
  object IcdsSerial: TInfoClientDataSet
    Aggregates = <>
    CommandText = 
      'SELECT MG018,SPACE(29) TA001'#13#10'FROM  SSFMG (NOLOCK)'#13#10'WHERE MG001 ' +
      '= :MG001'#13#10'AND   MG003 = :MG003'#13#10' '#13#10
    Params = <
      item
        DataType = ftString
        Name = 'MG001'
        ParamType = ptUnknown
      end
      item
        DataType = ftString
        Name = 'MG003'
        ParamType = ptUnknown
      end>
    ProviderName = 'GLModule.qrySelect'
    BeforeOpen = IcdsSerialBeforeOpen
    SQL.Strings = (
      'SELECT MG018,SPACE(29) TA001'
      'FROM  SSFMG (NOLOCK)'
      'WHERE MG001 = :MG001'
      'AND   MG003 = :MG003'
      ' ')
    DisableTranslate = False
    Left = 721
    Top = 538
    object IcdsSerialMG018: TStringField
      DisplayLabel = '序號料號'
      FieldName = 'MG018'
      FixedChar = True
      Size = 40
    end
    object IcdsSerialMG018C: TStringField
      DisplayLabel = '序號名稱'
      FieldKind = fkCalculated
      FieldName = 'MG018C'
      Calculated = True
    end
    object IcdsSerialTA001: TStringField
      DisplayLabel = '生產序號'
      FieldName = 'TA001'
      FixedChar = True
      Size = 29
    end
  end
  object IdsSerial: TDataSource
    DataSet = IcdsSerial
    Left = 756
    Top = 538
  end
  object IrvSerial: TRefValComponent
    DataSource = IdsSerial
    RefVals = <
      item
        DataField = 'TA001'
        DataLength = 0
        DataScale = 0
        CheckLookup = True
        ErrorMsg = '生產序號不存在!!'
        LookupType = ltDBServer
        RuleType = rtNone
        RuleValue_ = nil
        LookupProviderName_ = 'GLModule.qrySelect'
        LookupTableName_ = 'SSFMO'
        LookupKeyFieldPairs_ = 'MO001='#39':TA001'#39
        LookupResultField_ = 'MO001'
        LookupGridColumnDatasStr_ = 
          '$BinaryEncodeString000000018C83F10E01094669656C644E616D6506054D4' +
          'F30303109416C69676E6D656E74070D74614C6566744A75737469667905436F6' +
          'C6F720707636C57686974650C466F6E742E43686172736574070F44454641554' +
          'C545F434841525345540A466F6E742E436F6C6F720707636C426C61636B0B466' +
          'F6E742E48656967687402F509466F6E742E4E616D65060D4D532053616E73205' +
          '3657269660A466F6E742E5374796C650B0005576964746802000E5469746C654' +
          '16C69676E6D656E74070D74614C6566744A7573746966790C5469746C6543617' +
          '074696F6E0608A5CDB2A3A7C7B8B90A5469746C65436F6C6F720706636C47726' +
          '179115469746C65466F6E742E43686172736574070F44454641554C545F43484' +
          '1525345540F5469746C65466F6E742E436F6C6F720707636C576869746510546' +
          '9746C65466F6E742E48656967687402F50E5469746C65466F6E742E4E616D650' +
          '60D4D532053616E732053657269660F5469746C65466F6E742E5374796C650B0' +
          '0095461626C654E616D6506055353464D4F0756697369626C65090000'
      end
      item
        DataField = 'MG018'
        DataLength = 0
        DataScale = 0
        CheckLookup = True
        LookupType = ltDBServer
        RuleType = rtNone
        RuleValue_ = nil
        LookupTableName_ = 'INVMB'
        LookupKeyFieldPairs_ = 'MB001='#39':MG018'#39
        LookupResultField_ = 'MB001'
        LookupGridColumnDatasStr_ = 
          '$BinaryEncodeString000000030E01C40E01094669656C644E616D6506054D4' +
          '230303109416C69676E6D656E74070D74614C6566744A75737469667905436F6' +
          'C6F720707636C57686974650C466F6E742E43686172736574070F44454641554' +
          'C545F434841525345540A466F6E742E436F6C6F720707636C426C61636B0B466' +
          'F6E742E48656967687402F509466F6E742E4E616D65060D4D532053616E73205' +
          '3657269660A466F6E742E5374796C650B0005576964746802000E5469746C654' +
          '16C69676E6D656E74070D74614C6566744A7573746966790C5469746C6543617' +
          '074696F6E0604AEC6B8B90A5469746C65436F6C6F720706636C4772617911546' +
          '9746C65466F6E742E43686172736574070F44454641554C545F4348415253455' +
          '40F5469746C65466F6E742E436F6C6F720707636C5768697465105469746C654' +
          '66F6E742E48656967687402F50E5469746C65466F6E742E4E616D65060D4D532' +
          '053616E732053657269660F5469746C65466F6E742E5374796C650B000954616' +
          '26C654E616D650605494E564D420756697369626C65090001094669656C644E6' +
          '16D6506054D4230303209416C69676E6D656E74070D74614C6566744A7573746' +
          '9667905436F6C6F720707636C57686974650C466F6E742E43686172736574070' +
          'F44454641554C545F434841525345540A466F6E742E436F6C6F720707636C426' +
          'C61636B0B466F6E742E48656967687402F509466F6E742E4E616D65060D4D532' +
          '053616E732053657269660A466F6E742E5374796C650B0005576964746802000' +
          'E5469746C65416C69676E6D656E74070D74614C6566744A7573746966790C546' +
          '9746C6543617074696F6E0604A657BAD90A5469746C65436F6C6F720706636C4' +
          '7726179115469746C65466F6E742E43686172736574070F44454641554C545F4' +
          '34841525345540F5469746C65466F6E742E436F6C6F720707636C57686974651' +
          '05469746C65466F6E742E48656967687402F50E5469746C65466F6E742E4E616' +
          'D65060D4D532053616E732053657269660F5469746C65466F6E742E5374796C6' +
          '50B00095461626C654E616D650605494E564D420756697369626C65090000'
        ChildRefValsStr_ = 
          '$BinaryEncodeString000000003C100D0E01044E616D6506064D47303138430' +
          '9446174614669656C6406064D4730313843114C6F6F6B7570526573756C74466' +
          '9656C6406054D423030320000'
      end>
    Left = 791
    Top = 538
  end
  object KcdsSerial: TInfoClientDataSet
    Aggregates = <>
    CommandText = 
      'SELECT MG018,SPACE(29) TA001'#13#10'FROM  SSFMG (NOLOCK)'#13#10'WHERE MG001 ' +
      '= :MG001'#13#10'AND   MG003 = :MG003'#13#10' '#13#10
    Params = <
      item
        DataType = ftString
        Name = 'MG001'
        ParamType = ptUnknown
      end
      item
        DataType = ftString
        Name = 'MG003'
        ParamType = ptUnknown
      end>
    ProviderName = 'GLModule.qrySelect'
    BeforeOpen = KcdsSerialBeforeOpen
    SQL.Strings = (
      'SELECT MG018,SPACE(29) TA001'
      'FROM  SSFMG (NOLOCK)'
      'WHERE MG001 = :MG001'
      'AND   MG003 = :MG003'
      ' ')
    DisableTranslate = False
    Left = 721
    Top = 580
    object KcdsSerialMG018: TStringField
      DisplayLabel = '序號料號'
      FieldName = 'MG018'
      FixedChar = True
      Size = 40
    end
    object KcdsSerialMG018C: TStringField
      DisplayLabel = '序號名稱'
      FieldKind = fkCalculated
      FieldName = 'MG018C'
      Calculated = True
    end
    object KcdsSerialTA001: TStringField
      DisplayLabel = '生產序號'
      FieldName = 'TA001'
      FixedChar = True
      Size = 29
    end
  end
  object KdsSerial: TDataSource
    DataSet = KcdsSerial
    Left = 756
    Top = 580
  end
  object KrvSerial: TRefValComponent
    DataSource = KdsSerial
    RefVals = <
      item
        DataField = 'TA001'
        DataLength = 0
        DataScale = 0
        CheckLookup = True
        ErrorMsg = '生產序號不存在!!'
        LookupType = ltDBServer
        RuleType = rtNone
        RuleValue_ = nil
        LookupProviderName_ = 'GLModule.qrySelect'
        LookupTableName_ = 'SSFMO'
        LookupKeyFieldPairs_ = 'MO001='#39':TA001'#39
        LookupResultField_ = 'MO001'
        LookupGridColumnDatasStr_ = 
          '$BinaryEncodeString000000018C83F10E01094669656C644E616D6506054D4' +
          'F30303109416C69676E6D656E74070D74614C6566744A75737469667905436F6' +
          'C6F720707636C57686974650C466F6E742E43686172736574070F44454641554' +
          'C545F434841525345540A466F6E742E436F6C6F720707636C426C61636B0B466' +
          'F6E742E48656967687402F509466F6E742E4E616D65060D4D532053616E73205' +
          '3657269660A466F6E742E5374796C650B0005576964746802000E5469746C654' +
          '16C69676E6D656E74070D74614C6566744A7573746966790C5469746C6543617' +
          '074696F6E0608A5CDB2A3A7C7B8B90A5469746C65436F6C6F720706636C47726' +
          '179115469746C65466F6E742E43686172736574070F44454641554C545F43484' +
          '1525345540F5469746C65466F6E742E436F6C6F720707636C576869746510546' +
          '9746C65466F6E742E48656967687402F50E5469746C65466F6E742E4E616D650' +
          '60D4D532053616E732053657269660F5469746C65466F6E742E5374796C650B0' +
          '0095461626C654E616D6506055353464D4F0756697369626C65090000'
      end
      item
        DataField = 'MG018'
        DataLength = 0
        DataScale = 0
        CheckLookup = True
        LookupType = ltDBServer
        RuleType = rtNone
        RuleValue_ = nil
        LookupTableName_ = 'INVMB'
        LookupKeyFieldPairs_ = 'MB001='#39':MG018'#39
        LookupResultField_ = 'MB001'
        LookupGridColumnDatasStr_ = 
          '$BinaryEncodeString000000030E01C40E01094669656C644E616D6506054D4' +
          '230303109416C69676E6D656E74070D74614C6566744A75737469667905436F6' +
          'C6F720707636C57686974650C466F6E742E43686172736574070F44454641554' +
          'C545F434841525345540A466F6E742E436F6C6F720707636C426C61636B0B466' +
          'F6E742E48656967687402F509466F6E742E4E616D65060D4D532053616E73205' +
          '3657269660A466F6E742E5374796C650B0005576964746802000E5469746C654' +
          '16C69676E6D656E74070D74614C6566744A7573746966790C5469746C6543617' +
          '074696F6E0604AEC6B8B90A5469746C65436F6C6F720706636C4772617911546' +
          '9746C65466F6E742E43686172736574070F44454641554C545F4348415253455' +
          '40F5469746C65466F6E742E436F6C6F720707636C5768697465105469746C654' +
          '66F6E742E48656967687402F50E5469746C65466F6E742E4E616D65060D4D532' +
          '053616E732053657269660F5469746C65466F6E742E5374796C650B000954616' +
          '26C654E616D650605494E564D420756697369626C65090001094669656C644E6' +
          '16D6506054D4230303209416C69676E6D656E74070D74614C6566744A7573746' +
          '9667905436F6C6F720707636C57686974650C466F6E742E43686172736574070' +
          'F44454641554C545F434841525345540A466F6E742E436F6C6F720707636C426' +
          'C61636B0B466F6E742E48656967687402F509466F6E742E4E616D65060D4D532' +
          '053616E732053657269660A466F6E742E5374796C650B0005576964746802000' +
          'E5469746C65416C69676E6D656E74070D74614C6566744A7573746966790C546' +
          '9746C6543617074696F6E0604A657BAD90A5469746C65436F6C6F720706636C4' +
          '7726179115469746C65466F6E742E43686172736574070F44454641554C545F4' +
          '34841525345540F5469746C65466F6E742E436F6C6F720707636C57686974651' +
          '05469746C65466F6E742E48656967687402F50E5469746C65466F6E742E4E616' +
          'D65060D4D532053616E732053657269660F5469746C65466F6E742E5374796C6' +
          '50B00095461626C654E616D650605494E564D420756697369626C65090000'
        ChildRefValsStr_ = 
          '$BinaryEncodeString000000003C100D0E01044E616D6506064D47303138430' +
          '9446174614669656C6406064D4730313843114C6F6F6B7570526573756C74466' +
          '9656C6406054D423030320000'
      end>
    Left = 791
    Top = 580
  end
  object Out2PrintData: TInfoClientDataSet
    Aggregates = <>
    AutoCalcFields = False
    Params = <>
    ProviderName = 'GLModule.qrySelect'
    DisableTranslate = False
    Left = 13
    Top = 585
  end
  object cdsQuery3: TInfoClientDataSet
    Aggregates = <>
    Params = <>
    ProviderName = 'GLModule.qrySelect'
    DisableTranslate = False
    Left = 58
    Top = 581
  end
  object cdsOp: TInfoClientDataSet
    Aggregates = <>
    AutoCalcFields = False
    CommandText = 'select MV001,MV002 from CMSMV(nolock)'#13#10'where 1=0'#13#10
    Params = <>
    ProviderName = 'GLModule.qrySelect'
    SQL.Strings = (
      'select MV001,MV002 from CMSMV(nolock)'
      'where 1=0')
    DisableTranslate = False
    Left = 861
    Top = 583
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
    Left = 902
    Top = 581
  end
  object cdsAllowIP: TInfoClientDataSet
    Aggregates = <>
    CommandText = 
      'SELECT LOOKUP_VALUE, LOOKUP_CODE '#13#10'FROM SSFTP(NOLOCK) '#13#10'WHERE LO' +
      'OKUP_CATALOG='#39'ALLOW_IP'#39' AND ENABLED='#39'Y'#39' '#13#10'ORDER BY LOOKUP_CODE '#13 +
      #10
    Params = <>
    ProviderName = 'GLModule.qrySelect'
    SQL.Strings = (
      'SELECT LOOKUP_VALUE, LOOKUP_CODE '
      'FROM SSFTP(NOLOCK) '
      'WHERE LOOKUP_CATALOG='#39'ALLOW_IP'#39' AND ENABLED='#39'Y'#39' '
      'ORDER BY LOOKUP_CODE ')
    DisableTranslate = False
    Left = 785
    Top = 415
    InfoClient_ = {
      9619E0BD010000001800000002000000000003000000B0000C4C4F4F4B55505F
      56414C554501004900000002000753554254595045020049000A004669786564
      43686172000557494454480200020014000B4C4F4F4B55505F434F4445010049
      00000002000753554254595045020049000A0046697865644368617200055749
      445448020002000F0002000D44454641554C545F4F5244455202008200010000
      000200044C4349440400010000000000}
    InfoClient_Struct = {
      094669656C64446566730E01044E616D65060C4C4F4F4B55505F56414C554508
      446174615479706507086674537472696E670453697A6502140001044E616D65
      060B4C4F4F4B55505F434F444508446174615479706507086674537472696E67
      0453697A65020F0000095461626C654E616D65060D5353465450284E4F4C4F43
      4B290E5461626C654E616D65416C696173060254310C50726F76696465724E61
      6D65060971727953656C6563741245787472614C6566744A6F696E4461746173
      0E0000}
  end
  object dsAllowIP: TDataSource
    DataSet = cdsAllowIP
    Left = 828
    Top = 413
  end
  object cdsAppurtenance: TInfoClientDataSet
    Aggregates = <>
    CommandText = 
      'SELECT VF003,VF004,SPACE(40) VF003x'#13#10'FROM SSFVF(NOLOCK) '#13#10'WHERE ' +
      'VF005='#39'Y'#39' '#13#10' AND VF001=:VF001 '#13#10' AND VF002=:VF002 '#13#10
    Params = <
      item
        DataType = ftString
        Name = 'VF001'
        ParamType = ptInput
        Value = ''
      end
      item
        DataType = ftString
        Name = 'VF002'
        ParamType = ptInput
        Value = ''
      end>
    ProviderName = 'GLModule.qrySelect'
    BeforeOpen = cdsAppurtenanceBeforeOpen
    DisableTranslate = False
    Left = 866
    Top = 640
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
      6502280000095461626C654E616D65060D5353465646284E4F4C4F434B290E54
      61626C654E616D65416C696173060254310C50726F76696465724E616D650609
      71727953656C6563741245787472614C6566744A6F696E44617461730E0000}
  end
  object DataSource2: TDataSource
    Left = 906
    Top = 640
  end
end
