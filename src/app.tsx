import React from 'react';
import Todo from './components/todo/index.tsx'
import './components/todo/style.css'
const App: React.FC = ()=> {
    return (
        <div>
            <Todo />
            <Todo />
            <Todo />
        </div>
    )
}

export default App


