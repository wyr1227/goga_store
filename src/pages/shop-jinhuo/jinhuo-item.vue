<style lang="less" rel="stylesheet/less">
  .jinhuo-item{
    display: flex;
    align-items: center;
    padding: 0 30/75rem;
    height: 200/75rem;

    .p-delete{
      width: 82/75rem;
      svg{
        width: 45/75rem;
        height: 45/75rem;
        fill: #aeaeae
      }
    }
    .p-info{
      flex: 1;
      font-size: 28/75rem;
      line-height: 1.5;
    }
    .num-control{
      display: flex;
      width: 282/75rem;
      height: 66/75rem;
      overflow: hidden;
      align-items: center;

      .handle {
        width:66/75rem;
        height:66/75rem;
        display: flex;
        align-items: center;
        justify-content: space-around;
        background-color: #ffb230;
        border-radius: 50%;
        svg{
          width: 30/75rem;
          height: 30/75rem;
          fill: #fff;
        }
      }

      .p-num {
        flex: 1;
        overflow: hidden;
        font-size: 30/75rem;
        input{
          width: 100%;
          color: #333;
          text-align: center;
          line-height:66/75rem;
        }
      }
    }
  }

</style>

<template>
  <div class="jinhuo-item bdr-bottom" >
    <div class="p-delete" @click="del()">
      <svg >
        <use xlink:href="#delete"></use>
      </svg>
    </div>
    <div class="p-info">
      <p>{{goods.goName}}
        <small v-if="goods.goTag==1">(热销)</small>
        <small v-if="goods.goTag==2">(当季)</small>
        <small v-if="goods.goTag==3">(新品)</small>
        <small v-if="goods.goTag==4">(特价)</small>
      </p>
      <p>规格：{{goods.goUnit}}</p>
      <p>总金额：¥{{goods.goPrice* goods.goNum|price}}</p>
    </div>
    <div class="num-control">
      <div class="handle" @click="minus">
        <svg>
          <use xlink:href="#minus"></use>
        </svg>
      </div>
      <div class="p-num">
        <input type="number" v-model.number="goods.goNum">
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
  export default{
    props: ['goods'],
    methods: {
      minus () {
        if(this.goods.goNum >1) {
          this.goods.goNum --
        } else {
          this.goods.select = false
        }
      },
      plus () {
        this.goods.goNum ++
      },
      del () {
        this.$store.dispatch('shop/jinhuo/del', this.goods.id);
      }

    }
  }
</script>
