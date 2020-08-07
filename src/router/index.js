import Vue from 'vue'
import VueRouter from 'vue-router'
import Foo from '../views/foo'
import Bar from '../views/bar'
import { loadLanguageAsync } from '../i18n'

Vue.use(VueRouter)

const routes = [
  { path: '/foo', component: Foo },
  { path: '/bar', component: Bar }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

router.beforeEach((to, from, next) => {
  const lang = localStorage.getItem('lang')
  loadLanguageAsync(lang).then(() => next())
})

export default router