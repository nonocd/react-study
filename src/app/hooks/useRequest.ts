import { message } from 'antd';
import { Axios, AxiosResponse } from 'axios';
import { getErrorMessage } from '../utils/status';

type Result<T = any> = {
  code: string;
  msg: string;
  data: T;
};

const instance = new Axios({ timeout: 10 * 1000 });

instance.interceptors.response.use(
  (response: AxiosResponse) => {
    const { data, status } = response;

    if (status == 200) {
      return data;
    }
    message.error(getErrorMessage(status));
  },
  (error: any) => {
    message.error('请求出错：' + error);
  },
);

const useRequest = () => {
  return instance;
};

export default useRequest;
