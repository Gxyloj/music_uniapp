<template>
  <view>
    <!--  歌单列表-->
    <area-header :title="title"/>
    <!--  横向滚动区域-->
        <scroll-view scroll-x="true" class="menu-list">
          <view v-for="(item,index) in songMenu" class="menu-item">
            <song-menu-item :item="item"/>
<!--            {{index}}-->
          </view>
        </scroll-view>

  </view>
</template>

<script>
import AreaHeader from "@/components/area-header";
import SongMenuItem from "@/components/song-menu-item";

export default {
  name: "song-menu",
  components: {SongMenuItem, AreaHeader},
  props: {
    title: {
      type: String,
      default: '默认标题'
    },
    songMenu: {
      type: Array,
      default: []
    }
  }
}
</script>

<style scoped lang="scss">
.menu-list {
  position: relative;
  left: -20rpx;
  width: 100vw;
  white-space: nowrap;
  height: 100%;

}


.menu-item {
  display: inline-block;
  vertical-align: top;
  margin-left: 20rpx;
  width: 220rpx;
  /*height: 240rpx;*/
}

/*.menu-item:first-child{*/
/*  margin-left: 0;*/
/*}*/
.menu-item:last-child {
  margin-right: 20rpx;
}




</style>
