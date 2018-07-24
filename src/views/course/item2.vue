<template>
  <div class="records-ctn">
    <x-table :cell-bordered="false" style="background-color:#fff;">
      <thead>
        <tr style="background-color: #f0f0f5">
          <th>时间</th>
          <th>分数</th>
          <th>用时</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>2017-05-03
            <span class="time">17:00:12</span>
          </td>
          <td>92分</td>
          <td>49分10秒</td>
        </tr>
        <tr>
          <td>2017-05-03
            <span class="time">17:00:12</span>
          </td>
          <td>92分</td>
          <td>49分10秒</td>
        </tr>
      </tbody>
    </x-table>
  </div>
</template>
<script>
import { XTable } from 'vux'

export default {
  data () {
    return {}
  },
  components: {
    XTable
  }
}
</script>
<style lang='scss' scoped>
.time{
  color: #c8c8cc;
  vertical-align: baseline;
}
</style>
