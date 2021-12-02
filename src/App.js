import React from 'react'
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom'
import './App.css';

import {SignUp, Home, VerifyEmail} from './components'


import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap'

function App() {
  return (
      <Router>
    <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/verifyemail" element={<VerifyEmail />}></Route>
        </Routes>
    </div>
      </Router>
  );
}

export default App;
