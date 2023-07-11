import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

const LoginPage = () => import('@/views/Login/index.vue')

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/login',
  },
  {
    path: '/login',
    name: 'LoginPage',
    component: LoginPage,
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

router.beforeEach(async (to, from, next) => {
  if (to.matched.some((record) => record.meta.requireAuth)) {
    if (true) next()
    else next({ name: 'noAuth' })
  } else next()
})

export default router

// 重写push和replace方法
// const originalPush = Router.prototype.push;
// Router.prototype.push = function push (location) {
//     if (onResolve || onReject) return originalPush.call(this, location, onResolve, onReject);
//     return originalPush.call(this, location).catch(err => err);
// };
// const originalReplace = Router.prototype.replace;
// Router.prototype.replace = function replace (location, onResolve, onReject) {
//     if (onResolve || onReject) return originalReplace.call(this, location, onResolve, onReject);
//     return originalReplace.call(this, location).catch(err => err);
// };
