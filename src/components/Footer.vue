<!-- 底部导航 -->
<template>
  <div class="foot-tabs">
    <ul>
      <router-link :to="{name:'Course'}" tag="li" class="course" exact>
        <img v-if="$route.name==='Course'" :src="$route.meta.acturl" alt="">
        <img v-else src="@/assets/imgs/icon-course-blank.png" alt="">
        <div class="nav-txt">课堂</div>
      </router-link>
      <router-link :to="{name:'Job'}" tag="li" class="job">
        <img v-if="$route.name==='Job'" :src="$route.meta.acturl" alt="">
        <img v-else src="@/assets/imgs/icon-job-blank.png" alt="">
        <div class="nav-txt">找工作</div>
      </router-link>
      <router-link :to="{name:'School'}" tag="li" class="school">
        <img v-if="$route.name==='School'" :src="$route.meta.acturl" alt="">
        <img v-else src="@/assets/imgs/icon-school-blank.png" alt="">
        <div class="nav-txt">学校</div>
      </router-link>
      <router-link :to="{name:'Mine'}" tag="li" class="mine">
        <img v-if="$route.name==='Mine'" :src="$route.meta.acturl" alt="">
        <img v-else src="@/assets/imgs/icon-mine-blank.png" alt="">
        <div class="nav-txt">我的</div>
      </router-link>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  }
}
</script>
<style lang='scss' scoped>
.foot-tabs {
  position: fixed;
  bottom: 0;
  width: 100%;
  background:#fff;
  ul {
    display: flex;
    justify-content: space-between;
    li {
      height: 98px;
      position: relative;
      text-align: center;
      line-height: 2.6;
      color: #808080;
      img {
        max-width: 59px;
        vertical-align: middle;
      }
      flex: 1;
      .nav-txt {
        line-height: 1;
        position: absolute;
        bottom: 11px;
        left: 50%;
        transform: translateX(-50%);
      }
    }
  }
}
.course {
  img {
    width: 45px;
  }
}
.job {
  img {
    width: 43px;
  }
}
.school {
  img {
    width: 38px;
  }
}
.mine {
  img {
    width: 37px;
  }
}
.active {
  .nav-txt {
    color: $theme-color;
  }
}
</style>
