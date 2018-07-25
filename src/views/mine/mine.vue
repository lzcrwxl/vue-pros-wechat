<!-- 我的页面 -->
<template>
  <div>
    <div class="member-top">
      <div class="member-top-middle">
        <img src="@/assets/imgs/user-avatar.png" style="margin-bottom:10px;" /><br/>
        <router-link :to="{name: 'InfoDetail'}">
          查看个人详情
        </router-link>
      </div>
      <span class="member-message"><i class="icon icon-message"><img src="@/assets/imgs/icon-message.png" /></i>提醒</span>
    </div>
    <div class="member-content">
      <group gutter="0" class="group">
        <cell title="培训记录" is-link link="peixun">
          <img class="cell-icon" slot="icon" src="@/assets/imgs/icon-peixun.png" alt="培训记录" />
        </cell>
        <cell title="我的证书" is-link link="zhengshu">
          <img class="cell-icon" slot="icon" src="@/assets/imgs/icon-zhengshu.png" alt="我的证书">
        </cell>
      </group>
      <group class="group">
        <cell title="邀请红包" value="2.90元" is-link link="hongbao">
          <img class="cell-icon" slot="icon" src="@/assets/imgs/icon-hongbao.png" alt="邀请红包">
        </cell>
      </group>
      <group class="group">
        <cell title="消息中心" is-link link="message">
          <img class="cell-icon" slot="icon" src="@/assets/imgs/icon-xiaoxi.png" alt="消息中心">
        </cell>
      </group>
    </div>
  </div>
</template>

<script>
import { Group, Cell } from 'vux'
import MineInfoDetail from '@/views/mine/detail'

export default {
  data () {
    return {
    }
  },

  components: {
    Group,
    Cell,
    MineInfoDetail
  },

  computed: {},

  mounted: {},

  methods: {
    goDetail: function () {
      this.$router.push({
        name: 'MineInfoDetail'
      })
    }
  }
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
    text-decoration: none;
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
  margin: 10px;
  img {
    width: 100%;
  }
}
.member-content {
  .group {
    .cell-icon {
      margin-right: 10px;
      width: 32px;
      vertical-align: middle;
    }
  }
}
.vux-label {
  font-size: 30px !important;
}
</style>
