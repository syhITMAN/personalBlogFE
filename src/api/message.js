import request from '@/utils/request';
//获取留言信息列表
export function msgList(params){
  return request({
    url: '/api/msg/msgList',
    method: 'get',
    params,
    cache:false
  })
}
//新增留言信息
export function addmsg(data){
  return request({
    url: '/api/msg/addmsg',
    method: 'post',
    data,
  })
}
//点赞/取消点赞
export function giveStart(data){
  return request({
    url: '/api/msg/giveStart',
    method: 'post',
    data,
  })
}