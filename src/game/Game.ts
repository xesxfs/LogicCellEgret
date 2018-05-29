class Game extends egret.Sprite {
	public constructor() {
		super();
		this.addChild(SceneManager);
		SceneManager.newScene(new TitleScene());
		SceneManager.touchChildren = false;
		SceneManager.touchEnabled = false;
		this.addChild(InputManager);
		this.addEventListener(egret.Event.ENTER_FRAME, this.ent, this);
		SceneManager.newScene(new SetPuzzleScene(StageManager.getStage(2)));
	}

	private ent(e: egret.Event) {
		SceneManager.scene.update();
	}
}