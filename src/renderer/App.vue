<template>
	<div id="app">
		<nav class="app-menu">
			<router-link to="/room-list">房间列表</router-link>
			<router-link to="/create-event">创建活动</router-link>
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
