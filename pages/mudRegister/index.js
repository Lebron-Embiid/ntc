// pages/merchant/index.js
import {
  
} from '../../api/api.js'
import { base64src } from '../../utils/base64src.js'
import publicFun from '../../utils/public.js'
const uploadUrl = 'http://192.168.31.115:9091'
// const uploadUrl = 'https://n.3p3.top'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    mud_address: '',
    person_code: '',
    company_name: '',
    date: '',
    date_txt: '请选择创建时间',
    // 泥场
    mud_pic1: '',
    mud_pic2: '',
    mud_pic3: '',
    mud_pic4: '',
    mud_pic5: '',
    is_mud_pic1: 0,
    is_mud_pic2: 0,
    is_mud_pic3: 0,
    is_mud_pic4: 0,
    is_mud_pic5: 0,

    // 运输车队
    transport_pic1: '',
    transport_pic2: '',
    transport_pic3: '',
    transport_pic4: '',
    is_transport_pic1: 0,
    is_transport_pic2: 0,
    is_transport_pic3: 0,
    is_transport_pic4: 0,
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

  },
  getMudAddress(e){
    this.setData({
      mud_address: e.detail.value
    })
  },
  getPersonCode(e){
    this.setData({
      person_code: e.detail.value
    })
  },
  getCompanyName(e){
    this.setData({
      company_name: e.detail.value
    })
  },
  bindDateChange: function(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      date: e.detail.value,
      date_txt: e.detail.value
    })
  },
  chooseMudPic1(){
    this.choosePic('mud_pic1','is_mud_pic1');
  },
  chooseMudPic2(){
    this.choosePic('mud_pic2','is_mud_pic2');
  },
  chooseMudPic3(){
    this.choosePic('mud_pic3','is_mud_pic3');
  },
  chooseMudPic4(){
    this.choosePic('mud_pic4','is_mud_pic4');
  },
  chooseMudPic5(){
    this.choosePic('mud_pic5','is_mud_pic5');
  },
  chooseTransportPic1(){
    this.choosePic('transport_pic1','is_transport_pic1');
  },
  chooseTransportPic2(){
    this.choosePic('transport_pic2','is_transport_pic2');
  },
  chooseTransportPic3(){
    this.choosePic('transport_pic3','is_transport_pic3');
  },
  chooseTransportPic4(){
    this.choosePic('transport_pic4','is_transport_pic4');
  },
  choosePic(agrms1,agrms2){
    var that = this;
    publicFun.getImage(1,false,['album']).then((res)=>{
      wx.uploadFile({
        url: uploadUrl+'/applet/file/upload', //仅为示例，非真实的接口地址
        filePath: res[0],
        name: 'file',
        header: {
          'Authentication': wx.getStorageSync('token')
        },
        formData:{
          type: ''
        },
        success (imgRes){
          if(JSON.parse(imgRes.data).code == 200){
            let img_pic = JSON.parse(imgRes.data).data;
            that.setData({
              [agrms1]: img_pic,
              [agrms2]: 1
            })
          }else{
            wx.showModal({
              title: "提示",
              content: JSON.parse(imgRes.data).msg || JSON.parse(imgRes.data).message,
              showCancel: false
            })
          }
        }
      })
    })
  },
  submitForm(e){
    if(this.data.company_name==''){
      wx.showToast({
        title: '请输入企业名称',
        icon: 'none'
      })
      return;
    }
    save_company_info({

    }).then(res=>{
      if(res.code == 200){
        this.setData({

        })
        wx.showToast({
          title: '提交成功',
          icon: 'none'
        })
      }
    })
  }
})