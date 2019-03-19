class ClearSprite extends eui.Component {

	public clearGroup: eui.Group;
	public menuGroup: eui.Group;
	public retryGroup: eui.Group;
	public nextGroup: eui.Group;
	public nextLab: eui.Label;
	public statusLab: eui.Label;
	public shareGroup: eui.Group;

	public retryScene: any;
	private toY: number = 500;
	public continueGroup: eui.Group;

	private isPerfect: boolean;
	private isFinish: boolean
	private isRewarded: boolean = true;

	public constructor(isPerfect: boolean, isFinish: boolean = false, isRewarded: boolean = true) {
		super();
		this.isPerfect = isPerfect;
		this.isFinish = isFinish;
		this.isRewarded = isRewarded;
		this.skinName = "ClearSpriteSkin"
	}

	protected childrenCreated() {
		// console.log("clearCheck ClearSprite");
		console.log("ClearSprite", this.isRewarded)
		this.isRewarded ? this.rewarded() : this.nornal();
		this.addEventListener("touchTap", this.onTouch, this);
	}


	public nornal() {
		if (!this.isPerfect) this.statusLab.text = "清除";
		if (this.isFinish) {
			this.statusLab.text = "完成";
		}

		egret.Tween.get(this.clearGroup).to({ y: this.toY }, 500, egret.Ease.quintOut).wait(100).to({ x: 10 }, 500, egret.Ease.quintOut);
		egret.Tween.get(this.menuGroup).wait(600).to({ y: this.toY }, 500, egret.Ease.quintOut);
		egret.Tween.get(this.retryGroup).wait(800).to({ y: this.toY }, 500, egret.Ease.quintOut);
		egret.Tween.get(this.nextGroup).wait(1000).to({ y: this.toY }, 500, egret.Ease.quintOut);
		egret.Tween.get(this.shareGroup).wait(1200).to({ y: this.toY }, 500, egret.Ease.quintOut);

	}

	public rewarded() {
		this.shareGroup.x = this.nextGroup.x;
		this.menuGroup.x = 120;
		egret.Tween.get(this.shareGroup).wait(1000).to({ y: this.height / 2 - this.nextGroup.height / 2 }, 500, egret.Ease.quintOut);
		egret.Tween.get(this.continueGroup).to({ y: this.height / 2 - this.continueGroup.height / 2 }, 800, egret.Ease.quintOut)
		egret.Tween.get(this.menuGroup).wait(1000).to({ y: this.height / 2 - this.menuGroup.height / 2 }, 500, egret.Ease.quintOut);
	}

	private onTouch(e: egret.TouchEvent) {
		switch (e.target) {
			case this.clearGroup:
				break;
			case this.menuGroup:
				SceneManager.newScene(new SelectScene());
				break;
			case this.retryGroup:
				if (this.isFinish) {
					SceneManager.newScene(new this.retryScene());
				} else {
					SceneManager.newScene(new SetPuzzleScene(StageManager.getStage(-2)));
				}

				break;
			case this.nextGroup:
				let stageData = StageManager.getStage(-1);
				if (stageData != null) {
					SceneManager.newScene(new SetPuzzleScene(stageData));

				}
				break;
			case this.shareGroup:
				SharedManager.shareAppMessage();
				break;
			case this.continueGroup:
				platform.showRewardedVideoAd();
				break;
		}
	}





}