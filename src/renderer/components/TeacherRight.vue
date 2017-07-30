<template>
	<div class="teacher-right">
		<div class="teacher-ppt-auto">
			<div class="teacher-ppt">PPT</div>

			<div class="teacher-sck-sc">
				<div class="teacher-sck-text">上传素材库</div>
				<div class="teacher-input-text">
					<div class="teacher-input-box">
						<div class="teacher-wb-text">支持 .JPG .PNG .PPT .MOV .MP4</div>
						<input class="teacher-file-submit" type="file">
					</div>
				</div>
			</div>

			<form class="teacher-yuyin-text" @submit.prevent="sendMsg">
				<div class="teacher-yuyin-text">授课内容</div>
				<div class="teacher-select">
					<textarea v-model="userMsg" class="teacher-textarea" name="" id="teacher-textarea" cols="30" rows="10" placeholder="文字输入">

					</textarea>
				</div>
				<div class="teacher-text-submit-box clearfix">
					<button type="button" class="teacher-yuyin-submit" v-if="recorder" @click="toggleRecording" v-bind:style="{ 'background-color': isRecording ? 'red' : 'grey' }" :disabled="isQNUploading">
						<img src="../assets/img/yuyin.jpg">
					</button>
					<button type="submit" class="teacher-text-submit" >发送</button>
				</div>
			</form>
			正在上传? {{ isQNUploading }}
		</div>
	</div>
</template>

<script>
require('../../../static/audioRecorder/WebAudioRecorder.js')
const WebAudioRecorder = window.WebAudioRecorder
const {desktopCapturer} = require('electron')

export default {
	data: function () {
		return {
			roomInfo: {},
			recorder: undefined,
			isRecording: false,
			isQNUploading: false,
			isSaving: false,
			userMsg: ''
		}
	},
	created: function () {
		this.roomInfo = require('../../../static/data.json')
		// 192.168.30.23:3000/room
		navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia
		desktopCapturer.getSources({types: ['window', 'screen']}, (error, sources) => {
			if (error) throw error
			for (let i = 0; i < sources.length; ++i) {
				if (sources[i].name === 'invision') {
					let audioCtx = new AudioContext()
					navigator.getUserMedia({ audio: true }, (stream) => {
						let srcNode = audioCtx.createMediaStreamSource(stream)
						this.recorder = new WebAudioRecorder(srcNode, { encoding: 'mp3' })
						this.recorder.onComplete = (recorder, blob) => {
							console.log('录音成功: ', blob)
							this.qiniuUpload(blob)
						}
						this.recorder.onError = (recorder, msg) => {
							console.log(msg)
						}
					}, function (err) {
						console.log(err)
						this.err = err
					})
				}
			}
		})
	},
	methods: {
		toggleRecording: function () {
			if (this.recorder) {
				!this.recorder.isRecording()
					? this.recorder.startRecording()
					: this.recorder.finishRecording()
				this.isRecording = !this.isRecording
			}
		},
		async qiniuUpload (blob) {
			try {
				this.isQNUploading = true

				let tokenRes = await this.$http.get('https://iissr.com/token')

				console.log('七牛token值获取成功', tokenRes)
				let formData = new FormData()
				formData.append('key', tokenRes.data.keyId)
				formData.append('token', tokenRes.data.tokenId)
				formData.append('file', blob)

				await this.$http.post('https://upload-z2.qbox.me', formData)

				console.log('上传成功')
				this.isQNUploading = false
				// let mp3Url = tokenRes.data.qnUrl + tokenRes.data.keyId
				this.$socket.send({
					type: 0,
					key: tokenRes.data.keyId,
					userImg: this.$store.state.Auth.userImg,
					username: this.$store.state.Auth.username,
					roomId: this.$store.state.Auth.roomId
				})
			} catch (e) {
				this.err = e
			}
		},
		sendMsg () {
			this.$socket.send({
				type: 1,
				msg: this.userMsg,
				userImg: this.$store.state.Auth.userImg,
				username: this.$store.state.Auth.username,
				roomId: this.$store.state.Auth.roomId
			})
			this.userMsg = ''
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
