import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import PlayAlbum from '../views/PlayAlbum.vue'
import Search from '../views/Search.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import LikedSong from '../views/LikedSong.vue'

const routes = [{
        path: '/',
        name: 'Home',
        meta: {
            layout: 'default-layout',
        },
        component: Home
    },
    {
        path: '/album/:id',
        name: 'PlayAlbum',
        meta: {
            layout: 'default-layout',
        },
        component: PlayAlbum
    },
    {
        path: '/search',
        name: 'Search',
        meta: {
            layout: 'default-layout',
        },
        component: Search
    },
    {
        path: '/login',
        name: 'Login',
        meta: {
            layout: 'auth-layout',
        },
        component: Login
    },
    {
        path: '/register',
        name: 'Register',
        meta: {
            layout: 'auth-layout',
        },
        component: Register
    },
    {
        path: '/liked',
        name: 'LikedSong',
        meta: {
            layout: 'default-layout',
        },
        component: LikedSong
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