class BlockManagerClass extends egret.Sprite {

	public vecBlock: Array<Block>;

	public vecInventoryBlock: Array<Block>;

	public field: Field;

	public mouseDownBlock: Block;

	public mouseX: number = 0;

	public mouseY: number = 0;

	public vec2UndoString: Array<Array<string>>;

	public inventoryPadding: number = 0;



	public constructor() {
		super();
	}

	public reset(field: Field): void {
		this.removeChildren();
		this.vecBlock = new Array<Block>();
		this.vecInventoryBlock = [null, null, null, null, null];
		this.vec2UndoString = [[]];
		this.field = field;
		this.inventoryPadding = 0;
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
			this.mouseDownBlock.x = BlockManager.mouseX - 22;
			this.mouseDownBlock.y = BlockManager.mouseY - 22;
		}
	}

	public addBlock(block: Block): void {
		this.vecBlock.push(block);
		this.addChild(block);
	}

	public AddAllBlock(blockDataStr: Array<string>, param2: Boolean = true): void {
		var i = 0;
		var j = 0;
		var splitStr: string = null;
		var block: Block = null;
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
	}

	/**增加操作砖块**/
	public addInventoryBlock(block: Block, layerIndex: number): void {
		while (this.vecInventoryBlock.length < layerIndex) {
			this.vecInventoryBlock.push(null);
		}
		this.vecInventoryBlock[layerIndex] = block;
		block.x = layerIndex * 48 + 2 + this.inventoryPadding;
		block.y = 240;
		block.inventoryNumber = layerIndex;
		this.addChild(block);
	}

	public removeBlock(block: Block): void {
		var i: number = 0;
		var length: number = this.vecBlock.length;
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
	}

	public mouseDownInventory(idx: number): void {
		if (this.vecInventoryBlock.length <= idx) {
			return;
		}
		var down: Block = this.vecInventoryBlock[idx];
		if (down != null) {
			this.mouseDownBlock = down;
			this.setChildIndex(down, this.numChildren - 1);
		}
	}

	public mouseUp(): void {
		if (this.mouseDownBlock != null) {
			// KTW.to(this.mouseDownBlock, 0.1, {
			// 	"x": this.mouseDownBlock.inventoryNumber * 48 + 2 + this.inventoryPadding,
			// 	"y": 240
			// });
			this.mouseDownBlock.x = this.mouseDownBlock.inventoryNumber * 48 + 2 + this.inventoryPadding;
			this.mouseDownBlock.y = 240;
			this.mouseDownBlock = null;
		}
	}

	public clearCheck(): boolean {
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
		InputManager.newInput(InputClear);
		// });
		// if (this.field.stageData.star3 <= Status.score) {
		this.parent.addChild(new ClearSprite(true));
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
	}

	public finishCheck(param1: any): Boolean {
		var length = this.vecInventoryBlock.length;
		if (this.vecBlock.length != 9) {
			return false;
		}
		this.finish(param1);
		return true;
	}

	public finish(param1: any): void {

	}

}

var BlockManager: BlockManagerClass = new BlockManagerClass();