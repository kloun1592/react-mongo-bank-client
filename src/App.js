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
          {window.innerHeight > window.innerWidth ?
               <RotationAlert/> : <SiteLayout/>}
      </div>
    );
  }
}

class RotationAlert extends Component {
    render() {
        return (
            <div className="attention-banner">
                <img src={rotateImg} alt="Пожалуйста, переверните устройство в горизонтальный режим"/>
                <h1>Пожалуйста, переверните устройство в горизонтальный режим и перезагрузите страницу</h1>
            </div>
        );
    }
}

export default App;
