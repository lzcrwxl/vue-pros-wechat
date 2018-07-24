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
        <tab-item v-for="(item, index) in tabs" @on-item-click="onItemClick" :key="index" :selected="selected === index">{{item}}</tab-item>
      </tab>
      <component :is="currentView"></component>
    </div>
    <div class="btn-bottom">
      <a class="btn-plain">邀请好友赢红包</a>
      <a class="btn-fill">购买：￥59/永久</a>
    </div>
  </div>
</template>

<script>
import item0 from './item0.vue'
import item1 from './item1.vue'
import item2 from './item2.vue'
import { XHeader, Tab, TabItem } from 'vux'

export default {
  data () {
    return {
      tabs: ['操作视频', '答题训练', '学习记录'],
      selected: 0,
      currentView: 'item0'
    }
  },
  methods: {
    onItemClick (index) {
      this.currentView = 'item' + index
    }
  },
  components: {
    XHeader,
    Tab,
    TabItem,
    item0,
    item1,
    item2
  }
}
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
.course-ctn{
  margin-bottom: 200px;
}
.btn-bottom {
  position: fixed;
  bottom: 0;
  height: 120px;
  background-color: #f0f0f5;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

}
</style>
