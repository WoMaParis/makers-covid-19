import React from 'react';
import Home from './layouts/Home.js';
import Menu from './layouts/Menu.js';
import Ask from './layouts/Ask.js';
import Fab from './layouts/Fab.js';
import Help from './layouts/Help.js';
import About from './layouts/About.js';
import Credits from './layouts/Credits.js';
import { GiWorld } from 'react-icons/gi';
import Models from './layouts/Models.js';
import './App.css';
import { BrowserRouter as Router, Link, Route} from "react-router-dom";


const App = (props) => {
  
  return (
    <Router>
    <div className={`${typeof (props.className) !== 'undefined' ? props.className : ''} Layout`}>
      <Menu className={'Layout__Menu'}/>
      <main className={'Layout__Content'}>
          <Route path="/" exact component={Home} />
          <Route path="/ask" exact component={Ask} />
          <Route path="/fab" exact component={Fab} />
          <Route path="/help" exact component={Help} />
          <Route path="/about" exact component={About} />
          <Route path="/credits" exact component={Credits} />
          <Route path="/models" exact component={Models} />
      </main>
        <Link className="Link__Ecosystem" to={'/models'}><GiWorld/></Link>
    </div>
    </Router>

  )
  }

export default App;
