<style lang="less" rel="stylesheet/less">
  .send-date {
    height: 84/75rem;
    padding: 0 30/75rem;
    display: flex;
    align-items: center;
    background-color: #fff;

    span {
      font-size: 32/75rem;
      color: #ffb230;
    }
  }

  .send-wapper {
    background-color: #fff;
    position: absolute;
    top: 168/75rem;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    overflow: hidden;
    aside {
      display: flex;
      width: 200/75rem;
      height: 100%;
      overflow: auto;
      background-color: #e6e6e6;
      ul {
        width: 100%;
        li {
          width: 100%;
          height: 103/75rem;
          line-height: 103/75rem;
          font-size: 28/75rem;
          padding: 0 20/75rem;
          span{
            display: block;
            width: 100%;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
          }
          &.current {
            background-color: #fff;
          }
        }
      }
    }
    main {
      flex: 1;
      display: flex;
      height: 100%;
      overflow: scroll;
    }
  }
  .s{
    clear: both;
  }
  .send-list {
    width: 100%;
    min-height: 100%;
    overflow: auto;
    .item {
      padding: 0 30/75rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 106/75rem;
      font-size: 30/75rem;
      .p-name {
        flex: 1;
        height: 106/75rem;
        span {
          line-height: 106/75rem;
        }
      }
      .p-button {
        display: block;
        width: 160/75rem;
        height: 64/75rem;
        text-align: center;
        line-height: 64/75rem;
        border: 1px solid #ffb230;
        color: #777777;
        border-radius: 10/75rem;
        margin-left: 38/75rem;
        position: relative;
        &:after {
          content: '';
          position: absolute;
          right: 9/75rem;
          bottom: 9/75rem;
          height: 24/75rem;
          width: 24/75rem;
          border-right: 1px solid #ffb230;
          border-bottom: 1px solid #ffb230;
        }

      }
      &:nth-child(odd) {
        .p-name {
        }
        .p-button {
          background-color: #ffb230;
          color: #fff;
          &:after {
            content: '';
            border-color: #fff;
          }
        }
      }
    }

  }
</style>
<template>
  <div>
    <goga-header title="配送列表">
      <div slot="left" @click="goBack">
        <svg>
          <use xlink:href="#back"></use>
        </svg>
      </div>
      <div slot="right">
        <router-link :to="{name:'adminSendRecord'}" v-if="!isRecord">
          <svg>
            <use xlink:href="#calendar"></use>
          </svg>
        </router-link>
      </div>
      <div slot="bottom">
        <div class="send-date bdr-bottom">
          <span>
            {{getDate}}
          </span>
        </div>
      </div>
    </goga-header>
    <div v-if="getList.isLoad">
      <div class="send-wapper" v-if="getList.list.length>0">
        <aside>
          <ul>
            <li v-for="(item,index) in getList.list"
                :class="{current: tabIndex==index}"
                @click="changeTab(index)"
            >
              <span>{{item.mStoreName}}</span>
            </li>
          </ul>
        </aside>
        <main>
          <div class="send-list" v-for="(item,index) in getList.list" v-show="tabIndex==index">
            <div class="item" v-for="goods in item.goodsList">
              <div class="p-name bdr-bottom">
                <span>{{goods.goName}}</span>
              </div>
              <router-link :to="{name:'adminSendEdit', params:{id: goods.id}}" class="p-button">{{goods.goNum}}件
              </router-link>
            </div>
          </div>
        </main>
      </div>
      <list-none v-else>没有送货信息</list-none>
    </div>
  </div>

</template>

<script>
  import {mapGetters} from 'vuex'
  import gogaHeader from '@/components/gogaHeader.vue'
  import listNone from '@/components/listNone.vue'
  import format from 'timestamp-format'
  export default {
    components: {
      gogaHeader,
      listNone
    },
    computed: {
      ...mapGetters({
        getUser: 'global/getUser',
        getDate: 'admin/send/getDate',
        getList: 'admin/send/getList'
      })
    },
    data() {
      return {
        tabIndex: 0,
        timestamp: 0,
        isRecord: false,
      }
    },
    async mounted () {
      this.isRecord = this.$route.query.record ? true : false;
      this.tabIndex = this.$route.query.id ? this.$route.query.id : 0;
      this.timestamp = this.$route.query.date || new Date().getTime();
      let currtetDate = format('yyyy年MM月dd日', this.timestamp );

      if (currtetDate != this.getDate || this.getList.length == 0) {
        this.$store.dispatch('global/setLoading', true);
        await this.$store.dispatch('admin/send/getList', parseInt(this.timestamp));
        this.$store.dispatch('global/setLoading', false);
      }
      let date = this.$store.dispatch('admin/send/getDate', parseInt(this.timestamp));
    },
    methods: {
      goBack() {
        this.$router.go(-1);
      },
      changeTab (index) {
        this.tabIndex = index;
        this.$router.replace({name: 'adminSend', query: {id: index, date: this.timestamp}});
      }
    }
  }
</script>
