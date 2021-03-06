import {request} from "@/servies/request_axios";
import MusicRequest from "@/servies/request";

export function getBanner(){
  return MusicRequest.get('/banner',{
    type:2
  })
}

//获取所有榜单的ID
export function getAllTopListID(){
  return MusicRequest.get('/toplist')
}

//获取具体某个榜单的数据
export function getRanking(id){
  return MusicRequest.get('/playlist/detail',{
    id
  })
}


export function getSongMenu(cat = '全部',limit = 8,offset = 0){
  return MusicRequest.get('/top/playlist',{
    cat,limit,offset
  })
}
