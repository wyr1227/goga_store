<style lang="less" rel="stylesheet/less">
  .add-fruit-item{
    display: flex;
    align-items: center;
    padding: 0 30/75rem;
    height: 200/75rem;
    .p-check{
      width: 46/75rem;
      height: 46/75rem;
      fill: #b2b2b2;
    }
    .p-info {
      flex: 1;
      font-size: 30/75rem;
      padding-left: 30/75rem;
      line-height: 1.5;
    }
    .num-control{
      display: flex;
      width: 282/75rem;
      align-items: center;
      height: 66/75rem;
      overflow: hidden;

      .handle {
        width:66/75rem;
        height:66/75rem;
        display: flex;
        align-items: center;
        justify-content: space-around;
        background-color: #eee;
        border-radius: 50%;
        font-size: 30/75rem;
        svg{
          width: 30/75rem;
          height: 30/75rem;
        }
      }

      .p-num {
        flex: 1;
        overflow: hidden;
        input{
          width: 100%;
          color: #b2b2b2;
          text-align: center;
          line-height:66/75rem;
        }
      }
    }
    &.select {
      .p-check{
        fill: #ffb230;
      }
      .p-name{
        color: #4d4d4d;
      }
      .num-control{
        .handle{
          background-color: #ffb230;
          svg{
            fill: #fff;
          }
        }
        input {
          color: #333;
        }
      }
    }
  }
</style>

<template>
  <div class="add-fruit-item bdr-bottom" :class="{select: fruit.select}">
    <svg class="p-check"   @click="fruit.select = !fruit.select">
      <use :xlink:href="fruit.select? '#check':'#check-o'"></use>
    </svg>
    <div class="p-info">
      <p>{{fruit.goName}}
        <small v-if="fruit.goTag==1">(热销)</small>
        <small v-if="fruit.goTag==2">(当季)</small>
        <small v-if="fruit.goTag==3">(新品)</small>
        <small v-if="fruit.goTag==4">(特价)</small>
      </p>
      <p>规格：{{fruit.goUnit}}</p>
      <p>总金额：¥{{fruit.goPrice* fruit.goNum|price}}</p>
    </div>
    <div class="num-control">
      <div class="handle" @click="minus">
        <svg>
          <use xlink:href="#minus"></use>
        </svg>
      </div>
      <div class="p-num">
        <input type="number" v-model.number="fruit.goNum">
      </div>
      <div class="handle" @click="plus">
        <svg>
          <use xlink:href="#add2"></use>
        </svg>
      </div>
    </div>
  </div>
</template>

<script>
  import Vue from 'vue'
  import {mapGetters} from 'vuex'
  export default {
    props: ['fruit'],
    data () {
      return  {
        num: 1
      }
    },
    computed: {
      ...mapGetters({
        getRecord: 'shop/jinhuo/getRecord'
      })
    },
    watch: {
      getRecord: function (newValue) {
        let filterList = this.getRecord.filter(item => {
          return item.goSn == this.fruit.goSn
        })
        if(filterList.length>0) {
          let num = filterList[0].goNum;
          Vue.set(this.fruit, 'goNum' ,num);
          Vue.set(this.fruit, 'select', true)
        } else {
          Vue.set(this.fruit, 'goNum' ,1);
          this.fruit.select = false
        }
      }
    },
    mounted () {
      let filterList = this.getRecord.filter(item => {
        return item.goSn == this.fruit.goSn
      })
      if(filterList.length>0) {
        let num = filterList[0].goNum;
        Vue.set(this.fruit, 'goNum' ,num);
        Vue.set(this.fruit, 'select', true)
      } else {
        Vue.set(this.fruit, 'goNum' ,1);
        Vue.set(this.fruit, 'select', false)
      }

    },
    methods: {
      minus () {
        if(this.fruit.goNum >1) {
          this.fruit.goNum --
        } else {
          this.fruit.select = false
        }
      },
      plus () {
        this.fruit.goNum ++
      }
    }
  }
</script>
