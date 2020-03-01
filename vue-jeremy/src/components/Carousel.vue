<template>
  <el-carousel :interval="8000" arrow="always" height="50vh">
    <el-carousel-item>
      <img src="http://cdn.jeremyming.top/delaiwen.jpg" class="carousel_image_type" >
    </el-carousel-item>
    <el-carousel-item>
      <img src="http://cdn.jeremyming.top/timo.jpg" class="carousel_image_type">
    </el-carousel-item>
    <el-carousel-item>
      <img src="http://cdn.jeremyming.top/yasuo.jpg" class="carousel_image_type">
    </el-carousel-item>
  </el-carousel>
</template>

<script>
export default {

}
</script>

<style>
.el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

.el-carousel__item:nth-child(2n+1) {
background-color: #d3dce6;
}
.carousel_image_type{
     width: 100%;
     height: 100%;
}
</style>