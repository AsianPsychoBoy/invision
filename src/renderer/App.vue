<template>
	<div id="app" class="all">
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
	body,div,h1,h2,h3,h4,h5,h6,hr,p,dl,dt,dd,ul,ol,li,form,button,input,textarea,a,i,em,b,fieldset,form,label,legend{margin:0;padding:0;}
	body,input,button,textarea,select{font-family: "微软雅黑";}
	input,button,textarea,select{font-family: "Microsoft YaHei" Helvetica Neue,Helvetica,Arial,sans-serif;font-size:16px;outline:none;border:none;-webkit-appearance: none;}
	ol,ul{list-style:none;}
	::-webkit-input-placeholder{color: #999;}/*改变input里面placeholder文本颜色*/
	a{text-decoration:none;color:#333;}
	img{border:0;vertical-align:middle;}
	h1,h2,h3,h4,h5,h6{font-size:100%;font-weight:normal;}
	i,em{font-style: normal;}
	b,strong{font-weight: normal;}
	textarea{resize: none;}/*取消自动调节大小*/
	* {-webkit-box-sizing: border-box;-moz-box-sizing: border-box;box-sizing: border-box;-webkit-touch-callout:none}
	*:before,*:after{-webkit-box-sizing: border-box;-moz-box-sizing: border-box;box-sizing: border-box;}
	/*box-sizing: border-box;对象的实际宽度就等于设置的width值，即使定义有border和padding也不会改变对象的实际宽度。*/
	/*清浮动*/
	.clearfix:after{visibility: hidden;display: block;font-size: 0;content: " ";clear: both;height: 0;}
	.all{
		position: absolute;
		left:0;
		top:0;
		width: 100%;
		height: 100%;
		border:solid 1px red;
		display: flex;
		flex-flow: column;
		align-items: stretch;
		justify-content:space-between;
	}
</style>
