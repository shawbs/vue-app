<template>
	<div id="login">
        <input type="text" v-focus v-verify:username="16" name="username">
        <a @click.parent="login()">sign in</a>
        <router-link to="/user/register">to register</router-link>
	</div>
</template>

<script>
export default {
    name: 'login',
    methods:{
        login(){
            console.log('login')
            this.$router.push({path:'/home'})
            this.$store.dispatch('SET_TITLE','home')

        }
    }
}    
</script>