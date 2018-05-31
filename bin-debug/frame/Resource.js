var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Resource = (function () {
    function Resource() {
    }
    Resource.getBlockChips = function (x, y) {
        if (!this.ChipsSpriteSheet)
            this.ChipsSpriteSheet = new egret.SpriteSheet(RES.getRes("Chip_png"));
        var chip = this.ChipsSpriteSheet.getTexture(x + "_" + y);
        if (!chip) {
            this.ChipsSpriteSheet.createTexture(x + "_" + y, x, y, 44, 44);
            chip = this.ChipsSpriteSheet.getTexture(x + "_" + y);
        }
        ;
        return new eui.Image(chip);
    };
    Resource.StringChip = "";
    return Resource;
}());
__reflect(Resource.prototype, "Resource");
// Resource.StringChip = Resource_StringChip;
// Resource.stringChip = (<flash.Bitmap>(new Resource.StringChip())).bitmapData;
// Resource.StringChip714 = Resource_StringChip714;
// Resource.stringChip714 = (<flash.Bitmap>(new Resource.StringChip714())).bitmapData;
// Resource.BorderStringChip = Resource_BorderStringChip;
// Resource.borderStringChip = (<flash.Bitmap>(new Resource.BorderStringChip())).bitmapData;
// Resource.LogicalCell = Resource_LogicalCell;
// Resource.logicalCell = (<flash.Bitmap>(new Resource.LogicalCell())).bitmapData;
// Resource.Chip = Resource_Chip;
// Resource.chip = (<flash.Bitmap>(new Resource.Chip())).bitmapData;
// Resource.Icon48 = Resource_Icon48;
// Resource.icon48 = (<flash.Bitmap>(new Resource.Icon48())).bitmapData;
// Resource.SoundC = Resource_SoundC;
// Resource.soundC = new Resource.SoundC();
// Resource.SoundD = Resource_SoundD;
// Resource.soundD = new Resource.SoundD();
// Resource.SoundE = Resource_SoundE;
// Resource.soundE = new Resource.SoundE();
// Resource.SoundF = Resource_SoundF;
// Resource.soundF = new Resource.SoundF();
// Resource.SoundG = Resource_SoundG;
// Resource.soundG = new Resource.SoundG();
// Resource.SoundA = Resource_SoundA;
// Resource.soundA = new Resource.SoundA();
// Resource.SoundB = Resource_SoundB;
// Resource.soundB = new Resource.SoundB();
// Resource.SoundCC = Resource_SoundCC;
// Resource.soundCC = new Resource.SoundCC();
// Resource.TitleLogo = Resource_TitleLogo;
// Resource.titleLogo = (<flash.Bitmap>(new Resource.TitleLogo())).bitmapData;
