import React from 'react';
import TodoItem from './Todo-Item';
import "./Todo-Item/style.css"
const Todo: React.FC = ()=>{
    return (
    <div className='Todo-container'>
        <ol>
            <TodoItem/>
            <TodoItem/>
            <TodoItem/>
            <TodoItem/>
        </ol>
    </div>
    );
}

export default Todo;