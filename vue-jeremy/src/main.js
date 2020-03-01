import Vue from 'vue'
import App from './App.vue'
import router from './router'
import {Dialog,Carousel,CarouselItem,Button,Collapse,CollapseItem} from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import  'normalize.css';
import 'animate.css';
import './assets/css/index.css';

Vue.use(Dialog);
Vue.use(Carousel);
Vue.use(Button);
Vue.use(CarouselItem);
Vue.use(Collapse);
Vue.use(CollapseItem);

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
