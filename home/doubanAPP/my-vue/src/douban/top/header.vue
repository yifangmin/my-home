<template>
	<div class="header" :style='{background:col}'>
		<slot></slot>
		<slot name='bdd'></slot>
		<slot name="cdd"></slot>
	</div>
</template>
<script>
	export default {
		props:{
			col:{
				default:'#f7f7f7'
			}
		},
	}
</script>
<style type="text/css">
	.header{width: 100%;height:58px;position:fixed;top: 0;left: 0;text-align: center;padding-top:30px;border-bottom: 1px solid #b9b9b9;margin-bottom: 50px;}
	.bt{line-height:58px;font-size: 20px;font-weight: bold;text-align: center;}
</style>
