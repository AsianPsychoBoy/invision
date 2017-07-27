<template>
	<div class="teacher-content clearfix">
		<teacher-left></teacher-left>
		<template v-if="role === 0">
			<teacher-main></teacher-main>
			<teacher-right></teacher-right>
		</template>
		<template v-if="role === 1">
			<assistant-main></assistant-main>
			<assistant-right></assistant-right>
		</template>
	</div>
</template>

<script>
import { mapState } from 'vuex'

export default {
	name: 'Room',
	components: {
		'teacher-left': require('./TeacherLeft'),
		'teacher-right': require('./TeacherRight'),
		'teacher-main': require('./TeacherMain'),
		'assistant-main': require('./AssistantMain'),
		'assistant-right': require('./AssistantRight')
	},
	data: function () {
		return {
		}
	},
	computed: mapState('Auth', ['roomId', 'username', 'role']),
	created: function () {
		this.$socket.emit('join', this.$store.state.Auth.username, this.$store.state.Auth.roomId)
	}
}
</script>

<style>
	/* .room-wrapper {
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
	} */
	audio{
		opacity: 0;
		display: none;
	}
	#msglog, #messageInput {
		border: 1px solid #ccc;
		width: 500px;
		height: 350px;
		overflow-y: auto;
		font-size: 14px;
	}
	#messageInput {
		height: 80px;
	}
	.message {
		line-height: 22px;
	}
	.message .user {
		padding-right: 5px;
		padding-left: 5px;
		color: brown;
	}
	.sysMsg {
		color: #c1bfbf;
		padding-right: 5px;
		padding-left: 5px;
		font-size: 12px;
	}
	#users {
		width: 100%;
		padding: 0 5px 5px;
	}
	.swiper-wrapper img{
		width:100%;
	}
	.swiper-container {
		width: 100%;
	}
	.swiper-slide {
		width: 100%;
		text-align: center;
		font-size: 18px;
		background: #fff;
	}

	body{
		background-color: #f2f2f2;
	}
	.center{
		background-color: #f2f2f2;
	}
	.subform,.cz{
		height: 54px;
		line-height: 54px;
	}
	.subform{
		width: 100%;
		position:absolute;
		left:0;
		bottom:0;
		font-family: "微软雅黑";
		font-size: 16px;
		background-color: #fff;
		z-index: 9999;
	}
	.cz{
		color:#6a6a6a;
	}
	.input-box .in-box,.cz,.input-box,{
		float: left;
	}
	.form-auto{
		position: relative;
		padding-left: 8px;
		padding-right: 8px;
		width: 100%;
		height: 100%;
	}
	.submit{
		width: 54px;
		height: 36px;
		background-color: #1ac553;
		color: #fff;
		line-height: 36px;
		border-radius: 4px;
		letter-spacing: 2px;
		position: absolute;
		right:8px;
		top:50%;
		margin-top: -18px;
	}
	.input-box{
		position: absolute;
		left:0;
		top:50%;
		width: 100%;
		height: 100%;
		padding-left: 45px;
		padding-right: 70px;
		height: 36px;
		margin-top:-18px;
	}
	.text{
		position: relative;
		width: 100%;
		background-color: #ededed;
		border-radius: 4px;
		line-height: 36px;
	}
	.text input{
		background-color: #ededed;
	}
	.yuan{
		position: relative;
		width: 18px;
		height:18px;
		border-radius: 50%;
		float: left;
		position: absolute;
		left: 0;
		top:50%;
		margin-top: -9px;
	}
	.tw-text{
		float: right;
		padding-left: 4px;
		padding-right: 4px;
		color: #545454;
	}
	.tw{
		position: relative;
		width: 60px;
		position: absolute;
		right: 0;
		top:0;
		font-family: "微软雅黑";
		font-size: 16px;
	}
	.in-box{
		width: 100%;
		padding-right: 64px;
		position: relative;
	}
	.in-box input{
		width: 100%;
		height: 100%;
		padding-left:6px;
		padding-right: 6px;
		height: 36px;
		position: absolute;
		left: 0;
		top:0;
	}
	.x-yuan{
		width: 10px;
		height: 10px;
		border-radius: 50%;
		background-color:#2dc560;
		position: absolute;
		left:50%;
		top:50%;
		margin-left:-5px;
		margin-top:-5px;
		display: none;
	}
	.yuan-bor{
		border:solid 1px #b5b5b5;
	}
	.blue-bor{
		border:solid 1px #38c34c;
	}
	.all{
		position: relative;
		position: fixed;
		top:0;
		left: 0;
		width: 100%;
		height: 100%;
		overflow:hidden;
	}
	.pos{
		position:static;
		left:0;
		bottom:0;
	}
	.all{

	}
	#messages{
		position: absolute;
		right: 8px;
		bottom:60px;
		width: 140px;
	}
	#messages li{
		position: relative;
		width: 100%;
		margin-bottom: 8px;
	}
	.tx-box{
		position: relative;
		width: 36px;
		height:36px;
		border-radius: 50%;
		overflow: hidden;
	}
	.tx-box img{
		position: absolute;
		left:0;
		top:0;
		width: 100%;
		height:100%;
	}
	.litext{
		width: 100%;
		padding-right: 40px;
	}
	.tx-box{
		float: right;
		margin-top:6px;
	}
	.litext span{
		padding-top: 8px;
		padding-left: 8px;
		color: #fff;
		background:rgba(0,0,0, 0.5)!important;
		filter:Alpha(opacity=50);
		background:#000;
		border-radius: 4px;
		padding-bottom: 8px;
		padding-right: 8px;
		float: right;
		font-size: 16px;
		font-family: "微软雅黑";
	}
	.center{
		width: 100%;
		height:100%;
		overflow: auto;
		-webkit-overflow-scrolling: touch;
	}
	.center-auto{
		width: 100%;
		padding-right: 8px;
		padding-left:8px;
	}
	.time-box{
		width: 100%;
		height: 30px;
		text-align: center;
		line-height: 30px;
		color:#bfbfbf;
		font-family: "微软雅黑";
		font-size:16px;
	}
	.yp-box{
		position: relative;
		width: 100%;
	}
	.left-box{
		width: 70px;
	}
	.right-box{
		position: absolute;
		left:0;
		top:0;
		width: 100%;
		height:100%;
		padding-left:78px;
	}
	.big-tx{
		width: 70px;
		height: 70px;
		border-radius: 50%;
		overflow: hidden;
	}
	.big-tx img{
		height: 100%;
		width: 100%;
	}
	.s-yuan{
		width: 26px;
		height: 26px;
		border-radius: 50%;
		background-color: #f1cb84;
		font-family: "微软雅黑";
		font-size: 16px;
		text-align: center;
		line-height: 26px;
		color:#b28840;
		margin: auto;
		margin-top:8px;
	}
	.right-box{

	}
	.name{
		height: 30px;
		font-family:"微软雅黑";
		font-size: 16px;
		line-height: 30px;
	}
	.wlds{
		float: left;
		color:#444;
	}
	.zjr{
		float: left;
		color:#9e9e9e;
		margin-left:10px;
	}


	.videoPlayer{
		width: 100%;
	}
	.video{
		margin-top: 0px;
	}
	.videoControls{
		position: relative;
		position: absolute;
		left:0;
		top:50%;
		width: 100%;
		height: 36px;
		margin-top: -18px;
		padding-left: 10px;
		padding-right: 10px;
	}
	.show{
		opacity: 1;
	}
	.hide{
		opacity: 0;
	}
	.progressWrap{
		background-color: #9fd549;
		height: 6px;
		cursor: pointer;
	}
	.playProgress{
		background-color: #9fd549;
		width: 0px;
		height: 6px;
		border-right: 2px solid blue;
	}
	.showProgress{
		font-weight: 600;
		font-size: 20px;
		line-height: 25px;
	}
	.play i{
		font-size:30px;
	}
	.bg-video{
		background-color: #b0e65a;
		width: 200px;
		height: 60px;
		position: relative;
		border-radius: 4px;
	}
	.progressWrap{
		width: 100%;

	}
	.right-video{
		float: left;
		position: absolute;
		left:10px;
		top:0;
		z-index: 9999;
	}
	.time{
		float: right;
		line-height: 36px;
		color:#4b663d;
		font-size: 16px;
		font-family: "微软雅黑"
	}
	.playProgress{
		float: left;
	}
	.heng-box{
		width: 100%;
		padding-left: 48px;
		padding-right: 37px;
		height:6px;
		position: absolute;
		left:0;
		top:50%;
		margin-top:-3px;
	}
	.playBtn i{
		color: #fff;
	}
	.teacher-left{
		position: relative;
		position: absolute;
		left:0;
		top:0;
		width: 28%;
		height:100%;
		border:solid 1px red;
	}
	.teacher-main{
		position: absolute;
		left:28%;
		top:0;
		width:48%;
		border:solid 1px red;
		height: 100%;
		overflow: auto;
		padding-bottom: 80px;
	}
	.teacher-right{
		position: absolute;
		left:76%;
		top:0;
		width:24%;
		border:solid 1px red;
		height: 100%;
		background-color: #4d4d4d;
	}
	.teacher-content{
		position: relative;
		-webkit-flex:1;
	}
	.teacher-tm{
		width: 100%;
		height:50px;
		line-height: 50px;
		text-align: center;
		color:#221715;
		font-size: 18px;
	}
	.flexbox-img-box{
		width: 100%;
		border-left:solid 1px #979799;
		border-right:solid 1px #979799;
	}
	.flexbox-img-auto{
		width: 96%;
		margin: auto;
	}
	.flexbox-img-one{
		position: relative;
		color:#666;
		width: 95px;
		height:68px;
		margin-top: 13.5px;
	}
	.flexbox-img-one img{
		width: 100%;
		height: 100%;

	}
	.three-img-column{
		position: relative;
		width: 100%;
		height: 95px;
		display: box;
		display: -webkit-box;
		font-size: 16px;
		font-family: "微软雅黑";
		border-bottom:solid 1px #B8B8B8;
	}
	.flexbox-img-two{
		-webkit-box-flex:1;
		position: relative;
	}
	.flexbox-img-one{
		-webkit-box-flex:0 0 200px;
	}
	.flexbox-img-padding{
		position: relative;
		width: 100%;
		height: 21px;
		position: absolute;
		left: 0;
		top:0;
		bottom:0;
		right:0;
		margin: auto;
	}
	.flexbox-img-title{
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 1;
		word-break: break-all;
		overflow: hidden;
		font-size: 16px;
		font-family: "微软雅黑";
		line-height: 22px;
		position: absolute;
		left:0;
		top: 0;
		width: 40%;
		padding-right: 12px;
		padding-left: 12px;
	}
	.flexbox-img-text{
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 1;
		word-break: break-all;
		overflow: hidden;
		font-size: 14px;
		font-family: "微软雅黑";
		color:#9b9b9b;
		line-height: 20px;
		float: left;
	}
	.flexbox-img-zt{
		position: absolute;
		left:0;
		bottom:0;
		width: 100%;
		float: left;
		border: solid 1px red;
	}
	.flexbox-img-btn{
		width: 28px;
		height:12px;
		background:#E51818;
		border-radius:3px;
		color:#fff;
		font-size:7px;
		line-height:12px;
		text-align:center;
		float: right;
	}
	.teacher-sc-wz{
		float: left;
		border:solid 1px red;
	}
	.teacher-sc-url{
		position: absolute;
		left: 40%;
		top:0;
		width: 60%;
		border:solid 1px red;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 1;
		word-break: break-all;
		overflow: hidden;
		padding-right: 12px;
		padding-left: 12px;
	}
	.teacher-sc-btn{
		float: left;
		border:solid 1px red;
	}
	.flexbox-img-there{
		position: relative;
		color:#666;
		width: 95px;
		height:68px;
		margin-top: 13.5px;
		border:solid 1px red;
	}
	.teacher-img-btn{
		border:solid 1px #8c8c8c;
		text-align: center;
		line-height:24px;
		height: 24px;
		border-radius: 8px;
		font-size: 16px;
		font-family: "微软雅黑";
		margin-top: 22px;
	}
	.teacher-sc-text{
		float: left;
		line-height: 50px;
		margin-left: 8px;
		font-family: "微软雅黑";

	}
	.teacher-sck{
		float: left;
		margin-left: 8px;
		margin-top: 11px;
	}
	.teacher-sc-box{
		width: 100%;
		height: 50px;
		border:solid 1px #979799;
	}
	.teacher-sc{
		width: 100%;
		border:solid 1px red;
	}
	.teacher-au{
		width: 96%;
		margin: auto;
	}
	.teacher-ppt-auto{
		position: relative;
		height: 100%;
		padding-left: 35px;
		padding-right: 35px;
		border:solid 1px red;
	}
	.teacher-ppt{
		margin-top: 20px;
		width: 100%;
		background-color: #ffe546;
		height: 30px;
		line-height: 30px;
		text-align: center;
		border-radius: 4px;
		font-size: 16px;
		color: #fff;
	}
	.teacher-file-submit{


	}
	.teacher-text-submit{
		float: right;
		width: 80px;
		text-align: center;
		color:#fff;
		line-height: 32px;
		height: 32px;
		background-color: #00d1a0;
		border-radius: 4px;
		margin-right: 10px;
	}
	.teacher-yuyin-submit{
		position: relative;
		float: right;
		width: 80px;
		height: 32px;
		background-color: #b2b2b2;
		border-radius: 4px;
	}
	.teacher-yuyin-submit img{
		position: absolute;
		left:0;
		top:0;
		right:0;
		bottom:0;
		margin: auto;
	}
	.teacher-textarea{
		width: 100%;
		height: 100%;
		border:solid 1px red;
	}
</style>
