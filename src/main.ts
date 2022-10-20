import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

import "./assets/main.css";
import { userPlugin } from "@/plugins/userPlugin";
import { proposalsPlugin } from "@/plugins/proposalsPlugin";
import { localUsers } from "@/infrastructure/localUsers";
import { supabaseProposals } from "@/infrastructure/supabaseProposals";

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(userPlugin(localUsers, localUsers.getCurrentUser()));
app.use(proposalsPlugin(supabaseProposals));

app.mount("#app");
