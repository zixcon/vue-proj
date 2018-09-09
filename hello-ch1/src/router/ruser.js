export default function (router) {
    router.addRoutes([
        {
        path: "/user",
        component: () => import("@/components/layout/Layout.vue"),
        redirect:"/user/ulist",
        children: [
                {
                path: "ulist",
                component: resolve => require(["@/views/user/Ulist.vue"], resolve)
                }
            ]
        }
    ]);
}
