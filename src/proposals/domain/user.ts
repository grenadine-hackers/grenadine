export type User = {
  id: string;
};

export type Users = {
  getCurrentUser: () => User;
};
