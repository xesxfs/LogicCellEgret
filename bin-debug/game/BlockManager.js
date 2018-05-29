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
var BlockManagerClass = (function (_super) {
    __extends(BlockManagerClass, _super);
    function BlockManagerClass() {
        var _this = _super.call(this) || this;
        _this.mouseX = 0;
        _this.mouseY = 0;
        _this.inventoryPadding = 0;
        return _this;
    }
    BlockManagerClass.prototype.reset = function (field) {
        this.removeChildren();
        this.vecBlock = new Array();
        this.vecInventoryBlock = [null, null, null, null, null];
        this.vec2UndoString = [[]];
        this.field = field;
        this.inventoryPadding = 0;
    };
    BlockManagerClass.prototype.update = function () {
        var i = 0;
        var length = this.vecBlock.length;
        i = 0;
        while (i < length) {
            this.vecBlock[i].update();
            i++;
        }
        if (this.mouseDownBlock != null) {
            this.mouseDownBlock.x = BlockManager.mouseX - 22;
            this.mouseDownBlock.y = BlockManager.mouseY - 22;
        }
    };
    BlockManagerClass.prototype.addBlock = function (block) {
        this.vecBlock.push(block);
        this.addChild(block);
    };
    BlockManagerClass.prototype.AddAllBlock = function (blockDataStr, param2) {
        if (param2 === void 0) { param2 = true; }
        var i = 0;
        var j = 0;
        var splitStr = null;
        var block = null;
        var blockType = 0;
        var childIdx = 0;
        var l = blockDataStr.length;
        if (param2) {
            l--;
        }
        i = 0;
        while (i < l) {
            splitStr = blockDataStr[i];
            blockType = parseInt(splitStr.charAt(0));
            childIdx = parseInt(splitStr.charAt(1));
            block = new Block();
            j = 2;
            while (j < splitStr.length) {
                block.vecLayer.push(parseInt(splitStr.charAt(j)));
                j++;
            }
            /**可操作砖块**/
            if (blockType == 9) {
                this.addInventoryBlock(block, childIdx);
            }
            else {
                this.field.getGrid(blockType, childIdx).setBlock(block);
                this.addBlock(block);
            }
            block.draw();
            i++;
        }
        while (this.vecInventoryBlock.length < 5) {
            this.vecInventoryBlock.push(null);
        }
        if (param2) {
            // Status.score = parseInt(param1[_loc3_]);
            // Status.drawScore = Status.score;
        }
    };
    /**增加操作砖块**/
    BlockManagerClass.prototype.addInventoryBlock = function (block, layerIndex) {
        while (this.vecInventoryBlock.length < layerIndex) {
            this.vecInventoryBlock.push(null);
        }
        this.vecInventoryBlock[layerIndex] = block;
        block.x = layerIndex * 48 + 2 + this.inventoryPadding;
        block.y = 240;
        block.inventoryNumber = layerIndex;
        this.addChild(block);
    };
    BlockManagerClass.prototype.removeBlock = function (block) {
        var i = 0;
        var length = this.vecBlock.length;
        i = 0;
        while (i < length) {
            if (block == this.vecBlock[i]) {
                this.vecBlock.splice(i, 1);
                this.removeChild(block);
                this.field.getGrid(block.gridX, block.gridY).block = null;
                break;
            }
            i++;
        }
    };
    BlockManagerClass.prototype.mouseDownInventory = function (idx) {
        if (this.vecInventoryBlock.length <= idx) {
            return;
        }
        var down = this.vecInventoryBlock[idx];
        if (down != null) {
            this.mouseDownBlock = down;
            this.setChildIndex(down, this.numChildren - 1);
        }
    };
    BlockManagerClass.prototype.mouseUp = function () {
        if (this.mouseDownBlock != null) {
            // KTW.to(this.mouseDownBlock, 0.1, {
            // 	"x": this.mouseDownBlock.inventoryNumber * 48 + 2 + this.inventoryPadding,
            // 	"y": 240
            // });
            this.mouseDownBlock.x = this.mouseDownBlock.inventoryNumber * 48 + 2 + this.inventoryPadding;
            this.mouseDownBlock.y = 240;
            this.mouseDownBlock = null;
        }
    };
    BlockManagerClass.prototype.clearCheck = function () {
        var i = 0;
        var length = this.vecInventoryBlock.length;
        if (this.vecBlock.length != 0) {
            return false;
        }
        i = 0;
        while (i < length) {
            if (this.vecInventoryBlock[i] != null) {
                return false;
            }
            i++;
        }
        InputManager.newInput(null);
        // KTW.to(this, 1, {}, null, function (): void {
        // 	InputManager.newInput(InputClear);
        // });
        // if (this.field.stageData.star3 <= Status.score) {
        // 	parent.addChild(new ClearSprite(true));
        // 	SharedManager.vecPuzzleClear[this.field.stageData.stageNo - 1] = 2;
        // }
        // else {
        // 	parent.addChild(new ClearSprite(false));
        // 	if (SharedManager.vecPuzzleClear[this.field.stageData.stageNo - 1] != 2) {
        // 		SharedManager.vecPuzzleClear[this.field.stageData.stageNo - 1] = 1;
        // 	}
        // }
        // SharedManager.saveVecPuzzleClear();
        return true;
    };
    BlockManagerClass.prototype.finishCheck = function (param1) {
        var length = this.vecInventoryBlock.length;
        if (this.vecBlock.length != 9) {
            return false;
        }
        this.finish(param1);
        return true;
    };
    BlockManagerClass.prototype.finish = function (param1) {
    };
    return BlockManagerClass;
}(egret.Sprite));
__reflect(BlockManagerClass.prototype, "BlockManagerClass");
var BlockManager = new BlockManagerClass();
//# sourceMappingURL=BlockManager.js.map