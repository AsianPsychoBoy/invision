<template>
	<div class="room-list">
		<div class="flexbox-img-box" id="room">
    	</div>
	</div>
</template>

<script>
export default {
	
}
</script>

<style>
		.create-room{
			width:100%
		}
		#create{
			float:right;
			display:block;
			width:100px;
			height:38px;
			background-color:blue;
			border-radius:6px;
			color:#fff;
			text-align:center;
			line-height:38px;
			font-family:"微软雅黑";
		}
		        .flexbox-img-box{
            width: 100%;
        }
        .flexbox-img-auto{
            width: 96%;
            margin: auto;
			position:relative;
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
            height: 68px;
            margin-top:14px;
            padding-left:10px;
            padding-right: 10px;
            position: absolute;
            left: 0;
            top:0;
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
        }
        .flexbox-img-zt{
            position: absolute;
            left:0;
            bottom:0;
            width: 100%;
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
		.del{
			position:absolute;
			right:0;
			top:10%;
			width:60px;
			height:30px;
			background-color:blue;
			line-height:30px;
			text-align:center;
			color:#fff;
			border-radius:6px;
			 cursor:pointer
		}
</style>
