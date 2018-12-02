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
var SelectScene = (function (_super) {
    __extends(SelectScene, _super);
    function SelectScene() {
        var _this = _super.call(this) || this;
        _this.skinName = "SelectSceneSkin";
        return _this;
    }
    SelectScene.prototype.childrenCreated = function () {
        InputManager.newInput(InputSelect);
        this.score1mLab.text = SharedManager.score1min.toString();
        this.scoreLab.text = SharedManager.score.toString();
        this.score30Lab.text = SharedManager.score30.toString();
        this.scoreComboLab.text = SharedManager.score1combo.toString();
        this.puzzleLab.text = SharedManager.getCurPuzzle().toString() + '/25';
    };
    return SelectScene;
}(Scene));
__reflect(SelectScene.prototype, "SelectScene");
