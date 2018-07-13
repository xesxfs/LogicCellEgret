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
var InputSelectClass = (function (_super) {
    __extends(InputSelectClass, _super);
    function InputSelectClass() {
        return _super.call(this) || this;
    }
    InputSelectClass.prototype.mouseDownEvent = function (e) {
        if (SceneManager.scene instanceof SelectScene) {
            var scene = SceneManager.scene;
            var p = egret.Point.create(e.stageX, e.stageY);
            if (scene.puzzleGroup.getTransformedBounds(this).containsPoint(p)) {
                SceneManager.newScene(new PuzzleSelectScene());
            }
            else if (scene.scoreGroup.getTransformedBounds(this).containsPoint(p)) {
                SceneManager.newScene(new SetScoreScene());
            }
            else if (scene.score30Group.getTransformedBounds(this).containsPoint(p)) {
                SceneManager.newScene(new SetScore30Scene());
            }
            else if (scene.score1m.getTransformedBounds(this).containsPoint(p)) {
                SceneManager.newScene(new SetScore1minScene());
            }
            else if (scene.rankGroup.getTransformedBounds(this).containsPoint(p)) {
                SceneManager.newScene(new RankingScene());
            }
            else if (scene.optionGroup.getTransformedBounds(this).containsPoint(p)) {
                // SceneManager.newScene(new OptionScene());
            }
            else if (scene.comboGroup.getTransformedBounds(this).containsPoint(p)) {
                SceneManager.newScene(new SetScore1comboScene());
            }
        }
    };
    return InputSelectClass;
}(Input));
__reflect(InputSelectClass.prototype, "InputSelectClass");
var InputSelect = new InputSelectClass();
