import type { App } from "vue";
import { userSymbol } from "@/infrastructure/symbols";
import type { User, Users } from "@/proposals/domain/user";

export const userPlugin = (
  defaultUser: User = { id: "0000000000000000000" }
) => ({
  install(app: App) {
    app.provide<Users>(userSymbol, {
      getCurrentUser: (): User => defaultUser,
    });
  },
});
