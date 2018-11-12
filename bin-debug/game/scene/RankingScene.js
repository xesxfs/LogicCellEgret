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
var RankingScene = (function (_super) {
    __extends(RankingScene, _super);
    function RankingScene() {
        var _this = _super.call(this) || this;
        _this.isdisplay = true;
        InputManager.newInput(InputRanking);
        return _this;
    }
    RankingScene.prototype.childrenCreated = function () {
        this.init();
        var backBitmap = Resource.getBlockChips(22, 220, 22, 22);
        backBitmap.width = 110;
        backBitmap.height = 110;
        backBitmap.x = 265;
        backBitmap.y = 1000;
        this.addChild(backBitmap);
        this.addChild(App.BackMenu);
    };
    RankingScene.prototype.init = function () {
        var platform = window.platform;
        this.bitmap = platform.openDataContext.createDisplayObject(null, this.stage.stageWidth, this.stage.stageHeight);
        this.addChild(this.bitmap);
        platform.openDataContext.postMessage({
            isDisplay: this.isdisplay,
            keys: ['score', 'score30', 'score1min', 'score1combo'],
            year: (new Date()).getFullYear(),
            command: "getFriendCloudStorage"
        });
    };
    RankingScene.prototype.update = function () {
        App.BackMenu.update();
    };
    return RankingScene;
}(Scene));
__reflect(RankingScene.prototype, "RankingScene");
