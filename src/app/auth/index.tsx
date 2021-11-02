import axios from '@/utils/http/axios/axios';

export interface LoginParam {
  account: string;
  password: string;
  type: string;
}

export const fakeAuthProvider = {
  signin: (params: LoginParam, callback: (result: any) => void) => {
    const { account, password, ...rest } = params;
    var formData = {
      grant_type: 'password',
      client_id: 'ro.client',
      client_secret: 'secret',
      username: account,
      password: password,
      ...rest,
    };

    axios.post('/api/oauth2/token', formData).then(data => {
      console.log(data);
      callback(data);
    });
  },

  signout: () => axios.post('/api/auth/signout'),
};
