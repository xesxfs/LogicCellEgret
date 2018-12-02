class SetScore1minScene extends Scene {
	public field: Field;
	public static cnt: number;
	public static isFinish: Boolean = false;

	public hudManager: HudManagerScore;
	public constructor() {
		super();
		Status.mode = GameMode.Score1M;
		this.addChild(this.field = new Field(new StageData("0,0,ScoreAttack,3,3,111111111")));
		let backBitmap = Resource.getBlockChips(22, 220, 22, 22);
		backBitmap.width = 110;
		backBitmap.height = 110;
		backBitmap.x = 265;
		backBitmap.y = 1000;
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
		InputManager.addChild(new CountDownSprite());
	}

	public update() {
		if (!SetScore1minScene.isFinish) {
			SetScore1minScene.cnt++;
		}
		if (!SetScore1minScene.isFinish && this.field.matchingJob == null && SetScore1minScene.cnt >= 3600) {
			SetScore1minScene.isFinish = true;
			BlockManager.finish(SetScore1minScene);
		}
		BlockManager.update();
		EffectManager.update();
		App.BackMenu.update();
		Status.update();
		this.hudManager.update();
	}
}