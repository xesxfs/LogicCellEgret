class Game extends eui.Component {
	public constructor() {
		super();
		this.percentHeight = 100;
		this.percentWidth = 100;
		this.addChild(SceneManager);
		// SceneManager.newScene(new TitleScene());
		// SceneManager.touchChildren = false;
		// SceneManager.touchEnabled = false;

		let sid = parseInt(egret.getOption("sid"));
		if (!sid) sid = 25;
		SceneManager.newScene(new SetPuzzleScene(StageManager.getStage(sid - 1)));
		this.addChild(InputManager);
		this.addEventListener(egret.Event.ENTER_FRAME, this.ent, this);
		// this.addChild(new ClearSprite());
		// this.touchChildren = true;

	}

	private ent(e: egret.Event) {
		SceneManager.scene.update();
	}
}