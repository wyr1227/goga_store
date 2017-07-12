<template>
  <div>
    <goga-header title="修改商品数量">
      <div slot="left" @click="goBack">
        <svg>
          <use xlink:href="#back"></use>
        </svg>
      </div>
      <div slot="right" >
      </div>
    </goga-header>
    <div class="form-wrapper">
      <section >
        <label for="mStoreName" class="from-label">店名：</label>
        <input type="text" id="mStoreName" class="form-control" placeholder="店名" v-model="mStoreName" readonly >
      </section>
      <section >
        <label for="goName" class="from-label">商品名称：</label>
        <input type="text" id="goName" class="form-control" placeholder="店名" v-model="goName" readonly >
      </section>
      <section >
        <label for="goNum" class="from-label">水果数量：</label>
        <input type="number" id="goNum" class="form-control" placeholder="" v-model="goNum" >
      </section>
      <section class="readonly">
        <label for="goPrice" class="from-label">时间：</label>
        <div class="form-control">{{changeDate}}</div>
      </section>
      <div class="btn-group">
        <button class="btn btn-default" @click="submit" :disabled="disabled" >确定</button>
      </div>
    </div>
  </div>
</template>

<script>
  import api from '@/api'
  import {mapGetters} from 'vuex'
  import gogaHeader from '@/components/gogaHeader.vue'
  export default {
    components: {
      gogaHeader
    },
    data() {
      return {
        id: 0,
        goName: '',
        mStoreName: '',
        changeDate: '',
        goNum: '',
        disabled: false
      }
    },
    mounted() {
      this.getJinhuoInfo();
    },
    methods: {
      goBack() {
        this.$router.go(-1);
      },
      async getJinhuoInfo () {
        let id = this.$route.params.id;
        let {data:{StatusCode, purchaseInfo}} =await api.get('api/StoreUse/stockManager/OnePurchaseDetail.ashx', {id});
        if(StatusCode == '200') {
          let info = purchaseInfo[0]
          this.id = info.id;
          this.goName = info.goName;
          this.mStoreName = info.mStoreName;
          this.goNum = info.goNum;
          this.changeDate = info.changeDate;
        }
      },
      async submit () {
        let id = this.$route.params.id;
        let {data: {StatusCode, Status}} = await api.post('api/StoreUse/stockManager/editPurchase.ashx', {
          id,
          goNum: this.goNum
        })
        if(StatusCode == '200') {
          this.$store.dispatch('global/toast', '修改成功');
          this.goBack();
        } else {
          this.$store.dispatch('global/toast', Status);
        }
      }
    }
  }
</script>
