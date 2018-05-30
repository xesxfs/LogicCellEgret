class BackMenuBitmapClass extends BitmapDisplay {
	// private  job:KTJob;

	private cnt: number = 0;

	private updateFlag: boolean = false;

	public menuRect: egret.Rectangle;

	public constructor() {
		super(90, 44, 4290493371);
		this.alpha = 0.9;
		// this.drawString("")
		this.y = -128;
		this.x = 75;

	}
}

var BackMenuBitmap: BackMenuBitmapClass = new BackMenuBitmapClass();