<template>
  <div class="aution1">
      <autionchilden>
          <p class="title" slot='title'>近期值得看的国产剧</p>
          <div slot='main' class="ul">
              <div class="li" v-for='item in arr1'>
                  <img class="img1" :src="item.src1">
                  <p class="p3">{{ item.name }}</p>
                  <ul class="ul1">
                    <li><img src="../../assets/images/star1.png"></li>
                    <li><img src="../../assets/images/star1.png"></li>
                    <li><img :src="item.src2"></li>
                    <li><img :src="item.src3"></li>
                    <li><img :src="item.src4"></li>
                    <li class="num0">{{ item.num }}</li>
                  </ul>
              </div>
          </div>
      </autionchilden>
       <autionchilden>
          <p class="title" slot='title'>近期值得看的美剧</p>
          <div slot='main' class="ul">
              <div class="li" v-for='item in arr2'>
                  <img class="img1" :src="item.src1">
                  <p class="p3">{{ item.name }}</p>
                  <ul class="ul1">
                    <li><img src="../../assets/images/star1.png"></li>
                    <li><img src="../../assets/images/star1.png"></li>
                    <li><img :src="item.src2"></li>
                    <li><img :src="item.src3"></li>
                    <li><img :src="item.src4"></li>
                    <li class="num0">{{ item.num }}</li>
                  </ul>
              </div>
          </div>
      </autionchilden>
       <autionchilden>
          <p class="title" slot='title'>近期值得看的日剧</p>
          <div slot='main' class="ul">
              <div class="li" v-for='item in arr3'>
                  <img class="img1" :src="item.src1">
                  <p class="p3">{{ item.name }}</p>
                  <ul class="ul1">
                    <li><img src="../../assets/images/star1.png"></li>
                    <li><img src="../../assets/images/star1.png"></li>
                    <li><img :src="item.src2"></li>
                    <li><img :src="item.src3"></li>
                    <li><img :src="item.src4"></li>
                    <li class="num0">{{ item.num }}</li>
                  </ul>
              </div>
          </div>
      </autionchilden>
      <div class="child1-bottom"></div>
  </div>
