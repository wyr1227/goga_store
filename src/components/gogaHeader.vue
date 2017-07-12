<style lang="less" rel="stylesheet/less">
  .goga-header{
    position: relative;
    height: 84/75rem;
    background-color: #ffffff;
    display: flex;
    justify-content: space-between;
    h1{
      font-size: 34/75rem;
      line-height:84/75rem ;
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      color: #4d4d4d;
    }
  }
  .goga-header-left,.goga-header-right{
    height:84/75rem;
    display: flex;
    padding: 0 17/75rem;
    align-items: center;
    justify-content: space-around;
    vertical-align: top;
    color: #4d4d4d;
    font-size: 30/75rem;
    a{
      color: #4d4d4d;
    }
    svg{
      display: inline-block;
      width: 50/75rem;
      height:50/75rem;
      fill: #4d4d4d;
      vertical-align: middle;
    }
  }
</style>
<template>
  <div v-sticky="{ zIndex: 100, stickyTop: 0 }">
    <div>
      <header class="goga-header bdr-bottom">
        <div class="goga-header-left">
          <slot name="left"></slot>
        </div>
        <h1 v-if="title">{{title}}</h1>
        <div class="goga-header-right">
          <slot name="right"></slot>
        </div>
      </header>
      <div>
        <slot name="bottom"></slot>
      </div>

    </div>
  </div>
</template>
<script lang="babel">
  import VueSticky from 'vue-sticky'
  export default{
    name: 'goga-header',
    props: ['title'],
    directives: {
      'sticky': VueSticky,
    }
  }
</script>


