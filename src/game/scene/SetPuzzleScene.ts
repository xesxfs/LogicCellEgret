class SetPuzzleScene extends Scene {
	private field: Field;
	public undoBmd: eui.Image
	public hudManager: HudManagerScore;

	public constructor(stageData: StageData) {
		super();
		this.addChild(this.field = new Field(stageData));

		let undoBitmap = Resource.getBlockChips(0, 220, 22, 22);
		undoBitmap.width = 110;
		undoBitmap.height = 110;
		undoBitmap.x = 410;
		undoBitmap.y = 1000;
		this.addChild(undoBitmap);
		this.undoBmd = undoBitmap;

		let backBitmap = Resource.getBlockChips(22, 220, 22, 22);
		backBitmap.width = 110;
		backBitmap.height = 110;
		backBitmap.x = 130;
		backBitmap.y = 1000;
		this.addChild(backBitmap);

		this.addChild(BlockManager);
		this.addChild(this.hudManager = new HudManagerScore());
		this.addChild(EffectManager);
		InputSetPuzzle.field = this.field;
		InputSetPuzzle.fieldRect = new egret.Rectangle(this.field.x, this.field.y, this.field.width, this.field.height);
		InputSetPuzzle.blockRect = new egret.Rectangle(BlockManager.x, BlockManager.y, BlockManager.width, BlockManager.height);
		InputManager.newInput(InputSetPuzzle);
		this.addChild(App.BackMenu);
		this.hudManager.stageNOLab.text = stageData.stageNo.toString();
	}
	public update() {
		BlockManager.update();
		EffectManager.update();
		App.BackMenu.update();
		this.hudManager.update();

	}
}