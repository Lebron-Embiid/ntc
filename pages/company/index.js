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
    navList: [],//各种身份显示的对应按钮
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 泥场结构
    if(this.data.identity == ''){
      // 老板
      this.data.navList = [
        { title: '泥场注册' },
        { title: '身份信息填充' },
        { title: '泥票发行' },
        { title: '总经理' },
        { title: '现场经理' },
        { title: '出纳' },
        { title: '收纳/放行员' },
      ]

      // 注册身份
      // this.data.navList = [
      //   { title: '我做泥头' },
      //   { title: '我做泥尾' },
      //   { title: '我做车队' },
      //   { title: '我做代理人' },
      // ]
    }else{
      // 总经理
      this.data.navList = [
        { title: '我的授权' },
        { title: '发行价格调整' },
      ]
      // 现场经理
      this.data.navList = [
        { title: '泥场调度' },
        { title: '泥场设备及装卸点调度' },
        { title: '泥场信息提供' },
      ]
      // 出纳员
      this.data.navList = [
        { title: '泥票销售' },
        { title: '定价收取' },
      ]
      // 收纳员
      this.data.navList = [
        { title: '泥车收纳' },
      ]
      // 放行员
      this.data.navList = [
        { title: '放行核验' },
      ]
    
    // 车队结构
      // 老板
      this.data.navList = [
        { title: '运输公司注册' },
        { title: '身份信息填充' },
        { title: '泥票再发行' },
        { title: '车队长' },
        { title: '驾驶员' },
        { title: '出纳' },
      ]
      // 车队长
      this.data.navList = [
        { title: '驾驶员上岗调度' },
        { title: '上岗调度' },
        { title: '远程/云端泥票授权' },
      ]
      // 驾驶员
      this.data.navList = [
        { title: '泥场预约' },
        { title: '泥车驾驶' },
        { title: '泥票展示' },
      ]
      // 出纳
      this.data.navList = [
        { title: '泥票销售' },
        { title: '定价收取' },
      ]
    
    // 代理人
      // 代理人
      this.data.navList = [
        { title: '身份信息填充' },
        { title: '泥票再发行' },
        { title: '出纳' },
      ]
      // 出纳
      this.data.navList = [
        { title: '泥票销售' },
        { title: '定价收取' },
      ]
    }
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
  clickNavList(e){
    let index = e.currentTarget.dataset.index;
    console.log(index);
    if(this.data.identity == ''){
      if(index == 0){
        wx.navigateTo({
          url: '/pages/mudRegister/index'
        })
      }else if(index == 2){
        wx.showActionSheet({
          itemList: ["泥头票","泥尾票"],
          success: (res)=>{
            wx.navigateTo({
              url: '/pages/issuance/index?type='+res.tapIndex
            })
          }
        })
      }
    }else if(this.data.identity == ''){
      // 验票
      // wx.scanCode({
      //   onlyFromCamera: true,
      //   success (res) {
      //     console.log(res)
      //   }
      // })
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