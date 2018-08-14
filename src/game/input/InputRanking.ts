class InputRankingClass extends Input {
	public constructor() {
		super();
	}

	protected mouseDownEvent(e: egret.TouchEvent): void {
		if (e.stageY >= 1000 && e.stageX >= 256 && e.stageX <= (256 + 110)) {
			App.BackMenu.updateStart();
		}
	}

	protected mouseUpEvent(e: egret.TouchEvent): void {
		App.BackMenu.updateFinish();
	}
}
var InputRanking: InputRankingClass = new InputRankingClass();