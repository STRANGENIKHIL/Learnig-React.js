import React, { useState } from 'react';
import Todo from './components/todo/index.tsx'
import './components/todo/style.css'
import Counter from './components/counter/index.tsx'

const myTodoItems =[
    {
        id:1,
        title:"I need to Finish My Homework"
    },
    {
        id:2,
        title:"I needd to Watch Piyush Garg"
    }
]
const App: React.FC = ()=> {

    const [state, setState] = useState<boolean>(true);
    return (
        <div >
            <Todo items={myTodoItems}/>
            <button onClick={(e) => setState(!state)}>Toggle</button>
            {state ? <Counter/> : ""}
        </div>
    )
}

export default App


