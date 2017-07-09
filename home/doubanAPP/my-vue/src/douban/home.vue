<template>
	<div >
		<Conter col='#42c055'>
			<div class="box1">
				<input class="ipt" value="影视 图书 唱片 小组等" style="background-color:#ffffff"></input>
				<span class="pic1"><img src="../assets/images/ic_scan_gray.png"></span>
				<span class="pic2"><img src="../assets/images/01.png"></span>
			</div>
		</Conter>
		<div class="banner">
			<Banner swipeid='swipe01' :autoplay=2000>
				<div class="swiper-slide" slot="nav"><img src="../assets/images/1.jpg"></div>
				<div class="swiper-slide" slot="nav"><img src="../assets/images/2.jpg"></div>
				<div class="swiper-slide" slot="nav"><img src="../assets/images/3.jpg"></div>
				<div class="swiper-slide" slot="nav"><img src="../assets/images/4.jpg"></div>
			</Banner>
			<div class="mainConten">
				<Homelist></Homelist>
				<div class="home-bottom"></div>
			</div>
		</div>
	</div>
</template>
<script type="text/javascript">
import Conter from './top/header'
import Banner from '../components/banner'
import Homelist from './homelist'
	export default {
		  components:{
		  	Conter,
		  	Banner,
		  	Homelist,
		  
		  }, 
		  created:function () {
		  	// this.search();
		  },
		  methods:{
		  	search:function(){
		  		// console.log('search');
		  		// this.axios.get('/api/homeData').then(
		  		// 	(response)=>{
		  		// 	console.log(response.data.data.recommend_feeds[0]);
		  		// 	this.arr=response.data.data.recommend_feeds;
		  		// });
		  		console.log(54)
		  	}
		},
		data:function(){
			return {
				arr:[]
			}
		}
	}
</script>
<style type="text/css">
    .banner{overflow-y: auto;height: 556px;margin-top: 89px;}

	.swiper-slide img{width: 100%;height: 100%;}
	.ipt{width:73%;height:42px;border: none; background-color:#ffffff;border-radius:8px;padding-left:10%;color:#d3d3d3;background: url("../assets/images/ic_search.png") no-repeat;background-position:8px 10px;background-size:23px 23px;}
	.ipt{position:absolute;left:2%;bottom:8px;}
	.pic1 img{width:28px;position: absolute;left:76%;top:45px;}
	.pic2 img{width:36px;position: absolute;left:88%;top:40px;}
	.pic3 img{width:36px;position: absolute;left:76%;top:45px;}
	.home-bottom{height:75px;clear: both;}
	/*.mainConten{position: absolute;top:260px;z-index: -1;}*/
</style>

