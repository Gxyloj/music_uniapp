import {getAllTopListID, getRanking} from "@/servies/api_home";
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)


const state = {
  upRankingID: 0,
  upRankingList: {},
  newRankingID: 0,
  newRankingList: {},
  originalRankingID: 0,
  originalRankingList: {},
  hotRankingID: 0,
  hotRankingList: {}
}


const rankingStore = new Vuex.Store({
  state,
  mutations:{
    test(){
      console.log(111)
    }
  },
  actions:{
    async getRankingDataAction(ctx){
      //获取4个榜单的ID
      await getAllTopListID().then(res => {
        res.list.forEach(item => {
          switch (item.name) {
            case '飙升榜':
              ctx.state.upRankingID = item.id
              break;
            case '新歌榜':
              ctx.state.newRankingID = item.id
              break;
            case '原创榜':
              ctx.state.originalRankingID = item.id
              break;
            case '热歌榜':
              ctx.state.hotRankingID = item.id
              break;
          }
        })
        //获取4个榜单的数据
        getRanking(ctx.state.hotRankingID).then(res => {
          ctx.state.hotRankingList = res.playlist
        })
        getRanking(ctx.state.upRankingID).then(res => {
          ctx.state.upRankingList = res.playlist
        })
        getRanking(ctx.state.newRankingID).then(res => {
          ctx.state.newRankingList = res.playlist
        })
        getRanking(ctx.state.originalRankingID).then(res => {
          ctx.state.originalRankingList = res.playlist
        })
      })
    },

  }
})

export default rankingStore
