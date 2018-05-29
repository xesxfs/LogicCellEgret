class StageManagerClass {
	public vecStageData: Array<StageData>;
	public index: number = 0;
	public constructor() {
		this.vecStageData = new Array<StageData>();
		this.vecStageData.push(new StageData("20,1,testes,2,1,11,900,910"));
		this.vecStageData.push(new StageData("30,2,testes,3,1,111,901,911,921"));
		this.vecStageData.push(new StageData("60,3,testes,3,1,111,900,911,9201"));
		this.vecStageData.push(new StageData("50,4,testes,3,1,111,000,900,911,9210"));
		this.vecStageData.push(new StageData("220,5,testes,3,2,111011,010,1000,21000,900,9100,92000"));
		this.vecStageData.push(new StageData("140,6,tes,3,3,010111010,101,212,90001,91002,9201,9302"));
		this.vecStageData.push(new StageData("400,7,score400,4,4,1111111111111111,0001,2010,1101,3110,0201,2210,1301,3310,9001,9110,9201,9310"));
		this.vecStageData.push(new StageData("530,8,testes,3,3,010111010,1001,1212,0123,2130,900,9101,92012,930123"));
		this.vecStageData.push(new StageData("300,9,testes,2,1,11,000,9004,91044,920444,934440,944404"));
		this.vecStageData.push(new StageData("380,10,testes,2,2,1111,9004,91241,92203,932031"));
		this.vecStageData.push(new StageData("380,11,testes,2,2,1111,9021,91213,92201,93012,940132"));
		this.vecStageData.push(new StageData("23180,12,score400,3,4,111110011111,90041,020112,931223,132334,923440,224001,940112,201223,912334,00344"));
		this.vecStageData.push(new StageData("530,13,tes,5,1,11111,00024,104022,302041,40440,9031,9142,9240,93403,942404"));
		this.vecStageData.push(new StageData("1260,14,testes,5,1,11111,900,9131,92102,933201,942120"));
		this.vecStageData.push(new StageData("760,15,tes,3,3,100111100,00424,20002,11313,90042,91432,92130,93420,94340"));
		this.vecStageData.push(new StageData("590,16,testes,3,1,111,90230,91120,922030,931201,942120"));
		this.vecStageData.push(new StageData("640,17,tes,2,2,1111,004312,110343,90324,91340,92401,93312,94024"));
		this.vecStageData.push(new StageData("1290,18,1290,5,1,11111,9012,91113,921132,931123,941312"));
		this.vecStageData.push(new StageData("1580,19,score400,3,3,001011111,9113,11324,942134,932430,92403,9024"));
		this.vecStageData.push(new StageData("280,20,tes,5,1,11111,00232,20332,40343,9034,9123,9232,9331,9421"));
		this.vecStageData.push(new StageData("2070,21,testes,4,4,1111111111111111,0012,1031,2023,3034,3114,3221,3312,2321,1314,0342,0232,0122,9013,9121,9234,9342"));
		this.vecStageData.push(new StageData("1380,22,score400,3,3,101111101,101423,123241,9023,9131,9241,9342,94213"));
		this.vecStageData.push(new StageData("2460,23,testes,3,3,111111111,001002,02312,20210,110301,220331,900202,910033,921202,933210,942202"));
		this.vecStageData.push(new StageData("1770,24,tes,3,3,110111011,00411,01301,21021,22101,90132,91323,92241,93013,94320"));
		this.vecStageData.push(new StageData("2780,25,testes,3,3,111111111,100324,014130,123424,211214,904213,911334,922124,933240,940144"));
	}

	public getStage(stageId: number): StageData {
		if (stageId == -1) {
			if (this.vecStageData.length > this.index + 1) {
				this.index++;
				return this.vecStageData[this.index];
			}
			return null;
		}
		if (stageId == -2) {
			return this.vecStageData[this.index];
		}
		this.index = stageId;
		return this.vecStageData[this.index];
	}
}

var StageManager: StageManagerClass = new StageManagerClass();