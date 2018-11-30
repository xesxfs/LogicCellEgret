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

	private titles: Array<Array<string>>;

	private static instance: SharedManagerClass;

	public static getInstance() {
		!this.instance && (this.instance = new SharedManagerClass())
		return this.instance;
	}

	public constructor() {
		this.titles = [
			["[有人@我]：智商超200的快来玩这游戏！", 'resource/assets/images/Icon48.png'],
			["凭智商玩的得好，为什么要停下来", 'resource/assets/images/Icon48.png'],
			["这游戏也太虐了，我为什么要点进来…", 'resource/assets/images/Icon48.png'],
			["300分（分值），我不是针对谁，在座的各位都玩不过我~", 'resource/assets/images/Icon48.png'],
			["据说只有1%的人能上300分（分值），需要超强逻辑", 'resource/assets/images/Icon48.png'],
			["战五渣们，来看看你们的逻辑分数吧", 'resource/assets/images/Icon48.png']

		];
	}

	public init() {
		try {


			this.showShareMenu();
			this.getUpdateManager();
			this.getPuzzleClearNum();

			this.getScore();
			this.getScore30();
			this.getScore1combo();
			this.getScore1min();

			console.log("init:", this.score, this.score30, this.score1min, this.score1combo);

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
		platform.showShareMenu({ withShareTicket: false });
		platform.onShareAppMessage(() => {
			let shareIndex = ~~(Math.random() * (this.titles.length - 1));
			return {
				title: this.titles[shareIndex][0],
				imageUrl: this.titles[shareIndex][1],
				query: ""
			}
		})

	}

	public shareAppMessage() {
		let shareIndex = ~~(Math.random() * (this.titles.length - 1));
		platform.shareAppMessage(
			{
				title: this.titles[shareIndex][0],
				imageUrl: this.titles[shareIndex][1],
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