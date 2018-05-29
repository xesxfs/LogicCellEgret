class Resource {
	public static StringChip: string = "";
	public static stringChip: egret.BitmapData;
	public static StringChip714: any;
	public static stringChip714: egret.BitmapData;
	public static BorderStringChip: any;
	public static borderStringChip: egret.BitmapData;
	public static LogicalCell: any;
	public static logicalCell: egret.BitmapData;
	public static Chip: any;
	public static chip: egret.BitmapData;
	public static Icon48: any;
	public static icon48: egret.BitmapData;
	public static SoundC: any;
	public static soundC: egret.Sound;
	public static SoundD: any;
	public static soundD: egret.Sound;
	public static SoundE: any;
	public static soundE: egret.Sound;
	public static SoundF: any;
	public static soundF: egret.Sound;
	public static SoundG: any;
	public static soundG: egret.Sound;
	public static SoundA: any;
	public static soundA: egret.Sound;
	public static SoundB: any;
	public static soundB: egret.Sound;
	public static SoundCC: any;
	public static soundCC: egret.Sound;
	public static TitleLogo: any;
	public static titleLogo: egret.BitmapData;


	public static ChipsSpriteSheet: egret.SpriteSheet;

	public constructor() {
	}

	public static getBlockChips(x: number, y: number): egret.Bitmap {
		if (!this.ChipsSpriteSheet) this.ChipsSpriteSheet = new egret.SpriteSheet(RES.getRes("Chip_png"))
		let chip = this.ChipsSpriteSheet.getTexture(x + "_" + y);
		if (!chip) {
			this.ChipsSpriteSheet.createTexture(x + "_" + y, x, y, 44, 44);
			chip = this.ChipsSpriteSheet.getTexture(x + "_" + y);
		};
		return new egret.Bitmap(chip);
	}

}
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
