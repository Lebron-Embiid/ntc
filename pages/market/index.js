// pages/market/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    marketList: [
      {
        title: '泥头票市场',
        label: ['项目','项目位置','车次价','泥土容量'],
        type: '新发行',
        typeList: ['营运中泥头场','已关闭泥头场'],
        bgColor: ['#05cec4','#01aeb6'],
        shadowColor: '#cbedee',
        icon: '/assets/w.png'
      },{
        title: '泥头车运输',
        label: ['车队','泥车数量','车队位置'],
        type: '新成立',
        typeList: ['在承接项目','已完成项目'],
        bgColor: ['#50b8f7','#4497dd'],
        shadowColor: '#70c2f6',
        icon: '/assets/l.png'
      },{
        title: '泥尾票市场',
        label: ['项目','项目位置','车次价','泥头需量'],
        type: '新发行',
        typeList: ['营运中泥尾场','已关闭泥尾场'],
        bgColor: ['#fcb55c','#fea645'],
        shadowColor: '#d4d7d3',
        icon: '/assets/t.png'
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  clickMarket(e){
    console.log(e.currentTarget.dataset.index);
    let index = e.currentTarget.dataset.index;
    if(index == 0 || index == 2){
      wx.navigateTo({
        url: '/pages/reserve/index'
      })
    }
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