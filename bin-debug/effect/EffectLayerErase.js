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
var EffectLayerErase = (function (_super) {
    __extends(EffectLayerErase, _super);
    function EffectLayerErase(x, y, color) {
        var _this = _super.call(this) || this;
        _this.onComPlete = false;
        _this.endCnt = 40;
        _this.x = x;
        _this.y = y;
        _this.color = color;
        _this.drawBorderRect(0, 0, 120, 120, 10, _this.color);
        _this.x = x + (_this.width >> 1);
        _this.y = y + (_this.height >> 1);
        _this.anchorOffsetX = _this.width >> 1;
        _this.anchorOffsetY = _this.height >> 1;
        _this.start();
        return _this;
    }
    EffectLayerErase.prototype.update = function () {
        return this.onComPlete;
    };
    EffectLayerErase.prototype.start = function () {
        var _this = this;
        // TweenLite.to(this, this.endCnt / 60, { scaleX: 6, scaleY: 6, onComplete: () => { this.onComPlete = true; } });
        egret.Tween.get(this).to({ scaleX: 6, scaleY: 6, }, this.endCnt * 10).call(function () { _this.onComPlete = true; });
    };
    return EffectLayerErase;
}(Effect));
__reflect(EffectLayerErase.prototype, "EffectLayerErase");
//# sourceMappingURL=EffectLayerErase.js.map