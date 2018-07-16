<!-- 岗位招聘 -->
<template>
  <div id="job-ctn">
    <div class="jobs-list">
      <grid :show-lr-borders="false" :show-vertical-dividers="false" :cols="4">
        <grid-item link="" :label="item.label" v-for="item in types" :key="item.label">
          <img slot="icon" :src="item.url" alt="">
        </grid-item>
      </grid>
    </div>
  </div>
</template>

<script>
import { Grid, GridItem } from 'vux'

export default {
  data () {
    return {
      types: [
        {
          label: '月嫂',
          link: '',
          url: require('@/assets/imgs/icon-yuesao.png')
        },
        {
          label: '育儿嫂',
          link: '',
          url: require('@/assets/imgs/icon-yuersao.png')
        },
        {
          label: '保姆',
          link: '',
          url: require('@/assets/imgs/icon-baomu.png')
        },
        {
          label: '钟点工',
          link: '',
          url: require('@/assets/imgs/icon-zhongdiangong.png')
        },
        {
          label: '医院护工',
          link: '',
          url: require('@/assets/imgs/icon-hugong.png')
        },
        {
          label: '老人陪护',
          link: '',
          url: require('@/assets/imgs/icon-peihu.png')
        },
        {
          label: '家庭管家',
          link: '',
          url: require('@/assets/imgs/icon-guanjia.png')
        },
        {
          label: '敬请期待',
          link: '',
          url: require('@/assets/imgs/icon-qidai.png')
        }
      ]
    }
  },

  components: {
    Grid,
    GridItem
  },

  computed: {},

  mounted: {},

  methods: {}
}
</script>
<style lang='scss' scoped>
.jobs-list {
  background: #fff;
}
</style>
