import { createRouter, createWebHistory } from 'vue-router'
import HomePage from "@/views/ HomePage.vue"
import  AboutPage from "@/views/AboutPage.vue"
import NotFound from "@/views/NotFound.vue"
const routes = [
  { path: '/', component: HomePage },
  { path: '/about', component: AboutPage },
  { path: "/:catchAll(.*)", component: NotFound },   /* :catchAll является динамическим сегментом и (.*)представляет собой регулярное выражение,
 которое по существу соответствует чему угодно. Поэтому, если ни один из маршрутов выше этого не совпадает, он будет использовать этот.  */
]

const router = createRouter({
    routes,
    history: createWebHistory()
})

export default router
