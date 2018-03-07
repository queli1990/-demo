//index.js
//获取应用实例
const app = getApp()

Page({
  //右上角的分享按钮
  onShareAppMessage:function(){
    return {
      title:"自定义标题11111",
      path:'/pages/logs'
    }
  },
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    text:'长按进入template页面',
    array: [{ msg: "点我进入下一个非tab页面" }, { msg:"第二条数据"}]
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  viewTap:function() {
    console.log('点击了，当前页面路径'+this.route)
    this.setData({
      xx : '1234'
    },callback=>{
      console.log('上面的事件执行完了，要进入下一个页面了')
      wx.navigateTo({
        url: '../test/test?id=23',
      })
    })
  },
  longTap: function() {
    wx.navigateTo({
      url: '../template/template',
    })
  },
  //页面的load函数
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
    /**post请求数据**/
    // wx.request({
    //   url: 'http://dw4f3k6eh2fyb.cloudfront.net/app/member/doRegister.do',
    //   data: {
    //     userName :'123456@qq.com',
    //     password : '123456@qq.com',
    //     platform : 'mobile-ios',
    //     channel: 'uu100',
    //     sign: 'df872f630196b7dff1b9c1ec1b783b62'
    //   },
    //   method: 'POST',
    //   header:{
    //     'content-type': 'application/x-www-form-urlencoded' // 默认值
    //   },
    //   success:function(res) {
    //     console.log(res.data)
    //   },
    //   fail:function(res) {
    //     console.log('error'+res)
    //   }
    // })

  }
})
