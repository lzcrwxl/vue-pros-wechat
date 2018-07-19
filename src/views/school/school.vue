<!-- 学校列表页 -->
<template>
  <div id="course-tpl">
    <div class="banner">
      <img src="@/assets/imgs/banner_school.png" alt="">
    </div>
    <div class="school-filter">
      <div class="school-filter-l">
        全部课程<i class="arr-down"><img src="@/assets/imgs/arr-down.png" /></i>
      </div>
      <div class="school-filter-r">
        全部区域<i class="arr-down"><img src="@/assets/imgs/arr-down.png" /></i>
      </div>
    </div>
    <ul class="school-list">
      <li class="school-item">
        <div class="school-item-bd">
          <div class="school-item-l"><img src="@/assets/imgs/school_logo.png" /></div>
          <div class="school-item-r">
            <div class="school-title">家策商学院总部</div>
            <div class="school-info">
              <div class="school-teacher"><i class="school-icon"><img src="@/assets/imgs/icon-teacher.png" /></i>严老师</div>
              <div class="school-tel"><i class="school-icon"><img src="@/assets/imgs/icon-tel.png" /></i>021-62568760</div>
              <div class="school-address"><i class="school-icon"><img src="@/assets/imgs/icon-address.png" /></i>上海市徐汇区南丹东路1200号</div>
            </div>
          </div>
        </div>
        <div class="school-item-ft">
          <div class="school-main-course">母婴护理、育婴师、家政服务员……</div>
          <a href="#" class="school-more-course">更多课程</a>
        </div>
      </li>
      <li class="school-item">
        <div class="school-item-bd">
          <div class="school-item-l"><img src="@/assets/imgs/school_logo.png" /></div>
          <div class="school-item-r">
            <div class="school-title">家策商学院总部</div>
            <div class="school-info">
              <div class="school-teacher"><i class="school-icon"><img src="@/assets/imgs/icon-teacher.png" /></i>严老师</div>
              <div class="school-tel"><i class="school-icon"><img src="@/assets/imgs/icon-tel.png" /></i>021-62568760</div>
              <div class="school-address"><i class="school-icon"><img src="@/assets/imgs/icon-address.png" /></i>上海市徐汇区南丹东路1200号</div>
            </div>
          </div>
        </div>
        <div class="school-item-ft">
          <div class="school-main-course">母婴护理、育婴师、家政服务员……</div>
          <a href="#" class="school-more-course">更多课程</a>
        </div>
      </li>
      <li class="school-item">
        <div class="school-item-bd">
          <div class="school-item-l"><img src="@/assets/imgs/school_logo.png" /></div>
          <div class="school-item-r">
            <div class="school-title">家策商学院总部</div>
            <div class="school-info">
              <div class="school-teacher"><i class="school-icon"><img src="@/assets/imgs/icon-teacher.png" /></i>严老师</div>
              <div class="school-tel"><i class="school-icon"><img src="@/assets/imgs/icon-tel.png" /></i>021-62568760</div>
              <div class="school-address"><i class="school-icon"><img src="@/assets/imgs/icon-address.png" /></i>上海市徐汇区南丹东路1200号</div>
            </div>
          </div>
        </div>
        <div class="school-item-ft">
          <div class="school-main-course">母婴护理、育婴师、家政服务员……</div>
          <a href="#" class="school-more-course">更多课程</a>
        </div>
      </li>
    </ul>

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
.banner {
  img {
    width: 100%;
  }
}
.school-filter {
  background: #fff;
  padding: 20px 0;
  height: 80px;
  line-height: 40px;
  text-align: center;
  overflow: hidden;
  &::after {
    content: '';
    clear: both;
    display: block;
    height: 0;
    visibility: hidden;
  }
  .school-filter-l {
    float: left;
    width: 50%;
    border-right: 1px solid #ddd;
  }
  .school-filter-r {
    float: left;
    width: 50%;
  }
  .arr-down {
    display: inline-block;
    width: 20px;
    height: 20px;
    vertical-align: middle;
    margin-left: 10px;
    img {
      width: 100%;
    }
  }
}

.school-list {
  padding: 20px;
  .school-item {
    background: #fff;
    border: 1px solid #ddd;
    box-shadow: 0 2px 3px 3px rgba(0,0,0,.05);
    margin-bottom: 30px;
    .school-item-bd {
      padding: 40px 20px;
      &::after {
        content: '';
        clear: both;
        display: block;
        height: 0;
        visibility: hidden;
      }
      .school-item-l {
        float: left;
        width: 25%;
        margin-right: 5%;
        img {
          width: 100%;
        }
      }
      .school-item-r {
        float: left;
        width: 70%;
        .school-icon {
          display: inline-block;
          width: 20px;
          height: 20px;
          vertical-align: middle;
          margin-right: 10px;
          img {
            width: 100%;
          }
        }
        .school-title {
          font-size: 36px;
          margin-bottom: 30px;
          color: #666;
        }
        .school-info {
          font-size: 24px;
          color: #999;
          line-height: 32px;
          & > div {
            margin: 10px;
          }
        }
      }
    }
    .school-item-ft {
      background: #f5f5f5;
      height: 60px;
      line-height: 60px;
      padding: 0 20px;
      &::after {
        content: '';
        clear: both;
        display: block;
        height: 0;
        visibility: hidden;
      }
      .school-main-course {
        float: left;
      }
      .school-more-course {
        color: #31c27c;
        float: right;
      }
    }
  }
}
</style>
