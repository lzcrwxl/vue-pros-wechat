<!-- 底部导航 -->
<template>
  <div class="foot-tabs">
    <ul>
      <router-link :to="{name:'Course'}" tag="li">
        微课堂
      </router-link>
      <router-link :to="{name:'Job'}" tag="li">
        找工作
      </router-link>
      <router-link :to="{name:'School'}" tag="li">
        学校
      </router-link>
      <router-link :to="{name:'Mine'}" tag="li">
        我的
      </router-link>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },

  components: {},

  computed: {},

  mounted: {},

  methods: {}
}

</script>
<style lang='scss' scoped>
</style>
