<template>
  <div class="g-layerWrap">
    <div class="m-confirm" >
      <div class="confirm-mainWrap">
        <div class="confirm-icnWrap" v-if="icon">
          <i class="icn" :class="[icon]"></i>
        </div>
        <div class="confirm-titleWrap" v-if="title">
          <h3 class="title f-bw">{{title}}</h3>
        </div>
        <div class="confirm-ctnWrap" v-if="message">
          <p class="ctn f-bw" v-html="message"></p>
        </div>
      </div>
      <div class="confirm-btnWrap retainbt">
        <button class="btn btn-half btn-sub retainbr" :style="{color: cancelColor}" @click="onCancel()" type="button">
          {{cancelTxt}}
        </button>
        <button class="btn btn-half" :style="{color: confirmColor}" @click="onConfirm()" type="button">{{confirmTxt}}
        </button>
      </div>
    </div>
  </div>
</template>
<style lang="less" scoped>
  @import "1px_border.less";
  @import "confirm.less";
</style>
<script>
  export default{}
</script>
