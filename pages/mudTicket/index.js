// pages/mudTicket/index.js
import {
  query_mud_ticket,
  agent_mud_ticket,
  query_mud_ticket_agent,
  query_mud_ticket_sell_to_agent,
  query_ticket_by_driver,
  search_mud_yard
} from '../../api/api.js'
import publicFun from '../../utils/public.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    scrollList: [],
    type: '',//again: 再发行  buy: 已购
    status: '',
    is_show: false,//是否显示再发行弹框
    count: '',
    price: '',
    orderId: '',
    ticketId: '',
    yard_id: '',
    page: 1
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let status = 0;
    if(options.index){
      if(options.index == 0){
        status = 'head';
      }else{
        status = 'tail';
      }
      this.setData({
        status: status
      })
    }
    // 搜索泥场带过来的id
    if(options.id){
      this.setData({
        yard_id: options.id
      })
    }
    if(options.type){
      this.setData({
        type: options.type
      })
    }else{
      this.getMudList();
    }

    if(options.type == 'again'){
      this.getAgainMudList();
    }else if(options.type == 'buy'){
      this.getBuyMudList();
    }else if(options.type == 'driver_buy'){
      this.getDriverBuyMudList();
    }else if(options.type == 'search'){
      this.getSearchMudList();
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
  // 获取我发行的泥票列表
  getMudList(){
    query_mud_ticket({
      current: this.data.page,
      size: 5
    }).then((res)=>{
      if(res.code == 200){
        if(this.data.page == 1){
          this.setData({
            scrollList: res.data.records
          })
        }else{
          this.setData({
            scrollList: this.data.scrollList.concat(res.data.records)
          })
        }
      }
    })
  },
  // 获取再发行泥票列表
  getAgainMudList(){
    query_mud_ticket_agent({
      current: this.data.page,
      size: 5,
      type: this.data.status
    }).then((res)=>{
      if(res.code  == 200){
        if(this.data.page == 1){
          this.setData({
            scrollList: res.data.records
          })
        }else{
          this.setData({
            scrollList: this.data.scrollList.concat(res.data.records)
          })
        }
      }
    })
  },
  // 获取购买的泥票列表
  getBuyMudList(){
    query_mud_ticket_sell_to_agent({
      current: this.data.page,
      size: 5,
      type: this.data.status
    }).then((res)=>{
      if(res.code  == 200){
        if(this.data.page == 1){
          this.setData({
            scrollList: res.data.records
          })
        }else{
          this.setData({
            scrollList: this.data.scrollList.concat(res.data.records)
          })
        }
      }
    })
  },
  getDriverBuyMudList(){
    query_ticket_by_driver({
      current: this.data.page,
      size: 5,
      type: this.data.status
    }).then((res)=>{
      if(res.code  == 200){
        if(this.data.page == 1){
          this.setData({
            scrollList: res.data.records
          })
        }else{
          this.setData({
            scrollList: this.data.scrollList.concat(res.data.records)
          })
        }
      }
    })
  },
  getSearchMudList(){
    search_mud_yard({
      current: this.data.page,
      size: 5,
      yardId: this.data.yard_id
    }).then((res)=>{
      if(res.code == 200){
        if(this.data.page == 1){
          this.setData({
            scrollList: res.data.records
          })
        }else{
          this.setData({
            scrollList: this.data.scrollList.concat(res.data.records)
          })
        }
      }
    })
  },
  toTicketDetail(e){
    let id = e.currentTarget.dataset.id;
    let aid = e.currentTarget.dataset.aid;
    let idx = e.currentTarget.dataset.index;
    // 详情
    if(this.data.type == ""){
      wx.navigateTo({
        url: '/pages/mudTicketDetail/index?type=transfer&id=' + id
      })
    }else if(this.data.type == 'again'){
      wx.navigateTo({
        url: '/pages/mudTicketDetail/index?type=driver&id=' + aid
      })
    }else if(this.data.type == 'buy'){
      this.setData({
        is_show: true,
        orderId: this.data.scrollList[idx].orderId,
        ticketId: this.data.scrollList[idx].ticketId
      })
    }else if(this.data.type == 'driver_buy'){
      wx.navigateTo({
        url: '/pages/mudTicketDetail/index?type=transfer&id=' + id
      })
    }else if(this.data.type == 'search'){
      wx.navigateTo({
        url: '/pages/mudTicketDetail/index?type=transfer&id=' + id
      })
    }
    
    // 编辑
    // wx.navigateTo({
    //   url: '/pages/issuance/index?id=' + id
    // })
  },
  // 点击再发行按钮
  toAgainBtn(){
    agent_mud_ticket({
      count: this.data.count,
      orderId: 1,//this.data.orderId
      price: this.data.price,
      ticketId: this.data.ticketId
    }).then((res)=>{
      if(res.code == 200){
        this.changeShow();
        publicFun.getToast('发行成功');
      }
    })
  },
  getListMore(){
    this.data.page++;
    this.setData({
      page: this.data.page
    })
    if(this.data.type == ""){
      this.getMudList();
    }else if(this.data.type == 'again'){
      this.getAgainMudList();
    }else if(this.data.type == 'buy'){
      this.getBuyMudList();
    }else if(this.data.type == 'driver_buy'){
      this.getDriverBuyMudList();
    }else if(this.data.type == 'search'){
      this.getSearchMudList();
    }
  },
  changeCount(e){
    this.setData({
      count: e.detail.value
    })
  },
  changePrice(e){
    this.setData({
      price: e.detail.value
    })
  },
  changeShow(){
    this.setData({
      price: '',
      count: '',
      is_show: false
    })
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