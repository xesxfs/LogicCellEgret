class Resource {


	public static sounds: Array<egret.Sound>

	public static ChipsSpriteSheet: egret.SpriteSheet;

	public static Instance: Resource = new Resource();
	public constructor() {
		if (Resource.Instance) return Resource.Instance;
	}

	public static getBlockChips(x: number, y: number): eui.Image {
		if (!this.ChipsSpriteSheet) this.ChipsSpriteSheet = new egret.SpriteSheet(RES.getRes("Chip_png"))
		let chip = this.ChipsSpriteSheet.getTexture(x + "_" + y);
		if (!chip) {
			this.ChipsSpriteSheet.createTexture(x + "_" + y, x, y, 44, 44);
			chip = this.ChipsSpriteSheet.getTexture(x + "_" + y);
		};
		return new eui.Image(chip);
	}

	public static getMusic(): Array<egret.Sound> {
		if (!this.sounds) {
			this.sounds = [RES.getRes("SoundC_mp3"), RES.getRes("SoundD_mp3"), RES.getRes("SoundE_mp3"), RES.getRes("SoundF_mp3"), RES.getRes("SoundG_mp3"), RES.getRes("SoundA_mp3"), RES.getRes("SoundB_mp3"), RES.getRes("SoundCC_mp3")];
			this.sounds.forEach((sound) => {
				sound.type = egret.Sound.EFFECT;
			})
		}
		return this.sounds;
	}

}

