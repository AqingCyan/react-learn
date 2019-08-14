import React from "react"
function TodoItem(props) {
  return <li onClick={handle}>{props.content}</li>
}

export default TodoItem
