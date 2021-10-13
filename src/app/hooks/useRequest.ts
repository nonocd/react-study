import { Axios } from 'axios';

const instance = new Axios({ timeout: 10 * 1000 });

const useRequest = () => {
  return instance;
};

export default useRequest;
