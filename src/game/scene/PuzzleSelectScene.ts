class PuzzleSelectScene extends Scene {
	public backImg: eui.Image;
	public stageGroup: eui.Group;

	public constructor() {
		super();
		this.skinName = "PuzzleSelectSceneSkin";

	}
	protected childrenCreated() {
		InputManager.newInput(InputPuzzleSelect);
	}
}