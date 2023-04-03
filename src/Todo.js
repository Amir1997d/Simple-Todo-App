import React from 'react'

export default function Todo({todo, dispatch}) {

  
  return (
    <div className='todo-div'>
        <span className="todo-el" style={{color: todo.completed ? "gray" : "black", textDecoration: todo.completed ? "line-through" : "none"}}>{todo.text}</span>
        <div>
          <button onClick={() => dispatch({ type:"toggle-todo", payload: { id: todo.id } })}>toggle</button>
          <button onClick={() => dispatch({ type:"delete-todo", payload: { id: todo.id } })}>delete</button>
        </div>
    </div> 
  )
}
