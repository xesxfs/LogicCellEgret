class BackMenuBitmapClass extends eui.Component {

	private cnt: number = 0;
	private updateFlag: boolean = false;
	public backMenuGroup: eui.Group;
	public backGrogress: eui.Rect;
	public menuRect: egret.Rectangle;
	private toY: number = 517;
	public constructor() {
		super();
		this.skinName = "BackMenuSkin";
	}

	protected childrenCreated() {
		this.backMenuGroup.y = - this.toY;
	}


	public updateStart() {
		if (this.updateFlag) {
			return;
		}
		egret.Tween.removeTweens(this.backMenuGroup);
		egret.Tween.get(this.backMenuGroup).to({ y: this.toY }, 200, egret.Ease.cubicOut);
		this.cnt = 0;
		this.updateFlag = true;
	}

	public updateFinish() {
		if (!this.updateFlag) {
			return;
		}
		egret.Tween.removeTweens(this.backMenuGroup);
		egret.Tween.get(this.backMenuGroup).to({ y: - this.toY }, 200, egret.Ease.quadIn);
		this.cnt = 0;
		this.updateFlag = false;

	}

	public update() {
		if (!this.updateFlag) return;
		this.backGrogress.width = this.cnt * 10;
		if (this.cnt++ === 40) {
			this.updateFinish();
			// SceneManager.newScene(new SelectScene());
		}

	}

}
