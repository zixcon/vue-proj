import Vue from "vue";
import App from "./App.vue";
import rinitrouter from "./router";
import store from "./store";
import iView from 'iview';
import 'iview/dist/styles/iview.css';
// import 'components/theme/index.less';
import 'iview/src/styles/index.less';

// 初始化路由
// import rinit from "@/router/rinit";
const router = rinitrouter();

Vue.use(iView);
// Vue.component('Modal',Modal);
// Vue.component('Tree',Tree);
// Vue.component('Button',Button);
// Vue.component('Icon',Icon);
// Vue.component('Alert',Alert);

Vue.config.productionTip = false;

new Vue({
  router, // router 固定名称不能随意更改，否则不识别
  store,
  render: h => h(App)
}).$mount("#app");
