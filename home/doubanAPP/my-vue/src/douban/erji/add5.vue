<template>
  <div class="aution1">
      <autionchilden>
          <p class="title" slot='title'>华语新碟榜</p>
          <div slot='main' class="ul">
              <div class="li" v-for='item in arr1'>
                  <img class="img2" :src="item.src1">
                 <p class="p53">{{ item.name }}</p>
                  <p class="p54">{{ item.name1 }}</p>
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
          <p class="title" slot='title'>欧美新碟榜</p>
          <div slot='main' class="ul">
              <div class="li" v-for='item in arr2'>
                  <img class="img2" :src="item.src1">
                 <p class="p53">{{ item.name }}</p>
                  <p class="p54">{{ item.name1 }}</p>
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
          <p class="title" slot='title'>日韩新碟榜</p>
          <div slot='main' class="ul">
              <div class="li" v-for='item in arr3'>
                  <img class="img2" :src="item.src1">
                  <p class="p53">{{ item.name }}</p>
                  <p class="p54">{{ item.name1 }}</p>
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
      arr1:[{src1:require('../../assets/images/imgs/lib1.jpg.jpg'),name:'猎户与星座',name1:'朴树',src2:require('../../assets/images/star1.png'),src3:require('../../assets/images/star1.png'),src4:require('../../assets/images/star2.png'),num:'8.1'},
          {src1:require('../../assets/images/imgs/lib2.jpg.jpg'),name:'北京女孩',name1:'张蔷',src2:require('../../assets/images/star1.png'),src3:require('../../assets/images/star1.png'),src4:require('../../assets/images/star3.png'),num:'7.2'},
          {src1:require('../../assets/images/imgs/lib3.jpg.jpg'),name:'放&披风',name1:'陈奕迅',src2:require('../../assets/images/star1.png'),src3:require('../../assets/images/star3.png'),src4:require('../../assets/images/star3.png'),num:'5.4'},
           {src1:require('../../assets/images/imgs/d1.jpg.jpg'),name:'大师傅',name1:'王科',src2:require('../../assets/images/star1.png'),src3:require('../../assets/images/star3.png'),src4:require('../../assets/images/star3.png'),num:'5.4'},
          {src1:require('../../assets/images/imgs/lic2.jpg.jpg'),name:'Cigarettes',name1:'Cigarettes Afte...',src2:require('../../assets/images/star1.png'),src3:require('../../assets/images/star1.png'),src4:require('../../assets/images/star2.png'),num:'8.6'},
          {src1:require('../../assets/images/imgs/lid2.jpg.jpg'),name:'Asyns',name1:'坂本龙一Sakam',src2:require('../../assets/images/star1.png'),src3:require('../../assets/images/star1.png'),src4:require('../../assets/images/star2.png'),num:'8.6'},



      ],
       arr2:[{src1:require('../../assets/images/imgs/lic1.jpg.jpg'),name:'Witness',name1:'Katy Perry',src2:require('../../assets/images/star1.png'),src3:require('../../assets/images/star3.png'),src4:require('../../assets/images/star3.png'),num:'5.4'},
          {src1:require('../../assets/images/imgs/lic2.jpg.jpg'),name:'Cigarettes',name1:'Cigarettes Afte...',src2:require('../../assets/images/star1.png'),src3:require('../../assets/images/star1.png'),src4:require('../../assets/images/star2.png'),num:'8.6'},
          {src1:require('../../assets/images/imgs/lic3.jpg.jpg'),name:'Relaxer',name1:'Alt-J',src2:require('../../assets/images/star1.png'),src3:require('../../assets/images/star2.png'),src4:require('../../assets/images/star3.png'),num:'7.0'},
           {src1:require('../../assets/images/imgs/d2.jpg.jpg'),name:'Esdffd',name1:'ADFF',src2:require('../../assets/images/star1.png'),src3:require('../../assets/images/star3.png'),src4:require('../../assets/images/star3.png'),num:'5.4'},
          {src1:require('../../assets/images/imgs/lid2.jpg.jpg'),name:'Asyns',name1:'坂本龙一Sakam',src2:require('../../assets/images/star1.png'),src3:require('../../assets/images/star1.png'),src4:require('../../assets/images/star2.png'),num:'8.6'},
          {src1:require('../../assets/images/imgs/lib2.jpg.jpg'),name:'北京女孩',name1:'张蔷',src2:require('../../assets/images/star1.png'),src3:require('../../assets/images/star1.png'),src4:require('../../assets/images/star3.png'),num:'7.2'},

      ],
       arr3:[{src1:require('../../assets/images/imgs/lid1.jpg.jpg'),name:'KWON JI YONG',name1:'G-DRAGON',src2:require('../../assets/images/star1.png'),src3:require('../../assets/images/star1.png'),src4:require('../../assets/images/star3.png'),num:'8.0'},
          {src1:require('../../assets/images/imgs/lid2.jpg.jpg'),name:'Asyns',name1:'坂本龙一Sakam',src2:require('../../assets/images/star1.png'),src3:require('../../assets/images/star1.png'),src4:require('../../assets/images/star2.png'),num:'8.6'},
          {src1:require('../../assets/images/imgs/lid3.jpg.jpg'),name:'PRODUCE 101',name1:'PRODUCE 101',src2:require('../../assets/images/star1.png'),src3:require('../../assets/images/star1.png'),src4:require('../../assets/images/star3.png'),num:'7.6'},
           {src1:require('../../assets/images/imgs/d3.jpg.jpg'),name:'百鬼',name1:'姊妹吧',src2:require('../../assets/images/star1.png'),src3:require('../../assets/images/star3.png'),src4:require('../../assets/images/star3.png'),num:'5.4'},
          {src1:require('../../assets/images/imgs/lib2.jpg.jpg'),name:'北京女孩',name1:'张蔷',src2:require('../../assets/images/star1.png'),src3:require('../../assets/images/star1.png'),src4:require('../../assets/images/star3.png'),num:'7.2'},
          {src1:require('../../assets/images/imgs/lic3.jpg.jpg'),name:'Relaxer',name1:'Alt-J',src2:require('../../assets/images/star1.png'),src3:require('../../assets/images/star2.png'),src4:require('../../assets/images/star3.png'),num:'7.0'},

      ],
    }
  }
}
</script>