<!-- 公用头部 -->
<template>
  <header>
    <a href="#" class="back">
      <img src="@/assets/imgs/icon-back.png" alt="">
    </a>
    {{title}}
  </header>
</template>

<script>
export default {
  props: ['title'],
  data () {
    return {}
  }
}
</script>
<style lang='scss'>
header {
  background: #fff;
  position: relative;
  color: #000;
  font-size: 32px;
  height: 88px;
  color: #333;
  padding: 0 80px;
  text-align: center;
  line-height: 88px;
  border-bottom: 1px solid #eee;
  .back{
    position: absolute;
    left: 30px;
    display: inline-block;
    height: 28px;
    width: 16px;
    top: 50%;
    transform: translateY(-50%);
    img{
      width: 100%;
      height: 100%;
    }
  }
}
</style>
