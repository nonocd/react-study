import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';
import { getToken } from '@/utils/auth';
import { useMessage } from '@/hooks/useMessage';
import { checkStatus } from './status';

const { message } = useMessage();

const axiosInstance: AxiosInstance = axios.create({
  baseURL: import.meta.env.BASE_URL,
  timeout: 10 * 1000,
  headers: { 'Content-Type': 'application/json' },
});

axiosInstance.interceptors.request.use((config: AxiosRequestConfig) => {
  const token = getToken();
  if (token) {
    const headers = { ...config.headers, Authorization: `Bearer ${token}` };
    config.headers = headers;
  }

  return config;
});

axiosInstance.interceptors.response.use(
  response => {
    if (response.status !== 200) {
      checkStatus(response.status);
    }

    const { data } = response;
    if (!data) {
      throw new Error('[HTTP] Request has no return value');
    }

    const { code, data: result, msg } = data;
    const isSuccess = data && Reflect.has(data, 'code') && code === 200;
    if (isSuccess) {
      return result;
    }

    message.error(msg);
  },
  error => {
    message.error('请求错误');
    return Promise.reject(error);
  },
);

export default axiosInstance;
