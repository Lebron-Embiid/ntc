// pages/merchant/index.js
import {
  
} from '../../api/api.js'
import { base64src } from '../../utils/base64src.js'
import publicFun from '../../utils/public.js'
const uploadUrl = 'http://192.168.31.115:9091'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    business_id: '',
    name: '',
    person_name: '',
    card: '',
    person_code: '',
    company_name: '',
    head_pic1: '',
    head_pic2: '',
    head_pic3: '',
    head_pic4: '',
    head_pic5: '',
    head_pic6: '',
    head_pic7: '',
    transport_pic1: '',
    transport_pic2: '',
    transport_pic3: '',
    end_pic1: '',
    end_pic2: '',
    end_pic3: '',
    end_pic4: '',
    end_pic5: '',
    end_pic6: '',
    end_pic7: '',
    end_pic8: '',
    end_pic9: '',
    end_pic10: '',
    end_pic11: '',
    is_head_pic1: 0,
    is_head_pic2: 0,
    is_head_pic3: 0,
    is_head_pic4: 0,
    is_head_pic5: 0,
    is_head_pic6: 0,
    is_head_pic7: 0,
    is_transport_pic1: 0,
    is_transport_pic2: 0,
    is_transport_pic3: 0,
    is_end_pic1: 0,
    is_end_pic2: 0,
    is_end_pic3: 0,
    is_end_pic4: 0,
    is_end_pic5: 0,
    is_end_pic6: 0,
    is_end_pic7: 0,
    is_end_pic8: 0,
    is_end_pic9: 0,
    is_end_pic10: 0,
    is_end_pic11: 0,
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
  getBusinessInfo(){
    queryBusinessInfo().then((res)=>{
      if(res.code == 200){
        this.setData({
          business_id: res.data.businessId,
          name: res.data.bossName,
          person_name: res.data.legalPerson,
          card: res.data.idnumber,
          person_code: res.data.uscc,
          company_name: res.data.businessName,
          is_pass: 0
        })
      }
    })
  },
  getName(e){
    this.setData({
      name: e.detail.value
    })
  },
  getPersonName(e){
    this.setData({
      person_name: e.detail.value
    })
  },
  getCard(e){
    this.setData({
      card: e.detail.value
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
  chooseHeadPic1(){
    this.choosePic(this.data.head_pic1,this.data.is_head_pic1);
  },
  chooseHeadPic2(){
    this.choosePic(this.data.head_pic2,this.data.is_head_pic2);
  },
  chooseHeadPic3(){
    this.choosePic(this.data.head_pic3,this.data.is_head_pic3);
  },
  chooseHeadPic4(){
    this.choosePic(this.data.head_pic4,this.data.is_head_pic4);
  },
  chooseHeadPic5(){
    this.choosePic(this.data.head_pic5,this.data.is_head_pic5);
  },
  chooseHeadPic6(){
    this.choosePic(this.data.head_pic6,this.data.is_head_pic6);
  },
  chooseHeadPic7(){
    this.choosePic(this.data.head_pic7,this.data.is_head_pic7);
  },
  chooseTransportPic1(){
    this.choosePic(this.data.transport_pic1,this.data.is_transport_pic1);
  },
  chooseTransportPic2(){
    this.choosePic(this.data.transport_pic2,this.data.is_transport_pic2);
  },
  chooseTransportPic3(){
    this.choosePic(this.data.transport_pic3,this.data.is_transport_pic3);
  },
  chooseEndPic1(){
    this.choosePic(this.data.end_pic1,this.data.is_end_pic1);
  },
  chooseEndPic2(){
    this.choosePic(this.data.end_pic2,this.data.is_end_pic2);
  },
  chooseEndPic3(){
    this.choosePic(this.data.end_pic3,this.data.is_end_pic3);
  },
  chooseEndPic4(){
    this.choosePic(this.data.end_pic4,this.data.is_end_pic4);
  },
  chooseEndPic5(){
    this.choosePic(this.data.end_pic5,this.data.is_end_pic5);
  },
  chooseEndPic6(){
    this.choosePic(this.data.end_pic6,this.data.is_end_pic6);
  },
  chooseEndPic7(){
    this.choosePic(this.data.end_pic7,this.data.is_end_pic7);
  },
  chooseEndPic8(){
    this.choosePic(this.data.end_pic8,this.data.is_end_pic8);
  },
  chooseEndPic9(){
    this.choosePic(this.data.end_pic9,this.data.is_end_pic9);
  },
  chooseEndPic10(){
    this.choosePic(this.data.end_pic10,this.data.is_end_pic10);
  },
  chooseEndPic11(){
    this.choosePic(this.data.end_pic11,this.data.is_end_pic11);
  },
  
  choosePic(agrms1,agrms2){
    var that = this;
    publicFun.getImage(1,false,['album']).then((res)=>{
      // uploadFile({
      //   file: res[0]
      // }).then((imgRes)=>{
      //   console.log(imgRes)
      // })
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
          // console.log('----ios1----'+JSON.stringify(imgRes))
          // console.log('----ios2----'+JSON.stringify(imgRes.data))
          // console.log('----ios3----'+JSON.parse(imgRes.data).data)
          if(JSON.parse(imgRes.data).code == 200){
            let img_pic = JSON.parse(imgRes.data).data;
            that.setData({
              agrms1: img_pic,
              agrms2: 1
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
    if(this.data.back_img==''){
      wx.showToast({
        title: '请上传企业图片',
        icon: 'none'
      })
      return;
    }
    console.log(this.data.business_id)
    addMerchantInfo({
      businessId: this.data.business_id,
      businessName: this.data.company_name,//企业名称
      legalPerson: this.data.person_name,//法人名称
      uscc: this.data.person_code,//统一社会信用代码
      licenseImg: this.data.license,//执照
      businessImg: this.data.back_img,//企业图片
      bossName: this.data.name,//老板名称
      idnumber: this.data.card,//身份证
      idnumberImg: this.data.card_img,//身份证图片
      authorizeImg: this.data.book_img//授权图片
    }).then(res=>{
      if(res.code == 200){
        if(this.data.business_id == ''){
          this.setData({
            name: '',
            person_name: '',
            card: '',
            person_code: '',
            company_name: '',
            is_pass: 1
          })
        }
        wx.showToast({
          title: '提交成功',
          icon: 'none'
        })
      }
    })
  }
})