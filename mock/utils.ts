import { Recordable } from 'vite-plugin-mock';

export function result<T = Recordable>(result: T, msg?: string) {
  return {
    code: 200,
    msg: msg ? msg : 'ok',
    data: result,
  };
}
