class TitleScene extends Scene {
	public constructor() {
		super();
	}

	public next() {
		SceneManager.newScene(new SelectScene());
		// SceneManager.newScene(new NameScene());
	}
}