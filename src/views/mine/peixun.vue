<!-- 培训记录 -->
<template>
    <div>
        <x-header @header-background-color="white">培训记录</x-header>
        <div class="member-content member-px">
            <div class="px-item">
                <div class="px-item-top">
                    <h4 class="px-item-title">家政服务员</h4>
                    <div class="px-item-desc">零基础家政上岗证</div>
                    <span class="px-item-status">已报名</span>
                </div>
                <ul class="px-params">
                    <li class="group">
                        <div class="label">报名时间</div>
                        <div class="value">2018年7月12日</div>
                    </li>
                    <li class="group">
                        <div class="label">学习周期</div>
                        <div class="value">90课时</div>
                    </li>
                    <li class="group">
                        <div class="label">考核形式</div>
                        <div class="value">操作</div>
                    </li>
                    <li class="group">
                        <div class="label">培训学校</div>
                        <div class="value">家策健康学院</div>
                    </li>
                </ul>
            </div>
            <div class="px-item">
                <div class="px-item-top">
                    <h4 class="px-item-title">家政服务员</h4>
                    <div class="px-item-desc">零基础家政上岗证</div>
                    <span class="px-item-status">已报名</span>
                </div>
                <ul class="px-params">
                    <li class="group">
                        <div class="label">报名时间</div>
                        <div class="value">2018年7月12日</div>
                    </li>
                    <li class="group">
                        <div class="label">学习周期</div>
                        <div class="value">90课时</div>
                    </li>
                    <li class="group">
                        <div class="label">考核形式</div>
                        <div class="value">操作</div>
                    </li>
                    <li class="group">
                        <div class="label">培训学校</div>
                        <div class="value">家策健康学院</div>
                    </li>
                </ul>
            </div>
            <div class="px-item">
                <div class="px-item-top">
                    <h4 class="px-item-title">家政服务员</h4>
                    <div class="px-item-desc">零基础家政上岗证</div>
                    <span class="px-item-status">已报名</span>
                </div>
                <ul class="px-params">
                    <li class="group">
                        <div class="label">报名时间</div>
                        <div class="value">2018年7月12日</div>
                    </li>
                    <li class="group">
                        <div class="label">学习周期</div>
                        <div class="value">90课时</div>
                    </li>
                    <li class="group">
                        <div class="label">考核形式</div>
                        <div class="value">操作</div>
                    </li>
                    <li class="group">
                        <div class="label">培训学校</div>
                        <div class="value">家策健康学院</div>
                    </li>
                </ul>
            </div>
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
    .member-px {
        .px-item {
            background-color: #fff;
            border-top: 1px solid #eee;
            border-bottom: 1px solid #eee;
            margin-top: 20px;
            padding: 40px;
            .px-item-top {
                position: relative;
                border-bottom: 1px solid #ddd;
                margin-bottom: 20px;
                padding-bottom: 20px;
                .px-item-title {
                    color: #333;
                    font-size: 24px;
                    line-height: 48px;
                }
                .px-item-desc {
                    color: #999;
                    font-size: 16px;
                }
                .px-item-status {
                    position: absolute;
                    right: 0;
                    top: 0;
                    color: @actionsheet-label-primary-color;
                    border: 1px solid @actionsheet-label-primary-color;
                    border-radius: 20px;
                    padding: 5px 10px;
                }
            }
            .px-params {
                .group {
                    overflow: hidden;
                    line-height: 36px;
                    &::after {
                        content: '';
                        clear: both;
                        height: 0;
                        visibility: hidden;
                    }
                }
                .label {
                    color: #666;
                    float: left;
                }
                .value {
                    color: #333;
                    float: left;
                    margin-left: 20px;
                }
            }
        }
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
