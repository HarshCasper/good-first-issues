import React from 'react'
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
// 💡 FIX: Import Protect directly from "@clerk/clerk-react"
import { Protect } from "@clerk/clerk-react"; 
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbarcomp from './Navbarcomp';
import Footercomp from './Footercomp';
import Home from './Home';
import About from './About';
import Opensource from './Opensource';

// Define a simple Sign In component for redirects
const SignInPage = () => (
  <div style={{ padding: '50px', textAlign: 'center' }}>
    <h2>Please Sign In to view this page.</h2>
    {/* In a real app, you'd use a Clerk <SignIn /> component here */}
  </div>
);


function App() {
  return (
      <Router>
    <div className="app">
  <Navbarcomp/>
  
    <Switch>
      <Route path="/home">
            <Home/>
      </Route>
       <Route path="/about">
            <About/>
      </Route>
      
      {/* Protect the /opensource route */}
      <Route path="/opensource">
        <Protect
          fallback={<SignInPage />}
        >
            <Opensource/>
        </Protect>
      </Route>
      
    </Switch>
    
  <Footercomp/>
    </div>
      </Router>
  )
}

export default App