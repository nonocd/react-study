import { createContext, useContext } from 'react';

export type AuthContextType = {
  token: string;
  user: any;
  userId: string;
  username: string;
  isAuthenticated: () => boolean;
  signin: (formData: any, callback: VoidFunction) => void;
  signout: (callback: VoidFunction) => void;
};

export const AuthContext = createContext<AuthContextType>(null!);

export function useAuth() {
  return useContext(AuthContext);
}
