import type { User, Users } from "@/proposals/domain/user";

export const InMemoryUsers = (): Users => {
  let currentUser: User;
  return {
    setCurrentUser: (user: User) => {
      currentUser = user;
    },
    getCurrentUser: (): User => currentUser,
  };
};
