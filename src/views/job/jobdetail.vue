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
      <group>
        <cell title="需求详情"></cell>
        <cell-form-preview :list="list"></cell-form-preview>
      </group>
      <group>
        <cell title="职位要求"></cell>
        <cell-box>
          辅食、早教、年龄小于50岁，会普通话，好沟通，性格开朗，喜欢小孩，育儿经验3年以上
        </cell-box>
      </group>
    </div>
    <div class="contact-info">
      <span>天天家政</span>
      <a href="tel:12345678">王老师</a>
    </div>
  </div>
</template>

<script>
import {
  Card,
  Group,
  Cell,
  CellBox,
  CellFormPreview,
  Flexbox,
  FlexboxItem
} from "vux";
import HeadNav from "@/components/Header.vue";

export default {
  data() {
    return {
      jobStyle: {},
      list: [
        {
          label: "服务区域",
          value: "3.29"
        },
        {
          label: "服务时间",
          value: "1.04"
        },
        {
          label: "技能要求",
          value: "辅食制作、智力早教、小儿推拿、宝宝带睡"
        }
      ]
    };
  },
  components: {
    HeadNav,
    Card,
    Group,
    Cell,
    CellBox,
    CellFormPreview,
    Flexbox,
    FlexboxItem
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
      &:not(:last-child) {
        border-right: 1px solid #bcffdf;
      }
      flex: 1;
      text-align: center;
      .line01 {
        @include font-dpr(26px);
      }
      .line02 {
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
.contact-info{
  background: #fff;
  position: fixed;
}
</style>
