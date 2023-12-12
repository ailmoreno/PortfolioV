import React from 'react';
import Navbar from './component/Navbar';
import './App.css';
import Home from './routes/Home';
import {Routes, Route} from 'react-router-dom';
import Design from './routes/Design';
import Petco from './routes/Petco';
import Path from './routes/Path';
import Business from './routes/Business';

const App = () => {
  return(
    <>
    <Navbar/>
    <Routes> 
      <Route path = '/Home' element = {<Home/>}/>
      <Route path = '/Design' element = {<Design/>}/>
      <Route path = '/Petco' element = {<Petco/>}/>
      <Route path = '/Path' element = {<Path/>}/>
      <Route path = '/Business' element = {<Business/>}/>
    </Routes>
    </>

    /*<div className="App">
      <Router>
        <Navbar />
        <Home/>
        <PortfolioHome/>
      </Router>
    </div>*/
  );
}

export default App;