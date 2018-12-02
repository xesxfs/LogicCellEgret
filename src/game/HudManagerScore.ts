class HudManagerScore extends eui.Component {
	public stageNOLab: eui.Label;
	public scoreLab: eui.Label;
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

		this.scoreLab.text = Status.drawScore.toString();
		if (Status.mode === GameMode.Score1M) {
			var timeStr;
			var h = 0;
			var min = 0;
			var s = 0;

			var cnt = SetScore1minScene.cnt;
			if (cnt >= 0) {
				if (cnt > 3600) {
					cnt = 3600;
				}
				timeStr = "";
				h = (3600 - cnt) / 60;
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