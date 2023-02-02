import React from 'react';
import Menu from './components/layout/components/menu/menu';
import './App.css';
import Navbar from './components/layout/components/navbar/navbar';
import Table from './components/shared/table-component/table-component'


/* rest of app styles */
function App() {
  return (
    <div className="app">
      <div className='app-menu'>
      <Menu/>
      </div>
      <div className='app-main'>
      <div className='app-main--navbar'>
      <Navbar/>
      </div>
      <div className='app-main--table'>
      <Table/>
      </div>
      </div>
    </div>
  );
}

export default App;

