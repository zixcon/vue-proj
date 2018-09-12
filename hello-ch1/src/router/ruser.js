export default function (router) {
    let routes = {
        path: "/user",
        name: "user",
        // component: () => import("@/views/home/Home.vue"),
        component: () => import("@/components/layout/Layout.vue"),
        // redirect:{path: "/user/ulist"},
        redirect:{name: "ulist"}, //跳转到下级第一层
        children: [
                {
                path: "ulist", //如果这里不使用 "/ulist" 则表示是归属于上级路由（
                name: "ulist",
                component: resolve => require(["@/views/user/Ulist.vue"], resolve)
                }
            ]
        };
    // router.push(routes);
    router.addRoutes([routes]);
}
