import React, {Component, Fragment} from 'react';
import 'antd/dist/antd.css';
import {Input, Button, List} from "antd";
import store from './store/index';
import {getAddItemAction, getDeleteItemAction, getInputChangeAction} from "./store/actionCreators";

class TodoList extends Component {
  constructor(props) {
    super(props);
    // 从store拿到数据（借书）
    this.state = store.getState();
    TodoList.handleInputChange = TodoList.handleInputChange.bind(this);
    this.handleStoreChange = this.handleStoreChange.bind(this);
    this.handleBtnClick = this.handleBtnClick.bind(this);
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
              onChange={TodoList.handleInputChange}
            />
            <Button type="primary" onClick={this.handleBtnClick}>提交</Button>
          </div>
          <List
            style={{marginTop: '20px', width: '385px'}}
            bordered
            // 从store中拿到数据（借书），来渲染List
            dataSource={this.state.list}
            renderItem={(item, index) => (
              <List.Item onClick={TodoList.handleItemDelete.bind(this, index)}>{item}</List.Item>)}
          />
        </div>
      </Fragment>
    )
  }

  static handleInputChange(e) {
    const action = getInputChangeAction(e.target.value);
    // 把话给store
    store.dispatch(action);
  }

  handleStoreChange() {
    // 一旦感知到store数据变化，就更新数据
    this.setState(store.getState());
  }

  handleBtnClick() {
    if (this.state.inputValue.trim() === '') {
      alert('请输入内容');
      return
    }
    const action = getAddItemAction();
    store.dispatch(action);
  }

  static handleItemDelete(index) {
    const action = getDeleteItemAction(index);
    store.dispatch(action);
  }
}

export default TodoList
