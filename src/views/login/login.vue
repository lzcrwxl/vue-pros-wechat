<!-- 注册&登录页 -->
<template>
  <div id="">
    <Header></Header>
    <div class="form-pannel">
      <form action="">
        <ul class="form-list">
          <li>
            <label for="">手机号</label>
            <input type="text" placeholder="请输入手机号" class="int-lg" />
          </li>
          <li>
            <label for="">图形码</label>
            <input type="text" placeholder="请输入右侧图形码" class="int-md" />
            <img src="@/assets/imgs/captcha.png" alt="图形码" class="captcha btn-base">
          </li>
          <li>
            <label for="">验证码</label>
            <input type="text" placeholder="请输入手机号" class="int-md" />
            <button class="btn-base smscode">获取验证码</button>
          </li>
        </ul>
      </form>
      <div class="btn-block-wrapper">
        <button>开始</button>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";

export default {
  data() {
    return {};
  },
  mounted() {
    // this.$vux.toast.text('hello', 'top')
  },
  components: {
    Header
  }
};
</script>
<style lang='scss' scoped>
.form-list {
  background: #fff;
  margin: 20px 0 90px;
  padding: 0 20px;
  li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 110px;
    display: flex;
    align-items: center;
    font-size: 32px;
    border-bottom: 1px solid #f0f0f5;
    label {
      color: #646466;
      width: 124px;
    }
    input {
      flex: 1;
      font-size: 30px;
      padding-right: 130px;
    }
    .captcha {
    }
    .smscode {
      background: #31c27c;
      color: #fff;
    }
  }
}
</style>
