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
    function BitmapDisplay(w, h, color) {
        var _this = _super.call(this) || this;
        _this.drawRect(w, h, color);
        return _this;
    }
    BitmapDisplay.prototype.drawRect = function (w, h, color) {
        this.graphics.beginFill(color);
        this.graphics.drawRect(0, 0, w, h);
        this.graphics.endFill();
    };
    BitmapDisplay.prototype.drawBorderRect = function (param1, param2, param3, param4, param5, param6, param7) {
        // this.graphics.drawRect()
    };
    BitmapDisplay.prototype.drawString = function (str, scaleX, scaleY, color) {
        if (!this.text)
            this.text = new eui.Label();
        this.text.text = str;
        this.text.textColor = color;
        this.addChild(this.text);
    };
    return BitmapDisplay;
}(egret.Sprite));
__reflect(BitmapDisplay.prototype, "BitmapDisplay");
