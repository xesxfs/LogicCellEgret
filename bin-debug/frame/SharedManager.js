var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var SharedManagerClass = (function () {
    function SharedManagerClass() {
        this.vecPuzzleClear = [];
        this.sound = true;
        this.sendScoreTime = 0;
        this.sendScore30Time = 0;
        this.sendScore1minTime = 0;
        this.sendScore1comboTime = 0;
    }
    SharedManagerClass.getInstance = function () {
        !this.instance && (this.instance = new SharedManagerClass());
        return this.instance;
    };
    SharedManagerClass.prototype.init = function () {
        return __awaiter(this, void 0, void 0, function () {
            var i, resultData, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 5, , 6]);
                        i = 0;
                        while (i < 25) {
                            this.vecPuzzleClear.push(0);
                            i++;
                        }
                        return [4 /*yield*/, platform.getStorage("score")];
                    case 1:
                        resultData = _a.sent();
                        this.score = resultData;
                        return [4 /*yield*/, platform.getStorage("score30")];
                    case 2:
                        resultData = _a.sent();
                        this.score30 = resultData;
                        return [4 /*yield*/, platform.getStorage("score1min")];
                    case 3:
                        resultData = _a.sent();
                        this.score1min = resultData;
                        return [4 /*yield*/, platform.getStorage("score1combo")];
                    case 4:
                        resultData = _a.sent();
                        this.score1combo = resultData;
                        console.log("init:", this.score, this.score30, this.score1min, this.score1combo);
                        return [3 /*break*/, 6];
                    case 5:
                        e_1 = _a.sent();
                        console.error(e_1);
                        return [3 /*break*/, 6];
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    SharedManagerClass.prototype.getPuzzleClearNum = function () {
        return;
    };
    SharedManagerClass.prototype.getScore = function () {
        return __awaiter(this, void 0, void 0, function () {
            var resultData;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, platform.getStorage("score")];
                    case 1:
                        resultData = _a.sent();
                        this.score = resultData;
                        return [2 /*return*/];
                }
            });
        });
    };
    SharedManagerClass.prototype.getScore30 = function () {
        return __awaiter(this, void 0, void 0, function () {
            var resultData;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, platform.getStorage("score30")];
                    case 1:
                        resultData = _a.sent();
                        this.score30 = resultData;
                        return [2 /*return*/];
                }
            });
        });
    };
    SharedManagerClass.prototype.getScore1min = function () {
        return __awaiter(this, void 0, void 0, function () {
            var resultData;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, platform.getStorage("score1min")];
                    case 1:
                        resultData = _a.sent();
                        this.score1min = resultData;
                        return [2 /*return*/];
                }
            });
        });
    };
    SharedManagerClass.prototype.getScore1combo = function () {
        return __awaiter(this, void 0, void 0, function () {
            var resultData;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, platform.getStorage("score1combo")];
                    case 1:
                        resultData = _a.sent();
                        this.score1combo = resultData;
                        return [2 /*return*/];
                }
            });
        });
    };
    SharedManagerClass.prototype.getPerfect = function () {
    };
    SharedManagerClass.prototype.saveVecPuzzleClear = function () {
    };
    SharedManagerClass.prototype.saveScore = function (score) {
        if (this.score < score) {
            this.score = score;
            this.setItem("score", score);
        }
    };
    SharedManagerClass.prototype.saveScore30 = function (score) {
        if (this.score30 < score) {
            this.score30 = score;
            this.setItem("score30", score);
        }
    };
    SharedManagerClass.prototype.saveScore1min = function (score) {
        if (this.score1min < score) {
            this.score1min = score;
            this.setItem("score1min", score);
        }
    };
    SharedManagerClass.prototype.saveScore1combo = function (score) {
        if (this.score1combo < score) {
            this.score1combo = score;
            this.setItem("score1combo", score);
        }
    };
    SharedManagerClass.prototype.saveUserName = function (uname) {
        this.userName = uname;
        // this.setItem("userName", uname);
    };
    SharedManagerClass.prototype.soundChange = function () {
        this.sound = !this.sound;
    };
    SharedManagerClass.prototype.erase = function () {
        egret.localStorage.clear();
    };
    SharedManagerClass.prototype.parseItem2Number = function (key) {
        var score = 0;
        if (this.getItem(key)) {
            this.score = parseInt(this.getItem(key));
        }
        return score;
    };
    SharedManagerClass.prototype.parseItem2Bool = function () {
    };
    SharedManagerClass.prototype.getItem = function (key) {
        // let resultData = platform.getStorage(key).then((result) => {
        // 	console.log("getItem:", result);
        // });
        //egret.localStorage.getItem(key);	
        // console.log("getItem:", resultData);
        // return resultData['data'];
        // let resultData =await platform.getStorage(key)
        return;
    };
    SharedManagerClass.prototype.getItem2 = function (key) {
        return __awaiter(this, void 0, void 0, function () {
            var resultData;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, platform.getStorage(key)];
                    case 1:
                        resultData = _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    SharedManagerClass.prototype.setItem = function (key, value) {
        egret.localStorage.setItem(key, value.toString());
        platform.uploadWXData(key, value);
        platform.setStorage(key, value);
    };
    return SharedManagerClass;
}());
__reflect(SharedManagerClass.prototype, "SharedManagerClass");
var SharedManager = new SharedManagerClass();
