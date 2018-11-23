var egret = window.egret;var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
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
var Effect = (function (_super) {
    __extends(Effect, _super);
    function Effect() {
        var _this = _super.call(this) || this;
        _this.frameCnt = 0;
        _this.doDraw = false;
        return _this;
    }
    Effect.prototype.drawBorderRect = function (x, y, width, height, thickness, color) {
        this.graphics.clear();
        this.graphics.beginFill(0x00000, 0);
        this.graphics.lineStyle(thickness, this.color);
        this.graphics.drawRect(0, 0, width, height);
        this.graphics.endFill();
    };
    Effect.prototype.update = function () {
        return false;
    };
    return Effect;
}(egret.Sprite));
__reflect(Effect.prototype, "Effect");
var Input = (function (_super) {
    __extends(Input, _super);
    function Input() {
        var _this = _super.call(this) || this;
        // this.graphics.beginFill(0, 0);
        // this.graphics.drawRect(0, 0, 480, 762);
        _this.percentWidth = 100;
        _this.percentHeight = 100;
        _this.addEventListener("touchBegin", _this.mouseDownEvent, _this);
        _this.addEventListener("touchEnd", _this.mouseUpEvent, _this);
        _this.addEventListener("touchMove", _this.mouseMoveEvent, _this);
        _this.addEventListener("touchReleaseOutside", _this.mouseOutEvent, _this);
        return _this;
        // this.touchEnabled = true;
        // this.touchThrough = true;
    }
    Input.prototype.mouseDownEvent = function (param1) {
    };
    Input.prototype.mouseUpEvent = function (param1) {
    };
    Input.prototype.mouseOutEvent = function (param1) {
    };
    Input.prototype.mouseMoveEvent = function (e) {
    };
    return Input;
}(eui.Group));
__reflect(Input.prototype, "Input");
var Scene = (function (_super) {
    __extends(Scene, _super);
    function Scene() {
        var _this = _super.call(this) || this;
        _this.percentHeight = 100;
        _this.percentWidth = 100;
        return _this;
    }
    Scene.prototype.update = function () {
    };
    return Scene;
}(eui.Component));
__reflect(Scene.prototype, "Scene");
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
var Game = (function (_super) {
    __extends(Game, _super);
    function Game() {
        var _this = _super.call(this) || this;
        _this.percentHeight = 100;
        _this.percentWidth = 100;
        _this.addChild(SceneManager);
        _this.addChild(InputManager);
        SceneManager.newScene(new SelectScene());
        _this.addEventListener(egret.Event.ENTER_FRAME, _this.ent, _this);
        return _this;
        // this.addChild(new ClearSprite());
        // this.touchChildren = true;
    }
    Game.prototype.ent = function (e) {
        SceneManager.scene.update();
    };
    return Game;
}(eui.Component));
__reflect(Game.prototype, "Game");
//////////////////////////////////////////////////////////////////////////////////////
//
//  Copyright (c) 2014-present, Egret Technology.
//  All rights reserved.
//  Redistribution and use in source and binary forms, with or without
//  modification, are permitted provided that the following conditions are met:
//
//     * Redistributions of source code must retain the above copyright
//       notice, this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above copyright
//       notice, this list of conditions and the following disclaimer in the
//       documentation and/or other materials provided with the distribution.
//     * Neither the name of the Egret nor the
//       names of its contributors may be used to endorse or promote products
//       derived from this software without specific prior written permission.
//
//  THIS SOFTWARE IS PROVIDED BY EGRET AND CONTRIBUTORS "AS IS" AND ANY EXPRESS
//  OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES
//  OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
//  IN NO EVENT SHALL EGRET AND CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT,
//  INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
//  LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;LOSS OF USE, DATA,
//  OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
//  LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
//  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
//  EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
//
//////////////////////////////////////////////////////////////////////////////////////
var ThemeAdapter = (function () {
    function ThemeAdapter() {
    }
    /**
     * 解析主题
     * @param url 待解析的主题url
     * @param onSuccess 解析完成回调函数，示例：compFunc(e:egret.Event):void;
     * @param onError 解析失败回调函数，示例：errorFunc():void;
     * @param thisObject 回调的this引用
     */
    ThemeAdapter.prototype.getTheme = function (url, onSuccess, onError, thisObject) {
        var _this = this;
        function onResGet(e) {
            onSuccess.call(thisObject, e);
        }
        function onResError(e) {
            if (e.resItem.url == url) {
                RES.removeEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR, onResError, null);
                onError.call(thisObject);
            }
        }
        if (typeof generateEUI !== 'undefined') {
            egret.callLater(function () {
                onSuccess.call(thisObject, generateEUI);
            }, this);
        }
        else if (typeof generateEUI2 !== 'undefined') {
            RES.getResByUrl("resource/gameEui.bin", function (data, url) {
                window["JSONParseClass"]["setData"](data);
                onResGet(data);
                egret.callLater(function () {
                    onSuccess.call(thisObject, generateEUI2);
                }, _this);
            }, this, RES.ResourceItem.TYPE_BIN);
        }
        else {
            RES.addEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR, onResError, null);
            RES.getResByUrl(url, onResGet, this, RES.ResourceItem.TYPE_TEXT);
        }
    };
    return ThemeAdapter;
}());
__reflect(ThemeAdapter.prototype, "ThemeAdapter", ["eui.IThemeAdapter"]);
var App = (function () {
    function App() {
    }
    App.startUp = function (mainCotent) {
        console.log("startUp");
        // SharedManager = new SharedManagerClass();
        var back = new eui.Rect();
        back.fillColor = 0x888888;
        back.percentWidth = 100;
        back.percentHeight = 100;
        mainCotent.addChild(back);
        App.BackMenu = new BackMenuBitmapClass();
        mainCotent.addChild(new Game());
    };
    return App;
}());
__reflect(App.prototype, "App");
var EffectLayerErase = (function (_super) {
    __extends(EffectLayerErase, _super);
    function EffectLayerErase(x, y, color) {
        var _this = _super.call(this) || this;
        _this.onComPlete = false;
        _this.endCnt = 25;
        _this.x = x;
        _this.y = y;
        _this.color = color;
        _this.drawBorderRect(0, 0, 120, 120, 10, _this.color);
        _this.x = x + (_this.width >> 1);
        _this.y = y + (_this.height >> 1);
        _this.anchorOffsetX = _this.width >> 1;
        _this.anchorOffsetY = _this.height >> 1;
        _this.start();
        return _this;
    }
    EffectLayerErase.prototype.update = function () {
        return this.onComPlete;
    };
    EffectLayerErase.prototype.start = function () {
        var _this = this;
        // TweenLite.to(this, this.endCnt / 60, { scaleX: 6, scaleY: 6, onComplete: () => { this.onComPlete = true; } });
        egret.Tween.get(this).to({ scaleX: 6, scaleY: 6, }, this.endCnt * 10).call(function () { _this.onComPlete = true; });
    };
    return EffectLayerErase;
}(Effect));
__reflect(EffectLayerErase.prototype, "EffectLayerErase");
var EffectManagerClass = (function (_super) {
    __extends(EffectManagerClass, _super);
    function EffectManagerClass() {
        var _this = _super.call(this) || this;
        _this.vecEffect = [];
        return _this;
    }
    EffectManagerClass.prototype.update = function () {
        var i = 0;
        var ef = null;
        var length = this.vecEffect.length;
        i = 0;
        while (i < length) {
            ef = this.vecEffect[i];
            if (ef.update()) {
                console.log("removeEffect");
                EffectManager.removeEffect(i);
                i--;
                length--;
            }
            i++;
        }
    };
    EffectManagerClass.prototype.addEffect = function (effect) {
        effect.effectNumber = this.vecEffect.length;
        this.vecEffect.push(effect);
        this.addChild(effect);
    };
    EffectManagerClass.prototype.removeEffect = function (effectNumber) {
        var i = 0;
        var effect = this.vecEffect.splice(effectNumber, 1);
        if (effect) {
            var length = this.vecEffect.length;
            this.removeChild(effect[0]);
            // i = effectNumber;
            // while (i < length) {
            // 	this.vecEffect[i].effectNumber--;
            // 	i++;
            // }
        }
    };
    return EffectManagerClass;
}(egret.Sprite));
__reflect(EffectManagerClass.prototype, "EffectManagerClass");
var EffectManager = new EffectManagerClass();
//////////////////////////////////////////////////////////////////////////////////////
//
//  Copyright (c) 2014-present, Egret Technology.
//  All rights reserved.
//  Redistribution and use in source and binary forms, with or without
//  modification, are permitted provided that the following conditions are met:
//
//     * Redistributions of source code must retain the above copyright
//       notice, this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above copyright
//       notice, this list of conditions and the following disclaimer in the
//       documentation and/or other materials provided with the distribution.
//     * Neither the name of the Egret nor the
//       names of its contributors may be used to endorse or promote products
//       derived from this software without specific prior written permission.
//
//  THIS SOFTWARE IS PROVIDED BY EGRET AND CONTRIBUTORS "AS IS" AND ANY EXPRESS
//  OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES
//  OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
//  IN NO EVENT SHALL EGRET AND CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT,
//  INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
//  LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;LOSS OF USE, DATA,
//  OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
//  LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
//  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
//  EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
//
//////////////////////////////////////////////////////////////////////////////////////
var LoadingUI = (function (_super) {
    __extends(LoadingUI, _super);
    function LoadingUI() {
        var _this = _super.call(this) || this;
        _this.createView();
        return _this;
    }
    LoadingUI.prototype.createView = function () {
        this.textField = new egret.TextField();
        this.addChild(this.textField);
        this.textField.y = 300;
        this.textField.width = 480;
        this.textField.height = 100;
        this.textField.textAlign = "center";
    };
    LoadingUI.prototype.onProgress = function (current, total) {
        this.textField.text = "Loading..." + current + "/" + total;
    };
    return LoadingUI;
}(egret.Sprite));
__reflect(LoadingUI.prototype, "LoadingUI", ["RES.PromiseTaskReporter"]);
var InputManagerClass = (function (_super) {
    __extends(InputManagerClass, _super);
    function InputManagerClass() {
        var _this = _super.call(this) || this;
        _this.percentWidth = 100;
        _this.percentHeight = 100;
        return _this;
        // this.touchChildren = true;
        // this.touchEnabled = false;	
    }
    InputManagerClass.prototype.newInput = function (input) {
        this.removeChildren();
        this.input = input;
        if (input != null) {
            this.addChild(input);
        }
    };
    return InputManagerClass;
}(eui.Component));
__reflect(InputManagerClass.prototype, "InputManagerClass");
var InputManager = new InputManagerClass();
var Resource = (function () {
    function Resource() {
        if (Resource.Instance)
            return Resource.Instance;
    }
    Resource.getBlockChips = function (x, y, w, h) {
        if (w === void 0) { w = 44; }
        if (h === void 0) { h = 44; }
        if (!this.ChipsSpriteSheet)
            this.ChipsSpriteSheet = new egret.SpriteSheet(RES.getRes("Chip_png"));
        var chip = this.ChipsSpriteSheet.getTexture(x + "_" + y);
        if (!chip) {
            this.ChipsSpriteSheet.createTexture(x + "_" + y, x, y, w, h);
            chip = this.ChipsSpriteSheet.getTexture(x + "_" + y);
        }
        ;
        return new eui.Image(chip);
    };
    Resource.getMusic = function () {
        if (!this.sounds) {
            this.sounds = [RES.getRes("SoundC_mp3"), RES.getRes("SoundD_mp3"), RES.getRes("SoundE_mp3"), RES.getRes("SoundF_mp3"), RES.getRes("SoundG_mp3"), RES.getRes("SoundA_mp3"), RES.getRes("SoundB_mp3"), RES.getRes("SoundCC_mp3")];
            this.sounds.forEach(function (sound) {
                sound.type = egret.Sound.EFFECT;
            });
        }
        return this.sounds;
    };
    Resource.Instance = new Resource();
    return Resource;
}());
__reflect(Resource.prototype, "Resource");
//////////////////////////////////////////////////////////////////////////////////////
//
//  Copyright (c) 2014-present, Egret Technology.
//  All rights reserved.
//  Redistribution and use in source and binary forms, with or without
//  modification, are permitted provided that the following conditions are met:
//
//     * Redistributions of source code must retain the above copyright
//       notice, this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above copyright
//       notice, this list of conditions and the following disclaimer in the
//       documentation and/or other materials provided with the distribution.
//     * Neither the name of the Egret nor the
//       names of its contributors may be used to endorse or promote products
//       derived from this software without specific prior written permission.
//
//  THIS SOFTWARE IS PROVIDED BY EGRET AND CONTRIBUTORS "AS IS" AND ANY EXPRESS
//  OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES
//  OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
//  IN NO EVENT SHALL EGRET AND CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT,
//  INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
//  LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;LOSS OF USE, DATA,
//  OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
//  LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
//  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
//  EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
//
//////////////////////////////////////////////////////////////////////////////////////
var Main = (function (_super) {
    __extends(Main, _super);
    function Main() {
        var _this = _super.call(this) || this;
        SharedManager.init();
        return _this;
    }
    Main.prototype.createChildren = function () {
        _super.prototype.createChildren.call(this);
        console.log("createChildren");
        egret.lifecycle.addLifecycleListener(function (context) {
            // custom lifecycle plugin
        });
        egret.lifecycle.onPause = function () {
            egret.ticker.pause();
        };
        egret.lifecycle.onResume = function () {
            egret.ticker.resume();
        };
        //inject the custom material parser
        //注入自定义的素材解析器
        var assetAdapter = new AssetAdapter();
        egret.registerImplementation("eui.IAssetAdapter", assetAdapter);
        egret.registerImplementation("eui.IThemeAdapter", new ThemeAdapter());
        this.runGame().catch(function (e) {
            console.log(e);
        });
    };
    Main.prototype.runGame = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log("runGame");
                        return [4 /*yield*/, this.loadResource()];
                    case 1:
                        _a.sent();
                        // await platform.login();
                        // const userInfo = await platform.getUserInfo();
                        // console.log(userInfo);
                        this.createGameScene();
                        return [2 /*return*/];
                }
            });
        });
    };
    Main.prototype.loadResource = function () {
        return __awaiter(this, void 0, void 0, function () {
            var e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log("loadResource");
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 5, , 6]);
                        // const loadingView = new LoadingUI();
                        // this.stage.addChild(loadingView);
                        return [4 /*yield*/, RES.loadConfig("resource/default.res.json", "resource/")];
                    case 2:
                        // const loadingView = new LoadingUI();
                        // this.stage.addChild(loadingView);
                        _a.sent();
                        return [4 /*yield*/, this.loadTheme()];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, RES.loadGroup("preload", 0)];
                    case 4:
                        _a.sent();
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
    Main.prototype.loadTheme = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            // load skin theme configuration file, you can manually modify the file. And replace the default skin.
            //加载皮肤主题配置文件,可以手动修改这个文件。替换默认皮肤。
            var theme = new eui.Theme("resource/default.thm.json", _this.stage);
            theme.addEventListener(eui.UIEvent.COMPLETE, function () {
                resolve();
            }, _this);
        });
    };
    /**
     * 创建场景界面
     * Create scene interface
     */
    Main.prototype.createGameScene = function () {
        console.log("createGameScene");
        App.startUp(this);
    };
    return Main;
}(eui.UILayer));
__reflect(Main.prototype, "Main");
var SceneManagerClass = (function (_super) {
    __extends(SceneManagerClass, _super);
    function SceneManagerClass() {
        var _this = _super.call(this) || this;
        _this.percentHeight = 100;
        _this.percentWidth = 100;
        return _this;
    }
    SceneManagerClass.prototype.newScene = function (next) {
        this.nextScene = next;
        if (this.scene != null) {
            egret.Tween.get(this.scene).to({ alpha: 0 }, 300, egret.Ease.elasticOut).call(this.next, this);
        }
        else {
            this.next();
        }
    };
    SceneManagerClass.prototype.next = function () {
        var sceneId = 0;
        this.removeChildren();
        this.scene = null;
        this.scene = this.nextScene;
        if (this.scene instanceof SetPuzzleScene) {
            sceneId = 0;
        }
        else if (this.scene instanceof SetScoreScene) {
            sceneId = 1;
        }
        else if (this.scene instanceof SetScore30Scene) {
            SetScore30Scene.cnt = 30;
            SetScore30Scene.isFinish = false;
            sceneId = 2;
        }
        else if (this.scene instanceof SetScore1minScene) {
            SetScore1minScene.cnt = -95;
            SetScore1minScene.isFinish = false;
            sceneId = 3;
        }
        else if (this.scene instanceof SetScore1comboScene) {
            SetScore1comboScene.isFinish = false;
            sceneId = 4;
        }
        Status.reset(sceneId);
        this.nextScene.alpha = 0;
        egret.Tween.get(this.nextScene).to({ alpha: 1 }, 200, egret.Ease.elasticOut);
        this.addChild(this.scene);
    };
    return SceneManagerClass;
}(eui.Component));
__reflect(SceneManagerClass.prototype, "SceneManagerClass");
var SceneManager = new SceneManagerClass();
var SharedManagerClass = (function () {
    function SharedManagerClass() {
        this.vecPuzzleClear = [];
        this.score = 0;
        this.score1min = 0;
        this.score30 = 0;
        this.score1combo = 0;
        this.userName = 'usercc';
        this.sound = true;
        this.sendScoreTime = 0;
        this.sendScore30Time = 0;
        this.sendScore1minTime = 0;
        this.sendScore1comboTime = 0;
        this.dayScore = 0;
        this.dayScore30 = 0;
        this.dayScore1min = 0;
        this.dayScore1combo = 0;
        this.titles = [
            ["[有人@我]：智商超200的快来玩这游戏！", 'resource/assets/images/Icon48.png'],
            ["凭智商玩的得好，为什么要停下来", 'resource/assets/images/Icon48.png'],
            ["这游戏也太虐了，我为什么要点进来…", 'resource/assets/images/Icon48.png'],
            ["300分（分值），我不是针对谁，在座的各位都玩不过我~", 'resource/assets/images/Icon48.png'],
            ["据说只有1%的人能上300分（分值），需要超强逻辑", 'resource/assets/images/Icon48.png'],
            ["战五渣们，来看看你们的逻辑分数吧", 'resource/assets/images/Icon48.png']
        ];
    }
    SharedManagerClass.getInstance = function () {
        !this.instance && (this.instance = new SharedManagerClass());
        return this.instance;
    };
    SharedManagerClass.prototype.init = function () {
        try {
            this.showShareMenu();
            this.getUpdateManager();
            this.getPuzzleClearNum();
            // let i = 0;
            // while (i < 25) {
            // 	this.vecPuzzleClear.push(0);
            // 	i++;
            // }
            this.getScore();
            this.getScore30();
            this.getScore1combo();
            this.getScore1min();
            console.log("init:", this.score, this.score30, this.score1min, this.score1combo);
        }
        catch (e) {
            console.error(e);
        }
    };
    SharedManagerClass.prototype.getPuzzleClearNum = function () {
        var vecStr = this.getItem('puzzle');
        var i = 0;
        while (i < 25) {
            this.vecPuzzleClear.push(0);
            i++;
        }
        if (vecStr) {
            var vecArr = vecStr.split(',');
            for (var i_1 = 0; i_1 < vecArr.length; i_1++) {
                this.vecPuzzleClear[i_1] = parseInt(vecArr[i_1], 10);
            }
        }
        this.setItem('puzzle', this.vecPuzzleClear.toString());
    };
    SharedManagerClass.prototype.getCurPuzzle = function () {
        var cur = 0;
        for (var i = 0; i < this.vecPuzzleClear.length; i++) {
            if (this.vecPuzzleClear[i] === 0) {
                cur = i;
                break;
            }
        }
        return cur;
    };
    SharedManagerClass.prototype.getScore = function () {
        var resultData = this.getItem('score');
        if (!resultData || resultData == '') {
            resultData = '0';
        }
        try {
            this.score = parseInt(resultData, 10);
        }
        catch (e) {
        }
    };
    SharedManagerClass.prototype.getScore30 = function () {
        var resultData = this.getItem('score30');
        if (!resultData || resultData == '') {
            resultData = '0';
        }
        try {
            this.score30 = parseInt(resultData, 10);
        }
        catch (e) {
        }
    };
    SharedManagerClass.prototype.getScore1min = function () {
        var resultData = this.getItem('score1min');
        if (!resultData || resultData == '') {
            resultData = '0';
        }
        try {
            this.score1min = parseInt(resultData, 10);
        }
        catch (e) {
        }
    };
    SharedManagerClass.prototype.getScore1combo = function () {
        var resultData = this.getItem('score1combo');
        if (!resultData || resultData == '') {
            resultData = '0';
        }
        try {
            this.score1combo = parseInt(resultData, 10);
        }
        catch (e) {
        }
    };
    SharedManagerClass.prototype.getPerfect = function () {
    };
    SharedManagerClass.prototype.saveVecPuzzleClear = function () {
        this.setItem('puzzle', this.vecPuzzleClear.toString());
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
        this.setItem("userName", uname);
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
    SharedManagerClass.prototype.getItem = function (key) {
        var resultData = egret.localStorage.getItem(key);
        return resultData;
    };
    SharedManagerClass.prototype.setItem = function (key, value) {
        if (typeof (value) == 'number') {
            value = value.toString();
        }
        egret.localStorage.setItem(key, value);
    };
    SharedManagerClass.prototype.showShareMenu = function () {
        var _this = this;
        platform.showShareMenu({ withShareTicket: false });
        platform.onShareAppMessage(function () {
            var shareIndex = ~~(Math.random() * (_this.titles.length - 1));
            return {
                title: _this.titles[shareIndex][0],
                imageUrl: _this.titles[shareIndex][1],
                query: ""
            };
        });
    };
    SharedManagerClass.prototype.shareAppMessage = function () {
        var shareIndex = ~~(Math.random() * (this.titles.length - 1));
        platform.shareAppMessage({
            title: this.titles[shareIndex][0],
            imageUrl: this.titles[shareIndex][1],
            query: '',
        });
    };
    /**
     * 微信小游戏更新管理
     */
    SharedManagerClass.prototype.getUpdateManager = function () {
        var updateManager = platform.getUpdateManager();
        if (updateManager) {
            updateManager.onCheckForUpdate(function (res) {
                // 请求完新版本信息的回调
                console.log("是否有版本更新：", res.hasUpdate);
            });
            updateManager.onUpdateReady(function () {
                // 新的版本已经下载好，调用 applyUpdate 应用新版本并重启
                updateManager.applyUpdate();
            });
            updateManager.onUpdateFailed(function () {
                // 新的版本下载失败
            });
        }
    };
    SharedManagerClass.prototype.postMessage = function (data) {
        platform.openDataContext.postMessage(data);
    };
    return SharedManagerClass;
}());
__reflect(SharedManagerClass.prototype, "SharedManagerClass");
var SharedManager = new SharedManagerClass();
var SoundManager = (function () {
    function SoundManager() {
    }
    return SoundManager;
}());
__reflect(SoundManager.prototype, "SoundManager");
var BackMenuBitmapClass = (function (_super) {
    __extends(BackMenuBitmapClass, _super);
    function BackMenuBitmapClass() {
        var _this = _super.call(this) || this;
        _this.cnt = 0;
        _this.updateFlag = false;
        _this.toY = 517;
        _this.skinName = "BackMenuSkin";
        return _this;
    }
    BackMenuBitmapClass.prototype.childrenCreated = function () {
        this.backMenuGroup.y = -this.toY;
    };
    BackMenuBitmapClass.prototype.updateStart = function () {
        if (this.updateFlag) {
            return;
        }
        egret.Tween.removeTweens(this.backMenuGroup);
        egret.Tween.get(this.backMenuGroup).to({ y: this.toY }, 200, egret.Ease.cubicOut);
        this.cnt = 0;
        this.updateFlag = true;
    };
    BackMenuBitmapClass.prototype.updateFinish = function () {
        if (!this.updateFlag) {
            return;
        }
        egret.Tween.removeTweens(this.backMenuGroup);
        egret.Tween.get(this.backMenuGroup).to({ y: -this.toY }, 200, egret.Ease.quadIn);
        this.cnt = 0;
        this.updateFlag = false;
    };
    BackMenuBitmapClass.prototype.update = function () {
        if (!this.updateFlag)
            return;
        this.backGrogress.width = this.cnt * 10;
        if (this.cnt++ === 40) {
            this.updateFinish();
            SceneManager.newScene(new SelectScene());
        }
    };
    return BackMenuBitmapClass;
}(eui.Component));
__reflect(BackMenuBitmapClass.prototype, "BackMenuBitmapClass");
var BitmapDisplay = (function (_super) {
    __extends(BitmapDisplay, _super);
    function BitmapDisplay(w, h, color) {
        var _this = _super.call(this) || this;
        _this.drawRect(w, h, color);
        return _this;
    }
    BitmapDisplay.prototype.drawRect = function (w, h, color) {
        this.graphics.beginFill(color);
        this.graphics.drawRect(0, 0, w, h);
        this.graphics.endFill();
    };
    BitmapDisplay.prototype.drawBorderRect = function (param1, param2, param3, param4, param5, param6, param7) {
        // this.graphics.drawRect()
    };
    BitmapDisplay.prototype.drawString = function (str, scaleX, scaleY, color) {
        if (!this.text)
            this.text = new eui.Label();
        this.text.text = str;
        this.text.textColor = color;
        this.addChild(this.text);
    };
    return BitmapDisplay;
}(egret.Sprite));
__reflect(BitmapDisplay.prototype, "BitmapDisplay");
var Block = (function (_super) {
    __extends(Block, _super);
    function Block() {
        var _this = _super.call(this) || this;
        _this.drawPhase = 8;
        _this.gridX = 0;
        _this.gridY = 0;
        _this.inventoryNumber = 0;
        _this.removeFlag = false;
        _this.vecLayer = new Array();
        return _this;
    }
    Block.prototype.setLayer = function () {
        var rest = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            rest[_i] = arguments[_i];
        }
        var i = 0;
        var length = ~~(rest.length);
        i = 0;
        while (i < length) {
            this.vecLayer.push(~~rest[i]);
            i++;
        }
    };
    Block.prototype.removeLayer = function () {
        this.removeFlag = false;
        this.drawPhase = 3;
        var resultPoint;
        resultPoint = this.localToGlobal(this.x, this.y);
        EffectManager.addEffect(new EffectLayerErase(resultPoint.x, resultPoint.y, Block.COLOR[this.vecLayer[0]]));
        this.vecLayer.shift();
        if (this.vecLayer.length != 0) {
            this.draw();
            return false;
        }
        this.destroy();
        return true;
    };
    Block.prototype.destroy = function () {
        BlockManager.removeBlock(this);
    };
    Block.prototype.draw = function () {
        var i = 0;
        var length = this.vecLayer.length;
        if (this.drawPhase == 9) {
            return;
        }
        this.drawPhase++;
        this.removeChildren();
        i = 0;
        while (i < length) {
            var blockChip = Resource.getBlockChips(((2 - i) * 5 + this.drawPhase) * 44, this.vecLayer[i] * 44);
            blockChip.width = 120;
            blockChip.height = 120;
            this.addChild(blockChip);
            i++;
        }
    };
    Block.prototype.update = function () {
        this.draw();
    };
    Block.COLOR = [0x484CFF, 0xFF3030, 0x37FF48, 0xFFFF34, 0xFF6EFF];
    return Block;
}(eui.Component));
__reflect(Block.prototype, "Block");
var BlockManagerClass = (function (_super) {
    __extends(BlockManagerClass, _super);
    function BlockManagerClass() {
        var _this = _super.call(this) || this;
        _this.mouseX = 0;
        _this.mouseY = 0;
        _this.inventoryPadding = 20;
        _this.tidy();
        return _this;
    }
    BlockManagerClass.prototype.reset = function (field) {
        this.removeChildren();
        this.vecBlock = new Array();
        this.vecInventoryBlock = [null, null, null, null, null];
        this.vec2UndoString = [];
        this.field = field;
        this.inventoryPadding = 0;
    };
    BlockManagerClass.prototype.tidy = function () {
        // let horizontalLayout = new eui.HorizontalLayout();
        // horizontalLayout.horizontalAlign = egret.HorizontalAlign.CENTER;
        this.bottom = 150;
        this.horizontalCenter = 0;
        // this.layout = horizontalLayout;
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
            this.mouseDownBlock.x = BlockManager.mouseX - 60;
            this.mouseDownBlock.y = BlockManager.mouseY - 60;
        }
    };
    BlockManagerClass.prototype.addBlock = function (block) {
        this.vecBlock.push(block);
        this.addChildAt(block, block.inventoryNumber);
    };
    BlockManagerClass.prototype.AddAllBlock = function (blockDataStr, bUndo) {
        if (bUndo === void 0) { bUndo = true; }
        var i = 0;
        var j = 0;
        var splitStr = null;
        var block = null;
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
    };
    /**增加操作砖块**/
    BlockManagerClass.prototype.addInventoryBlock = function (block, layerIndex) {
        while (this.vecInventoryBlock.length < layerIndex) {
            this.vecInventoryBlock.push(null);
        }
        this.vecInventoryBlock[layerIndex] = block;
        block.x = layerIndex * 125;
        block.inventoryNumber = layerIndex;
        this.addChild(block);
    };
    BlockManagerClass.prototype.addRandomInventoryBlock = function (idx) {
        var block = new Block();
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
    };
    BlockManagerClass.prototype.removeBlock = function (block) {
        var i = 0;
        var length = this.vecBlock.length;
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
    };
    BlockManagerClass.prototype.mouseDownInventory = function (idx) {
        if (this.vecInventoryBlock.length <= idx) {
            return;
        }
        var down = this.vecInventoryBlock[idx];
        if (down != null) {
            this.mouseDownBlock = down;
            var p = this.localToGlobal(down.x, down.y);
            down.x = p.x;
            down.y = p.y;
            this.parent.addChild(down);
        }
    };
    BlockManagerClass.prototype.mouseUp = function () {
        if (this.mouseDownBlock != null) {
            var p = this.globalToLocal(this.mouseDownBlock.x, this.mouseDownBlock.y);
            this.addChildAt(this.mouseDownBlock, this.mouseDownBlock.inventoryNumber);
            this.mouseDownBlock.x = p.x;
            this.mouseDownBlock.y = p.y;
            egret.Tween.get(this.mouseDownBlock).to({ x: this.mouseDownBlock.inventoryNumber * 125, y: 0 }, 100);
            this.mouseDownBlock = null;
        }
    };
    BlockManagerClass.prototype.undo = function () {
        if (this.field.matchingJob || this.vec2UndoString.length <= 1) {
            return;
        }
        ;
        this.removeChildren();
        this.vecInventoryBlock = [];
        this.vecBlock = [];
        this.field.resetGridBlock();
        this.AddAllBlock(this.vec2UndoString[this.vec2UndoString.length - 2]);
        this.vec2UndoString.pop();
        if (SceneManager.scene instanceof SetPuzzleScene) {
            if (this.vec2UndoString.length === 1) {
                SceneManager.scene.undoBmd.alpha = 0.2;
            }
            else {
                SceneManager.scene.undoBmd.alpha = 0.8;
            }
        }
    };
    BlockManagerClass.prototype.addUndoString = function () {
        var i = 0;
        var j = 0;
        var str = null;
        var block = null;
        var undoStr = [];
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
                SceneManager.scene.undoBmd.alpha = 0.2;
            }
            else {
                SceneManager.scene.undoBmd.alpha = 0.8;
            }
        }
    };
    BlockManagerClass.prototype.clearCheck = function () {
        var i = 0;
        var length = this.vecInventoryBlock.length;
        if (this.vecBlock.length != 0) {
            console.log("clearCheck false length", this.vecBlock);
            return false;
        }
        i = 0;
        while (i < length) {
            if (this.vecInventoryBlock[i] != null) {
                console.log("clearCheck false");
                return false;
            }
            i++;
        }
        InputManager.newInput(null);
        if (this.field.stageData.star3 <= Status.score) {
            InputManager.addChild(new ClearSprite(true));
            SharedManager.vecPuzzleClear[this.field.stageData.stageNo - 1] = 2;
        }
        else {
            InputManager.addChild(new ClearSprite(false));
            if (SharedManager.vecPuzzleClear[this.field.stageData.stageNo - 1] != 2) {
                SharedManager.vecPuzzleClear[this.field.stageData.stageNo - 1] = 1;
            }
        }
        SharedManager.saveVecPuzzleClear();
        return true;
    };
    BlockManagerClass.prototype.finishCheck = function (cls) {
        console.log("finishCheck:", this.vecBlock.length, this.vecBlock);
        if (this.vecBlock.length != 9) {
            return false;
        }
        this.finish(cls);
        return true;
    };
    BlockManagerClass.prototype.finish = function (cls) {
        Status.finishTime = new Date().getTime();
        var score = Status.score;
        switch (Status.mode) {
            case 1:
                SharedManager.saveScore(score);
                break;
            case 2:
                SharedManager.saveScore30(score);
                SetScore30Scene.isFinish = true;
                break;
            case 3:
                SharedManager.saveScore1min(score);
                SetScore1minScene.isFinish = true;
                break;
            case 4:
                SharedManager.saveScore1combo(score);
                SetScore1minScene.isFinish = true;
        }
        var f = new ClearSprite(true, true);
        f.retryScene = cls;
        InputManager.addChild(f);
    };
    return BlockManagerClass;
}(eui.Group));
__reflect(BlockManagerClass.prototype, "BlockManagerClass");
var BlockManager = new BlockManagerClass();
var ClearSprite = (function (_super) {
    __extends(ClearSprite, _super);
    function ClearSprite(isPerfect, isFinish) {
        if (isFinish === void 0) { isFinish = false; }
        var _this = _super.call(this) || this;
        _this.toY = 500;
        _this.isPerfect = isPerfect;
        _this.isFinish = isFinish;
        _this.skinName = "ClearSpriteSkin";
        return _this;
    }
    ClearSprite.prototype.childrenCreated = function () {
        console.log("clearCheck ClearSprite");
        if (!this.isPerfect)
            this.statusLab.text = "清除";
        if (this.isFinish) {
            this.statusLab.text = "完成";
            this.nextLab.text = "分享";
        }
        egret.Tween.get(this.clearGroup).to({ y: this.toY }, 500, egret.Ease.quintOut).wait(100).to({ x: 66 }, 500, egret.Ease.quintOut);
        egret.Tween.get(this.menuGroup).wait(600).to({ y: this.toY }, 500, egret.Ease.quintOut);
        egret.Tween.get(this.retryGroup).wait(800).to({ y: this.toY }, 500, egret.Ease.quintOut);
        egret.Tween.get(this.nextGroup).wait(1000).to({ y: this.toY }, 500, egret.Ease.quintOut);
        this.addEventListener("touchTap", this.onTouch, this);
    };
    ClearSprite.prototype.onTouch = function (e) {
        switch (e.target) {
            case this.clearGroup:
                break;
            case this.menuGroup:
                SceneManager.newScene(new SelectScene());
                break;
            case this.retryGroup:
                if (this.isFinish) {
                    SceneManager.newScene(new this.retryScene());
                }
                else {
                    SceneManager.newScene(new SetPuzzleScene(StageManager.getStage(-2)));
                }
                break;
            case this.nextGroup:
                if (this.isFinish) {
                    SharedManager.shareAppMessage();
                }
                else {
                    var stageData = StageManager.getStage(-1);
                    if (stageData != null) {
                        SceneManager.newScene(new SetPuzzleScene(stageData));
                    }
                }
                break;
        }
    };
    return ClearSprite;
}(eui.Component));
__reflect(ClearSprite.prototype, "ClearSprite");
var CountDownSprite = (function (_super) {
    __extends(CountDownSprite, _super);
    function CountDownSprite() {
        var _this = _super.call(this) || this;
        _this.percentWidth = 100;
        _this.percentHeight = 100;
        _this.touchEnabled = true;
        _this.touchChildren = false;
        _this.touchThrough = false;
        _this.drawRect();
        return _this;
    }
    CountDownSprite.prototype.drawRect = function () {
        var _this = this;
        var rect = new eui.Rect(250, 120);
        rect.fillColor = 0xB0B0AF;
        rect.horizontalCenter = 0;
        rect.verticalCenter = 0;
        this.cdLab = new eui.Label();
        this.cdLab.text = "3";
        this.cdLab.textColor = 0;
        this.cdLab.horizontalCenter = 0;
        this.cdLab.verticalCenter = 0;
        this.addChild(rect);
        this.addChild(this.cdLab);
        egret.Tween.get(this).wait(1500).call(function () { _this.cdLab.text = "2"; }).wait(1000)
            .call(function () { _this.cdLab.text = "1"; }).wait(1000).call(function () { _this.cdLab.text = "start"; })
            .to({ alpha: 0 }, 1000, egret.Ease.elasticIn).call(function () { _this.parent && (_this.parent.removeChild(_this)); });
    };
    return CountDownSprite;
}(eui.Group));
__reflect(CountDownSprite.prototype, "CountDownSprite");
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
        if (layout.requestedColumnCount >= 5) {
            layout.horizontalGap = 2;
        }
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
        i = length - 1;
        while (i >= 0) {
            block = BlockManager.vecBlock[i];
            if (block.removeFlag && block.removeLayer()) {
            }
            i--;
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
        if (!this.matchingJob && grid != null && grid.block == null && grid.type == 1) {
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
//////////////////////////////////////////////////////////////////////////////////////
//
//  Copyright (c) 2014-present, Egret Technology.
//  All rights reserved.
//  Redistribution and use in source and binary forms, with or without
//  modification, are permitted provided that the following conditions are met:
//
//     * Redistributions of source code must retain the above copyright
//       notice, this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above copyright
//       notice, this list of conditions and the following disclaimer in the
//       documentation and/or other materials provided with the distribution.
//     * Neither the name of the Egret nor the
//       names of its contributors may be used to endorse or promote products
//       derived from this software without specific prior written permission.
//
//  THIS SOFTWARE IS PROVIDED BY EGRET AND CONTRIBUTORS "AS IS" AND ANY EXPRESS
//  OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES
//  OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
//  IN NO EVENT SHALL EGRET AND CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT,
//  INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
//  LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;LOSS OF USE, DATA,
//  OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
//  LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
//  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
//  EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
//
//////////////////////////////////////////////////////////////////////////////////////
var AssetAdapter = (function () {
    function AssetAdapter() {
    }
    /**
     * @language zh_CN
     * 解析素材
     * @param source 待解析的新素材标识符
     * @param compFunc 解析完成回调函数，示例：callBack(content:any,source:string):void;
     * @param thisObject callBack的 this 引用
     */
    AssetAdapter.prototype.getAsset = function (source, compFunc, thisObject) {
        function onGetRes(data) {
            compFunc.call(thisObject, data, source);
        }
        if (RES.hasRes(source)) {
            var data = RES.getRes(source);
            if (data) {
                onGetRes(data);
            }
            else {
                RES.getResAsync(source, onGetRes, this);
            }
        }
        else {
            RES.getResByUrl(source, onGetRes, this, RES.ResourceItem.TYPE_IMAGE);
        }
    };
    return AssetAdapter;
}());
__reflect(AssetAdapter.prototype, "AssetAdapter", ["eui.IAssetAdapter"]);
var Grid = (function (_super) {
    __extends(Grid, _super);
    function Grid(gx, gy) {
        var _this = _super.call(this) || this;
        _this.gridX = gx;
        _this.gridY = gy;
        _this.width = 120;
        _this.height = 120;
        _this.fillAlpha = 0;
        _this.strokeWeight = 10;
        _this.strokeAlpha = 0;
        return _this;
    }
    Grid.prototype.setBlock = function (block) {
        this.block = block;
        block.gridX = this.gridX;
        block.gridY = this.gridY;
        // let point = this.localToGlobal(this.x, this.y);
        // block.x = point.x;
        // block.y = point.y;
        // block.x = this.parent.x + this.x;
        // block.y = this.parent.y + this.y;
        block.x = 0;
        block.y = 0;
        this.addChild(block);
    };
    Grid.prototype.drawBroderRect = function () {
        this.strokeAlpha = 1;
        // this.graphics.beginFill(0x00000);
        // this.graphics.lineStyle(4, 587202559);
        // this.graphics.drawRect(0, 0, 40, 40);
        // this.graphics.endFill();
    };
    return Grid;
}(eui.Rect));
__reflect(Grid.prototype, "Grid");
var HudManagerScore = (function (_super) {
    __extends(HudManagerScore, _super);
    function HudManagerScore() {
        var _this = _super.call(this) || this;
        _this.skinName = "HudManagerScoreSkin";
        return _this;
    }
    HudManagerScore.prototype.childrenCreated = function () {
        this.setGameMode();
    };
    HudManagerScore.prototype.setGameMode = function () {
        var mode = Status.mode;
        if (mode === GameMode.Puzzle) {
            this.timeLab.visible = false;
        }
        else if (mode === GameMode.Score) {
            this.stageLab.visible = false;
            this.stageNOLab.visible = false;
        }
        else if (mode === GameMode.Score30) {
            this.stageLab.visible = false;
            this.stageNOLab.visible = false;
        }
        else if (mode === GameMode.Score1M) {
            this.stageLab.visible = false;
            this.stageNOLab.visible = false;
        }
        else if (mode === GameMode.ScoreCombo) {
            this.stageLab.visible = false;
            this.stageNOLab.visible = false;
        }
    };
    HudManagerScore.prototype.update = function () {
        this.scoreLab.text = Status.drawScore.toString();
        if (Status.mode === GameMode.Score1M) {
            var timeStr;
            var h = 0;
            var min = 0;
            var s = 0;
            var cnt = SetScore1minScene.cnt;
            if (cnt >= 0) {
                if (cnt > 1800) {
                    cnt = 1800;
                }
                timeStr = "";
                h = (1800 - cnt) / 30;
                min = h % 60;
                s = ~~((h * 100) % 100);
                if (min < 10) {
                    timeStr = timeStr + "0";
                }
                timeStr = timeStr + ("" + ~~min + ".");
                if (s < 10) {
                    timeStr = timeStr + "0";
                }
                timeStr = timeStr + ("" + ~~s);
                this.timeLab.text = timeStr;
            }
            else {
                this.timeLab.text = "60.00";
            }
        }
        if (Status.mode === GameMode.Score30) {
            this.timeLab.text = SetScore30Scene.cnt.toString();
        }
    };
    return HudManagerScore;
}(eui.Component));
__reflect(HudManagerScore.prototype, "HudManagerScore");
var DebugPlatform = (function () {
    function DebugPlatform() {
    }
    DebugPlatform.prototype.getUserInfo = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, { nickName: "username" }];
            });
        });
    };
    DebugPlatform.prototype.login = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/];
            });
        });
    };
    DebugPlatform.prototype.shareAppMessage = function (object) {
    };
    DebugPlatform.prototype.showShareMenu = function (object) {
    };
    DebugPlatform.prototype.onShareAppMessage = function (callback) {
    };
    DebugPlatform.prototype.uploadWXData = function (key, value) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/];
            });
        });
    };
    DebugPlatform.prototype.setStorage = function (key, value) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/];
            });
        });
    };
    DebugPlatform.prototype.getStorage = function (key) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/];
            });
        });
    };
    DebugPlatform.prototype.getUpdateManager = function () { };
    return DebugPlatform;
}());
__reflect(DebugPlatform.prototype, "DebugPlatform", ["Platform"]);
if (!window.platform) {
    window.platform = new DebugPlatform();
}
var StageManagerClass = (function () {
    function StageManagerClass() {
        this.index = 0;
        this.vecStageData = new Array();
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
    StageManagerClass.prototype.getStage = function (stageId) {
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
    };
    return StageManagerClass;
}());
__reflect(StageManagerClass.prototype, "StageManagerClass");
var StageManager = new StageManagerClass();
var StatusClass = (function () {
    function StatusClass() {
        this.score = 0;
        this.drawScore = 0;
        this.combo = 0;
        this.maxCombo = 0;
        this.mode = 0;
        this.startTime = 0;
        this.finishTime = 0;
        this.vecComboScore = [0, 10, 20, 40, 70, 110, 160, 220, 290, 370, 460, 560, 670, 790, 920, 1060, 1210, 1370, 1540, 1720, 1910, 2110, 2320, 2540, 2770, 3010, 3260, 3520, 3790, 4070, 4360, 4660, 4970, 5290, 5620, 5960, 6310, 6670, 7040, 7420, 7810, 8210, 8620, 9040, 9470, 9910, 10360, 10820, 11290, 11770];
    }
    StatusClass.prototype.reset = function (mode) {
        this.mode = mode;
        this.combo = 0;
        this.maxCombo = this.vecComboScore.length;
        this.score = 0;
        this.drawScore = 0;
        this.startTime = new Date().getDate();
        this.finishTime = 0;
    };
    StatusClass.prototype.addScore = function () {
        var add = this.vecComboScore[this.combo];
        this.score += add;
        return add;
    };
    StatusClass.prototype.getPlayTime = function () {
        var offTime = this.finishTime - this.startTime;
        return;
    };
    StatusClass.prototype.update = function () {
        if (this.drawScore != this.score) {
            this.drawScore = this.drawScore + (~~((this.score - this.drawScore) / 5) + 1);
        }
    };
    return StatusClass;
}());
__reflect(StatusClass.prototype, "StatusClass");
var Status = new StatusClass();
var GameMode;
(function (GameMode) {
    GameMode[GameMode["Puzzle"] = 0] = "Puzzle";
    GameMode[GameMode["Score"] = 1] = "Score";
    GameMode[GameMode["Score30"] = 2] = "Score30";
    GameMode[GameMode["Score1M"] = 3] = "Score1M";
    GameMode[GameMode["ScoreCombo"] = 4] = "ScoreCombo";
})(GameMode || (GameMode = {}));
var InputClearClass = (function (_super) {
    __extends(InputClearClass, _super);
    function InputClearClass() {
        return _super.call(this) || this;
    }
    return InputClearClass;
}(Input));
__reflect(InputClearClass.prototype, "InputClearClass");
var InputClear = new InputClearClass();
var InputOption = (function (_super) {
    __extends(InputOption, _super);
    function InputOption() {
        return _super.call(this) || this;
    }
    return InputOption;
}(Input));
__reflect(InputOption.prototype, "InputOption");
var InputPuzzleSelectClass = (function (_super) {
    __extends(InputPuzzleSelectClass, _super);
    function InputPuzzleSelectClass() {
        return _super.call(this) || this;
    }
    InputPuzzleSelectClass.prototype.mouseDownEvent = function (e) {
        // SceneManager.newScene(new SetPuzzleScene(StageManager.getStage(0)));
        var curStage = SharedManager.getCurPuzzle();
        if (SceneManager.scene instanceof PuzzleSelectScene) {
            var scene = SceneManager.scene;
            var p = egret.Point.create(e.stageX, e.stageY);
            if (scene.stageGroup.getTransformedBounds(this).containsPoint(p)) {
                var offx = e.stageX - scene.stageGroup.x;
                var offy = e.stageY - scene.stageGroup.y;
                offx /= (100 + 22);
                offy /= (100 + 40);
                var sid = 5 * ~~offy + ~~offx;
                if (sid > 24 || sid < 0)
                    sid = 0;
                if (sid <= curStage) {
                    SceneManager.newScene(new SetPuzzleScene(StageManager.getStage(sid)));
                }
            }
            else if (scene.backImg.getTransformedBounds(this).containsPoint(p)) {
                SceneManager.newScene(new SelectScene());
            }
        }
    };
    InputPuzzleSelectClass.prototype.mouseUpEvent = function (param1) {
    };
    InputPuzzleSelectClass.prototype.mouseOutEvent = function (param1) {
    };
    return InputPuzzleSelectClass;
}(Input));
__reflect(InputPuzzleSelectClass.prototype, "InputPuzzleSelectClass");
var InputPuzzleSelect = new InputPuzzleSelectClass();
var InputRankingClass = (function (_super) {
    __extends(InputRankingClass, _super);
    function InputRankingClass() {
        return _super.call(this) || this;
    }
    InputRankingClass.prototype.mouseDownEvent = function (e) {
        if (e.stageY >= 1000 && e.stageX >= 256 && e.stageX <= (256 + 110)) {
            App.BackMenu.updateStart();
        }
    };
    InputRankingClass.prototype.mouseUpEvent = function (e) {
        App.BackMenu.updateFinish();
    };
    return InputRankingClass;
}(Input));
__reflect(InputRankingClass.prototype, "InputRankingClass");
var InputRanking = new InputRankingClass();
var InputSelectClass = (function (_super) {
    __extends(InputSelectClass, _super);
    function InputSelectClass() {
        return _super.call(this) || this;
    }
    InputSelectClass.prototype.mouseDownEvent = function (e) {
        if (SceneManager.scene instanceof SelectScene) {
            var scene = SceneManager.scene;
            var p = egret.Point.create(e.stageX, e.stageY);
            if (scene.puzzleGroup.getTransformedBounds(this).containsPoint(p)) {
                SceneManager.newScene(new PuzzleSelectScene());
            }
            else if (scene.scoreGroup.getTransformedBounds(this).containsPoint(p)) {
                SceneManager.newScene(new SetScoreScene());
            }
            else if (scene.score30Group.getTransformedBounds(this).containsPoint(p)) {
                SceneManager.newScene(new SetScore30Scene());
            }
            else if (scene.score1m.getTransformedBounds(this).containsPoint(p)) {
                SceneManager.newScene(new SetScore1minScene());
            }
            else if (scene.rankGroup.getTransformedBounds(this).containsPoint(p)) {
                SceneManager.newScene(new RankingScene());
            }
            else if (scene.optionGroup.getTransformedBounds(this).containsPoint(p)) {
                // SceneManager.newScene(new OptionScene());
            }
            else if (scene.comboGroup.getTransformedBounds(this).containsPoint(p)) {
                SceneManager.newScene(new SetScore1comboScene());
            }
        }
    };
    return InputSelectClass;
}(Input));
__reflect(InputSelectClass.prototype, "InputSelectClass");
var InputSelect = new InputSelectClass();
var InputSetPuzzleClass = (function (_super) {
    __extends(InputSetPuzzleClass, _super);
    function InputSetPuzzleClass() {
        return _super.call(this) || this;
    }
    InputSetPuzzleClass.prototype.mouseDownEvent = function (e) {
        this.blockRect = new egret.Rectangle(BlockManager.x, BlockManager.y, BlockManager.width, BlockManager.height);
        if (this.blockRect.containsPoint(egret.Point.create(e.stageX, e.stageY))) {
            // console.log("down0");
            var selectBlock = ~~((e.stageX - this.blockRect.x) / 120);
            BlockManager.mouseX = e.stageX;
            BlockManager.mouseY = e.stageY;
            BlockManager.mouseDownInventory(selectBlock);
            // console.log("down0", selectBlock);
        }
        else if (e.stageY >= 1000 && e.stageX >= 130 && e.stageX <= (130 + 110)) {
            App.BackMenu.updateStart();
        }
        else if (e.stageY >= 1000 && e.stageX >= 410 && e.stageX <= (410 + 110)) {
            BlockManager.undo();
        }
    };
    InputSetPuzzleClass.prototype.mouseMoveEvent = function (e) {
        // console.log(e.stageX);
        BlockManager.mouseX = e.stageX;
        BlockManager.mouseY = e.stageY;
    };
    InputSetPuzzleClass.prototype.mouseUpEvent = function (e) {
        App.BackMenu.updateFinish();
        if (!BlockManager.mouseDownBlock) {
            return;
        }
        InputSetPuzzle.fieldRect = new egret.Rectangle(this.field.x, this.field.y, this.field.width, this.field.height);
        if (this.fieldRect.containsPoint(egret.Point.create(e.stageX, e.stageY))) {
            console.log("containsPoint");
            var gx = ~~(e.stageX - this.field.x) / (120);
            var gy = ~~(e.stageY - this.field.y) / (120);
            /**这里需要反过来，对于数组坐标系 */
            this.field.mouseUpField(~~gy, ~~gx);
        }
        else {
            BlockManager.mouseUp();
        }
    };
    InputSetPuzzleClass.prototype.mouseOutEvent = function (e) {
        if (SceneManager.scene instanceof SetPuzzleScene)
            if (this.fieldRect.containsPoint(egret.Point.create(e.stageX, e.stageY))) {
                var gx = (e.stageX - this.field.x) / 120;
                var gy = (e.stageY - this.field.y) / 120;
                this.field.mouseUpField(gx, gy);
            }
            else {
                BlockManager.mouseUp();
            }
    };
    return InputSetPuzzleClass;
}(Input));
__reflect(InputSetPuzzleClass.prototype, "InputSetPuzzleClass");
var InputSetPuzzle = new InputSetPuzzleClass();
var InputSetScoreClass = (function (_super) {
    __extends(InputSetScoreClass, _super);
    function InputSetScoreClass() {
        return _super.call(this) || this;
    }
    InputSetScoreClass.prototype.mouseDownEvent = function (e) {
        this.blockRect = new egret.Rectangle(BlockManager.x, BlockManager.y, BlockManager.width, BlockManager.height);
        if (this.blockRect.containsPoint(egret.Point.create(e.stageX, e.stageY))) {
            var selectBlock = ~~((e.stageX - this.blockRect.x) / 120);
            BlockManager.mouseX = e.stageX;
            BlockManager.mouseY = e.stageY;
            BlockManager.mouseDownInventory(selectBlock);
            console.log(selectBlock);
        }
        else if (e.stageY >= 1000 && e.stageX >= 256 && e.stageX <= (256 + 110)) {
            App.BackMenu.updateStart();
        }
    };
    InputSetScoreClass.prototype.mouseMoveEvent = function (e) {
        BlockManager.mouseX = e.stageX;
        BlockManager.mouseY = e.stageY;
    };
    InputSetScoreClass.prototype.mouseUpEvent = function (e) {
        App.BackMenu.updateFinish();
        if (!BlockManager.mouseDownBlock) {
            return;
        }
        this.fieldRect = new egret.Rectangle(this.field.x, this.field.y, this.field.width, this.field.height);
        if (this.fieldRect.containsPoint(egret.Point.create(e.stageX, e.stageY))) {
            console.log("containsPoint");
            var gx = ~~(e.stageX - this.field.x) / (120);
            var gy = ~~(e.stageY - this.field.y) / (120);
            /**这里需要反过来，对于数组坐标系 */
            this.field.mouseUpField(~~gy, ~~gx);
        }
        else {
            BlockManager.mouseUp();
        }
    };
    InputSetScoreClass.prototype.mouseOutEvent = function (e) {
        if (SceneManager.scene instanceof SetScoreScene)
            if (this.fieldRect.containsPoint(egret.Point.create(e.stageX, e.stageY))) {
                var gx = (e.stageX - this.field.x) / 120;
                var gy = (e.stageY - this.field.y) / 120;
                this.field.mouseUpField(gx, gy);
            }
            else {
                BlockManager.mouseUp();
            }
    };
    return InputSetScoreClass;
}(Input));
__reflect(InputSetScoreClass.prototype, "InputSetScoreClass");
var InputSetScore = new InputSetScoreClass();
var NameScene = (function (_super) {
    __extends(NameScene, _super);
    function NameScene() {
        return _super.call(this) || this;
    }
    return NameScene;
}(Scene));
__reflect(NameScene.prototype, "NameScene");
var OptionScene = (function (_super) {
    __extends(OptionScene, _super);
    function OptionScene() {
        return _super.call(this) || this;
    }
    return OptionScene;
}(Scene));
__reflect(OptionScene.prototype, "OptionScene");
var PuzzleSelectScene = (function (_super) {
    __extends(PuzzleSelectScene, _super);
    function PuzzleSelectScene() {
        var _this = _super.call(this) || this;
        _this.skinName = "PuzzleSelectSceneSkin";
        return _this;
    }
    PuzzleSelectScene.prototype.childrenCreated = function () {
        InputManager.newInput(InputPuzzleSelect);
        this.setStageShow();
    };
    PuzzleSelectScene.prototype.setStageShow = function () {
        var curStage = SharedManager.getCurPuzzle();
        for (var i = 0; i < this.stageGroup.numChildren; i++) {
            var stage = this.stageGroup.getChildAt(i);
            var color = 0x000000;
            if (i === curStage) {
                color = 0xBA9B4A;
            }
            // if (i > curStage) {
            // 	color = 0xD1CCCC;
            // }
            if (i < curStage) {
                color = 0xD1CCCC;
            }
            stage.fillColor = color;
        }
    };
    return PuzzleSelectScene;
}(Scene));
__reflect(PuzzleSelectScene.prototype, "PuzzleSelectScene");
var RankingScene = (function (_super) {
    __extends(RankingScene, _super);
    function RankingScene() {
        var _this = _super.call(this) || this;
        _this.isdisplay = true;
        _this.addEventListener(egret.Event.REMOVED_FROM_STAGE, _this.disable, _this);
        InputManager.newInput(InputRanking);
        return _this;
    }
    RankingScene.prototype.childrenCreated = function () {
        this.init();
        var backBitmap = Resource.getBlockChips(22, 220, 22, 22);
        backBitmap.width = 110;
        backBitmap.height = 110;
        backBitmap.x = 265;
        backBitmap.y = 1000;
        this.addChild(backBitmap);
        this.addChild(App.BackMenu);
    };
    RankingScene.prototype.init = function () {
        var platform = window.platform;
        this.bitmap = platform.openDataContext.createDisplayObject(null, this.stage.stageWidth, this.stage.stageHeight);
        this.addChild(this.bitmap);
        platform.openDataContext.postMessage({
            isDisplay: this.isdisplay,
            keys: ['score', 'score30', 'score1min', 'score1combo'],
            year: (new Date()).getFullYear(),
            command: "getFriendCloudStorage"
        });
    };
    RankingScene.prototype.update = function () {
        App.BackMenu.update();
    };
    RankingScene.prototype.disable = function () {
        platform.openDataContext.postMessage({
            isDisplay: false,
            keys: ['score', 'score30', 'score1min', 'score1combo'],
            year: (new Date()).getFullYear(),
        });
    };
    return RankingScene;
}(Scene));
__reflect(RankingScene.prototype, "RankingScene");
var SelectScene = (function (_super) {
    __extends(SelectScene, _super);
    function SelectScene() {
        var _this = _super.call(this) || this;
        _this.skinName = "SelectSceneSkin";
        return _this;
    }
    SelectScene.prototype.childrenCreated = function () {
        InputManager.newInput(InputSelect);
        this.score1mLab.text = SharedManager.score1min.toString();
        this.scoreLab.text = SharedManager.score.toString();
        this.score30Lab.text = SharedManager.score30.toString();
        this.scoreComboLab.text = SharedManager.score1combo.toString();
        this.puzzleLab.text = SharedManager.getCurPuzzle().toString() + '/25';
    };
    return SelectScene;
}(Scene));
__reflect(SelectScene.prototype, "SelectScene");
var SetPuzzleScene = (function (_super) {
    __extends(SetPuzzleScene, _super);
    function SetPuzzleScene(stageData) {
        var _this = _super.call(this) || this;
        Status.mode = GameMode.Puzzle;
        _this.addChild(_this.field = new Field(stageData));
        var undoBitmap = Resource.getBlockChips(0, 220, 22, 22);
        undoBitmap.width = 110;
        undoBitmap.height = 110;
        undoBitmap.x = 410;
        undoBitmap.y = 1000;
        _this.addChild(undoBitmap);
        _this.undoBmd = undoBitmap;
        var backBitmap = Resource.getBlockChips(22, 220, 22, 22);
        backBitmap.width = 110;
        backBitmap.height = 110;
        backBitmap.x = 130;
        backBitmap.y = 1000;
        _this.addChild(backBitmap);
        _this.addChild(BlockManager);
        _this.addChild(_this.hudManager = new HudManagerScore());
        _this.addChild(EffectManager);
        InputSetPuzzle.field = _this.field;
        InputSetPuzzle.fieldRect = new egret.Rectangle(_this.field.x, _this.field.y, _this.field.width, _this.field.height);
        InputSetPuzzle.blockRect = new egret.Rectangle(BlockManager.x, BlockManager.y, BlockManager.width, BlockManager.height);
        InputManager.newInput(InputSetPuzzle);
        _this.addChild(App.BackMenu);
        _this.hudManager.stageNOLab.text = stageData.stageNo.toString();
        return _this;
    }
    SetPuzzleScene.prototype.update = function () {
        BlockManager.update();
        EffectManager.update();
        App.BackMenu.update();
        Status.update();
        this.hudManager.update();
    };
    return SetPuzzleScene;
}(Scene));
__reflect(SetPuzzleScene.prototype, "SetPuzzleScene");
var SetScore1comboScene = (function (_super) {
    __extends(SetScore1comboScene, _super);
    function SetScore1comboScene() {
        var _this = _super.call(this) || this;
        Status.mode = GameMode.ScoreCombo;
        _this.addChild(_this.field = new Field(new StageData("0,0,ScoreAttack,5,4,11111111111111111111")));
        var backBitmap = Resource.getBlockChips(22, 220, 22, 22);
        backBitmap.width = 110;
        backBitmap.height = 110;
        backBitmap.x = 265;
        backBitmap.y = 1000;
        _this.addChild(backBitmap);
        BlockManager.addRandomInventoryBlock(0);
        BlockManager.addRandomInventoryBlock(1);
        BlockManager.addRandomInventoryBlock(2);
        BlockManager.addRandomInventoryBlock(3);
        BlockManager.addRandomInventoryBlock(4);
        _this.addChild(BlockManager);
        _this.addChild(_this.hudManager = new HudManagerScore());
        _this.addChild(App.BackMenu);
        _this.addChild(EffectManager);
        InputManager.newInput(InputSetScore);
        InputSetScore.field = _this.field;
        return _this;
    }
    SetScore1comboScene.prototype.update = function () {
        BlockManager.update();
        EffectManager.update();
        App.BackMenu.update();
        Status.update();
        this.hudManager.update();
    };
    SetScore1comboScene.isFinish = false;
    return SetScore1comboScene;
}(Scene));
__reflect(SetScore1comboScene.prototype, "SetScore1comboScene");
var SetScore1minScene = (function (_super) {
    __extends(SetScore1minScene, _super);
    function SetScore1minScene() {
        var _this = _super.call(this) || this;
        Status.mode = GameMode.Score1M;
        _this.addChild(_this.field = new Field(new StageData("0,0,ScoreAttack,3,3,111111111")));
        var backBitmap = Resource.getBlockChips(22, 220, 22, 22);
        backBitmap.width = 110;
        backBitmap.height = 110;
        backBitmap.x = 265;
        backBitmap.y = 1000;
        _this.addChild(backBitmap);
        BlockManager.addRandomInventoryBlock(0);
        BlockManager.addRandomInventoryBlock(1);
        BlockManager.addRandomInventoryBlock(2);
        _this.addChild(BlockManager);
        _this.addChild(_this.hudManager = new HudManagerScore());
        _this.addChild(App.BackMenu);
        _this.addChild(EffectManager);
        InputManager.newInput(InputSetScore);
        InputSetScore.field = _this.field;
        InputManager.addChild(new CountDownSprite());
        return _this;
    }
    SetScore1minScene.prototype.update = function () {
        if (!SetScore1minScene.isFinish) {
            SetScore1minScene.cnt++;
        }
        if (SetScore1minScene.isFinish && this.field.matchingJob == null && SetScore1minScene.cnt >= 1800) {
            SetScore1minScene.isFinish = true;
            BlockManager.finish(SetScore1minScene);
        }
        BlockManager.update();
        EffectManager.update();
        App.BackMenu.update();
        Status.update();
        this.hudManager.update();
    };
    SetScore1minScene.isFinish = false;
    return SetScore1minScene;
}(Scene));
__reflect(SetScore1minScene.prototype, "SetScore1minScene");
var SetScore30Scene = (function (_super) {
    __extends(SetScore30Scene, _super);
    function SetScore30Scene() {
        var _this = _super.call(this) || this;
        Status.mode = GameMode.Score30;
        _this.addChild(_this.field = new Field(new StageData("0,0,ScoreAttack,3,3,111111111")));
        var backBitmap = Resource.getBlockChips(22, 220, 22, 22);
        backBitmap.width = 110;
        backBitmap.height = 110;
        backBitmap.x = 265;
        backBitmap.y = 1000;
        _this.addChild(backBitmap);
        BlockManager.addRandomInventoryBlock(0);
        BlockManager.addRandomInventoryBlock(1);
        BlockManager.addRandomInventoryBlock(2);
        _this.addChild(BlockManager);
        _this.addChild(_this.hudManager = new HudManagerScore());
        _this.addChild(App.BackMenu);
        _this.addChild(EffectManager);
        InputManager.newInput(InputSetScore);
        InputSetScore.field = _this.field;
        return _this;
    }
    SetScore30Scene.prototype.update = function () {
        BlockManager.update();
        EffectManager.update();
        App.BackMenu.update();
        Status.update();
        this.hudManager.update();
    };
    SetScore30Scene.isFinish = false;
    return SetScore30Scene;
}(Scene));
__reflect(SetScore30Scene.prototype, "SetScore30Scene");
var SetScoreScene = (function (_super) {
    __extends(SetScoreScene, _super);
    function SetScoreScene() {
        var _this = _super.call(this) || this;
        Status.mode = GameMode.Score;
        _this.addChild(_this.field = new Field(new StageData("0,0,ScoreAttack,3,3,111111111")));
        var backBitmap = Resource.getBlockChips(22, 220, 22, 22);
        backBitmap.width = 110;
        backBitmap.height = 110;
        backBitmap.x = 265;
        backBitmap.y = 1000;
        _this.addChild(backBitmap);
        BlockManager.addRandomInventoryBlock(0);
        BlockManager.addRandomInventoryBlock(1);
        BlockManager.addRandomInventoryBlock(2);
        _this.addChild(BlockManager);
        _this.addChild(_this.hudManager = new HudManagerScore());
        _this.addChild(App.BackMenu);
        _this.addChild(EffectManager);
        InputManager.newInput(InputSetScore);
        InputSetScore.field = _this.field;
        return _this;
    }
    SetScoreScene.prototype.update = function () {
        BlockManager.update();
        EffectManager.update();
        App.BackMenu.update();
        Status.update();
        this.hudManager.update();
    };
    return SetScoreScene;
}(Scene));
__reflect(SetScoreScene.prototype, "SetScoreScene");
var TitleScene = (function (_super) {
    __extends(TitleScene, _super);
    function TitleScene() {
        return _super.call(this) || this;
    }
    TitleScene.prototype.next = function () {
        SceneManager.newScene(new SelectScene());
        // SceneManager.newScene(new NameScene());
    };
    return TitleScene;
}(Scene));
__reflect(TitleScene.prototype, "TitleScene");
;window.Main = Main;