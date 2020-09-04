// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueResource from 'vue-resource'
import router from './router'
import Routes from './routes'
import VueRouter from 'vue-router'

Vue.config.productionTip = false

Vue.use(VueResource)
Vue.use(VueRouter)


//自定义指令(全局)
// Vue.directive("raindow",{
//   bind(el,binding,vnode){
//     el.style.color= "#"+Math.random().toString(16).slice(2,8);
//   }
// })

Vue.directive("theme",{
  bind(el,binding,vnode){
    if(binding.value=='wide'){
      el.style.maxWidth="1260px";
    } else if(binding.value=='narrow'){
      el.style.maxWidth="550px";
    }
    if(binding.arg=="bac"){
      el.style.background="#e0ffff";
      el.style.padding="20px";
    }
  }
})

//自定义过滤器  （全局）
// Vue.filter("to-uppercase",function(value){
//   return value.toUpperCase();
// })
Vue.filter("snnipet",function(value){
  return value.slice(0,100)+"...";
})


//配置路由
const Router = new VueRouter({
  routes:Routes,
  mode:"history"
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  // router,
  components: { App },
  template: '<App/>',
  router: Router
})
