<style lang="less" rel="stylesheet/less">
  .date-box{
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #fff;
    padding: 30/75rem;
    .left{
      font-size: 32/75rem;
      color: #ffb230;
    }
    .right{
      select{
        border: 1px solid #b2b2b2;
        width: 152/75rem;
        padding: 10/75rem;
      }
    }
  }
  .admin-jinhuo-list{
    width: 100%;
    background-color: #fff;

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
        <router-link :to="{name:'adminJinhuoRecord'}" v-if="!isRecord">
          <svg>
            <use xlink:href="#calendar"></use>
          </svg>
        </router-link>
      </div>
    </goga-header>
    <div v-if="getJinhuo.isLoad">
      <div class="date-box">
        <div class="left">
          {{getDate}}
        </div>
        <div class="right">
          <select v-model="showType">
            <option :value="-1">全部</option>
            <option :value="0">未完成</option>
            <option :value="1">已完成</option>
          </select>
        </div>

      </div>
      <div class="admin-jinhuo-list" v-if="getJinhuo.list.length>0">
        <jinhuo-item v-for="(item,index) in resultList" :item="item" :key="item.id"></jinhuo-item>
      </div>
      <list-none v-else>没有进货信息</list-none>
    </div>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'
  import format from 'timestamp-format'
  import gogaHeader from '@/components/gogaHeader.vue'
  import listNone from '@/components/listNone.vue'
  import jinhuoItem from './jinhuo-Item.vue'
  export default {
    components:{
      gogaHeader,
      listNone,
      jinhuoItem
    },
    data() {
      return {
        showType: -1,
        isRecord: false,
      }
    },
    computed: {
      ...mapGetters({
        getUser: 'global/getUser',
        getDate: 'admin/jinhuo/getDate',
        getJinhuo: 'admin/jinhuo/getList'
      }),
      resultList () {
        let _this = this;
        return this.getJinhuo.list.filter(item=>{
          if(_this.showType >= 0) {
            return item.isConfirm === _this.showType
          } else {
            return true
          }

        })

      }
    },
    mounted () {
      this.isRecord = this.$route.query.record ? true : false;
      let timestamp = this.$route.query.date || new Date().getTime();
      let currtetDate = format('yyyy年MM月dd日', timestamp);
      if(currtetDate != this.getDate || this.getJinhuo.list.length == 0 ) {
        this.$store.dispatch('admin/jinhuo/getJinhuo', timestamp);
      }
      this.$store.dispatch('admin/jinhuo/getDate', parseInt(timestamp));
    },
    methods: {
      goBack() {
        this.$router.go(-1);
      },
      del (item, index) {
        this.$store.dispatch('shop/jinhuo/del', Object.assign(item), {index});
      }
    }
  }
</script>
