import React,{useEffect, useState} from 'react';

function ToDoApp(){
    const initialTasks = ['sandeep', 'sanoop', 'chandhini', 'satheesan', 'pushpalatha'];

    let [value,setValue]= useState('')
    const [tasks, setTasks] = useState(initialTasks);

    const TakeInput = (event)=>{
        setValue(event.target.value)
        console.log(value)
    };

    const addTask = ()=>{
        setTasks([...tasks,value])
        setValue('')
    }
    const reloadList =()=>{
        return tasks.map((item,index)=>(
                <li key={'li'+index}> {item}  <button key={index} className='btn border' > del</button></li>
            )) 
        
    }

    useEffect(()=>{
        reloadList();
    },[tasks])

    return(
        <div>
            <div className='container-fluid'>
                <input onChange={TakeInput} className='text rounded border' type="text" name="" id="" />
                <button onClick={addTask} className='btn border' type="button">Add</button>
            </div>
            <div>
                <ul>
                    {reloadList}     
                </ul>
            </div>

        </div>
    )
}
 


export default ToDoApp;