import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import NavItem from "./navitem";

class NavBar extends Component {
  
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <nav className="App-navbar">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/countries">Countries</Link></li>          
          <li><Link to="/ballparks">Ballparks</Link></li>
          <li><Link to="/teams">Teams</Link></li>
          <li><Link to="/players">Players</Link></li>
          <li><Link to="/games">Games</Link></li>
        </ul>
      </nav>
    );
  }
}

export default NavBar;