import React, {Component, Fragment} from 'react';
import 'antd/dist/antd.css';
import {Input, Button, List} from "antd";
import store from './store/index';

class TodoList extends Component {
  constructor(props) {
    super(props);
    // 从store拿到数据（借书）
    this.state = store.getState();
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleStoreChange = this.handleStoreChange.bind(this);
    // 感知到store的变化
    store.subscribe(this.handleStoreChange);
  }

  render() {
    return (
      <Fragment>
        <div style={{marginTop: '30px', marginLeft: '20px'}}>
          <div>
            <Input
              value={this.state.inputValue}
              placeholder="todo info"
              style={{width: '300px', marginRight: '20px'}}
              onChange={this.handleInputChange}
            />
            <Button type="primary">提交</Button>
          </div>
          <List
            style={{marginTop: '20px', width: '385px'}}
            bordered
            // 从store中拿到数据（借书），来渲染List
            dataSource={this.state.list}
            renderItem={item => (<List.Item>{item}</List.Item>)}
          />
        </div>
      </Fragment>
    )
  }

  handleInputChange(e) {
    // 告诉store要改变数据，得给它说一句话，如下
    const action = {
      type: 'change_input_value',
      value: e.target.value
    };
    // 把话给store
    store.dispatch(action);
  }

  handleStoreChange() {
    // 一旦感知到store数据变化，就更新数据
    this.setState(store.getState());
  }
}

export default TodoList
