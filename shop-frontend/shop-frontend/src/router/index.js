import { createRouter, createWebHistory } from "vue-router";
// 导入 HomeView 组件
import HomeView from "../views/HomeView.vue";

// 创建路由实例
const router = createRouter({
  // 使用 HTML5 模式
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // 首页
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    // 分类页面
    {
      path: "/category",
      name: "category",
      component: () => import("../views/CategoryView.vue"),
    },
    // 购物车页面
    {
      path: "/cart",
      name: "cart",
      component: () => import("../views/CartView.vue"),
    },
    // 消息页面
    {
      path: "/message",
      name: "message",
      component: () => import("../views/MessageView.vue"),
    },
    // 我的页面
    {
      path: "/user",
      name: "user",
      component: () => import("../views/UserView.vue"),
    },
  ],
});

export default router;
