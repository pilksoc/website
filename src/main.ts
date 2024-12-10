import "./style.css";
import App from "./App.vue";
import Homepage from "./views/Homepage.vue";
import PilkHack2025 from "./views/PilkHack2025.vue";
import { ViteSSG } from "vite-ssg";

export const createApp = ViteSSG(App, {
  routes: [
    { path: "/", component: Homepage },
    { path: "/hack/2025", component: PilkHack2025 },
  ],
});
