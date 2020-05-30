import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Biography} from './App';
import {Header} from './App';
import {Gallery} from './App';
import {Albums} from './App'
import {Footer} from './App'
import Shop from './Shop';
import Home from "./App";
import Contacts from "./Contacts";
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
        <Route path="/gallery">

            <Gallery/>
        </Route>
        <Route exact path="/albums">

          <Albums/>
        </Route>
        <Route exact path="/contacts">
            <Contacts/>
        </Route>
        <Route exact path="/shop">
            <Shop/>
        </Route>
    </Switch>
    <Footer/>
</Router>,
  document.getElementById('root')
);

serviceWorker.unregister();
