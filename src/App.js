
import './App.css';
import WaitlistApp from './WaitlistApp.js'
import FAQ from './FAQ.js';
import React from 'react';
import Navbar from './Navbar'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


function MainPage () {

  return (
    <Router>
      <Navbar />
      <Switch>
          <Route path="/waitlist">
            <WaitlistApp />
          </Route>
          <Route path="/faq">
            <FAQ />
          </Route>
          <Route path="/">
            <WaitlistApp />
          </Route>
      </Switch>
    </Router>
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <MainPage /> 
      </header>
    </div>
  );
}


export default App;
