import React from 'react';
import logo from './logo.svg';
import {NavLink} from "react-router-dom";


class Header extends React.Component {
    
    state = {
      navCollapsed: false
    }
    _onToggleNav = () => {
      this.setState({ navCollapsed: !this.state.navCollapsed })
    }
    render(){
      const {navCollapsed} = this.state
      return (
        <nav className='navbar navbar-expand-md bg-dark navbar-dark'>
          <a className='navbar-brand' href='/'>
            <img className="img-fluid" src={logo} alt="Sample"/>
          </a>
          <button className="navbar-toggler" type="button" onClick={this._onToggleNav} data-toggle="collapse" data-target="#collapsibleNavbar">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className={(navCollapsed ? 'collapse' : '') + ' navbar-collapse justify-content-end'}>
            <ul className='nav navbar-nav navbar-right'>
              <li><NavLink to="/">Home</NavLink></li>
              <li><NavLink to="/About">About</NavLink></li>
              <li><NavLink to="/Contact">Contact</NavLink></li>
            </ul>
          </div>
        </nav>    
      );
    }
}

export default Header;