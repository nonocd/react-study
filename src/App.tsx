import { BrowserRouter as Router, useRoutes } from 'react-router-dom';
import { ConfigProvider } from 'antd';
import routeConfig from './router/router.config';
import './App.css';

import zhCN from 'antd/es/locale/zh_CN';
import moment from 'moment';
import 'moment/locale/zh-cn';

moment.locale('zh-cn');

function App() {
  let routes = useRoutes(routeConfig);

  return (
    <div className="App">
      <ConfigProvider locale={zhCN}>{routes}</ConfigProvider>
    </div>
  );
}

export default App;
