import React from 'react';
import ToDoApp  from './components/Quest4';

import  Increment from './components/useEffect'
import './App.css';

function App(){
 
  return (
    <div className='container-flex col-12 d-flex p-1' >
      <div className='col-2' >
      <Increment start={5} />
      </div>
      <div className='col-8' >
      
      </div>
      <div className='col-2 rounded text-warning  text-right bg-dark'>
      <br />
        <ToDoApp />
  
      </div>
    </div>
  )
}
export default App;
