// 路由配置
import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import layout from '@/components/common/layout'
import errorPage from '@/pages/errorPage'
import common from './common'
Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/layout/home'
    },{
      path: '/HelloWorld',
      name: 'HelloWorld',
      component: HelloWorld
    }, {
      path: '/layout',
      component: layout,
      children: [
        {
          path: '/',
          redirect: '/layout/home'
        }
      ].concat(common)
    },{
      path: '/errorPage',
      name: 'errorPage',
      component: errorPage
    },{
      path: '*',
      redirect: '/errorPage'
    }
  ]
});
// 不需要校验的路由数组
const filterRouters = ['errorPage'];
// 全局钩子，可以在这里做校验（登陆和权限）
router.beforeEach((to, from, next) => {
  // 直接跳转
  if (filterRouters.indexOf(to.name) !== -1) {
    next();
  } else {
    // 需要校验的路由，在这里进行处理
    next();
  }
});
export default router;

