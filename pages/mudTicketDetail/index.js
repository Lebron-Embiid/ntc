// pages/mudTicketDetail/index.js
import {
  agent_show_code,
  driver_show_code
} from '../../api/api.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    ticket_img: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if(options.type == 'transfer'){
      agent_show_code({
        ticketId: options.id
      }).then((res)=>{
        if(res.code == 200){
          this.setData({
            ticket_img: res.data
          })
        }
      })
    }else{
      driver_show_code({
        agentId: options.id
      }).then((res)=>{
        if(res.code == 200){
          this.setData({
            ticket_img: res.data
          })
        }
      })
    }
  },
  downloadImg(){
    var that = this;
    console.log('下载的图片'+that.data.ticket_img)
    wx.showModal({
      title: '提示',
      content: '确定下载促销券图片？',
      success: function(res) {
        if(res.confirm){
          wx.downloadFile({
            url: that.data.ticket_img,
            success: (ress) => {
              if (ress.statusCode === 200) {
                console.log(ress.tempFilePath);
                wx.saveImageToPhotosAlbum({
                  filePath: ress.tempFilePath,
                  success: function () { 
                    // publicFun.getToast('下载成功');
                    wx.showModal({
                      title: "提示",
                      content: "下载成功",
                      showCancel: false
                    })
                  }
                })
              }
            },
            fail() {
              wx.openSetting({
                success(settingdata) {
                  if (settingdata.authSetting['scope.writePhotosAlbum']) {
                    console.log('获取权限成功，给出再次点击图片保存到相册的提示。')
                  } else {
                    console.log('获取权限失败，给出不给权限就无法正常使用的提示')
                  }
                }
              })
              publicFun.getToast('下载失败');
            }
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

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})