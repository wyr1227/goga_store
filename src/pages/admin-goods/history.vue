<style lang="less" rel="stylesheet/less">
  .list-loading{
    text-align: center;
    padding: 10/75rem 0;
    img{
      width: 65/75rem;
      height: 65/75rem;
    }
  }
  .list-loadmore{
    text-align: center;
    padding-top: 30/75rem;
  }
  .loadmore-btn{
    width: 390/75rem;
    line-height: 2.8;
    font-size: 30/75rem;
    margin-bottom: 20/75rem;
    background-color: #ffb230;
    border-radius: 10/75rem;
    color: #fff;
    &:active{
      background-color: lighten(#ffb230,10%);
    }
  }
</style>
<template>
  <div>
    <goga-header title="历史价格">
      <div slot="left" @click="goBack">
        <svg>
          <use xlink:href="#back"></use>
        </svg>
      </div>
    </goga-header>
    <div class="table-wrapper">
      <table class="table">
        <thead>
        <tr>
          <th>名称</th>
          <th>价格</th>
          <th>修改时间</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="item in getHistory.list">
          <td>{{item.goName}}</td>
          <td>
            {{item.goPrice | price}}
          </td>
          <td>
            {{item.changeDate}}
          </td>
        </tr>
        </tbody>
      </table>
      <div v-if="getHistory.pageNum>getHistory.page">
        <div class="list-loading" v-if="loading">
          <img src="../../assets/loading-min.gif" alt="">
        </div>
        <div class="list-loadmore">
          <button class="loadmore-btn" @click="loadMore">
            加载更多
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'
  import gogaHeader from '@/components/gogaHeader.vue'
  export default {
    components:{
      gogaHeader
    },
    computed: {
      ...mapGetters({
        getUser: 'global/getUser',
        getHistory: 'admin/goods/getHistory'
      })
    },
    mounted () {
      this.fetchHistory(1);
    },
    methods: {
      goBack() {
        this.$router.go(-1);
      },
      async fetchHistory (page) {
        let id = this.$route.params.id;
        await this.$store.dispatch('admin/goods/getHistory', {page, id})
      },
      async loadMore() {
        let page = this.jifen.page + 1;
        let id = this.$route.params.id;
        if (page <= this.jifen.pageNum) {
          this.loading = true;
          await getHistory(this.$store, {page, id});
          this.loading = false;
        }
      }
    }
  }
</script>
