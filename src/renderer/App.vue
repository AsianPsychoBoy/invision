<template>
	<div id="app">
		<div class="app-menu">
			<div class="window-button-group">
				<button class="minimize">-</button>
				<button class="maximize">+</button>
				<button class="close">X</button>
			</div>
		</div>
		<nav class="app-nav">
			<router-link to="/room-list">房间列表</router-link>
			<router-link to="/create-room">创建直播</router-link>
			<router-link to="/profile">我的资料</router-link>
		</nav>
		<router-view></router-view>
	</div>
</template>

<script>
	export default {
		name: 'invision'
	}
</script>

<style>
  /* CSS */

</style>
