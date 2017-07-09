<template>
	<div class="achilden">
		<slot name='title'></slot>
		<p class="p1">
			更多&nbsp;>
		</p>
		<div class="child1-banner">
			<slot name='main'></slot>
		</div>
		
	</div>
</template>
<style>
	.child1-banner{width: 100%;overflow-x: auto;position: absolute;top: 50px;left: 0 ;height:200px;overflow-y:hidden;overflow:scroll; }
	.achilden{height: 250px;width: 100%;margin: 10px 0;background-color: #fff;background-color: #fff;position: relative;overflow: hidden;}
	.achilden .p1{position: absolute;top: 0;right: 5%;color: #46b95e;font-size: 14px;line-height: 50px;font-family: '黑体'}
</style>

