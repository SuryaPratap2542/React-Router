import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';

import Header from './components/Header/Header';
import Home from './components/Home/Home.jsx';
import About from './components/About/About.jsx';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import User from './components/User/User';
import Github from './components/Github/Github';
import Leetcode from './components/Leetcode/Leetcode';


function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/user/:userid" element={<User />} />
        <Route path="/github" element={<Github />} />
        <Route path="/leetcode" element={<Leetcode />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
