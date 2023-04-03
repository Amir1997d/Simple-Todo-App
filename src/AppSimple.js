import React, { useReducer, useState } from 'react'
import Todo from "./Todo";


function reducer(myTodos, action) {
    switch(action.type) {
        case "add_todo":
            return [...myTodos, {id: Math.random()*100, text: action.payload.text, completed: false}];
        case "toggle-todo": 
           return myTodos.map((todo) => {
                if(todo.id === action.payload.id) {
                    return {...todo, completed: !todo.completed};
                }
                return todo;
           });
        case "delete-todo": 
            return myTodos.filter(todo => todo.id !== action.payload.id);
        default:
            return myTodos;
    }
}

export default function AppSimple() {

    const [text, setText] = useState("");
    const [myTodos, dispatch] = useReducer(reducer, []);

    function addTodo(e) {
        e.preventDefault();
        if(text !== "") {
            dispatch({type: "add_todo", payload: { text: text }});
            setText('');
        }
    }
    
    const todos = myTodos.map(todo => <Todo key={todo.id} todo={todo} dispatch={dispatch}/>);


    return (
        <div className="my-app">
            <form onSubmit={addTodo}>
                <input type="text" value={text} onChange={(e)=> setText(e.target.value)}/>
                <button onClick={addTodo}>ADD</button>
            </form>
            <div className='todos-div'>
                {todos}
            </div>
        </div>
    );
}
