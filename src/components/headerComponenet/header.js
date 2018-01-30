import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  link
} from 'react-router-dom';


class Header extends Component {
  render() {
    return (
    <header>

    <div className='LOGO'>
      LOGO
    </div>

    <nav>
      <ul>
      <li>
      <Link to='/'></Link>
      </li>
      <li>
      <Link to='/'></Link>
      </li>
      <li>
      <Link to='/Contact'></Link>
      </li>
      </ul>

    </nav>


    </header>
    );
  }
}

export default Header;
