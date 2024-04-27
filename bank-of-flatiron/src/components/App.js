// import logo from './logo.svg';
import  '../App.css';
import React from 'react';
import Search from './Search';
import AddTransaction from './AddTransaction';
import Table from './Table';
function App() {
  return (
    <>
    <div className='nav'>
    <nav>The  Royal Bank Of Flatiron</nav>
    </div>
    <Search />
    <AddTransaction/>
    <Table/>
    </>
  );
}

export default App;
