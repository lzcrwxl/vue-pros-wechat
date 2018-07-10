<!-- 培训记录 -->
<template>
    <div>
        <x-header @header-background-color="white">培训记录</x-header>
        <div class="member-content">
            <group>
                <cell title="家政服务员" value="已报名" inline-desc="零基础家政上岗证">
                    <i slot="icon" class="title-dot"></i>
                </cell>
                <cell-form-preview :list="list" value-align="left"></cell-form-preview>
            </group>
            <group>
                <cell title="家政服务员" value="已报名" inline-desc="零基础家政上岗证">
                    <i slot="icon" class="title-dot"></i>
                </cell>
                <cell-form-preview :list="list" value-align="left"></cell-form-preview>
            </group>
            <group>
                <cell title="家政服务员" value="已报名" inline-desc="零基础家政上岗证">
                    <i slot="icon" class="title-dot"></i>
                </cell>
                <cell-form-preview :list="list" value-align="left"></cell-form-preview>
            </group>
        </div>
    </div>
</template>

<style lang="less" scoped>
    .title-dot {
        display: inline-block;
        width: 10px;
        height: 10px;
        background: black;
    }
</style>
<script>
import { Group, CellBox, CellFormPreview, Cell, Card, XHeader } from 'vux'
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
    Card,
    CellFormPreview,
    XHeader
  },
  methods: {}
}
</script>
