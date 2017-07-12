<template>
  <div>
    <goga-header title="修改商品">
      <div slot="left" @click="goBack">
        <svg>
          <use xlink:href="#back"></use>
        </svg>
      </div>
    </goga-header>
    <div>
      <div class="form-wrapper">
        <section>
          <label for="goSn" class="from-label">商品编号：</label>
          <input type="text" id="goSn" class="form-control" placeholder="输入自定义商品编号" v-model="model.goSn">
        </section>
        <section>
          <label for="goName" class="from-label">名称：</label>
          <input type="text" id="goName" class="form-control" placeholder="输入水果名称" v-model="model.goName">
        </section>
        <section>
          <label for="goUnit" class="from-label">商品规格：</label>
          <input type="text" id="goUnit" class="form-control" placeholder="输入商品单位" v-model="model.goUnit">
        </section>
        <section>
          <label for="goPrice" class="from-label">当前价格：</label>
          <input type="number" id="goPrice" class="form-control" placeholder="0.00" v-model="model.goPrice">
        </section>
        <section>
          <label   class="from-label">标签：</label>
          <div class="form-control">
            <div class="radio-box">
              <input id="tag_1" type="radio" name="tag" value="option" :value ='1'  v-model='model.goTag'>
              <label for="tag_1">热销</label>
            </div>
            <div class="radio-box">
              <input id="tag_2" type="radio" name="tag" value="option" :value ='2' v-model='model.goTag'>
              <label for="tag_2">当季</label>
            </div>
            <div class="radio-box">
              <input id="tag_3" type="radio" name="tag" value="option" :value ='3' v-model='model.goTag'>
              <label for="tag_3">新品</label>
            </div>
            <div class="radio-box">
              <input id="tag_4" type="radio" name="tag" value="option" :value ='4' v-model='model.goTag'>
              <label for="tag_4">特价</label>
            </div>
          </div>
        </section>
        <section>
          <label for="goName" class="from-label">类别：</label>
          <div class="type-control">
             <select v-model='model.goType'> 
              <option v-for="option of goTypes" :value='option.goType'>{{option.goType}}</option>
            </select>
          </div>
        </section>
        <section>
          <label for="sort" class="from-label">排序：</label>
          <input type="number" id="sort" class="form-control" placeholder="0" v-model="model.sort">
        </section>
        <section class="readonly">
          <label for="goPrice" class="from-label">时间：</label>
          <div class="form-control">{{getDate}}</div>
        </section>

        <div class="btn-group">
          <button class="btn btn-default" @click="submit" :disabled="disabled" >修改商品</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import api from '@/api'
  import {mapGetters} from 'vuex'
  import gogaHeader from '@/components/gogaHeader.vue'
  export default {
    components:{
      gogaHeader
    },
    data() {
      return {
        disabled: false,
        model: {
          goSn: '',
          goName: '',
          goPrice: '',
          goTag:0,
          goUnit: '',
          sort: 0,
          goType: '水果'
        },
        goTypes: []
      }
    },
    computed: {
      ...mapGetters({
        getUser: 'global/getUser'
      }),
      getDate () {
        let date = new Date();
        let seperator1 = "-";
        let seperator2 = ":";
        let month = date.getMonth() + 1;
        let strDate = date.getDate();
        if (month >= 1 && month <= 9) {
          month = "0" + month;
        }
        if (strDate >= 0 && strDate <= 9) {
          strDate = "0" + strDate;
        }
        var currentdate = date.getFullYear() + seperator1 + month + seperator1 + strDate;
        return currentdate;
      }
    },
    async mounted () {
      if(this.getUser.type === 0) {
        this.$router.push({name:'login'})
        return ;
      }
      this.getType();
    },
    methods: {
      goBack() {
        this.$router.go(-1);
      },
      async getType () {
        let {data:{StatusCode,goodsTypeList}} = await api.get('api/storeUse/storeManager/goodsTypeList.ashx');
        if(StatusCode === '200')
        {
          this.goTypes = goodsTypeList;
        }
        else
        {
          console.error('NOT FIND')
        }
      },
      async submit () {
        let goSn = this.$route.params.id;
        this.disabled = true;
        let {data: {StatusCode, Status}} = await api.post('api/StoreUse/stockManager/addGoods.ashx', this.model);
        if(StatusCode == 200) {
          this.$store.dispatch('global/toast', '修改成功');
          await this.$store.dispatch('admin/goods/getGoods');
          this.goBack();
        } else {
          this.$store.dispatch('global/toast', Status);
        }
        this.disabled = false;
      }
    }
  }
</script>
