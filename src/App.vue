<template>
  <div id="app">
    <router-view/>
    <footer-nav></footer-nav>
  </div>
</template>

<script>
import FooterNav from '@/components/Footer';
export default {
  name: 'App',
  components: {
    FooterNav
  }
}
</script>

<style lang="scss">
  @import 'assets/styles/global.scss';
</style>
