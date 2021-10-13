import useRequest from '../hooks/useRequest';

export interface LoginParam {
  account: string;
  password: string;
  type: string;
}

export default function useLoginService() {
  const request = useRequest();

  const signin = (formData: LoginParam, callback: VoidFunction) => {
    return new Promise(resolve => {
      setTimeout(() => {
        callback();
      }, 3000);
    });
    // return request.post('', formData).then(resolve => {
    //   callback();
    // });
  };

  const signout = (callback: VoidFunction) => {
    return new Promise(resolve => {
      setTimeout(() => {
        callback();
      }, 3000);
    });
  };

  return {
    signin,
    signout,
  };
}
