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
var BitmapDisplay = (function (_super) {
    __extends(BitmapDisplay, _super);
    function BitmapDisplay() {
        return _super.call(this) || this;
    }
    BitmapDisplay.prototype.drawBorderRect = function (param1, param2, param3, param4, param5, param6, param7) {
        // this.graphics.drawRect()
    };
    return BitmapDisplay;
}(egret.Sprite));
__reflect(BitmapDisplay.prototype, "BitmapDisplay");
//# sourceMappingURL=BitmapDisplay.js.map