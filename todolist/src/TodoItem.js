import React, {Component} from 'react';
import PropTypes from 'prop-types';

class TodoItem extends Component {
  constructor(props) {
    super(props);
    // 在这里处理this指向
    this.handleClick = this.handleClick.bind(this);
  }

  // 当一个组件从父组件接收了参数，只要父组件的render函数被执行了，子组件的生命周期函数就会执行
  // 也就是说，如果这个组件第一次存在于父组件中，不会执行
  // 如果这个组件之前已经存在于父组件中，就会执行
  componentWillReceiveProps() {
    console.log('child componentWillReceiveProps');
  }

  // 当这个组件即将要被从页面中剔除的时候，就会自动执行
  componentWillUnmount() {
    console.log('child componentWillUnmount');
  }

  render() {
    console.log('子组件render执行');
    const {content, test} = this.props;
    return (
      <div onClick={this.handleClick}>
        {test} - {content}
      </div>
    );
  }

  handleClick() {
    // 子组件修改父组件数据，不能直接修改，那就将父组件方法传给子组件调用来修改父组件数据
    const {ItemDelete, index} = this.props;
    ItemDelete(index);
  }
}

// 对父组件传入值的类型的检测
TodoItem.propTypes = {
  // 要求test是必传值（这里test只做试验）
  test: PropTypes.string.isRequired,
  content: PropTypes.oneOfType([PropTypes.string, PropTypes.number]), // content是两个类型中的一个
  ItemDelete: PropTypes.func,
  index: PropTypes.number
};

// 若父组件未给子组件传值，这里设置默认值
// test未传，就传入默认值
TodoItem.defaultProps = {
  test: 'hello world'
};

export default TodoItem;
