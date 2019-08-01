import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import router from '@/router'
// 控制台提示信息 开发环境来提示：详细一些
Vue.config.productionTip = false

Vue.use(ElementUI)
// main.js的职责
// 1.职责：导入项目需要依赖的资源（js包 css文件 其他资源）
// 2.职责：创建一个根实例

// 根实例
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
