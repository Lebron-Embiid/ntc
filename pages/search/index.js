// pages/search/index.js
import {
  search_company,
  add_company_member
} from '../../api/api.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    searchList: [],
    page: 1
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getSearchList();
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
  getSearchList(){
    let data = {
      current: this.data.page,
      size: 20
    }
    search_company(data).then((res)=>{
      if(res.code == 200){
        if(this.data.page == 1){
          this.setData({
            searchList: res.data.records
          })
        }else{
          this.setData({
            searchList: this.data.searchList.concat(res.data.records)
          })
        }
      }
    })
  },
  clickApply(e){
    let com_id = e.currentTarget.dataset.id;
    let com_idx = e.currentTarget.dataset.index;
    console.log(com_idx);
    var that = this;
    wx.showActionSheet({
      itemList: ['经理', '员工', '驾驶员'],
      success (res) {
        console.log(res.tapIndex);
        var type = 0;
        if(res.tapIndex == 0){
          // 申请经理
          type = 2;
        }else if(res.tapIndex == 1){
          // 申请员工
          type = 3;
        }else{
          // 申请驾驶员
          type = 4;
        }
        add_company_member({
          companyId: com_id,
          type: type
        }).then((res)=>{
          if(res.code == 200){
            that.data.searchList[com_idx].status = 0;
            that.setData({
              searchList: that.data.searchList
            })
            wx.showToast({
              title: res.msg,
              icon: 'none'
            })
          }
        })
      },
      fail (res) {
        console.log(res.errMsg)
      }
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
    this.data.page++;
    this.setData({
      page: this.data.page
    })
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})