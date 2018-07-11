<!-- 培训记录 -->
<template>
    <div>
        <div class="hongbao-top">
            <x-header title="我的红包"></x-header>
            <div class="hongbao-money">2.90元</div>
            <flexbox>
                <flexbox-item>
                    <div class="flex-hongbao">
                        <div class="flex-hongbao-num">19<span class="units">个</span></div>
                        <div>收到红包</div>
                    </div>
                </flexbox-item>
                <flexbox-item>
                    <div class="flex-hongbao">
                        <div class="flex-hongbao-num">00896</div>
                        <div>我的邀请码</div>
                    </div>
                </flexbox-item>
            </flexbox>
        </div>
        <div class="hongbao-list">
            <group>
                <cell title="伊恩" value="5.90元"></cell>
                <cell title="狂奔到天明" value="5.90元"></cell>
                <cell title="伊恩" value="5.90元"></cell>
                <cell title="伊恩" value="5.90元"></cell>
                <cell title="伊恩" value="5.90元"></cell>
            </group>
        </div>
    </div>
</template>

<style lang="less" scoped>
    .hongbao-top {
        background: #cc4f41;
        background-repeat: no-repeat;
        background-position: center center;
        background-size: cover;
        width: 100%;
        height: 452px;
    }
    .hongbao-money {
        font-size: 110px;
        color: #f3deb1;
        text-align: center;
        padding: 70px 0;
    }
    .flex-hongbao {
        color: #fff;
        text-align: center;
    }
    .flex-hongbao-num {
        color: #f6d7d3;
        line-height: 60px;
        font-size: 40px;
        .units {
            font-size: 12px;
        }
    }
</style>
<script>
import { Group, CellBox, CellFormPreview, Cell, XHeader, Flexbox, FlexboxItem } from 'vux'
import Header from '@/components/Header.vue'

export default {
  data () {
    return {
    }
  },
  components: {
    Header,
    Group,
    CellBox,
    Cell,
    XHeader,
    CellFormPreview,
    Flexbox,
    FlexboxItem
  },
  methods: {}
}
</script>
