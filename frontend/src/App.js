import React from 'react';
import {BrowserRouter as Router , Routes, Route} from 'react-router-dom'
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Register from './pages/Register';
import Header from './components/Header';

import './App.css';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Router>
          <div>
            <Header/>
            <Routes>
              <Route path='/' element={<Dashboard/>} />
              <Route path='/login' element={<Login/>} />
              <Route path='/register' element={<Register/>} />
            </Routes>
            <Footer />
          </div>
      </Router>
    </>
  );
}

export default App;
