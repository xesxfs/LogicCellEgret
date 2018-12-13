var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var StageData = (function () {
    function StageData(strData) {
        this.packNo = 0;
        this.stageNo = 0;
        this.star3 = 0;
        this.star2 = 0;
        this.fieldW = 0;
        this.fieldH = 0;
        this.backGroundColor = 0;
        this.stageString = strData;
        this.convert();
    }
    StageData.prototype.convert = function () {
        var splitStr = null;
        splitStr = this.stageString.split(",");
        this.star3 = ~~(parseInt(splitStr[0]));
        this.stageNo = ~~(parseInt(splitStr[1]));
        this.stageName = splitStr[2];
        this.fieldW = ~~(parseInt(splitStr[3]));
        this.fieldH = ~~(parseInt(splitStr[4]));
        this.fieldData = splitStr[5];
        this.vecBlockData = new Array();
        var blockDataId = 6;
        while (blockDataId < splitStr.length) {
            this.vecBlockData.push(splitStr[blockDataId]);
            blockDataId++;
        }
    };
    return StageData;
}());
__reflect(StageData.prototype, "StageData");
//# sourceMappingURL=StageData.js.map