var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var StatusClass = (function () {
    function StatusClass() {
        this.score = 0;
        this.drawScore = 0;
        this.combo = 0;
        this.maxCombo = 0;
        this.mode = 0;
        this.startTime = 0;
        this.finishTime = 0;
        this.vecComboScore = [0, 10, 20, 40, 70, 110, 160, 220, 290, 370, 460, 560, 670, 790, 920, 1060, 1210, 1370, 1540, 1720, 1910, 2110, 2320, 2540, 2770, 3010, 3260, 3520, 3790, 4070, 4360, 4660, 4970, 5290, 5620, 5960, 6310, 6670, 7040, 7420, 7810, 8210, 8620, 9040, 9470, 9910, 10360, 10820, 11290, 11770];
    }
    StatusClass.prototype.reset = function (mode) {
        this.mode = mode;
        this.combo = 0;
        this.maxCombo = this.vecComboScore.length;
        this.score = 0;
        this.drawScore = 0;
        this.startTime = new Date().getDate();
        this.finishTime = 0;
    };
    StatusClass.prototype.addScore = function () {
        var add = this.vecComboScore[this.combo];
        this.score += add;
        return add;
    };
    StatusClass.prototype.getPlayTime = function () {
        var offTime = this.finishTime - this.startTime;
        return;
    };
    StatusClass.prototype.update = function () {
        if (this.drawScore != this.score) {
            this.drawScore = this.drawScore + (~~((this.score - this.drawScore) / 5) + 1);
        }
    };
    return StatusClass;
}());
__reflect(StatusClass.prototype, "StatusClass");
var Status = new StatusClass();
var GameMode;
(function (GameMode) {
    GameMode[GameMode["Puzzle"] = 0] = "Puzzle";
    GameMode[GameMode["Score"] = 1] = "Score";
    GameMode[GameMode["Score30"] = 2] = "Score30";
    GameMode[GameMode["Score1M"] = 3] = "Score1M";
    GameMode[GameMode["ScoreCombo"] = 4] = "ScoreCombo";
})(GameMode || (GameMode = {}));
