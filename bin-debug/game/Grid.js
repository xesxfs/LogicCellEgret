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
var Grid = (function (_super) {
    __extends(Grid, _super);
    function Grid(gx, gy, x, y) {
        var _this = _super.call(this) || this;
        _this.gridX = gx;
        _this.gridY = gy;
        _this.x = x;
        _this.y = y;
        _this.width = 120;
        _this.height = 120;
        _this.fillAlpha = 0;
        _this.strokeWeight = 10;
        _this.strokeAlpha = 0;
        return _this;
    }
    Grid.prototype.setBlock = function (block) {
        this.block = block;
        block.gridX = this.gridX;
        block.gridY = this.gridY;
        // let point = this.localToGlobal(this.x, this.y);
        // block.x = point.x;
        // block.y = point.y;
        // block.x = this.parent.x + this.x;
        // block.y = this.parent.y + this.y;
        block.x = 0;
        block.y = 0;
        this.addChild(block);
    };
    Grid.prototype.drawBroderRect = function () {
        this.strokeAlpha = 1;
        // this.graphics.beginFill(0x00000);
        // this.graphics.lineStyle(4, 587202559);
        // this.graphics.drawRect(0, 0, 40, 40);
        // this.graphics.endFill();
    };
    return Grid;
}(eui.Rect));
__reflect(Grid.prototype, "Grid");
