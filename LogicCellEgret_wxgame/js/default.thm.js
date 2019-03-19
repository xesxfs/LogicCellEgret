var egret = window.egret;
                function __extends(d, b) {
                    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
                        function __() {
                            this.constructor = d;
                        }
                    __.prototype = b.prototype;
                    d.prototype = new __();
                };
                window.generateEUI = {};
                generateEUI.paths = {};
                generateEUI.styles = undefined;
                generateEUI.skins = {};generateEUI.paths['resource/eui_skins/BackMenuSkin.exml'] = window.BackMenuSkin = (function (_super) {
	__extends(BackMenuSkin, _super);
	function BackMenuSkin() {
		_super.call(this);
		this.skinParts = ["backGrogress","backMenuGroup"];
		
		this.height = 1134;
		this.width = 640;
		this.elementsContent = [this.backMenuGroup_i()];
	}
	var _proto = BackMenuSkin.prototype;

	_proto.backMenuGroup_i = function () {
		var t = new eui.Group();
		this.backMenuGroup = t;
		t.anchorOffsetX = 0;
		t.height = 100;
		t.horizontalCenter = 0;
		t.touchChildren = false;
		t.width = 400;
		t.y = 517;
		t.elementsContent = [this._Rect1_i(),this._Label1_i(),this.backGrogress_i()];
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillColor = 0xB0B0AF;
		t.percentHeight = 100;
		t.scaleX = 1;
		t.scaleY = 1;
		t.percentWidth = 100;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.bottom = 15;
		t.horizontalCenter = 0;
		t.text = "返回主菜单...";
		t.textColor = 0x000000;
		return t;
	};
	_proto.backGrogress_i = function () {
		var t = new eui.Rect();
		this.backGrogress = t;
		t.ellipseHeight = 5;
		t.ellipseWidth = 5;
		t.height = 10;
		t.left = 0;
		t.strokeColor = 0xa39e9e;
		t.strokeWeight = 3;
		t.width = 200;
		t.y = 20;
		return t;
	};
	return BackMenuSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ClearSpriteSkin.exml'] = window.ClearSpriteSkin = (function (_super) {
	__extends(ClearSpriteSkin, _super);
	function ClearSpriteSkin() {
		_super.call(this);
		this.skinParts = ["statusLab","clearGroup","continueGroup","menuGroup","retryGroup","nextLab","nextGroup","shareGroup"];
		
		this.height = 1136;
		this.width = 640;
		this.elementsContent = [this.clearGroup_i(),this.continueGroup_i(),this.menuGroup_i(),this.retryGroup_i(),this.nextGroup_i(),this.shareGroup_i()];
	}
	var _proto = ClearSpriteSkin.prototype;

	_proto.clearGroup_i = function () {
		var t = new eui.Group();
		this.clearGroup = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 88;
		t.touchChildren = false;
		t.width = 190;
		t.x = 206;
		t.y = -100;
		t.elementsContent = [this._Rect1_i(),this.statusLab_i()];
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillColor = 0xb0b0af;
		t.percentHeight = 100;
		t.scaleX = 1;
		t.scaleY = 1;
		t.percentWidth = 100;
		return t;
	};
	_proto.statusLab_i = function () {
		var t = new eui.Label();
		this.statusLab = t;
		t.bold = true;
		t.horizontalCenter = 0;
		t.text = "完美";
		t.textColor = 0x000000;
		t.verticalCenter = 0;
		return t;
	};
	_proto.continueGroup_i = function () {
		var t = new eui.Group();
		this.continueGroup = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 150;
		t.horizontalCenter = 0;
		t.touchChildren = false;
		t.width = 200;
		t.y = -150;
		t.elementsContent = [this._Rect2_i(),this._Label1_i(),this._Label2_i()];
		return t;
	};
	_proto._Rect2_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillColor = 0xB0B0AF;
		t.percentHeight = 100;
		t.scaleX = 1;
		t.scaleY = 1;
		t.percentWidth = 100;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.horizontalCenter = 0;
		t.italic = true;
		t.size = 35;
		t.text = "再来一下";
		t.textColor = 0x000000;
		t.verticalCenter = 0;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.bottom = 20;
		t.horizontalCenter = 0;
		t.italic = true;
		t.size = 18;
		t.text = "( 观看视频 )";
		t.textColor = 0x000000;
		return t;
	};
	_proto.menuGroup_i = function () {
		var t = new eui.Group();
		this.menuGroup = t;
		t.height = 88;
		t.touchChildren = false;
		t.width = 100;
		t.x = 204.42;
		t.y = -100;
		t.elementsContent = [this._Rect3_i(),this._Label3_i()];
		return t;
	};
	_proto._Rect3_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillColor = 0xB0B0AF;
		t.percentHeight = 100;
		t.scaleX = 1;
		t.scaleY = 1;
		t.percentWidth = 100;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.horizontalCenter = 0;
		t.text = "返回";
		t.textColor = 0x000000;
		t.verticalCenter = 0;
		return t;
	};
	_proto.retryGroup_i = function () {
		var t = new eui.Group();
		this.retryGroup = t;
		t.height = 88;
		t.touchChildren = false;
		t.width = 100;
		t.x = 310.42;
		t.y = -100;
		t.elementsContent = [this._Rect4_i(),this._Label4_i()];
		return t;
	};
	_proto._Rect4_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillColor = 0xB0B0AF;
		t.percentHeight = 100;
		t.scaleX = 1;
		t.scaleY = 1;
		t.percentWidth = 100;
		return t;
	};
	_proto._Label4_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.horizontalCenter = 0;
		t.text = "重试";
		t.textColor = 0x000000;
		t.verticalCenter = 0;
		return t;
	};
	_proto.nextGroup_i = function () {
		var t = new eui.Group();
		this.nextGroup = t;
		t.height = 88;
		t.touchChildren = false;
		t.width = 100;
		t.x = 416.42;
		t.y = -100;
		t.elementsContent = [this._Rect5_i(),this.nextLab_i()];
		return t;
	};
	_proto._Rect5_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillColor = 0xB0B0AF;
		t.percentHeight = 100;
		t.scaleX = 1;
		t.scaleY = 1;
		t.percentWidth = 100;
		return t;
	};
	_proto.nextLab_i = function () {
		var t = new eui.Label();
		this.nextLab = t;
		t.bold = true;
		t.horizontalCenter = 0;
		t.text = "下一关";
		t.textColor = 0x000000;
		t.verticalCenter = 0;
		return t;
	};
	_proto.shareGroup_i = function () {
		var t = new eui.Group();
		this.shareGroup = t;
		t.height = 88;
		t.touchChildren = false;
		t.width = 100;
		t.x = 521.92;
		t.y = -100;
		t.elementsContent = [this._Rect6_i(),this._Label5_i()];
		return t;
	};
	_proto._Rect6_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillColor = 0xB0B0AF;
		t.percentHeight = 100;
		t.scaleX = 1;
		t.scaleY = 1;
		t.percentWidth = 100;
		return t;
	};
	_proto._Label5_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.horizontalCenter = 0;
		t.text = "分享";
		t.textColor = 0x000000;
		t.verticalCenter = 0;
		return t;
	};
	return ClearSpriteSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/HudManagerScoreSkin.exml'] = window.HudManagerScoreSkin = (function (_super) {
	__extends(HudManagerScoreSkin, _super);
	function HudManagerScoreSkin() {
		_super.call(this);
		this.skinParts = ["stageLab","stageNOLab","scoreLab","timeLab"];
		
		this.height = 1136;
		this.width = 640;
		this.elementsContent = [this._Group1_i()];
	}
	var _proto = HudManagerScoreSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.anchorOffsetY = 0;
		t.height = 80;
		t.top = 0;
		t.percentWidth = 100;
		t.elementsContent = [this._Rect1_i(),this.stageLab_i(),this.stageNOLab_i(),this.scoreLab_i(),this.timeLab_i()];
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.fillAlpha = 0.8;
		t.fillColor = 0x444436;
		t.percentHeight = 100;
		t.percentWidth = 100;
		return t;
	};
	_proto.stageLab_i = function () {
		var t = new eui.Label();
		this.stageLab = t;
		t.bold = true;
		t.size = 32;
		t.stroke = 2;
		t.text = "关卡";
		t.textColor = 0xFFFFFF;
		t.verticalCenter = 0;
		t.x = 56;
		return t;
	};
	_proto.stageNOLab_i = function () {
		var t = new eui.Label();
		this.stageNOLab = t;
		t.bold = true;
		t.size = 32;
		t.stroke = 1;
		t.text = "2";
		t.textColor = 0xFFFFFF;
		t.verticalCenter = 0;
		t.x = 156;
		return t;
	};
	_proto.scoreLab_i = function () {
		var t = new eui.Label();
		this.scoreLab = t;
		t.bold = true;
		t.horizontalCenter = 0.5;
		t.size = 40;
		t.stroke = 5;
		t.text = "0";
		t.textColor = 0xFFFFFF;
		t.verticalCenter = 0;
		return t;
	};
	_proto.timeLab_i = function () {
		var t = new eui.Label();
		this.timeLab = t;
		t.bold = true;
		t.horizontalCenter = 0.5;
		t.size = 26;
		t.stroke = 5;
		t.text = "0";
		t.textColor = 0xFFFFFF;
		t.top = 83;
		return t;
	};
	return HudManagerScoreSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/PuzzleSelectSceneSkin.exml'] = window.PuzzleSelectSceneSkin = (function (_super) {
	__extends(PuzzleSelectSceneSkin, _super);
	function PuzzleSelectSceneSkin() {
		_super.call(this);
		this.skinParts = ["backImg","stageGroup"];
		
		this.height = 1136;
		this.width = 640;
		this.elementsContent = [this.backImg_i(),this._Label1_i(),this._Label2_i(),this.stageGroup_i()];
	}
	var _proto = PuzzleSelectSceneSkin.prototype;

	_proto.backImg_i = function () {
		var t = new eui.Image();
		this.backImg = t;
		t.height = 140;
		t.horizontalCenter = 0;
		t.source = "Chip_106_02_png";
		t.top = 777;
		t.width = 140;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.horizontalCenter = 0;
		t.size = 52;
		t.text = "关卡选择";
		t.textColor = 0x000000;
		t.top = 28;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.horizontalCenter = 0;
		t.size = 52;
		t.text = "关卡选择";
		t.textColor = 0xcecaca;
		t.top = 24;
		return t;
	};
	_proto.stageGroup_i = function () {
		var t = new eui.Group();
		this.stageGroup = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.horizontalCenter = 0;
		t.top = 109;
		t.layout = this._TileLayout1_i();
		t.elementsContent = [this._Rect1_i(),this._Rect2_i(),this._Rect3_i(),this._Rect4_i(),this._Rect5_i(),this._Rect6_i(),this._Rect7_i(),this._Rect8_i(),this._Rect9_i(),this._Rect10_i(),this._Rect11_i(),this._Rect12_i(),this._Rect13_i(),this._Rect14_i(),this._Rect15_i(),this._Rect16_i(),this._Rect17_i(),this._Rect18_i(),this._Rect19_i(),this._Rect20_i(),this._Rect21_i(),this._Rect22_i(),this._Rect23_i(),this._Rect24_i(),this._Rect25_i()];
		return t;
	};
	_proto._TileLayout1_i = function () {
		var t = new eui.TileLayout();
		t.horizontalGap = 22;
		t.paddingTop = 0;
		t.requestedColumnCount = 5;
		t.requestedRowCount = 5;
		t.verticalAlign = "top";
		t.verticalGap = 40;
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xd1cccc;
		t.height = 100;
		t.strokeWeight = 10;
		t.width = 100;
		t.x = 124;
		t.y = 224;
		return t;
	};
	_proto._Rect2_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xba9b4a;
		t.height = 100;
		t.strokeWeight = 10;
		t.width = 100;
		t.x = 134;
		t.y = 234;
		return t;
	};
	_proto._Rect3_i = function () {
		var t = new eui.Rect();
		t.height = 100;
		t.strokeWeight = 10;
		t.width = 100;
		t.x = 144;
		t.y = 244;
		return t;
	};
	_proto._Rect4_i = function () {
		var t = new eui.Rect();
		t.height = 100;
		t.strokeWeight = 10;
		t.width = 100;
		t.x = 154;
		t.y = 254;
		return t;
	};
	_proto._Rect5_i = function () {
		var t = new eui.Rect();
		t.height = 100;
		t.strokeWeight = 10;
		t.width = 100;
		t.x = 164;
		t.y = 264;
		return t;
	};
	_proto._Rect6_i = function () {
		var t = new eui.Rect();
		t.height = 100;
		t.strokeWeight = 10;
		t.width = 100;
		t.x = 174;
		t.y = 274;
		return t;
	};
	_proto._Rect7_i = function () {
		var t = new eui.Rect();
		t.height = 100;
		t.strokeWeight = 10;
		t.width = 100;
		t.x = 134;
		t.y = 234;
		return t;
	};
	_proto._Rect8_i = function () {
		var t = new eui.Rect();
		t.height = 100;
		t.strokeWeight = 10;
		t.width = 100;
		t.x = 144;
		t.y = 244;
		return t;
	};
	_proto._Rect9_i = function () {
		var t = new eui.Rect();
		t.height = 100;
		t.strokeWeight = 10;
		t.width = 100;
		t.x = 154;
		t.y = 254;
		return t;
	};
	_proto._Rect10_i = function () {
		var t = new eui.Rect();
		t.height = 100;
		t.strokeWeight = 10;
		t.width = 100;
		t.x = 164;
		t.y = 264;
		return t;
	};
	_proto._Rect11_i = function () {
		var t = new eui.Rect();
		t.height = 100;
		t.strokeWeight = 10;
		t.width = 100;
		t.x = 174;
		t.y = 274;
		return t;
	};
	_proto._Rect12_i = function () {
		var t = new eui.Rect();
		t.height = 100;
		t.strokeWeight = 10;
		t.width = 100;
		t.x = 184;
		t.y = 284;
		return t;
	};
	_proto._Rect13_i = function () {
		var t = new eui.Rect();
		t.height = 100;
		t.strokeWeight = 10;
		t.width = 100;
		t.x = 144;
		t.y = 244;
		return t;
	};
	_proto._Rect14_i = function () {
		var t = new eui.Rect();
		t.height = 100;
		t.strokeWeight = 10;
		t.width = 100;
		t.x = 154;
		t.y = 254;
		return t;
	};
	_proto._Rect15_i = function () {
		var t = new eui.Rect();
		t.height = 100;
		t.strokeWeight = 10;
		t.width = 100;
		t.x = 164;
		t.y = 264;
		return t;
	};
	_proto._Rect16_i = function () {
		var t = new eui.Rect();
		t.height = 100;
		t.strokeWeight = 10;
		t.width = 100;
		t.x = 174;
		t.y = 274;
		return t;
	};
	_proto._Rect17_i = function () {
		var t = new eui.Rect();
		t.height = 100;
		t.strokeWeight = 10;
		t.width = 100;
		t.x = 184;
		t.y = 284;
		return t;
	};
	_proto._Rect18_i = function () {
		var t = new eui.Rect();
		t.height = 100;
		t.strokeWeight = 10;
		t.width = 100;
		t.x = 194;
		t.y = 294;
		return t;
	};
	_proto._Rect19_i = function () {
		var t = new eui.Rect();
		t.height = 100;
		t.strokeWeight = 10;
		t.width = 100;
		t.x = 154;
		t.y = 254;
		return t;
	};
	_proto._Rect20_i = function () {
		var t = new eui.Rect();
		t.height = 100;
		t.strokeWeight = 10;
		t.width = 100;
		t.x = 164;
		t.y = 264;
		return t;
	};
	_proto._Rect21_i = function () {
		var t = new eui.Rect();
		t.height = 100;
		t.strokeWeight = 10;
		t.width = 100;
		t.x = 174;
		t.y = 274;
		return t;
	};
	_proto._Rect22_i = function () {
		var t = new eui.Rect();
		t.height = 100;
		t.strokeWeight = 10;
		t.width = 100;
		t.x = 174;
		t.y = 274;
		return t;
	};
	_proto._Rect23_i = function () {
		var t = new eui.Rect();
		t.height = 100;
		t.strokeWeight = 10;
		t.width = 100;
		t.x = 184;
		t.y = 284;
		return t;
	};
	_proto._Rect24_i = function () {
		var t = new eui.Rect();
		t.height = 100;
		t.strokeWeight = 10;
		t.width = 100;
		t.x = 194;
		t.y = 294;
		return t;
	};
	_proto._Rect25_i = function () {
		var t = new eui.Rect();
		t.height = 100;
		t.strokeWeight = 10;
		t.width = 100;
		t.x = 204;
		t.y = 304;
		return t;
	};
	return PuzzleSelectSceneSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/SelectSceneSkin.exml'] = window.SelectSceneSkin = (function (_super) {
	__extends(SelectSceneSkin, _super);
	function SelectSceneSkin() {
		_super.call(this);
		this.skinParts = ["puzzleLab","puzzleGroup","scoreLab","scoreGroup","score30Lab","score30Group","score1mLab","score1m","scoreComboLab","comboGroup","rankGroup","optionGroup","vedioGroup"];
		
		this.height = 1136;
		this.width = 640;
		this.elementsContent = [this._Group1_i(),this._Label8_i(),this._Label9_i(),this._Image1_i(),this.vedioGroup_i()];
	}
	var _proto = SelectSceneSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 750;
		t.top = 206;
		t.percentWidth = 100;
		t.x = 0;
		t.layout = this._BasicLayout1_i();
		t.elementsContent = [this.puzzleGroup_i(),this.scoreGroup_i(),this.score30Group_i(),this.score1m_i(),this.comboGroup_i(),this.rankGroup_i(),this.optionGroup_i()];
		return t;
	};
	_proto._BasicLayout1_i = function () {
		var t = new eui.BasicLayout();
		return t;
	};
	_proto.puzzleGroup_i = function () {
		var t = new eui.Group();
		this.puzzleGroup = t;
		t.height = 200;
		t.width = 300;
		t.x = 8;
		t.y = 60;
		t.elementsContent = [this._Rect1_i(),this._Label1_i(),this.puzzleLab_i()];
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xd1cccc;
		t.percentHeight = 100;
		t.strokeWeight = 20;
		t.percentWidth = 100;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.horizontalCenter = 0.5;
		t.size = 42;
		t.text = "解谜模式";
		t.textColor = 0x000000;
		t.y = 52;
		return t;
	};
	_proto.puzzleLab_i = function () {
		var t = new eui.Label();
		this.puzzleLab = t;
		t.bold = true;
		t.horizontalCenter = 0;
		t.size = 42;
		t.text = "0/25";
		t.textColor = 0x242fe5;
		t.y = 114;
		return t;
	};
	_proto.scoreGroup_i = function () {
		var t = new eui.Group();
		this.scoreGroup = t;
		t.height = 200;
		t.width = 300;
		t.x = 332;
		t.y = 60;
		t.elementsContent = [this._Rect2_i(),this._Label2_i(),this.scoreLab_i()];
		return t;
	};
	_proto._Rect2_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xD1CCCC;
		t.percentHeight = 100;
		t.strokeWeight = 20;
		t.percentWidth = 100;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.horizontalCenter = 0.5;
		t.size = 42;
		t.text = "得分模式";
		t.textColor = 0x000000;
		t.y = 52;
		return t;
	};
	_proto.scoreLab_i = function () {
		var t = new eui.Label();
		this.scoreLab = t;
		t.bold = true;
		t.horizontalCenter = 0;
		t.size = 42;
		t.text = "0";
		t.textColor = 0x242FE5;
		t.y = 114;
		return t;
	};
	_proto.score30Group_i = function () {
		var t = new eui.Group();
		this.score30Group = t;
		t.height = 200;
		t.width = 300;
		t.x = 8;
		t.y = 277;
		t.elementsContent = [this._Rect3_i(),this._Label3_i(),this.score30Lab_i()];
		return t;
	};
	_proto._Rect3_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xD1CCCC;
		t.percentHeight = 100;
		t.strokeWeight = 20;
		t.percentWidth = 100;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.horizontalCenter = 0.5;
		t.size = 42;
		t.text = "限次模式";
		t.textColor = 0x000000;
		t.y = 52;
		return t;
	};
	_proto.score30Lab_i = function () {
		var t = new eui.Label();
		this.score30Lab = t;
		t.bold = true;
		t.horizontalCenter = 0;
		t.size = 42;
		t.text = "0";
		t.textColor = 0x242FE5;
		t.y = 114;
		return t;
	};
	_proto.score1m_i = function () {
		var t = new eui.Group();
		this.score1m = t;
		t.height = 200;
		t.width = 300;
		t.x = 332;
		t.y = 278;
		t.elementsContent = [this._Rect4_i(),this._Label4_i(),this.score1mLab_i()];
		return t;
	};
	_proto._Rect4_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xD1CCCC;
		t.percentHeight = 100;
		t.strokeWeight = 20;
		t.percentWidth = 100;
		return t;
	};
	_proto._Label4_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.horizontalCenter = 0.5;
		t.size = 42;
		t.text = "竞速模式";
		t.textColor = 0x000000;
		t.y = 52;
		return t;
	};
	_proto.score1mLab_i = function () {
		var t = new eui.Label();
		this.score1mLab = t;
		t.bold = true;
		t.horizontalCenter = 0;
		t.size = 42;
		t.text = "0";
		t.textColor = 0x242FE5;
		t.y = 114;
		return t;
	};
	_proto.comboGroup_i = function () {
		var t = new eui.Group();
		this.comboGroup = t;
		t.height = 200;
		t.width = 300;
		t.x = 8;
		t.y = 495;
		t.elementsContent = [this._Rect5_i(),this._Label5_i(),this.scoreComboLab_i()];
		return t;
	};
	_proto._Rect5_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xD1CCCC;
		t.percentHeight = 100;
		t.strokeWeight = 20;
		t.percentWidth = 100;
		return t;
	};
	_proto._Label5_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.horizontalCenter = 0.5;
		t.size = 42;
		t.text = "连击模式";
		t.textColor = 0x000000;
		t.y = 52;
		return t;
	};
	_proto.scoreComboLab_i = function () {
		var t = new eui.Label();
		this.scoreComboLab = t;
		t.bold = true;
		t.horizontalCenter = 0;
		t.size = 42;
		t.text = "0";
		t.textColor = 0x242FE5;
		t.y = 114;
		return t;
	};
	_proto.rankGroup_i = function () {
		var t = new eui.Group();
		this.rankGroup = t;
		t.height = 200;
		t.width = 300;
		t.x = 332;
		t.y = 495;
		t.elementsContent = [this._Rect6_i(),this._Label6_i()];
		return t;
	};
	_proto._Rect6_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xD1CCCC;
		t.percentHeight = 100;
		t.strokeWeight = 20;
		t.percentWidth = 100;
		return t;
	};
	_proto._Label6_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.horizontalCenter = 0.5;
		t.size = 42;
		t.text = "排行榜";
		t.textColor = 0x000000;
		t.verticalCenter = -10;
		return t;
	};
	_proto.optionGroup_i = function () {
		var t = new eui.Group();
		this.optionGroup = t;
		t.height = 200;
		t.horizontalCenter = 0;
		t.visible = false;
		t.width = 300;
		t.y = 652;
		t.elementsContent = [this._Rect7_i(),this._Label7_i()];
		return t;
	};
	_proto._Rect7_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xD1CCCC;
		t.percentHeight = 100;
		t.strokeWeight = 20;
		t.percentWidth = 100;
		return t;
	};
	_proto._Label7_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.horizontalCenter = 0.5;
		t.size = 42;
		t.text = "Option";
		t.textColor = 0x000000;
		t.verticalCenter = 0;
		return t;
	};
	_proto._Label8_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.size = 60;
		t.text = "逻辑框";
		t.textColor = 0x000000;
		t.top = 187;
		t.x = 240;
		return t;
	};
	_proto._Label9_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.size = 60;
		t.text = "逻辑框";
		t.top = 191;
		t.x = 238;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 160;
		t.horizontalCenter = 0;
		t.source = "icon_png";
		t.top = 25;
		t.width = 160;
		return t;
	};
	_proto.vedioGroup_i = function () {
		var t = new eui.Group();
		this.vedioGroup = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 58;
		t.visible = false;
		t.width = 124;
		t.x = 62;
		t.y = 80;
		t.elementsContent = [this._Rect8_i(),this._Label10_i()];
		return t;
	};
	_proto._Rect8_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xD1CCCC;
		t.percentHeight = 100;
		t.strokeWeight = 2;
		t.percentWidth = 100;
		return t;
	};
	_proto._Label10_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.horizontalCenter = 0.5;
		t.size = 24;
		t.text = "激励视频";
		t.textColor = 0x000000;
		t.verticalCenter = 0;
		return t;
	};
	return SelectSceneSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/SetScoreSceneSkin.exml'] = window.SetScoreSceneSkin = (function (_super) {
	__extends(SetScoreSceneSkin, _super);
	function SetScoreSceneSkin() {
		_super.call(this);
		this.skinParts = [];
		
		this.height = 300;
		this.width = 400;
	}
	var _proto = SetScoreSceneSkin.prototype;

	return SetScoreSceneSkin;
})(eui.Skin);