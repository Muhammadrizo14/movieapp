import { createRouter, createWebHistory } from 'vue-router'
import admin from "@/pages/admin";
import view from '@/admin/view-movie'
import login from '@/pages/login'
import home from "@/pages/home";
import HelloI18n from "@/admin/HelloI18n";
import View from '@/admin/detail-view-movies'
import toast from "@/admin/toast";
import search from "@/admin/search"
import PageNotFound from '@/pages/PageNotFound.vue'
import DetailView from '@/components/detail-view'
import Register from '@/pages/register'
import Users from '@/admin/users'

const routes = [
  { path: '/', component: home },
  { path: '/admin', component: admin, },
  { path: '/view-movies', component: view },
  { path: '/login', component: login },
  { path: '/translate', component: HelloI18n },
  { path: '/toast', component: toast},
  {path: '/search', component: search},
  {path: '/users', component: Users},
  {
    path: '/register', component: Register},
  {
    path: '/:catchAll',
    component: PageNotFound
  },
  {
    path: '/admin/movie/:id/',
    component: View,
  },
  {
    path: '/movie/:id/',
    component: DetailView,
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
