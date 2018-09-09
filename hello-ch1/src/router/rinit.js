import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

import rinterceptor from "@/router/rinterceptor";
import rlayout from "@/router/rlayout";


export default function () {
    // 路由配置
    let router = new Router({
      routes:[]
    });
  
    //路由拦截
    rinterceptor(router);
  
    //加载各模块的路由
    rlayout(router);
    return router;
}
