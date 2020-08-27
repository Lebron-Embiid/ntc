// pages/company/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    identity: '',
    companyList: [
      {
        icon: '/assets/company_icon1.svg',
        title: '注册公司'
      },
      {
        icon: '/assets/company_icon2.svg',
        title: '搜索公司'
      }
    ],
    navList: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // if(this.data.identity == 'boss'){
      this.data.navList = [
        {
          icon: '/assets/company_icon3.svg',
          title: '发泥票'
        },{
          icon: '/assets/company_icon4.svg',
          title: '看泥票'
        },{
          icon: '/assets/company_icon5.svg',
          title: '泥票交易'
        },{
          icon: '/assets/company_icon6.svg',
          title: '成员管理'
        },{
          icon: '/assets/company_icon7.svg',
          title: '运输信息'
        },{
          icon: '/assets/company_icon8.svg',
          title: '扫码验票'
        },{
          icon: '/assets/company_icon9.svg',
          title: '验票记录'
        }
      ]

      // this.data.navList = [
      //   {
      //     icon: '/assets/company_icon10.svg',
      //     title: '预约泥票'
      //   },{
      //     icon: '/assets/company_icon11.svg',
      //     title: '查看日志'
      //   }
      // ]
    // }
    this.setData({
      navList: this.data.navList
    })
  },
  clickCompany(e){
    let index = e.currentTarget.dataset.index;
    console.log(index);
    if(index == 0){
      wx.navigateTo({
        url: '/pages/merchant/index'
      })
    }else{
      wx.navigateTo({
        url: '/pages/search/index'
      })
    }
  },
  clickNav(e){
    let index = e.currentTarget.dataset.index;
    console.log(index);
    if(index == 0){
      wx.navigateTo({
        url: '/pages/issuance/index'
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