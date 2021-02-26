import { useState } from 'react'
import moment from 'moment'

/** 函数组件 */
export function Welcome(props) {
  return <h1>Hello, {props.name}</h1>
}

export function Clock(props) {
  const startDate = props.start ? moment(props.start) : moment()
  const [date, setDate] = useState(startDate)

  setInterval(() => {
    setDate(new Date())
  }, 1000)

  return (
    <div>
      {moment(date).format('YYYY年MM月DD日')}
      <span style={{ marginLeft: 5 }}>{date.toLocaleTimeString()}</span>
    </div>
  )
}
