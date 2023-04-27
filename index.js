import { createRouter, createWebHistory } from 'vue-router'
import HomePage from "@/views/ HomePage.vue"
import  AboutPage from "@/views/AboutPage.vue"

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: AboutPage },
]

const router = createRouter({
    routes,
    history: createWebHistory()
})

export default router
