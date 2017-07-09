<template>
	<div id="child3list">
		<div class="child3-d">
			<div class="d1"><p>418975个小组等着你来玩<br /><span class="d2">立即选择加入吧！</span></p><br /><span class="d3">根据你的兴趣推荐</span>
			</div>
		</div>

		<div class="child3list-1">
			<div class="child3-d1"><p>书影音</p></div>
			<div class="child3-d2"><p>音乐</p></div>
			<ul class="child3-d3" v-for="item in arr">
				<li>
					<img class="pic"  :src="item.mysrc">
					<div class="d4">
						<h3>{{ item.txt }}<br/><span class="d5">{{ item.des }}</span></h3>
						<span class="d6">{{ item.num }}</span>
						<img :src="item.mysrc1">
					</div>
				</li>

			</ul>
		</div>
		<div class="child3list-1">
			<div class="child3-d1 child3-dd1"><p>会生活</p></div>
			<div class="child3-d2"><p>旅行</p></div>
			<ul class="child3-d3" v-for="item in brr">
				<li>
					<img class="pic"  :src="item.mysrc">
					<div class="d4">
						<h3>{{ item.txt }}<br/><span class="d5">{{ item.des }}</span></h3>
						<span class="d6">{{ item.num }}</span>
						<img :src="item.mysrc1">
					</div>
				</li>

			</ul>
		</div>
		<div class="child3list-1">
			<div class="child3-d1 child3-dd2"><p>看世界</p></div>
			<div class="child3-d2"><p>艺术</p></div>
			<ul class="child3-d3" v-for="item in crr">
				<li>
					<img class="pic"  :src="item.mysrc">
					<div class="d4">
						<h3>{{ item.txt }}<br/><span class="d5">{{ item.des }}</span></h3>
						<span class="d6">{{ item.num }}</span>
						<img :src="item.mysrc1">
					</div>
				</li>
			</ul>
		</div>
		<div class="child3list-1">
			<div class="child3-d1 child3-dd3"><p>有意思</p></div>
			<div class="child3-d2"><p>动漫</p></div>
			<ul class="child3-d3" v-for="item in drr">
				<li>
					<img class="pic"  :src="item.mysrc">
					<div class="d4">
						<h3>{{ item.txt }}<br/><span class="d5">{{ item.des }}</span></h3>
						<span class="d6">{{ item.num }}</span>
						<img :src="item.mysrc1">
					</div>
				</li>
			</ul>
		</div>
		<div class="child3list-1">
			<div class="child3-d1 child3-dd4"><p>精选推荐</p></div>
			<div class="child3-d2"><p>影视</p></div>
			<ul class="child3-d3" v-for="item in err">
				<li>
					<img class="pic"  :src="item.mysrc">
					<div class="d4">
						<h3>{{ item.txt }}<br/><span class="d5">{{ item.des }}</span></h3>
						<span class="d6">{{ item.num }}</span>
						<img :src="item.mysrc1">
					</div>
				</li>
			</ul>
		</div>


		<div class="child3-bottom"></div>
	</div>
</template>

