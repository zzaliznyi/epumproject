import React from 'react';
import '../App.scss';
import $ from 'jquery';
import {getImgByTitle} from '../modules/images';
import database from '../database/database.json';
import queryString from 'query-string';
import emailjs from 'emailjs-com';

export default class Shop extends React.Component{
    constructor(props)
    {
        super(props);
        this.state = {category : null,sort:null}
        this.setCategory = this.setCategory.bind(this);
        this.setSort = this.setSort.bind(this);

    }
    setCategory(category){
        this.setState({category});
        this.refs.s_items.setCategory(category);
    }
    setSort(sort){
        this.setState({sort});
        this.refs.s_items.setSort(sort);
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
                    <S_control setCategory={this.setCategory} setSort = {this.setSort}/>
                    <Shop_items  ref="s_items"/>
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
        this.state ={ items:null , category : null , sort: null};
        this.load_items = this.load_items.bind(this);
        this.setCategory = this.setCategory.bind(this);
        this.setSort = this.setSort.bind(this);
    }
    setCategory(category){
        this.load_items(category , this.state.sort);
    }
    setSort(sort){
        this.load_items(this.state.category , sort);
    }
    load_items(category,sort){
        const sorted = sort_items(sort,database.Shop);
        console.log(sorted);
        console.log(category);
        const filtered = [];
        sorted.forEach(item => {
            if(item.category == category || category == "All") filtered.push(<S_item item={item}/>);
        });
        this.setState(state =>({
            items : filtered, category : category ,sort : sort
        }))
    }

    componentDidMount(){
        let aim = queryString.parse(window.location.search).category;
        if(this.props.category) aim = this.props.category;
        if(aim == "") aim = "All"
        const sort = "Cheap -> Expensive";
        this.load_items(aim,sort);
        console.log("Did Munt!")
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
        c_output.push(<div className="s_c_category sort">
            <select class="form-control" id="sort_selection" onChange = {(event)=>{this.s_clicked()}}>
                <option>Cheap -> Expensive</option>
                <option>Expensive -> Cheap</option>
                <option>A -> Z</option>
                <option>Z -> A</option>
            </select>
        </div>);
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
    }
    s_clicked(){
        const sort = $('#sort_selection').val();
        this.props.setSort(sort);
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
function sort_items(sort,array){
    if(sort == "A -> Z")
    {
        return array.sort(function(a, b) {
            const nameA = a.article.toUpperCase(); 
            const nameB = b.article.toUpperCase(); 
            if (nameA < nameB) {
              return -1;
            }
            if (nameA > nameB) {
              return 1;
            }
            return 0;
          });
    }
    if(sort == "Z -> A")
    {
        return array.sort(function(a, b) {
            const nameA = a.article.toUpperCase(); 
            const nameB = b.article.toUpperCase(); 
            if (nameA > nameB) {
              return -1;
            }
            if (nameA < nameB) {
              return 1;
            }
            return 0;
          });
    }
    if(sort == "Cheap -> Expensive")
    {
        return array.sort(function (a, b) {
            return a.price - b.price;
          });
    }
    if(sort == "Expensive -> Cheap")
    {
        return array.sort(function (a, b) {
            return b.price - a.price;
          });
    }
}