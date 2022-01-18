import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Landing from './Component/Landing/Landing.jsx';
import Home from './Component/Home/Home.jsx';
import React from 'react'
//import Card from './Component/Card';
import Create from './Component/Create/Create.jsx';
import Details from './Component/Details/Details.jsx';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes> {/* matchea solo los link usados */}
          <Route path="/" element={<Landing/>}/>
          <Route path="/create" element={<Create/>}/>
          <Route path="/videogames/:id" element={<Details/>}/> 
          <Route path="/home" element={<Home/>}/>
        </Routes> 
        </div>
    </BrowserRouter>
  );
}

export default App;