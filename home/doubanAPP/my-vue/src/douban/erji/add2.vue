<template>
  <div class="aution1">
      <autionchilden>
          <p class="title" slot='title'>新书速递</p>
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
          <p class="title" slot='title'>最受关注的虚拟类图书</p>
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
          <p class="title" slot='title'>最受关注的非虚拟类图书</p>
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
      arr1:[{src1:require('../../assets/images/imgs/li31.jpg.jpg'),name:'封闭式车库',src2:require('../../assets/images/star1.png'),src3:require('../../assets/images/star1.png'),src4:require('../../assets/images/star2.png'),num:'8.4'},
          {src1:require('../../assets/images/imgs/li32.jpg.jpg'),name:'我遇见了人类',src2:require('../../assets/images/star1.png'),src3:require('../../assets/images/star1.png'),src4:require('../../assets/images/star2.png'),num:'8.7'},
          {src1:require('../../assets/images/imgs/li34.jpg.jpg'),name:'冷暴力',src2:require('../../assets/images/star1.png'),src3:require('../../assets/images/star1.png'),src4:require('../../assets/images/star2.png'),num:'8.9'},
          {src1:require('../../assets/images/imgs/b1.jpg.jpg'),name:'风范力',src2:require('../../assets/images/star1.png'),src3:require('../../assets/images/star1.png'),src4:require('../../assets/images/star2.png'),num:'8.9'},
          {src1:require('../../assets/images/imgs/lic3.jpg.jpg'),name:'Relaxer',name1:'Alt-J',src2:require('../../assets/images/star1.png'),src3:require('../../assets/images/star2.png'),src4:require('../../assets/images/star3.png'),num:'7.0'},
          {src1:require('../../assets/images/imgs/li42.jpg.jpg'),name:'新名字的故事',src2:require('../../assets/images/star1.png'),src3:require('../../assets/images/star1.png'),src4:require('../../assets/images/star1.png'),num:'9.2'},

      ],
       arr2:[{src1:require('../../assets/images/imgs/li41.jpg.jpg'),name:'恋情的终结',src2:require('../../assets/images/star1.png'),src3:require('../../assets/images/star1.png'),src4:require('../../assets/images/star2.png'),num:'8.3'},
          {src1:require('../../assets/images/imgs/li42.jpg.jpg'),name:'新名字的故事',src2:require('../../assets/images/star1.png'),src3:require('../../assets/images/star1.png'),src4:require('../../assets/images/star1.png'),num:'9.2'},
          {src1:require('../../assets/images/imgs/li43.jpg.jpg'),name:'鱼王',src2:require('../../assets/images/star1.png'),src3:require('../../assets/images/star1.png'),src4:require('../../assets/images/star1.png'),num:'9.2'},
           {src1:require('../../assets/images/imgs/b2.jpg.jpg'),name:'聚焦',src2:require('../../assets/images/star1.png'),src3:require('../../assets/images/star1.png'),src4:require('../../assets/images/star1.png'),num:'9.2'},
          {src1:require('../../assets/images/imgs/lic3.jpg.jpg'),name:'Relaxer',name1:'Alt-J',src2:require('../../assets/images/star1.png'),src3:require('../../assets/images/star2.png'),src4:require('../../assets/images/star3.png'),num:'7.0'},
          {src1:require('../../assets/images/imgs/li34.jpg.jpg'),name:'冷暴力',src2:require('../../assets/images/star1.png'),src3:require('../../assets/images/star1.png'),src4:require('../../assets/images/star2.png'),num:'8.9'},
      ],
       arr3:[{src1:require('../../assets/images/imgs/li51.jpg.jpg'),name:'地理学与生活',src2:require('../../assets/images/star1.png'),src3:require('../../assets/images/star1.png'),src4:require('../../assets/images/star2.png'),num:'9.0'},
          {src1:require('../../assets/images/imgs/li52.jpg.jpg'),name:'杂草记',src2:require('../../assets/images/star1.png'),src3:require('../../assets/images/star1.png'),src4:require('../../assets/images/star2.png'),num:'9.0'},
          {src1:require('../../assets/images/imgs/li53.jpg.jpg'),name:'时间的果',src2:require('../../assets/images/star1.png'),src3:require('../../assets/images/star1.png'),src4:require('../../assets/images/star2.png'),num:'8.5'},
          {src1:require('../../assets/images/imgs/b3.jpg.jpg'),name:'结束',src2:require('../../assets/images/star1.png'),src3:require('../../assets/images/star1.png'),src4:require('../../assets/images/star2.png'),num:'8.5'},
          {src1:require('../../assets/images/imgs/lic3.jpg.jpg'),name:'Relaxer',name1:'Alt-J',src2:require('../../assets/images/star1.png'),src3:require('../../assets/images/star2.png'),src4:require('../../assets/images/star3.png'),num:'7.0'},
          {src1:require('../../assets/images/imgs/li42.jpg.jpg'),name:'新名字的故事',src2:require('../../assets/images/star1.png'),src3:require('../../assets/images/star1.png'),src4:require('../../assets/images/star1.png'),num:'9.2'},
      ],
    }
  }
}
</script>