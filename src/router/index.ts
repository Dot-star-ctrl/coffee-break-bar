import {createRouter, createWebHistory} from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CoffeeView from '../views/CoffeeView.vue'

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomeView,
    },
    {
        path: '/coffees',
        name: 'coffees',
        children: [
            {path: "/coffees/:id", name: "CoffeeView", component: CoffeeView},
        ]
    }
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
})

export default router
