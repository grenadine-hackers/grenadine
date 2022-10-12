import type { App } from "vue";
import { userSymbol } from "@/infrastructure/symbols";
import type { User, Users } from "@/proposals/domain/user";
import { defaultUser } from "@/proposals/domain/user.fixture";

export const userPlugin = (users: Users, user: User = defaultUser) => ({
  install(app: App) {
    users.setCurrentUser(user);
    app.provide<Users>(userSymbol, users);
  },
});
