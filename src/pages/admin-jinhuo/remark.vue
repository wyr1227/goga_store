<template>
  <div>
    <goga-header title="添加备注">
      <div slot="left" @click="goBack">
        <svg>
          <use xlink:href="#back"></use>
        </svg>
      </div>
      <div slot="right" >
      </div>
    </goga-header>
    <div class="form-wrapper">
      <textarea placeholder="请输入备注" v-model.trim="goRemark"></textarea>
      <div class="btn-group">
        <button class="btn btn-default" @click="submit" :disabled="disabled" >提交</button>
      </div>
    </div>
  </div>
</template>
<script>
  import _ from 'underscore'
  import api from '@/api'
  import {mapGetters} from 'vuex'
  import gogaHeader from '@/components/gogaHeader.vue'
  export default {
    components:{
      gogaHeader,
    },
    computed: {
      ...mapGetters({
        getJinhuo: 'admin/jinhuo/getList'
      })
    },
    data() {
      return {
        goRemark: '',
        disabled: false
      }
    },
    mounted () {
      let remarkId = this.$route.params.id;
      let data = this.getJinhuo.list.filter((item)=> {
        return item.id == remarkId;
      })
      if(data.length>0) {
        this.goRemark = data[0].goRemark;

      }
    },
    methods: {
      goBack() {
        this.$router.go(-1);
      },
      async submit() {
        let id = this.$route.params.id;
        let goRemark = this.goRemark;
        if (goRemark === '') {
          this.$store.dispatch('global/toast', '请输入备注');
          return;
        }
        this.disabled = true;
        this.$store.dispatch('global/setLoading', true);
        let {data: {Status, StatusCode}} = await api.post('api/StoreUse/stockManager/editOnePurchaseRemark.ashx', {id, goRemark});
        if (StatusCode === '200') {
          this.$store.dispatch('global/toast', '添加成功');
          this.goBack();
          this.$store.dispatch('admin/jinhuo/addRemark', {id, goRemark});
        } else {
          this.$store.dispatch('global/toast', Status);
        }
        this.$store.dispatch('global/setLoading', false);
        this.disabled = false;
      }
    }
  }
</script>

<style lang="less"  rel="stylesheet/less" scoped>
  .form-wrapper{
    padding: 30/75rem;
    background-color: #fff;
    margin-top: 20/75rem;
    textarea{
      width: 100%;
      padding: 20/75rem;
      font-size: 28/75rem;
      height: 150/75rem;
      line-height: 1.2;
      background-color: #f0f0f0;
      border-radius: 10/75rem;
    }
  }
</style>
