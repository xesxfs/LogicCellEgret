class InputSelectClass extends Input {
	public constructor() {
		super();
	}

	protected mouseDownEvent(e: egret.TouchEvent) {
		if (SceneManager.scene instanceof SelectScene) {
			let scene = SceneManager.scene as SelectScene;
			let p = egret.Point.create(e.stageX, e.stageY);
			if (scene.puzzleGroup.getTransformedBounds(this).containsPoint(p)) {
				let sid = parseInt(egret.getOption("sid"));
				if (!sid) sid = 1;
				SceneManager.newScene(new SetPuzzleScene(StageManager.getStage(sid - 1)));
				console.log("puzzleGroup")
			} else if (scene.scoreGroup.getTransformedBounds(this).containsPoint(p)) {
				SceneManager.newScene(new SetScoreScene());
				console.log("scoreGroup")
			} else if (scene.score30Group.getTransformedBounds(this).containsPoint(p)) {
				SceneManager.newScene(new SetScore30Scene());
				console.log("score30Group")
			} else if (scene.score1m.getTransformedBounds(this).containsPoint(p)) {
				SceneManager.newScene(new SetScore1minScene());
				console.log("score1m")
			} else if (scene.rankGroup.getTransformedBounds(this).containsPoint(p)) {
				SceneManager.newScene(new RankingScene());
				console.log("rankGroup")
			} else if (scene.optionGroup.getTransformedBounds(this).containsPoint(p)) {
				SceneManager.newScene(new OptionScene());
				console.log("optionGroup")
			} else if (scene.comboGroup.getTransformedBounds(this).containsPoint(p)) {
				SceneManager.newScene(new SetScore1comboScene());
				console.log("comboGroup")
			}
		}
	}




}

var InputSelect: InputSelectClass = new InputSelectClass();