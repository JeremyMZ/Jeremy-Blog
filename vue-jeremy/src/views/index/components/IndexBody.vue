<template>
  <div class="indexbody">
    <!-- 轮播框 -->
    <car-show />
    <!-- 三个框 -->
    <div class="content-frame">
      <!-- 第一个框 -->
      <!-- https://cn.vuejs.org/v2/guide/transitions.html-->
      <transition enter-active-class="animated bounceInLeft">
        <div class="frame-one" v-show="show">
          <div class="one-top">更多资讯</div>
        </div>
      </transition>

      <!-- 第二个框框 -->
      <transition enter-active-class="animated bounceInUp">
        <!-- v-show 指令，你传个布尔值，true 就显示，false 就 隐藏，和 css 的 display: none; 一样的 -->
        <!-- https://cn.vuejs.org/v2/guide/syntax.html#%E6%8C%87%E4%BB%A4 -->
        <div class="frame-two" v-show="show">
          <div class="two-top">学习资源</div>
          <div class="two-body">
            <el-carousel type="card" height="25vh">
              <el-carousel-item>
                <img src="http://cdn.jeremyming.top/Java.png" class="carousel_image_type" />
              </el-carousel-item>
              <el-carousel-item>
                <img src="http://cdn.jeremyming.top/vue.jpg" class="carousel_image_type" />
              </el-carousel-item>
              <el-carousel-item>
                <img src="http://cdn.jeremyming.top/js.png" class="carousel_image_type" />
              </el-carousel-item>

              <el-carousel-item>
                <img src="http://cdn.jeremyming.top/element.png" class="carousel_image_type" />
              </el-carousel-item>
              <el-carousel-item>
                <img src="http://cdn.jeremyming.top/spring-boot.jpg" class="carousel_image_type" />
              </el-carousel-item>
              <el-carousel-item>
                <img src="http://cdn.jeremyming.top/Ant%20Design.png" class="carousel_image_type" />
              </el-carousel-item>
              <el-carousel-item>
                <img src="http://cdn.jeremyming.top/bootcdn.png" class="carousel_image_type" />
              </el-carousel-item>
              <el-carousel-item>
                <img src="http://cdn.jeremyming.top/redis.jpg" class="carousel_image_type" />
              </el-carousel-item>
              <el-carousel-item>
                <img src="http://cdn.jeremyming.top/linux.jpg" class="carousel_image_type" />
              </el-carousel-item>
              <el-carousel-item>
                <img src="http://cdn.jeremyming.top/npm-logo.png" class="carousel_image_type" />
              </el-carousel-item>
            </el-carousel>
          </div>
        </div>
      </transition>

      <!-- 第三个框 -->
      <transition enter-active-class="animated bounceInRight">
        <div class="frame-three" v-show="show">
          <div class="three-top">博主信息</div>
          <div class="three-body">
            <div class="three-body-leaf">
              <svg class="github" aria-hidden="true" @click="IconGithub">
                <use xlink:href="#icon-github" />
              </svg>

              <svg class="Email" aria-hidden="true" @click="IconGithub">
                <use xlink:href="#icon-icon-email" />
              </svg>
            </div>

            <div class="three-body-right">
              <el-button type="text" @click="wechart = true">
                <svg class="wechart" aria-hidden="true">
                  <use xlink:href="#icon-wechart" />
                </svg>
              </el-button>

              <el-button type="text" @click="qq = true">
                <svg class="QQ" aria-hidden="true">
                  <use xlink:href="#icon-QQ" />
                </svg>
              </el-button>

              <el-dialog title="Jeremy-Wechart" :visible.sync="wechart" width="80%">
                <img src="http://cdn.jeremyming.top/wechat2.png" class="Jeremy-image" />
                <span slot="footer">
                  <el-button @click="wechart = false">取 消</el-button>
                  <el-button type="primary" @click="wechart = false">确 定</el-button>
                </span>
              </el-dialog>

              <el-dialog title="Jeremy-QQ" :visible.sync="qq" width="80%">
                <img src="http://cdn.jeremyming.top/qq.jpg" class="Jeremy-qqimage" />
                <span slot="footer">
                  <el-button @click="qq = false">取 消</el-button>
                  <el-button type="primary" @click="qq = false">确 定</el-button>
                </span>
              </el-dialog>
            </div>
          </div>
        </div>
      </transition>
    </div>
    <div></div>
  </div>
