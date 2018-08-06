import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class HeaderApp extends Component {
  render() {
    return (
      <div className="HeaderApp">
        <nav>
          <Link to="/">Accueil</Link>
          <Link to="/page1">Page 1</Link>
          <Link to="/page2">Page 2</Link>
        </nav>
      </div>
    );
  }
}

export default HeaderApp;
