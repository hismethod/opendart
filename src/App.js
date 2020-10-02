import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.scss';

import Header from './components/Header';
import Footer from './components/Footer';


function App() {
  return (
    <Router>
      <div className="container">
        <Header/>
        <Switch>
          <Route path="/about">
            <About/>
          </Route>
          <Route path="/">
            <Home/>
          </Route>
        </Switch>
        <Footer/>
      </div>
    </Router>
  );
}


export default App;
