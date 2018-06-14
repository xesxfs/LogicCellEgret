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
var SetScore1comboScene = (function (_super) {
    __extends(SetScore1comboScene, _super);
    function SetScore1comboScene() {
        var _this = _super.call(this) || this;
        Status.mode = GameMode.ScoreCombo;
        _this.addChild(_this.field = new Field(new StageData("0,0,ScoreAttack,5,4,11111111111111111111")));
        var backBitmap = Resource.getBlockChips(22, 220, 22, 22);
        backBitmap.width = 110;
        backBitmap.height = 110;
        backBitmap.x = 265;
        backBitmap.y = 1000;
        _this.addChild(backBitmap);
        BlockManager.addRandomInventoryBlock(0);
        BlockManager.addRandomInventoryBlock(1);
        BlockManager.addRandomInventoryBlock(2);
        BlockManager.addRandomInventoryBlock(3);
        BlockManager.addRandomInventoryBlock(4);
        _this.addChild(BlockManager);
        _this.addChild(_this.hudManager = new HudManagerScore());
        _this.addChild(App.BackMenu);
        _this.addChild(EffectManager);
        InputManager.newInput(InputSetScore);
        InputSetScore.field = _this.field;
        return _this;
    }
    SetScore1comboScene.prototype.update = function () {
        BlockManager.update();
        EffectManager.update();
        App.BackMenu.update();
        Status.update();
        this.hudManager.update();
    };
    SetScore1comboScene.isFinish = false;
    return SetScore1comboScene;
}(Scene));
__reflect(SetScore1comboScene.prototype, "SetScore1comboScene");
