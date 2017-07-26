<template>
	<div class="room-wrapper">
		<div class="left">
			<room-details></room-details>
		</div>
		<div class="right">
			<room-preview></room-preview>
		</div>
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
			roomId: this.$route.params['roomId'],
			isConnected: false
		}
	},
	created: function () {
	}
}
</script>

<style>
	.room-wrapper {
		display: flex;
		justify-content: flex-end;
		position: absolute;
		height: 100%;
	}
	.right {
		border: 5px solid red;
		min-width: 56.25vh;
		height: 100%;
	}
	.left {
		border: 5px solid blue;
	}
</style>
