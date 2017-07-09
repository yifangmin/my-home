<template>
  <div class="aution1">
      <autionchilden>
          <p class="title" slot='title'>热门活动</p>
          <div slot='main' class="ul">
              <div class="li" v-for='item in arr1'>
                  <img class="img2" :src="item.src1">
                 <p class="p53">{{ item.name }}</p>
                  <p class="p54">{{ item.name1 }}</p>
                  <div class="ul1"><img src=""></div>
              </div>
          </div>
      </autionchilden>
       <autionchilden>
          <p class="title" slot='title'>官方售票</p>
          <div slot='main' class="ul">
              <div class="li" v-for='item in arr2'>
                  <img class="img2" :src="item.src1">
                 <p class="p53">{{ item.name }}</p>
                  <p class="p54">{{ item.name1 }}</p>
                  <div class="ul1"></div>
              </div>
          </div>
      </autionchilden>
       <autionchilden>
          <p class="title" slot='title'>编辑推荐</p>
          <div slot='main' class="ul">
              <div class="li" v-for='item in arr3'>
                  <img class="img2" :src="item.src1">
                  <p class="p53">{{ item.name }}</p>
                  <p class="p54">{{ item.name1 }}</p>
                  <div class="ul1"></div>
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
  .achilden .ul .img2{width: 90%;height: 120px}
  .achilden .ul .p53{line-height:20px;font-size: 12px;color: #242424;padding-left: 6%;text-align: left;font-family: '黑体'}
  .achilden .ul .p54{padding-bottom: 15px;line-height:20px;font-size: 12px;color: #ccc;padding-left: 6%;text-align: left;}
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
      arr1:[{src1:require('../../assets/images/a (1).jpg'),name:'2017 Liam Gallagher北京...',name1:'2017-08-10',src2:require('../../assets/images/star1.png'),src3:require('../../assets/images/star1.png'),src4:require('../../assets/images/star2.png'),num:'8.1'},
          {src1:require('../../assets/images/a (2).jpg'),name:'WooHoo Go',name1:'2017-06-24',src2:require('../../assets/images/star1.png'),src3:require('../../assets/images/star1.png'),src4:require('../../assets/images/star3.png'),num:'7.2'},
          {src1:require('../../assets/images/a (3).jpg'),name:'泱泱国风.舞动经典--优人神鼓...',name1:'2017-06-17',src2:require('../../assets/images/star1.png'),src3:require('../../assets/images/star3.png'),src4:require('../../assets/images/star3.png'),num:'5.4'},
           {src1:require('../../assets/images/a (4).jpg'),name:'英国原版音乐剧',name1:'2017-06-17',src2:require('../../assets/images/star1.png'),src3:require('../../assets/images/star3.png'),src4:require('../../assets/images/star3.png'),num:'5.4'},
          {src1:require('../../assets/images/a (8).jpg'),name:'2017《三体3D多媒体舞台...',name1:'2017-06-22',src2:require('../../assets/images/star1.png'),src3:require('../../assets/images/star1.png'),src4:require('../../assets/images/star2.png'),num:'8.6'},
           {src1:require('../../assets/images/a (9).jpg'),name:'埃加神悬疑剧',name1:'2017-04-28',src2:require('../../assets/images/star1.png'),src3:require('../../assets/images/star3.png'),src4:require('../../assets/images/star3.png'),num:'5.4'},

      ],
       arr2:[{src1:require('../../assets/images/a (7).jpg'),name:'例外状态：中国境况与艺术考...',name1:'2017-03-19',src2:require('../../assets/images/star1.png'),src3:require('../../assets/images/star3.png'),src4:require('../../assets/images/star3.png'),num:'5.4'},
          {src1:require('../../assets/images/a (8).jpg'),name:'2017《三体3D多媒体舞台...',name1:'2017-06-22',src2:require('../../assets/images/star1.png'),src3:require('../../assets/images/star1.png'),src4:require('../../assets/images/star2.png'),num:'8.6'},
          {src1:require('../../assets/images/a (6).jpg'),name:'2017喵星人侵占地球名猫展北...',name1:'2017-04-28',src2:require('../../assets/images/star1.png'),src3:require('../../assets/images/star2.png'),src4:require('../../assets/images/star3.png'),num:'7.0'},
           {src1:require('../../assets/images/a (9).jpg'),name:'埃加神悬疑剧',name1:'2017-04-28',src2:require('../../assets/images/star1.png'),src3:require('../../assets/images/star3.png'),src4:require('../../assets/images/star3.png'),num:'5.4'},
          {src1:require('../../assets/images/a (2).jpg'),name:'WooHoo Go',name1:'2017-06-24',src2:require('../../assets/images/star1.png'),src3:require('../../assets/images/star1.png'),src4:require('../../assets/images/star3.png'),num:'7.2'},
           {src1:require('../../assets/images/a (4).jpg'),name:'英国原版音乐剧',name1:'2017-06-17',src2:require('../../assets/images/star1.png'),src3:require('../../assets/images/star3.png'),src4:require('../../assets/images/star3.png'),num:'5.4'},
      ],
       arr3:[{src1:require('../../assets/images/a (10).jpg'),name:'2017北京国际茶业展',name1:'2017-06-16',src2:require('../../assets/images/star1.png'),src3:require('../../assets/images/star1.png'),src4:require('../../assets/images/star3.png'),num:'8.0'},
          {src1:require('../../assets/images/a (11).jpg'),name:'今日黑市',name1:'2017-03-17',src2:require('../../assets/images/star1.png'),src3:require('../../assets/images/star1.png'),src4:require('../../assets/images/star2.png'),num:'8.6'},
          {src1:require('../../assets/images/a (9).jpg'),name:'【魔法和艺术的自画像】 强自...',name1:'2017-06-11',src2:require('../../assets/images/star1.png'),src3:require('../../assets/images/star1.png'),src4:require('../../assets/images/star3.png'),num:'7.6'},
           {src1:require('../../assets/images/a (12).jpg'),name:'“THDHDG',name1:'2017-06-11',src2:require('../../assets/images/star1.png'),src3:require('../../assets/images/star3.png'),src4:require('../../assets/images/star3.png'),num:'5.4'},
          {src1:require('../../assets/images/a (2).jpg'),name:'WooHoo Go',name1:'2017-06-24',src2:require('../../assets/images/star1.png'),src3:require('../../assets/images/star1.png'),src4:require('../../assets/images/star3.png'),num:'7.2'},
          {src1:require('../../assets/images/a (6).jpg'),name:'2017喵星人侵占地球名猫展北...',name1:'2017-04-28',src2:require('../../assets/images/star1.png'),src3:require('../../assets/images/star2.png'),src4:require('../../assets/images/star3.png'),num:'7.0'},
      ],
    }
  }
}
</script>