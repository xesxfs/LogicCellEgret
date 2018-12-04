class Main extends egret.DisplayObjectContainer {
    constructor() {
        super();
        console.log('Main open data content');
        wx.onMessage(data => {
            console.log(data);
            if (data.isDisplay) {
                //获取小游戏开放数据接口 --- 开始
                wx.getFriendCloudStorage({
                    keyList: data.keys,
                    success: (res) => {
                        console.log(res);
                        this.gameData = res.data;
                        this.runGame();
                    },
                    fail: (err) => {
                        console.log(err);
                    },
                    complete: () => {
                    }
                });
                //监听消息 isDisplay
            } else {
                this.cancelGame();
            }
        });

        //获取小游戏开放数据接口 --- 结束        

        let imageLoader = new egret.ImageLoader();
        imageLoader.addEventListener(egret.Event.COMPLETE, (event: egret.Event) => {
            let imageLoader = <egret.ImageLoader>event.currentTarget;
            this.bgtexture = new egret.Texture();
            this.bgtexture._setBitmapData(imageLoader.data);
        }, this);
        imageLoader.load("resource/assets/panel_shop_01.png");

        let imageLoader1 = new egret.ImageLoader();
        imageLoader1.addEventListener(egret.Event.COMPLETE, (event: egret.Event) => {
            let imageLoader = <egret.ImageLoader>event.currentTarget;
            this.panel_01 = new egret.Texture();
            this.panel_01._setBitmapData(imageLoader.data);
        }, this);
        imageLoader1.load("resource/assets/panel_bg.png");
        //测试点击
        // this.addEventListener(egret.TouchEvent.TOUCH_TAP, (evt: egret.TouchEvent) => {
        //     console.log('子域输出点击', evt);

        // }, this);


    }

    private readonly scrollView = new egret.ScrollView();
    private bgtexture: egret.Texture;
    private panel_01: egret.Texture;
    private bg: Button;
    private listContainers: Array<egret.DisplayObjectContainer>;
    private btnName = ['解谜榜', '得分榜', '限次榜', '竞速榜', '连击榜'];

    /**
     * 便于演示数据，这里使用家数据
     * 有关获取还有的接口参考：https://mp.weixin.qq.com/debug/wxagame/dev/tutorial/open-ability/open-data.html?t=2018323
     */
    private gameData = [
    ]

    private onModeBtnClick(e: egret.TouchEvent) {
        console.log("mode click ", e);
    }

    private runGame() {

        // console.log('runGame opendata');
        this.bg = new Button();
        this.bg.drawRect(0x0, 600, 1000);
        this.bg.x = (640 - this.bg.width) >> 1;
        this.addChild(this.bg);

        this.listContainers = [];
        // const listContainer = new egret.DisplayObjectContainer();

        this.scrollView.x = this.bg.x;
        this.scrollView.y = this.bg.y + 100;
        this.scrollView.width = this.bg.width;
        this.scrollView.height = this.bg.height - 200;
        this.addChild(this.scrollView);
        for (let i = 0; i < 5; i++) {
            let b = new Button();
            b.mode = i;
            b.touchEnabled = true;
            b.addEventListener('touchTap', () => {
                // console.log("mode click ", i);                
                this.scrollView.setContent(this.listContainers[i]);
                this.scrollView.scrollTop = 0;

            }, this);
            b.drawRect(0x0, 105, 80);
            b.setText(this.btnName[i]);
            b.x = i * 120 + this.bg.x + 7;
            b.y = this.bg.height - 90;
            this.addChild(b);
            this.listContainers.push(new egret.DisplayObjectContainer());
        }

        this.scrollView.setContent(this.listContainers[0]);
        let listScore = {
            'puzzle': [],
            'score': [],
            'score30': [],
            'score1min': [],
            'score1combo': [],
        }

        this.gameData.forEach(
            (value, index) => {
                value.KVDataList.forEach((data, index) => {
                    let rankData = {
                        avatarUrl: value.avatarUrl,
                        nickname: value.nickname,
                        value: parseInt(data.value, 10)
                    }
                    // rankData['value'] = parseInt(data.value, 10);
                    listScore[data.key] && listScore[data.key].push(rankData);
                    // console.log("++++++++++++>>", data.key);
                });

            }, this);
        let lindex = 0;
        for (let key in listScore) {
            listScore[key].sort((a, b) => {
                return b.value - a.value;
            });

            listScore[key].forEach((v, index) => {
                let item = new RankItem(0x0F0F0F, 580, 113);
                item.y = index * 130;
                item.x = 10;
                this.listContainers[lindex].addChild(item);
                item.setHead(v.avatarUrl);
                item.setNickName('名字: ' + v.nickname);
                let rankStr = '';
                if (key == 'puzzle') {
                    rankStr = '当前第: ' + v.value + '关'
                } else {
                    rankStr = '得分: ' + v.value;
                }
                item.setNumRank(rankStr);

            });
            lindex++;
            // console.log(key, listScore[key]);
        }



    }

    private cancelGame(): void {
        for (let i = 0, l = this.numChildren; i < l; i++) {
            this.removeChildAt(0);
        }
        this.scrollView.removeContent();
        console.log('停止开放数据域');
    }
}
