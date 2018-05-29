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
var InputPuzzleSelectClass = (function (_super) {
    __extends(InputPuzzleSelectClass, _super);
    function InputPuzzleSelectClass() {
        return _super.call(this) || this;
    }
    InputPuzzleSelectClass.prototype.mouseDownEvent = function (param1) {
        SceneManager.newScene(new SetPuzzleScene(StageManager.getStage(0)));
    };
    InputPuzzleSelectClass.prototype.mouseUpEvent = function (param1) {
    };
    InputPuzzleSelectClass.prototype.mouseOutEvent = function (param1) {
    };
    return InputPuzzleSelectClass;
}(Input));
__reflect(InputPuzzleSelectClass.prototype, "InputPuzzleSelectClass");
var InputPuzzleSelect = new InputPuzzleSelectClass();
//# sourceMappingURL=InputPuzzleSelect.js.map