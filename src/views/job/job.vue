<!-- 岗位招聘 -->
<template>
  <div id="job-ctn">
    <div class="jobs-icon">
      <grid :show-lr-borders="false" :show-vertical-dividers="false" :cols="4">
        <grid-item link="" :label="item.label" v-for="item in types" :key="item.label">
          <img slot="icon" :src="item.url" alt="">
        </grid-item>
      </grid>
    </div>
    <sticky ref="sticky" :check-sticky-support="false" :disabled="disabled">
      <div class="sort-job">
        <select name="" id="">
          <option value="">工种</option>
        </select>
        <select name="" id="">
          <option value="">薪资</option>
        </select>
        <select name="" id="">
          <option value="">区域</option>
        </select>
        <select name="" id="">
          <option value="">更多</option>
        </select>
      </div>
    </sticky>
    <div class="jobs-ctn">
      <ul class="jobs-list">
        <li class="job-item">
          <div class="base-info">
            <h5>
              月嫂
              <span class="price-txt">12999元/26天</span>
            </h5>
            <div class="info-bar">
              <span class="age-wrapper"  :style="age">29-39岁</span>
              <span class="addr-wrapper">上海市-徐汇区</span>
            </div>
            <p class="info-summary"></p>
          </div>
          <div class="contact-info">

          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { Grid, GridItem, Sticky } from "vux";

export default {
  data() {
    return {
      disabled:
        typeof navigator !== "undefined" &&
        /iphone/i.test(navigator.userAgent) &&
        /ucbrowser/i.test(navigator.userAgent),
      types: [
        {
          label: "月嫂",
          link: "",
          url: require("@/assets/imgs/icon-yuesao.png")
        },
        {
          label: "育儿嫂",
          link: "",
          url: require("@/assets/imgs/icon-yuersao.png")
        },
        {
          label: "保姆",
          link: "",
          url: require("@/assets/imgs/icon-baomu.png")
        },
        {
          label: "钟点工",
          link: "",
          url: require("@/assets/imgs/icon-zhongdiangong.png")
        },
        {
          label: "医院护工",
          link: "",
          url: require("@/assets/imgs/icon-hugong.png")
        },
        {
          label: "老人陪护",
          link: "",
          url: require("@/assets/imgs/icon-peihu.png")
        },
        {
          label: "家庭管家",
          link: "",
          url: require("@/assets/imgs/icon-guanjia.png")
        },
        {
          label: "敬请期待",
          link: "",
          url: require("@/assets/imgs/icon-qidai.png")
        }
      ],
      age:{
        backgroundImage: "url("+ require("../../assets/imgs/icon-age.png")+")",
        backgroundRepeat:"no-repeat"

      }
    };
  },

  components: {
    Grid,
    GridItem,
    Sticky
  }
};
</script>
<style lang='scss' scoped>
.jobs-icon {
  background: #fff;
}
.sort-job {
  display: flex;
  height: 88px;
  select {
    flex: 1;
  }
}
.jobs-ctn {
  margin-top: 24px;
  .jobs-list {
    padding: 0 20px;
    .job-item {
      height: 330px;
      background-color: #ffffff;
      border-radius: 4px;
      box-shadow: 0px 8px 17px 0px rgba(0, 0, 0, 0.21);
      .base-info {
        padding: 0 20px;
        h5{
          height: 90px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 32px;
          color: #323232;
          .price-txt{
            color: #ff605f;
            font-size: 28px;
          }
        }
        .info-bar{
          .age-wrapper{
            display: inline-block;

            background-size:20px 22px;
            padding-left: 40px;
          }
        }
      }
    }
  }
}
</style>
