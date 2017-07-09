<template>
	<div class="child2list">
		<div class="child2a">
			<div class="pic"><img src="../assets/images/ic_status_anonymous_header.png"></div>
				<h4 class="a0">发现有趣的人<br/>
				<span class="child2b1">关注他们，发现更大的世界</span></h4>
		</div>
		<ul class="child2c">
			<li  v-for="(item,index) in arr" v-show='item.bol'>
				<p class="c0"  @click='fn(index)'>x</p>
				<div>
					<img :src="item.mysrc">
					<div class="c4">
						<h4 class="c2">{{ item.txt }}<br/><span class="c3">{{ item.num }}</span></h4>
						<button class="btn">关注</button>
						<br/>
						<p class="wz">{{ item.des }}</p><br/>
						<div class="c5">
							<img :src="item.mysrc1">
						</div>
						<div class="c6">
							<span class="c7" @click='add(index)'><img src="../assets/images/ic_like_full.png"> &nbsp;{{ item.number }}</span> &nbsp;&nbsp;&nbsp;&nbsp;<span class="c8"><img src="../assets/images/ic_feedback_comment.png"> &nbsp;{{ item.b }}</span>
						</div>
					</div>
				</div>
			</li>
		</ul>
		<div class="child2-bottom"></div>
	</div>
</template>
<script type="text/javascript">

export default {
	data:function(){
	    return {
	        arr:[
	      		{mysrc:require('../assets/images/ic_user_info_location.png'),txt:'风清扬',des:'爱指向处于虚弱的他人。',num:'3065人关注',mysrc1:require('../assets/images/6.jpg'),bol:true,number:785,a:true,b:12},
	       		{mysrc:require('../assets/images/9.jpg'),txt:'残雪',des:'早春，微寒缠绵，风，温和的吹醒，春的语言，柳丝抽芽，百花争艳，桃花灼灼的世界是温婉多情的烟花三月。柳岸花堤，亭水榭间，行吟山水，一梦千年。',num:'2452人关注',mysrc1:require('../assets/images/5.jpg'),bol:true,number:757,a:true,b:74},
	       		{mysrc:require('../assets/images/ic_user_info_gender.png'),txt:'晴耕雨读',des:'夜色出了名地静寂。如果那轮月亮，放弃了自己，外边的那只小狗还会不会勇敢地叫，不知道。是静，总有鸟鸣山更幽般的提醒，或者说着重强调。',num:'242人关注',mysrc1:require('../assets/images/7.jpg'),bol:true,number:2,a:true,b:452},
	      		{mysrc:require('../assets/images/w4.png'),txt:'侠客行',des:'若是真要追究，那不明源头的情感自是首要。从来飘忽不定的东西，很难掌握，却是一直如初地任性，而常常，那样天真，你很难舍得对它质问。',num:'2572人关注',mysrc1:require('../assets/images/8.jpg'),bol:true,number:85,a:true,b:785},
	      		{mysrc:require('../assets/images/10 (11).jpg'),txt:'墨敏棋妙',des:'初夏的雨夜，温柔的思念寻着一程芳香，落入清墨笔端，借花笺取一段文字，染上笔尖的爱恋，在离你心最近的地方，点亮一首馨香的诗行，让时间煮雨，就停留在此时，为你倾心，且听风吟，我在烟雨中等你，许你一场花季，许你光阴不老，还我一世牵挂。',num:'78527人关注',mysrc1:require('../assets/images/1.jpg'),bol:true,number:8785,a:true,b:5},
	      		{mysrc:require('../assets/images/10 (1).jpg'),txt:'凡客居',des:'我独坐在沙发上回味着被岁月冲淡的年味儿。我似乎闻到了灶糖的甜香，闻到了枣花馒头的香味儿，闻到了煮猪肉的浓香，闻到了猪肉白菜馅饺子的美味儿，闻到了鞭炮的气味儿……',num:'27852人关注',mysrc1:require('../assets/images/2.jpg'),bol:true,number:45,a:true,b:45},
	      		{mysrc:require('../assets/images/10 (2).jpg'),txt:'老炮儿',des:'微光盈盈斟满碧螺春,如乡音之韶乐在暗夜妩媚',num:'58278人关注',mysrc1:require('../assets/images/3.jpg'),bol:true,number:875,a:true,b:452},
	      		{mysrc:require('../assets/images/10 (3).jpg'),txt:'行靖',des:'椰树花丛，楼角檐下 空中云里，与你嘻戏.',num:'856387人关注',mysrc1:require('../assets/images/4.jpg'),bol:true,number:9542,a:true,b:12},
	        ],
	    }
	},
    methods:{
	    fn:function(i){
	      this.arr[i].bol=false
    	},
    
	    add:function(i){
	         this.arr[i].number++
	    },
	},
}
</script>
<style type="text/css">
	.child2list{position: absolute;top: 89px;width: 100%;background: #ffffff;height: 556px;overflow-y: auto;}
	.child2a{height:80px;}
	.child2a .pic{width:25%;padding:15px 15px 15px 50px;text-align:center;}
	.pic img{width:100%;float: left;display: inline-block;}
	.a0{text-align: left;line-height:20px;color: #666;margin-left:42%;font-size: 20px;font-weight: bold;}
	.child2b1{font-size: 12px;color: #999;line-height:16px;}
	.child2c{padding:0 4%;width: 92%;margin-top:40px;}
	.child2c li{margin:15px 0;background: #fff;border-radius: 10px;box-shadow: 10px 10px 30px #eee;padding:10px 2% 15px 3%;*/display: inline-block;width: 95%;}
	.child2c .c0{padding-left: 92%;font-family: "Arial";color: #e1e1e1;line-height:10px;font-size:12px;}
	.child2c img{width: 60px;height: 60px;border-radius: 50%;float: left;display:block;}
	.child2c .c4{padding:0 10px 0 20%;width:73%;}
	.child2c .c4 .c2{line-height:16px;color: #000;float: left;height: 30px;padding: 15px 10px;text-align: left;font-size: 18px;}
	.child2c .c4 .btn{border:none; float: right;padding:6px 20px;background: #1BAD53;border-radius: 5px;margin:15px 0;}
	.child2c .c3{font-size:12px;color: #999;line-height:12px;}
	.child2c .wz{margin-top:50px;font-size:16px;color: #000;line-height:20px;text-align: left;}
	.child2c .c5{width:100%;}
	.child2c .c5 img{border-radius: 0;display:inline-block;width:100%;height:  100%; margin-bottom:20px;}
	.child2c .c6{text-align: left;}
	.c7, .c8{display:inline-block;}
	.child2c .c6 img{width:20px;height: 20px;}
	.child2-bottom{height:60px;clear: both;}
</style>