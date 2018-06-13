class HudManagerScore extends eui.Component {
	public stageNOLab: eui.Label;
	public scoreLab: eui.Label;
	private drawScore: number = 0;
	public timeLab: eui.Label;
	public stageLab: eui.Label;


	public constructor() {
		super();
		this.skinName = "HudManagerScoreSkin";
	}

	protected childrenCreated() {
		this.setGameMode();
	}
	public setGameMode() {
		let mode = Status.mode;
		if (mode === GameMode.Puzzle) {
			this.timeLab.visible = false;
		} else if (mode === GameMode.Score) {
			this.stageLab.visible = false;
			this.stageNOLab.visible = false;

		} else if (mode === GameMode.Score30) {
			this.stageLab.visible = false;
			this.stageNOLab.visible = false;
		} else if (mode === GameMode.Score1M) {
			this.stageLab.visible = false;
			this.stageNOLab.visible = false;
		} else if (mode === GameMode.ScoreCombo) {
			this.stageLab.visible = false;
			this.stageNOLab.visible = false;
		}
	}

	public update() {

		if (this.drawScore != Status.score) {
			this.drawScore = this.drawScore + 1;//+(Status.score-this.drawScore)
			this.scoreLab.text = this.drawScore.toString();
		}

		if (Status.mode === GameMode.Score1M) {
			var timeStr;
			var h = 0;
			var min = 0;
			var s = 0;

			var cnt = SetScore1minScene.cnt;
			if (cnt >= 0) {
				if (cnt > 1800) {
					cnt = 1800;
				}
				timeStr = "";
				h = (1800 - cnt) / 30;
				min = h % 60;
				s = ~~((h * 100) % 100);
				if (min < 10) {
					timeStr = timeStr + "0";
				}
				timeStr = timeStr + ("" + ~~min + ".");
				if (s < 10) {
					timeStr = timeStr + "0";
				}
				timeStr = timeStr + ("" + ~~s);
				this.timeLab.text = timeStr;
			}
			else {
				this.timeLab.text = "60.00";
			}

		}
		if (Status.mode === GameMode.Score30) {
			this.timeLab.text = SetScore30Scene.cnt.toString();
		}



	}
}