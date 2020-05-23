import React from 'react';
import logo from './images/logo.png'
import $ from 'jquery'
import './App.scss';
import ImageLoader from './images';
import { render } from '@testing-library/react';
import { Router, Route, Switch } from "react-router";
export class Header extends React.Component{
  constructor(props)
  {
    super(props);
    this.state = {logo: ImageLoader('logo')}
  }
  render(){
    return (
      <div class="container">
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark  fixed-top ">
  
  <a class="navbar-brand" href="#">
    <img src={require(`${this.state.logo}`)} alt="" loading="lazy"></img>
  </a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
    <div class="collapse navbar-collapse" id="navbarResponsive">
      <ul class="navbar-nav ml-auto">
        <li class="nav-item active">
          <a class="nav-link" href="/">Home
                <span class="sr-only">(current)</span>
              </a>
        </li>
        <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Dropdown
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="#">Action</a>
          <a class="dropdown-item" href="#">Another action</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="#">Something else here</a>
        </div>
      </li>
        <li class="nav-item">
          <a class="nav-link" href="/gallery">Gallery</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/biography">Biography</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">SetList</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Order Us</a>
        </li>
      </ul>
    </div>
</nav>
</div>
    )
  }
}
class Slider extends React.Component{
  constructor(props)
  {
    super(props);
  }
  render(){
    return(
      <div className="carousel slide h_carousel" data-ride="carousel" data-interval="10000" data-pause="false">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src={require(`${this.props.bg_1}`)} class="d-block w-100" alt="..."></img>
          </div>
        <div class="carousel-item">
          <img src={require(`${this.props.bg_2}`)} class="d-block w-100" alt="..."></img>
        </div>
        <div class="carousel-item">
          <img src={require(`${this.props.bg_3}`)} class="d-block w-100" alt="..."></img>
        </div>
      </div>
    </div>
    )
  }
}
function About()
{
  return (
    <div className="about_block"></div>
  )
}
export default class Home extends React.Component{
  render(){
    return(
      <div>
      <Header/>
      <Slider bg_1={ImageLoader('s_bg1')} bg_2={ImageLoader('s_bg2')} bg_3={ImageLoader('s_bg3')}/>
      {About()}
      </div>

    )
  }
}
export class Biography extends React.Component{
  render()
  {
    return (
      <main className="b_block">
          <div className="b_m_info">
            <Slider bg_1={ImageLoader('b_p1')} bg_2={ImageLoader('b_p2')} bg_3={ImageLoader('b_p3')}/>
            <div className="b_info">
              <h1>Three Days Grace</h1>
              <p> <strong>Genres :</strong>Post-grunge/hard rock/alternative metal/alternative rock/nu metal</p>
            </div>
          </div>
          <hr></hr>
          <div className="b_text">
          Three Days Grace is a Canadian rock band formed in Norwood, Ontario in 1997. Based in Toronto, the band's original line-up consisted of guitarist and lead vocalist Adam Gontier, drummer and backing vocalist Neil Sanderson, and bassist Brad Walst. In 2003, Barry Stock was recruited as the band's lead guitarist, making them a four-member band.<br></br> In 2013, Gontier left the band and was replaced by My Darkest Days' vocalist Matt Walst, who is also the younger brother of bassist Brad Walst.<br></br>

            Currently signed to RCA Records, they have released six studio albums, each at three-year intervals: Three Days Grace in 2003, One-X in 2006, Life Starts Now in 2009, Transit of Venus in 2012, Human in 2015, and Outsider in 2018. The first three albums have been RIAA certified 2x platinum, 3x platinum, and platinum, respectively, in the United States. In Canada, they have been certified by Music Canada as platinum, double platinum, and platinum, respectively.<br></br> The band has had 15 No. 1 songs on the Billboard Hot Mainstream Rock Tracks chart, and three No. 1 hits on Alternative Songs.
            <br></br>
            <br></br>
            Contents <br></br>
            1	History<br></br>
            1.1	Early years<br></br>
            1.2	One-X and Stock's arrival (2006–2008)<br></br>
            1.3	Life Starts Now (2009–2011)<br></br>
            1.4	Transit of Venus and Gontier's departure (2012–2013)<br></br>
            1.5	Human (2014–2017)<br></br>
            1.6	Outsider (2017–present)<br></br>
            2	Awards and records<br></br>
            3	Musical style<br></br>
            4	Members<br></br>
            5	Discography<br></br>
            6	References<br></br>
            7	External links<br></br>

          </div>
      </main>
    )
  }
}
function photoTemplate(src)
{
  return(
    <div className="g_photo">
        <img src={src} alt="Gallery Photo"></img>
    </div>
  )
}
class Pagination extends React.Component{
  constructor(props){
    super(props);
    this.state = {page : 1,pages: 3};
    this.b_state = this.b_state.bind(this);
    this.b_num = this.b_num.bind(this);
    this.page_up = this.page_up.bind(this);
    this.page_down = this.page_down.bind(this);
    this.next_state = this.next_state.bind(this);
    this.prev_state = this.prev_state.bind(this);
    this.b_able = this.b_able.bind(this);
  }
  b_state(el){
    if(this.state.pages <=2)
    {
      if(this.state.page == el) return "active";
      else return "";
    }
    else
    {
      if(this.state.page == 1 && el == 1) return "active";
      else{
        if(el == 3 && this.state.page == this.state.pages) return "active";
        else{
          if(el ==2 && (this.state.page != 1 && this.state.page != this.state.pages)) return "active";
          else return "";
        }
      } 
    }
  }
  b_num(el){
    if(this.state.pages == 2)
    {
      return el;
    }
    else{
      if(this.state.page != 1 && this.state.page != this.state.pages)
      {
        if(el == 1) return this.state.page-1;
          if(el == 2) return this.state.page;
          if(el == 3) return this.state.page + 1;
      }
      else
      {
        if(this.state.page == 1){
          if(el == 1) return this.state.page;
          if(el == 2) return this.state.page + 1;
          if(el == 3) return this.state.page + 2;

        }
        if(this.state.page == this.state.pages){
          if(el == 1) return this.state.page-2;
          if(el == 2) return this.state.page-1;
          if(el == 3) return this.state.page;
        }
      }
  }
    
  }
  b_able(el){
      if(this.state.pages > 2) return "";
      else{
        if(this.state.pages == 1){
          if(el == 1) return "";
          else return " disabled";
        }
        else{
          if(el == 3) return " disabled";
          else return "";
        }
      }
  }
  page_up()
  {
    if(this.state.page != this.state.pages){
      let nextPage = this.state.page + 1;
      this.setState(state =>({
        page: nextPage
      }));
    }
  }
  page_down(){
    if(this.state.page != 1){
      let prevPage = this.state.page - 1;
      this.setState(state =>({
        page: prevPage
      }));
    }
  }
  next_state(){
    if(this.state.page == this.state.pages) return "disabled";
    return "";
  }
  prev_state(){
    if(this.state.page == 1) return "disabled";
    return "";
  }
  render(){
  return(
    <nav aria-label="Page navigation example">
  <ul class="pagination justify-content-center">
    <li class={"page-item "+ this.prev_state()}>
      <a class="page-link" href="#" onClick={this.page_down}>Previous</a>
    </li>
    <li className={"page-item "+ this.b_state(1) + this.b_able(1)} ><a class="page-link" href="#">{this.b_num(1)}</a></li>
    <li class={"page-item "+ this.b_state(2) + this.b_able(2)}><a class="page-link" href="#">{this.b_num(2)}</a></li>
    <li class={"page-item "+ this.b_state(3) + this.b_able(3)}><a class="page-link" href="#">{this.b_num(3)}</a></li>
    <li class={"page-item " + this.next_state()}>
      <a class="page-link" href="#" onClick={this.page_up}>Next</a>
    </li>
  </ul>
</nav>
  )}
}
export class Gallery extends React.Component{
  constructor(props)
  {
    super(props);
    this.state = {c_page : 1, photos: []};
    this.loadPhotos = this.loadPhotos.bind(this);
    this.setPage = this.setPage.bind(this);
  }
  loadPhotos(page){
    const photos = [];
    for(let i = 0; i < 10;i++)
    {
      photos.push(photoTemplate("https://picsum.photos/300/200"));
    }
    
    return photos;
  }
  setPage(page)
  {
    console.log()
  }
  render()
  {
    const photos = this.loadPhotos(1);
    return(
      <div className="gallery" >
        <div className="g_heading">
          <h1>Gallery</h1>
        </div>
        <hr></hr>
        <div className="photos">
          {photos}
        </div>
        <div className="g_pagination">
          <Pagination/>
        </div>
      </div>
    )
  }
}
