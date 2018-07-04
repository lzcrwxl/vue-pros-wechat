<!-- 注册&登录页 -->
<template>
  <div id="">
     <Header></Header>
     <div class="form-pannel">
       <form action="">
         <ul class="form-list">
           <li>
             <label for=""></label>
             <input type="text" placeholder="请输入手机号"/>
           </li>
         </ul>
       </form>
     </div>
  </div>
</template>

<script>
import Header from '@/components/Header.vue';

export default {
  data () {
    return {

    }
  },
  components:{
    Header
  }
}

</script>
<style lang='scss' scoped>
  .form-list{
    margin: 20px 0 90px;
    padding: 0 20px;
    li{
      height: 110px;
      display: flex;
      align-items: center;
    }
  }
</style>
