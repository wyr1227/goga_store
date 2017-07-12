<style lang="less" rel="stylesheet/less">
.empty-content{
  position: absolute;
  top: 84/75rem;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
  font-size: 30/75rem;
}
</style>
<template>
  <div class="empty-content">
    <div class="inner">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  export default {

  }
</script>

