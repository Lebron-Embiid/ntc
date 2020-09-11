// pages/records/index.js
import {
  query_mud_ticket_sell,
  query_truck_mud_ticket_sell
} from '../../api/api.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: [],
    page: 1
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if(options.type == 'mud'){
      this.getMudSellRecords();
    }else{
      this.getTruckSellRecords();
    }  
  },
  getMudSellRecords(){
    query_mud_ticket_sell({
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
  getTruckSellRecords(){
    query_truck_mud_ticket_sell({
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
    this.data.page++;
    this.setData({
      page: this.data.page
    })
    this.getMudSellRecords();
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})