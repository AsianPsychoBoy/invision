<template>
	<div class="header clearfix">
		<div class="teacher-title clearfix">
			<div class="teacher-logo"><img src="../assets/img/logo.jpg"></div>
			<div class="teacher-logo-text">医云微课堂</div>
		</div>
		<div class="teacher-right-box clearfix">
			<div class="teacher-tx">
				<div class="teacher-top clearfix">
					<div class="teacher-tx-box">
						<img :src="userImg">
					</div>
					<div class="teacher-xx">
						<div class="teacher-name">{{ username }}</div>
						<div class="teacher-online clearfix">
							<div class="teacher-bor"></div>
							<div class="teacher-online">Online</div>
						</div>
					</div>
				</div>
			</div>
			<div class="teacher-loginout" @click="logout">
				<div class="teacher-pos">
					<div class="teacher-tc">
						<img src="../assets/img/loginout.jpg">
					</div>
					<div class="teacher-out-text">退出</div>
				</div>
			</div>
		</div>
		<div class="window-button-group">
			<button class="minimize" v-on:click="minWin"><i class="iconfont icon-heng"></i></button>
			<button v-if="isMax" class="unmaximize" v-on:click="unmaxWin"><i class="iconfont icon-zlzuidahua"></i></button>
			<button v-else class="maximize" v-on:click="maxWin"><i class="iconfont icon-zlzuidahua"></i></button>
			<button class="close" v-on:click="closeWin"><i class="iconfont icon-x"></i></button>
		</div>
		<div class="user-info">
			<h3>在线人数{{users.length}}</h3>
			<h3>总人次{{totalUsers}}</h3>
		</div>
	</div>
</template>

<script>
import { mapState } from 'vuex'

export default {
	data: function () {
		let { BrowserWindow } = this.$electron.remote
		let window = BrowserWindow.getFocusedWindow()
		return {
			window: window,
			isMax: window.isMaximized()
		}
	},
	computed: {
		...mapState('Auth', ['roomId', 'username', 'role', 'userImg']),
		...mapState('SocketIO', ['users', 'totalUsers'])
	},
	methods: {
		closeWin: function () {
			this.window.close()
		},
		maxWin: function () {
			this.window.maximize()
			this.isMax = true
		},
		unmaxWin: function () {
			this.window.unmaximize()
			this.isMax = false
		},
		minWin: function () {
			this.window.minimize()
		},
		reloadWin: function () {
			this.window.reload()
		},
		logout () {
			this.$store.commit('Auth/LOG_OUT')
			this.$socket.disconnect()
			this.$router.push('/login')
			this.$socket.connect('http://123.206.124.171')
			this.reloadWin()
		}
	}
}
</script>

<style>
	.header {
		width: 100%;
		height: 80px;
		border-bottom: solid 1px #bfbfbf;
	}   
	.teacher-title {
		height: 80px;
		line-height: 80px;
		padding-left: 20px;
		float: left;
	}
	
	.teacher-logo {
		float: left;
	}
	
	.teacher-logo-text {
		float: left;
		font-size: 28px;
		color: #4d4d4d;
		font-family: "微软雅黑";
		margin-left: 12px;
	}
	
	.teacher-right-box {
		float: right;
		height: 100%;
	}
	
	.teacher-tx {
		float: right;
		width: 190px;
		height: 80px;
		border-left: solid 1px #9f9f9f;
	}
	
	.teacher-loginout {
		float: right;
	}
	
	.teacher-tx-box {
		float: left;
		width: 60px;
		height: 60px;
		border-radius: 50%;
		overflow: hidden;
	}
	
	.teacher-tx-box img {
		width: 100%;
		height: 100%;
	}
	
	.teacher-xx {
		float: left;
		margin-top: 6px;
		margin-left: 6px;
		font-size: 18px;
		color: #676767;
		font-family: "微软雅黑";
	}
	
	.teacher-bor {
		width: 8px;
		height: 8px;
		border-radius: 50%;
		background-color: #00d1a0;
		float: left;
		margin-top: 9px;
	}
	
	.teacher-online {
		float: left;
		margin-left: 4px;
	}
	
	.teacher-top {
		height: 60px;
		margin-top: 10px;
		margin-left: 10px;
	}
	
	.teacher-loginout {
		position: relative;
		border-left: solid 1px #9f9f9f;
		height: 80px;
		width: 120px;
	}
	
	.teacher-tc {
		float: left;
	}
	
	.teacher-out-text {
		float: left;
		margin-left: 10px;
	}
	
	.teacher-pos {
		position: absolute;
		left: 50%;
		top: 50%;
		height: 30px;
		width: 80px;
		line-height: 30px;
		margin-left: -40px;
		margin-top: -15px;
	}
</style>
