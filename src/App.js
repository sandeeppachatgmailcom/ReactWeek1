import React from 'react';
import './App.css';
import Header from './components/header';

function App(address) {

  const objinput = [{
    name: 'Sandeep',
    Email: 'sandeepPachat@gmqail.com'
  }, {
    name: 'Satheesan',
    Email: 'SatheesanPachat@gmqail.com'
  }];

  return (
    
    <div className='App'>
      
      {objinput.map((item) => (
       
      <Header key={Date.now()}  data={item} />
      ))}
    </div>
  );
}

export default App;
