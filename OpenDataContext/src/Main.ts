class Main extends egret.DisplayObjectContainer {

    constructor() {
        super();

        wx.onMessage(data => {
            console.log(data);
            if (data.isDisplay) {
                //获取小游戏开放数据接口 --- 开始
                wx.getFriendCloudStorage({
                    keyList: [],
                    success: res => {
                        console.log(res);
                        this.runGame();
                    },
                    fail: err => {
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
        this.addEventListener(egret.TouchEvent.TOUCH_TAP, (evt: egret.TouchEvent) => {
            console.log('子域输出点击');
        }, this);
    }

    private readonly scrollView = new egret.ScrollView();
    private bgtexture: egret.Texture;
    private panel_01: egret.Texture;

    /**
     * 便于演示数据，这里使用家数据
     * 有关获取还有的接口参考：https://mp.weixin.qq.com/debug/wxagame/dev/tutorial/open-ability/open-data.html?t=2018323
     */
    private readonly gameData = [
        { openId: '', avatarUrl: '', nickName: 'peony', data: [{ score: 100, time: 1000 }] },
        { openId: '', avatarUrl: '', nickName: 'peony', data: [{ score: 101, time: 100 }] },
        { openId: '', avatarUrl: '', nickName: 'peony', data: [{ score: 102, time: 1700 }] },
        { openId: '', avatarUrl: '', nickName: 'peony', data: [{ score: 103, time: 1800 }] },
        { openId: '', avatarUrl: '', nickName: 'peony', data: [{ score: 104, time: 1900 }] },
        { openId: '', avatarUrl: '', nickName: 'peony', data: [{ score: 105, time: 1070 }] },
        { openId: '', avatarUrl: '', nickName: 'peony', data: [{ score: 106, time: 1030 }] },
        { openId: '', avatarUrl: '', nickName: 'peony', data: [{ score: 107, time: 1010 }] },
        { openId: '', avatarUrl: '', nickName: 'peony', data: [{ score: 108, time: 1020 }] },
        { openId: '', avatarUrl: '', nickName: 'peony', data: [{ score: 109, time: 1030 }] },
        { openId: '', avatarUrl: '', nickName: 'peony', data: [{ score: 111, time: 1040 }] },
        { openId: '', avatarUrl: '', nickName: 'peony', data: [{ score: 112, time: 1050 }] },
        { openId: '', avatarUrl: '', nickName: 'peony', data: [{ score: 123, time: 1060 }] },
        { openId: '', avatarUrl: '', nickName: 'peony', data: [{ score: 167, time: 1080 }] }
    ]

    private runGame() {
        console.log('runGame opendata');
        let bitmap = new egret.Bitmap(this.panel_01);
        bitmap.x = (640 - 480) >> 1;
        bitmap.y = (1136 - 800) >> 1;
        this.addChild(bitmap);

        const listContainer = new egret.DisplayObjectContainer();
        this.scrollView.setContent(listContainer);
        this.scrollView.x = bitmap.x;
        this.scrollView.y = bitmap.y;
        this.scrollView.width = bitmap.width;
        this.scrollView.height = bitmap.height;
        this.addChild(this.scrollView);

        this.gameData.forEach(
            (value, index) => {
                let item = new egret.DisplayObjectContainer();
                item.y = index * 130;
                listContainer.addChild(item);

                let bitmap = new egret.Bitmap(this.bgtexture);
                bitmap.width = 460;
                item.addChild(bitmap);

                let nicktxt = new egret.TextField();
                nicktxt.y = 50;
                nicktxt.text = '名字:' + value.nickName;
                item.addChild(nicktxt);

                let numtxt = new egret.TextField();
                numtxt.x = 260;
                numtxt.y = 50;
                numtxt.text = '得分:' + value.data[0].score;
                item.addChild(numtxt);
            }, this);
    }

    private cancelGame(): void {
        for (let i = 0, l = this.numChildren; i < l; i++) {
            this.removeChildAt(0);
        }
        this.scrollView.removeContent();
        console.log('停止开放数据域');
    }
}

// // 微信关系数据的获取
// // 上传方法类似、开发者自行填写

// declare namespace wx {

//     /**
//      * 监听消息
//      */
//     const onMessage: (callback: (data: { [key: string]: any }) => void) => void;
//     /**
//      * 拉取当前用户所有同玩好友的托管数据。该接口只可在开放数据域下使用
//      * @param keyList 要拉取的 key 列表
//      * @param success 接口调用成功的回调函数
//      * @param fail 	接口调用失败的回调函数
//      * @param complete 接口调用结束的回调函数（调用成功、失败都会执行）
//      */
//     const getFriendCloudStorage: (Object: {
//         keyList?: string[],
//         success?: (res: {
//             data: UserGameData[]
//         }) => void,
//         fail?: (err: any) => void,
//         complete?: () => void,
//     }) => void;


//     /**
//      * 在小游戏是通过群分享卡片打开的情况下，可以通过调用该接口获取群同玩成员的游戏数据。该接口只可在开放数据域下使用。
//      * @param shareTicket 群分享对应的 shareTicket
//      * @param keyList 要拉取的 key 列表
//      * @param success 接口调用成功的回调函数
//      * @param fail 接口调用失败的回调函数
//      * @param complete 接口调用结束的回调函数（调用成功、失败都会执行）
//      */
//     const getGroupCloudStorage: (Object: {
//         shareTicket: string,
//         keyList: string[],
//         success?: (res: {
//             data: UserGameData[]
//         }) => void,
//         fail?: (err?: any) => void,
//         complete?: () => void,
//     }) => void;

//     /**
//      * 用户数据
//      */
//     type UserGameData = {

//         /** 用户的微信头像 url */
//         avatarUrl: string,

//         /** 用户的微信昵称 */
//         nickName: string,

//         /** 用户的 openId */
//         openId: string,

//         /**用户自定义数据 */
//         KVList: KVData[]
//     }

//     type KVData = {
//         key: string,
//         value: string
//     }
// }