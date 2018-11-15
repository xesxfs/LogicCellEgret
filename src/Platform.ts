/** 
 * 平台数据接口。
 * 由于每款游戏通常需要发布到多个平台上，所以提取出一个统一的接口用于开发者获取平台数据信息
 * 推荐开发者通过这种方式封装平台逻辑，以保证整体结构的稳定
 * 由于不同平台的接口形式各有不同，白鹭推荐开发者将所有接口封装为基于 Promise 的异步形式
 */
declare interface Platform {
    openDataContext: any;

    getUserInfo(): Promise<any>;

    login(): Promise<any>;

    shareAppMessage(object: any);

    showShareMenu(object: any);

    uploadWXData(key, value);

    setStorage(key, value): Promise<any>;

    getStorage(key): Promise<any>;

    getUpdateManager();

    onShareAppMessage(callback: any);

}

class DebugPlatform implements Platform {
    openDataContext: any;

    async getUserInfo() {
        return { nickName: "username" }
    }
    async login() {
    }
    shareAppMessage(object: any) {
    }
    showShareMenu(object: any) {
    }
    onShareAppMessage(callback: any) {
    }
    async uploadWXData(key, value) {
    }
    async setStorage(key, value) {
    }
    async getStorage(key) {
    }

    getUpdateManager() { }

}


if (!window.platform) {
    window.platform = new DebugPlatform();
}



declare let platform: Platform;

declare interface Window {

    platform: Platform
}





