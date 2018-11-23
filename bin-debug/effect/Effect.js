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
var Effect = (function (_super) {
    __extends(Effect, _super);
    function Effect() {
        var _this = _super.call(this) || this;
        _this.frameCnt = 0;
        _this.doDraw = false;
        return _this;
    }
    Effect.prototype.drawBorderRect = function (x, y, width, height, thickness, color) {
        this.graphics.clear();
        this.graphics.beginFill(0x00000, 0);
        this.graphics.lineStyle(thickness, this.color);
        this.graphics.drawRect(0, 0, width, height);
        this.graphics.endFill();
    };
    Effect.prototype.update = function () {
        return false;
    };
    return Effect;
}(egret.Sprite));
__reflect(Effect.prototype, "Effect");
