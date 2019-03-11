import React, {Component, Fragment} from 'react';

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
      list: []
    }
  }

  render() {
    return (
      <Fragment>
        <div>
          <input
            value={this.state.inputValue}
            onChange={this.handleInputChange.bind(this)}
          />
          <button onClick={this.handleBtnClick.bind(this)}>提交</button>
        </div>
        <ul>
          {
            this.state.list.map((item, index) => {
              return (<li
                key={index}
                onClick={this.handleItemDelete.bind(this, index)}
              >
                {item}
              </li>)
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
