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
var InputSelectClass = (function (_super) {
    __extends(InputSelectClass, _super);
    function InputSelectClass() {
        return _super.call(this) || this;
    }
    return InputSelectClass;
}(Input));
__reflect(InputSelectClass.prototype, "InputSelectClass");
var InputSelect = new InputSelectClass();
//# sourceMappingURL=InputSelect.js.map