</template>
<style>
.aution1 h1{line-height: 100px;font-size: 20px;text-align: left;width: 100%;float: left;margin-left: 5%}
  ul{list-style: none;}
  .achilden .title{line-height: 50px;font-size: 16px;text-align: left;padding-left: 5%;font-family: '微软雅黑'}
  .achilden .ul{padding-left: 3%;width: 200%;overflow: hidden;}
  .achilden .ul .li{width: 15%;float: left;position: relative;}
  .achilden .ul .img1{width: 90%;height: 145px}
  .achilden .ul .p3{line-height:20px;padding-bottom: 15px;font-size: 12px;color: #242424;padding-left: 6%;text-align: left;font-family: '黑体'}
  .achilden .ul .ul1{position: absolute;bottom: 0;left: 5%;line-height: 15px}
  .achilden .ul .ul1 li{float: left;}
  .achilden .ul .ul1 li img{width: 12px}
  .achilden .ul .ul1 .num0{padding-left: 5px;color: #939393;font-size: 12px}
  .child1-bottom{height:42px;clear: both;}
</style>
<script>
import autionchilden from './autionchilden';
export default {
  components:{
    autionchilden
  },
  data:function(){
    return {
      arr1:[{src1:require('../../assets/images/imgs/li71.jpg.jpg'),name:'我女朋友的...',src2:require('../../assets/images/star1.png'),src3:require('../../assets/images/star1.png'),src4:require('../../assets/images/star3.png'),num:'7.8'},
          {src1:require('../../assets/images/imgs/li72.jpg.jpg'),name:'废材兄弟',src2:require('../../assets/images/star2.png'),src3:require('../../assets/images/star3.png'),src4:require('../../assets/images/star3.png'),num:'4.7'},
          {src1:require('../../assets/images/imgs/li73.jpg.jpg'),name:'欢乐颂2',src2:require('../../assets/images/star1.png'),src3:require('../../assets/images/star3.png'),src4:require('../../assets/images/star3.png'),num:'5.2'},
           {src1:require('../../assets/images/imgs/c1.jpg.jpg'),name:'大道',src2:require('../../assets/images/star1.png'),src3:require('../../assets/images/star3.png'),src4:require('../../assets/images/star3.png'),num:'5.2'},
          {src1:require('../../assets/images/imgs/li34.jpg.jpg'),name:'冷暴力',src2:require('../../assets/images/star1.png'),src3:require('../../assets/images/star1.png'),src4:require('../../assets/images/star2.png'),num:'8.9'},
           {src1:require('../../assets/images/imgs/b2.jpg.jpg'),name:'聚焦',src2:require('../../assets/images/star1.png'),src3:require('../../assets/images/star1.png'),src4:require('../../assets/images/star1.png'),num:'9.2'},


      ],
       arr2:[{src1:require('../../assets/images/imgs/li81.jpg.jpg'),name:'纸牌屋 第五季',src2:require('../../assets/images/star1.png'),src3:require('../../assets/images/star1.png'),src4:require('../../assets/images/star3.png'),num:'7.8'},
          {src1:require('../../assets/images/imgs/li82.jpg.jpg'),name:'双峰',src2:require('../../assets/images/star1.png'),src3:require('../../assets/images/star1.png'),src4:require('../../assets/images/star1.png'),num:'8.5'},
          {src1:require('../../assets/images/imgs/li83.jpg.jpg'),name:'超感猎杀',src2:require('../../assets/images/star1.png'),src3:require('../../assets/images/star1.png'),src4:require('../../assets/images/star2.png'),num:'9.1'},
          {src1:require('../../assets/images/imgs/c2.jpg.jpg'),name:'鹤顶红',src2:require('../../assets/images/star1.png'),src3:require('../../assets/images/star1.png'),src4:require('../../assets/images/star2.png'),num:'9.1'},
          {src1:require('../../assets/images/imgs/li34.jpg.jpg'),name:'冷暴力',src2:require('../../assets/images/star1.png'),src3:require('../../assets/images/star1.png'),src4:require('../../assets/images/star2.png'),num:'8.9'},
           {src1:require('../../assets/images/imgs/b2.jpg.jpg'),name:'聚焦',src2:require('../../assets/images/star1.png'),src3:require('../../assets/images/star1.png'),src4:require('../../assets/images/star1.png'),num:'9.2'},
      ],
       arr3:[{src1:require('../../assets/images/imgs/li91.jpg.jpg'),name:'科学怪人之恋',src2:require('../../assets/images/star1.png'),src3:require('../../assets/images/star3.png'),src4:require('../../assets/images/star3.png'),num:'6.1'},
          {src1:require('../../assets/images/imgs/li92.jpg.jpg'),name:'女囚七人',src2:require('../../assets/images/star1.png'),src3:require('../../assets/images/star2.png'),src4:require('../../assets/images/star3.png'),num:'7.0'},
          {src1:require('../../assets/images/imgs/li93.jpg.jpg'),name:'帝一之国',src2:require('../../assets/images/star1.png'),src3:require('../../assets/images/star2.png'),src4:require('../../assets/images/star3.png'),num:'6.7'},
          {src1:require('../../assets/images/imgs/c3.jpg.jpg'),name:'戒定慧',src2:require('../../assets/images/star1.png'),src3:require('../../assets/images/star1.png'),src4:require('../../assets/images/star2.png'),num:'9.1'},
          {src1:require('../../assets/images/imgs/li34.jpg.jpg'),name:'冷暴力',src2:require('../../assets/images/star1.png'),src3:require('../../assets/images/star1.png'),src4:require('../../assets/images/star2.png'),num:'8.9'},
           {src1:require('../../assets/images/imgs/b2.jpg.jpg'),name:'聚焦',src2:require('../../assets/images/star1.png'),src3:require('../../assets/images/star1.png'),src4:require('../../assets/images/star1.png'),num:'9.2'},
      ],
    }
  }
}
</script>