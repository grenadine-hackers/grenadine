import "./assets/main.scss";

import App from "./App.vue";
import { createApp } from "vue";
import { createPinia } from "pinia";
import { localUsers } from "@/infrastructure/localUsers";
import { proposalsPlugin } from "@/plugins/proposalsPlugin";
import router from "./router";
import { supabaseProposals } from "@/infrastructure/supabaseProposals";
import { userPlugin } from "@/plugins/userPlugin";

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(userPlugin(localUsers, localUsers.getCurrentUser()));
app.use(proposalsPlugin(supabaseProposals));

app.mount("#app");
