<template>
  <div class="down-page">
    <div class="box">
      <h1>订货数据下载</h1>
      <form action="/api/storeUse/stockManager/printPurchase.aspx" method="post"  class="form-wrapper cf" target="_blank">
        <input type="hidden" :value="chooseDate" name="date" id="date">
        <input type="hidden" :value="token" name="token" id="cookie">
        <datepicker language="zh" format="yyyy年MM月dd日" v-model="date" required></datepicker>
        <button type="submit">下载</button>
      </form>
    </div>
  </div>
</template>

<script>
  import {cookie} from '@/utils'
  import Datepicker from 'vuejs-datepicker';
  export default{
    components: {
      Datepicker
    },
    data() {
      return {
        date: '',
        token: ''
      }
    },
    computed: {
      chooseDate: function () {
        return new Date(this.date).getTime()/1000
      }
    },
    created() {
      let today = new Date();
      this.date = new Date(today.getFullYear(), today.getMonth(), today.getDate())
      this.token = cookie('TOKEN')
    }
  }
</script>
<style lang="less" rel="stylesheet/less" >
  .down-page{
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: center;
    h1 {
      text-align: center;
      margin-bottom: 20px;
      font-size: 30px;
    }
    .form-wrapper {
      width: 360px;
      padding: 15px;
      background: rgba(0,0,0,.2);
      -moz-border-radius: 10px;
      -webkit-border-radius: 10px;
      border-radius: 10px;
      display: flex;
      .vdp-datepicker{
        width: 220px;
        height: 40px;
        float: left;
        font: bold 15px 'Raleway', sans-serif;
        border: 0;
        background: #eee;
        background-image: initial;
        background-position-x: initial;
        background-position-y: initial;
        background-size: initial;
        background-repeat-x: initial;
        background-repeat-y: initial;
        background-attachment: initial;
        background-origin: initial;
        background-clip: initial;
        background-color: rgb(238, 238, 238);
        -moz-border-radius: 3px 0 0 3px;
        -webkit-border-radius: 3px 0 0 3px;
        border-radius: 3px 0 0 3px;
        div{
          input {
            width: 220px !important;
            height: 40px !important;
          }
        }

      }
      button{
        overflow: visible;
        position: relative;
        float: right;
        border: 0;
        padding: 0;
        cursor: pointer;
        height: 40px;
        width: 110px;
        font: bold 15px/40px 'Raleway', sans-serif;
        color: #fff;
        text-transform: uppercase;
        background: #d83c3c;
        -moz-border-radius: 0 3px 3px 0;
        -webkit-border-radius: 0 3px 3px 0;
        border-radius: 0 3px 3px 0;
        text-shadow: 0 -1px 0 rgba(0, 0 ,0, .3);
      }

    }
  }


</style>
