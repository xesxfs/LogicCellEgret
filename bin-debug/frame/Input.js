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
var Input = (function (_super) {
    __extends(Input, _super);
    function Input() {
        var _this = _super.call(this) || this;
        _this.graphics.beginFill(0, 0);
        _this.graphics.drawRect(0, 0, 480, 762);
        _this.addEventListener("touchBegin", _this.mouseDownEvent, _this);
        _this.addEventListener("touchEnd", _this.mouseUpEvent, _this);
        _this.addEventListener("touchMove", _this.mouseMoveEvent, _this);
        _this.addEventListener("touchReleaseOutside", _this.mouseOutEvent, _this);
        _this.touchEnabled = true;
        return _this;
    }
    Input.prototype.mouseDownEvent = function (param1) {
    };
    Input.prototype.mouseUpEvent = function (param1) {
    };
    Input.prototype.mouseOutEvent = function (param1) {
    };
    Input.prototype.mouseMoveEvent = function (e) {
    };
    return Input;
}(egret.Sprite));
__reflect(Input.prototype, "Input");
//# sourceMappingURL=Input.js.map