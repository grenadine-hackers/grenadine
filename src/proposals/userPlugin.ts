import type { App } from "vue";
import { userSymbol } from "@/infrastructure/symbols";
import type { User, Users } from "@/proposals/domain/user";

export const userPlugin = (
  users: Users,
  defaultUser: User = { id: "0000000000000000000" }
) => ({
  install(app: App) {
    users.setCurrentUser(defaultUser);
    app.provide<Users>(userSymbol, users);
  },
});
