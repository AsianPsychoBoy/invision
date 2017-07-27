<template>
	<div class="teacher-left">
		<div class="teacher-tm">下肢静脉曲张Venefit...</div>
		<div class="bannar">
			<div class="swiper-container" id="swiper-container-2">
				<div class="swiper-wrapper">
					<div class="swiper-slide" data-number="0"><img src="../assets/img/index.jpg" alt=""></div>
					<div class="swiper-slide" data-number="1"><img src="../assets/img/index.jpg" alt=""></div>
					<div class="swiper-slide" data-number="2"><img src="../assets/img/index.jpg" alt=""></div>
					<div class="swiper-slide" data-number="3"><img src="../assets/img/index.jpg" alt=""></div>
				</div>
				<!-- Add Pagination -->
				<div class="swiper-pagination" id="swiper-pagination-2"></div>
			</div>
		</div>
		<div class="center" style="padding-bottom: 80px">
			<div class="center-auto">
				<ul class="app-box" id="app-box">
					<template  v-for="(msg, index) in teacherMsg">
						<li v-if="msg.type === 0" :key="index">
							<div class="time-box">{{ msg.time }}</div>
							<div class="yp-box clearfix">
								<div class="left-box">
									<div class="big-tx"><img :src="msg.userImg"></div>
									<div class="s-yuan">赏</div>
								</div>
								<div class="right-box">
									<div class="name clearfix"><div class="wlds">{{ msg.username }}</div><div class="zjr">主讲人</div></div>
									<div class="bg-video">
										<div class="videoPlayer videoContainer" id="videoContainer">
										<audio id="video1" class="video1" controls>
											<source src="" type="audio/mpeg">
										</audio>
										<div id="videoControls" class="clearfix videoControls">
											<div class="right-video">
												<div id="playBtn" class="play playBtn" title="Play"> <i class="icon iconfont">&#xe603;</i> </div>
											</div>

											<div class="heng-box">

											<div id="progressWrap" class="progressWrap">
											<div id="playProgress" class="playProgress"></div>
											</div>

											</div>

											<div class="time"></div>
										</div>
										</div>
									</div>
								</div>
							</div>
						</li>
						
						<li v-if="msg.type === 1" :key="index"> 
							<div class="time-box">{{ msg.time }}</div>
							<div class="yp-box clearfix">
								<div class="left-box">
									<div class="big-tx">
										<img :src="msg.userImg">
									</div>
								</div>
								<div class="right-box">
									<div class="name clearfix">
										<div class="wlds">{{ msg.username }}</div>
										<div class="zjr">主讲人</div>
									</div>
									<div class="jstext">{{ msg.msg }}</div>
								</div>
							</div>
						</li>
					</template>

				</ul>
			</div>
		</div>

		<!-- <form class="subform" action="">
			<div class="form-auto clearfix">
				<div class="cz">操作</div>
				<div class="input-box">
					<div class="text clearfix">
						<div class="in-box"><input type="text" id="m" placeholder="加入一起讨论..." /></div>
						<div class="tw clearfix" id="tw" data-status="false">
							<div class="yuan yuan-bor">
								<div class="x-yuan"></div>
							</div>
							<div class="tw-text">提问</div>
						</div>
					</div>
				</div>
				<button class="submit" id="submit">发送</button>
			</div>
		</form> -->

		<ul id="messages">
			<li v-for="(msg, index) in userMsg" :key="index">
				<div class="tx-box"><img :src="msg.userImg"></div>
				<div class="litext"><div class="bghei clearfix"><span>{{ msg.text }}</span></div></div>
			</li>
		</ul>

	</div>
</template>

<script>
import { mapState } from 'vuex'
const Swiper = window.Swiper

export default {
	data: function () {
		return {
			swiper: undefined
		}
	},
	computed: {
		...mapState('SocketIO', ['sysMsg', 'userMsg', 'teacherMsg', 'users', 'roomJoined']),
		...mapState('Auth', ['roomId', 'username', 'role'])
	},
	created () {
		this.swiper = new Swiper('#swiper-container-2', {
			pagination: '#swiper-pagination-2',
			loop: true, // 无限循环
			paginationClickable: true,
			// spaceBetween: 30, 样式的中间间隔
			centeredSlides: true,
			// autoplay: 2000,//自动播放的时间间隔
			autoplayDisableOnInteraction: false
		})
	}
}
</script>

<style>
	.preview-wrapper {
		height: 100%;
		width: 100%;
		position: relative;
	}
	.preview-mask {
		position: absolute;
		height: 100%;
		width: 100%;
		z-index: 100;
	}
	.preview {
		height: 100%;
		width: 100%;
		display: flex;
		flex-direction: column;
	}
</style>
