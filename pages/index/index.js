//index.js
//获取应用实例
const app = getApp()
import {
  getSessinKey,
  get_user_info,
  login
} from '../../api/api.js'
Page({
  data: {
    avatar: '/assets/avatar.svg',
    name: '',
    userInfo: {},
    is_auth: false,
    iv: '',
    encryptedData: ''
  },
  onLoad: function () {

  },
  getUserLogin(e){
    var that = this;
    wx.checkSession({
      success () {
        //session_key 未过期，并且在本生命周期一直有效
      },
      fail () {
        // session_key 已经失效，需要重新执行登录流程
        wx.getSetting({
          success (res) {
            console.log(res.authSetting['scope.userInfo'])
            if(res.authSetting['scope.userInfo'] == true){
              wx.login({
                success: (resg) => {
                  if (resg.code) {
                    console.log(resg);
                    getSessinKey(resg.code).then(skres => {
                      if (skres.code == 200) {
                        console.log(skres);
                        wx.getUserInfo({
                          success: (res) => {
                            console.log(res)
                            var userInfo = res.userInfo
                            var nickName = userInfo.nickName
                            var avatarUrl = userInfo.avatarUrl
                            //登录调用
                            login({
                              encryptedData: that.data.encryptedData,
                              headPortraitLink: avatarUrl,
                              iv: that.data.iv,
                              nickname: nickName,
                              sessionKey: skres.data.sessionKey,
                              unionId: skres.data.openId
                            }).then(logRes => {
                              if(logRes.code == 200){
                                wx.setStorage({
                                  key: "token",
                                  data: logRes.data.token
                                })
                                get_user_info().then((user_res)=>{
                                  if(user_res.code == 200){
                                    wx.setStorageSync('userInfo', logRes.data);
                                    wx.switchTab({
                                      url: '/pages/market/index',
                                    })
                                  }
                                })
                              }
                            }).catch(err => {
                              wx.showToast({
                                title: err
                              })
                              console.log(err)
                            })
                          }
                        })
                      }
                    })
                  } else {
                    console.log('登录失败！' + res.errMsg)
                  }
                }
              })
            }
          }
        })
      }
    })
  },
  getPhoneNumber (e) {
    this.setData({
      iv: e.detail.iv,
      encryptedData:e.detail.encryptedData,
      is_auth: true
    })
  }
})
