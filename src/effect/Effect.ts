class Effect extends egret.Sprite {
	public constructor() {
		super();
	}

	public effectNumber: number;

	protected w: number;

	protected h: number;

	public frameCnt: number = 0;

	public endCnt: number;

	public doDraw: boolean = false;

	// public matrix: egret.Matrix;

	public color: number;

	public drawBorderRect(x: number, y: number, width: number, height: number, thickness: number, color: number) {
		this.graphics.clear();
		this.graphics.beginFill(0x00000, 0);
		this.graphics.lineStyle(thickness, this.color);
		this.graphics.drawRect(0, 0, width, height);
		this.graphics.endFill();

	}

	public update(): boolean {
		return false;
	}
}