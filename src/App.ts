class App {
	public constructor() {
	}
	public static BackMenu: BackMenuBitmapClass;
	public static startUp(mainCotent: eui.UILayer) {
		App.BackMenu = new BackMenuBitmapClass();
		mainCotent.addChild(new Game());
	}
}