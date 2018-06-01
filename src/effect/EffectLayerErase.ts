class EffectLayerErase extends Effect {
	public constructor(x: number, y: number, color: number) {
		super();
		this.endCnt = 25;
		this.x = x;
		this.y = y;
		this.matrix = new egret.Matrix();
		this.doDraw = true;
		this.drawBorderRect(0, 0, 120, 120, 10, this.color);
	}

	public update(): boolean {
		let xoff = 1 + this.frameCnt * 0.5;
		let yoff = 1 - xoff;
		// this.matrix.createBox(this.frameCnt, this.frameCnt);
		let matrix = this.matrix.copyFrom(this.matrix);
		// matrix.scale(this.frameCnt, this.frameCnt)
		this.matrix = matrix;
		this.scaleX = 2;
		this.scaleY = 2;
		// this.drawBorderRect(0, 0, 120, 120, 10, this.color % 16777216 + (250 - this.frameCnt * 10) * 16777216);
		if (this.endCnt === this.frameCnt) {
			return true;
		}
		this.frameCnt++;
		return false;
	}
}