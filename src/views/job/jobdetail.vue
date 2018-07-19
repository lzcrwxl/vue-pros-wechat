<!-- 工作详情 -->
<template>
  <div id="job-detail">
    <head-nav>
      <template slot="job">
        <a class="share-job" :style="jobStyle">
          <img src="@/assets/imgs/icon-share.png" alt=""><br> 分享职位
        </a>
      </template>
    </head-nav>
    <div class="detail-head">
      <div class="head-title">
        正在寻找
        <span>育儿嫂 - 住家</span>
      </div>
      <ul class="card-list">
        <li>
          <div class="line01">20分钟前</div>
          <div class="line02">发布时间</div>
        </li>
         <li>
          <div class="line01">20分钟前</div>
          <div class="line02">发布时间</div>
        </li>
         <li>
          <div class="line01">20分钟前</div>
          <div class="line02">发布时间</div>
        </li>
      </ul>
    </div>
    <div class="detail-ctn">

    </div>
  </div>
</template>

<script>
import { Card, Divider } from "vux";
import HeadNav from "@/components/Header.vue";

export default {
  data() {
    return {
      jobStyle: {}
    };
  },
  components: {
    HeadNav,
    Card
  }
};
</script>
<style lang='scss' scoped>
.share-job {
  padding-top: 13px;
  position: absolute;
  color: $theme-color;
  @include font-dpr(20px);
  right: 30px;
  height: 100%;
  box-sizing: border-box;
  line-height: 1;
  img {
    width: 35px;
    height: 35px;
    margin-bottom: 5px;
  }
  top: 0;
}
.detail-head {
  width: 750px;
  // height: 260px;
  background-color: #31c27c;
  opacity: 0.92;
  color: #fff;
  .card-list {
    display: flex;
    align-items: center;
    height: 110px;
    li {
      &:not(:last-child){
        border-right: 1px solid #bcffdf;
      }
      flex: 1;
      text-align: center;
      .line01{
        @include font-dpr(26px);
      }
      .line02{
        margin-top: 20px;
        @include font-dpr(24px);
      }
    }
  }
}
.head-title {
  height: 190px;
  line-height: 90px;
  @include font-dpr(30px);
  padding: 0 30px;
  span {
    margin-left: 30px;
    font-weight: bold;
    @include font-dpr(34px);
  }
}
</style>
