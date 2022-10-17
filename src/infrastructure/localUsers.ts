import type { User, Users } from "@/proposals/domain/user";

let currentUser: User = {
  id: "000000000000000000000",
};

const setCurrentUser = (user: User) => {
  currentUser = user;
};
const getCurrentUser = (): User => {
  return currentUser;
};
export const LocalUsers: Users = {
  setCurrentUser,
  getCurrentUser,
};
