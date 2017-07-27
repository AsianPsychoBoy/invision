<template>
	<div class="teacher-main">

		<div class="bannar">
			<div class="swiper-container" id="swiper-container-1">
				<div class="swiper-wrapper">
					<div class="swiper-slide" data-number="0"><img src="../assets/img/index.jpg" alt=""></div>
					<div class="swiper-slide" data-number="1"><img src="../assets/img/index.jpg" alt=""></div>
					<div class="swiper-slide" data-number="2"><img src="../assets/img/index.jpg" alt=""></div>
					<div class="swiper-slide" data-number="3"><img src="../assets/img/index.jpg" alt=""></div>
				</div>
				<!-- Add Pagination -->
				<div class="swiper-pagination" id="swiper-pagination-1"></div>
			</div>
		</div>
		<div class="teacher-sc">
			<div class="teacher-au">
				<div class="teacher-sc-box clearfix">
					<div class="teacher-sck">
						<div class="teacher-sc-img"><img src="../assets/img/sc.jpg"></div>
					</div>
					<div class="teacher-sc-text">
						素材库
					</div>
				</div>
				<div class="flexbox-img-box">

					<div class="flexbox-img-auto">
						<div class="three-img-column">
							<div class="flexbox-img-one">
								<img src="../assets/img/img10.png" alt="icon"/>
							</div>
							<div class="flexbox-img-two">
								<div class="flexbox-img-padding">
									<div class="flexbox-img-title clearfix">
										下肢静脉曲张手术全程记录
									</div>
									<div class="teacher-sc-url">http://localhost:63342/inv/teacher.html</div>
								</div>
							</div>
							<div class="flexbox-img-there">
								<div class="teacher-img-btn">复制链接</div>
							</div>
						</div>
					</div>

					<div class="flexbox-img-auto">
						<div class="three-img-column">
							<div class="flexbox-img-one">
								<img src="../assets/img/img10.png" alt="icon"/>
							</div>
							<div class="flexbox-img-two">
								<div class="flexbox-img-padding">
									<div class="flexbox-img-title clearfix">
										下肢静脉曲张手术全程记录
									</div>
									<div class="teacher-sc-url">http://localhost:63342/inv/teacher.html</div>
								</div>
							</div>
							<div class="flexbox-img-there">
								<div class="teacher-img-btn">复制链接</div>
							</div>
						</div>
					</div>
					<div class="flexbox-img-auto">
						<div class="three-img-column">
							<div class="flexbox-img-one">
								<img src="../assets/img/img10.png" alt="icon"/>
							</div>
							<div class="flexbox-img-two">
								<div class="flexbox-img-padding">
									<div class="flexbox-img-title clearfix">
										下肢静脉曲张手术全程记录
									</div>
									<div class="teacher-sc-url">http://localhost:63342/inv/teacher.html</div>
								</div>
							</div>
							<div class="flexbox-img-there">
								<div class="teacher-img-btn">复制链接</div>
							</div>
						</div>
					</div>


				</div>
			</div>
		</div>

	</div>
</template>

<script>
const Swiper = window.Swiper

export default {
	data: function () {
		return {
			swiper: undefined
		}
	},
	created () {
		this.swiper = new Swiper('#swiper-container-1', {
			pagination: '#swiper-pagination-1',
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

</style>
