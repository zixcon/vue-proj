export default function (router) {
    router.addRoutes([
        {
        path: "/home",
        // name: "home",
        // 这里少了component 则下级就无法展示了
        // component: resolve => require(["@/components/layout/Layout.vue"], resolve),
        // component: () => import("@/views/home/Index.vue"),
        component: () => import("@/components/layout/Layout.vue"),
        // redirect:"/home/index",
        children: [
                {
                path: "index",
                // name: "index",
                component: resolve => require(["@/views/home/Index.vue"], resolve)
                },
                {
                path: "login",
                // name: "login",
                component: resolve => require(["@/views/home/Login.vue"], resolve)
                }
            ]
        }
    ]);
}
