import { createContext, useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthConsts } from './AuthConsts';
import { fakeAuthProvider } from '.';
import { useLocalStorage } from '../hooks/useLocalStorage';

type AuthContextType = {
  token: string;
  user: any;
  userId: string;
  username: string;
  isAuthenticated: () => boolean;
  signin: (formData: any, callback: VoidFunction) => void;
  signout: (callback: VoidFunction) => void;
};

// 登录认证结果
export type AuthResult = {
  token: string;
  user: any;
};

const AuthContext = createContext<AuthContextType>(null!);

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [token, setToken] = useLocalStorage(AuthConsts.ACCESS_TOKEN_KEY, '');
  const [user, setUser] = useLocalStorage(AuthConsts.USER_KEY);
  const [userId, setUserId] = useLocalStorage(AuthConsts.USER_ID, '');
  const [username, setUsername] = useLocalStorage(AuthConsts.USERNAME_KEY, '');

  const authenticate = (result: AuthResult): void => {
    setToken(result.token);
    setUser(result.user);
    setUserId(result.user.userId);
    setUsername(result.user.username);
  };

  const isAuthenticated = (): boolean => {
    return token != null && token != 'undefined' && token.trim().length > 0;
  };

  const signin = (formData: any, callback: VoidFunction) => {
    return fakeAuthProvider.signin(formData, data => {
      authenticate(data);
      callback();
    });
  };

  const signout = (callback: VoidFunction) => {
    return fakeAuthProvider.signout().then(() => {
      setToken(null!);
      setUser(null);
      callback();
    });
  };

  const value = { token, user, userId, username, isAuthenticated, signin, signout };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

// 需要登录才能访问的组件
export function RequireAuth({ children }: { children: JSX.Element }) {
  const auth = useAuth();
  const location = useLocation();

  if (!auth.isAuthenticated()) {
    return <Navigate to="/login" state={{ from: location }} />;
  }

  return children;
}
