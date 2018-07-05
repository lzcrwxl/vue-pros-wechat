<!-- 我的页面 -->
<template>
  <div>
    <header></header>
    <div class="member-top">
      <div class="member-top-middle">
        <img src="@/assets/imgs/user-avatar.png" /><br/>
        <a href="#">查看个人详情</a>
      </div>
      <span class="member-message"><i class="icon icon-message"><img src="@/assets/imgs/icon-message.png" /></i>提醒</span>
    </div>
    <div class="member-content">
      <group>
        <cell title="培训记录" islink></cell>
        <cell title="我的证书" islink></cell>
      </group>
    </div>
  </div>
</template>

<script>
import { Group, Cell } from 'vux'
export default {
  data () {
    return {
    }
  },

  components: {
    Group,
    Cell
  },

  computed: {},

  mounted: {},

  methods: {}
}

</script>
<style lang='scss' scoped>
.member-top {
  // background: url('@/assets/imgs/member-top-bg.png') no-repeat center center;
  background: #4bcc66;
  width: 100%;
  height: 280px;
  position: relative;
}
.member-top-middle {
  text-align: center;
  padding-top: 50px;
  img {
    width: 120px;
    height: 120px;
  }
  a {
    margin-top: 30px;
    color: #fff;
    font-size: 28px;
  }
}
.member-message {
  position: absolute;
  color: #fff;
  font-size: 24px;
  top: 30px;
  right: 30px;
}
.icon-message {
  display: inline-block;
  width: 24px;
  margin: 5px;
  img {
    width: 100%;
  }
}
.member-content {
  cell {
    height: 98px;
    line-height: 98px;
  }
}
</style>
