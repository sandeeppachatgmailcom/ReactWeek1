import {useState,useEffect} from 'react';

function Increment(props){
    const [count,setCount] = useState(props.start)
    const [data,setData]=useState(null)
    const fetchData = async ()=>{
        await fetch(`https://jsonplaceholder.typicode.com/users/${count}`)
        .then(res=> res.json())
        .then((json)=>{ 
            console.log(json); 
            setData(json);
        })
    }  
    useEffect(()=>{
        fetchData();
    },[count])
    
    return(
         <div className='col-6 flex-wrap' >
            
            <h1 className='col-12 border text text-center'> {count} </h1>
            <div className='bg-info'>
                <small id={Date.now()} > {data?data.name:''} </small> <br></br>
                <small id={Date.now()} > {data?data.email:''} </small>
            </div>

            <button className='btn border col-6' onClick={()=>{setCount(count+1)}} > + </button>
            <button className='btn border col-6' onClick={()=>{setCount(count-1)}} > - </button>
         </div>
    );
}

export default Increment;