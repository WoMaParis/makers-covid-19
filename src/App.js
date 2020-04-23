import React from 'react';
import Home from './layouts/Home.js';
import Menu from './layouts/Menu.js';
import Ask from './layouts/Ask.js';
import Fab from './layouts/Fab.js';
import Help from './layouts/Help.js';
import About from './layouts/About.js';
import Ecosystem from './layouts/Ecosystem.js';
import Credits from './layouts/Credits.js';
import { GiWorld } from 'react-icons/gi';
import Models from './layouts/Models.js';
import './App.css';
import { BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";


const App = (props) => {
  
  return (
    <Router>
    <div className={`${typeof (props.className) !== 'undefined' ? props.className : ''} Layout`}>
      <Menu className={'Layout__Menu'}/>
      <main className={'Layout__Content'}>
        <Switch>
          <Route exact path="/"><Home /></Route>
            <Route path="/ask"> <Ask/></Route>
            <Route path="/fab"> <Fab/></Route>
            <Route path="/help"> <Help /></Route>
            <Route path="/about"> <About /></Route>
            <Route path="/credits"> <Credits /></Route>
            <Route path="/ecosystem"> <Ecosystem /></Route>
            <Route path="/models"> <Models /></Route>
        </Switch>
      </main>
        <Link className="Link__Ecosystem" to={'/ecosystem'}><GiWorld/></Link>
    </div>
    </Router>

  )
  }

export default App;
