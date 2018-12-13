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
var BackMenuBitmapClass = (function (_super) {
    __extends(BackMenuBitmapClass, _super);
    function BackMenuBitmapClass() {
        var _this = _super.call(this) || this;
        _this.cnt = 0;
        _this.updateFlag = false;
        _this.toY = 517;
        _this.skinName = "BackMenuSkin";
        return _this;
    }
    BackMenuBitmapClass.prototype.childrenCreated = function () {
        this.backMenuGroup.y = -this.toY;
    };
    BackMenuBitmapClass.prototype.updateStart = function () {
        if (this.updateFlag) {
            return;
        }
        egret.Tween.removeTweens(this.backMenuGroup);
        egret.Tween.get(this.backMenuGroup).to({ y: this.toY }, 200, egret.Ease.cubicOut);
        this.cnt = 0;
        this.updateFlag = true;
    };
    BackMenuBitmapClass.prototype.updateFinish = function () {
        if (!this.updateFlag) {
            return;
        }
        egret.Tween.removeTweens(this.backMenuGroup);
        egret.Tween.get(this.backMenuGroup).to({ y: -this.toY }, 200, egret.Ease.quadIn);
        this.cnt = 0;
        this.updateFlag = false;
    };
    BackMenuBitmapClass.prototype.update = function () {
        if (!this.updateFlag)
            return;
        this.backGrogress.width = this.cnt * 10;
        if (this.cnt++ === 40) {
            this.updateFinish();
            SceneManager.newScene(new SelectScene());
        }
    };
    return BackMenuBitmapClass;
}(eui.Component));
__reflect(BackMenuBitmapClass.prototype, "BackMenuBitmapClass");
//# sourceMappingURL=BackMenuBitmap.js.map