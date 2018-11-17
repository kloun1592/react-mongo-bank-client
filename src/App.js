import React, { Component } from 'react';

import './App.css';
import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';
import rotateImg from './img/rotate-smartphone.png';
import SiteLayout from './SiteLayout';

class App extends Component {
  render() {
    return (
      <div className="App">
          <meta name="viewport" content="width=device-width, initial-scale=1"/>
          <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"/>
          <SiteLayout/>
      </div>
    );
  }
}

export default App;
