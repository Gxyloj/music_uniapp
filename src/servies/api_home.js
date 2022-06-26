import {request} from "@/servies/request";

export function getBanner(){
  return request({
    url:'/banner'
  })
}

//获取所有榜单的ID
export function getAllTopListID(){
  return request({
    url:'/toplist'
  })
}

//获取具体某个榜单的数据
export function getRanking(id){
  return request({
    url:'/playlist/detail',
    params:{
      id
    }
  })
}


export function getSongMenu(cat = '全部',limit = 8,offset = 0){
  return request({
    url:'/top/playlist',
    params:{
      cat,limit,offset
    }
  })
}
