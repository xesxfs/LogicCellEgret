class Block extends egret.Sprite {

	// public static CHIP: egret.BitmapData = Resource.chip;
	public static COLOR: Array<number> = [4282664191, 4294919236, 4282711876, 4294967074, 4294919423];
	public vecLayer: Array<number>;
	public drawPhase: number = 8;
	public gridX: number = 0;
	public gridY: number = 0;
	public inventoryNumber: number = 0;
	public removeFlag: boolean = false;
	public constructor() {
		super();
		this.vecLayer = new Array<number>();
	}

	public setLayer(...rest) {
		var i: number = 0;
		var length: number = ~~(rest.length);
		i = 0;
		while (i < length) {
			this.vecLayer.push(rest[i]);
			i++;
		}
	}

	public removeLayer(): boolean {
		// EffectManager.addEffect(new EffectScore("" + Status.addScore(), this.gridX, this.gridY));
		this.removeFlag = false;
		this.drawPhase = 3;
		// EffectManager.addEffect(new EffectLayerErase(this.gridX, this.gridY, Block.COLOR[this.vecLayer[0]]));
		this.vecLayer.shift();
		if (this.vecLayer.length != 0) {
			this.draw();
			return false;
		}
		this.destroy();
		return true;
	}

	public destroy() {
		BlockManager.removeBlock(this);
	}

	public draw() {
		var i: number = 0;
		var length: number = this.vecLayer.length;
		if (this.drawPhase == 9) {
			return;
		}
		this.drawPhase++;
		this.graphics.clear();
		this.removeChildren();
		i = 0;
		while (i < length) {
			// this.copy(Block.CHIP, ((2 - _loc1_) * 5 + this.drawPhase) * 44, this.vecLayer[_loc1_] * 44, 44, 44);
			let blockChip = Resource.getBlockChips(((2 - i) * 5 + this.drawPhase) * 44, this.vecLayer[i] * 44)
			this.addChild(blockChip);

			i++;
		}
	}

	public update() {
		this.draw();
	}
}