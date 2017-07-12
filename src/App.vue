<template>
  <div id="app">
    <svg xmlns="http://www.w3.org/2000/svg" style="position: absolute;width: 0;height:0;left:0;top: 0">
      <symbol id="back" viewBox="0 0 1024 1024">
        <path
          d="M694.272 809.024l-295.808-286.848 295.36-274.752a32 32 0 0 0-43.616-46.848l-320 297.696a32 32 0 0 0-0.512 46.4l320 310.304a32.032 32.032 0 0 0 44.576-45.952"
          p-id="2241"></path>
      </symbol>
      <symbol id="right" viewBox="0 0 1024 1024">
        <path
          d="M693.792 498.24l-320-297.664a32 32 0 0 0-43.584 46.848l295.36 274.752-295.84 286.848a31.968 31.968 0 1 0 44.544 45.92l320-310.272a31.968 31.968 0 0 0-0.48-46.4"
          p-id="2114"></path>
      </symbol>
      <symbol id="edit" viewBox="0 0 1024 1024">
        <path d="M999.1,182.5L546.9,634.8c-18.1,18.1-47.8,18.1-63.6,0c-18.1-18.1-18.1-47.8,0-63.6l452.3-452.2
		c18.1-18.1,47.8-18.1,63.6,0C1015.1,134.8,1015.1,164.2,999.1,182.5L999.1,182.5z M603.8,102.9H149.1c-25,0-45.5,20.5-45.5,45.5
		v727.2c0,25,20.5,45.5,45.5,45.5H740c25,0,45.5-20.5,45.5-45.5V648.4c0-25,20.5-45.5,45.5-45.5s45.5,20.5,45.5,45.5v272.8
		c0,50-40.9,90.9-90.9,90.9H103.7c-50,0-90.9-40.9-90.9-90.9V102.9c0-50,40.9-90.9,90.9-90.9h500c25,0,45.5,20.5,45.5,45.5
		S628.8,102.9,603.8,102.9L603.8,102.9z"/>
      </symbol>
      <symbol id="add" viewBox="0 0 1024 1024">
        <path d="M640 576l128 0 0 384-128 0L640 576z" p-id="5181"></path>
        <path d="M512 704l384 0 0 128L512 832 512 704z" p-id="5182"></path>
        <path
          d="M896 512 768 512 768 192 448 192 448 320 320 320 320 832 448 832 448 960 192 960 192 256 384 64 896 64Z"
          p-id="5183"></path>
      </symbol>
      <symbol id="close" viewBox="0 0 1024 1024">
        <path d="M544.448 499.2l284.576-284.576a32 32 0 0 0-45.248-45.248L499.2 453.952 214.624 169.376a32 32 0 0 0-45.248 45.248l284.576 284.576-284.576 284.576a32 32 0 0 0 45.248 45.248l284.576-284.576 284.576 284.576a31.904 31.904 0 0 0 45.248 0 32 32 0 0 0 0-45.248L544.448 499.2z" p-id="2114"></path>
      </symbol>
      <symbol id="ok" viewBox="0 0 1024 1024">
        <path d="M822.464 265.344a28.256 28.256 0 0 0-43.072 1.312l-352.96 417.664-181.92-212.992a28.288 28.288 0 0 0-43.104-1.088 37.12 37.12 0 0 0-0.96 48.256l204.096 238.944c5.76 6.752 13.696 10.56 22.016 10.56h0.096a29.088 29.088 0 0 0 22.048-10.656L823.68 313.6c11.52-13.728 11.008-35.328-1.216-48.256" p-id="2241"></path>
      </symbol>
      <symbol id="delete" viewBox="0 0 1024 1024">
        <path d="M113.777778 199.111111 909.226667 199.111111C924.936098 199.111111 937.671111 186.3761 937.671111 170.666667 937.671111 154.957234 924.936098 142.222222 909.226667 142.222222L113.777778 142.222222C98.068345 142.222222 85.333333 154.957234 85.333333 170.666667 85.333333 186.3761 98.068345 199.111111 113.777778 199.111111L113.777778 199.111111Z" p-id="2451"></path><path d="M369.777778 347.534222 369.777778 824.888889C369.777778 840.59832 382.512791 853.333333 398.222222 853.333333 413.931654 853.333333 426.666667 840.59832 426.666667 824.888889L426.666667 347.534222C426.666667 331.824789 413.931654 319.089778 398.222222 319.089778 382.512791 319.089778 369.777778 331.824789 369.777778 347.534222L369.777778 347.534222Z" p-id="2452"></path><path d="M597.333333 345.514667 597.333333 824.888889C597.333333 840.59832 610.068346 853.333333 625.777778 853.333333 641.487209 853.333333 654.222222 840.59832 654.222222 824.888889L654.222222 345.514667C654.222222 329.805234 641.487209 317.070222 625.777778 317.070222 610.068346 317.070222 597.333333 329.805234 597.333333 345.514667L597.333333 345.514667Z" p-id="2453"></path><path d="M341.333333 113.777778 658.915556 113.777778C674.624987 113.777778 687.36 101.042766 687.36 85.333333 687.36 69.6239 674.624987 56.888889 658.915556 56.888889L341.333333 56.888889C325.6239 56.888889 312.888889 69.6239 312.888889 85.333333 312.888889 101.042766 325.6239 113.777778 341.333333 113.777778L341.333333 113.777778Z" p-id="2454"></path><path d="M796.444444 199.111111 796.444444 914.602667C796.444444 927.878124 785.655902 938.666667 772.380444 938.666667L251.619556 938.666667C238.3441 938.666667 227.555556 927.878124 227.555556 914.602667L227.555556 199.111111C227.555556 183.401678 214.820544 170.666667 199.111111 170.666667 183.401678 170.666667 170.666667 183.401678 170.666667 199.111111L170.666667 914.602667C170.666667 959.296987 206.925234 995.555556 251.619556 995.555556L772.380444 995.555556C817.074765 995.555556 853.333333 959.296987 853.333333 914.602667L853.333333 199.111111C853.333333 183.401678 840.59832 170.666667 824.888889 170.666667 809.179457 170.666667 796.444444 183.401678 796.444444 199.111111L796.444444 199.111111Z" p-id="2455"></path>
      </symbol>
      <symbol id="calendar" viewBox="0 0 1024 1024">
        <path d="M890.12736 145.672192 846.738432 145.672192l0-12.89216c0-38.643712-31.466496-70.234112-69.922816-70.234112l-1.031168 0c-38.458368 0-69.922816 31.5904-69.922816 70.234112l0 12.89216L319.162368 145.672192l0-12.89216c0-38.643712-31.465472-70.234112-69.922816-70.234112l-1.062912 0c-38.45632 0-69.922816 31.5904-69.922816 70.234112l0 12.89216-43.295744 0c-38.458368 0-69.922816 31.622144-69.922816 70.206464l0 671.446016c0 38.644736 31.465472 70.23616 69.922816 70.23616l755.16928 0c38.458368 0 69.922816-31.591424 69.922816-70.23616L960.050176 215.878656C960.050176 177.294336 928.585728 145.672192 890.12736 145.672192zM733.830144 132.779008c0-23.222272 18.792448-42.138624 41.954304-42.138624l1.031168 0c23.130112 0 41.954304 18.917376 41.954304 42.138624l0 124.926976c0 23.22432-18.824192 42.139648-41.954304 42.139648l-1.031168 0c-23.161856 0-41.954304-18.915328-41.954304-42.139648L733.830144 132.779008zM206.22336 132.779008c0-23.222272 18.792448-42.138624 41.954304-42.138624l1.062912 0c23.098368 0 41.954304 18.917376 41.954304 42.138624l0 124.926976c0 23.22432-18.855936 42.139648-41.954304 42.139648l-1.062912 0c-23.161856 0-41.954304-18.915328-41.954304-42.139648L206.22336 132.779008zM890.12736 901.404672l-755.16928 0c-7.584768 0-13.984768-6.524928-13.984768-14.08L120.973312 393.649152l783.137792 0 0 493.67552C904.111104 894.879744 897.712128 901.404672 890.12736 901.404672z" p-id="2337"></path><path d="M223.755264 494.199808l129.024 0 0 63.488-129.024 0 0-63.488Z" p-id="2338"></path><path d="M449.035264 494.199808l128 0 0 63.488-128 0 0-63.488Z" p-id="2339"></path><path d="M673.291264 494.199808l125.952 0 0 63.488-125.952 0 0-63.488Z" p-id="2340"></path><path d="M223.755264 623.223808l129.024 0 0 62.464-129.024 0 0-62.464Z" p-id="2341"></path><path d="M449.035264 623.223808l128 0 0 62.464-128 0 0-62.464Z" p-id="2342"></path><path d="M673.291264 623.223808l125.952 0 0 62.464-125.952 0 0-62.464Z" p-id="2343"></path><path d="M223.755264 749.175808l129.024 0 0 65.536-129.024 0 0-65.536Z" p-id="2344"></path><path d="M449.035264 749.175808l128 0 0 65.536-128 0 0-65.536Z" p-id="2345"></path><path d="M673.291264 749.175808l125.952 0 0 65.536-125.952 0 0-65.536Z" p-id="2346"></path>
      </symbol>
      <symbol id="history" viewBox="0 0 1024 1024">
        <path d="M514.258948 956.259176c-38.820144 0-77.887928-5.116531-116.491131-15.484669C159.041738 876.810706 16.833899 630.532627 80.824305 391.793244 111.822296 276.137131 185.989483 179.480744 289.649378 119.607098 393.391137 59.733453 514.204713 43.852764 629.819894 74.822103c238.727103 63.962777 380.932895 310.25416 316.972165 549.034475-10.972912 40.873919-27.961842 80.351026-50.447972 117.311823-6.457062 10.533914-20.191878 13.898545-30.80561 7.469112-10.56052-6.456039-13.898545-20.243043-7.496741-30.832216 20.300348-33.267685 35.565007-68.805062 45.468564-105.546871 27.853371-104.112196 13.570063-212.846666-40.323381-306.165028-53.868885-93.332688-140.866285-160.086022-244.966201-187.977255-104.07024-27.864628-212.791407-13.582343-306.136376 40.312124-93.345991 53.882188-160.100348 140.880611-187.950649 244.964154-57.615209 214.856439 70.365604 436.540378 285.23637 494.102375 92.578512 24.839735 188.387601 16.194844 274.15601-24.02109 7.031137-3.28379-85.685521-57.507762-85.685521-57.507762l28.015054-28.01403 128.937604 71.240531c0 0 3.092431 24.348548-7.441483 30.80561C675.561681 933.825234 595.512531 956.259176 514.258948 956.259176z" p-id="2345"></path><path d="M541.809421 255.67203l0 280.147468c0 12.379958-15.621792 28.015054-28.015054 28.015054-12.392238 0-28.015054-15.635095-28.015054-28.015054L485.779314 255.67203 541.809421 255.67203z" p-id="2346"></path><path d="M513.794367 507.804445l224.11736 0 0 56.029084L513.794367 563.833529c-12.392238 0-22.406313-15.635095-22.406313-28.015054C491.387032 523.438517 501.401106 507.804445 513.794367 507.804445z" p-id="2347"></path>
      </symbol>
      <symbol id="check" viewBox="0 0 1024 1024">
        <path d="M786.9 371.2L454.5 703.6c-7.7 7.7-20.3 10.1-33 10.1h-5c-12.7 0-25.3-5-33-10.1L242 562.1c-11.2-11.2-16.6-27.8-11.6-42.7 6.3-18.7 22.8-23.9 33.7-23.9 10.1 0 20.3 5.1 25.3 10.1l121.9 121.9c2.5 2.5 5.1 2.5 7.7 2.5 2.5 0 5 0 7.7-2.5l307-307c7.7-7.7 17.8-10.1 25.3-10.1 10.1 0 20.3 5.1 25.3 10.1 7.7 7.7 10.1 17.8 10.1 25.3 2.7 10.2 0 17.8-7.5 25.4" fill="#FFB230" p-id="3505"></path><path d="M805.2 1012h-584C105.6 1012 12 918.3 12 802.8V221.2C12 105.7 105.8 12 221.2 12h581.2c112.7 0 206.7 92.6 209.5 206.4V805c0.1 114-92.7 207-206.7 207z m-584-956.5c-91.5 0-165.8 74.2-165.8 165.8v581.5c0 91.5 74.2 165.7 165.7 165.7H805c90.1-0.1 163.3-73.5 163.3-163.6v-586C966.2 129 891.9 55.5 802.5 55.5H221.2z" fill="#FFB230" p-id="3506"></path>
      </symbol>
      <symbol id="check-o" viewBox="0 0 1024 1024">
        <path d="M805.2 1012h-584C105.6 1012 12 918.3 12 802.8V221.2C12 105.7 105.8 12 221.2 12h581.2c112.7 0 206.7 92.6 209.5 206.4v586.5c0.1 114.1-92.7 207-206.7 207.1z m-584-956.5c-91.5 0-165.8 74.2-165.8 165.8v581.5c0 91.5 74.2 165.7 165.7 165.7H805c90.1-0.1 163.3-73.5 163.3-163.6v-586C966.2 129 891.9 55.5 802.5 55.5H221.2z" fill="#B2B2B2" p-id="3627"></path>
      </symbol>
      <symbol id="add2" viewBox="0 0 1024 1024">
        <path d="M895.531061 485.788536 535.640488 485.788536 535.640488 125.897963c0-13.5716-11.001648-24.573248-24.573248-24.573248s-24.573248 11.001648-24.573248 24.573248l0 359.890572L126.604444 485.788536c-13.5716 0-24.573248 11.001648-24.573248 24.573248s11.001648 24.573248 24.573248 24.573248l359.889548 0 0 359.890572c0 13.5716 11.001648 24.573248 24.573248 24.573248s24.573248-11.001648 24.573248-24.573248L535.640488 534.934007l359.890572 0c13.5716 0 24.573248-11.001648 24.573248-24.573248S909.102661 485.788536 895.531061 485.788536z" p-id="3101"></path>
      </symbol>
      <symbol id="minus" viewBox="0 0 1024 1024">
        <path d="M895.531061 534.934007 126.604444 534.934007c-13.5716 0-24.573248-11.001648-24.573248-24.573248s11.001648-24.573248 24.573248-24.573248l768.926616 0c13.5716 0 24.573248 11.001648 24.573248 24.573248S909.102661 534.934007 895.531061 534.934007z" p-id="3228"></path>
      </symbol>
      <symbol id="quit" viewBox="0 0 1024 1024">
        <path d="M589.929884 882.556571 139.836839 882.556571 139.836839 142.797263 589.929884 142.797263l0 184.940083 72.01108 0L661.940964 153.892973c0-46.971801-37.08871-85.078701-82.835613-85.078701L150.649092 68.814272c-45.740764 0-82.829474 38.1069-82.829474 85.078701l0 717.573006c0 46.965661 37.08871 85.072561 82.829474 85.072561l428.457282 0c45.746904 0 82.835613-38.1069 82.835613-85.072561l0-173.84949L589.929884 697.616488 589.929884 882.556571zM911.618467 470.800669 755.618507 310.574455l-43.929512 45.125757 116.822682 119.988792L476.734822 475.689003l0 73.975828 358.084515 0-123.131365 126.480646 43.929512 45.107337 167.05576-171.589007 32.857339-33.750685L911.618467 470.800669z" p-id="2459"></path>
      </symbol>
    </svg>
    <transition name="fade" mode="out-in">
      <router-view>
      </router-view>
    </transition>
    <transition name="loading">
      <div class="gxb-loading"  v-show="loading" >
        <img src="./assets/loding.gif"alt="" >
      </div>
    </transition>
    <div class="vue-toast-manager_container">
      <transition-group name="toast" tag="div">
        <div class="vue-toast_container " v-for="item in toast" :key="item.id">
          <div class="vue-toast_message">
            <span>{{item.text}}</span> <!---->
          </div>
        </div>
      </transition-group>
    </div>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'
  export default {
    computed: {
      ...mapGetters({
        toast: 'global/toast',
        loading: 'global/loading',
      })
    }
  }
