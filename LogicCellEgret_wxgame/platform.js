/**
 * 请在白鹭引擎的Main.ts中调用 platform.login() 方法调用至此处。
 */

class WxgamePlatform {

  name = 'wxgame'

  login() {
    return new Promise((resolve, reject) => {
      wx.login({
        success: (res) => {
          console.log('login success', res);
          resolve(res);
        },
        fail: function(res) {
          console.log('login fail', res);
        }
      })
    })
  }

  getUserInfo(xPercent, yPercent, wPercent, hPercent) {
    let sysInfo = wx.getSystemInfoSync();
    //获取微信界面大小
    let width = sysInfo.screenWidth;
    let height = sysInfo.screenHeight;
    return new Promise((resolve, reject) => {
      let sysInfo = wx.getSystemInfoSync();
      let sdkVersion = sysInfo.SDKVersion;
      wx.getSetting({
        success(res) {
          if (res.authSetting['scope.userInfo']) {
            console.log('已经授权');
            wx.getUserInfo({
              withCredentials: true,
              success: res => {
                var userInfo = res.userInfo;
                var nickName = userInfo.nickName;
                var avatarUrl = userInfo.avatarUrl;
                var gender = userInfo.gender; //性别 0：未知、1：男、2：女
                var province = userInfo.province;
                var city = userInfo.city;
                var country = userInfo.country;
                resolve(userInfo);
                console.log('getUserInfo', res.userInfo);
              },
              fail: res => {
                wx.showModal({
                  title: '友情提醒',
                  content: '请允许微信获得授权!',
                  confirmText: "授权",
                  showCancel: false,
                  success: res => {
                    resolve(null);
                  }
                });
              }
            });


          } else {
            console.log('未授权！');

            var button = wx.createUserInfoButton({
              type: 'text',
              text: '获取用户信息',
              style: {
                left: 10,
                top: 76,
                width: 200,
                height: 40,
                lineHeight: 40,
                backgroundColor: '#ff0000',
                color: '#ffffff',
                textAlign: 'center',
                fontSize: 16,
                borderRadius: 4
              }
            });
            button.onTap((res) => {
              if (res.userInfo) {
                console.log("用户授权:", res);
                var userInfo = res.userInfo;
                var nickName = userInfo.nickName;
                var avatarUrl = userInfo.avatarUrl;
                var gender = userInfo.gender; //性别 0：未知、1：男、2：女
                var province = userInfo.province;
                var city = userInfo.city;
                var country = userInfo.country;
                button.destroy();
                resolve(userInfo);
              }
            });

          }
        }
      })

      // if (sdkVersion >= "2.0.1") {
      //   var button = wx.createUserInfoButton({
      //     type: 'text',
      //     text: '',
      //     //image: "resource/assets_game/main/button_wx_getuserinfo.png",
      //     style: {
      //       left: width * xPercent,
      //       top: height * yPercent,
      //       width: width * wPercent,
      //       height: height * hPercent,
      //       //backgroundColor: '#ff0000',
      //       //color: '#ffffff',
      //     }
      //   });
      //   button.onTap((res) => {
      //     if (res.userInfo) {
      //       console.log("用户授权:", res);
      //       var userInfo = res.userInfo;
      //       var nickName = userInfo.nickName;
      //       var avatarUrl = userInfo.avatarUrl;
      //       var gender = userInfo.gender; //性别 0：未知、1：男、2：女
      //       var province = userInfo.province;
      //       var city = userInfo.city;
      //       var country = userInfo.country;
      //       button.destroy();
      //       resolve(userInfo);
      //     }
      //   });
      // } else {

      // }
    })
  }


  getUserInfo2() {

    let button = wx.createUserInfoButton({
      type: 'text',
      text: '获取用户信息',
      style: {
        left: 10,
        top: 76,
        width: 200,
        height: 40,
        lineHeight: 40,
        backgroundColor: '#ff0000',
        color: '#ffffff',
        textAlign: 'center',
        fontSize: 16,
        borderRadius: 4
      }
    });

    button.onTap((res) => {
      console.log('getUserInfo2', res)
    });
  }

  showShareMenu(data) {
    wx.showShareMenu({
      withShareTicket: data.withShareTicket,
      success: function(res) {
        console.log(res);
      },
      fail: function(res) {
        console.log(res);
      },
      complete: function(res) {}
    })
  }

  onShareAppMessage(callback) {
    wx.onShareAppMessage(callback)
  }

  shareAppMessage(data) {
    return new Promise((resolve, reject) => {
      wx.shareAppMessage({
        title: data.title,
        imageUrl: data.imageUrl,
        query: data.query,
        success: function(res) {
          resolve(res);
        },
        fail: function(res) {
          reject(res);
        },
        complete: function(res) {}
      })
    })
  }

  getUpdateManager() {
    if (wx.getUpdateManager) {
      return wx.getUpdateManager();
    } else
      return null;
  }
  uploadWXData(key, value) {
    wx.setUserCloudStorage({
      KVDataList: [{
        key: key,
        value: value
      }],
      success: (res) => {
        console.log("成功", res);
      },
      fail: (res) => {
        console.log("上传失败", res);
      },
      complete: () => {}
    })
  }

  openDataContext = new WxgameOpenDataContext();
}

class WxgameOpenDataContext {

  createDisplayObject(type, width, height) {
    const bitmapdata = new egret.BitmapData(sharedCanvas);
    bitmapdata.$deleteSource = false;
    const texture = new egret.Texture();
    texture._setBitmapData(bitmapdata);
    const bitmap = new egret.Bitmap(texture);
    bitmap.width = width;
    bitmap.height = height;

    if (egret.Capabilities.renderMode == "webgl") {
      const renderContext = egret.wxgame.WebGLRenderContext.getInstance();
      const context = renderContext.context;
      ////需要用到最新的微信版本
      ////调用其接口WebGLRenderingContext.wxBindCanvasTexture(number texture, Canvas canvas)
      ////如果没有该接口，会进行如下处理，保证画面渲染正确，但会占用内存。
      if (!context.wxBindCanvasTexture) {
        egret.startTick((timeStarmp) => {
          egret.WebGLUtils.deleteWebGLTexture(bitmapdata.webGLTexture);
          bitmapdata.webGLTexture = null;
          return false;
        }, this);
      }
    }
    return bitmap;
  }


  postMessage(data) {
    const openDataContext = wx.getOpenDataContext();
    openDataContext.postMessage(data);
  }
}


window.platform = new WxgamePlatform();