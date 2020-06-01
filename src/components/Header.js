import React from 'react';
import $ from 'jquery'
import '../App.scss';
import {getImgByTitle} from '../modules/images';
import {Link} from 'react-router-dom';
import database from '../database/database.json';
export default class Header extends React.Component{
  constructor(props)
  {
    super(props);
    this.state = {logo: getImgByTitle('logo'),categories : null}
    this.parseLocation = this.parseLocation.bind(this);
    this.setPosition = this.setPosition.bind(this);

  }
  parseLocation(){
    let location = window.location.pathname.split("/").pop();
    if(location.length == 0) location = "home";
    return location;
  }
  componentDidMount(){
    this.setPosition();
    window.scrollTo(0, 0);

    const categories = [];
    const c_template = [];
    c_template.push(dropdown_item("All"));
    database.Shop.forEach(item=>{
        if(!categories.includes(item.category))
        {
            categories.push(item.category);
            c_template.push(dropdown_item(item.category));
        } 
    });
    $(document).click( () => {
        $('.dropdown-menu').attr('class','dropdown-menu');
    });

    this.setState(state=>({
        categories : c_template
    }))
  }
  setPosition(){
    const location = this.parseLocation();
    const items = document.getElementById('navigation').childNodes;
    items.forEach(item => {
      const text = item.childNodes[0].textContent.toLowerCase();
      if(item.id == "n_drop")
      {
        if("shop" == location) item.childNodes[0].setAttribute('class','nav-link regular active');
        else item.childNodes[0].setAttribute('class','nav-link regular');
      }
      if(text == location) item.setAttribute('class','nav-item regular active');
      else item.setAttribute('class','nav-item regular');
      window.scrollTo(0, 0);
    });
    const collapsed = $('.collapse.show').removeClass('show');
  }
  render(){
    return (
    <nav class="navbar navbar-expand-lg navbar-dark  sticky-top">
        <a class="navbar-brand" href="#">
            <img src={require(`${this.state.logo}`)} alt="logo" loading="lazy"></img>
        </a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse " id="navbarResponsive">
            <Search_bar/>
            <ul class="navbar-nav ml-auto" id="navigation" onClick={this.setPosition}>
                <li class="nav-item " >
                <Link to="/" className="nav-link regular">Home</Link>
                </li>
                <li class="nav-item " >
                <Link to="/gallery" className="nav-link regular">Gallery</Link>
                </li>
                <li class="nav-item ">
                <Link to="/albums" className="nav-link regular">Albums</Link>
                </li>
                <li class="nav-item ">
                <Link to="/biography" className="nav-link regular">Biography</Link>
                </li>
                <li class="nav-item ">
                <Link to="/contacts" className="nav-link regular">Contacts</Link>
                </li>
                <li class="nav-item ">
                <Link to="/tours" className="nav-link regular">Tours</Link>
                </li>
                <li class="nav-item " id="n_drop">
                    <div className="nav-link regular"> 
                        <a class="dropdown-toggle" data-toggle="dropdown">Shop
                        <span class="caret"></span></a>
                        <ul class="dropdown-menu">
                            {this.state.categories}
                        </ul>
                    </div>
                </li>
                
            </ul>
        </div>
    </nav>
    )
  }
}
function dropdown_item(name)
{
    let link = name;
    if(name == 'All') link ='';
    return <Link to={`/shop?category=${link}`}><li onClick={()=>{
        $('.dropdown-menu').attr('class','dropdown-menu');
    }}>{name}</li></Link>
                           
}
class Search_bar extends React.Component{
  constructor(props)
  {
    super(props);
    this.drop_bar = this.drop_bar.bind(this);
    this.hide_bar = this.hide_bar.bind(this);
    this.find = this.find.bind(this);
    this.state = {items : null,i_count : 0};
    
  }
  componentDidMount(){
    $(document).click( () => this.hide_bar());
    $('.search_bar_container').click(function(event) {
      const bar = $('.dropdown_content');
      if(event.target.value == "") bar.hide();
      else
      {
        bar.slideDown(200);
        bar.show();
      }
        event.stopPropagation();
    });
  }
  drop_bar(event){
    const bar = $('.dropdown_content');
    if(event.target.value == "") bar.hide();
    else
    {
      bar.slideDown(200);
      bar.show();
    }
  }
  hide_bar(){
    const bar = $('.dropdown_content');
    bar.hide();
  }
  find(event){
    let s_text = event.target.value;
    let _items = [];
    if(s_text != "")
    {
      database.Albums.forEach(album => {
        if(album.name.toLowerCase().includes(s_text.toLowerCase())){
          _items.push(searched_item(album.image,album.name));
        }
      });
    }
    this.setState(state => ({
      items : _items, i_count : _items.length
    }));
  }
  render(){
    return(
        <div className="search_bar_container">
            <form class="form-inline my-2 my-lg-0 d_search" onSubmit={(event)=>{event.preventDefault()}}>
                <input class="form-control mr-sm-2v d_search_bar" type="search" placeholder="Search" aria-label="Search" onInput={(event)=>{this.drop_bar(event); this.find(event)}} onClick={this.drop_bar}></input>
            </form>
            <div className="dropdown_content">
                <div className="d_res_count">
                    <p>
                        Searched items : {this.state.i_count}
                    </p>
                </div>
                <hr className="f_hr"></hr>
                <div className="d_s_items">
                    {this.state.items }
                </div>
            </div>
        </div>
    )
  }
}
function searched_item(link,name)
{
  const _name = name.split(' ').join('_');
  return(
    <Link to={`/albums?aim=${_name}`}>
        <div className="d_i_container">
            <div className="d_searched_item">
                <div><img src={link} alt="Album image"></img></div>
                <p>{name}</p>
            </div>
            <hr className="f_hr"></hr>
        </div>
    </Link> 
  )
}