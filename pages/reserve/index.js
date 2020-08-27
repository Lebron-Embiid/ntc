// pages/reserve/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    reserveList: [
      {
        type: 0,//泥头场
        date: '明天',
        time: '08:15',
        title: '龙岗新大运泥头场',
        address: '龙岗大道10080号',
        open_time: '傍晚5:00至傍晚6:00',
        ticket: '',
        status: 0
      },{
        type: 1,//泥尾场
        date: '明天',
        time: '08:15',
        title: '龙岗新大运泥尾场',
        address: '龙岗大道10080号',
        open_time: '傍晚5:00至傍晚6:00',
        ticket: '200',
        status: 1
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})