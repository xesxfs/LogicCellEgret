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
var InputRankingClass = (function (_super) {
    __extends(InputRankingClass, _super);
    function InputRankingClass() {
        return _super.call(this) || this;
    }
    InputRankingClass.prototype.mouseDownEvent = function (e) {
        if (e.stageY >= 1000 && e.stageX >= 256 && e.stageX <= (256 + 110)) {
            App.BackMenu.updateStart();
        }
    };
    InputRankingClass.prototype.mouseUpEvent = function (e) {
        App.BackMenu.updateFinish();
    };
    return InputRankingClass;
}(Input));
__reflect(InputRankingClass.prototype, "InputRankingClass");
var InputRanking = new InputRankingClass();
