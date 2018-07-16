<!-- 学校列表页 -->
<template>
  <div id="course-tpl">
    <div class="banner">
      <img src="@/assets/imgs/banner_school.png" alt="">
    </div>
    <grid>
      <grid-item label="全部课程">
        <x-icon type="ios-arrow-down" style="float:right;"></x-icon>
      </grid-item>
      <grid-item label="全部区域">
        <x-icon type="ios-arrow-down" style="float:right;"></x-icon>
      </grid-item>
    </grid>
    <ul class="course-list">
      <li class="course-item">
        <div class="ctn-lf">
          <img src="@/assets/imgs/thumbnail.png" alt="">
        </div>
        <div class="ctn-rt">
          <h4 class="ell">
            母婴护理员【上岗】
            <span class="price-txt">￥39/永久</span>
          </h4>
          <div class="category">
            适合工种
            <span>月嫂</span>
          </div>
          <div class="label-box ovh">
            <div class="line01 ell">
              <span class="tag fill">膳食</span>
              <span class="label-txt">健康膳食、起居护理、心里疏导</span>
            </div>
            <div class="line02 ell">
              <span class="tag plain">日常</span>
              <span class="label-txt">身体护理、健康喂养、日常物品清洁11111111111111111</span>
            </div>
          </div>
        </div>
      </li>
      <li class="course-item">
        <div class="ctn-lf">
          <img src="@/assets/imgs/thumbnail.png" alt="">
        </div>
        <div class="ctn-rt">
          <h4 class="ell">
            母婴护理员【上岗】
            <span class="price-txt">￥39/永久</span>
          </h4>
          <div class="category">
            适合工种
            <span>月嫂</span>
          </div>
          <div class="label-box ovh">
            <div class="line01 ell">
              <span class="tag fill">膳食</span>
              <span class="label-txt">健康膳食、起居护理、心里疏导</span>
            </div>
            <div class="line02 ell">
              <span class="tag plain">日常</span>
              <span class="label-txt">身体护理、健康喂养、日常物品清洁11111111111111111</span>
            </div>
          </div>
        </div>
      </li>
      <li class="course-item">
        <div class="ctn-lf">
          <img src="@/assets/imgs/thumbnail.png" alt="">
        </div>
        <div class="ctn-rt">
          <h4 class="ell">
            母婴护理员【上岗】
            <span class="price-txt">￥39/永久</span>
          </h4>
          <div class="category">
            适合工种
            <span>月嫂</span>
          </div>
          <div class="label-box ovh">
            <div class="line01 ell">
              <span class="tag fill">膳食</span>
              <span class="label-txt">健康膳食、起居护理、心里疏导</span>
            </div>
            <div class="line02 ell">
              <span class="tag plain">日常</span>
              <span class="label-txt">身体护理、健康喂养、日常物品清洁11111111111111111</span>
            </div>
          </div>
        </div>
      </li>
      <li class="course-item">
        <div class="ctn-lf">
          <img src="@/assets/imgs/thumbnail.png" alt="">
        </div>
        <div class="ctn-rt">
          <h4 class="ell">
            母婴护理员【上岗】
            <span class="price-txt">￥39/永久</span>
          </h4>
          <div class="category">
            适合工种
            <span>月嫂</span>
          </div>
          <div class="label-box ovh">
            <div class="line01 ell">
              <span class="tag fill">膳食</span>
              <span class="label-txt">健康膳食、起居护理、心里疏导</span>
            </div>
            <div class="line02 ell">
              <span class="tag plain">日常</span>
              <span class="label-txt">身体护理、健康喂养、日常物品清洁11111111111111111</span>
            </div>
          </div>
        </div>
      </li>
    </ul>

  </div>
</template>

<script>
import { Grid, GridItem } from 'vux'
// import 'swiper/dist/css/swiper.css'
// import { swiper, swiperSlide } from 'vue-awesome-swiper'
const list = () => ['已购课程', '推荐课程']

export default {
  data () {
    return {
      showSpace: false,
      disabled:
        typeof navigator !== 'undefined' &&
        /iphone/i.test(navigator.userAgent) &&
        /ucbrowser/i.test(navigator.userAgent),
      index01: 0,
      list2: list(),
      demo2: '美食',
      list3: ['收到的消息', '发出的消息'],
      demo3: '收到的消息',
      list4: ['正在放映', '即将上映'],
      demo4: '即将上映',
      demoDisabled: 'A',
      index: 0
    }
  },
  components: {
    Grid,
    GridItem
  },
  methods: {
  }
}
</script>
<style lang='scss' scoped>
.banner {
  img {
    width: 100%;
  }
}
.course-list {
  background: #fff;
  padding: 0 30px;
  margin-bottom: 100px;
  .course-item {
    display: flex;
    padding: 40px 0;
    justify-content: space-between;
    &:not(:last-child) {
      border-bottom: 1px solid #e4e7ed;
    }
    .ctn-lf {
      width: 162px;
      height: 207px;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .ctn-rt {
      margin-left: 45px;
      width: 495px;
      h4 {
        display: flex;
        justify-content: space-between;
        align-items: center;
        @include font-dpr(32px);
        color: #323233;
        .price-txt {
          color: #ff605f;
          @include font-dpr(28px);
        }
      }
      .category {
        color: #646466;
        margin-top: 20px;
        margin-bottom: 14px;
        @include font-dpr(24px);
      }
      .label-box {
        height: 115px;
        padding: 0 10px;
        background-color: #f7f7fc;
        .line01 {
          margin-top: 20px;
          margin-bottom: 22px;
        }
        .tag {
          height: 28px;
          line-height: 28px;
          @include font-dpr(20px);
          padding: 0 10px;
          border-radius: 14px;
        }
        .fill {
          color: #fff;
          background-color: $theme-color;
        }
        .plain {
          color: $theme-color;
          border: solid 1px $theme-color;
        }
        .label-txt {
          @include font-dpr(24px);
          color: #969699;
        }
      }
    }
  }
}
</style>
