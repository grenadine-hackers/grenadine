import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

import "./assets/main.css";
import { userPlugin } from "@/proposals/userPlugin";
import { InMemoryUsers } from "@/infrastructure/inMemoryUsers";
import { proposalsPlugin } from "@/proposals/proposalsPlugin";

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(userPlugin(InMemoryUsers())); //TODO: replace the in memory implementation
app.use(proposalsPlugin());

app.mount("#app");
