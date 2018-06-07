class SelectScene extends Scene {
	public puzzleGroup: eui.Group;
	public scoreGroup: eui.Group;
	public score30Group: eui.Group;
	public score1m: eui.Group;
	public comboGroup: eui.Group;
	public rankGroup: eui.Group;
	public optionGroup: eui.Group;

	public constructor() {
		super();
		this.skinName = "SelectSceneSkin";
	}

	protected childrenCreated() {
		InputManager.newInput(InputSelect);
	}
}