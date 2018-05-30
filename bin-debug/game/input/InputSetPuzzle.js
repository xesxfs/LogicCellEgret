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
var InputSetPuzzleClass = (function (_super) {
    __extends(InputSetPuzzleClass, _super);
    function InputSetPuzzleClass() {
        return _super.call(this) || this;
    }
    InputSetPuzzleClass.prototype.mouseDownEvent = function (e) {
        if (e.stageY > 240 && e.stageY < 285) {
            var selectBlock = ~~(e.stageX / 48);
            BlockManager.mouseX = e.stageX;
            BlockManager.mouseY = e.stageY;
            BlockManager.mouseDownInventory(selectBlock);
        }
    };
    InputSetPuzzleClass.prototype.mouseMoveEvent = function (e) {
        BlockManager.mouseX = e.stageX;
        BlockManager.mouseY = e.stageY;
    };
    InputSetPuzzleClass.prototype.mouseUpEvent = function (e) {
        if (!BlockManager.mouseDownBlock) {
            return;
        }
        if (this.fieldRect.containsPoint(egret.Point.create(e.stageX, e.stageY))) {
            var gx = (e.stageX - this.field.x) / 45;
            var gy = (e.stageY - this.field.y) / 45;
            this.field.mouseUpField(~~gx, ~~gy);
        }
        else {
            BlockManager.mouseUp();
        }
    };
    InputSetPuzzleClass.prototype.mouseOutEvent = function (e) {
        if (this.fieldRect.containsPoint(egret.Point.create(e.stageX, e.stageY))) {
            var gx = (e.stageX - this.field.x) / 45;
            var gy = (e.stageY - this.field.y) / 45;
            this.field.mouseUpField(gx, gy);
        }
        else {
            BlockManager.mouseUp();
        }
    };
    return InputSetPuzzleClass;
}(Input));
__reflect(InputSetPuzzleClass.prototype, "InputSetPuzzleClass");
var InputSetPuzzle = new InputSetPuzzleClass();
//# sourceMappingURL=InputSetPuzzle.js.map