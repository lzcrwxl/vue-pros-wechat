<!-- 学校列表页 -->
<template>
  <div id="school-detail">
        <x-header :left-options="{backText: ''}">家策健康学院<a slot="right">Feedback</a></x-header>
        <div class="school-ban"><img src="@/assets/imgs/school_ban.png" /></div>
        <div class="school-info">
          <div class="school-info-title">学校简介</div>
          <p>家庭健康服务领域的职业技能培训中心。联合各大家政公司、月子会所、养老机构等进行合作招生，集聚行业雄厚师资力量，应用互联网在线应用互联网在
            <a href="#">更多</a>
          </p>
        </div>
        <div class="school-course">
          <div class="school-course-item">
            <div class="school-course-title">高级育婴师<span class="school-course-users">2300</span></div>
            <div class="school-course-sub">适合工种：月嫂、育婴师</div>
            <div class="school-course-desc">家庭健康服务领域的职业技能培训中心。联合各大家政公司、月子会所、养老机构等进行合作招生</div>
            <div class="school-course-bottom"></div>
          </div>
        </div>
  </div>
</template>

<script>
import { Grid, GridItem } from 'vux'
// import 'swiper/dist/css/swiper.css'
// import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {
  data () {
    return {
      showSpace: false
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
.school-info {
  background: #fff;
  margin-bottom: 20px;
  .school-info-title {
    border-bottom: 1px solid #f0f0f5;
    color: #333;
    font-size: 30px;
  }
}
.school-course-item {
  background: #ffffff;
  .school-course-title {
    color: #333;
    font-size: 32px;
    position: relative;
    &::before {
      content: '';
      display: block;
      position: absolute;
      left: 0;
      width: 4px;
      height: 30px;
      background: green;
    }
  }
  .school-course-users {
    float: right;
  }
  .school-course-sub {
    color: #999;
    font-size: 28px;
    line-height: 44px;
    padding: 0 20px;
  }
  .school-course-desc {
    color: #666;
    font-size: 28px;
    line-height: 44px;
    padding: 0 20px;
  }
  .school-course-bottom {
    background: #f7f7fc;
    height: 88px;
    line-height: 88px;
  }
}
</style>
