<!-- 答题页 -->
<template>
  <div id="exam">
    <x-header :left-options="{backText: ''}">母婴护理员
    </x-header>
    <section class="exam-ctn">
      <h5>剩余时间：
        <em>89分钟20秒</em>
      </h5>
      <div class="question-box">
        <!-- <p><i>1.</i>【单选题】早产儿吸吮能力差，喂养要有耐心，吸 奶困难时可用（ ）喂，保证其奶的摄入。</p> -->
        <group style="line-height: 0.587rem;" title="【单选题】早产儿吸吮能力差，喂养要有耐心，吸 奶困难时可用（ ）喂，保证其奶的摄入。">
          <radio :selected-label-style="{color: '#FF9900'}" :options="radio001" v-model="radio001Value" @on-change="change"></radio>
        </group>
      </div>
    </section>
    <div class="btn-btm">
      <a class="btn-block fill">下一题</a>
      <router-link to="/report" class="btn-block fill">完成</router-link>
    </div>
  </div>
</template>

<script>
import { XHeader, Tab, TabItem, Radio, Group } from 'vux'
export default {
  data () {
    return {
      radio001: ['China', 'Japan'],
      radio001Value: 'China'
    }
  },

  components: {
    XHeader,
    Radio,
    Group
  },

  computed: {},

  mounted: {},

  methods: {}
}
</script>
<style lang='scss' scoped>
.exam-ctn {
  background: #fff;
  margin-top: 26px;
  h5 {
    text-align: center;
    height: 153px;
    font-size: 32px;
    color: #333333;
    border-bottom: 1px solid #e8e8ed;
    line-height: 153px;
    em {
      color: #ff605f;
    }
  }
  .question-box {
    font-size: 30px;
    color: #646466;
    padding-top: 50px;
    p {
      line-height: 44px;
    }

    // ul {
    //   margin-top: 35px;
    //   li {
    //     height: 90px;
    //     line-height: 90px;
    //     font-size: 30px;
    //     color: #646466;
    //     &:not(:last-child) {
    //       border-bottom: 1px solid #efeff4;
    //     }
    //   }
    // }
  }
}
.btn-btm {
  margin: 100px 0;
}
</style>
