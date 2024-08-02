import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Signin from './min/Pages/Account/Signin'; 
import List from './min/Pages/Portfolio/List';
import Home from './min/Pages/Portfolio/Home';
import About from './min/Pages/Account/About'; 
import Modal from './min/Pages/Account/Modal'; 
import './App.css'; 



function App() {
  return (
    <Router>
      <div>
        <nav className="navbar">
          <Link to="/List" className="nav-link">List</Link>
          <Link to="/signin" className="nav-link">Sign In</Link>
          <Link to="/home" className="nav-link">Home</Link>
          <Link to="/modal" className="nav-link">Modal</Link>
          <Link to="/about" className="nav-link">About</Link>
        </nav>

        <div> 
          <Routes>
            <Route path="/list" element={<List />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/home" element={<Home />} />
            <Route path="/modal" element={<Modal />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </div>
    </Router>
    
  );
}
export default App;