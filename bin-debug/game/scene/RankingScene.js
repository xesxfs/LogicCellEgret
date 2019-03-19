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
        _this.addEventListener(egret.Event.REMOVED_FROM_STAGE, _this.disable, _this);
        InputManager.newInput(InputRanking);
        return _this;
    }
    RankingScene.prototype.childrenCreated = function () {
        // this.init();
        var backBitmap = new eui.Image("Chip_106_03_png");
        ;
        backBitmap.width = 88;
        backBitmap.height = 88;
        backBitmap.top = 44;
        backBitmap.left = 50;
        this.addChild(backBitmap);
        this.addChild(App.BackMenu);
    };
    RankingScene.prototype.init = function () {
        // var platform: any = window.platform;
        this.bitmap = platform.openDataContext.createDisplayObject(null, this.stage.stageWidth, this.stage.stageHeight);
        this.addChild(this.bitmap);
        platform.openDataContext.postMessage({
            isDisplay: this.isdisplay,
            keys: ['puzzle', 'score', 'score30', 'score1min', 'score1combo'],
            year: (new Date()).getFullYear(),
            command: "getFriendCloudStorage"
        });
    };
    RankingScene.prototype.update = function () {
        App.BackMenu.update();
    };
    RankingScene.prototype.disable = function () {
        platform.openDataContext.postMessage({
            isDisplay: false,
            keys: ['score', 'score30', 'score1min', 'score1combo'],
            year: (new Date()).getFullYear(),
        });
    };
    return RankingScene;
}(Scene));
__reflect(RankingScene.prototype, "RankingScene");
//# sourceMappingURL=RankingScene.js.map