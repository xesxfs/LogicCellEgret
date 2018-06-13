class CountDownSprite extends eui.Group {
	public constructor() {
		super();
		this.percentWidth = 100;
		this.percentHeight = 100;
		this.touchEnabled = true;
		this.touchChildren = false;
		this.touchThrough = false;
		this.drawRect();
	}
	private cdLab: eui.Label;
	private drawRect() {
		let rect = new eui.Rect(250, 120);
		rect.fillColor = 0xB0B0AF;
		rect.horizontalCenter = 0;
		rect.verticalCenter = 0;

		this.cdLab = new eui.Label();
		this.cdLab.text = "3";
		this.cdLab.textColor = 0;
		this.cdLab.horizontalCenter = 0;
		this.cdLab.verticalCenter = 0;

		this.addChild(rect);
		this.addChild(this.cdLab);

		egret.Tween.get(this).wait(1500).call(() => { this.cdLab.text = "2"; }).wait(1000)
			.call(() => { this.cdLab.text = "1"; }).wait(1000).call(() => { this.cdLab.text = "start"; })
			.to({ alpha: 0 }, 1000, egret.Ease.elasticIn).call(() => { this.parent && (this.parent.removeChild(this)) });

	}
}