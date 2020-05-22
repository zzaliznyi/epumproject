import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Biography} from './App';
import {Header} from './App';
import {Gallery} from './App';
import Home from "./App";
import * as serviceWorker from './serviceWorker';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


ReactDOM.render(
  <Router>
    <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/biography" >
          <Header/>
          <Biography/>
        </Route>
        <Route exact path="/gallery">
            <Header/>
            <Gallery/>
        </Route>
    </Switch>
</Router>,
  document.getElementById('root')
);

serviceWorker.unregister();
