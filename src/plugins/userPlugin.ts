import type { User, Users } from "@/proposals/domain/user";

import type { App } from "vue";
import { userDefault } from "@/proposals/domain/user.fixture";
import { userSymbol } from "@/infrastructure/symbols";

export const userPlugin = (users: Users, user: User = userDefault) => ({
  install(app: App) {
    users.setCurrentUser(user);
    app.provide<Users>(userSymbol, users);
  },
});
