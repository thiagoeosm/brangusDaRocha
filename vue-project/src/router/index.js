import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutPage from '../views/AboutView.vue'
import FormPage from '../views/FormView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: AboutPage
    },
    {
      path: '/form',
      name: 'form',
      component: FormPage
    }
  ]
})

export default router
