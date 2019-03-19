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
        Status.mode = GameMode.Puzzle;
        _this.addChild(_this.field = new Field(stageData));
        var undoBitmap = Resource.getBlockChips(0, 220, 22, 22);
        undoBitmap.width = 110;
        undoBitmap.height = 110;
        undoBitmap.x = 410;
        App.undoBitmap = undoBitmap;
        _this.addChild(undoBitmap);
        _this.undoBmd = undoBitmap;
        var backBitmap = Resource.getBlockChips(22, 220, 22, 22);
        backBitmap.width = 110;
        backBitmap.height = 110;
        backBitmap.x = 130;
        App.BackButton = backBitmap;
        _this.setTopPos();
        _this.addChild(backBitmap);
        _this.addChild(BlockManager);
        _this.addChild(_this.hudManager = new HudManagerScore());
        _this.addChild(EffectManager);
        InputSetPuzzle.field = _this.field;
        InputSetPuzzle.fieldRect = new egret.Rectangle(_this.field.x, _this.field.y, _this.field.width, _this.field.height);
        InputSetPuzzle.blockRect = new egret.Rectangle(BlockManager.x, BlockManager.y, BlockManager.width, BlockManager.height);
        InputManager.newInput(InputSetPuzzle);
        _this.addChild(App.BackMenu);
        _this.hudManager.stageNOLab.text = stageData.stageNo.toString();
        return _this;
    }
    SetPuzzleScene.prototype.setTopPos = function () {
        this.field.top = (4 - this.field.fieldH) * 70 + 130;
        BlockManager.top = this.field.top + this.field.height + 30;
        // App.BackButton.horizontalCenter = 0;
        App.BackButton.top = BlockManager.top + 110 + 30;
        App.undoBitmap.top = App.BackButton.top;
    };
    SetPuzzleScene.prototype.update = function () {
        BlockManager.update();
        EffectManager.update();
        App.BackMenu.update();
        Status.update();
        this.hudManager.update();
    };
    return SetPuzzleScene;
}(Scene));
__reflect(SetPuzzleScene.prototype, "SetPuzzleScene");
//# sourceMappingURL=SetPuzzleScene.js.map