class HudManagerScore extends eui.Component {
	public stageNOLab: eui.Label;
	public scoreLab: eui.Label;
	private drawScore: number = 0;

	public constructor() {
		super();
		this.skinName = "HudManagerScoreSkin";
	}

	protected childrenCreated() {

	}

	public update() {
		if (this.drawScore != Status.score) {
			this.drawScore = this.drawScore + 1;//+(Status.score-this.drawScore)
			this.scoreLab.text = this.drawScore.toString();
		}

	}
}