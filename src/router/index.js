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
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
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