import React, {Component} from 'react';

class TodoItem extends Component {
  constructor(props) {
    super(props);
    // 在这里处理this指向
    this.handleClick = this.handleClick.bind(this);
  }

  render() {
    const {content} = this.props;
    return (
      <div onClick={this.handleClick}>
        {/*使用父组件传来的值*/}
        {content}
      </div>
    );
  }

  handleClick() {
    // 子组件修改父组件数据，不能直接修改，那就将父组件方法传给子组件调用来修改父组件数据
    const {ItemDelete, index} = this.props;
    ItemDelete(index);
  }
}

export default TodoItem;
