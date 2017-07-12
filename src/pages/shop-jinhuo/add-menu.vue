<template>
  <div>
   <ul class="first-menu">
     <li v-for="(item, index) in types" @click="getFruit(item)">
         <span>{{item}}</span>
     </li>
   </ul>
  </div>
</template>

<script>
import api from '@/api'
export default {
  data() {
    return {
      menulist: [],
      types: []
    }
  },
  mounted() {
    this.getMenu();
  },
  methods: {
    async getMenu () {
      let {data: {StatusCode, goodsTypeList}} = await api.get('api/storeUse/storeManager/goodsTypeList.ashx');
      if(StatusCode == 200) {
        this.menulist = goodsTypeList;
      }
      this.menulist.forEach(item => {
        this.types.push(item.goType)
      })
    },
    getFruit(item) {
      this.$emit('getTypes', item) 
    }
  }
}
</script>

<style>
  .first-menu li{
    margin-top: 20px;
  }
</style>
