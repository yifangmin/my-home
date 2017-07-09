<template>
	<div class="tabberlist">
		<wrap>
			<item txt='首页' id="home" @change="get">
				<img src="../../assets/images/ic_tab_home_normal.png" slot='a' class="icon">
				<img src="../../assets/images/ic_tab_home_active.png" slot='b' class="icon">
			</item>
			<item txt='书影音' id="child1" @change="get">
				<img src="../../assets/images/ic_tab_subject_normal.png" slot='a' class="icon">
				<img src="../../assets/images/ic_tab_subject_active.png" slot='b' class="icon">
			</item>
			<item txt='广播' id="child2" @change="get">
				<img src="../../assets/images/ic_tab_status_normal.png" slot='a' class="icon">
				<img src="../../assets/images/ic_tab_status_active.png" slot='b' class="icon">
			</item>
			<item txt='小组' id="child3" @change="get">
				<img src="../../assets/images/ic_tab_group_normal.png" slot='a' class="icon">
				<img src="../../assets/images/ic_tab_group_active.png" slot='b' class="icon">
			</item>
			<item txt='我的' id="child4" @change="get">
				<img src="../../assets/images/ic_tab_subject_normal.png" slot='a' class="icon">
				<img src="../../assets/images/ic_tab_subject_active.png" slot='b' class="icon">
			</item>
		</wrap>	
	</div>
</template>
<script type="text/javascript">
import wrap from './wrap'
import item from './item'
	export default {
		  components:{
		  	wrap,
		  	item
		  }, 
		data:function () {
		  	return {
		  		sel:'home'
		  	}		
		},
		methods:{
			get:function(val){
				this.sel=val
			}
		}
	}
</script>
