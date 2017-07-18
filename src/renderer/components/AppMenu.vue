<template>
	<div class="app-menu">
		<div class="app-logo"><h2> Invision </h2></div>
		<div class="window-button-group">
			<button class="minimize" v-on:click="minWin"><i class="iconfont icon-heng"></i></button>
			<button v-if="isMax" class="unmaximize" v-on:click="unmaxWin"><i class="iconfont icon-zlzuidahua"></i></button>
			<button v-else class="maximize" v-on:click="maxWin"><i class="iconfont icon-zlzuidahua"></i></button>
			<button class="close" v-on:click="closeWin"><i class="iconfont icon-x"></i></button>
		</div>
	</div>
</template>

<script>
export default {
	data: function () {
		let { BrowserWindow } = this.$electron.remote
		let window = BrowserWindow.getFocusedWindow()
		return {
			window: window,
			isMax: window.isMaximized()
		}
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
		}
	}
}
</script>

<style>
.app-menu {
	display: flex;
	justify-content: space-between;
}
</style>
