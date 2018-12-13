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
var PuzzleSelectScene = (function (_super) {
    __extends(PuzzleSelectScene, _super);
    function PuzzleSelectScene() {
        var _this = _super.call(this) || this;
        _this.skinName = "PuzzleSelectSceneSkin";
        return _this;
    }
    PuzzleSelectScene.prototype.childrenCreated = function () {
        InputManager.newInput(InputPuzzleSelect);
        this.setStageShow();
    };
    PuzzleSelectScene.prototype.setStageShow = function () {
        var curStage = SharedManager.getCurPuzzle();
        for (var i = 0; i < this.stageGroup.numChildren; i++) {
            var stage = this.stageGroup.getChildAt(i);
            var color = 0x000000;
            if (i === curStage) {
                color = 0xBA9B4A;
            }
            // if (i > curStage) {
            // 	color = 0xD1CCCC;
            // }
            if (i < curStage) {
                color = 0xD1CCCC;
            }
            stage.fillColor = color;
        }
    };
    return PuzzleSelectScene;
}(Scene));
__reflect(PuzzleSelectScene.prototype, "PuzzleSelectScene");
//# sourceMappingURL=PuzzleSelectScene.js.map