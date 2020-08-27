import request from '../utils/request'

//登录接口
export function login(data) {
  return request({
    url: "/applet/login",
    method: "POST",
    data
  })
}
//获取微信sessionKey
export function getSessinKey(jsCode) {
  return request({
    url: "/applet/getSession/" + jsCode,
    method: "GET"
  })
}
//文件上传
export function uploadFile(data) {
  return request({
    url: "/applet/file/upload",
    method: "POST",
    data
  })
}
//获取用户当前信息
export function get_user_info() {
  return request({
    url: "/applet/get_user_info",
    method: "GET"
  })
}