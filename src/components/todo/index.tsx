import React from 'react';
import TodoItem from './Todo-Item';
import "./Todo-Item/style.css"

interface ITodoItemProps{
    id:number,
    title:string,
}

interface TodoProps{
    items:ITodoItemProps[];
}
const Todo: React.FC<TodoProps> = (props)=>{
    return (
    <div className='Todo-container'>
        <ol>
            {
                props.items.map(item => <TodoItem title={item.title}/>)
            }
        </ol>
    </div>
    );
}

export default Todo;
