import React from 'react';
import {BrowserRouter as Router , Routes, Route} from 'react-router-dom'
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Register from './pages/Register';
import Header from './components/Header';
import Courses from './pages/Courses';
import About from './pages/About';
import Contact from './pages/Contact';

import './App.css';
import Footer from './components/Footer';
import CourseDetail from './pages/CourseDetail';

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
              <Route path='/courses' element={<Courses />}/>
              <Route exact path='/courses/:id' element={<CourseDetail />}/>
              <Route path='/About' element={<About />}/>
              <Route path='/contact' element={<Contact />}/>
            </Routes>
            <Footer />
          </div>
      </Router>
    </>
  );
}

export default App;
