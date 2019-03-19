class SetPuzzleScene extends Scene {
	private field: Field;
	public undoBmd: eui.Image
	public hudManager: HudManagerScore;

	public constructor(stageData: StageData) {
		super();
		Status.mode = GameMode.Puzzle;
		this.addChild(this.field = new Field(stageData));
		let undoBitmap = Resource.getBlockChips(0, 220, 22, 22);
		undoBitmap.width = 110;
		undoBitmap.height = 110;
		undoBitmap.x = 410;
		App.undoBitmap = undoBitmap;
		this.addChild(undoBitmap);
		this.undoBmd = undoBitmap;

		let backBitmap = Resource.getBlockChips(22, 220, 22, 22);
		backBitmap.width = 110;
		backBitmap.height = 110;
		backBitmap.x = 130;
		App.BackButton = backBitmap;
		this.setTopPos();
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

	public setTopPos() {
		this.field.top = (4 - this.field.fieldH) * 70 + 130;
		if (this.field.fieldH === 4) {
			this.field.top -= 10;
		}
		let offY = 0;
		this.field.fieldH === 4 ? offY = 25 : offY = 30;
		BlockManager.top = this.field.top + this.field.height + offY;
		// App.BackButton.horizontalCenter = 0;

		App.BackButton.top = BlockManager.top + 110 + offY;
		App.undoBitmap.top = App.BackButton.top;
	}

	public update() {
		BlockManager.update();
		EffectManager.update();
		App.BackMenu.update();
		Status.update();
		this.hudManager.update();
	}
}