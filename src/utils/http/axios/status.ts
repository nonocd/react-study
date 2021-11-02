import { useMessage } from '@/hooks/useMessage';

const { message } = useMessage();

export const checkStatus = (status: number | string) => {
  let errMessage: string = '';
  switch (status) {
    case 400:
      errMessage = '请求错误(400)';
      break;
    case 401:
      errMessage = '未授权，请重新登录(401)';
      break;
    case 403:
      errMessage = '拒绝访问(403)';
      break;
    case 404:
      errMessage = '请求出错(404)';
      break;
    case 408:
      errMessage = '请求超时(408)';
      break;
    case 500:
      errMessage = '服务器错误(500)';
      break;
    case 501:
      errMessage = '服务未实现(501)';
      break;
    case 502:
      errMessage = '网络错误(502)';
      break;
    case 503:
      errMessage = '服务不可用(503)';
      break;
    case 504:
      errMessage = '网络超时(504)';
      break;
    case 505:
      errMessage = 'HTTP版本不受支持(505)';
      break;
    default:
      errMessage = `连接出错(${status})!`;
  }

  if (errMessage) {
    message.error(`${message}，请检查网络或联系管理员！`);
  }
};
