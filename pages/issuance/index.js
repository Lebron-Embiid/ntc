// pages/editCoupon/index.js
import {
  save_mud_head,
  save_mud_tail
} from '../../api/api.js'
import publicFun from '../../utils/public.js'
const uploadUrl = 'http://192.168.31.115:9091'
// const uploadUrl = 'https://n.3p3.top'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    id: '', //促销券id
    type: '',  //泥头票：0  泥尾票：1
    mud_name: '', //泥场名称
    coupon_name: '',
    price: '',
    car_num: '',
    address: '',
    count: '',
    date: '',
    profit: '',
    frequence: '',
    date_txt: '请选择泥票有效时间',
    region: '',
    region_txt: '请选择装车所在地址',
    is_edit: false,
    couponId: '',
    image1: '',
    is_image1: 0,
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
    is_end_pic11: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if(options.type){
      this.setData({
        type: options.type
      })
    }
    console.log(options.type)
    this.getEditFinish();
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
  getEditFinish(save){
    queryEditCouponInfo({
      imageNum: this.data.id
    }).then((res)=>{
      if(res.code == 200){
        if(save){
          publicFun.getToast('编辑成功');
          setTimeout(()=>{
            let pages = getCurrentPages(); // 当前页的数据，
            let prevPage = pages[pages.length - 2]; // 上一页的数据
            prevPage.setData({
              is_edit_back: true // 修改上一页的属性值；
            })
            wx.navigateBack({
              delta: 1
            })
          },1500)
        }else{
          this.setData({
            is_edit: res.data!=null?true:false,
            couponId: res.data!=null?res.data.couponId:'',
            coupon_name: res.data!=null?res.data.couponName:'',
            count: res.data!=null?res.data.count:'',
            price: res.data!=null?res.data.price:'',
            profit: res.data!=null?res.data.profit:'',
            frequence: res.data!=null?res.data.frequence:'',
            date: res.data!=null?res.data.trem:'',
            date_txt: res.data!=null?res.data.trem:'请选择泥票有效时间',
            face: res.data!=null?res.data.value:'',
          })
        }
        console.log(this.data.is_edit,this.data.couponId)
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
  getCouponName(e){
    this.setData({
      coupon_name: e.detail.value
    })
  },
  getCarNum(e){
    this.setData({
      car_num: e.detail.value
    })
  },
  getPrice(e){
    this.setData({
      price: e.detail.value
    })
  },
  getAddress(e){
    this.setData({
      address: e.detail.value
    })
  },
  getCount(e){
    this.setData({
      count: e.detail.value
    })
  },
  getProfit(e){
    this.setData({
      profit: e.detail.value
    })
  },
  getFrequence(e){
    this.setData({
      frequence: e.detail.value
    })
  },
  bindDateChange: function(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      date: e.detail.value,
      date_txt: e.detail.value
    })
  },
  bindRegionChange: function(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      region: e.detail.value,
      region_txt: e.detail.value
    })
  },
  chooseImage1(){
    this.choosePic('image1','is_image1');
  },
  chooseHeadPic1(){
    this.choosePic('head_pic1','is_head_pic1');
  },
  chooseHeadPic2(){
    this.choosePic('head_pic2','is_head_pic2');
  },
  chooseHeadPic3(){
    this.choosePic('head_pic3','is_head_pic3');
  },
  chooseHeadPic4(){
    this.choosePic('head_pic4','is_head_pic4');
  },
  chooseHeadPic5(){
    this.choosePic('head_pic5','is_head_pic5');
  },
  chooseHeadPic6(){
    this.choosePic('head_pic6','is_head_pic6');
  },
  chooseHeadPic7(){
    this.choosePic('head_pic7','is_head_pic7');
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
  chooseEndPic1(){
    this.choosePic('end_pic1','is_end_pic1');
  },
  chooseEndPic2(){
    this.choosePic('end_pic2','is_end_pic2');
  },
  chooseEndPic3(){
    this.choosePic('end_pic3','is_end_pic3');
  },
  chooseEndPic4(){
    this.choosePic('end_pic4','is_end_pic4');
  },
  chooseEndPic5(){
    this.choosePic('end_pic5','is_end_pic5');
  },
  chooseEndPic6(){
    this.choosePic('end_pic6','is_end_pic6');
  },
  chooseEndPic7(){
    this.choosePic('end_pic7','is_end_pic7');
  },
  chooseEndPic8(){
    this.choosePic('end_pic8','is_end_pic8');
  },
  chooseEndPic9(){
    this.choosePic('end_pic9','is_end_pic9');
  },
  chooseEndPic10(){
    this.choosePic('end_pic10','is_end_pic10');
  },
  chooseEndPic11(){
    this.choosePic('end_pic11','is_end_pic11');
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
  
  save(){
    // if(this.data.price == ''){
    //   publicFun.getToast('请输入促销券价格');
    //   return;
    // }
    // if(this.data.face == ''){
    //   publicFun.getToast('请输入促销券面额');
    //   return;
    // }
    // if(this.data.date == ''){
    //   publicFun.getToast('请选择泥票有效时间');
    //   return;
    // }
    // if(this.data.count == ''){
    //   publicFun.getToast('请输入促销券有效次数');
    //   return;
    // }
    // if(this.data.profit == ''){
    //   publicFun.getToast('请输入代理人收益');
    //   return;
    // }
    let data = {
      companyId: '1',
      companyName: '1',
      startDate: this.data.date,
      itemName: this.data.coupon_name,
      address: this.data.address,
      area: '1',
      imageNum: this.data.image1,
      price: this.data.price,
      sign: '1',
      permit1: this.data.head_pic1,
      permit2: this.data.head_pic2,
      permit3: this.data.head_pic3,
      permit4: this.data.head_pic4,
      permit5: this.data.head_pic5,
      status: '0'
    }
    save_mud_head(data).then((res)=>{
      if(res.code == 200){
        
      }
    })
  },
  submitForm(e){
    
  }
})