class InputPuzzleSelectClass extends Input {
	public constructor() {
		super();
	}

	protected mouseDownEvent(param1: egret.TouchEvent): void {
		SceneManager.newScene(new SetPuzzleScene(StageManager.getStage(0)));
	}

	protected mouseUpEvent(param1: egret.TouchEvent): void {
	}

	protected mouseOutEvent(param1: egret.TouchEvent): void {
	}
}

var InputPuzzleSelect: InputPuzzleSelectClass = new InputPuzzleSelectClass();