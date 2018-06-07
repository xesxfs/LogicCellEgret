class SceneManagerClass extends eui.Component {
	public constructor() {
		super();
		this.percentHeight = 100;
		this.percentWidth = 100;
	}
	public scene: Scene;

	private nextScene: Scene;


	public newScene(next: Scene) {
		this.nextScene = next;
		if (this.scene != null) {
			egret.Tween.get(this.scene).to({ alpha: 0 }, 300, egret.Ease.elasticOut).call(this.next, this);
		}
		else {
			this.next();
		}
	}

	public next() {
		var sceneId = 0;
		this.removeChildren();
		this.scene = null;
		this.scene = this.nextScene;
		if (this.scene instanceof SetPuzzleScene) {
			sceneId = 0;
		}
		else if (this.scene instanceof SetScoreScene) {
			sceneId = 1;
		}
		else if (this.scene instanceof SetScore30Scene) {
			// SetScore30Scene.cnt = 30;
			// SetScore30Scene.isFinish = false;
			sceneId = 2;
		}
		else if (this.scene instanceof SetScore1minScene) {
			// SetScore1minScene.cnt = -95;
			// SetScore1minScene.isFinish = false;
			sceneId = 3;
		}
		else if (this.scene instanceof SetScore1comboScene) {
			// SetScore1comboScene.isFinish = false;
			sceneId = 4;
		}
		// Status.reset(_loc1_);
		// this.nextScene.alpha = 0;
		// KTW.to(this.nextScene, 0.3, { "alpha": 1 }, Linear.easeOut, null, 0.2);
		this.addChild(this.scene);
	}

}

var SceneManager: SceneManagerClass = new SceneManagerClass();