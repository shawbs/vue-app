<template>
  <div id="app">
    <loading v-model="isLoading"></loading>
    <router-view></router-view>
  </div>
</template>

<script>
import {Loading } from 'vux'
import {mapState} from 'vuex'



export default {
  components:{
        Loading 
  },
  name: 'app',
  data () {
    return {
      today:new Date().getDate(),
      calendarArr:[]
    }
  },
  computed:mapState([
    'isLoading'
  ]),
  mounted () {
  }
}
</script>

<style lang="less">
@import '~vux/src/styles/reset.less';

</style>
