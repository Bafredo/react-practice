import './App.css';
import React from 'react';
import Header from './components/header';
import { Content } from './components/content';

const button = document.getElementById('btn');

function App() {
  return (
    <div className="App">
      <Header />
      <div className='content'>
        <Content />
      </div>
      
    </div>
  );
}

export default App;
