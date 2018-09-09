export default function (router) {
    router.addRoutes([
        {
        path: "/home",
        // name: "home",
        redirect:"/home/login",
        component: resolve => require(["@/components/layout/Layout.vue"], resolve),
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
