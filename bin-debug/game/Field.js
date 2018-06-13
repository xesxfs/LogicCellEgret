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
var Field = (function (_super) {
    __extends(Field, _super);
    function Field(stageData) {
        var _this = _super.call(this) || this;
        _this.fieldW = 0;
        _this.fieldH = 0;
        _this.exScore = 0;
        var layout = new eui.TileLayout();
        layout.horizontalGap = 22;
        layout.verticalGap = 18;
        // layout.verticalAlign = egret.VerticalAlign.BOTTOM;
        _this.layout = layout;
        _this.horizontalCenter = 0;
        _this.verticalCenter = 0;
        var w = 0;
        var h = 0;
        var grid = null;
        _this.vecSound = Resource.getMusic();
        _this.stageData = stageData;
        layout.requestedColumnCount = _this.fieldW = stageData.fieldW;
        layout.requestedRowCount = _this.fieldH = stageData.fieldH;
        Field.fieldX = _this.x;
        Field.fieldY = _this.y;
        _this.vec2Grid = [];
        while (h < _this.fieldH) {
            _this.vec2Grid.push([]);
            w = 0;
            while (w < _this.fieldW) {
                grid = new Grid(h, w);
                grid.type = parseInt(_this.stageData.fieldData.charAt(w * _this.fieldH + h));
                _this.vec2Grid[h].push(grid);
                if (grid.type == 1) {
                    grid.drawBroderRect();
                }
                _this.addChild(grid);
                w++;
            }
            h++;
        }
        console.log(_this.vec2Grid);
        /****!!放到这里代码可读性和逻辑性变差，但是省去了在多个场景调用!!****/
        BlockManager.reset(_this);
        BlockManager.AddAllBlock(stageData.vecBlockData, false);
        BlockManager.addUndoString();
        return _this;
    }
    Field.prototype.getGrid = function (x, y) {
        var gridX = x;
        var gridY = y;
        try {
            return this.vec2Grid[gridX][gridY];
        }
        catch (e) {
            return null;
        }
    };
    /***检查匹配 **/
    Field.prototype.matchCheck = function () {
        var i = 0;
        var j = 0;
        var gridX = 0;
        var gridY = 0;
        var blockColor = 0;
        var point = null;
        var grid = null;
        var block = null;
        var grid1 = null;
        var grid2 = null;
        var checkBlock1 = null;
        var checkBlock2 = null;
        var addScore = 0;
        var combo = 0;
        var mode = 0;
        Status.combo++;
        this.matchingJob = null;
        var nestFlag = false;
        i = 0;
        while (i < this.fieldH) {
            j = 0;
            while (j < this.fieldW) {
                grid = this.vec2Grid[i][j];
                if (grid.block != null) {
                    block = grid.block;
                    blockColor = block.vecLayer[0];
                    grid1 = this.getGrid(i + 1, j);
                    grid2 = this.getGrid(i, j + 1);
                    if (grid1 != null) {
                        checkBlock1 = grid1.block;
                    }
                    else {
                        checkBlock1 = null;
                    }
                    if (grid2 != null) {
                        checkBlock2 = grid2.block;
                    }
                    else {
                        checkBlock2 = null;
                    }
                    if (checkBlock1 != null && checkBlock1.vecLayer[0] == blockColor) {
                        checkBlock1.removeFlag = true;
                        block.removeFlag = true;
                        nestFlag = true;
                    }
                    if (checkBlock2 != null && checkBlock2.vecLayer[0] == blockColor) {
                        checkBlock2.removeFlag = true;
                        block.removeFlag = true;
                        nestFlag = true;
                    }
                }
                j++;
            }
            i++;
        }
        var length = BlockManager.vecBlock.length;
        i = 0;
        while (i < length) {
            block = BlockManager.vecBlock[i];
            if (block.removeFlag && block.removeLayer()) {
                i--;
                length--;
            }
            i++;
        }
        if (nestFlag) {
            if (Status.combo < 8) {
                this.vecSound[Status.combo - 1].play(0, 1);
            }
            else {
                this.vecSound[7].play(0, 1);
            }
            this.matchingJob = egret.Tween.get(this).to({}, 500).call(this.matchCheck, this);
        }
        else {
            addScore = Status.score - this.exScore;
            combo = Status.combo - 1;
            if (Status.maxCombo < combo) {
                Status.maxCombo = combo;
            }
            mode = Status.mode;
            if (combo > 0) {
                Status.combo = Status.combo - 1;
                Status.addScore();
                i = 0;
                while (i < 9) {
                    if (i != 4) {
                        //  EffectManager.addEffect(new EffectScore("" + Status.addScore(),i / 3,i % 3));
                    }
                    else {
                        //  EffectManager.addEffect(new EffectScore("Bonus!",i / 3,i % 3));
                    }
                    i++;
                }
            }
            Status.combo = 0;
            if (mode == GameMode.Puzzle && !BlockManager.clearCheck()) {
                BlockManager.addUndoString();
            }
            else if (mode == GameMode.Score) {
                BlockManager.finishCheck(SetScoreScene);
            }
            else if (mode == GameMode.Score30) {
                if (SetScore30Scene.cnt == 0) {
                    BlockManager.finish(SetScore30Scene);
                }
                BlockManager.finishCheck(SetScore30Scene);
            }
            else if (Status.mode == GameMode.Score1M) {
                BlockManager.finishCheck(SetScore1minScene);
            }
            else if (Status.mode == GameMode.ScoreCombo && (Status.score != 0 || BlockManager.vecBlock.length == 20)) {
                BlockManager.finish(SetScore1comboScene);
            }
        }
    };
    Field.prototype.mouseUpField = function (gx, gy) {
        var gridX = gx;
        var gridY = gy;
        var grid = this.getGrid(gridX, gridY);
        var mouseDownBlock = BlockManager.mouseDownBlock;
        if (grid != null && grid.block == null && grid.type == 1) {
            grid.setBlock(mouseDownBlock);
            BlockManager.vecInventoryBlock[mouseDownBlock.inventoryNumber] = null;
            BlockManager.vecBlock.push(mouseDownBlock);
            if (Status.mode > 0) {
                BlockManager.addRandomInventoryBlock(BlockManager.mouseDownBlock.inventoryNumber);
            }
            if (Status.mode == 2) {
                SetScore30Scene.cnt--;
            }
            BlockManager.mouseDownBlock = null;
            this.exScore = Status.score;
            this.matchingJob = egret.Tween.get(this).to({}, 200).call(this.matchCheck, this);
        }
        else {
            BlockManager.mouseUp();
        }
    };
    Field.prototype.resetGridBlock = function () {
        var w = 0;
        var h = 0;
        while (h < this.fieldH) {
            w = 0;
            while (w < this.fieldW) {
                if (this.vec2Grid[h][w].block) {
                    this.vec2Grid[h][w].removeChildren();
                }
                this.vec2Grid[h][w].block = null;
                w++;
            }
            h++;
        }
    };
    Field.fieldX = 0;
    Field.fieldY = 0;
    return Field;
}(eui.Group));
__reflect(Field.prototype, "Field");
