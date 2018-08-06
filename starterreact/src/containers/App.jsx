import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom'

import HeaderApp from '../components/main/HeaderApp'
import FooterApp from '../components/main/FooterApp'
import Home from './Home';
import Page1 from './Page1';
import Page2 from './Page2';

class App extends Component {
  render() {
    return (
      <div className="App">
          <HeaderApp />
          <div className="content">
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/page1" component={Page1}/>
            <Route path="/page2" component={Page2}/>
          </Switch>
          </div>
          <FooterApp />
      </div>
    );
  }
}

export default App;