<script type="text/javascript">
export default {
  data:function(){
    return {
        arr:[
      		{mysrc:require('../assets/images/003.jpg'),txt:'日剧fans',des:'请自由讨论你所热爱的与日剧相关的话题。以上。',num:'306567人',mysrc1:require('../assets/images/ic_group_check_anonymous.png')},
      		{mysrc:require('../assets/images/005.jpg'),txt:'Gossip Girl',des:'I love you.Always have.Always will.',num:'527532人',mysrc1:require('../assets/images/ic_group_check_anonymous.png')},
      		{mysrc:require('../assets/images/004.jpg'),txt:'周润发',des:'中国华语电影领军人物.',num:'527532人',mysrc1:require('../assets/images/ic_group_check_anonymous.png')},
      		{mysrc:require('../assets/images/006.jpg'),txt:'寒战 寒戰',des:'I love you.Always have.Always will.',num:'2757527人',mysrc1:require('../assets/images/ic_group_check_anonymous.png')},
        ],
        brr:[
      		{mysrc:require('../assets/images/10 (1).jpg'),txt:'自助欧洲游',des:'多彩的欧洲，等着你。',num:'306567人',mysrc1:require('../assets/images/ic_group_check_anonymous.png')},
      		{mysrc:require('../assets/images/10 (2).jpg'),txt:'沙发客',des:'沙发客，是一种文化',num:'527532人',mysrc1:require('../assets/images/ic_group_check_anonymous.png')},
      		{mysrc:require('../assets/images/10 (3).jpg'),txt:'全国地铁爱好者',des:'地铁爱好者的乐园，欢迎来po各地的地铁票和它们背后的故事',num:'527532人',mysrc1:require('../assets/images/ic_group_check_anonymous.png')},
      		{mysrc:require('../assets/images/10 (4).jpg'),txt:'我要去台湾',des:'去台湾，是我17岁的梦想，为这个梦想，我....',num:'2757527人',mysrc1:require('../assets/images/ic_group_check_anonymous.png')},
        ],
        crr:[
      		{mysrc:require('../assets/images/10 (5).jpg'),txt:'芭蕾 Ballet',des:'芭蕾人生，透过舞者的灵魂和表象去欣赏芭蕾艺术的真实。',num:'306567人',mysrc1:require('../assets/images/ic_group_check_anonymous.png')},
      		{mysrc:require('../assets/images/10 (6).jpg'),txt:'国画',des:'中国的山水、人物、花鸟、龙鱼、畜兽、宫室、墨竹、道释',num:'527532人',mysrc1:require('../assets/images/ic_group_check_anonymous.png')},
      		{mysrc:require('../assets/images/10 (7).jpg'),txt:'泥金斯基',des:'Le Dieu La Danse。19岁，他名动天下，29岁，他彻底疯掉。空前绝后。',num:'527532人',mysrc1:require('../assets/images/ic_group_check_anonymous.png')},
      		{mysrc:require('../assets/images/10 (8).jpg'),txt:'去法国读艺术',des:'已经去了的，即将要去的，梦想着以后会去的，都欢迎进来。',num:'2757527人',mysrc1:require('../assets/images/ic_group_check_anonymous.png')},
        ],
        drr:[
      		{mysrc:require('../assets/images/10 (9).jpg'),txt:'魔兽世界',des:'Staorm，Earth，and Fire，heed my call！风暴，大地，火焰，接受我的召唤吧！....',num:'306567人',mysrc1:require('../assets/images/ic_group_check_anonymous.png')},
      		{mysrc:require('../assets/images/10 (10).jpg'),txt:'圣斗士',des:'喜欢圣斗士',num:'527532人',mysrc1:require('../assets/images/ic_group_check_anonymous.png')},
      		{mysrc:require('../assets/images/10 (11).jpg'),txt:'国漫',des:'说说你喜欢的国漫....',num:'527532人',mysrc1:require('../assets/images/ic_group_check_anonymous.png')},
      		{mysrc:require('../assets/images/10 (12).jpg'),txt:'王者荣耀',des:'欢迎来到王者荣耀！猥琐发育，别浪！',num:'2757527人',mysrc1:require('../assets/images/ic_group_check_anonymous.png')},
        ],
        err:[
      		{mysrc:require('../assets/images/10 (13).jpg'),txt:'马特达蒙',des:'从骄阳似我里的问题少年，到雷普利的变态小天才，从伯恩系列里的经典特工...',num:'306567人',mysrc1:require('../assets/images/ic_group_check_anonymous.png')},
      		{mysrc:require('../assets/images/10 (14).jpg'),txt:'Gossip Girl',des:'I love you.Always have.Always will.',num:'527532人',mysrc1:require('../assets/images/ic_group_check_anonymous.png')},
      		{mysrc:require('../assets/images/10 (15).jpg'),txt:'小抄',des:'只言片语，残章断句。出处有章，摘抄无法。任何有意味的都可以添加，...',num:'527532人',mysrc1:require('../assets/images/ic_group_check_anonymous.png')},
      		{mysrc:require('../assets/images/10 (16).jpg'),txt:'川外的小豆豆',des:' “大道之行，天下为公。”本小组施共同管理制 ',num:'2757527人',mysrc1:require('../assets/images/ic_group_check_anonymous.png')},
        ],
    }
  }
}

</script>
<style type="text/css">
	#child3list{position: absolute;top: 89px;width: 100%;background: #ffffff;height: 556px;overflow-y: auto;}
	.child3-d{background: url(../assets/images/ic_group_banner.png);background-repeat:no-repeat;height:140px;background-size:100% 140px;margin-bottom: 15px;}
	.child3-d .d1 p{height:60px;text-align: center;padding-top:50px;font-size: 22px;font-weight: bold;line-height:22px;}
	.child3-d .d2{font-size:18px;line-height:15px;color:#929292;}
	.child3-d .d3{font-size:14px;line-height:15px;color:#929292;text-align: left;display:block;padding-left:20px}
	
	.child3-d1{margin:0 15px;height:35px;background:url(../assets/images/ic_rec_group_banner_1.png) no-repeat;background-size:100% 80px;border-radius: 5px;padding:45px 0 0 10px;text-align: left;}
	.child3-dd1{background:url(../assets/images/ic_rec_group_banner_2.png) no-repeat;background-size:100% 80px;}
	.child3-dd2{background:url(../assets/images/ic_rec_group_banner_3.png) no-repeat;background-size:100% 80px;border-radius: 5px;}
	.child3-dd3{background:url(../assets/images/ic_rec_group_banner_4.png) no-repeat;background-size:100% 80px;border-radius: 5px;}



	.child3-d1 p{top:50x;color: #fff;line-height:20px;}
	.child3-d2{margin:35px 15px;border-bottom:1px solid #929292;position: relative;}
	.child3-d2 p{background: #fff;padding: 15px 25px;position: absolute;top: -25px;left:41%;font-size:16px;font-weight: bold;display: block;}

	.child3list-1{border-bottom:15px solid #eee;padding-top:15px; }
	.child3-d3{margin: 0 15px;}
	.child3-d3 li{margin:20px 0;height:65px;}
	.child3-d3 li .pic{float: left;width:18%;height:65px;border-radius:6px;}
	.child3-d3 li .d4{padding-left:20%;}
	.child3-d3 li .d4 h3{float: left;width:58%;line-height:16px;font-size:20px;font-weight: bold;padding:6px 0;text-align: left;}
	.child3-d3 li .d5{font-size:12px;line-height:10px;color:#929292;}
	.child3-d3 li .d6{float: left;line-height:70px;font-size:14px;color:#929292;padding: 0 3%;}
	.child3-d3  .d4 img{float:right;width:9%;padding-top:20px;}
	.child3-bottom{height:42px;clear: both;}


</style>