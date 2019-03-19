class RankingScene extends Scene {
	private bitmap: egret.Bitmap;
	private isdisplay = true;
	public constructor() {
		super();
		this.addEventListener(egret.Event.REMOVED_FROM_STAGE, this.disable, this);
		InputManager.newInput(InputRanking);
	}

	protected childrenCreated() {
		this.init();
		let backBitmap = new eui.Image("Chip_106_03_png");;
		backBitmap.width = 88;
		backBitmap.height = 88;
		backBitmap.top = 44;
		backBitmap.left = 44;

		this.addChild(backBitmap);
		// this.addChild(App.BackMenu);
	}

	private init() {
		// var platform: any = window.platform;
		this.bitmap = platform.openDataContext.createDisplayObject(null, this.stage.stageWidth, this.stage.stageHeight);
		this.addChild(this.bitmap);
		platform.openDataContext.postMessage({
			isDisplay: this.isdisplay,
			keys: ['puzzle', 'score', 'score30', 'score1min', 'score1combo'],
			year: (new Date()).getFullYear(),
			command: "getFriendCloudStorage"
		});
	}

	public update() {
		App.BackMenu.update();
	}

	public disable() {

		platform.openDataContext.postMessage({
			isDisplay: false,
			keys: ['score', 'score30', 'score1min', 'score1combo'],
			year: (new Date()).getFullYear(),
			// command: "getFriendCloudStorage"
		});
	}

}