<style lang="less" rel="stylesheet/less">
  .date-box{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 30/75rem;
    background-color: #fff;
    .left{
      font-size: 32/75rem;
      color: #ffb230;
    }
    .right{

    }
  }
  .jinhuo-wrapper{
    padding-bottom: 97/75rem;
    background-color: #fff;
  }
  .footer-jinhuo{
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    height: 98/75rem;
    display: flex;
    background-color: #fff;
    z-index: 500;

    button{
      display: block;
      width: 270/75rem;
      font-size: 38/75rem;
      color: #fff;
      height: 97/75rem;
      background-color: #ffb230;
      &:active{
        background-color: lighten(#fb9f20, 10%);
      }
    }
    .p-price{
      flex: 1;
      height:98/75rem;
      line-height: 98/75rem;
      position: relative;
      padding-left: 30/75rem;
      font-size: 30/75rem;
      color: #fb9f20;

      &:after{
        content: '';
        height: 1px;
        width: 100%;
        border-bottom: 1px solid #f0f0f0;
        position: absolute;
        top: -1px;
        right: 0;
        transform: scaleY(0.5);
        -webkit-transform: scaleY(0.5);
        z-index: 10
      }
    }
  }
</style>
<template>
  <div>
    <goga-header title="进货管理">
      <div slot="left" @click="goBack">
        <svg>
          <use xlink:href="#back"></use>
        </svg>
      </div>
      <div slot="right" >
        <router-link :to="{name:'jinhuoRecord'}" v-if="!isRecord">
          <svg>
            <use xlink:href="#calendar"></use>
          </svg>
        </router-link>
        <router-link :to="{name:'jinhuoAdd'}">
          <svg>
            <use xlink:href="#add"></use>
          </svg>
        </router-link>
      </div>
    </goga-header>
    <div>
      <div class="date-box">
        <div class="left">{{getDate}}</div>
        <div class="right">

        </div>
      </div>
    </div>
    <div v-if="getList.isLoad">
      <div class="jinhuo-wrapper" v-if="getList.list.length>0">
        <div class="jinhuo-list" v-for="(item, index) in getList.list">
          <jinhuoItem :goods="item"></jinhuoItem>
        </div>
      </div>
      <list-none v-else>没有进货列表</list-none>
    </div>
    <div class="footer-jinhuo">
      <div class="p-price">
        合计：¥{{allPrice|price}}
      </div>
      <button @click="submit" :disabled="disabled">出账</button>
    </div>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'
  import api from '@/api'
  import format from 'timestamp-format'
  import gogaHeader from '@/components/gogaHeader.vue'
  import listNone from '@/components/listNone.vue'
  import jinhuoItem from './jinhuo-item.vue'
  export default {
    components:{
      gogaHeader,
      listNone,
      jinhuoItem
    },
    data() {
      return {
        isRecord: false,
        disabled: false,
        timestamp: 0
      }
    },
    computed: {
      ...mapGetters({
        getUser: 'global/getUser',
        getDate: 'shop/jinhuo/getDate',
        getList: 'shop/jinhuo/getList'
      }),
      allPrice () {
        let price = 0;
        this.getList.list.forEach(item=>{
          price = price + item.goNum*item.goPrice
        })
        return price
      }
    },

    mounted () {
      this.isRecord = this.$route.query.record ? true : false;
      let timestamp = this.timestamp = this.$route.query.date || new Date().getTime();
      let date = this.$store.dispatch('shop/jinhuo/getDate', parseInt(timestamp));
      if(date || this.getList.length == 0 ) {
        this.$store.dispatch('shop/jinhuo/getJinhuo', timestamp);
      }
    },
    methods: {
      goBack() {
        this.$router.go(-1);
      },
      del (item, index) {
        this.$store.dispatch('shop/jinhuo/del', Object.assign(item, {index}));
      },
      async submit () {
        if(this.getList.list.length == 0) {
          this.$store.dispatch('global/toast', '列表为空');
          return
        }
        this.$store.dispatch('global/setLoading', true);
        let purchaseGoods = this.getList.list.map(item => {
          return {
            goSn: item.goSn,
            goNum: item.goNum
          }
        })
        let disabled = true;
        let {data:{StatusCode, Status}} = await api.post('api/storeUse/StoreManager/addPurchase.ashx', {
          purchaseGoods,
          pDate:  format('yyyy-MM-dd',  parseInt(this.timestamp))
        });
        if (StatusCode == '200') {
          this.$store.dispatch('global/toast', '更新成功');
        } else {
          this.$store.dispatch('global/toast', Status);
        }
        this.disabled = false;
        this.$store.dispatch('global/setLoading', false);
      }
    }
  }
</script>
