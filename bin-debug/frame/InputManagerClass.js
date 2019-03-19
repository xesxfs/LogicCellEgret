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
var InputManagerClass = (function (_super) {
    __extends(InputManagerClass, _super);
    function InputManagerClass() {
        var _this = _super.call(this) || this;
        _this.percentWidth = 100;
        _this.percentHeight = 100;
        return _this;
        // this.touchChildren = true;
        // this.touchEnabled = false;	
    }
    InputManagerClass.prototype.newInput = function (input) {
        this.removeChildren();
        this.input = input;
        if (input != null) {
            this.addChild(input);
        }
        this.setTouchEnble();
    };
    InputManagerClass.prototype.setTouchEnble = function (isEnble) {
        if (isEnble === void 0) { isEnble = true; }
        this.input && this.input.setToucheEnble(isEnble);
    };
    return InputManagerClass;
}(eui.Component));
__reflect(InputManagerClass.prototype, "InputManagerClass");
var InputManager = new InputManagerClass();
//# sourceMappingURL=InputManagerClass.js.map