import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Biography} from './App';
import {Header} from './App';
import {Gallery} from './App';
import {Albums} from './App'
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
    <Header/>
    <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/biography" >

          <Biography/>
        </Route>
        <Route exact path="/gallery">

            <Gallery/>
        </Route>
        <Route exact path="/albums">

          <Albums/>
        </Route>
    </Switch>
</Router>,
  document.getElementById('root')
);

serviceWorker.unregister();
