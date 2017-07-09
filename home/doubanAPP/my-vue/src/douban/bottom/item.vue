<template>
	<div class="itemlist" @click='fn()'>
		<span v-show='bol' class="my"><slot name="a"></slot><br/></span>
		<span v-show='!bol'><slot name="b"></slot><br/></span>
		<span v-text='txt'></span>
	</div>
</template>
<script type="text/javascript">
	export default {
		props:['txt','id'],
		computed:{
			bol:function () {
				if (this.$parent.$parent.sel==this.id) {
					return false
				}
				return true;
			}
		},
		methods:{
			fn:function(){
				this.$router.push('/'+this.id)
				this.$emit('change',this.id)
				if (this.id=='child1') {
					this.$router.push('/child1/add1')
					console.log('354')
				}
			}
		}
	}
</script>
<style type="text/css">
	.itemlist{width: 20%;text-align: center;float: left;padding: 5px 0;}
	span{font-size: 18px;color: #929292;/*line-height:30px;*/font-family: '微软雅黑'；}
	.icon{width: 35px;/*line-height:40px;*/}
</style>
