import React, {Component, Fragment} from 'react';
import TodoItem from './TodoItem';
import './style.css';

class TodoList extends Component {
  constructor(props) {
    super(props);
    // 当组件的state或者props发生改变的时候，render函数就会重新执行
    this.state = {
      inputValue: '',
      list: []
    };
    // 把this的指向在这里做修改，因为方法的this指向是Undefined，我们要让它指向render函数里的this才能修改数据
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleBtnClick = this.handleBtnClick.bind(this);
    // 这里改变this的指向，是为了让子组件从ItemDelete找到父组件this中的handleItemDelete方法
    this.handleItemDelete = this.handleItemDelete.bind(this);
  }

  // 在组件即将被挂在到页面之前执行
  componentWillMount() {
    console.log('componentWillMount');
  }

  // 组件被更新之前，会被自动执行，返回false会阻止组件更新
  shouldComponentUpdate() {
    console.log('shouldComponentUpdate');
    return true
  }

  // 组件被更新之前，它会自动执行，但是它会在shouldComponentUpdate之前执行，
  // 如果shouldComponentUpdate返回true它才执行，返回false就不会执行这个函数
  componentWillUpdate() {
    console.log('componentWillUpdate');
  }

  // 组件更新完成后，它会自动执行
  componentDidUpdate() {
    console.log('componentDidUpdate');
  }

  // 组件收到props才会自动执行，因此，这个组件不会执行这个方法
  componentWillReceiveProps() {
    console.log('componentWillReceiveProps');
  }

  render() {
    console.log('父组件render执行');
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
            // 让this.input指input向框这个DOM节点，但不建议使用，尽量使用数据驱动
            ref={(input) => {
              this.input = input
            }}
          />
          <button onClick={this.handleBtnClick}>提交</button>
        </div>
        <ul ref={(ul) => {
          this.ul = ul
        }}>
          {this.getTodoItem()}
        </ul>
      </Fragment>
    )
  }

  // 组件被页面挂载之后执行
  componentDidMount() {
    console.log('componentDidMount');
  }

  //把item的处理提出来，return出去，在render函数中执行
  getTodoItem() {
    return this.state.list.map((item, index) => {
      return (
        // 使用TodoItem子组件的时候，把item，index传给它
        <TodoItem
          content={item}
          key={item}
          index={index}
          ItemDelete={this.handleItemDelete}
        />
      )
    })
  }

  // 方法的this指向是Undefined，我们要让它的this指向变化
  handleInputChange() {
    const value = this.input.value;
    this.setState(() => ({inputValue: value}))
  }

  handleBtnClick() {
    // prevState 等价于 this.state
    this.setState((prevState) => ({
      list: [...prevState.list, prevState.inputValue],
      inputValue: ''
    }), () => {
      // 若是把这句代码放在起一个回调函数内执行，会发现length总是少1，原因是setState是异步的。
      // 而setState的第二个参数也是一个回调函数，它会等setState异步执行完后执行，也就是等页面更新完了才会执行。
      console.log(this.ul.querySelectorAll('div').length);
    });
  }

  handleItemDelete(index) {
    // immutable原则：state不允许我们直接做任何的改变，因此我们得转化一下
    this.setState((prevState) => {
      const list = [...prevState.list];
      list.splice(index, 1);
      return {list}
    })
  }
}

export default TodoList
