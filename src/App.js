import React from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from './Component/Navigation/Nav'
import FillWalletDetail from './Component/FillWalletDetail/FillWalletDetail';

function App() {
  return (
    <div>
      <Nav />
      <div className="container"></div>
      <div className="container">
        <div className="row">
            <FillWalletDetail />
        </div>
      </div>
    </div>
    
  );
}

export default App;
