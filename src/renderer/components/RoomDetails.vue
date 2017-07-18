<template>
	<div class="room-details">
		{{ roomInfo }}
	</div>
</template>

<script>
export default {
	data: function () {
		return {
			roomInfo: {}
		}
	},
	created: function () {
		this.roomInfo = require('../../../static/data.json')
	}
}
</script>

<style>

</style>
