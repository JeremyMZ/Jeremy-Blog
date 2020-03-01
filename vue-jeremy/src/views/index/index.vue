<template>

<div class="page-warp">
	<!-- ref 这个像 id ，ref 是 vue 获取 dom 节点的方法,不需要用 document.getElementById 这些方法 -->
  <div id="loading" ref="loading">
        <div></div>
        <div></div>
        <span></span>
  </div>
  <HeadItem />
  <!-- https://cn.vuejs.org/v2/guide/syntax.html#v-bind-%E7%BC%A9%E5%86%99 -->
  <BodyItem :show="isShow" />
  <div class="page-bottom">
	  <span>备案号:粤ICP备20009243号</span>
  </div>
</div>
  
</template>

<script>
import indexHead from './components/IndexHeader'
import indexBody from './components/IndexBody'
export default {
  // 放变量的
  data() {
	  return {
		  isShow: false,
	  };
  },
  // 生命周期，这个组件加载完成后执行
  mounted() {
	this.handleShowBody();
  },
  // 放函数的
  methods: {
	  handleShowBody() {
		  let count = 0;
		//   this.$refs.loading 这个就是上面给了名字的 dom 节点，监听动画结束
		this.$refs.loading.addEventListener('animationend', () => {
			count += 1;
			if (count === 3) {
				this.isShow = true;
				count = 0;
			}
		})
	  },
  },
  components:{
     HeadItem:indexHead,
     BodyItem:indexBody,
  }
}
</script>

<style>
.page-warp{
  height: 100vh;
  width: 100%;
  overflow: hidden;
  
}
#loading div {
	width: 100%;
	height: 50%;
	position: absolute;
	left: 0;
	background: #252c35;
	z-index: 50;
	-webkit-transition: 1s;
	-o-transition: 1s;
	transition: 1s;
}
#loading div:nth-of-type(1) {
	top: 0;
	-webkit-animation: 1.3s 1s xx1 forwards;
	animation: 1.3s 1s xx1 forwards
}
#loading div:nth-of-type(2) {
	bottom: 0;
	-webkit-animation: 1.3s 1s xx2 forwards;
	animation: 1.3s 1s xx2 forwards
}
#loading span {
	width: 0%;
	height: 2px;
	background: #fff;
	position: absolute;
	left: 0;
	top: 50%;
	margin-top: -2px;
	z-index: 60;
	-webkit-transition: .8s;
	-o-transition: .8s;
	transition: .8s;
	-webkit-animation: 1s xxoo;
	animation: 1s xxoo;
}
@-webkit-keyframes xxoo {
		 0% {width: 0;}
		 100% {width: 100%}
}
@keyframes xxoo {
		 0% {width: 0;}
		 100% {width: 100%}
}
 @-webkit-keyframes xx1 {
		 0% {height: 50%}
		 100% {height: 0%}
}
 @keyframes xx1 {
		 0% {height: 50%}
		 100% {height: 0%}
}
@-webkit-keyframes xx2 {
		 0% {height: 50%}
		 100% {height: 0%}
}
@keyframes xx2 {
		 0% {height: 50%}
		 100% {height: 0%}
}
/*全局加载动画*/
/*_____________________________________________________分割线*/
.page-bottom{
	width: 100%;
	height: 100%;
	background-color: darkgray;
	color: #fff;
	text-align: center;
}
</style>