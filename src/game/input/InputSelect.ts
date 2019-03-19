class InputSelectClass extends Input {
	public constructor() {
		super();
	}

	protected mouseDownEvent(e: egret.TouchEvent) {
		if (SceneManager.scene instanceof SelectScene) {
			let scene = SceneManager.scene as SelectScene;
			let p = egret.Point.create(e.stageX, e.stageY);
			if (scene.puzzleGroup.getTransformedBounds(this).containsPoint(p)) {
				SceneManager.newScene(new PuzzleSelectScene());

			} else if (scene.scoreGroup.getTransformedBounds(this).containsPoint(p)) {
				SceneManager.newScene(new SetScoreScene());

			} else if (scene.score30Group.getTransformedBounds(this).containsPoint(p)) {
				SceneManager.newScene(new SetScore30Scene());

			} else if (scene.score1m.getTransformedBounds(this).containsPoint(p)) {
				SceneManager.newScene(new SetScore1minScene());

			} else if (scene.rankGroup.getTransformedBounds(this).containsPoint(p)) {
				SceneManager.newScene(new RankingScene());

			} else if (scene.optionGroup.getTransformedBounds(this).containsPoint(p)) {
				// SceneManager.newScene(new OptionScene());

			} else if (scene.comboGroup.getTransformedBounds(this).containsPoint(p)) {
				SceneManager.newScene(new SetScore1ComboScene());
			} else if (scene.vedioGroup.getTransformedBounds(this).containsPoint(p)) {
				platform.showRewardedVideoAd();
			}
		}
	}




}

var InputSelect: InputSelectClass = new InputSelectClass();