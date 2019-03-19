class InputRankingClass extends Input {
	public constructor() {
		super();
	}

	protected mouseDownEvent(e: egret.TouchEvent): void {
		if (e.stageY >= 44 && e.stageY < 44 + 88 && e.stageX >= 44 && e.stageX <= (44 + 88)) {
			SceneManager.newScene(new SelectScene());
		}
	}

	protected mouseUpEvent(e: egret.TouchEvent): void {
		
	}
}
var InputRanking: InputRankingClass = new InputRankingClass();