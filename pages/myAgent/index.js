// pages/myAgent/index.js
import {
  query_company_member,
  add_company_member,
  member_manage
} from '../../api/api.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tab_list: ["申请人员","在职人员"],
    activeIndex: 0,
    list: [],
    page: 1,
    totalPage: 1
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getMemberList();
  },
  getMemberList(){
    let data = {
      current: this.data.page,
      size: 20,
      status: this.data.activeIndex
    }
    query_company_member(data).then((res)=>{
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
  clickNav(e){
    this.setData({
      activeIndex: e.currentTarget.dataset.index,
      list: [],
      page: 1
    })
    this.getMemberList();
  },
  clickAgree(e){
    memberManage({
      memberId: e.currentTarget.dataset.id,
      status: '1',
      type: 'agent'
    }).then((res)=>{
      if(res.code == 200){
        wx.showToast({
          title: '已通过',
          icon: 'none'
        })
        let index = e.currentTarget.dataset.index;
        this.data.list[index].status = '通过';
        this.setData({
          list: this.data.list
        })
        // this.getApply();
      }
    })
  },
  clickReject(e){
    memberManage({
      memberId: e.currentTarget.dataset.id,
      status: '2',
      type: 'agent'
    }).then((res)=>{
      if(res.code == 200){
        wx.showToast({
          title: '已拒绝',
          icon: 'none'
        })
        let index = e.currentTarget.dataset.index;
        this.data.list[index].status = '未通过';
        this.setData({
          list: this.data.list
        })
        // this.getApply();
      }
    })
  },
  clickDelete(e){
    let that = this;
    let index = e.currentTarget.dataset.index;
    wx.showModal({
      title: '提示',
      content: '确认删除该成员?',
      success (res){
        if(res.confirm){
          memberManage({
            memberId: e.currentTarget.dataset.id,
            status: '3',
            type: 'agent'
          }).then((res)=>{
            if(res.code == 200){
              wx.showToast({
                title: '已删除',
                icon: 'none'
              })
              that.data.list.splice(index,1);
              that.setData({
                list: that.data.list
              })
              // setTimeout(()=>{
              //   that.getAgent();
              // },1500)
            }
          })
        }
      }
    })
  },
  getApply(){
    getBrowseCert({
      context: '代理人申请列表'
    }).then(res=>{
      // 查看申请人列表
      if(res.code == 200){
        applicationMemberList({
          data: res.data,
          pageNum: this.data.page,
          pageSize: 20,
          type: 'agent'
        }).then(ress=>{
          if(ress.code == 200){
            this.setData({
              list: this.data.list.concat(ress.data.records)
            })
          }
        })
      }
    })
  },
  getAgent(){
    queryMemberList({
      pageNum: this.data.page,
      pageSize: 20,
      type: 'agent'
    }).then(res=>{
      if(res.code == 200){
        this.setData({
          list: this.data.list.concat(res.data.records),
        })
      }
    })
  },
  loadMore(e){
    if(this.data.activeIndex == 0){
      if(this.data.page<this.data.totalPage){
        this.data.page++;
        this.setData({
          page: this.data.page
        })
        this.getApply();
      }
    }else{
      if(this.data.page<this.data.totalPage){
        this.data.page++;
        this.setData({
          page: this.data.page
        })
        this.getAgent();
      }
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