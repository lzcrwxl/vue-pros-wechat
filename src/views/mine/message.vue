<!-- 培训记录 -->
<template>
    <div>
        <x-header title="消息中心">
            <a href="#" slot="right" class="a-filter">筛选<x-icon type="ios-arrow-down"></x-icon></a>
        </x-header>
        <div class="member-content">
            <group class="message-box">
                <cell>
                    <i slot="icon" class="title-dot"></i>
                    <span slot="title">考试提醒</span>
                    <span slot="value">2018-7-10</span>
                </cell>
                <cell-form-preview :list="list"></cell-form-preview>
            </group>
            <group class="message-box">
                <cell value="2018-7-10">
                    <i slot="icon" class="title-dot"></i>
                    <span slot="title">考试结果通知</span>
                </cell>
                <cell-form-preview :list="list"></cell-form-preview>
            </group>
            <group class="message-box">
                <cell value="2018-7-10">
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
        vertical-align: middle;
    }
    .a-filter {
        color: #666 !important;
        text-decoration: none;
        .vux-x-icon {
            vertical-align: middle;
            fill: #666;
        }
    }
    .message-box {
        padding: 0 20px;
    }
    .weui-cell__ft {
        color: #aaa !important;
    }
    .weui-form-preview__value {
        text-align: left !important;
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
