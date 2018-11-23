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
var HudManagerScore = (function (_super) {
    __extends(HudManagerScore, _super);
    function HudManagerScore() {
        var _this = _super.call(this) || this;
        _this.skinName = "HudManagerScoreSkin";
        return _this;
    }
    HudManagerScore.prototype.childrenCreated = function () {
        this.setGameMode();
    };
    HudManagerScore.prototype.setGameMode = function () {
        var mode = Status.mode;
        if (mode === GameMode.Puzzle) {
            this.timeLab.visible = false;
        }
        else if (mode === GameMode.Score) {
            this.stageLab.visible = false;
            this.stageNOLab.visible = false;
        }
        else if (mode === GameMode.Score30) {
            this.stageLab.visible = false;
            this.stageNOLab.visible = false;
        }
        else if (mode === GameMode.Score1M) {
            this.stageLab.visible = false;
            this.stageNOLab.visible = false;
        }
        else if (mode === GameMode.ScoreCombo) {
            this.stageLab.visible = false;
            this.stageNOLab.visible = false;
        }
    };
    HudManagerScore.prototype.update = function () {
        this.scoreLab.text = Status.drawScore.toString();
        if (Status.mode === GameMode.Score1M) {
            var timeStr;
            var h = 0;
            var min = 0;
            var s = 0;
            var cnt = SetScore1minScene.cnt;
            if (cnt >= 0) {
                if (cnt > 1800) {
                    cnt = 1800;
                }
                timeStr = "";
                h = (1800 - cnt) / 30;
                min = h % 60;
                s = ~~((h * 100) % 100);
                if (min < 10) {
                    timeStr = timeStr + "0";
                }
                timeStr = timeStr + ("" + ~~min + ".");
                if (s < 10) {
                    timeStr = timeStr + "0";
                }
                timeStr = timeStr + ("" + ~~s);
                this.timeLab.text = timeStr;
            }
            else {
                this.timeLab.text = "60.00";
            }
        }
        if (Status.mode === GameMode.Score30) {
            this.timeLab.text = SetScore30Scene.cnt.toString();
        }
    };
    return HudManagerScore;
}(eui.Component));
__reflect(HudManagerScore.prototype, "HudManagerScore");
