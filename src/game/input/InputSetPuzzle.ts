class InputSetPuzzleClass extends Input {
	private mouseIndexX: number;

	private mouseIndexY: number;

	public field: Field;

	public fieldRect: egret.Rectangle;

	public inventoryPadding: number;

	public constructor() {
		super();
	}

	protected mouseDownEvent(e: egret.TouchEvent): void {
		if (e.stageY > 240 && e.stageY < 285) {
			let selectBlock = ~~(e.stageX / 48);
			BlockManager.mouseX = e.stageX;
			BlockManager.mouseY = e.stageY;
			BlockManager.mouseDownInventory(selectBlock);
		}
	}

	protected mouseMoveEvent(e: egret.TouchEvent): void {
		BlockManager.mouseX = e.stageX;
		BlockManager.mouseY = e.stageY;
	}

	protected mouseUpEvent(e: egret.TouchEvent): void {
		if (!BlockManager.mouseDownBlock) {
			return;
		}
		if (this.fieldRect.containsPoint(egret.Point.create(e.stageX, e.stageY))) {
			let gx = (e.stageX - this.field.x) / 45;
			let gy = (e.stageY - this.field.y) / 45;
			this.field.mouseUpField(~~gx, ~~gy);
		}
		else {
			BlockManager.mouseUp();
		}

	}

	protected mouseOutEvent(e: egret.TouchEvent): void {
		if (this.fieldRect.containsPoint(egret.Point.create(e.stageX, e.stageY))) {
			let gx = (e.stageX - this.field.x) / 45;
			let gy = (e.stageY - this.field.y) / 45;
			this.field.mouseUpField(gx, gy);
		}
		else {
			BlockManager.mouseUp();
		}
	}
}
var InputSetPuzzle: InputSetPuzzleClass = new InputSetPuzzleClass();