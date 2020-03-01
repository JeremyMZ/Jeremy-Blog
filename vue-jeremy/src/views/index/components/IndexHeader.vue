<template>
  <div class="index-header">
   
    <!-- 左边 -->
    <div class="header-left">
      <img src="../../../assets/images/Jeremy.png" alt="Jeremy" class="logo">
      <span class="Jeremy">Jeremy</span>
    </div>

    <!-- 中间 -->
    <div class="header-inter">
      <nav>
        <a href="#">网站首页</a>
        <a href="#">个人博客</a>
        <div id="indicator"></div>
      </nav>
    </div>

    <!-- 右边 -->
    <div class="header-right">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-yingtong"></use>
      </svg>
      <span href="" class="user">Admin</span>
    </div>
  </div>
</template>

<script>
import '../../../assets/js/font/iconfont.js'
export default {
    
}
</script>

<style>
.index-header{
  box-sizing: border-box;
  height: 13vh;
  display: flex;
  justify-content: space-between;
  background-image: linear-gradient(to top, #cfd9df 0%, #e2ebf0 100%);
}
/* 左边 */
.header-left{
  width: 18%;
  height: 13vh;
  line-height: 13vh;
  display: flex;
}
.logo{
  height: 90%;
  margin: 5px 0 0 1vh;
  -webkit-animation:circle 3s infinite linear;/*匀速 循环*/

}
/* 旋转效果 */
  @-webkit-keyframes circle{

  0%{ transform:rotate(0deg); }

  100%{ transform:rotate(-360deg); }
}
.Jeremy{
  font-size: 40px;
  font-family: '方正粗黑宋简体';
  margin-left: 20px;
  height: 12vh;
  background-image: 
    -webkit-gradient(linear, left 0, right 0, from(#6f86d6), to(#4facfe));
    -webkit-background-clip: text; /*必需加前缀 -webkit- 才支持这个text值 */
    -webkit-text-fill-color: transparent; /*text-fill-color会覆盖color所定义的字体颜色： */
}

/* 中间 */
.header-inter{
  width: 72%;
  height: 13vh;
  list-style: none;
}
nav
{
    width: 319px;
    margin: 0 auto;
    transform: translateY(120%);
}

nav a
{
    position: relative;
    width: 33.333%;
    display: table-cell;
    text-align: center;
    color: #949494;
    text-decoration: none;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-weight: bold;
    padding: 10px 20px;
    transition: 0.2s ease color;
}

nav a:before, nav a:after
{
    content: "";
    position: absolute;
    border-radius: 50%;
    transform: scale(0);
    transition: 0.2s ease transform;
}

nav a:before
{
    top: 0;
    left: 10px;
    width: 6px;
    height: 6px;
}

nav a:after
{
    top: 5px;
    left: 18px;
    width: 4px;
    height: 4px
}

nav a:nth-child(1):before
{
    background-color: yellow;
}

nav a:nth-child(1):after
{
    background-color: red;
}

nav a:nth-child(2):before
{
    background-color: palevioletred;
}

nav a:nth-child(2):after
{
     background-color: purple;
}



#indicator
{
    position: absolute;
    left: 10%;
    bottom: 0;
    width: 50px;
    height: 3px;
    background-color: #fff;
    border-radius: 5px;
    transition: 0.2s ease left;
}

nav a:hover
{
    color:	#20B2AA;
}

nav a:hover:before, nav a:hover:after
{
    transform: scale(1);
}

nav a:nth-child(1):hover ~ #indicator
{
    background: linear-gradient(130deg, yellow, red);
}

nav a:nth-child(2):hover ~ #indicator
{
    left: 63%;
    background: linear-gradient(130deg, purple, palevioletred);
}



#ytd_link
{
    position: absolute;
    right: 0;
    left: 0;
    bottom: -200px;
    display: block;
    width: 160px;
    text-align: center;
    color: #fff;
    font-size: 15px;
    text-decoration: none;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    padding: 10px;
    margin: 0 auto;
    background-color: red;
    border-radius: 2px;
    animation: showYTDlink 1.5s ease 3s forwards;
}

@keyframes showYTDlink
{
    0%{ bottom: -200px; }
    100%{ bottom: 20px; }
}


/* 右边 */
.header-right{
  width: 10%;
  height: 13vh;
  text-align: center;
  vertical-align:middle;
}
.icon {
   width: 3.5vw; 
   height: 6vh;
   vertical-align:middle;
   overflow: hidden;
}
.user{
  text-decoration: none;
  height: 12vh;
  line-height: 12vh;
  margin-left: 0.5rem;
}
</style>