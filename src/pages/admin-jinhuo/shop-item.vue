<style lang="less" rel="stylesheet/less" scoped>
  .shop-item{
    font-size: 30/75rem;
    display: flex;
    justify-content: space-between;
    padding: 22/75rem 30/75rem;
  }
</style>
<template>
  <div class="shop-item bdr-bottom">
    <div class="left">{{shop.mStoreName}}</div>
    <div class="right">数量：{{shop.goNum}}</div>
  </div>
</template>

<script>
  export default {
    props: ['shop']
  }
</script>
