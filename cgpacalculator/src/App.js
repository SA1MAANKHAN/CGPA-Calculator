import React from 'react';
import './App.scss';
import HomePage from './pages/home/home.page';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
<Router>
    <div className="app">
  <Routes>
    <Route to="/selectBranch" element={<HomePage/>}/>
    <Route to="/" element={<HomePage/>}/>
  </Routes>
      </div>  
</Router>  
 
  );
}

export default App;
