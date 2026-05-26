import React, {useState , useEffect} from 'react';
import './style.css'
const Counter: React.FC =()=>{
    const [counter, setCounter] = useState(0);
    useEffect(()=>{
        console.log('counter mounted');

        return function(){
            console.log('Unmount counter');
        }
    },[])
    useEffect(()=>{
        console.log('counter updated');
    },[counter]) 

    return (
        <div className="counter-container">
            <h1>{counter}</h1>
                <button onClick={(()=> setCounter(counter+1))}>INC</button>
                <button style={{background: 'tomato'}} onClick={(()=> setCounter(counter-1))}>DRC</button>
        </div>
    )
}

export default Counter;
