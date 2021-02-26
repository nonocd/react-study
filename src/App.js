import { useState } from 'react'
import { Alert, ConfigProvider, DatePicker, message } from 'antd'
import Welcome from './components/welcome'
import Clock from './components/clock'
import Toggle from './components/toggle'
// import zhCN from "antd/lib/locale/zh_CN";
import zhCN from 'antd/es/locale/zh_CN'
import moment from 'moment'
import 'moment/locale/zh-cn'
import 'antd/dist/antd.css'

import './App.css'

moment.locale('zh-cn')

function App() {
  const [date, setDate] = useState(null)
  const handleChange = value => {
    message.info(`您选择的日期是: ${value ? value.format('YYYY年MM月DD日') : '未选择'}`)
    setDate(value)
  }

  return (
    <ConfigProvider locale={zhCN}>
      <div className="App">
        <Welcome name="World" />
        <Clock />
        <Toggle value={false} />
        <div style={{ width: 400, margin: '100px auto' }}>
          <DatePicker onChange={handleChange} />
          <div style={{ marginTop: 16 }}>
            当前日期：{date ? date.format('YYYY年MM月DD日') : '未选择'}
          </div>
          <Alert message="当前日期" description={date ? date.format('YYYY年MM月DD日') : '未选择'} />
        </div>
      </div>
    </ConfigProvider>
  )
}

export default App
