export default function (router) {
    let routes = {
        path: "/system",
        name: "system",
        component: () => import("@/components/layout/Layout.vue"),
        redirect:{name: "list"}, //跳转到下级第一层
        children: [
                {
                path: "list", //如果这里不使用 "/list" 则表示是归属于上级路由（
                name: "list",
                component: resolve => require(["@/views/system/Syslist.vue"], resolve)
                }
            ]
        };
    router.addRoutes([routes]);

    router.addRoutes([
        {
            path: "/role",
            name: "role",
            component: () => import("@/components/layout/Layout.vue"),
            redirect:{name: "rolelist"}, //跳转到下级第一层
            children: [
                {
                path: "rolelist", //如果这里不使用 "/list" 则表示是归属于上级路由（
                name: "rolelist",
                component: resolve => require(["@/views/system/role/rolelist.vue"], resolve)
                }
            ]
        }
    ]);

    router.addRoutes([
        {
            path: "/privilege",
            name: "privilege",
            component: () => import("@/components/layout/Layout.vue"),
            redirect:{name: "privilegelist"}, //跳转到下级第一层
            children: [
                {
                path: "privilegelist", //如果这里不使用 "/list" 则表示是归属于上级路由（
                name: "privilegelist",
                component: resolve => require(["@/views/system/privilege/privilegelist.vue"], resolve)
                }
            ]
        }
    ]);

    router.addRoutes([
        {
            path: "/resource",
            name: "resource",
            component: () => import("@/components/layout/Layout.vue"),
            redirect:{name: "resourcelist"}, //跳转到下级第一层
            children: [
                {
                path: "resourcelist", //如果这里不使用 "/list" 则表示是归属于上级路由（
                name: "resourcelist",
                component: resolve => require(["@/views/system/privilege/resourcelist.vue"], resolve)
                }
            ]
        }
    ]);

    router.addRoutes([
        {
            path: "/menu",
            name: "menu",
            component: () => import("@/components/layout/Layout.vue"),
            redirect:{name: "menutree"}, //跳转到下级第一层
            children: [
                {
                path: "menutree", //如果这里不使用 "/list" 则表示是归属于上级路由（
                name: "menutree",
                component: resolve => require(["@/views/system/menu/menutree.vue"], resolve)
                }
            ]
        }
    ]);
}
