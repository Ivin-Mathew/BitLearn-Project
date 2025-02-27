import React from "react";
import { Route, BrowserRouter as Router,Routes } from "react-router-dom";


import Login from './pages/login';
import Signup from './pages/signup';


function App(){
  return(
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
  )
}

export default App;
