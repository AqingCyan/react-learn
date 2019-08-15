import React, { Component } from "react"
class TodoItem extends Component {
  constructor(props) {
    super(props)
    // 把方法的 this 绑定放在 constructor 中操作
    this.handleClick = this.handleClick.bind(this)
  }

  render() {
    return (
      <div>
        <li onClick={this.handleClick}>{this.props.content}</li>
      </div>
    )
  }

  /**
   * 子组件点击删除功能
   * @memberof TodoItem
   */
  handleClick() {
    this.props.deleteItem(this.props.index)
  }
}

export default TodoItem
