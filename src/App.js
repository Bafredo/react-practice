import './App.css';
import React from 'react';
import Header from './components/header';
import { Content } from './components/content';
import {BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Home from './components/home';

const button = document.getElementById('btn');

function App() {
  return (
    <Router>
      <Header />
        <Routes>
          <Route path="/" element={<Home />}/>
          
      </Routes>
    </Router>
  );
}

export default App;
