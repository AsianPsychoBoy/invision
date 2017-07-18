<template>
	<form v-on:submit="login()">
		<fieldset>
			<label for="roomId">房间ID</label>
			<input id="roomId" v-model="roomId" type="text">
			<label for="username">用户名</label>
			<input id="username" v-model="username" type="text">
			<label for="password">密码</label>
			<input id="password" v-model="password" type="password">
		</fieldset>
		<button v-bind:disabled="!loginValid" type="submit">登陆</button>
	</form>
</template>

<script>
export default {
	name: 'Login',
	data: function () {
		return {
			username: '',
			password: '',
			roomId: ''
		}
	},
	computed: {
		loginValid: function () {
			return this.username.length !== 0 && this.password.length !== 0 && this.roomId.length !== 0
		}
	},
	methods: {
		login: function () {
			console.log('submitted', this.username, this.password, this.roomId)
			this.$router.push({ path: '/room', params: { roomId: this.roomId } })
		}
	}
}
</script>

<style>

</style>
