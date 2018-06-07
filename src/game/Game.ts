class Game extends eui.Component {
	public constructor() {
		super();
		this.percentHeight = 100;
		this.percentWidth = 100;
		this.addChild(SceneManager);
		this.addChild(InputManager);
		SceneManager.newScene(new SelectScene());
		this.addEventListener(egret.Event.ENTER_FRAME, this.ent, this);
		// this.addChild(new ClearSprite());
		// this.touchChildren = true;

	}

	private ent(e: egret.Event) {
		SceneManager.scene.update();
	}
}