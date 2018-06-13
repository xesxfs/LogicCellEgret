class Block extends eui.Component {

	public static COLOR: Array<number> = [0x484CFF, 0xFF3030, 0x37FF48, 0xFFFF34, 0xFF6EFF];
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
			this.vecLayer.push(~~rest[i]);
			i++;
		}
	}

	public removeLayer(): boolean {
		this.removeFlag = false;
		this.drawPhase = 3;
		let resultPoint: egret.Point;
		resultPoint = this.localToGlobal(this.x, this.y);
		EffectManager.addEffect(new EffectLayerErase(resultPoint.x, resultPoint.y, Block.COLOR[this.vecLayer[0]]));
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
		this.removeChildren();
		i = 0;
		while (i < length) {
			let blockChip = Resource.getBlockChips(((2 - i) * 5 + this.drawPhase) * 44, this.vecLayer[i] * 44)
			blockChip.width = 120;
			blockChip.height = 120;
			this.addChild(blockChip);
			i++;
		}
	}

	public update() {
		this.draw();
	}
}