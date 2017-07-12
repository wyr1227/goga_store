<style lang="less" rel="stylesheet/less">
  @import "../global/records";
</style>
<template>
  <div>
    <goga-header title="进货记录">
      <div slot="left" @click="goBack">
        <svg>
          <use xlink:href="#back"></use>
        </svg>
      </div>
    </goga-header>
    <div class="calendar">
      <div class="top-handle">
        <svg class="box-lr" @click="handleCalendar('prev')">
          <use xlink:href="#back"></use>
        </svg>
        <div class="p-title">{{curYear}}年{{curMonth}}月</div>
        <svg class="box-lr" @click="handleCalendar('next')">
          <use xlink:href="#right"></use>
        </svg>
      </div>
      <div class="week">
        <span v-for="item in weeksCh">{{item}}</span>
      </div>
      <div class="days">
        <div class="day" v-for="item in empytGrids "></div>
        <div class="day"
             v-for="item in days"
             v-bind:class ="{today:nowDay==item && nowYear==curYear && nowMonth==curMonth, has:checkGoods(item)}"
        >
          <span @click="link(item)">{{item}}</span>
        </div>
        <div class="day" v-for="item in endGrids"></div>
      </div>
    </div>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'
  import gogaHeader from '@/components/gogaHeader.vue'
  export default {
    components:{
      gogaHeader
    },
    computed: {
      ...mapGetters({
        getUser: 'global/getUser',
        getDays: 'shop/jinhuo/getDays'
      })
    },
    data() {
      return {
        hasEmptyGrid: false,
        weeksCh: ['日', '一', '二', '三', '四', '五', '六'],
        nowYear: 0,
        nowMonth: 0,
        nowDay: 0,
        curYear: 0,
        curMonth: 0,
        curDay: 0,
        days: 0,
        empytGrids: 0,
        endGrids: 0
      }
    },
    mounted () {
      let date = new Date();
      this.nowYear =  date.getFullYear();
      this.nowMonth = date.getMonth() + 1;
      this.nowDay = this.curDay = date.getDate();
      this.curYear = this.$route.query.year ? this.$route.query.year: date.getFullYear();
      this.curMonth = this.$route.query.month ? this.$route.query.month: date.getMonth() + 1;
      this.calculateEmptyGrids(this.curYear, this.curMonth);
      this.calculateDays(this.curYear,  this.curMonth);
      this.getHistory(this.curYear,  this.curMonth)
      this.calculateEnd();
    },
    methods: {
      goBack() {
        this.$router.go(-1);
      },
      calculateDays(year, month) {
        let days = [];
        this.days = this.getThisMonthDays(year, month);
      },
      getThisMonthDays(year, month ){
        return new Date(year, month, 0).getDate();
      },
      calculateEmptyGrids(year, month) {
        let firstDayOfWeek = this.getFirstDayOfWeek(year, month);
        if (firstDayOfWeek > 0) {
          this.hasEmptyGrid = true;
          this.empytGrids = firstDayOfWeek;
        } else {
          this.hasEmptyGrid = false;
          this.empytGrids = 0
        }
      },
      getFirstDayOfWeek(year, month) {
        return new Date(Date.UTC(year, month - 1, 1)).getDay();
      },
      calculateEnd () {
        this.endGrids = 7 - (this.empytGrids + this.days) % 7
      },
      handleCalendar(type) {
        if (type === 'prev') {
          let newMonth = this.curMonth - 1;
          let newYear = this.curYear;
          if (newMonth < 1) {
            newYear = newYear - 1;
            newMonth = 12;
          }
          this.calculateDays(newYear, newMonth);
          this.calculateEmptyGrids(newYear, newMonth);
          this.calculateEnd();
          this.curYear = newYear;
          this.curMonth = newMonth;
        } else if (type === 'next') {
          let newMonth = this.curMonth + 1;
          let newYear = this.curYear;
          if (newMonth > 12) {
            newYear = newYear + 1;
            newMonth = 1;
          }
          this.calculateDays(newYear, newMonth);
          this.calculateEmptyGrids(newYear, newMonth);
          this.calculateEnd();
          this.curYear = newYear;
          this.curMonth = newMonth;
        }
        this.getHistory(this.curYear, this.curMonth)
        this.$router.replace({name:'jinhuoRecord', query:{year:this.curYear,month: this.curMonth}})
      },
      getHistory (year, month) {
        this.$store.dispatch('shop/jinhuo/getCalendar', {year, month});
      },
      checkGoods (day) {
        return this.getDays.indexOf(day) >= 0
      },
      link (day) {
        if(this.checkGoods(day)) {
          let timetamp = new Date(this.curYear+'-'+ this.curMonth + '-' + day).getTime();
          this.$router.push({name: 'jinhuo', query: {date: timetamp, record:1}})
        }
      }
    }
  }
</script>

