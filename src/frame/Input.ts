class Input extends eui.Group {
	public constructor() {
		super();
		// this.graphics.beginFill(0, 0);
		// this.graphics.drawRect(0, 0, 480, 762);
		this.percentWidth = 100;
		this.percentHeight = 100;
		this.addEventListener("touchBegin", this.mouseDownEvent, this);
		this.addEventListener("touchEnd", this.mouseUpEvent, this);
		this.addEventListener("touchMove", this.mouseMoveEvent, this);
		this.addEventListener("touchReleaseOutside", this.mouseOutEvent, this);
		this.touchEnabled = true;
	}

	protected mouseDownEvent(param1: egret.TouchEvent): void {
	}

	protected mouseUpEvent(param1: egret.TouchEvent): void {
	}

	protected mouseOutEvent(param1: egret.TouchEvent): void {
	}

	protected mouseMoveEvent(e: egret.TouchEvent): void {

	}
}