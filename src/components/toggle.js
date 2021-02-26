import React from 'react'
import { Button } from 'antd'

class Toggle extends React.Component {
  constructor(props) {
    super(props)
    console.log('构造函数：', props.value)
    this.state = { isToggleOn: this.props.value === undefined ? true : this.props.value }
    this.handleClick = this.handleClick.bind(this)
  }

  componentDidMount() {
    console.log('componentDidMount：', this.props.value)
  }

  handleClick() {
    this.setState(state => ({
      isToggleOn: !state.isToggleOn,
    }))
  }

  render() {
    return (
      <Button onClick={this.handleClick} style={{ width: 50, padding: 0, textAlign: 'center' }}>
        {this.state.isToggleOn ? 'ON' : 'OFF'}
      </Button>
    )
  }
}

export default Toggle
