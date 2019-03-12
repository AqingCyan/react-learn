import React, {Component} from 'react';
import PropTypes from 'prop-types';

class TodoItem extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  // 利用生命周期函数优化性能，如果新的Props变化了（nextProps.content === this.props.content 说明没有变化），就让render函数执行
  shouldComponentUpdate(nextProps, nextState, nextContext) {
    return nextProps.content !== this.props.content;
  }

  render() {
    // 通过打印，我们可以看到，即使父组件变化，也会使子组件的render函数执行，这会影响到性能上的损耗
    console.log('child render');
    const {content} = this.props;
    return (
      <div onClick={this.handleClick}>
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

TodoItem.propTypes = {
  content: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  ItemDelete: PropTypes.func,
  index: PropTypes.number
};

export default TodoItem;
