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
        <a class="btn-block" @click.prevent="register">开始</a>
      </div>
      <p class="tips tc">点击开始，即表示已阅读并同意
        <em>《用户服务协议》</em>
      </p>
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'

export default {
  data () {
    return {}
  },
  mounted() {},
  methods: {
    register() {
      // 显示文字
      this.$vux.toast.text("请输入手机号码")
    }
  },
  components: {
    Header
  }
}
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
      opacity: 0.9;
    }
    .smscode {
      background: $btn-gr;
      color: #fff;
    }
  }
}
.btn-block-wrapper {
  margin-top: 98px;
  text-align: center;
  margin-bottom: 29px;
  .btn-block {
    @include btn-base(690px, 84px, 32px);
    background-color: $btn-gr;
    color: #fff;
  }
}
.tips {
  font-size: 24px;
  color: #969699;
  em {
    color: $btn-gr;
  }
}
</style>
