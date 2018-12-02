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
var CountDownSprite = (function (_super) {
    __extends(CountDownSprite, _super);
    function CountDownSprite() {
        var _this = _super.call(this) || this;
        _this.percentWidth = 100;
        _this.percentHeight = 100;
        _this.touchEnabled = true;
        _this.touchChildren = false;
        _this.touchThrough = false;
        _this.drawRect();
        return _this;
    }
    CountDownSprite.prototype.drawRect = function () {
        var _this = this;
        var rect = new eui.Rect(250, 120);
        rect.fillColor = 0xB0B0AF;
        rect.horizontalCenter = 0;
        rect.verticalCenter = 0;
        this.cdLab = new eui.Label();
        this.cdLab.size = 55;
        this.cdLab.text = "3";
        this.cdLab.textColor = 0;
        this.cdLab.horizontalCenter = 0;
        this.cdLab.verticalCenter = 0;
        this.addChild(rect);
        this.addChild(this.cdLab);
        egret.Tween.get(this)
            .wait(1500)
            .call(function () { _this.cdLab.text = "2"; })
            .wait(1000)
            .call(function () { _this.cdLab.text = "1"; }).wait(1000)
            .call(function () { _this.cdLab.text = "start"; })
            .to({ alpha: 0 }, 1000, egret.Ease.elasticIn)
            .call(function () { _this.parent && (_this.parent.removeChild(_this)); });
    };
    return CountDownSprite;
}(eui.Group));
__reflect(CountDownSprite.prototype, "CountDownSprite");
