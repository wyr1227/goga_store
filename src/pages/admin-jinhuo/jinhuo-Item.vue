<style lang="less" scoped rel="stylesheet/less">
  .item {
    padding: 22/75rem 30/75rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 30/75rem;
    .left{
      width: 85/75rem;
      svg{
        width: 46/75rem;
        height: 46/75rem;
        fill: #b2b2b2;
      }
    }
    .right {
      flex: 1;
    }
    .p-main {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .p-name {
      flex: 1;
      line-height: 1.5;
    }
    .p-button {
      display: block;
      width: 180/75rem;
      height: 64/75rem;
      text-align: center;
      line-height: 64/75rem;
      border: 1px solid #ffb230;
      color: #777777;
      border-radius: 10/75rem;
      margin-left: 38/75rem;
      position: relative;
      &:after {
        content: '';
        position: absolute;
        right: 9/75rem;
        bottom: 9/75rem;
        height: 24/75rem;
        width: 24/75rem;
        border-right: 1px solid #ffb230;
        border-bottom: 1px solid #ffb230;
      }
    }
    &:nth-child(odd) {
      .p-name {
      }
      .p-button {
        background-color: #ffb230;
        color: #fff;
        &:after {
          content: '';
          border-color: #fff;
        }
      }
    }
    .p-remarks{
      display: flex;
      margin-top: 24/75rem;
      align-items: center;
      height: 48/75rem;
      .t-tit{

      }
      .t-right{
        flex: 1;
        display: flex;
        align-items: center;
        p{
          flex: 1;
        }
        svg{
          width: 30/75rem;
          height: 30/75rem;
        }
      }
    }
  }
</style>

<template>
  <div  class="item bdr-bottom"  >
    <div class="left"  @click="select">
      <svg class="p-check" >
        <use :xlink:href="item.isConfirm? '#check':'#check-o'"></use>
      </svg>
    </div>
    <div class="right">
      <div class="p-main">
        <div class="p-name bdr-bottom">
          <p>{{item.goName}}</p>
          <p>数量：{{item.goAllNum}}{{item.goUnit}}</p>
        </div>
        <router-link :to="{name:'adminJinhuoShop', params:{id: item.id}}" class="p-button">查看店铺</router-link>
      </div>
      <div class="p-remarks" @click="linkRemark(item.id)">
        <div class="t-tit">
          备注：
        </div>
        <div class="t-right bdr-bottom">
          <p>{{item.goRemark}}</p>
          <svg >
            <use xlink:href="#right"></use>
          </svg>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
  import api from '@/api'
  export default {
    props: ['item'],
    methods: {
      linkRemark(id) {
        this.$router.push({name: 'adminJinhuoRemark', params:{id}})
      },
      async select() {
        if(this.item.isConfirm==0) {
          this.item.isConfirm = 1
        } else {
          this.item.isConfirm = 0
        }
        api.post('api/StoreUse/stockManager/checkOnePurchase.ashx', {id: this.item.id, check: this.item.isConfirm})
      }
    }
}
</script>
