class Grid extends egret.Sprite {
	public type: number;

	public x: number;

	public y: number;

	public gridX: number;

	public gridY: number;

	public block: Block;

	public constructor(gx: number, gy: number, x: number, y: number) {
		super();
		this.gridX = gx;
		this.gridY = gy;
		this.x = x;
		this.y = y;
	}

	public setBlock(block: Block): void {
		this.block = block;
		block.gridX = this.gridX;
		block.gridY = this.gridY;
		// let point = this.localToGlobal(this.x, this.y);
		// block.x = point.x;
		// block.y = point.y;
		block.x = this.parent.x + this.x;
		block.y = this.parent.y + this.y;
	}

	public drawBroderRect() {
		this.graphics.beginFill(0x00000);
		this.graphics.lineStyle(4, 587202559);
		this.graphics.drawRect(0, 0, 40, 40);
		this.graphics.endFill();

	}
}
