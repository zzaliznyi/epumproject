import React from 'react';
import ReactDOM from 'react-dom';
import Biography from './components/Biography';
import Header from './components/Header';
import Gallery from './components/Gallery';
import Albums from './components/Albums'
import Footer from './components/Footer'
import Shop from './components/Shop';
import Home from "./components/Home";
import Tours from './components/Tours';
import Contacts from "./components/Contacts";
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
        <Route exact path="/tours">
            <Tours/>
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
