// pages/company/index.js
import {
  add_mud_ticket_sell,
  driver_buy_ticket,
  query_user_type,
  has_user_type,
  change_user_type,
  get_user_info
} from '../../api/api.js'
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
    identityList: [
      {name: '泥场老板',value: 'mb'},
      // {name: '泥场总经理',value: 'mg'},
      // {name: '泥场经理',value: 'mm'},
      {name: '泥场员工',value: 'ms'},
      {name: '泥场出纳',value: 'mt'},
      {name: '运输队老板',value: 'tb'},
      {name: '运输队司机',value: 'td'},
      // {name: '运输队经理',value: 'tm'},
      {name: '运输队出纳',value: 'tt'},
    ],
    is_change: false,
    navList: [],//各种身份显示的对应按钮
    page: 1,
    dataStr: ''
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    has_user_type().then((res)=>{
      if(res.code == 200){
        if(res.data != null){
          this.setData({
            identityList: res.data,
            is_change: true
          })
        }
      }
    })
    let identity = wx.getStorageSync('userInfo').type;
    this.setData({
      identity: identity
    })
    // if(this.data.identity == '' || this.data.identity == null){
    //   this.setData({
    //     is_change: false
    //   })
    // }else{
    //   this.setData({
    //     is_change: true
    //   })
    // }
    this.getListInit();
  },
  getListInit(){
    // 泥场结构
    if(this.data.identity == 'mb'){
      // 泥场老板
      this.data.navList = [
        { title: '注册泥场' },
        { title: '查看我的泥场列表' },
        { title: '泥票发行' },
        { title: '查看我的泥票列表' },
        { title: '成员管理' },
      ]
    }else if(this.data.identity == 'mg'){
      // 泥场总经理
      this.data.navList = [
        { title: '我的授权' },
        { title: '发行价格调整' },
      ]
    }else if(this.data.identity == 'mm'){
      // 泥场经理
      this.data.navList = [
        { title: '泥场调度' },
        { title: '泥场设备及装卸点调度' },
        { title: '泥场信息提供' },
      ]
    }else if(this.data.identity == 'ms'){
      // 泥场员工
      this.data.navList = [
        { title: '扫码验票' },
        { title: '查看我的验票记录' },
      ]
    }else if(this.data.identity == 'mt'){
      // 泥场收纳
      this.data.navList = [
        { title: '出售泥票' },
        { title: '查看我的出售记录' },
      ]
      // 放行员
      // this.data.navList = [
      //   { title: '放行核验' },
      // ]
    
    // 车队结构
    }else if(this.data.identity == 'tb'){
      // 运输队老板
      this.data.navList = [
        { title: '搜索泥票' },
        { title: '查看我购买的泥票' },
        { title: '查看我发行的泥票' },
      ]
      // this.data.navList = [
      //   { title: '驾驶员上岗调度' },
      //   { title: '上岗调度' },
      //   { title: '远程/云端泥票授权' },
      // ]
    }else if(this.data.identity == 'tm'){
      // 运输队经理
      this.data.navList = [
        { title: '泥场预约' },
        { title: '泥车驾驶' },
        { title: '泥票展示' },
      ]
    }else if(this.data.identity == 'td'){
      // 运输队司机
      this.data.navList = [
        { title: '查看老板发行的泥票' },
        { title: '查看我购买的泥票' },
      ]
    }else if(this.data.identity == 'tt'){
      // 运输队出纳
      this.data.navList = [
        { title: '扫码出售' },
        { title: '查看出售记录' },
      ]
    }
    
    // 代理人
      // 代理人
      // this.data.navList = [
      //   { title: '身份信息填充' },
      //   { title: '泥票再发行' },
      //   { title: '出纳' },
      // ]
      // 出纳
      // this.data.navList = [
      //   { title: '泥票销售' },
      //   { title: '定价收取' },
      // ]

      // 运输车队
      // this.data.navList = [
      //   { title: '出售泥票' },
      //   { title: '泥票再发行' },
      //   { title: '查看购买泥票' }
      // ]
      // // 司机
      // this.data.navList = [
      //   { title: '验证泥头票放行' },
      //   { title: '放行员放行' },
      //   { title: '查看购买泥票' }
      // ]
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
    if(this.data.identity == 'mb' ){
      if(index == 0){
        // 注册泥场
        wx.showActionSheet({
          itemList: ["泥头场","泥尾场"],
          success: (res)=>{
            wx.navigateTo({
              url: '/pages/mudRegister/index?type=mud&is_mud='+res.tapIndex
            })
          }
        })
      }else if(index == 1){
        // 查看我的泥场列表
        wx.navigateTo({
          url: '/pages/mudList/index'
        })
      }else if(index == 2){
        // 发泥票
        wx.showActionSheet({
          itemList: ["泥头票","泥尾票"],
          success: (res)=>{
            wx.navigateTo({
              url: '/pages/issuance/index?type='+res.tapIndex
            })
          }
        })
      }else if(index == 3){
        // 查看我的泥票列表
        wx.navigateTo({
          url: '/pages/mudTicket/index'
        })
      }else if(index == 4){
        // 成员管理
        wx.navigateTo({
          url: '/pages/myAgent/index'
        })
      }
    }else if(this.data.identity == 'mg'){
      // 泥场总经理
    }else if(this.data.identity == 'mm'){
      // 泥场经理
    }else if(this.data.identity == 'mt'){
      // 泥场出纳
      if(index == 0){
        // 出售泥票
        var that = this;
        wx.scanCode({
          onlyFromCamera: true,
          success(res) {
            console.log('出售泥票扫码返回的参数: '+res.result);
            console.log('出售泥票截取字符串后：'+res.result.replace("https://p.3p3.top?data=",""))
            that.setData({
              dataStr: res.result.replace("https://p.3p3.top?data=","")
            })
            if(that.data.dataStr != ''){
              console.log('出售泥票请求的参数：'+that.data.dataStr);
              add_mud_ticket_sell({
                data: that.data.dataStr//要购买的促销劵二维码
              }).then(resg=>{
                if(resg.code == 200){
                  that.setData({
                    dataStr: ''
                  })
                  wx.showModal({
                    title: "提示",
                    content: "出售成功！",
                    showCancel: false
                  })
                }
              })
            }
          }
        })
      }else if(index == 1){
        // 查看我的出售记录
        wx.navigateTo({
          url: '/pages/records/index?type=mud'
        })
      }
    }else if(this.data.identity == 'ms'){
      // 泥场员工
      if(index == 0){
        // 扫码验票
        var that = this;
        wx.scanCode({
          onlyFromCamera: true,
          success(res) {
            console.log('扫码返回的参数: '+res.result);
            console.log('截取字符串后：'+res.result.replace("https://p.3p3.top?data=",""))
            that.setData({
              dataStr: res.result.replace("https://p.3p3.top?data=","")
            })
            if(that.data.dataStr != ''){
              console.log('请求的参数：'+that.data.dataStr);
              add_mud_ticket_sell({
                data: that.data.dataStr//要购买的促销劵二维码
              }).then(resg=>{
                if(resg.code == 200){
                  that.setData({
                    dataStr: ''
                  })
                  wx.showModal({
                    title: "提示",
                    content: "出售成功！",
                    showCancel: false
                  })
                }
              })
            }
          }
        })
      }else if(index == 1){
        // 查看我的验票记录
      }
    }else if(this.data.identity == 'tb'){
      // 运输队老板
      if(index == 0){
        // 搜索泥票
        wx.navigateTo({
          url: '/pages/searchMud/index'
        })
      }else if(index == 1){
        // 查看我购买的泥票
        wx.showActionSheet({
          itemList: ["泥头票","泥尾票"],
          success: (res)=>{
            wx.navigateTo({
              url: '/pages/mudTicket/index?type=buy&index='+res.tapIndex
            })
          }
        })
      }else if(index == 2){
        // 查看我发行的泥票
        wx.showActionSheet({
          itemList: ["泥头票","泥尾票"],
          success: (res)=>{
            wx.navigateTo({
              url: '/pages/mudTicket/index?type=again&index='+res.tapIndex
            })
          }
        })
      }
    }else if(this.data.identity == 'tm'){
      // 运输队经理
    }else if(this.data.identity == 'tt'){
      // 运输队出纳
      if(index == 0){
        // 扫码出售
        var that = this;
        wx.scanCode({
          onlyFromCamera: true,
          success(res) {
            console.log('扫码返回的参数: '+res.result);
            console.log('截取字符串后：'+res.result.replace("https://p.3p3.top?data=",""))
            that.setData({
              dataStr: res.result.replace("https://p.3p3.top?data=","")
            })
            if(that.data.dataStr != ''){
              console.log('请求的参数：'+that.data.dataStr);
              driver_buy_ticket({
                data: that.data.dataStr//要购买的促销劵二维码
              }).then(resg=>{
                if(resg.code == 200){
                  that.setData({
                    dataStr: ''
                  })
                  wx.showModal({
                    title: "提示",
                    content: "出售成功！",
                    showCancel: false
                  })
                }
              })
            }
          }
        })
      }else if(index == 1){
        // 查看出售记录
        wx.navigateTo({
          url: '/pages/records/index?type=truck'
        })
      }
    }else if(this.data.identity == 'td'){
      // 运输队司机
      if(index == 0){
        // 查看老板发行的泥票
        wx.navigateTo({
          url: '/pages/mudTicket/index'
        })
      }else if(index == 1){
        // 查看我购买的泥票
        wx.showActionSheet({
          itemList: ["泥头票","泥尾票"],
          success: (res)=>{
            wx.navigateTo({
              url: '/pages/mudTicket/index?type=driver_buy&index='+res.tapIndex
            })
          }
        })
      }
    }else{
      if(index == 0){
        // 验证
        var that = this;
        wx.scanCode({
          onlyFromCamera: true,
          success(res) {
            console.log('扫码返回的参数: '+res.result);
            console.log('截取字符串后：'+res.result.replace("https://p.3p3.top?data=",""))
            that.setData({
              dataStr: res.result.replace("https://p.3p3.top?data=","")
            })
            if(that.data.dataStr != ''){
              console.log('请求的参数：'+that.data.dataStr);
              check_ticket_head_code({
                data: that.data.dataStr//要购买的促销劵二维码
              }).then(resg=>{
                if(resg.code == 200){
                  that.setData({
                    dataStr: ''
                  })
                  wx.showModal({
                    title: "提示",
                    content: "验证成功！",
                    showCancel: false
                  })
                }
              })
            }
          }
        })
      }else if(index == 1){

      }else{
        wx.showActionSheet({
          itemList: ["泥头票","泥尾票"],
          success: (res)=>{
            wx.navigateTo({
              url: '/pages/mudTicket/index?type=driver_buy&index='+res.tapIndex
            })
          }
        })
      }
    }
  },
  selectChange(e){
    change_user_type({
      type: this.data.identityList[e.detail.value].name
    }).then((res)=>{
      if(res.code == 200){
        wx.setStorageSync('token', res.data.token)
        get_user_info().then((user_res)=>{
          if(user_res.code == 200){
            wx.setStorageSync('userInfo', user_res.data);
            this.setData({
              identity: this.data.identityList[e.detail.value].name
            })
            this.getListInit();
          }
        })
      }
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

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