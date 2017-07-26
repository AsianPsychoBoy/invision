<template>
	<div class="room-details">
		{{ roomInfo }}
		<h2>上传素材</h2>
			<form id="ppt-upload" enctype="multipart/form-data" novalidate v-on:submit.prevent="uploadPPT($event)">
				<input type="file" name="PPT-upload" :disabled="isSaving" accept="application/vnd.ms-powerpoint,application/vnd.openxmlformats-officedocument.presentationml.slideshow,application/vnd.openxmlformats-officedocument.presentationml.presentation">
				<button :disabled="isSaving" type="submit">上传</button>
			</form>
			<button class="recording-button" v-on:click="toggleRecording" v-bind:class="{ recording }"></button>
		<h2>基本信息</h2>
	</div>
</template>

<script>
require('../audioRecorder/WebAudioRecorder.js')
const WebAudioRecorder = window.WebAudioRecorder

export default {
	data: function () {
		return {
			roomInfo: {},
			recorder: undefined,
			recording: false,
			isSaving: false
		}
	},
	created: function () {
		this.roomInfo = require('../../../static/data.json')
		// 192.168.30.23:3000/room
		this.$http.post('https://iissr.com/token').then(data => {
			let audioCtx = new AudioContext()
			navigator.getUserMedia({ audio: true }, (stream) => {
				let srcNode = audioCtx.createMediaStreamSource(stream)
				this.recorder = new WebAudioRecorder(srcNode, { encoding: 'mp3' })
				this.recorder.onComplete = function (recorder, blob) {
					console.log('录音成功: ', blob)
				}
			}, function (err) {
				console.log(err)
			})
		}).catch(err => {
			console.log(err)
		})
	},
	methods: {
		toggleRecording: function () {
			if (this.recorder) {
				!this.recorder.isRecording()
					? this.recorder.startRecording()
					: this.recorder.finishRecording()
				this.recording = !this.recording
			}
		},
		uploadPPT (e) {
			console.log(e)
			let fieldName = e.target.firstChild.name
			let fileList = e.target.firstChild.files
			const formData = new FormData()

			if (!fileList.length) return

			// append the files to FormData
			Array
			.from(Array(fileList.length).keys())
			.map(x => {
				formData.append(fieldName, fileList[x], fileList[x].name)
			})

			this.isSaving = true
			this.$http.post('https://iissr.com/ppt-upload/' + this.$store.state.Auth.roomId, formData)
				.then(res => {
					this.isSaving = false
					console.log(res)
				})
				.catch(err => {
					this.isSaving = false
					console.log(err)
				})
		}
	}
}
</script>

<style>
	.recording-button {
		height: 3rem;
		width: 3rem;
		border-radius: 50%
	}
	.recording-button.recording {
		background-color: red;
	}
</style>
