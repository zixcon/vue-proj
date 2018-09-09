import Vue from "vue";
import Router from "vue-router";

import rinterceptor from "@/router/rinterceptor";
import rlayout from "@/router/rlayout";
import rhome from "@/router/rhome";

Vue.use(Router);

export default function () {
    // 路由配置
    let router = new Router({
      routes:[]
    });
  
    //路由拦截
    rinterceptor(router);
  
    //加载各模块的路由
    rlayout(router);
    rhome(router);

    return router;
}

// export default new Router({
//   routes: [
//     {
//       path: "/",
//       // name: "home",
//       // component: Home,
//       component: () =>
//                       import("@/views/home/Home.vue"),
//       redirect:"/home"
//       // children: [
//       //   {
//       //     path: "/home",
//       //     // name: "home",
//       //     // redirect:"/home/index",
//       //     // component: Home
//       //     component: () =>
//       //                 import("@/views/home/Home.vue"),
//       //     children: [
//       //             {
//       //             path: "index",
//       //             // name: "index",
//       //             // component: Home
//       //             component: () =>
//       //                 import("@/views/home/Index.vue")
//       //             },
//       //             {
//       //             path: "login",
//       //             // name: "login",
//       //             component: () =>
//       //                 import("@/views/home/Login.vue")
//       //             }
//       //     ]
//       // }
//       // ]
//     }
//   ]
// });

// // this.$router.push({
// //   path:'/home'
// // })
