import React, {useState,useEffect,useRef} from 'react';



function Quest4(){
    const [data,SetData]=useState('')
    const print = ()=>{
        console.log(data) 
        inputRef.current.focus();
    }
    const inputRef = useRef('')
    const updateCurrentValue =(event)=>{
        SetData(event.target.value)
    }

    useEffect(()=>{
        print();
    },[])

    return(
        <div>
            <label className='col-12'> Enter your Name</label>
            <input ref={inputRef}   className='text border col-12' type="text" name="" onChange={updateCurrentValue}  /> <br />
            <button className='btn btn-secondary col-12' onClick={print} type="button">submit</button>
        </div>
    )
}

export default Quest4;