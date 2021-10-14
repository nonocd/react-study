import { useState } from 'react';
import useToken from './useToken';

export const AppService = useToken(useAppService);

export default function useAppService() {
  const [appName, setAppName] = useState('Keep Admin');

  return {
    appName,
    setAppName,
  };
}
