// pages/merchant/index.js
import {
  save_company_info,
  get_company_info
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
    type: 'mud',
    person_name: '',
    person_code: '',
    company_name: '',
    license: '',
    is_license: 0,
    is_pass: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if(options.type){
      wx.setNavigationBarTitle({
        title: '修改资料'
      })
    }
    
    if(wx.getStorageSync('userInfo').companyId != null){
      // 获取公司信息
      get_company_info({
        companyId: 'CI2008282430001102'
      }).then((res)=>{
        if(res.code == 200){
          this.setData({
            company_name: res.data.companyName,
            person_name: res.data.legalPerson,
            person_code: res.data.uscc,
            uscc: res.data.licenseImg
          })
        }
      })
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

  },
  selectType(e){
    this.setData({
      type: e.detail.value
    })
  },
  getBusinessInfo(){
    queryBusinessInfo().then((res)=>{
      if(res.code == 200){
        this.setData({
          person_name: res.data.legalPerson,
          person_code: res.data.uscc,
          company_name: res.data.businessName,
          is_pass: 0
        })
      }
    })
  },
  getPersonName(e){
    this.setData({
      person_name: e.detail.value
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
  chooseLicense(){
    this.choosePic('license','is_license');
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
          console.log('----ios1----'+JSON.stringify(imgRes))
          // console.log('----ios2----'+JSON.stringify(imgRes.data))
          // console.log('----ios3----'+JSON.parse(imgRes.data).data)
          if(JSON.parse(imgRes.data).code == 200){
            let img_pic = JSON.parse(imgRes.data).data;
            console.log(img_pic,[agrms1]);
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
    var reg = /^[1-9]\d{5}(18|19|20|(3\d))\d{2}((0[1-9])|(1[0-2]))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/;
    // if(!reg.test(this.data.card)){
    //   wx.showToast({
    //     title: '请输入正确的身份证号码',
    //     icon: 'none'
    //   })
    //   return;
    // }
    if(this.data.company_name==''){
      wx.showToast({
        title: '请输入企业名称',
        icon: 'none'
      })
      return;
    }
    if(this.data.person_name==''){
      wx.showToast({
        title: '请输入法人名称',
        icon: 'none'
      })
      return;
    }
    if(this.data.person_code==''){
      wx.showToast({
        title: '请输入统一社会信用代码',
        icon: 'none'
      })
      return;
    }
    if(this.data.license==''){
      wx.showToast({
        title: '请上传执照',
        icon: 'none'
      })
      return;
    }
    save_company_info({
      companyName: this.data.company_name,//企业名称
      legalPerson: this.data.person_name,//法人名称
      uscc: this.data.person_code,//统一社会信用代码
      licenseImg: this.data.license,//执照
      type: this.data.type
    }).then(res=>{
      if(res.code == 200){
        this.setData({
          company_name: '',
          person_name: '',
          person_code: '',
          license: '',
          is_license: 0
          // is_pass: 1
        })
        wx.showToast({
          title: '提交成功',
          icon: 'none'
        })
      }
    })
  }
})