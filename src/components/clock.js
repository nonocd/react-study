import React from 'react'
import moment from 'moment'

export default class Clock extends React.Component {
  constructor(props) {
    super(props)
    this.state = { date: new Date() }
  }

  componentDidMount() {
    this.timer = setInterval(() => this.tick(), 1000)
  }

  componentWillUnmount() {
    clearInterval(this.timer)
  }

  tick() {
    this.setState({
      date: new Date(),
    })
  }

  render() {
    return (
      <div>
        {moment(this.state.date).format('YYYY年MM月DD日')}
        <span style={{ marginLeft: 5 }}>{this.state.date.toLocaleTimeString()}</span>
      </div>
    )
  }
}
