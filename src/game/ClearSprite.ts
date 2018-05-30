class ClearSprite extends egret.Sprite {
	private clearBmd: BitmapDisplay;
	private menuBmd: BitmapDisplay;
	private retryBmd: BitmapDisplay;
	private nextBmd: BitmapDisplay;

	public constructor(param1: boolean = false) {
		super();
		var _self__ = this;	
		this.touchChildren = false;
		this.touchEnabled = false;
		this.alpha = 0.9;
		this.clearBmd = new BitmapDisplay(90, 44, 4290493371);
		this.clearBmd.x = 46;
		// this.clearBmd.y = -44;
		this.menuBmd = new BitmapDisplay(44, 44, 4290493371);
		this.menuBmd.x = 69;
		// this.menuBmd.y = -128;
		this.retryBmd = new BitmapDisplay(44, 44, 4290493371);
		this.retryBmd.x = 115;
		// this.retryBmd.y = -128;
		this.nextBmd = new BitmapDisplay(44, 44, 4290493371);
		this.nextBmd.x = 161;
		// this.nextBmd.y = -128;
		if (param1) {
			this.clearBmd.drawString("Perfect", -1, -1, 2236962);
		}
		else {
			this.clearBmd.drawString("Clear", -1, -1, 2236962);
		}
		this.menuBmd.drawString("Menu", -1, -1, 2236962);
		this.retryBmd.drawString("Retry", -1, -1, 2236962);
		if (StageManager.index == 24) {
			this.nextBmd.drawString("Tweet", -1, -1, 2236962);
		}
		else {
			this.nextBmd.drawString("Next", -1, -1, 2236962);
		}
		_self__.addChild(this.clearBmd);
		_self__.addChild(this.menuBmd);
		_self__.addChild(this.retryBmd);
		_self__.addChild(this.nextBmd);
		this.x = 29;
		// KTW.to(this.clearBmd,0.5,{"y":141,"x":46},net.kawa.tween.easing.Quint.easeOut);
		// KTW.to(this.clearBmd,0.5,{"x":-23},net.kawa.tween.easing.Quint.easeOut,null,0.6);
		// KTW.to(this.menuBmd,0.5,{"y":141},net.kawa.tween.easing.Quint.easeOut,null,0.6);
		// KTW.to(this.retryBmd,0.5,{"y":141},net.kawa.tween.easing.Quint.easeOut,null,0.8);
		// KTW.to(this.nextBmd,0.5,{"y":141},net.kawa.tween.easing.Quint.easeOut,null,1);
	}

}