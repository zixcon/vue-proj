// import Vue from "vue";
// import Router from "vue-router";

// Vue.use(Router);

// // import Index from template("#index");
// // const Layout = { template: '#layout' };
// const Home = { template: '#home' };
// import Index from "@/views/home/Index.vue";
// // var Layout = Vue.extend({
// //     template: '#layout'
// // });

// export default new Router({
//   routes: [
//     // {
//     //     path: "/home",
//     //     // name: "home",
//     //     // redirect:"/home/index",
//     //     component: Home,
//     //     children: [
//     //             {
//     //             path: "index",
//     //             // name: "index",
//     //             component: Index
//     //             },
//     //             {
//     //             path: "login",
//     //             // name: "login",
//     //             component: () =>
//     //                 import("@/views/home/Login.vue")
//     //             }
//     //     ]
//     // }
//     {
//         path: '', 
//         component: Home
//     },
//     {
//         path: "index",
//         // name: "index",
//         component: Index
//         },
//         {
//         path: "login",
//         // name: "login",
//         component: () =>
//             import("@/views/home/Login.vue")
//         }
//     ]
// });


export default function (router) {
    router.addRoutes([
        {
            path: "/",
            // name: "home",
            // component: Home,
            component: () =>
                            import("@/views/home/Home.vue"),
            redirect:"/home",
        },
        {
            path: "/about",
            component: resolve => require(["@/views/About.vue"], resolve)
        }
    ]);
}
