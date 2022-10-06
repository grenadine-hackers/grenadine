import { inject } from "vue";
import type { User, Users } from "@/proposals/domain/user";
import { userSymbol } from "@/infrastructure/symbols";
import { InMemoryUsers } from "@/infrastructure/inMemoryUsers";

export const useCurrentUser = (): User => {
  const { getCurrentUser } = inject<Users>(userSymbol, InMemoryUsers());
  return getCurrentUser();
};
