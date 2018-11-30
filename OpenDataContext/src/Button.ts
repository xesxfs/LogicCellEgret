class Button extends egret.Sprite {
	public constructor() {
		super();
	}

	public drawRect(cl: number, w: number, h: number) {
		this.graphics.lineStyle(1, 0xFFFFFF);
		this.graphics.beginFill(cl);
		this.graphics.drawRect(0, 0, w, h);
		this.graphics.endFill();
	}

	public setText(txt: string) {
		let tf = new egret.TextField();
		tf.size = 26;
		tf.text = txt;
		// tf.x = this.width >> 1;
		// tf.y = this.height >> 1;
		this.addChild(tf);
	}


}