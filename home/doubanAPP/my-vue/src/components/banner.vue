<template>
	<div class="swiper-container" :class="swipeid">
			<div class="swiper-wrapper">
				<slot name="nav"></slot>
			</div>
		
		<div :class='{"swiper-pagination":pagination}' :style='{"text-align":paginationDirection}'></div>
	</div>
</template>

<script>
import '../assets/libs/swiper/js/swiper.js';
	export default {
		props:{
			swipeid:{
				type:String,
				default:''
			},
			pagination:{
				type:Boolean,
				default:true
			},
			paginationDirection:{
				type:String,
				default:'center'
			},
			loop:{
				type:Boolean,
				default:true
			},
			direction:{
				type:String,
				default:'horizontal'
			},
			autoplay:{
				type:Number,
				default:100
			},
			paginationtype:{
				type:String,
				default:'bullets'
			},
			effect:{
				type:String,
				default:'slide'
			}
		},
		mounted:function(){
			var That=this;
			new Swiper('.'+That.swipeid,{
				loop:That.loop,
				direction:That.direction,
				autoplay:That.autoplay,
				paginationtype:That.paginationtype,
				effect:That.effect,
				pagination:'.swiper-pagination'
			})
		}
	}
</script>
<style type="text/css">
	@import '../assets/libs/swiper/css/swiper.css';
	.swiper-container{z-index: -1;height:200px;/*position: absolute;top: 88px*/}
	
	.swiper-container img{width: 100%;}
	.swiper-container{background:#fff;}
	.swiper-pagination-bullet-active {background: white;}
</style>
