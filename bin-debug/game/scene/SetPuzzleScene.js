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
var SetPuzzleScene = (function (_super) {
    __extends(SetPuzzleScene, _super);
    function SetPuzzleScene(stageData) {
        var _this = _super.call(this) || this;
        _this.addChild(_this.field = new Field(stageData));
        _this.addChild(BlockManager);
        _this.addChild(EffectManager);
        InputSetPuzzle.field = _this.field;
        InputSetPuzzle.fieldRect = new egret.Rectangle(_this.field.x, _this.field.y, _this.field.width, _this.field.height);
        InputSetPuzzle.blockRect = new egret.Rectangle(BlockManager.x, BlockManager.y, BlockManager.width, BlockManager.height);
        InputManager.newInput(InputSetPuzzle);
        return _this;
    }
    SetPuzzleScene.prototype.update = function () {
        BlockManager.update();
        EffectManager.update();
        // Status.update();
        // BackMenuBitmap.update();
        // this.hudManager.update();
    };
    return SetPuzzleScene;
}(Scene));
__reflect(SetPuzzleScene.prototype, "SetPuzzleScene");
