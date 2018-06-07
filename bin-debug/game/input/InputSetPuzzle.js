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
        this.blockRect = new egret.Rectangle(BlockManager.x, BlockManager.y, BlockManager.width, BlockManager.height);
        if (this.blockRect.containsPoint(egret.Point.create(e.stageX, e.stageY))) {
            // console.log("down0");
            var selectBlock = ~~((e.stageX - this.blockRect.x) / 120);
            BlockManager.mouseX = e.stageX;
            BlockManager.mouseY = e.stageY;
            BlockManager.mouseDownInventory(selectBlock);
            // console.log("down0", selectBlock);
        }
        else if (e.stageY >= 1000 && e.stageX >= 130 && e.stageX <= (130 + 110)) {
            App.BackMenu.updateStart();
        }
        else if (e.stageY >= 1000 && e.stageX >= 410 && e.stageX <= (410 + 110)) {
            BlockManager.undo();
        }
    };
    InputSetPuzzleClass.prototype.mouseMoveEvent = function (e) {
        // console.log(e.stageX);
        BlockManager.mouseX = e.stageX;
        BlockManager.mouseY = e.stageY;
    };
    InputSetPuzzleClass.prototype.mouseUpEvent = function (e) {
        App.BackMenu.updateFinish();
        if (!BlockManager.mouseDownBlock) {
            return;
        }
        InputSetPuzzle.fieldRect = new egret.Rectangle(this.field.x, this.field.y, this.field.width, this.field.height);
        if (this.fieldRect.containsPoint(egret.Point.create(e.stageX, e.stageY))) {
            console.log("containsPoint");
            var gx = ~~(e.stageX - this.field.x) / (120 + 22);
            var gy = ~~(e.stageY - this.field.y) / (120 + 18);
            /**这里需要反过来，对于数组坐标系 */
            this.field.mouseUpField(~~gy, ~~gx);
        }
        else {
            BlockManager.mouseUp();
        }
    };
    InputSetPuzzleClass.prototype.mouseOutEvent = function (e) {
        if (this.fieldRect.containsPoint(egret.Point.create(e.stageX, e.stageY))) {
            var gx = (e.stageX - this.field.x) / 120;
            var gy = (e.stageY - this.field.y) / 120;
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
