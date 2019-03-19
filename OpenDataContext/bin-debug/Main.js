var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
var Main = (function (_super) {
    __extends(Main, _super);
    function Main() {
        var _this = _super.call(this) || this;
        _this.btnName = ['解谜榜', '得分榜', '限次榜', '竞速榜', '连击榜'];
        /**
         * 便于演示数据，这里使用家数据
         * 有关获取还有的接口参考：https://mp.weixin.qq.com/debug/wxagame/dev/tutorial/open-ability/open-data.html?t=2018323
         */
        _this.gameData = [];
        console.log('Main open data content');
        wx.onMessage(function (data) {
            console.log(data);
            if (data.isDisplay) {
                //获取小游戏开放数据接口 --- 开始
                wx.getFriendCloudStorage({
                    keyList: data.keys,
                    success: function (res) {
                        console.log(res);
                        _this.gameData = res.data;
                        _this.runGame();
                    },
                    fail: function (err) {
                        console.log(err);
                    },
                    complete: function () {
                    }
                });
                //监听消息 isDisplay
            }
            else {
                _this.cancelGame();
            }
        });
        //获取小游戏开放数据接口 --- 结束        
        var imageLoader = new egret.ImageLoader();
        imageLoader.addEventListener(egret.Event.COMPLETE, function (event) {
            var imageLoader = event.currentTarget;
            _this.bgtexture = new egret.Texture();
            _this.bgtexture._setBitmapData(imageLoader.data);
        }, _this);
        imageLoader.load("resource/assets/panel_shop_01.png");
        var imageLoader1 = new egret.ImageLoader();
        imageLoader1.addEventListener(egret.Event.COMPLETE, function (event) {
            var imageLoader = event.currentTarget;
            _this.panel_01 = new egret.Texture();
            _this.panel_01._setBitmapData(imageLoader.data);
        }, _this);
        imageLoader1.load("resource/assets/panel_bg.png");
        return _this;
        //测试点击
        // this.addEventListener(egret.TouchEvent.TOUCH_TAP, (evt: egret.TouchEvent) => {
        //     console.log('子域输出点击', evt);
        // }, this);
    }
    Main.prototype.onModeBtnClick = function (e) {
        console.log("mode click ", e);
    };
    Main.prototype.runGame = function () {
        var _this = this;
        this.scrollView = new egret.ScrollView();
        // console.log('runGame opendata');
        this.bg = new Button();
        this.bg.drawRect(0x0, 600, 1000);
        this.bg.x = (640 - this.bg.width) >> 1;
        this.addChild(this.bg);
        this.listContainers = [];
        // const listContainer = new egret.DisplayObjectContainer();
        this.scrollView.x = this.bg.x;
        this.scrollView.y = this.bg.y + 134;
        this.scrollView.width = this.bg.width;
        this.scrollView.height = this.bg.height - 225;
        this.addChild(this.scrollView);
        var _loop_1 = function (i) {
            var b = new Button();
            b.mode = i;
            b.touchEnabled = true;
            b.addEventListener('touchTap', function () {
                // console.log("mode click ", i);                
                _this.scrollView.setContent(_this.listContainers[i]);
                _this.scrollView.scrollTop = 0;
            }, this_1);
            b.drawRect(0x0, 105, 80);
            b.setText(this_1.btnName[i]);
            b.x = i * 120 + this_1.bg.x + 7;
            b.y = this_1.bg.height - 90;
            this_1.addChild(b);
            this_1.listContainers.push(new egret.DisplayObjectContainer());
        };
        var this_1 = this;
        for (var i = 0; i < 5; i++) {
            _loop_1(i);
        }
        this.scrollView.setContent(this.listContainers[0]);
        var listScore = {
            'puzzle': [],
            'score': [],
            'score30': [],
            'score1min': [],
            'score1combo': [],
        };
        this.gameData.forEach(function (value, index) {
            value.KVDataList.forEach(function (data, index) {
                var rankData = {
                    avatarUrl: value.avatarUrl,
                    nickname: value.nickname,
                    value: parseInt(data.value, 10)
                };
                // rankData['value'] = parseInt(data.value, 10);
                listScore[data.key] && listScore[data.key].push(rankData);
                // console.log("++++++++++++>>", data.key);
            });
        }, this);
        var lindex = 0;
        var _loop_2 = function (key) {
            listScore[key].sort(function (a, b) {
                return b.value - a.value;
            });
            listScore[key].forEach(function (v, index) {
                var item = new RankItem(0x0F0F0F, 580, 113);
                item.y = index * 130;
                item.x = 10;
                _this.listContainers[lindex].addChild(item);
                item.setHead(v.avatarUrl);
                var nickname = v.nickname + "";
                if (nickname.length >= 10) {
                    // console.log(nickname);
                    nickname = nickname.substring(0, 9);
                }
                item.setNickName('名字: ' + nickname);
                var rankStr = '';
                if (key == 'puzzle') {
                    rankStr = '当前第: ' + v.value + '关';
                }
                else {
                    rankStr = '得分: ' + v.value;
                }
                item.setNumRank(rankStr);
            });
            lindex++;
            // console.log(key, listScore[key]);
        };
        for (var key in listScore) {
            _loop_2(key);
        }
    };
    Main.prototype.cancelGame = function () {
        for (var i = 0, l = this.numChildren; i < l; i++) {
            this.removeChildAt(0);
        }
        this.scrollView.removeContent();
        console.log('停止开放数据域');
    };
    return Main;
}(egret.DisplayObjectContainer));
__reflect(Main.prototype, "Main");
