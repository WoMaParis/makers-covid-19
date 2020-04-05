import React from 'react';
import Home from './Home.js';
import { BrowserRouter as Router, Route} from "react-router-dom";


const App = () => {

  return (
    <Router>
      <Route path="/" exact component={Home}/>
    </Router>

  )
}

export default App;
