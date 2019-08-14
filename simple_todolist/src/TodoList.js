import React, { Component, Fragment } from "react"
import "./style.css"

class TodoList extends Component {
  constructor(props) {
    super(props)
    // state 指状态（页面的初始数据都这里）
    this.state = {
      inputValue: "",
      todos: []
    }
  }

  render() {
    return (
      <Fragment>
        <h1>TodoList</h1>
        <div>
          <label htmlFor="insert">请输入内容</label>
          <input
            id="insert"
            className="input"
            value={this.state.inputValue}
            // handleInputChange 方法的 this 不是组件，因此调用 bind 修改
            onChange={this.handleInputChange.bind(this)}
          />
          <button onClick={this.handleButtonClick.bind(this)}>提交</button>
          <ul>
            {// 使用 map 对 todos 做遍历，渲染 li 标签
            this.state.todos.map((item, index) => {
              // 使用 index 作为 key 值是不提倡的，这里暂时如此处理
              return (
                <li
                  key={index}
                  onClick={this.handleItemDelete.bind(this, index)}
                  /* 
                  如果想让输入的内容不进行转义（可能会造成 xss 攻击），指定 dangerouslySetInnerHTM 的内容为 item
                  指定后， 标签内的 {item} 就不必写了
                  dangerouslySetInnerHTML={{__html: item}}
                  */
                >
                  {item}
                </li>
              )
            })}
          </ul>
        </div>
      </Fragment>
    )
  }

  /**
   * 输入框数据改动
   * @param {object} e 事件对象集合
   */
  handleInputChange(e) {
    // 若要修改状态，不能直接修改 state 中的数据，而是调用 setState
    this.setState({
      inputValue: e.target.value
    })
  }

  /**
   * 点击添加 list
   * @param {object} e 事件对象集合
   */
  handleButtonClick() {
    this.setState({
      todos: [...this.state.todos, this.state.inputValue],
      inputValue: ""
    })
  }

  /**
   * 点击删除当前item
   * @param {object} e  事件对象集合
   */
  handleItemDelete(index) {
    // 切记不能直接修改 state
    const list = [...this.state.todos]
    list.splice(index, 1)
    this.setState({
      todos: list
    })
  }
}

export default TodoList
