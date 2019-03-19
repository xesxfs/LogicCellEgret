class SharedManagerClass {

	public vecPuzzleClear: Array<number> = [];

	public score: number = 0;

	public score1min: number = 0;

	public score30: number = 0;

	public score1combo: number = 0;

	public userName: string = 'usercc';

	public sound: boolean = true;

	public sendScoreTime: number = 0;

	public sendScore30Time: number = 0;

	public sendScore1minTime: number = 0;

	public sendScore1comboTime: number = 0;

	public dayScore: number = 0;

	public dayScore30: number = 0;

	public dayScore1min: number = 0;

	public dayScore1combo: number = 0;

	private shareTitles: Array<string>;
	private shareImgs: Array<string>;

	public videoSuccess: Function;

	public videoFailed: Function;

	private static instance: SharedManagerClass;

	public static getInstance() {
		!this.instance && (this.instance = new SharedManagerClass())
		return this.instance;
	}

	public constructor() {
		this.shareTitles = [
			"[有人@我]：让智慧飞扬起来，让科学流行起来",
			"[有人@我]：我来是寻找脑力界的超级丹!!",
			"[有人@我]：在这里，你的天赋就是人类的财富",
			"[有人@我]：中国的最强大脑在哪里?",
			"[有人@我]：重金悬赏！！！中国最强大脑！!",
			"你敢来吗,只有强者才能为中国而战",
			"反正我觉得他用了什么我们不知道的手段",
			"给你1分就算客气了,可惜这没有0分的按钮",
			"反正我觉得他用了什么我们不知道的手段",
			"[有人@我]：很多时候，真理掌握在少数人手中"

		];

		this.shareImgs = [
			"resource/assets/share/share1.png",
			"resource/assets/share/share1.png",
			"resource/assets/share/share2.png",
			"resource/assets/share/share3.png",
			"resource/assets/share/share4.png",
			"resource/assets/share/share5.png",
			"resource/assets/share/share6.png",
			"resource/assets/share/share7.png",
			"resource/assets/share/share8.png",
			"resource/assets/share/share9.png",
			"resource/assets/share/share10.png",

		]



	}

	public onVideoError() {
		console.log("视频广告初始化失败");
	}

	public onVideoAdClose(res) {
		// console.log("initRewardedVideoAd ", res);
		// 用户点击了【关闭广告】按钮
		// 小于 2.1.0 的基础库版本，res 是一个 undefined
		if (res && res.isEnded || res === undefined) {
			// 正常播放结束，可以下发游戏奖励
			// console.log(this.videoSuccess);
			this.videoSuccess && this.videoSuccess();
		} else {
			// 播放中途退出，不下发游戏奖励
			this.videoFailed && this.videoFailed();
		}
	}

	public init() {
		try {
			platform.createBannerAd();

			platform.initRewardedVideoAd(this.onVideoError.bind(this), this.onVideoAdClose.bind(this));
			this.showShareMenu();
			this.getUpdateManager();
			this.getPuzzleClearNum();

			this.getScore();
			this.getScore30();
			this.getScore1combo();
			this.getScore1min();

			// console.log("init:", this.score, this.score30, this.score1min, this.score1combo);

		} catch (e) {
			console.error(e);
		}
	}

	public getPuzzleClearNum() {
		let vecStr = this.getItem('puzzle');

		let i = 0;
		while (i < 25) {
			this.vecPuzzleClear.push(0);
			i++;
		}

		if (vecStr) {
			let vecArr = vecStr.split(',');
			for (let i = 0; i < vecArr.length; i++) {
				this.vecPuzzleClear[i] = parseInt(vecArr[i], 10);
			}
		}
		this.setItem('puzzle', this.vecPuzzleClear.toString());
	}

	public getCurPuzzle(): number {
		let cur = 0;
		for (let i = 0; i < this.vecPuzzleClear.length; i++) {
			if (this.vecPuzzleClear[i] === 0) {
				cur = i;
				break;
			}
		}
		return cur;
	}

	private getScore() {
		let resultData = this.getItem('score');
		if (!resultData || resultData == '') {
			resultData = '0';
		}
		try {
			this.score = parseInt(resultData, 10);
		} catch (e) {

		}
	}

	private getScore30() {
		let resultData = this.getItem('score30');
		if (!resultData || resultData == '') {
			resultData = '0';
		}
		try {
			this.score30 = parseInt(resultData, 10);
		} catch (e) {

		}
	}

	private getScore1min() {
		let resultData = this.getItem('score1min');
		if (!resultData || resultData == '') {
			resultData = '0';
		}
		try {
			this.score1min = parseInt(resultData, 10);
		} catch (e) {

		}
	}

	private getScore1combo() {
		let resultData = this.getItem('score1combo');
		if (!resultData || resultData == '') {
			resultData = '0';
		}
		try {
			this.score1combo = parseInt(resultData, 10);
		} catch (e) {

		}

	}

	public getPerfect() {

	}

	public saveVecPuzzleClear() {
		this.setItem('puzzle', this.vecPuzzleClear.toString());
	}

	public saveScore(score: number) {
		if (this.score < score) {
			this.score = score;
			this.setItem("score", score);
		}
	}

	public saveScore30(score: number) {
		if (this.score30 < score) {
			this.score30 = score;
			this.setItem("score30", score);
		}
	}

	public saveScore1min(score: number) {
		if (this.score1min < score) {
			this.score1min = score;
			this.setItem("score1min", score);
		}
	}

	public saveScore1combo(score: number) {
		if (this.score1combo < score) {
			this.score1combo = score;
			this.setItem("score1combo", score);
		}
	}

	public saveUserName(uname: string) {
		this.userName = uname;
		this.setItem("userName", uname);
	}

	public soundChange() {
		this.sound = !this.sound;
	}

	public erase() {
		egret.localStorage.clear();
	}

	public parseItem2Number(key: string): number {
		let score: number = 0;
		if (this.getItem(key)) {
			this.score = parseInt(this.getItem(key))
		}
		return score;
	}

	public getItem(key: string): string {
		let resultData = egret.localStorage.getItem(key);
		return resultData;
	}

	public setItem(key: string, value: number | string) {
		if (typeof (value) == 'number') {
			value = value.toString();
		}
		egret.localStorage.setItem(key, value);
		if (key === 'puzzle') {
			value = this.getCurPuzzle().toString();
		}
		platform.uploadWXData(key, value);

	}

	public showShareMenu() {

		// console.log(shareImgIndex, this.shareImgs.length);
		platform.showShareMenu({ withShareTicket: false });
		platform.onShareAppMessage(() => {
			let shareTitleIndex = Math.round(Math.random() * (this.shareTitles.length - 1));
			let shareImgIndex = Math.round(Math.random() * (this.shareImgs.length - 1));
			return {
				title: this.shareTitles[shareTitleIndex],
				imageUrl: this.shareImgs[shareImgIndex],
				query: ""
			}
		})

	}

	public shareAppMessage() {
		let shareTitleIndex = Math.round(Math.random() * (this.shareTitles.length - 1));
		let shareImgIndex = Math.round(Math.random() * (this.shareImgs.length - 1));
		// console.log(shareImgIndex, this.shareImgs.length);
		platform.shareAppMessage(
			{
				title: this.shareTitles[shareTitleIndex],
				imageUrl: this.shareImgs[shareImgIndex],
				query: '',
			}
		);

	}

	/**
	 * 微信小游戏更新管理
	 */
	public getUpdateManager() {
		const updateManager = platform.getUpdateManager();
		if (updateManager) {
			updateManager.onCheckForUpdate(function (res) {
				// 请求完新版本信息的回调
				console.log("是否有版本更新：", res.hasUpdate)
			})

			updateManager.onUpdateReady(function () {
				// 新的版本已经下载好，调用 applyUpdate 应用新版本并重启
				updateManager.applyUpdate()
			})

			updateManager.onUpdateFailed(function () {
				// 新的版本下载失败
			})
		}
	}

	public postMessage(data: any) {
		platform.openDataContext.postMessage(data);
	}

}
var SharedManager: SharedManagerClass = new SharedManagerClass();