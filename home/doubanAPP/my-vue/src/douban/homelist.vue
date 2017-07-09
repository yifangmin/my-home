<template>
	<div class="homelist">
	  	<h1 class="home2h1">热点</h1>
	  	<Homelist1 v-for='item in arr1'>
	  		<div slot='home2h' class="home2h">
	  			<h2>{{ item.title }}</h2>
	  			<p>{{ item.target.desc }}</p>
	  		</div>
	  		<p slot='home2p' class="home2p">作者：{{ item.target.author.name }}</p>
	  		<img class="home2img" slot='home2img' :src='item.target.cover_url' />
	  	</Homelist1>
	</div>
</template>
<style>
	.home2h1{border-left: 5px solid #ff8454;height: 25px;line-height: 25px;color: #ff8454;margin-top: 15px;padding-left: 20px;font-size: 18px;text-align: left;line-height: 25px;}
  .hheight{height: 69px}
  
</style>
<script>
import Homelist1 from './homelist1'
export default {
  components:{
  	Homelist1
  },
    mounted:function(){
    // this.search()
  },
  data:function(){
    return {
       arr1: [
        {
            "source_cn": "",
            "layout": 1,
            "target": {
                "read_count": 1883,
                "photos_count": 0,
                "author": {
                    "avatar": require('../assets/images/pic2/a (1).jpg'),
                    "name": "大象公会"
                },
                "uri": "我们这一代人的成长年代，真正的诗歌课从来都是缺席的。",
                "more_pic_urls": [],
                "monitor_urls": [],
                "cover_url":  require('../assets/images/pic2/b (4).jpg'),
                "desc": "我们这一代人的成长年代，真正的诗歌课从来都是缺席的。",
                "impression_url": "",
                "monitor_url": ""
            },
            "title": "个人意见：为什么中国没有鲍勃·迪伦这样的民谣歌手",
            "source": "editor",
            "theme": null,
            "id": "127231",
            "card": null
        },
        {
            "source_cn": "",
            "layout": 1,
            "target": {
                "read_count": 0,
                "photos_count": 0,
                "author": {
                    "avatar": require('../assets/images/pic2/a (2).jpg'),
                    "name": "豆瓣"
                },
                "uri": "真想看狼叔一直打下去，文末有小贱贱彩蛋！",
                "more_pic_urls": [],
                "monitor_urls": [],
                "cover_url": require('../assets/images/pic2/b (3).jpg'),
                "desc": "真想看狼叔一直打下去，文末有小贱贱彩蛋！",
                "impression_url": "",
                "monitor_url": ""
            },
            "title": "《金刚狼3》剪掉的，这个混剪回忆杀全部还给你",
            "source": "editor",
            "theme": null,
            "id": "127174",
            "card": null
        },
        {
            "source_cn": "来自栏目：广播精选",
            "layout": 1,
            "target": {
                "read_count": 0,
                "photos_count": 0,
                "author": {
                    "avatar": require('../assets/images/pic2/a (3).jpg'),
                    "name": "豆瓣"
                },
                "uri": "听一个朋友说，家里很重、很难打开的卧室门，常常被蹊跷地打开……",
                "more_pic_urls": [],
                "monitor_urls": [],
                "cover_url": require('../assets/images/pic2/b (2).jpg'),
                "desc": "听一个朋友说，家里很重、很难打开的卧室门，常常被蹊跷地打开……",
                "impression_url": "",
                "monitor_url": ""
            },
            "title": "广播精选｜跨物种的精诚合作真是好感人",
            "source": "editor",
            "theme": {
                "uri": "douban://douban.com/selection/theme/17",
                "id": "17",
                "name": "广播精选",
                "desc": "豆瓣用户们分享的趣事逸闻，奇思妙想。"
            },
            "id": "127163",
            "card": null
        },
        {
            "source_cn": "来自栏目：爱美丽",
            "layout": 1,
            "target": {
                "read_count": 25639,
                "photos_count": 0,
                "author": {
                    "avatar": require('../assets/images/pic2/a (4).jpg'),
                    "name": "雾港"
                },
                "uri": "https://m.douban.com/note/609190529/",
                "more_pic_urls": [],
                "monitor_urls": [],
                "cover_url": require('../assets/images/pic2/b (5).jpg'),
                "desc": "若能与少年藤井树相遇于《情书》的书架前，你会选择穿什么香水？",
                "impression_url": "",
                "monitor_url": ""
            },
            "title": "爱美丽 | 这7支文艺系香水，犹如写给图书馆的七封情书",
            "source": "editor",
            "theme": {
                "icon_url": "若能与少年藤井树相遇于《情书》的书架前，你会选择穿什么香水？",
                "uri": "douban://douban.com/selection/theme/23",
                "id": "23",
                "name": "爱美丽",
                "desc": "护肤、美妆、穿搭、消费……有品质的时尚指南。"
            },
            "id": "127113",
            "card": null
        },
        {
            "source_cn": "来自栏目：玩家",
            "layout": 1,
            "target": {
                "read_count": 33021,
                "photos_count": 0,
                "author": {
                    "avatar":require('../assets/images/pic2/a (5).jpg'),
                    "name": "奶茶睡不醒"
                },
                "uri": "https://m.douban.com/note/608441157/",
                "more_pic_urls": [],
                "monitor_urls": [],
                "cover_url":require('../assets/images/pic2/b (6).jpg'),
                "desc": "这些知名的国产手帐到底怎么样？",
                "impression_url": "",
                "monitor_url": ""
            },
            "title": "玩家 | 我帮你们试用了最有名的16本国产手账",
            "source": "editor",
            "theme": {
                "uri": "douban://douban.com/selection/theme/22",
                "id": "22",
                "name": "玩家",
                "desc": "带你发现那些有趣的人和事。"
            },
            "id": "127170",
            "card": null
        },
        {
            "source_cn": "",
            "layout": 1,
            "target": {
                "read_count": 19941,
                "photos_count": 0,
                "author": {
                    "avatar": require('../assets/images/pic2/a (6).jpg'),
                    "name": "张今儿"
                },
                "uri": "一 “把手伸出来。”，老贝发来微信。 消失了整整三天，微信头像依旧是那只架着黑超的红猪，得意忘形地...",
                "more_pic_urls": [],
                "monitor_urls": [],
                "cover_url": require('../assets/images/pic2/b (8).jpg'),
                "desc": "一 “把手伸出来。”，老贝发来微信。 消失了整整三天，微信头像依旧是那只架着黑超的红猪，得意忘形地...",
                "impression_url": "",
                "monitor_url": ""
            },
            "title": "我的哆啦a梦男友",
            "source": "editor:linucb_online",
            "theme": null,
            "id": "126865",
            "card": {
                "name": "为你推荐"
            }
        },
        {
            "source_cn": "",
            "layout": 1,
            "target": {
                "read_count": 17761,
                "photos_count": 0,
                "author": {
                    "avatar": require('../assets/images/pic2/a (7).jpg'),
                    "name": "月光粥"
                },
                "uri": "有关过节的回忆 我们结束一段休假时光，仿佛从一个冗长的梦中醒来，脑中还残留着梦的痕迹。 空城 又到了...",
                "more_pic_urls": [],
                "monitor_urls": [],
                "cover_url": require('../assets/images/pic2/b (9).jpg'),
                "desc": "有关过节的回忆 我们结束一段休假时光，仿佛从一个冗长的梦中醒来，脑中还残留着梦的痕迹。 空城 又到了...",
                "impression_url": "",
                "monitor_url": ""
            },
            "title": "有关过节的回忆",
            "source": "editor:linucb_online",
            "theme": null,
            "id": "124887",
            "card": {
                "name": "为你推荐"
            }
        },
        {
            "source_cn": "",
            "layout": 1,
            "target": {
                "read_count": 6175,
                "photos_count": 0,
                "author": {
                    "avatar": require('../assets/images/pic2/a (8).jpg'),
                    "name": "真姬"
                },
                "uri": "@邦摇30s 邀请了厂牌主理、 乐队乐手、音乐媒体、 电台DJ等， 向你推荐2016最值得听的日音。 J-Rock、Ci...",
                "more_pic_urls": [],
                "monitor_urls": [],
                "cover_url": require('../assets/images/pic2/b (10).jpg'),
                "desc": "@邦摇30s 邀请了厂牌主理、 乐队乐手、音乐媒体、 电台DJ等， 向你推荐2016最值得听的日音。 J-Rock、Ci...",
                "impression_url": "",
                "monitor_url": ""
            },
            "title": "2016你最值得听的日音",
            "source": "editor:linucb_online",
            "theme": null,
            "id": "127095",
            "card": {
                "name": "为你推荐"
            }
        },
        {
            "source_cn": "",
            "layout": 1,
            "target": {
                "read_count": 10212,
                "photos_count": 0,
                "author": {
                    "avatar": require('../assets/images/pic2/a (9).jpg'),
                    "name": "豆瓣阅读"
                },
                "uri": "作者：Z先生 【编者按：本文节选自第四届豆瓣阅读征文大赛入围作品《专业吵架团》。在人工智能管理大都...",
                "more_pic_urls": [],
                "monitor_urls": [],
                "cover_url": require('../assets/images/pic2/b (11).jpg'),
                "desc": "作者：Z先生 【编者按：本文节选自第四届豆瓣阅读征文大赛入围作品《专业吵架团》。在人工智能管理大都...",
                "impression_url": "",
                "monitor_url": ""
            },
            "title": "广场舞如何拯救世界？",
            "source": "editor:linucb_online",
            "theme": null,
            "id": "125214",
            "card": {
                "name": "为你推荐"
            }
        },
        {
            "source_cn": "",
            "layout": 5,
            "target": {
                "read_count": 23040,
                "photos_count": 133,
                "author": {
                    "avatar": require('../assets/images/pic2/a (10).jpg'),
                    "name": "cp"
                },
                "uri": "我不爱女装爱军装",
                "more_pic_urls": [
                    // "https://qnmob2.doubanio.com/view/photo/large/public/p2421562385.jpg?imageView2/1/q/80/w/330/h/330/format/jpg",
                    // "https://qnmob2.doubanio.com/view/photo/large/public/p2318197232.jpg?imageView2/1/q/80/w/330/h/330/format/jpg"
                ],
                "monitor_urls": [],
                "cover_url":require('../assets/images/pic2/b (12).jpg'),
                "desc": "",
                "impression_url": "",
                "monitor_url": ""
            },
            "title": "东瀛国",
            "source": "editor:linucb_online",
            "theme": null,
            "id": "125073",
            "card": {
                "name": "为你推荐"
            }
        },
        {
            "source_cn": "",
            "layout": 1,
            "target": {
                "read_count": 10164,
                "photos_count": 0,
                "author": {
                    "avatar": require('../assets/images/pic2/a (11).jpg'),
                    "name": "番茄青年实验室"
                },
                "uri": "用刀划开一张纸，你以为一分为二，飞扬的纸屑告诉你我们洒满空气。——陈粉丸 废话多了容易漏短，还会让...",
                "more_pic_urls": [],
                "monitor_urls": [],
                "cover_url": require('../assets/images/pic2/b (13).jpg'),
                "desc": "用刀划开一张纸，你以为一分为二，飞扬的纸屑告诉你我们洒满空气。——陈粉丸 废话多了容易漏短，还会让...",
                "impression_url": "",
                "monitor_url": ""
            },
            "title": "1001 个好玩的人 | 一本“书”的正确打开方式",
            "source": "editor:linucb_online",
            "theme": null,
            "id": "127081",
            "card": {
                "name": "为你推荐"
            }
        },
        {
            "source_cn": "",
            "layout": 1,
            "target": {
                "read_count": 9983,
                "photos_count": 0,
                "author": {
                    "avatar": require('../assets/images/pic2/b (22).jpg'),
                    "name": "媚外"
                },
                "uri": "Simon Porte Jacquemus 是一位自学成才的年轻设计师。他成长于法国南部的一个小镇上，18 岁搬...",
                "more_pic_urls": [],
                "monitor_urls": [],
                "cover_url": require('../assets/images/pic2/b (14).jpg'),
                "desc": "👦🏻 Simon Porte Jacquemus 是一位自学成才的年轻设计师。他成长于法国南部的一个小镇上，18 岁搬...",
                "impression_url": "",
                "monitor_url": ""
            },
            "title": "设局 · JACQUEMUS | 这位法国九〇后设计师有点甜",
            "source": "editor:linucb_online",
            "theme": null,
            "id": "127079",
            "card": {
                "name": "为你推荐"
            }
        },
        {
            "source_cn": "",
            "layout": 2,
            "target": {
                "read_count": 15242,
                "photos_count": 0,
                "author": {
                    "avatar": require('../assets/images/pic2/a (13).jpg'),
                    "name": "能工巧匠沙门哥"
                },
                "uri": "我不爱植物。当然，对于美丽的花草，我也像正常人一样喜欢，但我对植物并没有强烈的好奇心与兴趣，不像对矿物或星空一样有着强烈的求知欲。尽管如此，我却追看李澜老师的博客“花草茶事”长达数年，从不觉得厌倦...",
                "more_pic_urls": [],
                "monitor_urls": [],
                "cover_url": require('../assets/images/pic2/b (15).jpg'),
                "desc": "我不爱植物。当然，对于美丽的花草，我也像正常人一样喜欢，但我对植物并没有强烈的好奇心与兴趣，不像对矿物或星空一样有着强烈的求知欲。尽管如此，我却追看李澜老师的博客“花草茶事”长达数年，从不觉得厌倦...",
                "impression_url": "",
                "monitor_url": ""
            },
            "title": "一间四面开窗的房间",
            "source": "editor:linucb_online",
            "theme": null,
            "id": "125010",
            "card": {
                "name": "为你推荐"
            }
        },
        {
            "source_cn": "",
            "layout": 1,
            "target": {
                "read_count": 108406,
                "photos_count": 0,
                "author": {
                "read_count": 32304,
                "photos_count": 0,
              },
                "author": {
                    "avatar":  require('../assets/images/pic2/a (14).jpg'),
                    "name": "新世相"
                },
                "uri": "https://m.douban.com/note/604855288/",
                "more_pic_urls": [],
                "monitor_urls": [],
                "cover_url": require('../assets/images/pic2/b (16).jpg'),
                "desc": "一 我喜欢桃花。曾经有一段时间，在微信里输入“桃花朵朵开”，会有一屏幕的桃花落下来。这件事让“期待...",
                "impression_url": "",
                "monitor_url": ""
            },
            "title": "为什么你必须用最大的努力准备迎接桃花要开了这件事",
            "source": "editor:linucb_online",
            "theme": null,
            "id": "125205",
            "card": {
                "name": "为你推荐"
            }
        },
    ]
    }
  }
}
</script>

 


