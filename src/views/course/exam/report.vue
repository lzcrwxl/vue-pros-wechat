<template>
  <div id="report">
     <x-header :left-options="{backText: ''}">母婴护理员
    </x-header>
    <div class="report-ctn">
        <icon type="success" is-msg></icon>
        <p class="tips">恭喜你完成答题！</p>
        <div class="report-sheet">
          <h6>成绩单</h6>
          <ul>
            <li>
              <label for="">答题科目</label>
              <span>母婴护理【上岗】</span>
            </li>
            <li>
              <label for="">答题时长</label>
              <span>27分02秒</span>
            </li>
            <li>
              <label for="">成绩</label>
              <span class="score">77.5分</span>
            </li>
          </ul>
        </div>
    </div>
    <div class="report-bottom">
      <a href="" class="btn-plain">返回首页</a>
      <a href="" class="btn-fill">查看答题卡</a>
    </div>
  </div>
</template>
<script>
import { XHeader, Tab, TabItem, Radio, Group, Icon } from 'vux'

export default{
  data () {
    return {

    }
  },
  components: {
    XHeader,
    Icon
  }
}
</script>
<style lang='scss' scoped>
  .report-ctn{
    margin-top: 24px;
    background: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 80px 0 100px;
    .tips{
      margin-top: 30px;
      margin-bottom: 110px;
      color: #31c27c;
      font-size: 30px;
    }
  }
  .report-sheet{
    h6{
      text-align: center;
      color: #323232;
      font-size: 36px;
      margin-bottom: 50px;
    }
    ul{
      li{
        font-size: 32px;
        color: #333333;
        margin-bottom: 36px;
        label{
          display: inline-block;
          width: 130px;
          color: #646466;
          margin-right: 50px;
          text-align: right;
        }
        .score{
          color: #ff605f;
        }
      }
    }
  }
  .report-bottom{
    margin-top: 98px;
    display: flex;
    align-items: center;
    justify-content: center;
    .btn-plain{
      color: #969699;
    }
  }
</style>
