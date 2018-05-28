class Game extends egret.Sprite {
	public constructor() {
		super();
		this.addChild(SceneManager);
		SceneManager.newScene(new TitleScene());
		SceneManager.touchChildren = false;
		SceneManager.touchEnabled = false;
		this.addChild(InputManager);
		this.addEventListener(egret.Event.ENTER_FRAME, this.ent, this);
	}

	private ent(e: egret.Event) {
		SceneManager.scene.update();
	}
}