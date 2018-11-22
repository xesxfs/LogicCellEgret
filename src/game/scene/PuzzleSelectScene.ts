class PuzzleSelectScene extends Scene {
	public backImg: eui.Image;
	public stageGroup: eui.Group;

	public constructor() {
		super();
		this.skinName = "PuzzleSelectSceneSkin";

	}
	protected childrenCreated() {
		InputManager.newInput(InputPuzzleSelect);
		this.setStageShow();
	}

	setStageShow() {
		let curStage = SharedManager.getCurPuzzle();
		for (let i = 0; i < this.stageGroup.numChildren; i++) {
			let stage: eui.Rect = this.stageGroup.getChildAt(i) as eui.Rect;
			let color = 0x000000;
			if (i === curStage) {
				color = 0xBA9B4A;
			}
			// if (i > curStage) {
			// 	color = 0xD1CCCC;
			// }
			if (i < curStage) {
				color = 0xD1CCCC;
			}
			stage.fillColor = color;
		}
	}
}