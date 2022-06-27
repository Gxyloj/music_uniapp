<template>
  <!--  封面 下方name 带播放量-->
  <view class="item">
    <view class="album">
      <image class="image" mode="widthFix" :src="item.coverImgUrl"></image>
      <view class="count">{{ formatCount(item.playCount) }}</view>
    </view>
    <view class="title">{{ item.name }}</view>
  </view>
</template>

<script>
import {formatCount} from "@/utils/format";
export default {
  name: "song-menu-item",
  props: {
    item: {
      type: Object,
      default: {}
    }
  },
  methods:{
    formatCount(data){
      return formatCount(data)
    }
  }
}
</script>

<style scoped lang="scss">
.album {
  position: relative;
}

.count {
  position: absolute;
  right: 0;
  bottom: 10rpx;
  padding: 5rpx;
  border-radius: 8rpx;
  color: #fff;
  font-size: 24rpx;
  background-color: rgba(0, 0, 0, 0.5);
}

.image {
  width: 100%;
  border-radius: 12rpx;

}

.title {
  font-size: 26rpx;
  color: #000;
  /* 显示两行 多出来的省略号*/
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  display: -moz-box;
  -moz-line-clamp: 2;
  -moz-box-orient: vertical;
  word-wrap: break-word;
  word-break: break-all;
  white-space: normal;
  overflow: hidden;
}
</style>
