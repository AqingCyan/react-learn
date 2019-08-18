import React, { Component } from "react"
import PropsTypes from "prop-types"

class TodoItem extends Component {
  constructor(props) {
    super(props)
    // 把方法的 this 绑定放在 constructor 中操作
    this.handleClick = this.handleClick.bind(this)
  }

  render() {
    const { content, test } = this.props
    return (
      <div>
        <li onClick={this.handleClick}>
          {test}: {content}
        </li>
      </div>
    )
  }

  /**
   * 子组件点击删除功能
   * @memberof TodoItem
   */
  handleClick() {
    // 结构赋值的方式拿到 props 中的值
    const { deleteItem, index } = this.props
    deleteItem(index)
  }
}

// props 类型校验
TodoItem.propTypes = {
  // isRequired 要求必传
  test: PropsTypes.string.isRequired,
  content: PropsTypes.oneOfType([PropsTypes.string, PropsTypes.number]),
  deleteItem: PropsTypes.func,
  index: PropsTypes.number
}

// props 默认值设置
TodoItem.defaultProps = {
  test: "待办"
}

export default TodoItem
