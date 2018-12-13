class EffectManagerClass extends egret.Sprite {
	public constructor() {
		super();
		this.vecEffect = [];
	}
	public vecEffect: Array<Effect>;

	public update() {
		var i = 0;
		var ef: Effect = null;
		var length = this.vecEffect.length;
		i = 0;
		while (i < length) {
			ef = this.vecEffect[i];
			if (ef.update()) {
				// console.log("removeEffect");
				EffectManager.removeEffect(i);
				i--;
				length--;
			}
			i++;
		}
	}

	public addEffect(effect: Effect) {
		effect.effectNumber = this.vecEffect.length;
		this.vecEffect.push(effect);
		this.addChild(effect);
	}

	public removeEffect(effectNumber: number) {
		var i = 0;
		let effect = this.vecEffect.splice(effectNumber, 1);
		if (effect) {
			var length = this.vecEffect.length;
			this.removeChild(effect[0]);
			// i = effectNumber;
			// while (i < length) {
			// 	this.vecEffect[i].effectNumber--;
			// 	i++;
			// }
		}
	}
}

var EffectManager: EffectManagerClass = new EffectManagerClass();