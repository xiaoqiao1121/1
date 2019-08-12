// main.js整个项目的入口
import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false   // debug模式

//引用全局插件
//渲染App.vue html部分，然后把vue跟实例挂载html上。

new Vue({
  render: h => h(App),
  // components：{header,todo}
}).$mount('#app')
