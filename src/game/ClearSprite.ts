class ClearSprite extends eui.Component {

	public clearGroup: eui.Group;
	public menuGroup: eui.Group;
	public retryGroup: eui.Group;
	public nextGroup: eui.Group;
	public nextLab: eui.Label;
	public statusLab: eui.Label;

	private toY: number = 500;
	private isPerfect: boolean;

	public constructor(isPerfect: boolean = false) {
		super();
		this.isPerfect = isPerfect;
		this.skinName = "ClearSpriteSkin"
	}

	protected childrenCreated() {
		if (!this.isPerfect) this.statusLab.text = "Clear";
		egret.Tween.get(this.clearGroup).to({ y: this.toY }, 500, egret.Ease.quintOut).wait(100).to({ x: 66 }, 500, egret.Ease.quintOut);
		egret.Tween.get(this.menuGroup).wait(600).to({ y: this.toY }, 500, egret.Ease.quintOut);
		egret.Tween.get(this.retryGroup).wait(800).to({ y: this.toY }, 500, egret.Ease.quintOut);
		egret.Tween.get(this.nextGroup).wait(1000).to({ y: this.toY }, 500, egret.Ease.quintOut);
		this.addEventListener("touchTap", this.onTouch, this);
	}

	private onTouch(e: egret.TouchEvent) {
		switch (e.target) {
			case this.clearGroup:
				break;
			case this.menuGroup:
				SceneManager.newScene(new SelectScene());
				break;
			case this.retryGroup:
				SceneManager.newScene(new SetPuzzleScene(StageManager.getStage(-2)));
				break;
			case this.nextGroup:
				let stageData = StageManager.getStage(-1);
				if (stageData != null) {
					SceneManager.newScene(new SetPuzzleScene(stageData));
				}

				break;
		}
	}





}