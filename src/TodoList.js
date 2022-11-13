import React from 'react'

const TodoList = ({ todolist,deleteHandler }) => {
  return (
      <div>
          {todolist.map((todo, index) =>
              <div key={index}>
              <h3> {todo} &nbsp;<button onClick={() => deleteHandler(index)}>DELETE</button></h3>
          
          </div>)}
    </div>
  )
}

export default TodoList