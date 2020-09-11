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
//判断是否可以切换身份
export function has_user_type() {
  return request({
    url: "/applet/user/has_user_type",
    method: "GET"
  })
}
//身份切换
export function change_user_type(data) {
  return request({
    url: "/applet/user/change_user_type",
    method: "GET",
    data
  })
}
//用户类型基础数据
export function query_user_type() {
  return request({
    url: "/applet/user/query_user_type",
    method: "GET"
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
//泥头场认证
export function save_mud_yard_head_info(data) {
  return request({
    url: "/applet/user/save_mud_yard_head_info",
    method: "POST",
    data
  })
}
//泥尾场认证
export function save_mud_yard_tail_info(data) {
  return request({
    url: "/applet/user/save_mud_yard_tail_info",
    method: "POST",
    data
  })
}
//获取泥头场信息
export function get_mud_yard_head_info(data) {
  return request({
    url: "/applet/user/get_mud_yard_head_info",
    method: "GET",
    data
  })
}
//获取泥尾场信息
export function get_mud_yard_tail_info(data) {
  return request({
    url: "/applet/user/get_mud_yard_tail_info",
    method: "GET",
    data
  })
}
//查询我的泥头场表列
export function query_mud_yard_head(data) {
  return request({
    url: "/applet/user/query_mud_yard_head",
    method: "GET",
    data
  })
}
//查询我的泥尾场表列
export function query_mud_yard_tail(data) {
  return request({
    url: "/applet/user/query_mud_yard_tail",
    method: "GET",
    data
  })
}
//查询所有泥头场表列
export function query_all_mud_yard_head(data) {
  return request({
    url: "/applet/user/query_all_mud_yard_head",
    method: "GET",
    data
  })
}
//查询所有泥尾场表列
export function query_all_mud_yard_tail(data) {
  return request({
    url: "/applet/user/query_all_mud_yard_tail",
    method: "GET",
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
//公司列表
export function query_company_manage_list(data) {
  return request({
    url: "/applet/user/query_company_manage_list",
    method: "POST",
    data
  })
}

//新增泥票
export function save_mud_ticket(data) {
  return request({
    url: "/applet/mud/save_mud_ticket",
    method: "POST",
    data
  })
}
//获取泥票信息
export function get_mud_ticket(data) {
  return request({
    url: "/applet/mud/get_mud_head_info",
    method: "GET",
    data
  })
}
//查看泥票发行列表
export function query_mud_ticket(data) {
  return request({
    url: "/applet/mud/query_mud_ticket",
    method: "GET",
    data
  })
}
//运输队:购买泥票(展示泥票大图)
export function agent_show_code(data) {
  return request({
    url: "/applet/mud/agent_show_code",
    method: "GET",
    data
  })
}
//泥场:出售泥票(运输队购买泥票)
export function add_mud_ticket_sell(data) {
  return request({
    url: "/applet/mud/add_mud_ticket_sell",
    method: "GET",
    data
  })
}
//泥场:查看出售记录
export function query_mud_ticket_sell(data) {
  return request({
    url: "/applet/mud/query_mud_ticket_sell",
    method: "GET",
    data
  })
}
//运输队:查看购买的泥票
export function query_mud_ticket_sell_to_agent(data) {
  return request({
    url: "/applet/mud/query_mud_ticket_sell_to_agent",
    method: "GET",
    data
  })
}
//运输队:泥票再发行
export function agent_mud_ticket(data) {
  return request({
    url: "/applet/mud/agent_mud_ticket",
    method: "GET",
    data
  })
}
//运输队:查看再发行的泥票
export function query_mud_ticket_agent(data) {
  return request({
    url: "/applet/mud/query_mud_ticket_agent",
    method: "GET",
    data
  })
}
//运输队:出售泥票(司机购买泥票)
export function driver_buy_ticket(data) {
  return request({
    url: "/applet/mud/driver_buy_ticket",
    method: "GET",
    data
  })
}
//运输队:查看出售记录
export function query_truck_mud_ticket_sell(data) {
  return request({
    url: "/applet/mud/query_truck_mud_ticket_sell",
    method: "GET",
    data
  })
}
//司机:查看购买泥票列表
export function query_ticket_by_driver(data) {
  return request({
    url: "/applet/mud/query_ticket_by_driver",
    method: "GET",
    data
  })
}
//司机:放行员放行(展示泥票大图)
export function truck_show_code(data) {
  return request({
    url: "/applet/mud/truck_show_code",
    method: "GET",
    data
  })
}
//司机:购买泥票(展示泥票大图)
export function driver_show_code(data) {
  return request({
    url: "/applet/mud/driver_show_code",
    method: "GET",
    data
  })
}
//放行员:验证泥头票放行
export function check_ticket_head_code(data) {
  return request({
    url: "/applet/mud/check_ticket_head_code",
    method: "GET",
    data
  })
}
//收纳员:验证泥尾票
export function check_ticket_tail_code(data) {
  return request({
    url: "/applet/mud/check_ticket_tail_code",
    method: "GET",
    data
  })
}
//运输队:搜索泥场
export function search_mud_yard(data) {
  return request({
    url: "/applet/mud/search_mud_yard",
    method: "GET",
    data
  })
}