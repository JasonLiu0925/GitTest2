unit dmcSSFI704u;

interface

uses
  Windows, Messages, SysUtils, Classes, Graphics, Controls, Forms, Dialogs,
  MenuDM, CacheCmp, ExpCacheComp;

type
  TcSSFI704DMIntf = class(TMenuDMIntf)
    ccCMSMQ: TClientCacheComp;
    ccCMSMB: TClientCacheComp;
    ccSIMMH: TClientCacheComp;
    ccCOPMA: TClientCacheComp;
  private
    { Private declarations }
  public
    { Public declarations }
  end;

var
  cSSFI704DMIntf: TcSSFI704DMIntf;

implementation

{$R *.DFM}

uses
  CommonUtils;

initialization
  RegisterPackageClass(TcSSFI704DMIntf);
end.

