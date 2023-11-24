import {useState} from 'react';
import TestButton from './testButton';
function Increment(){
    const [count,setCount] = useState(0)
    const addCount =()=>{setCount(count+1) }
    const subcount=()=>{setCount(count-1)}
    return(
         <div className='col-4' >
            
            <h1 className='col-12 border text text-center'> {count} </h1>
            <button className='btn border col-6' onClick={addCount}> + </button>
            <button className='btn border col-6' onClick={subcount}> - </button>
         </div>
    );
}

export default Increment;