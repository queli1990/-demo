//logs.js
const util = require('../../utils/util.js')

Page({
  data: {  // 参与页面渲染的数据
    logs: [],
    isHideLoadMore : true,
    numberArray: [1, 2, 3, 4]
  },
  //为了掩饰对应的 wxml 中的wx：key的作用
  addNumberToFront: function (e) {
    this.data.numberArray = [this.data.numberArray.length + 1].concat(this.data.numberArray)
    this.setData({
      numberArray: this.data.numberArray
    })
  },
  switch: function (e) {
    const length = this.data.numberArray.length
    for (let i = 0; i < length; ++i) {
      const x = Math.floor(Math.random() * length)
      const y = Math.floor(Math.random() * length)
      const temp = this.data.numberArray[x]
      this.data.numberArray[x] = this.data.numberArray[y]
      this.data.numberArray[y] = temp
    }
    this.setData({
      numberArray: this.data.numberArray
    })
  },
  onLoad: function () {// 页面渲染后 执行
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(log => {
        return util.formatTime(new Date(log))
      })
    })
  },
  //下拉刷新
  onPullDownRefresh: function () {
    console.log('下拉了');
    wx.showNavigationBarLoading()
    //模拟加载数据
    setTimeout(function()
    {
      wx.hideNavigationBarLoading() //完成停止加载
      wx.stopPullDownRefresh() //停止下拉刷新
    },1500)
  },
  //上啦加载
  onReachBottom: function () {
    //判断时候正在加载，如果正在加载，return掉
    if (this.data.isHideLoadMore) {
      console.log('正在加载')
    } else {
      return 
    }
    console.log('加载更多');
    this.setData({
      isHideLoadMore: false,
    })
    setTimeout(()=> {
      this.setData({
        isHideLoadMore: true,
      })
    },3500)
  }
})
