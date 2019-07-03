import React from 'react';
import Login from './components/login'
import Signup from './components/signup'
import './App.css';
//import { compileFunction } from 'vm';

function App() {
  return (
    <div className="App">
       {<Login></Login>}
       {<Signup></Signup>}
    </div>
  );
}

export default App;
