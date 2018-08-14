class RankingScene extends Scene {
	private bitmap: egret.Bitmap;
	private isdisplay = true;
	public constructor() {
		super();
		InputManager.newInput(InputRanking);
	}

	protected childrenCreated() {
		this.init();
		let backBitmap = Resource.getBlockChips(22, 220, 22, 22);
		backBitmap.width = 110;
		backBitmap.height = 110;
		backBitmap.x = 265;
		backBitmap.y = 1000;
		this.addChild(backBitmap);
		this.addChild(App.BackMenu);
	}

	private init() {
		var platform: any = window.platform;
		this.bitmap = platform.openDataContext.createDisplayObject(null, this.stage.stageWidth, this.stage.stageHeight);
		this.addChild(this.bitmap);
		platform.openDataContext.postMessage({
			isDisplay: this.isdisplay,
			keys: ['score', 'score30', 'score1min', 'score1combo'],
			year: (new Date()).getFullYear(),
			command: "getFriendCloudStorage"
		});
	}

	public update() {
		App.BackMenu.update();
	}

}