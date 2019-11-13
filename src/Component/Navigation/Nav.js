import React from 'react'
import './Nav.css'

function Nav() {
    return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <a className="navbar-brand" href="#"><img src={ window.location.origin + "/img/app-icon.png" } className="App-logo" alt="logo" /> Add Wallet Pass</a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
  
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item active">
          <a className="nav-link" href="#">Notifications <span className="sr-only">(current)</span></a>
        </li>
      </ul>
      <form className="form-inline my-2 my-lg-0">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item dropdown">
            <a className="nav-link" href="#">Logout</a>
        </li>
      </ul>
      </form>
    </div>
  </nav>
    );
  }
  
export default Nav;
  