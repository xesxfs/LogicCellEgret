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
var InputPuzzleSelectClass = (function (_super) {
    __extends(InputPuzzleSelectClass, _super);
    function InputPuzzleSelectClass() {
        return _super.call(this) || this;
    }
    InputPuzzleSelectClass.prototype.mouseDownEvent = function (e) {
        // SceneManager.newScene(new SetPuzzleScene(StageManager.getStage(0)));
        var curStage = SharedManager.getCurPuzzle();
        if (SceneManager.scene instanceof PuzzleSelectScene) {
            var scene = SceneManager.scene;
            var p = egret.Point.create(e.stageX, e.stageY);
            if (scene.stageGroup.getTransformedBounds(this).containsPoint(p)) {
                var offx = e.stageX - scene.stageGroup.x;
                var offy = e.stageY - scene.stageGroup.y;
                offx /= (100 + 22);
                offy /= (100 + 40);
                var sid = 5 * ~~offy + ~~offx;
                if (sid > 24 || sid < 0)
                    sid = 0;
                if (sid <= curStage) {
                    SceneManager.newScene(new SetPuzzleScene(StageManager.getStage(sid)));
                }
            }
            else if (scene.backImg.getTransformedBounds(this).containsPoint(p)) {
                SceneManager.newScene(new SelectScene());
            }
        }
    };
    InputPuzzleSelectClass.prototype.mouseUpEvent = function (param1) {
    };
    InputPuzzleSelectClass.prototype.mouseOutEvent = function (param1) {
    };
    return InputPuzzleSelectClass;
}(Input));
__reflect(InputPuzzleSelectClass.prototype, "InputPuzzleSelectClass");
var InputPuzzleSelect = new InputPuzzleSelectClass();
