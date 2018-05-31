class Game extends eui.Component {
	public constructor() {
		super();
		this.percentHeight = 100;
		this.percentWidth = 100;
		this.addChild(SceneManager);
		SceneManager.newScene(new TitleScene());
		SceneManager.touchChildren = false;
		SceneManager.touchEnabled = false;
		this.addChild(InputManager);
		this.addEventListener(egret.Event.ENTER_FRAME, this.ent, this);
		SceneManager.newScene(new SetPuzzleScene(StageManager.getStage(0)));
		this.touchChildren=true;
		
	}

	private ent(e: egret.Event) {
		SceneManager.scene.update();
	}
}