import React from 'react';

import '../App.scss';

import { Link } from 'react-router-dom';
import {forcePosition} from '../modules/additional';

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
                        <Link to="/shop?category=Tours"><button type="button" class="btn btn-primary  btn-block" onClick={ () =>{forcePosition('shop')}}>BUY TICKETS</button></Link>
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
                        <Link to="/shop?category=Tours"><button type="button" class="btn btn-primary  btn-block" onClick={ () =>{forcePosition('shop')}}>BUY TICKETS</button></Link>
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
                        <Link to="/shop?category=Tours"><button type="button" class="btn btn-primary  btn-block" onClick={ () =>{forcePosition('shop')}}>BUY TICKETS</button></Link>
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
                        <Link to="/shop?category=Tours"><button type="button" class="btn btn-primary  btn-block" onClick={ () =>{forcePosition('shop')}}>BUY TICKETS</button></Link>
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
                        <Link to="/shop?category=Tours"><button type="button" class="btn btn-primary  btn-block" onClick={ () =>{forcePosition('shop')}}>BUY TICKETS</button></Link>
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
                        <Link to="/shop?category=Tours"><button type="button" class="btn btn-primary  btn-block" onClick={ () =>{forcePosition('shop')}}>BUY TICKETS</button></Link>
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
                        <Link to="/shop?category=Tours"><button type="button" class="btn btn-primary  btn-block" onClick={ () =>{forcePosition('shop')}}>BUY TICKETS</button></Link>
                    </div>
                </div>
                <hr className="f_hr"></hr>
            </main>
        )
    }
}