</script>

<style lang="less" rel="stylesheet/less">

  *, :after, :before {
    box-sizing: inherit;
    -webkit-tap-highlight-color: transparent
  }
  html {
    min-height: 100%;
    box-sizing: border-box;
    color: #666;
    font-family: Helvetica Neue, Tahoma, Arial, PingFangSC-Regular, Hiragino Sans GB, Microsoft Yahei, sans-serif;
    line-height: 1.2;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    -webkit-font-smoothing: antialiased;
    -ms-touch-action: manipulation;
    touch-action: manipulation;
    -webkit-text-size-adjust: none;
    -ms-text-size-adjust: none;
    text-size-adjust: none;
    font-size: 12px;
  }

  body, button, dd, dl, ol, ul {
    margin: 0;
    padding: 0
  }

  body {
    background: #f0f0f0;
    min-height: 100%;
  }

  ol, ul {
    list-style: none
  }

  [data-dpr="2"] html {
    font-size: 24px;
  }

  [data-dpr="3"] html {
    font-size: 36px;
  }

  a {
    outline: none;
    color: #333;
    text-decoration: none
  }

  a, img {
    -webkit-touch-callout: none
  }

  button, input, select, textarea {
    outline: none;
    border: none;
    font-size: inherit;
    font-family: inherit
  }

  h1, h2, h3, h4, h5, h6, p {
    margin: 0;
    font-weight: 400
  }

  img {
    max-width: 100%
  }

  textarea {
    resize: none
  }

  select {
    background-color: transparent;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none
  }

  input[type=button], input[type=reset], input[type=submit] {
    -webkit-appearance: button;
    -moz-appearance: button;
    appearance: button
  }

  input:-webkit-autofill {
    box-shadow: inset 0 0 0 1.333333rem #fff
  }

  .shellAnimation {
    -webkit-animation: shellPulse 1s infinite;
    animation: shellPulse 1s infinite
  }

    #app {
      max-width: 10rem;
      margin: 0 auto;
    }
  @-webkit-keyframes shellPulse {
    0% {
      opacity: 1
    }

    50% {
      opacity: .6
    }

    to {
      opacity: 1
    }
  }

  @keyframes shellPulse {
    0% {
      opacity: 1
    }

    50% {
      opacity: .6
    }

    to {
      opacity: 1
    }
  }

  .btn {
    display: block;
    width: 100%;
    padding: 25/75rem;
    text-align: center;
    color: #fff;
    border-radius: 10/75rem;
    border: 0 none;
    font-weight: 700;
    text-transform: uppercase;
    font-size: 36/75rem;
    line-height: 1;
    &:focus, &:active:focus, &.active:focus {
      outline: 0 none;
    }
    &.btn-submit {
      background: #ffb230;
      color: #fff;
      &:hover, &:active {
        background: lighten(#ffb230, 10%);
      }
      &[disabled] {
        background: lighten(#ffb230, 10%);
      }
    }
  }
  .xxcf-switch {
    display: flex;
    align-items: center;
    .xxcf-switch-core {
      appearance: none;
      position: relative;
      width: 100/75rem;
      height: 40/75rem !important;
      border: 1px solid #e2e2e2;
      outline: 0;
      border-radius: .4rem;
      background: #e2e2e2;
      &:after, &:before {
        content: " ";
        position: absolute;
        left: 0;
        top: 0;
        transition: transform .3s;
        border-radius: 15/75rem;
      }
      &:after {
        width: 50/75rem;
        height: 35/75rem;
        background-color: #fff;
        box-shadow: 0 1px 3px rgba(0, 0, 0, .4);
      }
      &:before {
        width: 96/75rem;
        height: 35/75rem;
        background-color: #fdfdfd;
      }
      &:checked {
        border-color: #fb9f20;
        background-color: #fb9f20;
        &::before {
          transform: scale(0);
        }
        &::after {
          transform: translateX(44/75rem);
        }
      }
    }
  }

  /*toast*/
  .vue-toast-manager_container {
    position: fixed;
    width: 100%;
    z-index: 500;
    bottom: 50/75rem;
  }

  .vue-toast-manager_toasts {
    position: relative;
  }

  .vue-toast_container {
    position: absolute;
    display: none;
    transform: translateY(0);
    -webkit-transition: -webkit-transform .2s ease-out;
    transition: -webkit-transform .2s ease-out;
    transition: transform .2s ease-out;
    transition: transform .2s ease-out, -webkit-transform .2s ease-out;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    text-align: center;
    bottom: 150/75rem;
    left: 0;
    right: 0;
    &:last-child {
      display: block;
    }
  }

  .view {
    visibility: visible;
  }

  .vue-toast_container .vue-toast_message {
    background-color: rgba(0, 0, 0, .7);
    display: inline-block;
  }

  .vue-toast_message {
    padding: 15/75rem 28/75rem;
    border-radius: 30/75rem;
    color: white;
    font-family: arial, sans-serif;
  }

  .vue-toast_close-btn {
    cursor: pointer;
    position: absolute;
    right: 5px;
    top: 5px;
    width: 14px;
    height: 14px;
    opacity: .7;
    -webkit-transition: opacity .15s ease-in-out;
    transition: opacity .15s ease-in-out;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
  }

  .toast-item {
  }

  .toast-enter-active, .toast-leave-active {
    transition: all .5s;
  }

  .toast-enter, .toast-leave-active {
    opacity: 0;
  }

  .table-wrapper {
    padding: 0 48/75rem;
    background-color: #fff;
  }

  .table {
    width: 100%;
    font-size: 32/75rem;
    th {
      color: #ffb230;
      line-height: 80/75rem;
      &:first-child {
        text-align: left;
      }
      &:last-child {
        text-align: right;
      }
    }
    .edit {
      width: 46/75rem;
      height: 46/75rem;
      vertical-align: middle;
    }
    tbody {
      tr {
        td {
          text-align: center;
          padding: 20/75rem 0;
          &:first-child {
            text-align: left;
          }
          &:last-child {
            text-align: right;
          }
        }
      }
    }
  }
  .form-wrapper {
    padding: 0 30/75rem;
    font-size: 30/75rem;
    background-color: #fff;
    padding-bottom: 30/75rem;
    section {
      display: flex;
      padding: 35/75rem 0;
      position: relative;
      &:after {
        height: 1px;
        content: '';
        width: 100%;
        border-top: 1px solid #f0f0f0;
        position: absolute;
        bottom: -1px;
        right: 0;
        transform: scaleY(0.5);
        -webkit-transform: scaleY(0.5);
        z-index: 10
      }
      &.readonly {
        .from-label {
          color: #b2b2b2;
        }
        .form-control {
          color: #b2b2b2;
        }
      }
      .from-label {
        margin-right: 15/75rem;
        color: #333;
      }
      .form-control {
        flex: 1;
      }
      input[type=text], input[type=number] {

      }
    }
    .btn-group {
      display: flex;
      div{
        flex: 1;
      }
      margin-top: 67/75rem;
    }
  }

  .radio-box {
    margin-bottom: 15/75rem;
    &:last-child {
      margin-bottom: 0;
    }
    input[type="radio"] {
      display: none;
    }
    input[type="radio"] + label {
      &:before {
        content: '';
        display: inline-block;
        width: 45/75rem;
        height: 45/75rem;
        background: #fff;
        border: 16/75rem solid #b2b2b2;
        border-radius: 50%;
        vertical-align: middle;
        margin-right: 18/75rem;
      }
    }
    input[type="radio"]:checked + label {
      color: #000;
      &:before {
        border-color: #ffb230;;
      }
    }
  }

  .btn {
    display: block;
    margin: 0 auto;
    padding: 0;
    width: 90%;
    height: 80/75rem;
    border-radius: .053333rem;
    color: #fff;
    text-align: center;
    font-size: .426667rem;
    height: 80/75rem;
    line-height: 80/75rem;
    &.btn-default {
      background: #ffb230;
      border: 1px solid #ffb230;
      &:active {
        background: lighten(#ffb230, 10%);
        border-color: (lighten(#ffb230,10%));
      }
    }
    &.btn-white {
      background: #fff;
      border: 1px solid #ffb230;
      color: #ffb230;
      &:active {
        color: lighten(#ffb230, 10%);
        border-color: (lighten(#ffb230,10%));
      }
    }
  }

  @keyframes picker-close {
    0% {
      transform: translateY(0%)
    }
    100% {
      transform: translateY(100%)
    }
  }

  @keyframes picker-open {
    0% {
      transform: translateY(100%)
    }
    100% {
      transform: translateY(0)
    }
  }

  @keyframes picker-close-backdrop {
    0% {
      opacity: 1
    }
    50% {
      opacity: 1
    }
    100% {
      opacity: 0
    }
  }

  @keyframes picker-open-backdrop {
    0% {
      opacity: 0
    }
    50% {
      opacity: 1
    }
    100% {
      opacity: 1
    }
  }

  .picker-enter-active {
    animation: picker-open-backdrop 0.3s ease-out;
    .picker-wrapper {
      animation: picker-open 0.3s ease;
    }
  }

  .picker-leave-active {
    animation: picker-close-backdrop 0.3s ease-out;
    .picker-wrapper {
      animation: picker-close 0.3s ease;
    }
  }

  .picker-enter, .picker-leave-active {
    opacity: 0;
  }



  .picker-backdrop {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;

    background: rgba(0, 0, 0, 0.5);
    z-index: 999;
  }

  .picker-wrapper {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    background: transparent;
    transform: translate3d(0px, 0px, 0px);
    z-index: 9999;
    .top-content {
      display: flex;
      width: 100%;
      height: 65/75rem;
      line-height: 65/75rem;
      background-color: #fff;
      justify-content: space-between;
      align-items: center;
      padding: 0 30/75rem ;
      .handle{
        width: 40/75rem;
        height: 40/75rem;
        svg{
          width: 40/75rem;
          height: 40/75rem;
          fill: #666;
        }
      }
      .p-title{
        font-size: 32/75rem;
      }
    }
    .top-content {

    }
    .picker-content {
      position: relative;
      width: 100%;
      height: 470/75rem;
      background: white;
    }
    .picker-body {
      z-index: 1;
      position: absolute;
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: row;
      justify-content: center;
    }
    .picker-item {
      font-size: 30/75rem;
      height: 100%;
      position: relative;
      display: flex;
      flex: 1;
    }
    .picker-helper {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      display: flex;
      justify-content: center;
      flex-direction: column;
    }
    .picker-item-content {
      width: 100%;
      height: 75/75rem;
      position: absolute;
      top: 170/75rem;
      left: 0;
      right: 0;
      bottom: 0;
      transform-style: preserve-3d;
      transform-origin: center center -113.64752726415074px;
      div {
        width: 100%;
        position: absolute;
        top: 75/75rem;
        left: 0;
        right: 0;
        bottom: 0;
        transform-origin: top;
        transform-style: preserve-3d;
        transform: rotateX(-18deg);
      }
      > div {
        top: 0;
        transform: rotateX(0deg);
      }
      span {
        width: 100%;
        height: 75/75rem;
        text-align: center;
        display: block;
        line-height: 75/75rem;
        backface-visibility: hidden;
      }
    }
  }
  .bdr-bottom {
    position: relative;
    &:after{
      height: 1px;
      content: '';
      width: 100%;
      border-top: 1px solid #f0f0f0;
      position: absolute;
      bottom: -1px;
      right: 0;
      transform: scaleY(0.5);
      -webkit-transform: scaleY(0.5);
      z-index: 10
    }
  }
  .gxb-loading{
    display: block;
    position: fixed;
    left: 50%;
    top: 40%;
    width: 2rem;
    height: 2rem;
    margin-top: -1rem;
    margin-left: -1rem;
    z-index: 500;
    img{
      width: 100%;
      height: 100%;
    }
  }
  .gxb-loading{
    transition: all .2s;
    opacity: 1;
  }
  .loading-enter, .loading-leave-to {
    transform: scale(.5,.5);
    opacity: 0;
  }
  .fade-enter-active {
    transition: all .3s ease;
  }
  .fade-leave-active {
    transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }
  .fade-enter, .fade-leave-to
    /* .slide-fade-leave-active for <2.1.8 */ {
    opacity: 0;
  }
</style>
