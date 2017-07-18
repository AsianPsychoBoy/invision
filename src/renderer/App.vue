<template>
	<div id="app">
		<app-menu></app-menu>
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
