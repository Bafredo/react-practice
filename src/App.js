import './App.css';
import React from 'react';

function App() {
  return (
    <div className="App">
      <div className="navBar">
        <div className='logo'>Freddy</div>
        <div className='search'>
          <form>
            <input className='searchBox' type ='text' placeholder='Search'/>
            <input type='submit' value='search'/>
          </form>
          </div>
        <div className='cart'>Cart</div>
      </div>
    </div>
  );
}

export default App;
