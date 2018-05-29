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
var TitleScene = (function (_super) {
    __extends(TitleScene, _super);
    function TitleScene() {
        return _super.call(this) || this;
    }
    TitleScene.prototype.next = function () {
        SceneManager.newScene(new SelectScene());
        // SceneManager.newScene(new NameScene());
    };
    return TitleScene;
}(Scene));
__reflect(TitleScene.prototype, "TitleScene");
//# sourceMappingURL=TitleScene.js.map