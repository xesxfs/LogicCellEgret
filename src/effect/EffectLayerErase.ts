class EffectLayerErase extends Effect {
	private onComPlete: boolean = false;
	public constructor(x: number, y: number, color: number) {
		super();
		this.endCnt = 25;
		this.x = x;
		this.y = y;
		this.color = color;
		this.drawBorderRect(0, 0, 120, 120, 10, this.color);
		this.x = x + (this.width >> 1);
		this.y = y + (this.height >> 1);
		this.anchorOffsetX = this.width >> 1;
		this.anchorOffsetY = this.height >> 1;
		this.start();
	}

	public update(): boolean {
		return this.onComPlete;
	}

	private start() {
		// TweenLite.to(this, this.endCnt / 60, { scaleX: 6, scaleY: 6, onComplete: () => { this.onComPlete = true; } });
		egret.Tween.get(this).to({ scaleX: 6, scaleY: 6, }, this.endCnt * 10).call(() => { this.onComPlete = true })
	}
}