<!-- 培训记录 -->
<template>
    <div>
        <x-header title="我的证书">
            <a href="#" slot="right" style="color:;">更多查询</a>
        </x-header>
        <div class="member-content">
            <group>
                <cell>
                    <i slot="icon" class="title-dot"></i>
                    <span slot="title" style="color: green;">母婴护理</span>
                </cell>
                <cell-form-preview :list="list"></cell-form-preview>
            </group>
            <group>
                <cell>
                    <i slot="icon" class="title-dot"></i>
                    <span slot="title" style="color: green;">母婴护理</span>
                </cell>
                <cell-form-preview :list="list"></cell-form-preview>
            </group>
            <group>
                <cell>
                    <i slot="icon" class="title-dot"></i>
                    <span slot="title" style="color: green;">母婴护理</span>
                </cell>
                <cell-form-preview :list="list"></cell-form-preview>
            </group>
        </div>
    </div>
</template>

<style lang="less" scoped>
    .title-dot {
        display: inline-block;
        width: 10px;
        height: 10px;
        background: @theme-color;
        margin-right: 10px;
    }
</style>
<script>
import { Group, CellBox, CellFormPreview, Cell, XHeader } from 'vux'
import Header from '@/components/Header.vue'

export default {
  data () {
    return {
      list: [{
        label: '报名时间',
        value: '2018年7月10日'
      },
      {
        label: '学习周期',
        value: '90课时'
      },
      {
        label: '考核形式',
        value: '操作'
      },
      {
        label: '培训学校',
        value: '家策健康学院'
      }]
    }
  },
  components: {
    Header,
    Group,
    CellBox,
    Cell,
    XHeader,
    CellFormPreview
  },
  methods: {}
}
</script>
