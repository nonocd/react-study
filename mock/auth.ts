import { MockMethod } from 'vite-plugin-mock';
import { result } from './utils';

var user = {
  userId: '53e117ff29faac1c',
  username: 'admin',
  password: '123456',
  roles: ['admin'],
};

export default [
  {
    url: '/api/oauth2/token',
    method: 'post',
    response: ({ body }) => {
      const { username, password } = body;
      return result({
        token: 'cf136dc3c1fc93f31185e5885805d',
        user: user,
      });
    },
  },
] as MockMethod[];
