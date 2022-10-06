import { inject } from "vue";
import type { User, Users } from "@/proposals/domain/user";
import { userSymbol } from "@/infrastructure/symbols";

export const useCurrentUser = (): User => {
  const { getCurrentUser } = inject<Users>(userSymbol, {
    getCurrentUser: () => ({ id: "" }),
  });
  return getCurrentUser();
};
