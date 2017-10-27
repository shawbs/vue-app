<template>
	<div id="Home">
		<div class="admin-header">
			<i class="logo" @click="handerExit">sign out</i>
			<h1>{{title}} page</h1>
		</div>
		
        <tabbar>
            <tabbar-item selected >
                <span slot="label">home</span>
            </tabbar-item>
            <tabbar-item>
                <span slot="label">about</span>
            </tabbar-item>   
            <tabbar-item>
                <span slot="label">user</span>
            </tabbar-item>      
        </tabbar>
	</div>
</template>

<script>
import {mapState} from 'vuex'
import {Tabbar, TabbarItem} from 'vux'
export default {
    components: {
        Tabbar,
        TabbarItem
    },
    data() {
        return {
        }
    },
    mounted(){
        /*this.$store.dispatch("API_COOKIE_LOGIN");*/
    },
    computed : mapState([
        'title'
    ]),
    methods : {
        handerExit(){
            this.$router.push({path:'/user/login'})
            this.$store.dispatch('SET_TITLE','login')
        }
    }
}
</script>
<style lang="scss">
	@import "../style/style"
</style>