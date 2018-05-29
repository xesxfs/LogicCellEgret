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
var Game = (function (_super) {
    __extends(Game, _super);
    function Game() {
        var _this = _super.call(this) || this;
        _this.addChild(SceneManager);
        SceneManager.newScene(new TitleScene());
        SceneManager.touchChildren = false;
        SceneManager.touchEnabled = false;
        _this.addChild(InputManager);
        _this.addEventListener(egret.Event.ENTER_FRAME, _this.ent, _this);
        SceneManager.newScene(new SetPuzzleScene(StageManager.getStage(2)));
        return _this;
    }
    Game.prototype.ent = function (e) {
        SceneManager.scene.update();
    };
    return Game;
}(egret.Sprite));
__reflect(Game.prototype, "Game");
//# sourceMappingURL=Game.js.map