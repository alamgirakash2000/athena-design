<<<<<<< HEAD
import React from 'react';
import './App.css';
import './App.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './components/Home/Home/Home';
=======
import React from "react";
import "./App.scss";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from "./components/Home/Home/Home";
import NotFound from "./components/NotFound/NotFound";
>>>>>>> sonjoy
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="*" component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
