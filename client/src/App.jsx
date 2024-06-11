import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import PermanentDrawerLeft from './components/Drawer';

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <div className='App'>
      <header className='App-header'>
        <PermanentDrawerLeft></PermanentDrawerLeft>
      </header>
    </div>
  );
};

export default App;
