import { createRouter, createWebHistory, createWebHashHistory } from "vue-router";

const routerHistory = createWebHashHistory();

const routes = [
    {
        path: '/',
        redirect: '/login',
        component: () => import('@comp/login/LoginIn.vue'),
        children: [
            {
                path: "/login",
                name: "login",
                component: () => import('@comp/login/LoginIn.vue'),
                meta: {
                    keepAlive: false
                }
            }
        ]

    },
    {
        path: '/home',
        name: 'home',
        component: () => import('@comp/Home.vue')

    },
    {
        path: '/about',
        name: 'about',
        component: () => import('@comp/About.vue')

    }
];
const router = createRouter({
    history: routerHistory,
    routes
});

export default router;