var egret = window.egret;window.skins={};
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
                generateEUI.skins = {"eui.Button":"resource/eui_skins/ButtonSkin.exml","eui.CheckBox":"resource/eui_skins/CheckBoxSkin.exml","eui.HScrollBar":"resource/eui_skins/HScrollBarSkin.exml","eui.HSlider":"resource/eui_skins/HSliderSkin.exml","eui.Panel":"resource/eui_skins/PanelSkin.exml","eui.TextInput":"resource/eui_skins/TextInputSkin.exml","eui.ProgressBar":"resource/eui_skins/ProgressBarSkin.exml","eui.RadioButton":"resource/eui_skins/RadioButtonSkin.exml","eui.Scroller":"resource/eui_skins/ScrollerSkin.exml","eui.ToggleSwitch":"resource/eui_skins/ToggleSwitchSkin.exml","eui.VScrollBar":"resource/eui_skins/VScrollBarSkin.exml","eui.VSlider":"resource/eui_skins/VSliderSkin.exml","eui.ItemRenderer":"resource/eui_skins/ItemRendererSkin.exml"};generateEUI.paths['resource/eui_skins/BackMenuSkin.exml'] = window.BackMenuSkin = (function (_super) {
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
})(eui.Skin);generateEUI.paths['resource/eui_skins/ButtonSkin.exml'] = window.skins.ButtonSkin = (function (_super) {
	__extends(ButtonSkin, _super);
	function ButtonSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay","iconDisplay"];
		
		this.minHeight = 50;
		this.minWidth = 100;
		this.elementsContent = [this._Image1_i(),this.labelDisplay_i(),this.iconDisplay_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","source","button_down_png")
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","alpha",0.5)
				])
		];
	}
	var _proto = ButtonSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(1,3,8,8);
		t.source = "button_up_png";
		t.percentWidth = 100;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.bottom = 8;
		t.left = 8;
		t.right = 8;
		t.size = 20;
		t.textAlign = "center";
		t.textColor = 0xFFFFFF;
		t.top = 8;
		t.verticalAlign = "middle";
		return t;
	};
	_proto.iconDisplay_i = function () {
		var t = new eui.Image();
		this.iconDisplay = t;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		return t;
	};
	return ButtonSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/CheckBoxSkin.exml'] = window.skins.CheckBoxSkin = (function (_super) {
	__extends(CheckBoxSkin, _super);
	function CheckBoxSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay"];
		
		this.elementsContent = [this._Group1_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","alpha",0.7)
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","alpha",0.5)
				])
			,
			new eui.State ("upAndSelected",
				[
					new eui.SetProperty("_Image1","source","checkbox_select_up_png")
				])
			,
			new eui.State ("downAndSelected",
				[
					new eui.SetProperty("_Image1","source","checkbox_select_down_png")
				])
			,
			new eui.State ("disabledAndSelected",
				[
					new eui.SetProperty("_Image1","source","checkbox_select_disabled_png")
				])
		];
	}
	var _proto = CheckBoxSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.verticalAlign = "middle";
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.alpha = 1;
		t.fillMode = "scale";
		t.source = "checkbox_unselect_png";
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.fontFamily = "Tahoma";
		t.size = 20;
		t.textAlign = "center";
		t.textColor = 0x707070;
		t.verticalAlign = "middle";
		return t;
	};
	return CheckBoxSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ClearSpriteSkin.exml'] = window.ClearSpriteSkin = (function (_super) {
	__extends(ClearSpriteSkin, _super);
	function ClearSpriteSkin() {
		_super.call(this);
		this.skinParts = ["statusLab","clearGroup","menuGroup","retryGroup","nextLab","nextGroup"];
		
		this.height = 1136;
		this.width = 640;
		this.elementsContent = [this.clearGroup_i(),this.menuGroup_i(),this.retryGroup_i(),this.nextGroup_i()];
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
		t.x = 262;
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
	_proto.menuGroup_i = function () {
		var t = new eui.Group();
		this.menuGroup = t;
		t.height = 88;
		t.touchChildren = false;
		t.width = 100;
		t.x = 262;
		t.y = -100;
		t.elementsContent = [this._Rect2_i(),this._Label1_i()];
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
		t.text = "菜单";
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
		t.x = 368;
		t.y = -100;
		t.elementsContent = [this._Rect3_i(),this._Label2_i()];
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
	_proto._Label2_i = function () {
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
		t.x = 474;
		t.y = -100;
		t.elementsContent = [this._Rect4_i(),this.nextLab_i()];
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
	return ClearSpriteSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/HScrollBarSkin.exml'] = window.skins.HScrollBarSkin = (function (_super) {
	__extends(HScrollBarSkin, _super);
	function HScrollBarSkin() {
		_super.call(this);
		this.skinParts = ["thumb"];
		
		this.minHeight = 8;
		this.minWidth = 20;
		this.elementsContent = [this.thumb_i()];
	}
	var _proto = HScrollBarSkin.prototype;

	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.height = 8;
		t.scale9Grid = new egret.Rectangle(3,3,2,2);
		t.source = "roundthumb_png";
		t.verticalCenter = 0;
		t.width = 30;
		return t;
	};
	return HScrollBarSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/HSliderSkin.exml'] = window.skins.HSliderSkin = (function (_super) {
	__extends(HSliderSkin, _super);
	function HSliderSkin() {
		_super.call(this);
		this.skinParts = ["track","thumb"];
		
		this.minHeight = 8;
		this.minWidth = 20;
		this.elementsContent = [this.track_i(),this.thumb_i()];
	}
	var _proto = HSliderSkin.prototype;

	_proto.track_i = function () {
		var t = new eui.Image();
		this.track = t;
		t.height = 6;
		t.scale9Grid = new egret.Rectangle(1,1,4,4);
		t.source = "track_sb_png";
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.source = "thumb_png";
		t.verticalCenter = 0;
		return t;
	};
	return HSliderSkin;
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
		t.height = 138;
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
		t.horizontalCenter = 0;
		t.size = 62;
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
		t.horizontalCenter = 1;
		t.size = 42;
		t.stroke = 5;
		t.text = "0";
		t.textColor = 0xFFFFFF;
		t.verticalCenter = 110;
		return t;
	};
	return HudManagerScoreSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ItemRendererSkin.exml'] = window.skins.ItemRendererSkin = (function (_super) {
	__extends(ItemRendererSkin, _super);
	function ItemRendererSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay"];
		
		this.minHeight = 50;
		this.minWidth = 100;
		this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","source","button_down_png")
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","alpha",0.5)
				])
		];
		
		eui.Binding.$bindProperties(this, ["hostComponent.data"],[0],this.labelDisplay,"text");
	}
	var _proto = ItemRendererSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(1,3,8,8);
		t.source = "button_up_png";
		t.percentWidth = 100;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.bottom = 8;
		t.fontFamily = "Tahoma";
		t.left = 8;
		t.right = 8;
		t.size = 20;
		t.textAlign = "center";
		t.textColor = 0xFFFFFF;
		t.top = 8;
		t.verticalAlign = "middle";
		return t;
	};
	return ItemRendererSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/PanelSkin.exml'] = window.skins.PanelSkin = (function (_super) {
	__extends(PanelSkin, _super);
	function PanelSkin() {
		_super.call(this);
		this.skinParts = ["titleDisplay","moveArea","closeButton"];
		
		this.minHeight = 230;
		this.minWidth = 450;
		this.elementsContent = [this._Image1_i(),this.moveArea_i(),this.closeButton_i()];
	}
	var _proto = PanelSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(2,2,12,12);
		t.source = "border_png";
		t.top = 0;
		return t;
	};
	_proto.moveArea_i = function () {
		var t = new eui.Group();
		this.moveArea = t;
		t.height = 45;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.elementsContent = [this._Image2_i(),this.titleDisplay_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "header_png";
		t.top = 0;
		return t;
	};
	_proto.titleDisplay_i = function () {
		var t = new eui.Label();
		this.titleDisplay = t;
		t.fontFamily = "Tahoma";
		t.left = 15;
		t.right = 5;
		t.size = 20;
		t.textColor = 0xFFFFFF;
		t.verticalCenter = 0;
		t.wordWrap = false;
		return t;
	};
	_proto.closeButton_i = function () {
		var t = new eui.Button();
		this.closeButton = t;
		t.bottom = 5;
		t.horizontalCenter = 0;
		t.label = "close";
		return t;
	};
	return PanelSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ProgressBarSkin.exml'] = window.skins.ProgressBarSkin = (function (_super) {
	__extends(ProgressBarSkin, _super);
	function ProgressBarSkin() {
		_super.call(this);
		this.skinParts = ["thumb","labelDisplay"];
		
		this.minHeight = 18;
		this.minWidth = 30;
		this.elementsContent = [this._Image1_i(),this.thumb_i(),this.labelDisplay_i()];
	}
	var _proto = ProgressBarSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(1,1,4,4);
		t.source = "track_pb_png";
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.percentHeight = 100;
		t.source = "thumb_pb_png";
		t.percentWidth = 100;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.fontFamily = "Tahoma";
		t.horizontalCenter = 0;
		t.size = 15;
		t.textAlign = "center";
		t.textColor = 0x707070;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		return t;
	};
	return ProgressBarSkin;
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
		t.bottom = 20;
		t.height = 140;
		t.horizontalCenter = 0;
		t.source = "Chip_106_02_png";
		t.width = 140;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.horizontalCenter = 1.5;
		t.size = 52;
		t.text = "关卡选择";
		t.textColor = 0x000000;
		t.y = 47;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.horizontalCenter = 0;
		t.size = 52;
		t.text = "关卡选择";
		t.textColor = 0xcecaca;
		t.y = 43;
		return t;
	};
	_proto.stageGroup_i = function () {
		var t = new eui.Group();
		this.stageGroup = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
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
})(eui.Skin);generateEUI.paths['resource/eui_skins/RadioButtonSkin.exml'] = window.skins.RadioButtonSkin = (function (_super) {
	__extends(RadioButtonSkin, _super);
	function RadioButtonSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay"];
		
		this.elementsContent = [this._Group1_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","alpha",0.7)
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","alpha",0.5)
				])
			,
			new eui.State ("upAndSelected",
				[
					new eui.SetProperty("_Image1","source","radiobutton_select_up_png")
				])
			,
			new eui.State ("downAndSelected",
				[
					new eui.SetProperty("_Image1","source","radiobutton_select_down_png")
				])
			,
			new eui.State ("disabledAndSelected",
				[
					new eui.SetProperty("_Image1","source","radiobutton_select_disabled_png")
				])
		];
	}
	var _proto = RadioButtonSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.verticalAlign = "middle";
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.alpha = 1;
		t.fillMode = "scale";
		t.source = "radiobutton_unselect_png";
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.fontFamily = "Tahoma";
		t.size = 20;
		t.textAlign = "center";
		t.textColor = 0x707070;
		t.verticalAlign = "middle";
		return t;
	};
	return RadioButtonSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ScrollerSkin.exml'] = window.skins.ScrollerSkin = (function (_super) {
	__extends(ScrollerSkin, _super);
	function ScrollerSkin() {
		_super.call(this);
		this.skinParts = ["horizontalScrollBar","verticalScrollBar"];
		
		this.minHeight = 20;
		this.minWidth = 20;
		this.elementsContent = [this.horizontalScrollBar_i(),this.verticalScrollBar_i()];
	}
	var _proto = ScrollerSkin.prototype;

	_proto.horizontalScrollBar_i = function () {
		var t = new eui.HScrollBar();
		this.horizontalScrollBar = t;
		t.bottom = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.verticalScrollBar_i = function () {
		var t = new eui.VScrollBar();
		this.verticalScrollBar = t;
		t.percentHeight = 100;
		t.right = 0;
		return t;
	};
	return ScrollerSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/SelectSceneSkin.exml'] = window.SelectSceneSkin = (function (_super) {
	__extends(SelectSceneSkin, _super);
	function SelectSceneSkin() {
		_super.call(this);
		this.skinParts = ["puzzleLab","puzzleGroup","scoreLab","scoreGroup","score30Lab","score30Group","score1mLab","score1m","scoreComboLab","comboGroup","rankGroup","optionGroup"];
		
		this.height = 1136;
		this.width = 640;
		this.elementsContent = [this._Group1_i(),this._Image1_i(),this._Image2_i(),this._Image3_i(),this._Label8_i(),this._Label9_i()];
	}
	var _proto = SelectSceneSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 16;
		t.height = 860;
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
		t.x = 18;
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
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 96;
		t.source = "LogicalCell_png";
		t.width = 96;
		t.x = 164;
		t.y = 32;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.height = 96;
		t.source = "Icon48_png";
		t.width = 96;
		t.x = 340;
		t.y = 32;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.height = 88;
		t.horizontalCenter = 0;
		t.source = "TitleLogo_png";
		t.visible = false;
		t.width = 616;
		t.y = 152;
		return t;
	};
	_proto._Label8_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.size = 60;
		t.text = "逻辑框";
		t.textColor = 0x000000;
		t.x = 240;
		t.y = 178;
		return t;
	};
	_proto._Label9_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.size = 60;
		t.text = "逻辑框";
		t.x = 238;
		t.y = 174;
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
})(eui.Skin);generateEUI.paths['resource/eui_skins/TextInputSkin.exml'] = window.skins.TextInputSkin = (function (_super) {
	__extends(TextInputSkin, _super);
	function TextInputSkin() {
		_super.call(this);
		this.skinParts = ["textDisplay","promptDisplay"];
		
		this.minHeight = 40;
		this.minWidth = 300;
		this.elementsContent = [this._Image1_i(),this._Rect1_i(),this.textDisplay_i()];
		this.promptDisplay_i();
		
		this.states = [
			new eui.State ("normal",
				[
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("textDisplay","textColor",0xff0000)
				])
			,
			new eui.State ("normalWithPrompt",
				[
					new eui.AddItems("promptDisplay","",1,"")
				])
			,
			new eui.State ("disabledWithPrompt",
				[
					new eui.AddItems("promptDisplay","",1,"")
				])
		];
	}
	var _proto = TextInputSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(1,3,8,8);
		t.source = "button_up_png";
		t.percentWidth = 100;
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xffffff;
		t.percentHeight = 100;
		t.percentWidth = 100;
		return t;
	};
	_proto.textDisplay_i = function () {
		var t = new eui.EditableText();
		this.textDisplay = t;
		t.height = 24;
		t.left = "10";
		t.right = "10";
		t.size = 20;
		t.textColor = 0x000000;
		t.verticalCenter = "0";
		t.percentWidth = 100;
		return t;
	};
	_proto.promptDisplay_i = function () {
		var t = new eui.Label();
		this.promptDisplay = t;
		t.height = 24;
		t.left = 10;
		t.right = 10;
		t.size = 20;
		t.textColor = 0xa9a9a9;
		t.touchEnabled = false;
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	return TextInputSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ToggleSwitchSkin.exml'] = window.skins.ToggleSwitchSkin = (function (_super) {
	__extends(ToggleSwitchSkin, _super);
	function ToggleSwitchSkin() {
		_super.call(this);
		this.skinParts = [];
		
		this.elementsContent = [this._Image1_i(),this._Image2_i()];
		this.states = [
			new eui.State ("up",
				[
					new eui.SetProperty("_Image1","source","off_png")
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","source","off_png")
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","source","off_png")
				])
			,
			new eui.State ("upAndSelected",
				[
					new eui.SetProperty("_Image2","horizontalCenter",18)
				])
			,
			new eui.State ("downAndSelected",
				[
					new eui.SetProperty("_Image2","horizontalCenter",18)
				])
			,
			new eui.State ("disabledAndSelected",
				[
					new eui.SetProperty("_Image2","horizontalCenter",18)
				])
		];
	}
	var _proto = ToggleSwitchSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.source = "on_png";
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		this._Image2 = t;
		t.horizontalCenter = -18;
		t.source = "handle_png";
		t.verticalCenter = 0;
		return t;
	};
	return ToggleSwitchSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/VScrollBarSkin.exml'] = window.skins.VScrollBarSkin = (function (_super) {
	__extends(VScrollBarSkin, _super);
	function VScrollBarSkin() {
		_super.call(this);
		this.skinParts = ["thumb"];
		
		this.minHeight = 20;
		this.minWidth = 8;
		this.elementsContent = [this.thumb_i()];
	}
	var _proto = VScrollBarSkin.prototype;

	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.height = 30;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(3,3,2,2);
		t.source = "roundthumb_png";
		t.width = 8;
		return t;
	};
	return VScrollBarSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/VSliderSkin.exml'] = window.skins.VSliderSkin = (function (_super) {
	__extends(VSliderSkin, _super);
	function VSliderSkin() {
		_super.call(this);
		this.skinParts = ["track","thumb"];
		
		this.minHeight = 30;
		this.minWidth = 25;
		this.elementsContent = [this.track_i(),this.thumb_i()];
	}
	var _proto = VSliderSkin.prototype;

	_proto.track_i = function () {
		var t = new eui.Image();
		this.track = t;
		t.percentHeight = 100;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(1,1,4,4);
		t.source = "track_png";
		t.width = 7;
		return t;
	};
	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.horizontalCenter = 0;
		t.source = "thumb_png";
		return t;
	};
	return VSliderSkin;
})(eui.Skin);