import React from 'react';
import logo from '../../assets/images/logo.webp';

class Header extends React.Component {   
    
    state = {
      navCollapsed: false
    }
    _onToggleNav = () => {
      this.setState({ navCollapsed: !this.state.navCollapsed })
    }
    render(){      
      const {navCollapsed} = this.state;
      return (
        <div className="header__main">
          <div className="header__wrapper">
            <div className="container">
              <nav className='navbar navbar-expand-md'>
                <a className='navbar-brand'  href='/'>
                  <img className="img-fluid" src={logo} alt="Sample"/>
                </a>
                <button className="navbar-toggler" type="button" onClick={this._onToggleNav} data-toggle="collapse" data-target="#collapsibleNavbar">
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className={(navCollapsed ? 'collapse' : '') + ' navbar-collapse justify-content-end'}>
                  <ul className='nav navbar-nav navbar-right navbar__main'>
                    <li className="nav-item"><a className="nav-link" href="/">Home</a></li>
                    <li className="nav-item"><a className="nav-link" href="/About">Features</a></li>
                    <li className="nav-item"><a className="nav-link" href="/About">Services</a></li>
                    <li className="nav-item"><a className="nav-link" href="/About">Pricing</a></li>
                    <li className="nav-item"><a className="nav-link" href="/Contact">Contact</a></li>
                  </ul>
                </div>
              </nav>
            </div>
          </div>
        </div>
      );
    }
}

export default Header;

