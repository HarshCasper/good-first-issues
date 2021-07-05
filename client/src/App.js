import React from 'react'
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbarcomp from './Navbarcomp';
import Footercomp from './Footercomp';
import Home from './Home';
import About from './About';
import Opensource from './Opensource';
function App() {
  return (
     <Router>
    <div className="app">
  <Navbarcomp/>
  <Footercomp/>
 
    <Switch>
      <Route path="/home">
            <Home/>
      </Route>
       <Route path="/about">
            <About/>
      </Route>
       <Route path="/opensource">
            <Opensource/>
      </Route>
    </Switch>
 
    </div>
     </Router>
  )
}

export default App
