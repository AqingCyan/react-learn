import React, {Component} from 'react';
import PropTypes from 'prop-types';

class TodoItem extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  render() {
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
