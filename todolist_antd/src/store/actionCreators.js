import {ADD_TODO_ITEM, CHANGE_INPUT_VALUE, DELETE_TODO_ITEM} from "./actionTypes";

// 告诉store要改变数据，得给它说一句话，如下
export const getInputChangeAction = (value) => ({
  type: CHANGE_INPUT_VALUE,
  value
});

export const getAddItemAction = () => ({
  type: ADD_TODO_ITEM
});

export const getDeleteItemAction = (index) => ({
  type: DELETE_TODO_ITEM,
  index
});
