class InputSetPuzzleClass extends Input {

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
		} else if (e.stageY >= 1000 && e.stageX >= 130 && e.stageX <= (130 + 110)) {
			App.BackMenu.updateStart();
		} else if (e.stageY >= 1000 && e.stageX >= 410 && e.stageX <= (410 + 110)) {
			BlockManager.undo();
		}
	}

	protected mouseMoveEvent(e: egret.TouchEvent): void {
		// console.log(e.stageX);
		BlockManager.mouseX = e.stageX;
		BlockManager.mouseY = e.stageY;
	}

	protected mouseUpEvent(e: egret.TouchEvent): void {
		App.BackMenu.updateFinish();
		if (!BlockManager.mouseDownBlock) {
			return;
		}
		InputSetPuzzle.fieldRect = new egret.Rectangle(this.field.x, this.field.y, this.field.width, this.field.height);
		if (this.fieldRect.containsPoint(egret.Point.create(e.stageX, e.stageY))) {
			console.log("containsPoint")
			let gx = ~~(e.stageX - this.field.x) / (120 + 22);
			let gy = ~~(e.stageY - this.field.y) / (120 + 18);
			/**这里需要反过来，对于数组坐标系 */
			this.field.mouseUpField(~~gy, ~~gx);
		}
		else {
			BlockManager.mouseUp();
		}

	}

	protected mouseOutEvent(e: egret.TouchEvent): void {
		if (SceneManager.scene instanceof SetPuzzleScene)
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