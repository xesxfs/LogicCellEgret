class InputPuzzleSelectClass extends Input {
	public constructor() {
		super();
	}

	protected mouseDownEvent(e: egret.TouchEvent): void {

		// SceneManager.newScene(new SetPuzzleScene(StageManager.getStage(0)));

		if (SceneManager.scene instanceof PuzzleSelectScene) {
			let scene = SceneManager.scene as PuzzleSelectScene;
			let p = egret.Point.create(e.stageX, e.stageY);
			if (scene.stageGroup.getTransformedBounds(this).containsPoint(p)) {
				let offx = e.stageX - scene.stageGroup.x;
				let offy = e.stageY - scene.stageGroup.y;
				offx /= (100 + 22);
				offy /= (100 + 40);
				let sid = 5 * ~~offy + ~~offx;
				if (sid > 24 || sid < 0) sid = 0;
				SceneManager.newScene(new SetPuzzleScene(StageManager.getStage(sid)));
			} else if (scene.backImg.getTransformedBounds(this).containsPoint(p)) {
				SceneManager.newScene(new SelectScene());

			}
		}
	}

	protected mouseUpEvent(param1: egret.TouchEvent): void {
	}

	protected mouseOutEvent(param1: egret.TouchEvent): void {
	}
}

var InputPuzzleSelect: InputPuzzleSelectClass = new InputPuzzleSelectClass();