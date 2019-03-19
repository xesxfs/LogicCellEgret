class BlockManagerClass extends eui.Group {

	public vecBlock: Array<Block>;

	public vecInventoryBlock: Array<Block>;

	public field: Field;

	public mouseDownBlock: Block;

	public mouseX: number = 0;

	public mouseY: number = 0;

	public vec2UndoString: Array<Array<string>>;

	public inventoryPadding: number = 20;



	public constructor() {
		super();
		this.tidy();
	}

	public reset(field: Field): void {
		this.removeChildren();
		this.vecBlock = new Array<Block>();
		this.vecInventoryBlock = [null, null, null, null, null];
		this.vec2UndoString = [];
		this.field = field;
		this.inventoryPadding = 0;
	}

	public tidy() {
		// let horizontalLayout = new eui.HorizontalLayout();
		// horizontalLayout.horizontalAlign = egret.HorizontalAlign.CENTER;
		// this.bottom = 150;
		this.horizontalCenter = 0;
		// this.layout = horizontalLayout;
	}

	public update(): void {
		var i = 0;
		var length = this.vecBlock.length;
		i = 0;
		while (i < length) {
			this.vecBlock[i].update();
			i++;
		}
		if (this.mouseDownBlock != null) {
			this.mouseDownBlock.x = BlockManager.mouseX - 60;
			this.mouseDownBlock.y = BlockManager.mouseY - 60;
		}
	}

	public addBlock(block: Block): void {
		this.vecBlock.push(block);
		this.addChildAt(block, block.inventoryNumber);
	}

	public AddAllBlock(blockDataStr: Array<string>, bUndo: Boolean = true): void {
		var i = 0;
		var j = 0;
		var splitStr: string = null;
		var block: Block = null;
		var xGrid = 0;
		var yGrid = 0;
		var l = blockDataStr.length;
		if (bUndo) {
			l--;
		}
		i = 0;
		while (i < l) {
			splitStr = blockDataStr[i];
			xGrid = parseInt(splitStr.charAt(0));
			yGrid = parseInt(splitStr.charAt(1));
			block = new Block();
			j = 2;
			while (j < splitStr.length) {
				block.vecLayer.push(parseInt(splitStr.charAt(j)));
				j++;
			}
			/**==9 可操作砖块**/
			if (xGrid == 9) {
				this.addInventoryBlock(block, yGrid);
			}
			else {
				this.field.getGrid(yGrid, xGrid).setBlock(block);
				this.vecBlock.push(block);
			}
			block.draw();
			i++;
		}
		while (this.vecInventoryBlock.length < 5) {
			this.vecInventoryBlock.push(null);
		}
		if (bUndo) {
			Status.score = parseInt(blockDataStr[i]);
			Status.drawScore = Status.score;
		}
	}

	/**增加操作砖块**/
	public addInventoryBlock(block: Block, layerIndex: number): void {
		while (this.vecInventoryBlock.length < layerIndex) {
			this.vecInventoryBlock.push(null);
		}
		this.vecInventoryBlock[layerIndex] = block;
		block.x = layerIndex * 125;
		block.inventoryNumber = layerIndex;
		this.addChild(block);
	}

	public addRandomInventoryBlock(idx: number) {
		let block = new Block();
		block.inventoryNumber = idx;
		this.addInventoryBlock(block, idx);
		if (Status.mode == 1) {
			block.setLayer(Math.random() * 5, Math.random() * 5, Math.random() * 5, Math.random() * 5);
		}
		else if (Status.mode == 2) {
			block.setLayer(Math.random() * 4, Math.random() * 4, Math.random() * 4, Math.random() * 4);
		}
		else if (Status.mode == 3) {
			block.setLayer(Math.random() * 3, Math.random() * 3, Math.random() * 3, Math.random() * 3);
		}
		else if (Status.mode == 4) {
			block.setLayer(Math.random() * 5, Math.random() * 5, Math.random() * 5, Math.random() * 5);
		}
		block.draw();

	}

	public removeBlock(block: Block): void {
		var i: number = 0;
		var length: number = this.vecBlock.length;
		i = 0;
		while (i < length) {
			if (block === this.vecBlock[i]) {
				this.vecBlock.splice(i, 1);
				block.parent && block.parent.removeChild(block);
				// this.removeChild(block);
				this.field.getGrid(block.gridX, block.gridY).block = null;
				break;
			}
			i++;
		}
	}

	public mouseDownInventory(idx: number): void {
		if (this.vecInventoryBlock.length <= idx) {
			return;
		}
		var down: Block = this.vecInventoryBlock[idx];
		if (down != null) {
			this.mouseDownBlock = down;
			let p = this.localToGlobal(down.x, down.y);
			down.x = p.x;
			down.y = p.y;
			this.parent.addChild(down);
		}
	}

	public mouseUp(): void {
		if (this.mouseDownBlock != null) {
			let p = this.globalToLocal(this.mouseDownBlock.x, this.mouseDownBlock.y);
			this.addChildAt(this.mouseDownBlock, this.mouseDownBlock.inventoryNumber);
			this.mouseDownBlock.x = p.x;
			this.mouseDownBlock.y = p.y;
			egret.Tween.get(this.mouseDownBlock).to({ x: this.mouseDownBlock.inventoryNumber * 125, y: 0 }, 100);
			this.mouseDownBlock = null;
		}
	}

	public undo() {
		if (this.field.matchingJob || this.vec2UndoString.length <= 1) { return };
		this.removeChildren();
		this.vecInventoryBlock = [];
		this.vecBlock = [];
		this.field.resetGridBlock();
		this.AddAllBlock(this.vec2UndoString[this.vec2UndoString.length - 2]);
		this.vec2UndoString.pop();
		if (SceneManager.scene instanceof SetPuzzleScene) {
			if (this.vec2UndoString.length === 1) {
				(SceneManager.scene as SetPuzzleScene).undoBmd.alpha = 0.2;
			}
			else {
				(SceneManager.scene as SetPuzzleScene).undoBmd.alpha = 0.8;
			}
		}
	}

	public addUndoString() {
		var i = 0;
		var j = 0;
		var str: string = null;
		var block: Block = null;
		var undoStr: Array<string> = [];
		i = 0;

		while (i < this.vecBlock.length) {
			block = this.vecBlock[i];
			str = "" + block.gridY + block.gridX;
			j = 0;
			while (j < block.vecLayer.length) {
				str = str + block.vecLayer[j];
				j++;
			}
			undoStr.push(str);
			i++;
		}

		i = 0;
		while (i < this.vecInventoryBlock.length) {
			block = this.vecInventoryBlock[i];
			if (block != null) {
				str = "" + 9 + block.inventoryNumber;
				j = 0;
				while (j < block.vecLayer.length) {
					str = str + block.vecLayer[j];
					j++;
				}
				undoStr.push(str);
			}
			i++;
		}

		if (this.vec2UndoString.length != 0) {
			undoStr.push("" + Status.score);
		}
		else {
			undoStr.push("0");
		}
		this.vec2UndoString.push(undoStr);

		if (SceneManager.scene instanceof SetPuzzleScene) {
			if (this.vec2UndoString.length == 1) {
				(SceneManager.scene as SetPuzzleScene).undoBmd.alpha = 0.2;
			}
			else {
				(SceneManager.scene as SetPuzzleScene).undoBmd.alpha = 0.8;
			}
		}

	}

	public clearCheck(): boolean {
		var i = 0;
		var length = this.vecInventoryBlock.length;
		if (this.vecBlock.length != 0) {
			// console.log("clearCheck false length", this.vecBlock);
			return false;
		}
		i = 0;
		while (i < length) {
			if (this.vecInventoryBlock[i] != null) {
				// console.log("clearCheck false");
				return false;
			}
			i++;
		}
		InputManager.newInput(null);
		if (this.field.stageData.star3 <= Status.score) {

			InputManager.addChild(new ClearSprite(true,false,false))
			SharedManager.vecPuzzleClear[this.field.stageData.stageNo - 1] = 2;
		}
		else {
			InputManager.addChild(new ClearSprite(false,false,false))
			if (SharedManager.vecPuzzleClear[this.field.stageData.stageNo - 1] != 2) {
				SharedManager.vecPuzzleClear[this.field.stageData.stageNo - 1] = 1;
			}
		}
		SharedManager.saveVecPuzzleClear();
		return true;
	}

	public finishCheck(cls: any): boolean {
		// console.log("finishCheck:", this.vecBlock.length, this.vecBlock);
		if (this.vecBlock.length != 9) {
			return false;
		}
		//  && (Status.score != 0 || BlockManager.vecBlock.length == 20)
		this.finish(cls);
		return true;
	}

	public f: ClearSprite;

	public finish(cls: any): void {
		Status.finishTime = new Date().getTime();
		var score = Status.score;
		let video = true;
		console.log("Status.mode ", Status.mode)
		switch (Status.mode) {
			case 0:
				video = false;
				break;
			case 1:
				SharedManager.saveScore(score);
				break;
			case 2:
				SharedManager.saveScore30(score);
				SetScore30Scene.isFinish = true;
				break;
			case 3:
				SharedManager.saveScore1min(score);
				// SetScore1minScene.isFinish = false;
				break;
			case 4:
				SharedManager.saveScore1combo(score);
			// SetScore1cinboScene.isFinish = true;
		}
		video && (SharedManager.videoSuccess = this.onVideoSuccess.bind(this));
		InputManager.setTouchEnble(false);
		this.f = new ClearSprite(true, true, video);
		this.f.retryScene = cls;
		InputManager.addChild(this.f);

	}

	public onVideoSuccess() {

		let mode = Status.mode;


		if (mode == GameMode.Score) {
			BlockManager.undo();
			BlockManager.undo();
		}
		else if (mode == GameMode.Score30) {
			if (SetScore30Scene.cnt == 0) {
				SetScore30Scene.cnt = 20;
			}

			if (BlockManager.vecBlock.length == 9) {
				BlockManager.undo();
				BlockManager.undo();
			}

		}
		else if (Status.mode == GameMode.Score1M) {
			if (BlockManager.vecBlock.length == 9) {
				BlockManager.undo();
				BlockManager.undo();
			}

			if (SetScore1minScene.cnt >= 3600) {
				SetScore1minScene.isFinish = false;
				SetScore1minScene.cnt = 0;
			}

		}
		else if (Status.mode == GameMode.ScoreCombo) {
			SetScore1ComboScene.isFinish = false;
			if (BlockManager.vecBlock.length == 20) {
				BlockManager.undo();
				BlockManager.undo();
			}

		}

		InputManager.setTouchEnble();
		this.f && this.f.parent && this.f.parent.removeChild(this.f);
		this.f = null;
	}

}

var BlockManager: BlockManagerClass = new BlockManagerClass();