<template>
  <div class="home2child">
  <slot name='home2h'></slot>
  <slot name='home2p'></slot>
  <slot name='home2img'></slot>
  
  </div>
</template>
<style>
	.home2child{position: relative;border-bottom: 1px solid #ccc}
	.home2h{width: 60%;margin-left: 20px;text-align: left;}	
	.home2h h2{font-size: 20px;margin-bottom: 10px;margin-top: 10px}	
	.home2h p{font-size: 14px;color: #a4a4a4}
	.home2img{width: 100px;position: absolute;right: 20px;top: 0}
	.home2p{text-align: left;color: #a4a4a4;margin: 10px 0 10px 20px}
</style>