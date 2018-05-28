class Input extends egret.Sprite {
	public constructor() {
		super();
		this.graphics.beginFill(0, 0);
		this.graphics.drawRect(0, 0, 480, 762);
		this.addEventListener("touchBegin", this.mouseDownEvent, this);
		this.addEventListener("touchEnd", this.mouseUpEvent, this);
		this.addEventListener("touchReleaseOutside", this.mouseOutEvent, this);
	}

	protected mouseDownEvent(param1: egret.TouchEvent): void {
	}

	protected mouseUpEvent(param1: egret.TouchEvent): void {
	}

	protected mouseOutEvent(param1: egret.TouchEvent): void {
	}
}