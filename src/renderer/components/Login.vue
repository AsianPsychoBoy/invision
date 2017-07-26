<template>
	<div class="login">
		<form class="login-box" v-on:submit.prevent="login">
			<div class="auto-box">
				<div class="title clearfix">
					<div class="logo"><img src="../assets/logo.jpg"></div>
					<div class="logo-text">医云微课堂</div>
				</div>
				<div class="input-box">
					<div class="id"><input type="text" id="roomId" v-model="roomId" placeholder="请输入ID"></div>
					<div class="user"><input type="text" id="username" v-model="username" placeholder="请输入用户"></div>
					<div class="password"><input id="password" v-model="password" type="password" placeholder="请输入密码"></div>
				</div>
				<button class="submit" id="submit" type="submit">登录</button>
			</div>
		</form>
	</div>
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
			this.$http.post('https://www.iissr.com/serivceLogin', {
				roomId: this.roomId,
				user: this.username,
				password: this.password
			}).then((res) => {
				let data = res.data
				switch (data.status) {
					case 1:
						console.log(data.msg)
						break
					case 0:
						this.$store.commit('Auth/LOG_IN', {
							username: this.username,
							roomId: this.roomId,
							role: data.identity
						})
						this.$router.push({ name: '直播间', params: { roomId: this.roomId } })
						break
				}
			}).catch((err) => {
				console.log('服务器错误: ', err)
			})
		}
	}
}
</script>

<style>
	.login-box{
		width:480px;
		height:420px;
		-webkit-box-shadow:2px 2px 5px #333333;
		position: absolute;
		left:50%;
		top:50%;
		margin-top:-210px;
		margin-left:-240px;
		background: linear-gradient(to bottom right, #c4c4c4, #d7d7d7);
	}
	.title{
		height: 70px;
		line-height: 70px;
	}
	.logo{
		float: left;
		margin-top: 2px;
	}
	.logo-text{
		float:left;
		font-size:28px;
		color:#fff;
		font-family: "微软雅黑";
		margin-left: 12px;
	}
	.auto-box{
		width: 80%;
		margin:auto;

	}
	.login{
		position: relative;
		position: absolute;
		left:0;
		top:0;
		width: 100%;
		height:100%;
		background:-webkit-gradient(linear, 0 0, 0 bottom, from(#a6a6a8), to(rgba(239, 239, 239, 1)));
	}
	.id,.user,.password{
		width: 100%;
		height: 50px;
		background-color: #fff;
		border-radius: 8px;
		margin-top:30px;
	}
	.input-box input{
		border: none;
		width: 100%;
		height: 100%;
		padding-left: 8px;
		padding-right: 8px;
		border-radius: 8px;
		font-size: 20px;
		font-family: "微软雅黑";
	}
	.submit{
		width: 180px;
		height:50px;
		line-height: 50px;
		text-align: center;
		color: #fff;
		font-family: "微软雅黑";
		font-size:20px;
		background-color: #00d1a0;
		border-radius: 20px;
		margin:auto;
		margin-top: 30px;
	}
</style>
