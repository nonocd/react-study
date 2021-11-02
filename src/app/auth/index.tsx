import useRequest from '../hooks/useRequest';

const request = useRequest();

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

    return request.post('/api/oauth2/token', formData).then(data => {
      console.log(data);
      callback(data);
    });
  },

  signout: () => request.post('/api/auth/signout'),
};
