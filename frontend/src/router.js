/*
Now that you’ve installed Vue Router, you need to configure Vue to use Vue Router.
You’ll also need to configure Vue Router with the URL paths it should route.

Create a router.js module in the src/ directory.
This file will hold all the configuration about which URLs map to which Vue components.
Start by importing Vue and Vue Router:
*/

import Vue from 'vue'
import VueRouter from 'vue-router'

import Post from '@/components/Post'
import Author from '@/components/Author'
import PostsByTag from '@/components/PostsByTag'
import AllPosts from '@/components/AllPosts'


Vue.use(VueRouter);


const routes = [
    { path: '/author/:username', component: Author },
    { path: '/post/:slug', component: Post },
    { path: '/tag/:tag', component: PostsByTag },
    { path: '/', component: AllPosts },
]

const router = new VueRouter({
    routes: routes,
    mode: 'history',
  })
export default router