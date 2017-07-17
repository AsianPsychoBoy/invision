<template>
	<div id="app">
	<app-menu></app-menu>
		<nav class="app-nav">
			<router-link to="/room-list">房间列表</router-link>
			<router-link to="/create-room">创建直播</router-link>
			<router-link to="/profile">我的资料</router-link>
		</nav>
		<router-view></router-view>
	</div>
</template>

<script>
	import AppMenu from './components/AppMenu'

	export default {
		name: 'invision',
		components: {
			'app-menu': AppMenu
		}
	}
</script>

<style>
  /* CSS */

</style>
