import React, { Component } from "react"
class TodoItem extends Component {
  constructor(props) {
    super(props)
    // 把方法的 this 绑定放在 constructor 中操作
    this.handleClick = this.handleClick.bind(this)
  }

  render() {
    const { content } = this.props
    return (
      <div>
        <li onClick={this.handleClick}>{content}</li>
      </div>
    )
  }

  /**
   * 子组件点击删除功能
   * @memberof TodoItem
   */
  handleClick() {
    const { deleteItem, index } = this.props
    deleteItem(index)
  }
}

export default TodoItem
