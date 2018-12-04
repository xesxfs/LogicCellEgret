class RankItem extends egret.DisplayObjectContainer {
	public bg: number;
	public w: number;
	public h: number;
	private head: MyImage;
	private nickName: egret.TextField
	private numRank: egret.TextField
	public constructor(bgColor: number, w: number, h: number) {
		super();
		this.bg = bgColor;
		this.w = w;
		this.h = h;
		this.createBg();
	}

	private createBg() {
		let bg = new Button();
		bg.drawRect(this.bg, this.w, this.h);
		this.addChild(bg);
	}

	public setHead(src: string) {
		!this.head && (this.head = new MyImage());
		this.head.y = 20;
		this.head.x = 20;
		this.head.setSrc(src);
		this.head.scaleX = 0.6;
		this.head.scaleY = 0.6;
		this.addChild(this.head);
	}

	public setNickName(nickname: string) {
		!this.nickName && (this.nickName = new egret.TextField());
		let nicktxt = this.nickName;
		nicktxt.size = 26;
		nicktxt.y = 50;
		nicktxt.x = 120;
		nicktxt.text = nickname;
		this.addChild(nicktxt);
	}

	public setNumRank(num: string) {
		!this.numRank && (this.numRank = new egret.TextField());
		let numtxt = this.numRank;
		numtxt.size = 26;
		numtxt.x = 400;
		numtxt.y = 50;
		numtxt.text = num;
		this.addChild(numtxt);
	}


}