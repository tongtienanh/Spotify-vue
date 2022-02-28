import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import PlayAlbum from '../views/PlayAlbum.vue'
import Search from '../views/Search.vue'

const routes = [{
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/album/:id',
        name: 'PlayAlbum',
        component: PlayAlbum
    },
    {
        path: '/search',
        name: 'Search',
        component: Search
    },
    {
        path: '/about',
        name: 'About',
        component: function() {
            return import ( /* webpackChunkName: "about" */ '../views/About.vue')
        }
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router