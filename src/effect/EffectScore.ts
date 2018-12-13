class EffectScore extends Effect {
	private onComPlete: boolean = false;
	private scoreLab: eui.Label;
	public constructor(x: number, y: number, score: number) {
		super();
		this.endCnt = 80;
		this.scoreLab = new eui.Label();
		this.scoreLab.text = "+" + score;
		this.x = x;
		this.y = y;
		this.addChild(this.scoreLab);
		this.start();
	}
	public update(): boolean {
		return this.onComPlete;
	}
	private start() {
		egret.Tween.get(this).to({ y: this.y - 40, }, this.endCnt * 10).call(() => { this.onComPlete = true })
	}
}