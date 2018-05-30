class BitmapDisplay extends egret.Sprite {
	private text: egret.TextField;
	public constructor(w: number, h: number, color: number) {
		super();
		this.drawRect(w, h, color);
	}

	private drawRect(w: number, h: number, color: number) {
		this.graphics.beginFill(color);
		this.graphics.drawRect(0, 0, w, h);
		this.graphics.endFill();
	}


	public drawBorderRect(param1: number, param2: number, param3: number, param4: number, param5: number, param6: number, param7: number) {
		// this.graphics.drawRect()
	}

	public drawString(str: string, scaleX: number, scaleY: number, color: number) {
		if (!this.text) this.text = new egret.TextField();
		this.text.text = str;
		this.text.textColor = color;
		this.addChild(this.text);
	}

}