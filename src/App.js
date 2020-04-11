import React, { Fragment } from 'react';
import Home from './components/Home.js';
import Hero from './components/Hero.js';
import Menu from './components/Menu.js';
import Ask from './components/Ask.js';
import Fab from './components/Fab.js';
import Help from './components/Help.js';
import About from './components/About.js';
import './App.css';
import { BrowserRouter as Router, Route} from "react-router-dom";


const App = (props) => {

  return (
    <Router>
    <div className={`${typeof (props.className) !== 'undefined' ? props.className : ''} Layout`}>
      <Hero className={'Layout__Hero'}/>
      <Menu className={'Layout__Menu'}/>
        <div className={'Layout__Content'}>
          <Route path="/" exact component={Home} />
          <Route path="/ask" exact component={Ask} />
          <Route path="/fab" exact component={Fab} />
          <Route path="/help" exact component={Help} />
          <Route path="/about" exact component={About} />
      </div>
    </div>
    </Router>

  )
}

export default App;
