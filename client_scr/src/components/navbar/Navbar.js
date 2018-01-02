import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Navbar extends Component{
  render(){
    return(
      <div>
        <nav className="blue darken-3">
          <ul className="left">
            <li><Link to="/">Meetups</Link></li>
            <li><Link to="/meetups/add"> Add Meetup</Link></li>
            <li><Link to="/about">About</Link></li>
          </ul>
        </nav>
      </div>
    )
  }
}

export default Navbar;
