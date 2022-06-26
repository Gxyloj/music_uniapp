<template>
  <view class="item">
    <image class="image" :src="item.al.picUrl"></image>
    <view class="content">
      <view class="name">{{ item.name }}</view>
      <view class="source">{{ item.ar[0].name }} · {{ item.alia[0] || item.al.name }}</view>
    </view>
    <view class="arrow">
      <image class="icon" src="../static/images/icons/arrow-right.png"></image>
    </view>
  </view>
</template>

<script>
export default {
  name: "song-item-v1",
  props: {
    item: {
      type: Object,
      default: {}
    }
  }
}
</script>

<style scoped lang="scss">
.item {
  display: flex;
  margin-bottom: 20rpx;
  align-items: center;
}

.image {
  width: 120rpx;
  height: 120rpx;
  border-radius: 14rpx;
  overflow: hidden;
}

.content {
  flex: 1;
  margin-left: 16rpx;
}

.content .name {
  font-size: 32rpx;
  color: #000;
}

.content .source {
  margin-top: 2px;
  font-size: 24rpx;
  color: #999;
  /*一行*/
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  display: -moz-box;
  -moz-line-clamp: 1;
  -moz-box-orient: vertical;
  word-wrap: break-word;
  word-break: break-all;
  white-space: normal;
  overflow: hidden;
}

.icon {
  width: 45rpx;
  height: 45rpx;
}
</style>
