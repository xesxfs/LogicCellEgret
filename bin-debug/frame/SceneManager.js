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
var SceneManagerClass = (function (_super) {
    __extends(SceneManagerClass, _super);
    function SceneManagerClass() {
        return _super.call(this) || this;
    }
    SceneManagerClass.prototype.newScene = function (next) {
        this.nextScene = next;
        if (this.scene != null) {
            // KTW.to(this.scene, 0.3, { "alpha": 0 }, Linear.easeOut, this.next);
            this.next();
        }
        else {
            this.next();
        }
    };
    SceneManagerClass.prototype.next = function () {
        var sceneId = 0;
        this.removeChildren();
        this.scene = null;
        this.scene = this.nextScene;
        if (this.scene instanceof SetPuzzleScene) {
            sceneId = 0;
        }
        else if (this.scene instanceof SetScoreScene) {
            sceneId = 1;
        }
        else if (this.scene instanceof SetScore30Scene) {
            // SetScore30Scene.cnt = 30;
            // SetScore30Scene.isFinish = false;
            sceneId = 2;
        }
        else if (this.scene instanceof SetScore1minScene) {
            // SetScore1minScene.cnt = -95;
            // SetScore1minScene.isFinish = false;
            sceneId = 3;
        }
        else if (this.scene instanceof SetScore1comboScene) {
            // SetScore1comboScene.isFinish = false;
            sceneId = 4;
        }
        // Status.reset(_loc1_);
        // this.nextScene.alpha = 0;
        // KTW.to(this.nextScene, 0.3, { "alpha": 1 }, Linear.easeOut, null, 0.2);
        this.addChild(this.scene);
    };
    return SceneManagerClass;
}(egret.Sprite));
__reflect(SceneManagerClass.prototype, "SceneManagerClass");
var SceneManager = new SceneManagerClass();
//# sourceMappingURL=SceneManager.js.map