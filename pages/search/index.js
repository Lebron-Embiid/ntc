// pages/search/index.js
import {
  query_user_type,
  search_company,
  add_company_member,
  query_company_manage_list
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
    query_user_type().then((res)=>{

    })
    // query_company_manage_list({
    //   pageNum: 1,
    //   pageSize: 10
    // }).then((res)=>{

    // })
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
    var lists = [];
    console.log(this.data.searchList[com_idx])
    if(this.data.searchList[com_idx].type == 'mud'){
      lists = ['泥场总经理', '泥场经理', '泥场员工', '泥场出纳'];
    }else{
      lists = ['运输队经理', '运输队司机', '运输队出纳'];
    }
    wx.showActionSheet({
      itemList: lists,
      success (res) {
        var type = '';
        if(that.data.searchList[com_idx].type == 'mud'){
          if(res.tapIndex == 0){
            // 申请泥场总经理
            type = 'mg';
          }else if(res.tapIndex == 1){
            // 申请泥场经理
            type = 'mm';
          }else if(res.tapIndex == 2){
            // 申请泥场员工
            type = 'ms';
          }else{
            // 申请泥场出纳
            type = 'mt';
          }
        }else{
          if(res.tapIndex == 0){
            // 申请运输队经理
            type = 'tm';
          }else if(res.tapIndex == 1){
            // 申请运输队司机
            type = 'td';
          }else{
            // 申请运输队出纳
            type = 'tt';
          }
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