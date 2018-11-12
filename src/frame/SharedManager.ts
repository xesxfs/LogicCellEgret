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
	private static instance: SharedManagerClass;

	public static getInstance() {
		!this.instance && (this.instance = new SharedManagerClass())
		return this.instance;
	}

	public constructor() {

	}

	public async init() {
		try {

			let i = 0;
			while (i < 25) {
				this.vecPuzzleClear.push(0);
				i++;
			}
			// this.score = this.parseItem2Number("score");
			// this.score1min = this.parseItem2Number("score30");
			// this.score30 = this.parseItem2Number("score1min");
			// this.score1combo = this.parseItem2Number("score1combo");
			// this.getScore();
			// this.getScore30();
			// this.getScore1combo();
			// this.getScore1min();
			// let resultData = await platform.getStorage("score");
			// this.score = resultData;

			// resultData = await platform.getStorage("score30")
			// this.score30 = resultData;

			// resultData = await platform.getStorage("score1min")
			// this.score1min = resultData;

			// resultData = await platform.getStorage("score1combo")
			// this.score1combo = resultData;

			console.log("init:", this.score, this.score30, this.score1min, this.score1combo);

		} catch (e) {
			console.error(e);
		}
	}

	public getPuzzleClearNum() {
		return
	}

	private async getScore() {
		// let resultData = await platform.getStorage("score");
		// this.score = resultData;
	}

	private async getScore30() {
		// let resultData = await platform.getStorage("score30")
		// this.score30 = resultData;
	}

	private async getScore1min() {
		// let resultData = await platform.getStorage("score1min")
		// this.score1min = resultData;
	}

	private async getScore1combo() {
		// let resultData = await platform.getStorage("score1combo")
		// this.score1combo = resultData;
	}

	public getPerfect() {

	}

	public saveVecPuzzleClear() {

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
		// this.setItem("userName", uname);
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

	public parseItem2Bool() {

	}

	public getItem(key: string): string {
		// let resultData = platform.getStorage(key).then((result) => {
		// 	console.log("getItem:", result);
		// });
		let resultData = egret.localStorage.getItem(key);
		// console.log("getItem:", resultData);
		// return resultData['data'];

		// let resultData =await platform.getStorage(key)
		return resultData;

	}

	private async getItem2(key: string) {
		// let resultData = await platform.getStorage(key)
	}

	public setItem(key: string, value: number) {
		egret.localStorage.setItem(key, value.toString());
		// platform.uploadWXData(key, value);
		// platform.setStorage(key, value);
	}

}
var SharedManager: SharedManagerClass = new SharedManagerClass();