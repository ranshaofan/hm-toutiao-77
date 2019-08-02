// 定义router对象 导出给js使用
import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/views/login/index.vue'
Vue.use(VueRouter)

// 路由规则配置
const router = new VueRouter({
  routes: [{ path: '/login', name: 'login', component: Login }]
})

export default router
