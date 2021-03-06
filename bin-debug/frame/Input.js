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
        // this.graphics.beginFill(0, 0);
        // this.graphics.drawRect(0, 0, 480, 762);
        _this.percentWidth = 100;
        _this.percentHeight = 100;
        return _this;
        // this.touchEnabled = true;
        // this.touchThrough = true;
    }
    Input.prototype.setToucheEnble = function (isEnble) {
        if (isEnble === void 0) { isEnble = true; }
        if (isEnble) {
            this.addEventListener("touchBegin", this.mouseDownEvent, this);
            this.addEventListener("touchEnd", this.mouseUpEvent, this);
            this.addEventListener("touchMove", this.mouseMoveEvent, this);
            this.addEventListener("touchReleaseOutside", this.mouseOutEvent, this);
        }
        else {
            this.removeEventListener("touchBegin", this.mouseDownEvent, this);
            this.addEventListener("touchEnd", this.mouseUpEvent, this);
            this.addEventListener("touchMove", this.mouseMoveEvent, this);
            this.addEventListener("touchReleaseOutside", this.mouseOutEvent, this);
        }
    };
    Input.prototype.mouseDownEvent = function (param1) {
    };
    Input.prototype.mouseUpEvent = function (param1) {
    };
    Input.prototype.mouseOutEvent = function (param1) {
    };
    Input.prototype.mouseMoveEvent = function (e) {
    };
    return Input;
}(eui.Group));
__reflect(Input.prototype, "Input");
//# sourceMappingURL=Input.js.map