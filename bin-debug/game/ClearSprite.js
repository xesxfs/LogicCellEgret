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
var ClearSprite = (function (_super) {
    __extends(ClearSprite, _super);
    function ClearSprite(isPerfect, isFinish, isRewarded) {
        if (isFinish === void 0) { isFinish = false; }
        if (isRewarded === void 0) { isRewarded = true; }
        var _this = _super.call(this) || this;
        _this.toY = 500;
        _this.isRewarded = true;
        _this.isPerfect = isPerfect;
        _this.isFinish = isFinish;
        _this.isRewarded = isRewarded;
        _this.skinName = "ClearSpriteSkin";
        return _this;
    }
    ClearSprite.prototype.childrenCreated = function () {
        // console.log("clearCheck ClearSprite");
        console.log("ClearSprite", this.isRewarded);
        this.isRewarded ? this.rewarded() : this.nornal();
        this.addEventListener("touchTap", this.onTouch, this);
    };
    ClearSprite.prototype.nornal = function () {
        if (!this.isPerfect)
            this.statusLab.text = "清除";
        if (this.isFinish) {
            this.statusLab.text = "完成";
        }
        egret.Tween.get(this.clearGroup).to({ y: this.toY }, 500, egret.Ease.quintOut).wait(100).to({ x: 10 }, 500, egret.Ease.quintOut);
        egret.Tween.get(this.menuGroup).wait(600).to({ y: this.toY }, 500, egret.Ease.quintOut);
        egret.Tween.get(this.retryGroup).wait(800).to({ y: this.toY }, 500, egret.Ease.quintOut);
        egret.Tween.get(this.nextGroup).wait(1000).to({ y: this.toY }, 500, egret.Ease.quintOut);
        egret.Tween.get(this.shareGroup).wait(1200).to({ y: this.toY }, 500, egret.Ease.quintOut);
    };
    ClearSprite.prototype.rewarded = function () {
        this.shareGroup.x = this.nextGroup.x;
        this.menuGroup.x = 120;
        egret.Tween.get(this.shareGroup).wait(1000).to({ y: this.height / 2 - this.nextGroup.height / 2 }, 500, egret.Ease.quintOut);
        egret.Tween.get(this.continueGroup).to({ y: this.height / 2 - this.continueGroup.height / 2 }, 800, egret.Ease.quintOut);
        egret.Tween.get(this.menuGroup).wait(1000).to({ y: this.height / 2 - this.menuGroup.height / 2 }, 500, egret.Ease.quintOut);
    };
    ClearSprite.prototype.onTouch = function (e) {
        switch (e.target) {
            case this.clearGroup:
                break;
            case this.menuGroup:
                SceneManager.newScene(new SelectScene());
                break;
            case this.retryGroup:
                if (this.isFinish) {
                    SceneManager.newScene(new this.retryScene());
                }
                else {
                    SceneManager.newScene(new SetPuzzleScene(StageManager.getStage(-2)));
                }
                break;
            case this.nextGroup:
                var stageData = StageManager.getStage(-1);
                if (stageData != null) {
                    SceneManager.newScene(new SetPuzzleScene(stageData));
                }
                break;
            case this.shareGroup:
                SharedManager.shareAppMessage();
                break;
            case this.continueGroup:
                platform.showRewardedVideoAd();
                break;
        }
    };
    return ClearSprite;
}(eui.Component));
__reflect(ClearSprite.prototype, "ClearSprite");
//# sourceMappingURL=ClearSprite.js.map