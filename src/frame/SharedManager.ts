class SharedManagerClass {

	public vecPuzzleClear: Array<number> = [];

	public score: number;

	public score1min: number;

	public score30: number;

	public score1combo: number;

	public userName: string;

	public sound: boolean = true;

	public sendScoreTime: number = 0;

	public sendScore30Time: number = 0;

	public sendScore1minTime: number = 0;

	public sendScore1comboTime: number = 0;

	public dayScore: number;

	public dayScore30: number;

	public dayScore1min: number;

	public dayScore1combo: number;

	public constructor() {
		this.init();
	}

	public init() {
		let i = 0;
		while (i < 25) {
			this.vecPuzzleClear.push(0);
			i++;
		}
		this.score = this.parseItem2Number("score");
		this.score1min = this.parseItem2Number("score");
		this.score30 = this.parseItem2Number("score");
		this.score1combo = this.parseItem2Number("score");
	}

	public getPuzzleClearNum() {
		return
	}

	public getPerfect() {

	}

	public saveVecPuzzleClear() {

	}

	public saveScore(score: number) {
		if (this.score < score) {
			this.score = score;
			this.setItem("score", score.toString());
		}
	}

	public saveScore30(score: number) {
		if (this.score30 < score) {
			this.score30 = score;
			this.setItem("score30", score.toString());
		}
	}

	public saveScore1min(score: number) {
		if (this.score1min < score) {
			this.score1min = score;
			this.setItem("score1min", score.toString());
		}
	}

	public saveScore1combo(score: number) {
		if (this.score1combo < score) {
			this.score1combo = score;
			this.setItem("score1combo", score.toString());
		}
	}

	public saveUserName(uname: string) {
		this.userName = uname;
		this.setItem("userName", uname)
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
		return egret.localStorage.getItem(key);
	}

	public setItem(key: string, value: string) {
		egret.localStorage.setItem(key, value);
	}

}
var SharedManager: SharedManagerClass = new SharedManagerClass();