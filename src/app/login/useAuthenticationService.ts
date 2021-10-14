import useToken from '../useToken';
import { LoginConsts } from './LoginConsts';

export const AuthenticationService = useToken(useAuthenticationService);

export type AuthenticationResult = {
  access_token: string;
  user: any;
};

export default function useAuthenticationService() {
  const authenticate = (result: AuthenticationResult, account: string): void => {
    window.localStorage.setItem(LoginConsts.USER_KEY, result.user);
    window.localStorage.setItem(LoginConsts.ACCESS_TOKEN_KEY, result.access_token);
    window.localStorage.setItem(LoginConsts.USERNAME_KEY, account);
  };

  const isAuthenticated = (): boolean => {
    return window.localStorage.getItem(LoginConsts.ACCESS_TOKEN_KEY) != null;
  };

  const getUser = (): any | null => {
    return window.localStorage.getItem(LoginConsts.USER_KEY);
  };

  const getUserId = (): string | null => {
    return window.localStorage.getItem(LoginConsts.USER_ID);
  };

  const getUsername = (): string | null => {
    return window.localStorage.getItem(LoginConsts.USERNAME_KEY);
  };

  const getAccessToken = (): string | null => {
    return window.localStorage.getItem(LoginConsts.ACCESS_TOKEN_KEY);
  };

  return {
    authenticate,
    isAuthenticated,
    getUser,
    getUserId,
    getUsername,
    getAccessToken,
  };
}
