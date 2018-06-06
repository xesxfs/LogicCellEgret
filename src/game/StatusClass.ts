class StatusClass {
	public combo: number = 0;
	public maxCombo: number = 0;
	public mode: number;
	public constructor() {
	}

	public reset(mode: number) {
		this.mode = mode;
		this.combo = 0;
		this.maxCombo = 0;

	}
}
var Status: StatusClass = new StatusClass();