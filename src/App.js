import './App.css';
import {useState} from 'react';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
/* import About from './components/About'; */
import React from "react";
/* import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom"; */

function App() {
  const [Mode, setMode]=useState("light");
  document.body.style.backgroundColor=Mode==='dark'?'#043640':'white';
  document.body.style.color=Mode==='dark'?'white':'black';
  return (
    <>
      { /* <Router> */
        <Navbar title="TextUtils" About="About Us" mode={Mode} fun={setMode}/> }
        {/* <div className='container'>
            <Routes>
              <Route path='/about' element={<About mode={Mode}/>}/> */}
              {/* <Route path='/' element={ */}<Textform heading={'Enter Your Text Here'} mode={Mode}/>{/* }/> */}
            {/* </Routes>
        </div> */}
      {/* </Router> */}
    </>
  );
}

export default App;
