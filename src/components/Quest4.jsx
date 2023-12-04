import React,{useEffect, useState,useRef} from 'react';
import './Quest4.css';

function ToDoApp(){
    const initialTasks = ['Reading Notebook', 'Playing Cricket', 'riding Horse', 'Going School', 'Selling Goods'];
    const checkBox = useRef();
    let [value,setValue]= useState('')
    const [tasks, setTasks] = useState(initialTasks);
    
    
    
    
    
    const editTask = (taskId)=>{
        const tasklist = [...tasks]
        const tast = tasklist.splice(taskId,1,tasklist[taskId]);
        console.log(tast)
        setValue(tast)
        setTasks(tasklist);
    }


    const deleteTask = (position)=>{
        const tasklist = [...tasks]
        tasklist.splice(position,1)
        setTasks(tasklist);
        
    }
    const makeitStrike=(index)=>{
         
        const label  = document.getElementById('lbl'+index);
        if (label.style.textDecoration != 'line-through') {
            label.style.textDecoration = 'line-through';
          } else {
            label.style.textDecoration = 'none';
          }
        console.log(label);
       
    }

    const takeInput = (event)=>{
        setValue(event.target.value)
        console.log(value)
    };
     
    const addTask = ()=>{
        if (value.trim() !== '') {
            setTasks([...tasks, value]);

            setValue('');
        }
    }
  

    const reloadList = () => {
        return tasks.map((item, index) => (
            <div className='container-flex col-12 w-100 d-flex' key={'li' + index}>
                <input   onChange={()=>{ console.log(index);  makeitStrike(index);}} ref={checkBox}  type="checkbox"  className='text-warning col-1' id={index} />
                <label id={'lbl'+index}  className='text col-8 ' htmlFor={index}>  {item} </label>
                <button key={index} onClick={()=>{deleteTask(index)}}  value={index} className='col-1 btn text-warning bi bi-trash'>   </button>
                <button key={index} onClick={()=>{editTask(index)}}  value={index} className='col-1 btn text-warning bi bi-pencil-fill'>   </button>
            </div>
        ));
    };

    useEffect(()=>{
        reloadList();
    },[tasks])

    return(
        <div className='container col-12'   >
            <div className='container-fluid col-12 d-flex   '>
                <input onChange={takeInput} value={value}  className='text rounded border  w-100' type="text" name="" id="" />
                <button onClick={addTask} className='btn border bi bi-file-earmark-plus-fill text-warning' type="button"> </button>
            </div>
            <div className='col-12 d-flex'>
                <ul className='col-12  w-100'>
                    {reloadList()}     
                </ul>
            </div>

        </div>
    )
}
 


export default ToDoApp;