import header from "@/components/layout/Header.vue";
import footer from "@/components/layout/Footer.vue";
import content from "@/components/layout/Content.vue";

export default function (router) {
    let routes = 
        {
        path: "/home",
        name: "home",
        // 这里少了component 则下级就无法展示了
        component: resolve => require(["@/components/layout/Layout.vue"], resolve),
        // component: () => import("@/views/home/Nvr.vue"),
        // component: () => import("@/components/layout/Header.vue"),
        // component: () => import("@/components/layout/Content.vue"),
        // components: {
        //     default: header
        //     // ,
        //     // content: content,
        //     // footer: footer
        // },
        // redirect:"/home/index",
        redirect:{name: "index"},
        children: [
                {
                path: "index",
                name: "index",
                component: resolve => require(["@/views/home/Index.vue"], resolve)
                },
                {
                path: "login",
                name: "login",
                component: resolve => require(["@/views/home/Login.vue"], resolve)
                }
            ]
        };
    // router.push(routes);
    router.addRoutes([routes]);
}
