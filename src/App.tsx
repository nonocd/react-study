import { ConfigProvider } from 'antd';
import BasicLayout from './layouts/BasicLayout';
import './App.css';

import zhCN from 'antd/es/locale/zh_CN';
import moment from 'moment';
import 'moment/locale/zh-cn';

moment.locale('zh-cn');

function App() {
  return (
    <div className="App">
      <ConfigProvider locale={zhCN}>
        <BasicLayout />
      </ConfigProvider>
    </div>
  );
}

export default App;
