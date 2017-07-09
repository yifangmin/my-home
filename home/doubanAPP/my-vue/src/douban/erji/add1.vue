<template>
  <div class="aution1">
      <autionchilden>
          <p class="title" slot='title'>影院热映</p>
          <div slot='main' class="ul">
              <div class="li" v-for='item in arr1'>
                  <img class="img1" :src="item.src1">
                  <p class="p3">{{ item.name }}</p>
                  <div class="add1-banner">
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
          </div>
      </autionchilden>
       <autionchilden>
          <p slot="title" class="title2"><img src="../../assets/images/a2c1bj1_06.jpg"></p>
          <div slot='main' class="main2" >
          <p>演技太尴尬，欧阳娜娜自嘲“靠实力失败”第一人</p>
          </div>
      </autionchilden>
       <autionchilden>
          <p class="title" slot='title'>影院即将上映</p>
          <div slot='main' class="ul">
              <div class="li" v-for='item in arr2'>
                  <img class="img1" :src="item.src1">
                  <p class="p53">{{ item.name }}</p>
                  <p class="p54">{{ item.num }}想看</p>
              </div>
          </div>
      </autionchilden>
      <div class="child1-bottom"></div>
    </div>
</template>
<style>
.aution1{overflow-y: auto;
    height:522px;
    margin-top: 42px;}
.aution1 h1{line-height: 100px;font-size: 20px;text-align: left;width: 100%;float: left;margin-left: 5%;}
	ul{list-style: none;}
  .achilden .title{line-height: 50px;font-size: 16px;text-align: left;padding-left: 5%;font-family: '微软雅黑'}
  
  .achilden .ul{padding-left: 3%;width:200%;overflow: hidden;}
  .achilden .ul .li{width: 15%;float: left;position: relative;}
  .achilden .ul .img1{width: 90%;height: 145px}
  .achilden .ul .p3{line-height:20px;padding-bottom: 15px;font-size: 12px;color: #242424;padding-left: 6%;text-align: left;font-family: '黑体'}
  .achilden .ul .ul1{position: absolute;bottom: 0;left: 5%;line-height: 15px}
  .achilden .ul .ul1 li{float: left;}
  .achilden .ul .ul1 li img{width: 12px}
  .achilden .ul .ul1 .num0{padding-left: 5px;color: #939393;font-size: 12px}
  .achilden .title2 img{width: 100%}
  .achilden .main2 p{font-family: '微软雅黑';font-size: 17px;line-height:30px;text-align: left;padding-left:5%;padding-top:90px;color: #373737;}
  .achilden .ul .p53{line-height:20px;font-size: 12px;color: #242424;padding-left: 6%;text-align: left;font-family: '黑体'}
  .achilden .ul .p54{padding-bottom: 15px;line-height:20px;font-size: 12px;color: #ccc;padding-left: 6%;text-align: left;}
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
      arr1:[{src1:require('../../assets/images/imgs/li11.jpg.jpg'),name:'新木乃伊',src2:require('../../assets/images/star2.png'),src3:require('../../assets/images/star3.png'),src4:require('../../assets/images/star3.png'),num:'4.8'},
          {src1:require('../../assets/images/imgs/li12.jpg.jpg'),name:'内心引力',src2:require('../../assets/images/star1.png'),src3:require('../../assets/images/star1.png'),src4:require('../../assets/images/star3.png'),num:'7.4'},
          {src1:require('../../assets/images/imgs/li13.jpg.jpg'),name:'神奇女侠',src2:require('../../assets/images/star1.png'),src3:require('../../assets/images/star1.png'),src4:require('../../assets/images/star3.png'),num:'7.3'},
          {src1:require('../../assets/images/imgs/li14.jpg.jpg'),name:'加勒比海盗',src2:require('../../assets/images/star1.png'),src3:require('../../assets/images/star1.png'),src4:require('../../assets/images/star3.png'),num:'7.3'},
          {src1:require('../../assets/images/imgs/a4.jpg.jpg'),name:'异客',num:'108'},
          {src1:require('../../assets/images/imgs/a6.jpg.jpg'),name:'的士速递',num:'52451'},
      ],
        arr2:[{src1:require('../../assets/images/imgs/li21.jpg.jpg'),name:'飘洋过海来爱你',num:'7421'},
          {src1:require('../../assets/images/imgs/a4.jpg.jpg'),name:'异客',num:'108'},
          {src1:require('../../assets/images/imgs/a5.jpg.jpg'),name:'查理夫人',num:'52451'},
          {src1:require('../../assets/images/imgs/a6.jpg.jpg'),name:'的士速递',num:'52451'},
          {src1:require('../../assets/images/imgs/li13.jpg.jpg'),name:'神奇女侠',src2:require('../../assets/images/star1.png'),src3:require('../../assets/images/star1.png'),src4:require('../../assets/images/star3.png'),num:'7.3'},
          {src1:require('../../assets/images/imgs/li14.jpg.jpg'),name:'加勒比海盗',src2:require('../../assets/images/star1.png'),src3:require('../../assets/images/star1.png'),src4:require('../../assets/images/star3.png'),num:'7.3'},
      ],
    }
  }
}
</script>