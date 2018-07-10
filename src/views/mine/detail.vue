<!-- 个人详情 -->
<template>
    <div>
        <x-header>个人详情</x-header>
        <div class="member-content">
            <group>
                <cell title="头像："></cell>
            </group>
            <group>
                <cell title="昵称：" value="狂奔到天明" value-align="left">
                    <span slot="child">修改</span>
                </cell>
                <cell title="手机号：" value="13834345678" value-align="left"></cell>
            </group>
            <group>
                <cell title="真实姓名：" value="张三" value-align="left"></cell>
                <cell title="身份证号：" value="320********1234" value-align="left"></cell>
            </group>
        </div>
    </div>
</template>

<script>
import {Group, CellBox, Cell} from 'vux'
import Header from '@/components/Header.vue'

export default {
  data () {
    return {}
  },
  components: {
    Header,
    Group,
    CellBox,
    Cell
  },
  methods: {}
}
</script>
