import "bootstrap/dist/css/bootstrap.min.css";
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import css from "@/assets/css/page.css";

createApp(App).use(router).use(css).mount("#app");

import "bootstrap/dist/js/bootstrap.js";
