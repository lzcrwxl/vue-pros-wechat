<!-- 答题页提示 -->
<template>
  <div id="exam-tips">
    <nav-header>
    </nav-header>
    <section class="tips-ctn">
      <img src="@/assets/imgs/icon-tips.png" alt="">
      <p class="tips-txt">模拟考试，必须在90分钟完成 答题并交卷，中途不得暂停
      </p>
      <div class="sm-txt">准备好了吗？加油咯！</div>
      <router-link :to="{name:'exam'}" class="btn-block fill">开始答题</router-link>
      <a  href="javascript:history.back(-1)" class="btn-block plain">返回上一页</a>
    </section>
  </div>
</template>

<script>
import NavHeader from '@/components/Header.vue'

export default {
  data () {
    return {}
  },

  components: {
    NavHeader
  },

  computed: {},

  mounted: {},

  methods: {}
}
</script>
<style lang='scss' scoped>
.tips-ctn {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  img {
    width: 125px;
    height: 183px;
    margin: 150px 0 60px;
  }
  p.tips-txt {
    width: 440px;
    font-size: 32px;
    line-height: 52px;
    color: #323333;
  }
  .sm-txt {
    margin-top: 70px;
    margin-bottom: 130px;
    color: #969699;
    font-size: 30px;
  }
  .plain{
    margin-top: 30px;
  }
}
</style>
