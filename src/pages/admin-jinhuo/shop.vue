<style lang="less" rel="stylesheet/less" scoped>
  .goods-info{
    padding: 30/75rem;
    margin-top: 30/75rem;
    background-color: #fff;
    font-size: 32/75rem;
    display: flex;
    justify-content: space-between;
  }
  .shop-list{
    margin-top: 30/75rem;
    background-color: #fff;
  }
</style>
<template>
  <div class="shop-wrapper">
    <goga-header title="查看店铺列表">
      <div slot="left" @click="goBack" >
        <svg>
          <use xlink:href="#back"></use>
        </svg>
      </div>
    </goga-header>
    <div class="goods-info">
      <span>{{getShop.goName}}</span>
      <span>总共{{getShop.goNum}}件</span>
    </div>
    <div class="shop-list">
      <shop-item
        v-for="item in getShop.list"
        :key="item.storeSn"
        :shop="item"
      ></shop-item>
    </div>
  </div>
</template>
<script>
  import gogaHeader from '@/components/gogaHeader.vue'
  import shopItem from  './shop-item.vue'
  import {mapGetters} from 'vuex'
  export default{
    components: {
      gogaHeader,
      shopItem
    },
    computed: {
      ...mapGetters({
        getShop: 'admin/jinhuo/getShop',
      })
    },
    mounted() {
      let id = this.$route.params.id;
      this.$store.dispatch('admin/jinhuo/getShop', id)
    },
    methods: {
      goBack() {
        this.$router.go(-1);
      }
    }
  }
</script>
