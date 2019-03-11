import React, {Component, Fragment} from 'react';
import './style.css';
import TodoItem from './TodoItem';

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
      list: []
    };
    // 把this的指向在这里做修改
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleBtnClick = this.handleBtnClick.bind(this);
    // 这里改变this的指向，是为了让子组件从ItemDelete找到父组件this中的handleItemDelete方法
    this.handleItemDelete = this.handleItemDelete.bind(this);
  }

  render() {
    return (
      // Fragment是一个react的组件，用作嵌套最外层
      <Fragment>
        <div>
          {/*label细节：for会被react警告以为是for循环，这里有htmlFor替换*/}
          <label htmlFor='insertArea'>输入内容</label>
          {/*方法和数据的绑定如下*/}
          <input
            id='insertArea'
            className='input'
            value={this.state.inputValue}
            onChange={this.handleInputChange}
          />
          <button onClick={this.handleBtnClick}>提交</button>
        </div>
        <ul>
          {
            this.state.list.map((item, index) => {
              return (
                // 使用TodoItem子组件的时候，把item，index传给它
                <TodoItem
                  content={item}
                  key={index}
                  index={index}
                  ItemDelete={this.handleItemDelete}
                />
              )
            })
          }
        </ul>
      </Fragment>
    )
  }

  // 方法的this指向是Undefined，我们要让它的this指向变化
  handleInputChange(e) {
    this.setState({
      inputValue: e.target.value
    })
  }

  handleBtnClick() {
    this.setState({
      list: [...this.state.list, this.state.inputValue],
      inputValue: ''
    })
  }

  handleItemDelete(index) {
    // immutable原则：state不允许我们做任何的改变
    const list = [...this.state.list];
    list.splice(index, 1);
    this.setState({
      list: list
    })
  }
}

export default TodoList
