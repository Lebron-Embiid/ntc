// pages/merchant/index.js
import {
  save_mud_yard_head_info,
  save_mud_yard_tail_info,
  get_mud_yard_head_info,
  get_mud_yard_tail_info
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
    mud_name: '',
    mud_address: '',
    person_code: '',
    company_name: '',
    date: '',
    date_txt: '请选择创建时间',
    type: 'mud',//泥场：mud  运输车队：truck
    is_mud: 0,  //泥头场：0  泥尾场：1
    yard_id: '',//泥场id
    is_edit: false,//是否是修改
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
    this.setData({
      type: options.type,
      is_mud: options.is_mud
    })
    if(options.id){
      this.setData({
        is_edit: true,
        yard_id: options.id,
        is_mud: options.index
      })
      this.getSaveData();
    }
  },
  getSaveData(){
    // 获取泥场信息
    let data = {
      yardId: this.data.yard_id
    }
    if(this.data.is_mud == 0){
      get_mud_yard_head_info(data).then((res)=>{
        if(res.code == 200){
          this.setData({
            mud_name: res.data.yardName,
            mud_address: res.data.address,
            mud_pic2: res.data.permit1,//开工许可证
            mud_pic4: res.data.permit2,//运输路线报批
            mud_pic5: res.data.permit3,//管理人员报备
            mud_pic1: res.data.permit4,//中标通知书
            mud_pic3: res.data.permit5,//进场通知书
            is_mud_pic1: 1,
            is_mud_pic2: 1,
            is_mud_pic3: 1,
            is_mud_pic4: 1,
            is_mud_pic5: 1
          })
        }
      })
    }else{
      get_mud_yard_tail_info(data).then((res)=>{
        if(res.code == 200){
          this.setData({
            mud_name: res.data.yardName,
            mud_address: res.data.address,
            mud_pic2: res.data.permit1,//开工许可证
            mud_pic1: res.data.permit5,//中标通知书
            mud_pic3: res.data.permit6,//进场通知书
            transport_pic2: res.data.permit2,//进场土方报备
            transport_pic3: res.data.permit3,//进场驾驶证报备
            transport_pic4: res.data.permit4,//进场车辆行驶证报备
            is_mud_pic1: 1,
            is_mud_pic2: 1,
            is_mud_pic3: 1,
            is_transport_pic2: 1,
            is_transport_pic3: 1,
            is_transport_pic4: 1
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
  getMudName(e){
    this.setData({
      mud_name: e.detail.value
    })
  },
  getMudAddress(e){
    this.setData({
      mud_address: e.detail.value
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
  initData(){
    this.setData({
      mud_pic1: '',
      mud_pic2: '',
      mud_pic3: '',
      mud_pic4: '',
      mud_pic5: '',
      transport_pic2: '',
      transport_pic3: '',
      transport_pic4: '',
      is_mud_pic1: 0,
      is_mud_pic2: 0,
      is_mud_pic3: 0,
      is_mud_pic4: 0,
      is_mud_pic5: 0,
      is_transport_pic2: 0,
      is_transport_pic3: 0,
      is_transport_pic4: 0
    })
    wx.showToast({
      title: '提交成功',
      icon: 'none'
    })
  },
  submitRegister(status){
    if(this.data.type == 'mud'){
      // 泥场
      if(this.data.mud_name == ''){
        publicFun.getToast('请输入泥场名称');
        return;
      }
      if(this.data.mud_address == ''){
        publicFun.getToast('请输入泥场地址');
        return;
      }
      if(this.data.mud_pic1 == ''){
        publicFun.getToast('请上传中标通知书！');
        return;
      }
      if(this.data.mud_pic2 == ''){
        publicFun.getToast('请上传开工许可证！');
        return;
      }
      if(this.data.mud_pic3 == ''){
        publicFun.getToast('请上传进场通知书！');
        return;
      }
      if(this.data.is_mud == 0){
        if(this.data.mud_pic4 == ''){
          publicFun.getToast('请上传运输路线报批！');
          return;
        }
        if(this.data.mud_pic5 == ''){
          publicFun.getToast('请上传管理人员报备！');
          return;
        }
        // 泥头场注册
        let data = {
          yardName: this.data.mud_name,
          address: this.data.mud_address,
          permit1: this.data.mud_pic2,//开工许可证
          permit2: this.data.mud_pic4,//运输路线报批
          permit3: this.data.mud_pic5,//管理人员报备
          permit4: this.data.mud_pic1,//中标通知书
          permit5: this.data.mud_pic3,//进场通知书
          status: status
        }
        if(this.data.is_edit == true){
          data.yardId = this.data.yard_id
        }
        save_mud_yard_head_info(data).then(res=>{
          if(res.code == 200){
            this.initData();
          }
        })
      }else{
        if(this.data.transport_pic2 == ''){
          publicFun.getToast('请上传进场土方报备');
          return;
        }
        if(this.data.transport_pic3 == ''){
          publicFun.getToast('请上传进场驾驶证报备！');
          return;
        }
        if(this.data.transport_pic4 == ''){
          publicFun.getToast('请上传进场车辆行驶证报备！');
          return;
        }
        // 泥尾场注册
        let data = {
          yardName: this.data.mud_name,
          address: this.data.mud_address,
          permit1: this.data.mud_pic2,//开工许可证
          permit2: this.data.transport_pic2,//进场土方报备
          permit3: this.data.transport_pic3,//进场驾驶证报备
          permit4: this.data.transport_pic4,//进场车辆行驶证报备
          permit5: this.data.mud_pic1,//中标通知书
          permit6: this.data.mud_pic3,//进场通知书
          status: status
        }
        if(this.data.is_edit == true){
          data.yardId = this.data.yard_id
        }
        save_mud_yard_tail_info(data).then(res=>{
          if(res.code == 200){
            this.initData();
          }
        })
      }
    }else{
      // 运输车队
    }
  },
  save(e){
    this.submitRegister(0);
  },
  submitApply(){
    this.submitRegister(1);
  }
})