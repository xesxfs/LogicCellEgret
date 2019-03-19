class SetScore30Scene extends Scene {
	public field: Field;
	public static cnt: number;
	public static isFinish: Boolean = false;

	public hudManager: HudManagerScore;
	public constructor() {
		super();
		Status.mode = GameMode.Score30;
		this.addChild(this.field = new Field(new StageData("0,0,ScoreAttack,3,3,111111111")));
		let backBitmap = Resource.getBlockChips(22, 220, 22, 22);
		backBitmap.width = 110;
		backBitmap.height = 110;
		App.BackButton = backBitmap;
		this.setTopPos();
		this.addChild(backBitmap);
		BlockManager.addRandomInventoryBlock(0);
		BlockManager.addRandomInventoryBlock(1);
		BlockManager.addRandomInventoryBlock(2);
		this.addChild(BlockManager);
		this.addChild(this.hudManager = new HudManagerScore());
		this.addChild(App.BackMenu);
		this.addChild(EffectManager);
		InputManager.newInput(InputSetScore);
		InputSetScore.field = this.field;
	}

	public setTopPos() {
		this.field.top = 200;
		BlockManager.top = this.field.top + this.field.height + 30;
		App.BackButton.horizontalCenter = 0;
		App.BackButton.top = BlockManager.top + 110 + 30;
	}

	public update() {
		BlockManager.update();
		EffectManager.update();
		App.BackMenu.update();
		Status.update();
		this.hudManager.update();
	}
}