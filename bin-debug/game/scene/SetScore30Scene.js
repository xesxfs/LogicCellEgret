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
var SetScore30Scene = (function (_super) {
    __extends(SetScore30Scene, _super);
    function SetScore30Scene() {
        var _this = _super.call(this) || this;
        Status.mode = GameMode.Score30;
        _this.addChild(_this.field = new Field(new StageData("0,0,ScoreAttack,3,3,111111111")));
        var backBitmap = Resource.getBlockChips(22, 220, 22, 22);
        backBitmap.width = 110;
        backBitmap.height = 110;
        App.BackButton = backBitmap;
        _this.setTopPos();
        _this.addChild(backBitmap);
        BlockManager.addRandomInventoryBlock(0);
        BlockManager.addRandomInventoryBlock(1);
        BlockManager.addRandomInventoryBlock(2);
        _this.addChild(BlockManager);
        _this.addChild(_this.hudManager = new HudManagerScore());
        _this.addChild(App.BackMenu);
        _this.addChild(EffectManager);
        InputManager.newInput(InputSetScore);
        InputSetScore.field = _this.field;
        return _this;
    }
    SetScore30Scene.prototype.setTopPos = function () {
        this.field.top = 200;
        BlockManager.top = this.field.top + this.field.height + 30;
        App.BackButton.horizontalCenter = 0;
        App.BackButton.top = BlockManager.top + 110 + 30;
    };
    SetScore30Scene.prototype.update = function () {
        BlockManager.update();
        EffectManager.update();
        App.BackMenu.update();
        Status.update();
        this.hudManager.update();
    };
    SetScore30Scene.isFinish = false;
    return SetScore30Scene;
}(Scene));
__reflect(SetScore30Scene.prototype, "SetScore30Scene");
//# sourceMappingURL=SetScore30Scene.js.map