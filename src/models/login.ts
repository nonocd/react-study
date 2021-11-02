export interface LoginParams {
  /** 用户名 */
  username: string;
  /** 密码 */
  password: string;
}

export interface LoginResult {
  token: string;
  user: LoginUser;
}

export interface LoginUser {
  userId: string;
  username: string;
  roles: [];
}
