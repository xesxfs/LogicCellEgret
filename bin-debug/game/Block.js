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
var Block = (function (_super) {
    __extends(Block, _super);
    function Block() {
        var _this = _super.call(this) || this;
        _this.drawPhase = 8;
        _this.gridX = 0;
        _this.gridY = 0;
        _this.inventoryNumber = 0;
        _this.removeFlag = false;
        _this.vecLayer = new Array();
        return _this;
    }
    Block.prototype.setLayer = function () {
        var rest = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            rest[_i] = arguments[_i];
        }
        var i = 0;
        var length = ~~(rest.length);
        i = 0;
        while (i < length) {
            this.vecLayer.push(rest[i]);
            i++;
        }
    };
    Block.prototype.removeLayer = function () {
        this.removeFlag = false;
        this.drawPhase = 3;
        var resultPoint;
        resultPoint = this.localToGlobal(this.x, this.y);
        EffectManager.addEffect(new EffectLayerErase(resultPoint.x, resultPoint.y, Block.COLOR[this.vecLayer[0]]));
        this.vecLayer.shift();
        if (this.vecLayer.length != 0) {
            this.draw();
            return false;
        }
        this.destroy();
        return true;
    };
    Block.prototype.destroy = function () {
        BlockManager.removeBlock(this);
    };
    Block.prototype.draw = function () {
        var i = 0;
        var length = this.vecLayer.length;
        if (this.drawPhase == 9) {
            return;
        }
        this.drawPhase++;
        this.removeChildren();
        i = 0;
        while (i < length) {
            var blockChip = Resource.getBlockChips(((2 - i) * 5 + this.drawPhase) * 44, this.vecLayer[i] * 44);
            blockChip.width = 120;
            blockChip.height = 120;
            this.addChild(blockChip);
            i++;
        }
    };
    Block.prototype.update = function () {
        this.draw();
    };
    Block.COLOR = [0x484CFF, 0xFF3030, 0x37FF48, 0xFFFF34, 0xFF6EFF];
    return Block;
}(eui.Component));
__reflect(Block.prototype, "Block");
