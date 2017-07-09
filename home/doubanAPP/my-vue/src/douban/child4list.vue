<template>
	<div class="mine1">
		<div class="m1top">
			<div class="m1pic"><img src="../assets/images/media.jpg" /></div>
			<div class="name">
				<p class="m1p1">墨敏棋妙<img src="../assets/images/m1name_03.jpg"></p>
				<p class="m1p2">ID:18526475984</p>
				<p class="m1p3">个人主页&nbsp;<span>></span></p>
			</div>
				<p class="follow">关注：56
				&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;被关注：52778522</p>
		</div>
		<div class="m1bot">
			<div class="m1btop">
				<p class="m1bp1">提醒</p>
				<p class="m1bp2">></p>
			</div>
			<p class="m1bp3">暂无更新数据</p>
		</div>
		<ul class="m1ul">
			<li v-for="item in arr">
				<img :src='item.mysrc'>
				<p>{{ item.txt }}</p>
			</li>
			<li></li>
		</ul>
	</div>
</template>
<style type="text/css">
	ul{list-style: none;}
	.mine1{background-color: #f7f7f7;position:absolute;top:90px;}
	.m1top{width: 100%;height: 120px;background-image: url(../assets/images/mine1bj.jpg);background-size: 100% 100%;position: relative;}
	.m1pic{width: 70px;margin-left: 20px;float: left;}
	.m1pic img{width: 100%;height: 100%;border-radius:50%;margin-top: 25px}
	.m1top .name{padding-top: 30px;text-align: left;margin-left: 15px;color: #f1ffff;height: 50px;border-bottom: 1px solid #ffb161;font-family: '黑体';position: absolute;width: 72%;top: 0;right: 0}
	.m1top .name .m1p1{font-size: 20px;line-height: 25px}
	.m1top .name .m1p1 img{width: 12px;height: 15px;margin-left: 5px;}
	.m1top .name .m1p2{font-size: 14px}
	.m1top .name .m1p3{position: absolute;right: 30px;bottom: 10px;}
	.m1top .name .m1p3 span{font-weight: bold;font-size: 16px;}
	.m1top .follow{position: absolute;bottom: 10px;left:105px ;color: #f1ffff;font-size: 14px}

	.m1bot{background-color: #fff;margin: 15px 0;height: 100px;}

	.m1btop{width:90%;margin-left:5%;border-bottom: 1px solid #e5e5e5;height: 45px;}

	.m1btop .m1bp1{line-height: 45px;font-size: 16px;padding-left:10%;text-align: left;float: left;width: 50%;background: url(../assets/images/m1bot.png) no-repeat;background-size:30px;background-position:0 9px;color: #404040;}
	.m1btop .m1bp2{line-height: 45px;float: right;margin-right:4%;font-size:20px;font-family: '黑体';color: #ccc;font-weight: bold; }

	.m1bot .m1bp3{line-height: 45px;font-size: 14px;color: #d1d1c3;text-align: center;}
	.m1ul{width: 100%;height: 306px;background-color: #fff}
	.m1ul img{width: 30px;margin-top: 20px}
	.m1ul li{height:102px;width: 25%;border-top: 1px solid #f7f7f7;float: left;}
	.m1ul p{line-height: 30px;color: #373737;font-size: 14px;text-align: center;}
</style>
<script>
export default {
  data:function(){
    return {
        arr:[
      		{txt:'喜欢',mysrc:require('../assets/images/mli1.png')},
      		{txt:'日记',mysrc:require('../assets/images/ic_my_note.png')},
      		{txt:'相册',mysrc:require('../assets/images/ic_my_album.png')},
      		{txt:'我的广播',mysrc:require('../assets/images/ic_my_status.png')},
      		{txt:'电影.电视',mysrc:require('../assets/images/ic_my_movies_tvs.png')},
      		{txt:'读书',mysrc:require('../assets/images/ic_my_books.png')},
      		{txt:'音乐',mysrc:require('../assets/images/ic_my_music.png')},
      		{txt:'同城活动',mysrc:require('../assets/images/ic_my_events.png')},
      		{txt:'豆列',mysrc:require('../assets/images/ic_my_doulist.png')},
      		{txt:'订单',mysrc:require('../assets/images/ic_my_orders.png')},
      		{txt:'钱包',mysrc:require('../assets/images/ic_my_wallet.png')}
        ],
    }
  }
}
</script>
