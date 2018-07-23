<template>
  <div class="video-ctn">
        <div class="video-title">
          第一考区：孕产妇护理
        </div>
    <ul class="video-list">
      <li>
        1.1.1 孕妇体操指导
        <i>试看</i>
      </li>
      <li>
        1.1.1 孕妇体操指导
        <i>试看</i>
      </li>
      <li>
        1.1.1 孕妇体操指导
        <i class="play" :style="play"></i>
      </li>
    </ul>
    <div class="video-title">
      第二考区：孕产妇护理
    </div>
    <ul class="video-list">
      <li>
        1.1.1 孕妇体操指导
        <i>试看</i>
      </li>
      <li>
        1.1.1 孕妇体操指导
        <i>试看</i>
      </li>
      <li>
        1.1.1 孕妇体操指导
        <i class="play" :style="play"></i>
      </li>
    </ul>
    <div class="video-title">
      第二考区：孕产妇护理
    </div>
    <ul class="video-list">
      <li>
        1.1.1 孕妇体操指导
        <i>试看</i>
      </li>
      <li>
        1.1.1 孕妇体操指导
        <i>试看</i>
      </li>
      <li>
        1.1.1 孕妇体操指导
        <i class="play" :style="play"></i>
      </li>
    </ul>
    <div class="video-title">
      第二考区：孕产妇护理
    </div>
    <ul class="video-list">
      <li>
        1.1.1 孕妇体操指导
        <i>试看</i>
      </li>
      <li>
        1.1.1 孕妇体操指导
        <i>试看</i>
      </li>
      <li>
        1.1.1 孕妇体操指导
        <i class="play" :style="play"></i>
      </li>
    </ul>
  </div>
</template>
<script>
import { Sticky } from "vux";
export default {
  data() {
    return {
      play: {
        backgroundImage:
          "url(" + require("../../assets/imgs/icon-play.png") + ")"
      },
      disabled: typeof navigator !== 'undefined' && /iphone/i.test(navigator.userAgent) && /ucbrowser/i.test(navigator.userAgent)
    };
  },
  components: {
    Sticky
  }
};
</script>
<style lang='scss' scoped>
.video-ctn {
  .video-title {
    height: 1.12rem;
    background-color: #f0f0f5;
    color: #333333;
    line-height: 1.12rem;
    padding: 0 0.4rem;
    color: #333;
  }
  .video-list {
    padding: 0 0.4rem;
    background: #fff;
    li {
      height: 84px;
      line-height: 84px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      @include font-dpr(28px);
      color: #646466;
      &:not(:last-child) {
        border-bottom: 1px solid #f0f0f5;
      }
      i.play {
        display: inline-block;
        width: 36px;
        height: 36px;
        border: 10px solid transparent;
        box-sizing: initial;
        background-repeat: no-repeat;
        background-size: cover;
      }
    }
  }
}
</style>