</template>
<script>
import carousel from "../../../components/Carousel.vue";
import Icon from "../../../assets/js/font/iconfont.js";
export default {
  // props ，子组件接收父组件的一些值，传什么都行，
  props: {
    show: {
      type: Boolean, // 这个是限制，可以写可以不写，跟你数据库设置类型一样的，设置了就只能传那个类型的数据，不然报错
      default: false
    }
  },
  data() {
    return {
      activeName: "0",
      wechart: false,
      qq: false
    };
  },
  components: {
    CarShow: carousel
  },
  methods: {
    IconGithub() {
      window.open("https://github.com/JeremyMZ");
    }
  }
};
</script>

<style scoped>
.indexbody {
  height: 84.4%;
}
.content-frame {
  width: 100%;
  height: 39.8%;
  display: flex;
  justify-content: space-around;
}
.frame-one {
  width: 32.5%;
  height: 100%;
  margin-top: 1px;
  border-radius: 1rem;
  border: 2px solid skyblue;
}
.one-top {
  width: 100%;
  height: 6vh;
  line-height: 6vh;
  display: inline-block;
  border-top-left-radius: 1rem;
  border-top-right-radius: 1rem;
  border-bottom: 1px solid skyblue;
  text-align: center;
}
.frame-two {
  width: 32.5%;
  height: 100%;
  margin-top: 1px;
  border-radius: 1rem;
  border: 2px solid skyblue;
}
.two-top {
  width: 100%;
  height: 6vh;
  line-height: 6vh;
  display: inline-block;
  border-top-left-radius: 1rem;
  border-top-right-radius: 1rem;
  border-bottom: 1px solid skyblue;
  text-align: center;
}
.two-body {
  width: 100%;
  height: 80%;
}

/* 设置滚动条样式 */
/* .collapse::-webkit-scrollbar {
    width: 10px;
    height: 10px;
}
.collapse::-webkit-scrollbar-track {
    background: #213147;
    border-radius: 5px;
}
.collapse::-webkit-scrollbar-thumb {
    background: #61B6EB;
    border-radius: 5px;
}
.collapse::-webkit-scrollbar-thumb:hover {
    background: #B0E0E6;
} */
.frame-three {
  width: 32.5%;
  height: 100%;
  margin-top: 1px;
  border-radius: 1rem;
  border: 2px solid skyblue;
}
.three-top {
  width: 100%;
  height: 6vh;
  line-height: 6vh;
  display: inline-block;
  border-top-left-radius: 1rem;
  border-top-right-radius: 1rem;
  border-bottom: 1px solid skyblue;
  text-align: center;
}
.three-body {
  width: 100%;
  height: 80%;
  display: flex;
}
.three-body-leaf {
  width: 50%;
  height: 100%;
  text-align: center;
}

.three-body-right {
  width: 50%;
  height: 100%;
  text-align: center;
}
.github {
  width: 100%;
  height: 5vh;
  margin-top: 8%;
  display: flex;
  justify-content: flex-wrap;
  cursor: pointer;
}
.Email {
  width: 100%;
  height: 5vh;
  display: flex;
  margin-top: 22%;
  justify-content: flex-wrap;
  cursor: pointer;
}
.wechart {
  width: 100%;
  height: 5vh;
  margin-top: 2%;
  display: flex;
  justify-content: flex-wrap;
  cursor: pointer;
}
.QQ {
  width: 100%;
  height: 5vh;
  display: flex;
  margin-top: 13%;
  justify-content: flex-wrap;
  cursor: pointer;
}
.github:hover {
  width: 8vw;
  height: 5vh;
  text-align: center;
}
.wechart:hover {
  width: 8vw;
  height: 8vh;
}
.Email:hover {
  width: 8vw;
  height: 10vh;
}
.QQ:hover {
  width: 8vw;
  height: 10vh;
}
.Jeremy-image {
  width: 70vw;
  height: 40vh;
}
.Jeremy-qqimage {
  width: 30vw;
  height: 53vh;
}
</style>