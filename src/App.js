import React from "react";
import './App.css';

import Navbar from './Component/Navbar';
import News from './Component/News';
import {
  BrowserRouter as Router,
Routes,
  Route,

} from "react-router-dom";


function App() {
  return (

    <div className="App">
    <Router>
    <Navbar/>
    <Routes>
         
    <Route exact path="/gernal" element={<News key="general"  country="in" category= "general"/>} />
    <Route exact path="/bussiness" element={<News key="bussiness"  country="in" category= "business"/>} />
    <Route exact path="/health" element={<News key="health"  country="in" category= "health"/>} />
    <Route exact path="/science" element={<News key="science"  country="in" category= "science"/>} />
    <Route exact path="/technology" element={<News key="technology"  country="in" category= "technology"/>} />
    <Route exact path="/sport" element={<News key="sport"  country="in" category= "sport"/>} />
    
         
          
        </Routes>
   
    </Router>
    </div>
  );
}

export default App;
