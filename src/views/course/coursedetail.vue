<!-- 课程详情页 -->
<template>
  <div id="course-detail">
    <x-header :left-options="{backText: ''}">母婴护理员
      <a slot="right" class="hongbao-box">
        <img src="@/assets/imgs/icon-hongbao.png" alt="">
        <span>邀请红包</span>
      </a>
    </x-header>
    <div class="banner-box">
      <img src="@/assets/imgs/cs-banner.png" alt="">
    </div>
    <div class="course-ctn">
      <tab>
        <tab-item  v-for="(item, index) in tabs"  @on-item-click="onItemClick" :key="index" :selected="selected === index">{{item}}</tab-item>
      </tab>
      <component :is="currentView"></component>
      <!-- <div class="video-ctn">
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
      </div>
      <div class="exercise-ctn">
        答题训练
      </div>
      <div class="records-ctn">
        学习记录
      </div> -->
    </div>
  </div>
</template>

<script>
import item0 from './item0.vue'
import item1 from './item1.vue'
import item2 from './item2.vue'
import { XHeader, Tab, TabItem } from "vux";

export default {
  data() {
    return {
      tabs: ['操作视频','答题训练','学习记录'],
      selected: 0,
      currentView: "item0"
    };
  },
  methods: {
    onItemClick(index) {
      this.currentView = 'item'+index;
    },
  },
  components: {
    XHeader,
    Tab,
    TabItem,
    item0,
    item1,
    item2,
  }
};
</script>
<style lang='scss' scoped>
.hongbao-box {
  img {
    width: 47px;
    height: 40px;
    vertical-align: middle;
  }
  span {
    vertical-align: middle;
    display: inline-block;
    @include font-dpr(20px);
    color: #646466;
  }
}
.banner-box {
  height: 260px;
  background-color: #f5f5f5;
  img {
    width: 100%;
    height: 100%;
  }
}
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
