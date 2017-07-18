<template>
	<div class="room-wrapper">
		<room-details></room-details>
		<room-preview></room-preview>
	</div>
</template>

<script>
export default {
	name: 'Room',
	components: {
		'room-details': require('./RoomDetails'),
		'room-preview': require('./RoomPreview')
	},
	data: function () {
		return {
			roomId: this.$route.params['roomId']
		}
	},
	created: function () {
	}
}
</script>

<style>

</style>
