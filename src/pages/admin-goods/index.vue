<style lang="less" rel="stylesheet/less">
.goods-wrapper{
  padding: 0 30/75rem;
  background-color: #fff;
  .title {
    display: flex;
    line-height: 1.5;
    justify-content: space-between;
    span{
      font-size: 32/75rem;
      color: #ffb230;
      line-height: 80/75rem;
      &:last-child{
        width:126/75rem;
      }
    }
  }
  .goods-list{
    .goods-list-item{
      display: flex;
      align-items: center;
      padding: 30/75rem 0;
      .goods-info{
        flex: 1;
        line-height: 1.5;
        .item{
          font-size: 28/75rem;
          &:first-child{
            font-size: 32/75rem;
            color: #333;
          }
        }
      }
      .goods-control{
        a{
          display: inline-block;
          margin-left: 15/75rem;
        }
        .edit {
          width: 46/75rem;
          height: 46/75rem;
          vertical-align: middle;
        }
      }
    }

  }

}
 .goods-type{
    float: right;
    margin-right: 10px;
    padding: 6px 20px;
  }
  .fruit-select-menu{
    display: inline-block;
    position: fixed;
    left: -30%;
    width: 42%;
    text-align: center;
    font-size: 33px;
}
.fruit-move-right{
    position: relative;
    transform: translate(42%,0px);
    transition: transform 0.35s;
  }
  .fruit-menu-move{
  transform: translate(70%,0px);
  transition: transform 0.35s;
}
</style>
<template>
  <div>
    <goga-header title="商品管理">
      <div slot="left" @click="goBack" >
        <svg>
          <use xlink:href="#back"></use>
        </svg>
      </div>
      <div slot="bottom">
        <search v-on:search="search"></search>
      </div>
      <div slot="right" >
        <div @click='goright' class="goods-type">
          <i class="el-icon-menu"></i>
        </div>
        <router-link :to="{name:'adminGoodsAdd'}">
          <svg>
            <use xlink:href="#add"></use>
          </svg>
        </router-link>
      </div>
    </goga-header>
    <div style="overflow:hidden">
      <div class="fruit-select-menu" :class="{ 'fruit-menu-move': isMove }">
        <addMenu v-on:getTypes="getType"></addMenu>
      </div>
    <div class=" goods-wrapper" :class="{ 'fruit-move-right': isMove }">
      <div class="title">
        <span>名称</span>
        <span>操作</span>
      </div>
      <div class="goods-list" v-for="(item, index) in goodsResult" :key="item.id">
        <div class="goods-list-item">
          <div class="goods-info">
            <div class="item"> {{item.goName}}
              <small v-if="item.goTag==1">(热销)</small>
              <small v-if="item.goTag==2">(当季)</small>
              <small v-if="item.goTag==3">(新品)</small>
              <small v-if="item.goTag==4">(特价)</small>
            </div>
            <div class="item">规格：{{item.goUnit}}</div>
            <div class="item">价格： ¥{{item.goPrice | price}}</div>
          </div>
          <div class="goods-control">
            <router-link :to="{name:'adminGoodsHistory',params:{id: item.goSn}}">
              <svg class="edit">
                <use xlink:href="#history"></use>
              </svg>
            </router-link>
            <router-link :to="{name:'adminGoodsEdit',params:{id: item.goSn}}">
              <svg class="edit">
                <use xlink:href="#edit"></use>
              </svg>
            </router-link>
            <a href="#"  @click="deleteGoods(item.id, index)">
              <svg class="edit">
                <use xlink:href="#delete"></use>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
    </div>

  </div>
</template>

<script>
  import {mapGetters} from 'vuex'
  import api from '@/api'
  import gogaHeader from '@/components/gogaHeader.vue'
  import search from '@/components/search.vue'
  import addMenu from  '../shop-jinhuo/add-menu'
  export default {
    components:{
      gogaHeader,
      search,
      addMenu
    },
    data () {
      return {
        key: '',
        goodsLists:[],
        isMove: false
      }
    },
    computed: {
      ...mapGetters({
        goodsList: 'admin/goods/getGoods',
        getUser: 'global/getUser'
      }),
      goodsResult () {
        return this.goodsLists.filter((item)=> {
          return item.goName.indexOf(this.key)>=0
        });
      }
    },
    mounted () {
      if(this.goodsList.length == 0) {
        this.$store.dispatch('admin/goods/getGoods');
      }
      this.goodsResults()
    },
    methods: {
      goBack() {
        this.$router.go(-1);
      },
      search(key) {
        this.key = key;
      },
      deleteGoods(id, index) {
        let _this = this;
        this.$confirm({
          title: '确认删除',
          message: ''
        }).then(function(){
          _this.$store.dispatch('admin/goods/delete', {index, id})
        }).catch(function () {
        });
      },
      goright () {
        this.isMove = true;
      },
      async getType (item) {
        this.goodsLists = []
        let {data: {StatusCode, goodsList}} = await api.get('api/storeUse/storeManager/allGoodsList.ashx', { goodsType: item });
        if( StatusCode == '200') {
          this.goodsLists = goodsList
        }
        this.isMove = false;
      },
      async getType (item) {
        this.goodsLists = []
        let {data: {StatusCode, goodsList}} = await api.get('api/storeUse/storeManager/allGoodsList.ashx', { goodsType: item });
        if( StatusCode == '200') {
          this.goodsLists = goodsList
        }
        this.isMove = false;
      },
      async goodsResults () {
        let {data: {StatusCode, goodsList}} = await api.get('api/storeUse/storeManager/allGoodsList.ashx');
        if( StatusCode == '200') {
          this.goodsLists = goodsList;
        }
      },
    }
  }
</script>

