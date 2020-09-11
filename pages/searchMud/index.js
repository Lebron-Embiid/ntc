// pages/searchMud/index.js
import {
  query_all_mud_yard_head,
  query_all_mud_yard_tail
} from '../../api/api.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tab_list: ["泥头场","泥尾场"],
    list: [],
    activeIndex: 0,
    page: 1
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getAllHeadMud();
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },
  clickNav(e){
    this.setData({
      activeIndex: e.currentTarget.dataset.index,
      page: 1
    })
    if(this.data.activeIndex == 0){
      this.getAllHeadMud();
    }else{
      this.getAllTailMud();
    }
  },
  getAllHeadMud(){
    query_all_mud_yard_head({
      current: this.data.page,
      size: 20
    }).then((res)=>{
      if(res.code == 200){
        if(this.data.page == 1){
          this.setData({
            list: res.data.records
          })
        }else{
          this.setData({
            list: this.data.list.concat(res.data.records)
          })
        }
      }
    })
  },
  getAllTailMud(){
    query_all_mud_yard_tail({
      current: this.data.page,
      size: 20
    }).then((res)=>{
      if(res.code == 200){
        if(this.data.page == 1){
          this.setData({
            list: res.data.records
          })
        }else{
          this.setData({
            list: this.data.list.concat(res.data.records)
          })
        }
      }
    })
  },
  toSearch(e){
    let id = e.currentTarget.dataset.id;
    wx.navigateTo({
      url: '/pages/mudTicket/index?type=search&id='+id
    })
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
    this.data.page++;
    this.setData({
      page: this.data.page
    })
    if(this.data.activeIndex == 0){
      this.getAllHeadMud();
    }else{
      this.getAllTailMud();
    }
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})