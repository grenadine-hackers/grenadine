import type { User, Users } from "@/proposals/domain/user";
import { v4 as uuid } from "uuid";

export const createUser = (): User => {
  const user: User = {
    id: uuid(),
  };
  setCurrentUser(user);
  return user;
};

const setCurrentUser = (user: User) => {
  localStorage.setItem("grenadine/currentUser", JSON.stringify(user));
};
const getCurrentUser = (): User => {
  const currentUser = localStorage.getItem("grenadine/currentUser");
  if (currentUser) {
    return JSON.parse(currentUser) as User;
  } else {
    return createUser();
  }
};

export const localUsers: Users = {
  setCurrentUser,
  getCurrentUser,
};
