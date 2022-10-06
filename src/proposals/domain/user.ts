export type User = {
  id: string;
};

export type Users = {
  setCurrentUser: (user: User) => void;
  getCurrentUser: () => User;
};
