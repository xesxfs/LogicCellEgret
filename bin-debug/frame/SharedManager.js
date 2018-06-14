var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var SharedManagerClass = (function () {
    function SharedManagerClass() {
        this.vecPuzzleClear = [];
        this.sound = true;
        this.sendScoreTime = 0;
        this.sendScore30Time = 0;
        this.sendScore1minTime = 0;
        this.sendScore1comboTime = 0;
        this.init();
    }
    SharedManagerClass.prototype.init = function () {
        var i = 0;
        while (i < 25) {
            this.vecPuzzleClear.push(0);
            i++;
        }
        this.score = this.parseItem2Number("score");
        this.score1min = this.parseItem2Number("score");
        this.score30 = this.parseItem2Number("score");
        this.score1combo = this.parseItem2Number("score");
    };
    SharedManagerClass.prototype.getPuzzleClearNum = function () {
        return;
    };
    SharedManagerClass.prototype.getPerfect = function () {
    };
    SharedManagerClass.prototype.saveVecPuzzleClear = function () {
    };
    SharedManagerClass.prototype.saveScore = function (score) {
        if (this.score < score) {
            this.score = score;
            this.setItem("score", score.toString());
        }
    };
    SharedManagerClass.prototype.saveScore30 = function (score) {
        if (this.score30 < score) {
            this.score30 = score;
            this.setItem("score30", score.toString());
        }
    };
    SharedManagerClass.prototype.saveScore1min = function (score) {
        if (this.score1min < score) {
            this.score1min = score;
            this.setItem("score1min", score.toString());
        }
    };
    SharedManagerClass.prototype.saveScore1combo = function (score) {
        if (this.score1combo < score) {
            this.score1combo = score;
            this.setItem("score1combo", score.toString());
        }
    };
    SharedManagerClass.prototype.saveUserName = function (uname) {
        this.userName = uname;
        this.setItem("userName", uname);
    };
    SharedManagerClass.prototype.soundChange = function () {
        this.sound = !this.sound;
    };
    SharedManagerClass.prototype.erase = function () {
        egret.localStorage.clear();
    };
    SharedManagerClass.prototype.parseItem2Number = function (key) {
        var score = 0;
        if (this.getItem(key)) {
            this.score = parseInt(this.getItem(key));
        }
        return score;
    };
    SharedManagerClass.prototype.parseItem2Bool = function () {
    };
    SharedManagerClass.prototype.getItem = function (key) {
        return egret.localStorage.getItem(key);
    };
    SharedManagerClass.prototype.setItem = function (key, value) {
        egret.localStorage.setItem(key, value);
    };
    return SharedManagerClass;
}());
__reflect(SharedManagerClass.prototype, "SharedManagerClass");
var SharedManager = new SharedManagerClass();
