<style lang="less" rel="stylesheet/less">
  .date-cell{
    height: 96/75rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 30/75rem;
    font-size: 33/75rem;
    background-color: #ffffff;

    svg{
      width: 30/75rem;
      height: 30/75rem;
    }
  }
  .add-fruit-list{
    padding-bottom: 98/75rem;
    background-color: #fff;
    width: 100%;
    display: inline-block;
  }
  .fruit-move-right{
    position: relative;
    transform: translate(42%,0px);
    transition: transform 0.35s;
  }
  .fruit-select-menu{
    display: inline-block;
    position: fixed;
    left: -30%;
    width: 42%;
    text-align: center;
    font-size: 33px;
    
}
.fruit-menu-move{
  transform: translate(70%,0px);
  transition: transform 0.35s;
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
    <goga-header title="添加商品">
      <div slot="left" @click="goBack">
        <svg>
          <use xlink:href="#back"></use>
        </svg>
      </div>
      <div slot="bottom">
        <search v-on:search="search"></search>
      </div>
      <div slot="right" @click="goright">
        <i class="el-icon-menu"></i>
      </div>
      <div slot="bottom" class="date-cell  bdr-bottom" @click="dateVisible=true">
        <div class="p-title">
          进货日期：{{goDate}}
        </div>
        <svg>
          <use xlink:href="#right"></use>
        </svg>
      </div>
    </goga-header>
    <div style="overflow:hidden">
      <div class="fruit-select-menu" :class="{ 'fruit-menu-move': isMove }">
        <addMenu v-on:getTypes="getType"></addMenu>
      </div>
      <div :class="{ 'fruit-move-right': isMove }">
        <div class="add-fruit-list">
          <addItem v-for="(item, index) in goodsType" :key="index" :fruit="item"></addItem>
        </div>
      </div>
    </div>
    <div class="footer-jinhuo">
      <div class="p-price">
        合计：¥{{allPrice|price}}
      </div>
      <button @click="submit" :disabled="disabled">添加</button>
    </div>
    <picker v-model="dateVisible" :data-items="dates" @change="onDateChange">
      <div class="top-content" slot="top-content">
        <div class="handle">
        </div>
        <div class="p-title">选择进货日期</div>
        <div class="handle" @click="dateVisible=false">
          <svg>
            <use xlink:href="#ok"></use>
          </svg>
        </div>
      </div>
    </picker>
  </div>
</template>

<script>
  import picker from 'vue-3d-picker';
  import api from '@/api'
  import {mapGetters} from 'vuex'
  import format from 'timestamp-format'
  import gogaHeader from '@/components/gogaHeader.vue'
  import addItem from  './add-tiem.vue'
  import addMenu from  './add-menu.vue'
  import search from '@/components/search'
  export default {
    components: {
      gogaHeader,
      picker,
      addItem,
      addMenu,
      search
    },
    data() {
      return {
        dateVisible: false,
        fruits: [{
          values: []
        }],
        dates: [{
          values: []
        }],
        btnText: '添加商品',
        disabled: false,
        goodsList: [],
        goDate: '',
        timeTamp: 0,
        model: {
          goSn: '',
          goNum: '',
          pDate: ''
        },
        isMove: false,
        key: '',
        type:''
      }
    },
    computed: {
      ...mapGetters({
        getUser: 'global/getUser',
      }),
      allPrice () {
        let price = 0;
        let goodsList = this.goodsList.filter(item => {
          return item.select
        })
        goodsList.forEach(item=>{
          price = price + item.goNum*item.goPrice
        })
        return price
      },
      goodsResult () {
        return this.goodsList.filter((item)=> {
          return item.goName.indexOf(this.key)>=0
        });
      },
      goodsType () {
        return this.goodsList.filter((item)=> {
          if (this.key !== '' && this.key  !== null)
          {
            return item.goName.indexOf(this.key)>=0
          }
          if (item.goType !== null)
          {
            return item.goType.indexOf(this.type)>=0
          }
        });
      }
    },
    mounted() {
      if (this.getUser.type === 0) {
        this.$router.push({name: 'login'})
        return;
      }
      // console.log(this.goodsList)
      this.getFruits();
      this.getDate();
    },
    watch: {
      dateVisible: function (newValue) {
        if(!this.dateVisible) {
          this.getRecord()
        }
      },
      timeTamp: function (newValue) {
        if(!this.dateVisible) {
          this.getRecord()
        }
      }
    },
    methods: {
      goBack() {
        this.$router.go(-1);
      },
      async getFruits () {
        let {data: {StatusCode, goodsList}} = await api.get('api/storeUse/storeManager/allGoodsList.ashx');
        if(StatusCode == 200) {
          // console.log(goodsList)
          this.goodsList = goodsList;
        }
      },
      search(key) {
        this.key = key;
        // console.log(key)
      },
      getDate () {
        let values = [];
        let week = ['周日', '周一', '周二', '周三', '周四', '周五', '周六']
        for(let i=0; i<=7; i++) {
          let myDate = new Date();
          myDate.setDate(myDate.getDate()+i);
          let day = myDate.getDay();
          let tip;

          switch (i) {
            case 0:
              tip = '(今天)';
              break;
            case 1:
              tip = '(明天)';
              break
            default:
              tip = `(${week[day]})`;
              break
          }
          values.push({
            value:format('MM月dd日',  myDate.getTime()) + tip ,
            key:  format('yyyy-MM-dd',  myDate.getTime()),
            timeTamp : myDate.getTime()
          });
        }
        this.dates[0].values = values
      },
      onDateChange (result) {
        this.goDate = result.value;
        this.model.pDate = result.key;
        this.timeTamp = result.timeTamp;
      },
      getRecord () {
        this.$store.dispatch('shop/jinhuo/getJinhuoRecord', this.timeTamp);
      },
      async submit() {

        let selectList = this.goodsList.filter(item => {
          return item.select
        })
        if(selectList.length == 0) {
          this.$store.dispatch('global/toast', '请选择水果');
          return
        }
        let purchaseGoods = selectList.map(item => {
          return {
            goSn: item.goSn,
            goNum: item.goNum
          }
        })
        let disabled = true;
        let {data:{StatusCode, Status}} = await api.post('api/storeUse/StoreManager/addPurchase.ashx', {
          purchaseGoods,
          pDate: this.model.pDate
        });
        if (StatusCode == '200') {
          this.$store.dispatch('global/toast', '添加成功,点击日历查看');
          this.goBack()
        } else {
          this.$store.dispatch('global/toast', Status);
        }
        this.disabled = false;
      },
      goright () {
        this.isMove = true;
      },
      goleft () {
        this.isMove = false;
      },
      getType (item) {
        // this.goodsList = []
        // let {data: {StatusCode, goodsList}} = await api.get('api/storeUse/storeManager/allGoodsList.ashx', { goodsType: item });
        // if( StatusCode == '200') {
        //   this.$store.dispatch('shop/jinhuo/getJinhuoRecord', this.timeTamp);
        //   this.goodsList = goodsList
        // }
        this.type = item
        this.isMove = false;
      }
    }
  }
</script>
