class MyImage extends egret.Bitmap {
	private imageLoader = new egret.ImageLoader();
	public constructor() {
		super();
		this.imageLoader.addEventListener(egret.Event.COMPLETE, (event: egret.Event) => {
			let imageLoader = <egret.ImageLoader>event.currentTarget;
			let bgtexture = new egret.Texture();
			bgtexture._setBitmapData(imageLoader.data);
			this.texture = bgtexture;
		}, this);
	}



	public setSrc(src) {
		this.imageLoader.load(src);
	}

}