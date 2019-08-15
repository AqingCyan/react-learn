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
            onChange={this.handleInputChange.bind(this)}
          />
          <button onClick={this.handleButtonClick.bind(this)}>提交</button>
          <ul>
            {this.state.todos.map((item, index) => {
              return (
                <div>
                  <TodoItem
                    content={item}
                    index={index}
                    key={index}
                    deleteItem={this.handleItemDelete.bind(this)}
                  />
                </div>
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
    const list = [...this.state.todos]
    list.splice(index, 1)
    this.setState({
      todos: list
    })
  }
}

export default TodoList
