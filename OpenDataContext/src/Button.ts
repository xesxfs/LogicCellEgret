class Button extends egret.Sprite {
	public mode: number = 0;
	public constructor() {
		super();
	}

	public drawRect(cl: number, w: number, h: number) {
		this.graphics.lineStyle(1, 0xFFFFFF);
		this.graphics.beginFill(cl);
		this.graphics.drawRect(0, 0, w, h);
		this.graphics.endFill();
	}

	public setText(txt: string, size: number = 26) {
		let tf = new egret.TextField();
		tf.size = size;
		tf.text = txt;
		tf.x = (this.width - tf.width) >> 1;
		tf.y = (this.height - tf.height) >> 1;
		this.addChild(tf);
	}


}