<template>
  <div class="search" >
    <form @submit.prevent="search">
      <input type="text" placeholder="输入水果名称" v-model="key">
    </form>
  </div>
</template>

<script >
  export default {
    data () {
      return {
        key: ''
      }
    },
    watch: {
      ['key'] (newValue) {
        if(newValue == '') {
          this.search();
        }
      }
    },
    methods: {
      search () {
        this.$emit('search', this.key)
      }
    }
  }
</script>

<style lang="less" rel="stylesheet/less">
  .search{
    position: relative;
    padding: 10/75rem 20/75rem ;
    font-size: 30/75rem;
    background-color: #fff;
    input{
      -webkit-appearance: textfield;
      width: 100%;
      height: 80/75rem;
      border-radius: 20/75rem;
      padding-left: 80/75rem;
      line-height:  80/75rem;
      background: url("../assets/icon-search.svg") 20/75rem center no-repeat #f0f0f0;
      background-size: 50/75rem 50/75rem;

    }
  }
</style>
