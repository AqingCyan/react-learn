const defaultState = {
  inputValue: '学Webpack',
  list: ['吃饭', '学React']
};

// state指的是图书的借还记录本（数据的状态）中的数据
// action指store收到的话，它得查看借还记录本来操作数据，又把话传过来
export default (state = defaultState, action) => {
  if (action.type === 'change_input_value') {
    const newState = JSON.parse(JSON.stringify(state)); // reducer可以接收state，但绝不能修改state
    newState.inputValue = action.value;
    return newState;
  }
  console.log(state, action);
  return state
}
