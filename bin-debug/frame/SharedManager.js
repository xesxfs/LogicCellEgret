var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var SharedManagerClass = (function () {
    function SharedManagerClass() {
        this.vecPuzzleClear = [];
        this.score = 0;
        this.score1min = 0;
        this.score30 = 0;
        this.score1combo = 0;
        this.userName = 'usercc';
        this.sound = true;
        this.sendScoreTime = 0;
        this.sendScore30Time = 0;
        this.sendScore1minTime = 0;
        this.sendScore1comboTime = 0;
        this.dayScore = 0;
        this.dayScore30 = 0;
        this.dayScore1min = 0;
        this.dayScore1combo = 0;
        this.titles = [
            ["[有人@我]：智商超200的快来玩这游戏！", 'resource/assets/images/Icon48.png'],
            ["凭智商玩的得好，为什么要停下来", 'resource/assets/images/Icon48.png'],
            ["这游戏也太虐了，我为什么要点进来…", 'resource/assets/images/Icon48.png'],
            ["300分（分值），我不是针对谁，在座的各位都玩不过我~", 'resource/assets/images/Icon48.png'],
            ["据说只有1%的人能上300分（分值），需要超强逻辑", 'resource/assets/images/Icon48.png'],
            ["战五渣们，来看看你们的逻辑分数吧", 'resource/assets/images/Icon48.png']
        ];
    }
    SharedManagerClass.getInstance = function () {
        !this.instance && (this.instance = new SharedManagerClass());
        return this.instance;
    };
    SharedManagerClass.prototype.init = function () {
        try {
            this.showShareMenu();
            this.getUpdateManager();
            this.getPuzzleClearNum();
            this.getScore();
            this.getScore30();
            this.getScore1combo();
            this.getScore1min();
            console.log("init:", this.score, this.score30, this.score1min, this.score1combo);
        }
        catch (e) {
            console.error(e);
        }
    };
    SharedManagerClass.prototype.getPuzzleClearNum = function () {
        var vecStr = this.getItem('puzzle');
        var i = 0;
        while (i < 25) {
            this.vecPuzzleClear.push(0);
            i++;
        }
        if (vecStr) {
            var vecArr = vecStr.split(',');
            for (var i_1 = 0; i_1 < vecArr.length; i_1++) {
                this.vecPuzzleClear[i_1] = parseInt(vecArr[i_1], 10);
            }
        }
        this.setItem('puzzle', this.vecPuzzleClear.toString());
    };
    SharedManagerClass.prototype.getCurPuzzle = function () {
        var cur = 0;
        for (var i = 0; i < this.vecPuzzleClear.length; i++) {
            if (this.vecPuzzleClear[i] === 0) {
                cur = i;
                break;
            }
        }
        return cur;
    };
    SharedManagerClass.prototype.getScore = function () {
        var resultData = this.getItem('score');
        if (!resultData || resultData == '') {
            resultData = '0';
        }
        try {
            this.score = parseInt(resultData, 10);
        }
        catch (e) {
        }
    };
    SharedManagerClass.prototype.getScore30 = function () {
        var resultData = this.getItem('score30');
        if (!resultData || resultData == '') {
            resultData = '0';
        }
        try {
            this.score30 = parseInt(resultData, 10);
        }
        catch (e) {
        }
    };
    SharedManagerClass.prototype.getScore1min = function () {
        var resultData = this.getItem('score1min');
        if (!resultData || resultData == '') {
            resultData = '0';
        }
        try {
            this.score1min = parseInt(resultData, 10);
        }
        catch (e) {
        }
    };
    SharedManagerClass.prototype.getScore1combo = function () {
        var resultData = this.getItem('score1combo');
        if (!resultData || resultData == '') {
            resultData = '0';
        }
        try {
            this.score1combo = parseInt(resultData, 10);
        }
        catch (e) {
        }
    };
    SharedManagerClass.prototype.getPerfect = function () {
    };
    SharedManagerClass.prototype.saveVecPuzzleClear = function () {
        this.setItem('puzzle', this.vecPuzzleClear.toString());
    };
    SharedManagerClass.prototype.saveScore = function (score) {
        if (this.score < score) {
            this.score = score;
            this.setItem("score", score);
        }
    };
    SharedManagerClass.prototype.saveScore30 = function (score) {
        if (this.score30 < score) {
            this.score30 = score;
            this.setItem("score30", score);
        }
    };
    SharedManagerClass.prototype.saveScore1min = function (score) {
        if (this.score1min < score) {
            this.score1min = score;
            this.setItem("score1min", score);
        }
    };
    SharedManagerClass.prototype.saveScore1combo = function (score) {
        if (this.score1combo < score) {
            this.score1combo = score;
            this.setItem("score1combo", score);
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
    SharedManagerClass.prototype.getItem = function (key) {
        var resultData = egret.localStorage.getItem(key);
        return resultData;
    };
    SharedManagerClass.prototype.setItem = function (key, value) {
        if (typeof (value) == 'number') {
            value = value.toString();
        }
        egret.localStorage.setItem(key, value);
        if (key === 'puzzle') {
            value = this.getCurPuzzle().toString();
        }
        platform.uploadWXData(key, value);
    };
    SharedManagerClass.prototype.showShareMenu = function () {
        var _this = this;
        platform.showShareMenu({ withShareTicket: false });
        platform.onShareAppMessage(function () {
            var shareIndex = ~~(Math.random() * (_this.titles.length - 1));
            return {
                title: _this.titles[shareIndex][0],
                imageUrl: _this.titles[shareIndex][1],
                query: ""
            };
        });
    };
    SharedManagerClass.prototype.shareAppMessage = function () {
        var shareIndex = ~~(Math.random() * (this.titles.length - 1));
        platform.shareAppMessage({
            title: this.titles[shareIndex][0],
            imageUrl: this.titles[shareIndex][1],
            query: '',
        });
    };
    /**
     * 微信小游戏更新管理
     */
    SharedManagerClass.prototype.getUpdateManager = function () {
        var updateManager = platform.getUpdateManager();
        if (updateManager) {
            updateManager.onCheckForUpdate(function (res) {
                // 请求完新版本信息的回调
                console.log("是否有版本更新：", res.hasUpdate);
            });
            updateManager.onUpdateReady(function () {
                // 新的版本已经下载好，调用 applyUpdate 应用新版本并重启
                updateManager.applyUpdate();
            });
            updateManager.onUpdateFailed(function () {
                // 新的版本下载失败
            });
        }
    };
    SharedManagerClass.prototype.postMessage = function (data) {
        platform.openDataContext.postMessage(data);
    };
    return SharedManagerClass;
}());
__reflect(SharedManagerClass.prototype, "SharedManagerClass");
var SharedManager = new SharedManagerClass();
