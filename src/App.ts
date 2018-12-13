class App {
	public constructor() {
	}
	public static BackMenu: BackMenuBitmapClass;
	public static startUp(mainCotent: eui.UILayer) {
		// console.log("startUp");
		// SharedManager = new SharedManagerClass();
		let back = new eui.Rect();
		back.fillColor = 0x888888;
		back.percentWidth = 100;
		back.percentHeight = 100;
		mainCotent.addChild(back);
		App.BackMenu = new BackMenuBitmapClass();
		mainCotent.addChild(new Game());

	}
}