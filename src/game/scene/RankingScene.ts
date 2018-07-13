class RankingScene extends Scene {
	private bitmap: egret.Bitmap;
	private isdisplay = false;;
	public constructor() {
		super();
	}

	protected childrenCreated() {
		this.init();
	}

	private init() {
		var platform: any = window.platform;
		this.bitmap = platform.openDataContext.createDisplayObject(null, this.stage.stageWidth, this.stage.stageHeight);
		this.addChild(this.bitmap);
		platform.openDataContext.postMessage({
			isDisplay: this.isdisplay,
			keys: ['score'],
			year: (new Date()).getFullYear(),
			command: "getFriendCloudStorage"
		});
	}

}