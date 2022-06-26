<template>
  <view class="header">
    <view class="title">{{title}}</view>
    <view class="right">
      <view class="slot">
        <slot>
          <view class="default">
            <text>{{rightText}}</text>
            <image class="icon" src="../static/images/icons/arrow-right.png"></image>
          </view>
        </slot>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  name: "area-header",
  props:{
    title:{
      type:String,
      default:'默认标题'
    },
    rightText:{
      type:String,
      default:'更多'
    }
  }
}
</script>

<style scoped lang="scss">
.header{
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 88rpx;
}

.header .title{
  font-size: 36rpx;
  font-weight: 700;
}

.header .default{
  display: flex;
  align-items: center;
  font-size: 28rpx;
  color: #777;
}

.header .right .icon{
  width: 50rpx;
  height: 50rpx;
}

</style>
