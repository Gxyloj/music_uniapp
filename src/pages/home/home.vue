<template>
  <view id="home">
    <uni-search-bar radius="100"
                    placeholder="搜索你喜欢的音乐"/>
    <!-- 轮播图 -->
    <swiper indicator-dots
            autoplay
            circular>
      <swiper-item v-for="(item,index) in bannerList"
                   class="swiper-item"
                   :key="index"
      >
        <image :src="item.pic" mode="widthFix"></image>
      </swiper-item>
    </swiper>
    <!--    推荐歌曲-->
    <view class="recommend-song" v-if="rankingList[3].songList">
      <area-header title="推荐歌曲"/>
      <view class="song-list">
        <view v-for="item in rankingList[3].songList" :key="item.id">
          <song-item-v1 :item="item"/>
        </view>
      </view>
    </view>
    <!--    推荐歌单-->
    <song-menu title="推荐歌单"
               v-if="recommendSongMenu"
               :song-menu="recommendSongMenu"/>
    <!--    热门歌单-->
    <song-menu title="热门歌单"
               v-if="hotSongMenu"
               :song-menu="hotSongMenu"/>
    <!--    巅峰榜-->
    <view class="ranking">
      <area-header title="巅峰榜">
        <view></view>
      </area-header>
      <view class="ranking-list">
        <view v-for="(item,index) in rankingList" :key="item.name" v-if="index < 3">
          <ranking-area-item :item="item"/>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
import {getBanner, getSongMenu} from "@/servies/api_home";
import {rankingStore} from "@/store/ranking-store";
import AreaHeader from "@/components/area-header";
import {mapGetters,mapState} from 'vuex'
import SongItemV1 from "@/components/song-item-v1";
import SongMenu from "@/components/song-menu";
import RankingAreaItem from "@/components/ranking-area-item";

export default {
  components: {RankingAreaItem, SongMenu, SongItemV1, AreaHeader},
  data() {
    return {
      bannerList: [],
      rankingList: {0: {}, 1: {}, 2: {}, 3: {}},
      recommendSongMenu: [],//推荐歌单
      hotSongMenu: [],//热门歌单
    };
  },
  onLoad() {
    //获取轮播图
    getBanner().then(res => {
      if (res.code !== 200) return
      this.bannerList = res.banners
    })
    //获取榜单数据
    this.$store.dispatch("getRankingDataAction")
    //获取推荐歌单和热门歌单 cat=全部 华语
    getSongMenu('全部').then(res => {
      this.recommendSongMenu = res.playlists
    })
    getSongMenu('华语').then(res => {
      this.hotSongMenu = res.playlists
    })
  },

  computed:{
    ...mapState([
        'hotRankingList',
        'upRankingList',
        'newRankingList',
        'originalRankingList'
    ])
  },
  watch: {

    hotRankingList:function(item){
      this.setNewRankingList(3,item)
    },
    upRankingList:function(item){
      this.setNewRankingList(0,item)
    },
    newRankingList:function(item){
      this.setNewRankingList(1,item)
    },
    originalRankingList:function (item){
      this.setNewRankingList(2,item)
    }
  },
  methods: {
    setNewRankingList(id, item) {
      let newRankingList = {
        name: item.name,
        coverImgUrl: item.coverImgUrl,
        playCount: item.playCount,
        songList: item.tracks.slice(0, 5)
      }
      let originRanking = {...this.rankingList, [id]: newRankingList}
      this.rankingList = originRanking
    }
  }

}
</script>

<style lang="scss">
#home {
  padding: 0 20rpx;
}

//覆盖搜索栏的默认样式
.uni-searchbar {
  padding: 20rpx 0;
}

//轮播图圆角
uni-swiper {
  border-radius: 10rpx;
  overflow: hidden;
}

.swiper-item image {
  width: 100%;

}
</style>
