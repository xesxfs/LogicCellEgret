class StageData {
	public stageString: string;
	public packNo: number = 0;
	public stageNo: number = 0;
	public stageName: string;
	public star3: number = 0;
	public star2: number = 0;
	public fieldW: number = 0;
	public fieldH: number = 0;
	public fieldData: string;
	public vecBlockData: Array<string>;
	public backGroundColor: number = 0;

	public constructor(strData: string) {
		this.stageString = strData;
		this.convert();
	}

	private convert() {
		var splitStr: Array<any> = null;
		splitStr = this.stageString.split(",");
		this.star3 = ~~(parseInt(splitStr[0]));
		this.stageNo = ~~(parseInt(splitStr[1]));
		this.stageName = splitStr[2];
		this.fieldW = ~~(parseInt(splitStr[3]));
		this.fieldH = ~~(parseInt(splitStr[4]));
		this.fieldData = splitStr[5];
		this.vecBlockData = new Array<string>();
		var blockDataId: number = 6;
		while (blockDataId < splitStr.length) {
			this.vecBlockData.push(splitStr[blockDataId]);
			blockDataId++;
		}
	}
}