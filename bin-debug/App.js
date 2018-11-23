var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var App = (function () {
    function App() {
    }
    App.startUp = function (mainCotent) {
        console.log("startUp");
        // SharedManager = new SharedManagerClass();
        var back = new eui.Rect();
        back.fillColor = 0x888888;
        back.percentWidth = 100;
        back.percentHeight = 100;
        mainCotent.addChild(back);
        App.BackMenu = new BackMenuBitmapClass();
        mainCotent.addChild(new Game());
    };
    return App;
}());
__reflect(App.prototype, "App");
