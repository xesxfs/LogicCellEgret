class SelectScene extends Scene {
	public puzzleGroup: eui.Group;
	public scoreGroup: eui.Group;
	public score30Group: eui.Group;
	public score1m: eui.Group;
	public comboGroup: eui.Group;
	public rankGroup: eui.Group;
	public optionGroup: eui.Group;
	public puzzleLab: eui.Label;
	public scoreLab: eui.Label;
	public score30Lab: eui.Label;
	public score1mLab: eui.Label;
	public scoreComboLab: eui.Label;

	public constructor() {
		super();
		this.skinName = "SelectSceneSkin";
	}

	protected childrenCreated() {
		InputManager.newInput(InputSelect);
		this.score1mLab.text = SharedManager.score1min.toString();
		this.scoreLab.text = SharedManager.score.toString();
		this.score30Lab.text = SharedManager.score30.toString();
		this.scoreComboLab.text = SharedManager.score1combo.toString();
	}
}