import React, {Component, Fragment} from 'react';
import TodoItem from './TodoItem';
import './style.css';

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
      list: []
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleBtnClick = this.handleBtnClick.bind(this);
    this.handleItemDelete = this.handleItemDelete.bind(this);
  }

  render() {
    return (
      <Fragment>
        <div>
          <label htmlFor='insertArea'>输入内容</label>
          <input
            id='insertArea'
            className='input'
            value={this.state.inputValue}
            onChange={this.handleInputChange}
          />
          <button onClick={this.handleBtnClick}>提交</button>
        </div>
        <ul>
          {this.getTodoItem()}
        </ul>
      </Fragment>
    )
  }

  componentDidMount() {
    // 因为componentDidMount只会执行一次，页面加载时的ajax放在这里保证只发起一次请求即可
    console.log('ajax请求放在这里');
  }

  getTodoItem() {
    return this.state.list.map((item, index) => {
      return (
        <TodoItem
          content={item}
          key={index}
          index={index}
          ItemDelete={this.handleItemDelete}
        />
      )
    })
  }

  handleInputChange(e) {
    const value = e.target.value;
    this.setState(() => ({inputValue: value}))
  }

  handleBtnClick() {
    this.setState((prevState) => ({
      list: [...prevState.list, prevState.inputValue],
      inputValue: ''
    }));
  }

  handleItemDelete(index) {
    this.setState((prevState) => {
      const list = [...prevState.list];
      list.splice(index, 1);
      return {list}
    })
  }
}

export default TodoList
