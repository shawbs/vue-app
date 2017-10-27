<template>
	<div id="admin">
		<div class="admin-header">
			<i class="logo" @click="goHome">home</i>
			<h1>{{title}} page</h1>
		</div>
		<router-view></router-view>
	</div>
</template>

<script>
import {mapState} from 'vuex'

export default {
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
			goHome(){
				this.$router.push({path:'/user/login'})
				this.$store.dispatch('SET_TITLE','login')
			}
		}
	}
</script>
<style lang="scss">
	@import "../../style/style"
</style>