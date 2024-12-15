import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        path: '/',
        component: () => import("../views/indexPage.vue")
    },
    {
        path: '/registry',
        component: () => import("../views/registryPage.vue")
    }
];

export default createRouter({
    history: createWebHistory(),
    routes,
});
