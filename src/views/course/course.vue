<!-- 在线学堂 -->
<template>
  <div id="course-tpl">
    <div v-if="!$route.meta.isSubPage">
      <div>
        <sticky ref="sticky" :offset="0" :check-sticky-support="false" :disabled="disabled">
          <tab :line-width="2" v-model="index">
            <tab-item class="vux-center" :selected="demo2 === item" v-for="(item, index) in list2" @click="demo2 = item" :key="index">{{item}}</tab-item>
          </tab>
        </sticky>
      </div>
      <div class="banner">
        <img src="@/assets/imgs/banner.png" alt="">
      </div>
      <swiper v-model="index" :show-dots="false" height="700px">
        <swiper-item v-for="(item, index) in list2" :key="index">
          <ul class="course-list">
            <router-link :to="{name:'CourseDetail',params:{cid:1}}" class="course-item" tag="li">
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
            </router-link>
          </ul>
        </swiper-item>
      </swiper>
    </div>
    <router-view v-else></router-view>
  </div>
</template>

<script>
import { Tab, TabItem, Sticky, Swiper, SwiperItem } from 'vux'
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
    Tab,
    TabItem,
    Sticky,
    Swiper,
    SwiperItem
  },
  methods: {
    switchTabItem (index) {
      console.log('on-before-index-change', index)
      this.$vux.loading.show({
        text: 'loading'
      })
      setTimeout(() => {
        this.$vux.loading.hide()
        this.index01 = index
      }, 1000)
    },
    onItemClick (index) {
      console.log('on item click:', index)
    }
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
