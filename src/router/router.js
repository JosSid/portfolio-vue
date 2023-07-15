import Vue from "vue";
import Router from "vue-router";
import HomePage from "../components/HomePage.vue";

Vue.use(Router);

const routes = [{ path: "/", name: "home", component: HomePage }];

const router = new Router({
  mode: "history",
  routes,
});

export default router;
