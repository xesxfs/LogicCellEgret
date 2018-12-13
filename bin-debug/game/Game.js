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
        _this.percentHeight = 100;
        _this.percentWidth = 100;
        _this.addChild(SceneManager);
        _this.addChild(InputManager);
        SceneManager.newScene(new SelectScene());
        _this.addEventListener(egret.Event.ENTER_FRAME, _this.ent, _this);
        return _this;
        // this.addChild(new ClearSprite());
        // this.touchChildren = true;
    }
    Game.prototype.ent = function (e) {
        SceneManager.scene.update();
    };
    return Game;
}(eui.Component));
__reflect(Game.prototype, "Game");
//# sourceMappingURL=Game.js.map