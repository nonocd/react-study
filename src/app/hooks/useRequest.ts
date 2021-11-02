import { message, notification } from 'antd';
import { Axios, AxiosResponse } from 'axios';
import { getErrorMessage } from '../utils/status';

type Result<T = any> = {
  code: string;
  msg: string;
  data: T;
};

console.log('baseurl:', import.meta.env.BASE_URL);
const axios = new Axios({
  baseURL: import.meta.env.BASE_URL,
  timeout: 10 * 1000,
  headers: { 'Content-Type': 'application/json' },
});

axios.interceptors.response.use(
  (response: AxiosResponse) => {
    const { data, status } = response;

    if (status == 200) {
      return JSON.parse(data);
    }
    notification.error({
      message: getErrorMessage(status),
      description: data || response.statusText || 'Error',
    });
  },
  (error: any) => {
    let msg = '请求错误';
    notification.error({
      message: msg,
      description: error.response.data?.msg || 'Error',
    });

    return Promise.reject(error);
  },
);

const useRequest = () => {
  return axios;
};

export default useRequest;
