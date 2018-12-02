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
			SetScore30Scene.cnt = 30;
			SetScore30Scene.isFinish = false;
			sceneId = 2;
		}
		else if (this.scene instanceof SetScore1minScene) {
			SetScore1minScene.cnt = -248;
			SetScore1minScene.isFinish = false;
			sceneId = 3;
		}
		else if (this.scene instanceof SetScore1comboScene) {
			SetScore1comboScene.isFinish = false;
			sceneId = 4;
		}
		Status.reset(sceneId);
		this.nextScene.alpha = 0;
		egret.Tween.get(this.nextScene).to({ alpha: 1 }, 200, egret.Ease.elasticOut);
		this.addChild(this.scene);
	}

}

var SceneManager: SceneManagerClass = new SceneManagerClass();