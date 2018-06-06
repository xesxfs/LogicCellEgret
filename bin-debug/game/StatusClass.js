var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var StatusClass = (function () {
    function StatusClass() {
        this.combo = 0;
        this.maxCombo = 0;
    }
    StatusClass.prototype.reset = function (mode) {
        this.mode = mode;
        this.combo = 0;
        this.maxCombo = 0;
    };
    return StatusClass;
}());
__reflect(StatusClass.prototype, "StatusClass");
var Status = new StatusClass();
