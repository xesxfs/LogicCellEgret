class InputSetPuzzleClass extends Input {
	private mouseIndexX: number;

	private mouseIndexY: number;

	public field: Field;

	public fieldRect: egret.Rectangle;

	public blockRect: egret.Rectangle;

	public inventoryPadding: number;

	public constructor() {
		super();
	}

	protected mouseDownEvent(e: egret.TouchEvent): void {
		this.blockRect = new egret.Rectangle(BlockManager.x, BlockManager.y, BlockManager.width, BlockManager.height);
		if (this.blockRect.containsPoint(egret.Point.create(e.stageX, e.stageY))) {
			// console.log("down0");
	
			let selectBlock = ~~((e.stageX - this.blockRect.x) / 120);
			BlockManager.mouseX = e.stageX;
			BlockManager.mouseY = e.stageY;
			BlockManager.mouseDownInventory(selectBlock);
			// console.log("down0", selectBlock);
		}
	}

	protected mouseMoveEvent(e: egret.TouchEvent): void {
		// console.log(e.stageX);
		BlockManager.mouseX = e.stageX;
		BlockManager.mouseY = e.stageY;
	}

	protected mouseUpEvent(e: egret.TouchEvent): void {
		if (!BlockManager.mouseDownBlock) {
			return;
		}
		InputSetPuzzle.fieldRect = new egret.Rectangle(this.field.x, this.field.y, this.field.width, this.field.height);
		if (this.fieldRect.containsPoint(egret.Point.create(e.stageX, e.stageY))) {

			let gx = (e.stageX - this.field.x) / 120;
			let gy = (e.stageY - this.field.y) / 120;
			this.field.mouseUpField(~~gx, ~~gy);
		}
		else {
			BlockManager.mouseUp();
		}

	}

	protected mouseOutEvent(e: egret.TouchEvent): void {
		if (this.fieldRect.containsPoint(egret.Point.create(e.stageX, e.stageY))) {
			let gx = (e.stageX - this.field.x) / 120;
			let gy = (e.stageY - this.field.y) / 120;
			this.field.mouseUpField(gx, gy);
		}
		else {
			BlockManager.mouseUp();
		}
	}
}
var InputSetPuzzle: InputSetPuzzleClass = new InputSetPuzzleClass();