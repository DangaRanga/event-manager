import {createRouter, createWebHistory} from 'vue-router'

import  Registration from './views/Registration.vue'


const routes = [
    {
        path: '/register',
        name: 'register',
        component: Registration
    },
    /*{ 
        path: '/:pathMatch(.*)*', 
        name: 'not-found', component: 
        PageNotFound 
    },
  
    { 
        path: '/:pathMatch(.*)', 
        name: 'bad-not-found', 
        component: PageNotFound
    },*/
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})



export default router;