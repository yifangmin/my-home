<template>
	<div class="child1list">
		<conter>
			<div class="child1list-a"></div>
			<div class="box2" >
				<h3 class="bt">书影音</h3>
				<span class="pic3"><img src="../assets/images/ic_actionbar_search_icon.png"></span>
				<span class="pic2"><img src="../assets/images/ic_chat_green.png"></span>
			</div>
		</conter>
   		<div class="a_top">
			<p class="ap" @click='fn(0)' :class='{green:set==0}'><router-link to="/child1/add1">电影</router-link></p>
			<p class="ap" @click='fn(1)' :class='{green:set==1}'><router-link to="/child1/add2">读书</router-link></p>
			<p class="ap" @click='fn(2)' :class='{green:set==2}'><router-link to="/child1/add3">电视</router-link></p>
			<p class="ap" @click='fn(3)' :class='{green:set==3}'><router-link to="/child1/add4">同城</router-link></p>
			<p class="ap" @click='fn(4)' :class='{green:set==4}'><router-link to="/child1/add5">音乐</router-link></p>
			<router-view></router-view>
    	</div>

	</div>
</template>
<script type="text/javascript">
import conter from './top/header'
import childlist from './child1list'

	export default {
		components:{
		  	conter,
		  	childlist
		},
		data:function () {
		  	return {
		  		set:0,
		  	}
		}, 
		methods:{
		  	fn:function(i){
		  		this.set=i;
		  	}
		}
	}
	// router.push("/child1/add1")
</script>
<style type="text/css">
	.aution1{/*border: 1px solid #eee;*/overflow-y:auto;height: 621px;margin-top:42px; }
	.child1list-a{width: 5px;height: 89px;position:fixed;top: 0;right: 0;z-index: 100;}
	.a_top{position: absolute;top: 89px;width: 100%;z-index: -1;}
	
	.bt{line-height:58px;font-size: 20px;font-weight: bold;text-align: center;}
	.ap{float: left;width: 20%;color:#ccc;line-height: 40px;border-bottom: 1px solid #e4e4e4;text-align: center;}
	.green{border-bottom: 2px solid green;}
	.ap a{color:#898989;}
	.green a{color:green;}
	
</style>

