<template>
  <div>
    <svg xmlns="http://www.w3.org/2000/svg" style="position: absolute;width: 0;height:0;left:0;top: 0">
      <symbol id="man" viewBox="0 0 1024 1024">
        <path
          d="M504.2 862c-119.7 0-233.7-24.1-337.6-67.6C182.8 684.1 250.3 590.8 344 539c40.8 35.1 93.8 56.4 151.8 56.4 63.9 0 121.8-25.7 163.9-67.4 102.7 47.9 178.4 144.1 197.6 259.6-108 47.7-227.4 74.4-353.1 74.4z m-8.3-300c-110.5 0-200-89.5-200-200s89.5-200 200-200 200 89.5 200 200-89.6 200-200 200z"
          fill="" p-id="1504"></path>
      </symbol>
      <symbol id="lock" viewBox="0 0 1024 1024">
        <path
          d="M779.776 387.264l-57.92 0L721.856 274.56c0-115.712-94.208-209.792-209.792-209.792-115.584 0-209.664 94.08-209.664 209.792l0 112.704L244.352 387.264c-28.288 0-51.264 22.976-51.264 51.2l0 469.632c0 28.224 22.912 51.136 51.264 51.136l535.36 0c28.224 0 51.136-22.848 51.136-51.136L830.848 438.464C830.848 410.24 808 387.264 779.776 387.264zM355.904 274.56c0-86.08 70.016-156.096 156.096-156.096s156.16 70.016 156.16 156.096l0 112.704-312.32 0L355.84 274.56z"
          p-id="2228"></path>
      </symbol>
    </svg>
    <div class="login-wrapper">
      <div>
        <div class="logo">
          <img src="../../assets/logo.svg" alt="">
        </div>
        <div class="name">
          水果进货管理系统
        </div>
      </div>

      <div class="form">
        <section class="bdr-bottom">
          <label for="mAccount">
            <svg>
              <use xlink:href="#man"></use>
            </svg>
          </label>
          <input type="tel" id="mAccount" placeholder="请输入用户名" class="form-control" v-model.trim="mAccount">
        </section>
        <section >
          <label for="mPass">
            <svg>
              <use xlink:href="#lock"></use>
            </svg>
          </label>
          <input v-if="!showPwd" type="password" id="mPass" placeholder="输入秘密" v-model.trim="mPass" class="form-control">
          <input v-if="showPwd" type="text" id="mPass" placeholder="输入秘密" v-model.trim="mPass" class="form-control">
          <div class="xxcf-switch">
            <input class="xxcf-switch-core" type="checkbox"  v-model="showPwd">
          </div>
        </section>
        <button type="button" @click="submit()" class="btn btn-submit">登录</button>
      </div>
    </div>
  </div>
</template>
<script lang="babel">
  import {validate, cookie} from '@/utils'
  import api from '@/api'
  export default {
    data() {
      return {
        showPwd: false,
        mAccount: '',
        mPass: ''
      }
    },
    methods: {
      async submit () {
        if (this.mAccount == '') {
          this.$store.dispatch('global/toast', '请输入账号');
          return false;
        }
        if(this.mPass == '') {
          this.$store.dispatch('global/toast', '密码不能为空');
          return false;
        }
        let {data: {StatusCode, mType, Status, token}} = await api.post('api/StoreUse/Log/LogIn.ashx', {mAccount: this.mAccount, mPass: this.mPass});
        if (StatusCode == 200) {
          cookie('TOKEN', token);
          this.$store.dispatch('global/toast', '登录成功');
          this.$router.push({name:'index'})
        } else {
          this.$store.dispatch('global/toast', Status);
        }
      }

    }
  }
</script>
<style lang="less" rel="stylesheet/less">
  .login-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: absolute;
    background-color: #fff;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    .logo {
      width: 200/75rem;
      height: 200/75rem;
      margin: 0 auto;
      img {
        width: 100%;
      }
    }
    .name {
      font-size: 36/75rem;
      margin-top: 60/75rem;
      color: #000;
    }
    .form {
      margin-top: 197/75rem;
      width: 545/75rem;
      section {
        display: flex;
        padding: 35/75rem 0;
        align-content: center;
        label {
          display: block;
          width: 65/75rem;
          svg {
            height: 38/75rem;
            width: 38/75rem;
            fill: #b2b2b2
          }
        }
        .form-control {
          flex: 1;
          height: 38/75rem;
          line-height: 38/75rem;
          font-size: 30/75rem;
        }
      }
      .btn{
        margin-top: 90/75rem;
      }
    }
  }

</style>
