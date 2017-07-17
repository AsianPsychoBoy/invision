<template>
	<div class="createroom">
		<div class="three-column">
	        <label class="flexbox-one" for="name">
	            标题
	        </label>  
	        <div class="flexbox-two">
	            <input type="text" placeholder="请输入标题" name="name" id="name1">
	        </div>
	    </div>
	    <div class="three-column">
	        <label class="flexbox-one" for="name">
	            内容
	        </label>  
	        <div class="flexbox-two">
	            <input type="text" placeholder="请输入直播内容" name="name" id="name2">
	        </div>
	    </div>
		    <div class="three-column">
	        <label class="flexbox-one" for="name">
	            类型
	        </label>  
	        <div class="flexbox-two">
	            <input type="text" placeholder="请输入直播类型" name="name" id="name3">
	        </div>
	    </div>
	    <button type="button">提交</button>
	</div>
</template>

<script>
export default {

}
</script>

<style>
	    .flexbox-one{
            display: block;
            padding-left: 6px;
            padding-right: 18px;
            color:#666;
        }
        .three-column{
            width: 100%;
            height: 60px;
            display: box;
            display: -webkit-box;
            line-height: 60px;
            font-size: 16px;
            font-family: "微软雅黑";
            border-bottom:solid 1px #f5f4f2;
        }
        .flexbox-two{
            -webkit-box-flex:1;
            position: relative;
        }
        .flexbox-one{
            -webkit-box-flex:0 0 200px;
        }
        .flexbox-two input{
            width: 100%;
            height: 100%;
            padding-left: 6px;
            padding-right: 6px;
            font-size: 16px;
            font-family: "微软雅黑";
            position: absolute;
            left:0;
            top:0; 
            color:#666;  
        }
</style>
