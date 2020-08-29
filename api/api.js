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
//获取用户当前信息
export function get_user_info() {
  return request({
    url: "/applet/get_user_info",
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

//注册公司
export function save_company_info(data) {
  return request({
    url: "/applet/user/save_company_info",
    method: "POST",
    data
  })
}
//搜索公司
export function search_company(data) {
  return request({
    url: "/applet/user/search_company",
    method: "GET",
    data
  })
}
//获取公司信息
export function get_company_info(data) {
  return request({
    url: "/applet/user/get_company_info",
    method: "GET",
    data
  })
}
//申请成为公司成员
export function add_company_member(data) {
  return request({
    url: "/applet/user/add_company_member",
    method: "GET",
    data
  })
}
//成员管理
export function member_manage(data) {
  return request({
    url: "/applet/user/member_manage",
    method: "GET",
    data
  })
}
//查看公司成员
export function query_company_member(data) {
  return request({
    url: "/applet/user/query_company_member",
    method: "GET",
    data
  })
}

//新增泥头票
export function save_mud_head(data) {
  return request({
    url: "/applet/mud/save_mud_head",
    method: "POST",
    data
  })
}
//新增泥尾票
export function save_mud_tail(data) {
  return request({
    url: "/applet/mud/save_mud_tail",
    method: "POST",
    data
  })
}
//获取泥头票信息
export function get_mud_head_info(data) {
  return request({
    url: "/applet/mud/get_mud_head_info",
    method: "GET",
    data
  })
}
//获取泥尾票信息
export function get_mud_tail_info(data) {
  return request({
    url: "/applet/mud/get_mud_tail_info",
    method: "GET",
    data
  })
}
//泥头票管理
export function mud_head_manage(data) {
  return request({
    url: "/applet/mud/mud_head_manage",
    method: "GET",
    data
  })
}
//泥尾票管理
export function mud_tail_manage(data) {
  return request({
    url: "/applet/mud/mud_tail_manage",
    method: "GET",
    data
  })
}