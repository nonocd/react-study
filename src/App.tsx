import { Suspense } from 'react';
import { BrowserRouter as Router, useRoutes } from 'react-router-dom';
import { ConfigProvider } from 'antd';
import PageLoader from './components/PageLoader';
import routeConfig from './router/router.config';
import './App.css';
import { AuthProvider } from './components/auth';

import zhCN from 'antd/es/locale/zh_CN';
import moment from 'moment';
import 'moment/locale/zh-cn';

moment.locale('zh-cn');

function App() {
  let routes = useRoutes(routeConfig);

  return (
    <div className="App">
      <AuthProvider>
        <Suspense fallback={<PageLoader />}>
          <ConfigProvider locale={zhCN}>{routes}</ConfigProvider>
        </Suspense>
      </AuthProvider>
    </div>
  );
}

export default App;
