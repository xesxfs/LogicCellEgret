class Field extends eui.Group {
	public static fieldX: number = 0;
	public static fieldY: number = 0;
	public vec2Grid: Array<Array<Grid>>;
	public fieldW: number = 0;
	public fieldH: number = 0;
	public matchingJob: egret.Tween;
	private exScore: number = 0;
	public stageData: StageData;
	private vecSound: Array<egret.Sound>;
	public constructor(stageData: StageData) {
		super();
		let layout = new eui.TileLayout();

		layout.horizontalGap = 22;
		layout.verticalGap = 18;
		// layout.verticalAlign = egret.VerticalAlign.BOTTOM;
		this.layout = layout;
		this.horizontalCenter = 0;
		this.verticalCenter = 0;

		var w = 0;
		var h = 0;
		var grid: Grid = null;
		this.vecSound = Resource.getMusic();
		this.stageData = stageData;
		layout.requestedColumnCount = this.fieldW = stageData.fieldW;
		layout.requestedRowCount = this.fieldH = stageData.fieldH;
		Field.fieldX = this.x;
		Field.fieldY = this.y;
		this.vec2Grid = [];

		while (h < this.fieldH) {
			this.vec2Grid.push([]);
			w = 0;
			while (w < this.fieldW) {
				grid = new Grid(h, w);
				grid.type = parseInt(this.stageData.fieldData.charAt(w * this.fieldH + h));
				this.vec2Grid[h].push(grid);
				if (grid.type == 1) {
					grid.drawBroderRect();
				}
				this.addChild(grid);

				w++;
			}
			h++;
		}
		console.log(this.vec2Grid)
		/****!!放到这里代码可读性和逻辑性变差，但是省去了在多个场景调用!!****/
		BlockManager.reset(this);
		BlockManager.AddAllBlock(stageData.vecBlockData, false);
		BlockManager.addUndoString();
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
		Status.combo++;
		this.matchingJob = null;
		var nestFlag: Boolean = false;
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

	}


	public resetGridBlock(): void {
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

	}


}