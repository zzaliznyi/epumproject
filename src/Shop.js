import React from 'react';
import logo from './images/logo.png'
import $ from 'jquery'
import './App.scss';
import {getImgByTitle} from './images';
import{getImgById} from "./images";
import{getPages} from "./images";
import { render } from '@testing-library/react';
import { Router, Route, Switch } from "react-router";
import {Link} from 'react-router-dom';
import database from './database.json';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import getImgBytTitle from './images';
import queryString from 'query-string';
import emailjs from 'emailjs-com';

export default class Shop extends React.Component{
    constructor(props)
    {
        super(props);
        this.state = {category : null}
        this.setCategory = this.setCategory.bind(this);

    }
    setCategory(category){
        this.setState({category});
        console.log("Setting..." + category);
        this.refs.s_items.setFilter(category);
    }
   
    render(){
        return(
            <div>
                <Tour_Main/>
                <div className="shop_heading">
                <p>
                SHOP
                </p>
                </div>
                <div className="shop">
                    <S_control setCategory={this.setCategory}/>
                    <Shop_items category={this.state.category} ref="s_items"/>
                </div>
                <Mail_order/>
            </div>
        )
    }
}
class Shop_items extends React.Component{
    constructor(props)
    {
        super(props);
        this.state ={ items:null};
        this.reload = this.reload.bind(this);
        this.setFilter = this.setFilter.bind(this);
    }
    setFilter(category){
        const filter = category;
        const _items = [];
        database.Shop.forEach(item => {
            if(item.category == filter || filter == "All")_items.push(<S_item item={item}/>);
            console.log(`Items: ${item.article}`)
        });
        this.setState(state =>({
            items : _items
        }))
    }

    componentDidMount(){
        let aim = queryString.parse(window.location.search).category;
        if(this.props.category) aim =this.props.category;
        console.log("Updating " + this.props.category)
        const _items = [];
        console.log(`aim : ${aim}`);
        if(aim)
        {
            database.Shop.forEach(item => {
                if(item.category == aim)_items.push(<S_item item={item}/>);
                console.log(`Items: ${item.article}`)
            });
        }
        else 
        {
            database.Shop.forEach(item => {
                _items.push(<S_item item={item}/>);
            });
        }
        this.setState(state =>({
            items : _items
        }))
    }
    reload(){
        const _items = [];
        database.Shop.forEach(item => {
            if(item.category == this.props.category)_items.push(<S_item item={item}/>);
            console.log(`Items: ${item.article}`)
        });
        this.setState(state =>({
            items : _items
        }))
    }
    render(){
        return(
            <div className="s_item_container">
                {this.state.items}
            </div>
        )
    }
}
class S_item extends React.Component{
    constructor(props) {
        super(props);
    }
    render(){
        return(
            <div className="s_item">
                <div className="s_i_heading">
                    
                        {this.props.item.article}
                    
                </div>
                <div className="s_i_image">
                    <img src={this.props.item.image}></img>
                </div>
                <div className="s_i_buy">
                    <div className="s_i_price">
                            {this.props.item.price}$
                    </div>
                    <div className="s_i_btn">
                        <button type="button" class="btn btn-primary btn-lg btn-block" data-toggle="modal" data-target="#exampleModalCenter">Buy Now</button>
                    </div>
                   
                </div>

            </div>
        )
    }
    
}
class S_control extends React.Component{
    constructor(props)
    {
        super(props);
        this.state = {categories : null}
        this.c_clicked = this.c_clicked.bind(this);
    }
    componentDidMount(){
        const categories = getCategoryList(database.Shop);
        const c_output = [];
        c_output.push(<Category_block setCategory={this.c_clicked} category="All"/>)
        categories.forEach(category => {
            c_output.push(<Category_block setCategory={this.c_clicked} category={category}/>);
        });
        this.setState(state =>({
            categories : c_output
        }))
    }
    c_clicked(category){
        this.props.setCategory(category);
        console.log("C_Click")
    }

    render(){
        return(
            <div className="s_control">
                {this.state.categories}
            </div>
        )
    }
}
class Category_block extends React.Component{
    constructor(props)
    {
        super(props);
        this.c_clicked = this.c_clicked.bind(this);
    }
    c_clicked(){
        this.props.setCategory(this.props.category);
    }
    render(){
        return(
            <div className="s_c_category" onClick={this.c_clicked}>
                <p>{this.props.category}</p>
                <hr className="s_divider"></hr>
            </div>
        )
    }
}
function getCategoryList(array){
    const category = [];
    array.forEach(item => {
        if(!exists(category,item.category))
        { 
            console.log('Adding...');
            category.push(item.category);
        }
    });
    return category;
}
function exists(array,element)
{
    let state = false;
    array.forEach(category => {
        if(category == element)
        {
            console.log("Match!")
            state =  true;
            return;
            
        } 
    });
    return state;
}
class Tour_Main extends React.Component{
    constructor(props)
    {
      super(props);
      this.state = {a_cover : getImgByTitle('Outsider cover'),a_heading: getImgByTitle('Outsider heading')};
    }
    render(){
      return(
        <article className="check_tour">
            
            <div className="c_t_description text-center">
            <div className="c_t_heading">
                <img src={require(`${this.state.a_heading}`)}></img>
            </div>
            </div>
            <div className="c_t_i_container">
            <img src={require(`${this.state.a_cover}`)}></img>
            </div>
            
        </article>
      )
    }
  }
  class Mail_order extends React.Component{
      constructor(props)
      {
          super(props);
          this.sendOrder = this.sendOrder.bind(this);
      }
      sendOrder(event){
          const form = document.getElementById('order_form');
            emailjs.sendForm('fun_shop', 'template_ZZQFW1uH', form, 'user_FHEmWqW8qhLHRDVJo6gX8')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
      }
      render(){
          return(
            <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true" >
            <div class="modal-dialog modal-dialog-centered" role="document"  >
            <form id="order_form">
              <div class="modal-content" style={{backgroundColor:"black", color: "white"}}>
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLongTitle">Fill the data below to make an order</h5>
                  <button type="button" class="close" data-dismiss="modal" aria-label="Close" >
                    <span aria-hidden="true" style={{color:"white"}} >&times;</span>
                  </button>
                </div>
                
                <div class="modal-body">
                <div class="form-group">
                    <input type="text" placeholder="Your Name" id="order_input_name" name="name"></input>
                </div>
                <div class="form-group">
                    <input type="email" aria-describedby="emailHelp" placeholder="Enter email" id="order_input_email" name="email"></input>
                    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                </div>
                <div class="modal-footer">
                  <input type="submit" class="btn btn-secondary" data-dismiss="modal" style={{backgroundColor: "black"}} value="Send" onClick={this.sendOrder}></input>
                </div>
              </div>
              </form>
            </div>
          </div>
          )
      }
  }
