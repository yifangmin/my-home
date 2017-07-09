<template>
	<div class="child2">
		<conter>
			<div class="child2-box2">
				<h3 class="bt">广播</h3>
				<span class="pic3"><img src="../assets/images/ic_status_search_user.png"></span>
				<span class="pic2"><img src="../assets/images/ic_chat_green.png"></span>
			</div>
		</conter>
		<div class="child2-box3">
			<child2list></child2list>
			<div class="child2-bottom"></div>
		</div>
		
		
	</div>
</template>
<script type="text/javascript">
import conter from './top/header'
import child2list from './child2list'
	export default {
		  components:{
		  	conter,
		  	child2list
		  }, 
	}
</script>
<style type="text/css">
	.child2-box3{overflow-y: auto;height: 556px;margin-top: 89px;}
	.child2-bottom{height: 75px;clear: both;}
</style>

