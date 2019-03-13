import {createStore} from 'redux';
import reducer from './reducer';

// 把图书借还记录本的数据传给图书管理员，管理员就知道数据状态了
const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;
