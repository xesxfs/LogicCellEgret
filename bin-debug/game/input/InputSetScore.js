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
var InputSetScoreClass = (function (_super) {
    __extends(InputSetScoreClass, _super);
    function InputSetScoreClass() {
        return _super.call(this) || this;
    }
    InputSetScoreClass.prototype.mouseDownEvent = function (e) {
        this.blockRect = new egret.Rectangle(BlockManager.x, BlockManager.y, BlockManager.width, BlockManager.height);
        if (this.blockRect.containsPoint(egret.Point.create(e.stageX, e.stageY))) {
            var selectBlock = ~~((e.stageX - this.blockRect.x) / 120);
            BlockManager.mouseX = e.stageX;
            BlockManager.mouseY = e.stageY;
            BlockManager.mouseDownInventory(selectBlock);
            console.log(selectBlock);
        }
        else if (e.stageY >= 1000 && e.stageX >= 256 && e.stageX <= (256 + 110)) {
            App.BackMenu.updateStart();
        }
    };
    InputSetScoreClass.prototype.mouseMoveEvent = function (e) {
        BlockManager.mouseX = e.stageX;
        BlockManager.mouseY = e.stageY;
    };
    InputSetScoreClass.prototype.mouseUpEvent = function (e) {
        App.BackMenu.updateFinish();
        if (!BlockManager.mouseDownBlock) {
            return;
        }
        this.fieldRect = new egret.Rectangle(this.field.x, this.field.y, this.field.width, this.field.height);
        if (this.fieldRect.containsPoint(egret.Point.create(e.stageX, e.stageY))) {
            console.log("containsPoint");
            var gx = ~~(e.stageX - this.field.x) / (120);
            var gy = ~~(e.stageY - this.field.y) / (120);
            /**这里需要反过来，对于数组坐标系 */
            this.field.mouseUpField(~~gy, ~~gx);
        }
        else {
            BlockManager.mouseUp();
        }
    };
    InputSetScoreClass.prototype.mouseOutEvent = function (e) {
        if (SceneManager.scene instanceof SetScoreScene)
            if (this.fieldRect.containsPoint(egret.Point.create(e.stageX, e.stageY))) {
                var gx = (e.stageX - this.field.x) / 120;
                var gy = (e.stageY - this.field.y) / 120;
                this.field.mouseUpField(gx, gy);
            }
            else {
                BlockManager.mouseUp();
            }
    };
    return InputSetScoreClass;
}(Input));
__reflect(InputSetScoreClass.prototype, "InputSetScoreClass");
var InputSetScore = new InputSetScoreClass();
