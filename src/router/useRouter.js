/*
 * @FilePath: \vue3_babylonjs_template\src\router\useRouter.js
 * @Author: abc-0886kAX-code
 * @Date: 2022-11-30 10:18:11
 * @LastEditors: abc-0886kAX-code
 * @LastEditTime: 2024-04-12 11:19:28
 * @Description:
 */
import { defineRouter } from "./defineRouter";
import { defineMeta } from "@/router/meta";
export const routes = [
    {
        name: "login",
        path: "/login",
        meta: defineMeta(),
        component: () => import("@/layout/Login/Login.vue"),
    },
    {
        name: "singleLogin",
        path: "/singleLogin",
        meta: defineMeta(),
        component: () => import("@/layout/Loginsso/Loginsso.vue"),
    },
    {
        name: "debug",
        path: "/debug",
        meta: defineMeta(),
        component: () => import("@/pages/Debug/debug.vue"),
    },
    {
        name: "layout",
        path: "/",
        redirect: "/debug",
        meta: defineMeta({ level: 0 }),
        component: () => import("@/layout/ExampleHome.vue"),
        children: [
            {
                name: "debug",
                path: "/debug",
                meta: defineMeta({ level: 1 }),
                component: () => import("@/pages/Debug/debug.vue"),
            },
        ]
    },
    {
        name: "404",
        path: "/404",
        meta: defineMeta({ title: "404" }),
        component: () => import("@/pages/NotPage/not-page.vue"),
    },
    {
        path: "/:catchAll(.*)", // 不识别的path自动匹配404
        redirect: '/404',
    },
];
const router = defineRouter(routes);

export function useRouter() {
    return router.core;
}

export function useRoute() {
    return router.core.currentRoute;
}

export const resetRoute = router.reset;

export default router;
