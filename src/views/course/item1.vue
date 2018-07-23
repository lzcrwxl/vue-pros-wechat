<template>
  <div class="exercise-ctn">
    <div class="exer-pannel">
      <h6>
        小练习
        <a href="#">
          进入
          <!-- <x-icon type="ios-arrow-right" class="icon-dark"></x-icon> -->
        </a>
      </h6>
      <p>随时开启，灵活练习，答疑解惑</p>
    </div>
    <div class="exer-pannel">
      <h6>
        模拟考试
        <a href="#">
          <span>90'</span> 进入</a>
      </h6>
      <p class="p-line01">判断题：0.5分/题，60题</p>
      <p>单选题：1.0分/题，70题</p>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  }
};
</script>
<style lang='scss' scoped>
.exercise-ctn {
  padding: 30px 20px;
  .exer-pannel {
    margin-bottom: 30px;
    border-radius: 12px;
    background: #fff;
    padding: 40px 30px 40px 40px;
    h6 {
      color: #323233;
      @include font-dpr(32px);
      a {
        @include font-dpr(24px);
        color: #c8c8cc;
       
      }
      justify-content: space-between;
      align-items: center;
      display: flex;
      margin-bottom: 30px;
    }
    p {
      @include font-dpr(24px);
      color: #969699;
    }
    .p-line01 {
      margin-bottom: 18px;
    }
  }
}
</style>

