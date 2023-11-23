import {useState} from 'react';
import TestButton from './testButton';
function Increment(){
    const [count,setCount] = useState(0)
    const addCount =()=>{
        setCount(count+1) }
    
    
    return(
         <div >
            <TestButton name  = {count} />
            <button onClick={addCount}> Add </button>
         </div>
    );
}

export default Increment;