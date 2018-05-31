class SetPuzzleScene extends Scene {
	private field: Field;
	public constructor(stageData: StageData) {
		super();
		this.addChild(this.field = new Field(stageData));
		this.addChild(BlockManager);
		InputSetPuzzle.field = this.field;
		InputSetPuzzle.fieldRect = new egret.Rectangle(this.field.x, this.field.y, this.field.width, this.field.height);
		InputSetPuzzle.blockRect = new egret.Rectangle(BlockManager.x, BlockManager.y, BlockManager.width, BlockManager.height);
		InputManager.newInput(InputSetPuzzle);
	}
	public update() {
		BlockManager.update();
		// EffectManager.update();
		// Status.update();
		// BackMenuBitmap.update();
		// this.hudManager.update();

	}
}