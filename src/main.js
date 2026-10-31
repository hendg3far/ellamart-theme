import { createApp } from "vue";
import { createPinia } from "pinia";

import router from "./router";
import mitt from "mitt";

import App from "./App.vue";
import "@/assets/css/main.css";

const pinia = createPinia();
const emiiter = mitt();

createApp(App).provide("emitter", emiiter).use(router).use(pinia).mount("#app");
