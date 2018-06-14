class StatusClass {
	public score: number = 0;
	public drawScore: number = 0;
	public combo: number = 0;
	public maxCombo: number = 0;
	public mode: number = 0;
	public startTime: number = 0;
	public finishTime: number = 0;
	private vecComboScore: Array<number> = [0, 10, 20, 40, 70, 110, 160, 220, 290, 370, 460, 560, 670, 790, 920, 1060, 1210, 1370, 1540, 1720, 1910, 2110, 2320, 2540, 2770, 3010, 3260, 3520, 3790, 4070, 4360, 4660, 4970, 5290, 5620, 5960, 6310, 6670, 7040, 7420, 7810, 8210, 8620, 9040, 9470, 9910, 10360, 10820, 11290, 11770];
	public constructor() {
	}

	public reset(mode: number) {
		this.mode = mode;
		this.combo = 0;
		this.maxCombo = this.vecComboScore.length;
		this.score = 0;
		this.drawScore = 0;
		this.startTime = new Date().getDate();
		this.finishTime = 0;
	}

	public addScore(): number {
		let add = this.vecComboScore[this.combo];
		this.score += add;
		return add;
	}

	public getPlayTime(): string {
		let offTime = this.finishTime - this.startTime;
		return;
	}

	public update() {
		if (this.drawScore != this.score) {
			this.drawScore = this.drawScore + (~~((this.score - this.drawScore) / 5) + 1);
		}
	}
}
var Status: StatusClass = new StatusClass();

enum GameMode {
	Puzzle,
	Score,
	Score30,
	Score1M,
	ScoreCombo
}