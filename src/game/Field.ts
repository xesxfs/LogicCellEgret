class Field extends egret.Sprite {
	public static fieldX: number = 0;
	public static fieldY: number = 0;
	public vec2Grid: Array<Array<Grid>>;
	public fieldW: number = 0;
	public fieldH: number = 0;
	// public matchingJob: net.kawa.tween.KTJob;
	private exScore: number = 0;
	public stageData: StageData;
	private vecSound: Array<egret.Sound>;
	public constructor(stageData: StageData) {
		super();
		var w = 0;
		var h = 0;
		var grid: Grid = null;
		this.vecSound = [Resource.soundC, Resource.soundD, Resource.soundE, Resource.soundF, Resource.soundG, Resource.soundA, Resource.soundB, Resource.soundCC];
		this.stageData = stageData;
		this.fieldW = stageData.fieldW;
		this.fieldH = stageData.fieldH;
		this.vec2Grid = [];

		while (w < this.fieldW) {
			this.vec2Grid.push([]);
			h = 0;
			while (h < this.fieldH) {
				grid = new Grid(w, h, this.x + 45 * w, this.y + 45 * h);
				grid.type = parseInt(this.stageData.fieldData.charAt(w * this.fieldH + h));
				this.vec2Grid[w].push(grid);
				if (grid.type == 1) {
					grid.drawBroderRect();
					grid.x = 45 * w + 2;
					grid.y = 45 * h + 2;
					this.addChild(grid);
				}

				h++;
			}
			w++;
		}
		BlockManager.reset(this);
		BlockManager.AddAllBlock(stageData.vecBlockData, false);
	}

	public getGrid(x: number, y: number): Grid {
		var gridX: number = x;
		var gridY: number = y;
		try {
			return this.vec2Grid[gridX][gridY];
		}
		catch (e) {
			return null;
		}
	}

	/***检查匹配 **/
	public matchCheck(): void {

		var i = 0;
		var j = 0;
		var gridX = 0;
		var gridY = 0;
		var blockColor = 0;
		var point: egret.Point = null;
		var grid: Grid = null;
		var block: Block = null;
		var grid1: Grid = null;
		var grid2: Grid = null;
		var checkBlock1: Block = null;
		var checkBlock2: Block = null;
		var addScore = 0;
		var combo = 0;
		var mode = 0;
		//  Status.combo++;
		//  this.matchingJob = null;
		var nestFlag: Boolean = false;
		i = 0;
		while (i < this.fieldW) {
			j = 0;
			while (j < this.fieldH) {
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
			// if(Status.combo < 8)
			// {
			//    this.vecSound[Status.combo - 1].play(0,0,SoundManager.soundTransform);
			// }
			// else
			// {
			//    this.vecSound[7].play(0,0,SoundManager.soundTransform);
			// }
			// this.matchingJob = KTW.to(this,0.5,{},null,function():void
			// {
			this.matchCheck();
			// });
		}
		else {
			// addScore = Status.score - this.exScore;
			// combo = Status.combo - 1;
			// if(Status.maxCombo < combo)
			// {
			//    Status.maxCombo = combo;
			// }
			// mode = Status.mode;
			if (mode > 0 && mode != 4 && BlockManager.vecBlock.length == 0) {
				//    Status.combo = Status.combo - 1;
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
			// Status.combo = 0;
			// if(mode == 0 && !BlockManager.clearCheck())
			// {
			//    BlockManager.addUndoString();
			// }
			// else if(mode == 1)
			// {
			//    BlockManager.finishCheck(SetScoreScene);
			// }
			// else if(mode == 2)
			// {
			//    if(SetScore30Scene.cnt == 0)
			//    {
			//       BlockManager.finish(SetScore30Scene);
			//    }
			//    BlockManager.finishCheck(SetScore30Scene);
			// }
			// else if(Status.mode == 3)
			// {
			//    BlockManager.finishCheck(SetScore1minScene);
			// }
			// else if(Status.mode == 4 && (Status.score != 0 || BlockManager.vecBlock.length == 20))
			// {
			//    BlockManager.finish(SetScore1comboScene);
			// }
		}

	}

	public mouseUpField(gx: number, gy: number): void {

		var gridX = gx;
		var gridY = gy;
		var grid: Grid = this.getGrid(gridX, gridY);
		var mouseDownBlock: Block = BlockManager.mouseDownBlock;
		if (grid != null && grid.block == null && grid.type == 1) {
			grid.setBlock(mouseDownBlock);
			BlockManager.vecInventoryBlock[mouseDownBlock.inventoryNumber] = null;
			BlockManager.vecBlock.push(mouseDownBlock);
			// if (Status.mode > 0) {
			// 	BlockManager.addRandomInventoryBlock(BlockManager.mouseDownBlock.inventoryNumber);
			// }
			// if (Status.mode == 2) {
			// 	SetScore30Scene.cnt--;
			// }
			BlockManager.mouseDownBlock = null;
			// this.exScore = Status.score;
			// this.matchingJob = KTW.to(this, 0.2, {}, null, function (): void {
			this.matchCheck();
			// });
		}
		else {
			BlockManager.mouseUp();
		}

	}


	public resetGridBlock(): void {
		var w = 0;
		var h = 0;
		w = 0;
		while (w < this.fieldW) {
			h = 0;
			while (h < this.fieldH) {
				this.vec2Grid[w][h].block = null;
				h++;
			}
			w++;
		}

	}


}