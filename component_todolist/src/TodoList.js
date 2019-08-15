import React, { Component, Fragment } from "react"
import TodoItem from "./TodoItem"
import "./style.css"

class TodoList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      inputValue: "",
      todos: []
    }
    this.handleButtonClick = this.handleButtonClick.bind(this)
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleItemDelete = this.handleItemDelete.bind(this)
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
            onChange={this.handleInputChange}
          />
          <button onClick={this.handleButtonClick}>提交</button>
          <ul>{this.getTodoItem()}</ul>
        </div>
      </Fragment>
    )
  }

  /**
   * 把遍历渲染 Item 的 JSX 封装成方法（优化）
   * @returns TodoItem 遍历渲染出来的 JSX
   * @memberof TodoList
   */
  getTodoItem() {
    return this.state.todos.map((item, index) => {
      return (
        <TodoItem
          content={item}
          index={index}
          key={index}
          deleteItem={this.handleItemDelete}
        />
      )
    })
  }

  /**
   * 输入框数据改动
   * @param {object} e 事件对象集合
   */
  handleInputChange(e) {
    // 16版本中，setState 可以写入函数，并且它有一个参数是 prevState 代表改变前的状态，可以用来优化代码
    const value = e.target.value
    this.setState(() => ({
      inputValue: value
    }))
  }

  /**
   * 点击添加 list
   * @param {object} e 事件对象集合
   */
  handleButtonClick() {
    // 箭头函数可以使用简化 return 的写法
    this.setState(prevState => ({
      todos: [...prevState.todos, prevState.inputValue],
      inputValue: ""
    }))
  }

  /**
   * 点击删除当前item
   * @param {object} e  事件对象集合
   */
  handleItemDelete(index) {
    this.setState(prevState => {
      const list = [...prevState.todos]
      list.splice(index, 1)
      return { todos: list }
    })
  }
}

export default TodoList
