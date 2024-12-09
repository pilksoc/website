import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import { createRouter, createWebHistory } from "vue-router";
import Homepage from "./views/Homepage.vue";
import PilkHack2025 from "./views/PilkHack2025.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [{ path: "/", component: Homepage }, { path: "/hack/2025", component: PilkHack2025 }],
});

createApp(App).use(router).mount("#app");
