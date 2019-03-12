import React, {Component} from 'react';
import PropTypes from 'prop-types';

class TodoItem extends Component {
  constructor(props) {
    super(props);
    // 在这里处理this指向
    this.handleClick = this.handleClick.bind(this);
  }

  render() {
    const {content, test} = this.props;
    return (
      <div onClick={this.handleClick}>
        {/*使用父组件传来的值*/}
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
  content: PropTypes.string,
  ItemDelete: PropTypes.func,
  index: PropTypes.number
};

// 若父组件未给子组件传值，这里设置默认值
// test未传，就传入默认值
TodoItem.defaultProps = {
  test: 'hello world'
};

export default TodoItem;
