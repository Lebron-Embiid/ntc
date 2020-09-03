// pages/mudList/index.js
import {
  query_mud_yard_head,
  query_mud_yard_tail
} from '../../api/api.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tab_list: ["泥头场","泥尾场"],
    activeIndex: 0,
    list: [],
    page: 1,
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
    this.getMudList();
  },
  getMudList(){
    if(this.data.activeIndex == 0){
      query_mud_yard_head({
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
    }else{
      query_mud_yard_tail({
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
    }
  },
  clickNav(e){
    this.setData({
      activeIndex: e.currentTarget.dataset.index,
      list: [],
      page: 1
    })
    this.getMudList();
  },
  toDetail(e){
    let id = e.currentTarget.dataset.id;
    wx.navigateTo({
      url: '/pages/mudRegister/index?type=mud&id='+id+'&index='+this.data.activeIndex
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