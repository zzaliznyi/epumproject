import React from 'react';
import logo from './images/logo.png'
import $ from 'jquery'
import './App.scss';
import { getImgByTitle } from './images';
import { getImgById } from "./images";
import { getPages } from "./images";
import { render } from '@testing-library/react';
import { Router, Route, Switch } from "react-router";
import { Link } from 'react-router-dom';
import database from './database.json';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import getImgBytTitle from './images';
import queryString from 'query-string';
import emailjs from 'emailjs-com';
export default class Tours extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <main>
                <div className="t_header">
                    <p>
                        TOUR TIMETABLE
                    </p>
                </div>
                <div className="t_a_name">
                    <p>
                        OUTSIDER TOUR 2017
                    </p>
                </div>
                <div className="t_container">
                    <div className="t_date">
                        OCT 29 THU
                    </div>
                    <div className="t_place">
                        Klub 1930 @ 6:00pm
                    </div>
                    <div className="t_position">
                        Moskva, Russia
                    </div>
                    <div className="t_button">
                        <Link to="/shop?category=Tours"><button type="button" class="btn btn-primary  btn-block">BUY TICKETS</button></Link>
                    </div>
                </div>
                <hr className="f_hr"></hr>
                <div className="t_container">
                    <div className="t_date">
                        OCT 29 THU
                    </div>
                    <div className="t_place">
                        Klub 1930 @ 6:00pm
                    </div>
                    <div className="t_position">
                        Moskva, Russia
                    </div>
                    <div className="t_button">
                        <Link to="/shop?category=Tours"><button type="button" class="btn btn-primary  btn-block">BUY TICKETS</button></Link>
                    </div>
                </div>
                <hr className="f_hr"></hr>
                <div className="t_container">
                    <div className="t_date">
                        OCT 29 THU
                    </div>
                    <div className="t_place">
                        Klub 1930 @ 6:00pm
                    </div>
                    <div className="t_position">
                        Moskva, Russia
                    </div>
                    <div className="t_button">
                        <Link to="/shop?category=Tours"><button type="button" class="btn btn-primary  btn-block">BUY TICKETS</button></Link>
                    </div>
                </div>
                <hr className="f_hr"></hr>
                <div className="t_container">
                    <div className="t_date">
                        OCT 29 THU
                    </div>
                    <div className="t_place">
                        Klub 1930 @ 6:00pm
                    </div>
                    <div className="t_position">
                        Moskva, Russia
                    </div>
                    <div className="t_button">
                        <Link to="/shop?category=Tours"><button type="button" class="btn btn-primary  btn-block">BUY TICKETS</button></Link>
                    </div>
                </div>
                <hr className="f_hr"></hr>
                <div className="t_container">
                    <div className="t_date">
                        OCT 29 THU
                    </div>
                    <div className="t_place">
                        Klub 1930 @ 6:00pm
                    </div>
                    <div className="t_position">
                        Moskva, Russia
                    </div>
                    <div className="t_button">
                        <Link to="/shop?category=Tours"><button type="button" class="btn btn-primary  btn-block">BUY TICKETS</button></Link>
                    </div>
                </div>
                <hr className="f_hr"></hr>
                <div className="t_container">
                    <div className="t_date">
                        OCT 29 THU
                    </div>
                    <div className="t_place">
                        Klub 1930 @ 6:00pm
                    </div>
                    <div className="t_position">
                        Moskva, Russia
                    </div>
                    <div className="t_button">
                        <Link to="/shop?category=Tours"><button type="button" class="btn btn-primary  btn-block">BUY TICKETS</button></Link>
                    </div>
                </div>
                <hr className="f_hr"></hr>
                <div className="t_container">
                    <div className="t_date">
                        OCT 29 THU
                    </div>
                    <div className="t_place">
                        Klub 1930 @ 6:00pm
                    </div>
                    <div className="t_position">
                        Moskva, Russia
                    </div>
                    <div className="t_button">
                        <Link to="/shop?category=Tours"><button type="button" class="btn btn-primary  btn-block">BUY TICKETS</button></Link>
                    </div>
                </div>
                <hr className="f_hr"></hr>
            </main>
        )
    }
}