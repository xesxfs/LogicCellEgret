var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
var EffectManagerClass = (function (_super) {
    __extends(EffectManagerClass, _super);
    function EffectManagerClass() {
        var _this = _super.call(this) || this;
        _this.vecEffect = [];
        return _this;
    }
    EffectManagerClass.prototype.update = function () {
        var i = 0;
        var ef = null;
        var length = this.vecEffect.length;
        i = 0;
        while (i < length) {
            ef = this.vecEffect[i];
            if (ef.update()) {
                console.log("removeEffect");
                // EffectManager.removeEffect(i);
                i--;
                length--;
            }
            i++;
        }
    };
    EffectManagerClass.prototype.addEffect = function (effect) {
        effect.effectNumber = this.vecEffect.length;
        this.vecEffect.push(effect);
        this.addChild(effect);
    };
    EffectManagerClass.prototype.removeEffect = function (effectNumber) {
        var i = 0;
        var effect = this.vecEffect.splice(effectNumber, 1);
        if (effect) {
            // var length = this.vecEffect.length;
            // this.removeChild(effect[0]);
            // i = effectNumber;
            // while (i < length) {
            // 	this.vecEffect[i].effectNumber--;
            // 	i++;
            // }
        }
    };
    return EffectManagerClass;
}(egret.Sprite));
__reflect(EffectManagerClass.prototype, "EffectManagerClass");
var EffectManager = new EffectManagerClass();
