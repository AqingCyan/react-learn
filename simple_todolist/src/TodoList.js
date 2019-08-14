import React, { Component, Fragment } from "react"

class TodoList extends Component {
  constructor(props) {
    super(props)
    // state 指状态（页面的初始数据都这里）
    this.state = {
      inputValue: "",
      todos: ["学React", "学Go语言", "睡觉"]
    }
  }

  render() {
    return (
      <Fragment>
        <h1>TodoList</h1>
        <div>
          <input 
          value={this.state.inputValue} 
          // handleInputChange 方法的 this 不是组件，因此调用 bind 修改
          onChange={this.handleInputChange.bind(this)}/>
          <button>提交</button>
          <ul>
            <li>学React</li>
            <li>学Go语言</li>
            <li>睡觉</li>
          </ul>
        </div>
      </Fragment>
    )
  }

  /**
   * 输入框数据改动
   * @param {object} 事件对象
   */
  handleInputChange(e) {
    // 若要修改状态，不能直接修改 state 中的数据，而是调用 setState
    this.setState({
      inputValue: e.target.value
    })
  }
}

export default TodoList
