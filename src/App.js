import React from 'react';
import logo from './images/logo.png'
import $ from 'jquery'
import './App.scss';
import ImageLoader from './images';
import { render } from '@testing-library/react';
import { Router, Route, Switch } from "react-router";
import database from './database.json';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';


function getQueryVariable(variable) {
    const query = window.location.search.substring(1);
    const vars = query.split('&');
    for (var i = 0; i < vars.length; i++) {
        const pair = vars[i].split('=');
        if (decodeURIComponent(pair[0]) == variable) {
            return decodeURIComponent(pair[1]);
        }
    }
    return undefined;
}
export class Header extends React.Component{
  constructor(props)
  {
    super(props);
    this.state = {logo: ImageLoader('logo')}
    this.parseLocation = this.parseLocation.bind(this);
    this.navSetup = this.navSetup.bind(this);
  }
  parseLocation(){
    let location = window.location.pathname.split("/").pop();
    //console.log(window.location.search.split('?').pop())
    if(location.length == 0) location = "home";
    return location;
  }
  navSetup(){
   
  }
  componentDidMount(){
    const location = this.parseLocation()
    const items = document.getElementById('navigation').childNodes;
    items.forEach(item => {
      const text = item.childNodes[0].textContent.toLowerCase();
      //console.log(`Comparing "${text}" and "${this.state.location}"`);
      if(text == location) item.setAttribute('class','nav-item active');
      else item.setAttribute('class','nav-item');
    });
  }
  render(){
    return (
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
        <a class="navbar-brand" href="#">
          <img src={require(`${this.state.logo}`)} alt="" loading="lazy"></img>
        </a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
    <div class="collapse navbar-collapse " id="navbarResponsive">
      <ul class="navbar-nav ml-auto" id="navigation">
        <li class="nav-item " >
          <a class="nav-link" href="/">Home</a>
        </li>
        <li class="nav-item" >
          <a class="nav-link" href="/gallery">Gallery</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/biography">Biography</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/albums">Albums</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Order Us</a>
        </li>
      </ul>
    </div>
</nav>

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
function parsePage(page,pages){
  //console.log(`Not supposed to be ere! ${page}`)
  if(!page || page <= 0 || page > pages)
  {
     return 1;
  }
  else return page;
}
class Pagination extends React.Component{
  constructor(props){
    super(props);
    this.state = {page : parsePage(parseInt(getQueryVariable('page'))) ,pages: 10};
    this.b_state = this.b_state.bind(this);
    this.b_num = this.b_num.bind(this);
    this.page_up = this.page_up.bind(this);
    this.page_down = this.page_down.bind(this);
    this.next_state = this.next_state.bind(this);
    this.prev_state = this.prev_state.bind(this);
    this.b_able = this.b_able.bind(this);
    this.getLink = this.getLink.bind(this);
    //console.log(this.state.page);
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
    //console.log(`Page : ${this.state.page}`)
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
      this.props.change_page(nextPage);
      this.setState(state =>({
        page: nextPage
      }));
    }
  }
  page_down(){
    if(this.state.page != 1){
      let prevPage = this.state.page - 1;
      this.props.change_page(prevPage);
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
  getLink(button)
  {
    /*//console.log(this.state.page);
    if(button == 'next')
    {
      if(this.state.page < this.state.pages) return  `/gallery?page=${this.state.page + 1}`;
      else return '';
    }
    if(button == 'prev'){
      if(this.state.page > 1) return  `/gallery?page=${this.state.page - 1}`;
      else return '';
    }
    return '';*/
  }
  render(){
  return(
    <nav aria-label="Page navigation example">
  <ul class="pagination justify-content-center">
    <li class={"page-item "+ this.prev_state()}>
      <button class="page-link" href={this.getLink('prev')} onClick={this.page_down}>Previous</button>
    </li>
    <li className={"page-item "+ this.b_state(1) + this.b_able(1)} ><a class="page-link" href="#">{this.b_num(1)}</a></li>
    <li class={"page-item "+ this.b_state(2) + this.b_able(2)}><a class="page-link" href="#">{this.b_num(2)}</a></li>
    <li class={"page-item "+ this.b_state(3) + this.b_able(3)}><a class="page-link" href="#">{this.b_num(3)}</a></li>
    <li class={"page-item " + this.next_state()}>
      <button class="page-link" href={this.getLink('next')} onClick={this.page_up}>Next</button>
    </li>
  </ul>
</nav>
  )}
}
export class Gallery extends React.Component{
  constructor(props)
  {
    super(props);
    this.state = {c_page : parsePage(parseInt(getQueryVariable('page'))), photos: null};
    this.setPage = this.setPage.bind(this);
    console.log(`Current Page: ${this.state.c_page}`);
  }
  componentDidMount(page){
    const photos = [];
    console.log("Changing photos due to current page : " + page)
    fetch(`https://picsum.photos/v2/list?page=${page}&limit=10`).then(response => response.json()).then((response) => {
      response.forEach(data =>
        {
          console.log("requesting///")
          photos.push(photoTemplate(data.download_url))});
        }).then(x=> this.setState({ photos }))
  }
  setPage(page)
  {
    this.componentDidMount(page);
    this.setState(state =>({
      c_page : page
    }));
  }
  render()
  {
    
    return(
      <div className="gallery" >
        <div className="g_heading">
          <h1>Gallery</h1>
        </div>
        <hr></hr>
        <div className="photos">
          {this.state.photos}
        </div>
        <div className="g_pagination">
          <Pagination change_page={this.setPage}/>
        </div>
      </div>
    )
  }
}
export class Albums extends React.Component{
  constructor(props){
    super(props);
    this.state = {albums: null}

  }
  componentDidMount(){
    const albums = [];
    let id = 0;
    database.Albums.forEach(album => {
      albums.push(<A_Item img="" id={id} key ={id} album={album}/>);
      id++;
    });
    this.setState(state => ({albums : albums}));
  }

  render(){
    return(
      <div className="a_container">
          {this.state.albums}
      </div>
    )
  }
}
class A_Item extends React.Component{
  constructor(props){
    super(props);
    this.state = {songs : null};
    this.toggle = this.toggle.bind(this);
    this.stopSong = this.stopSong.bind(this);
  }
  toggle(event){
    const element = event.target;
    const _state = element.getAttribute("aria-expanded");
    if(_state == "true") element.innerHTML = "Hide";
    else element.innerHTML = "Show";
  }
  componentDidMount(){
    const songs = [];
    let song_id = 0;
    this.props.album.songs.map((song)=>{
        songs.push(a_item_song(song,this.props.id,song_id));
        song_id++;
    })
    this.setState({songs});
  }
  stopSong(event){
    const next = event.target;;
    
    const allAudios = document.querySelectorAll('audio');

	allAudios.forEach(function(audio){
		if(next != audio) audio.pause();
	});
  }
  render(){
    
    return(

      <div className="a_item" onPlay={this.stopSong}>
        <div className="a_info">
          <img src={this.props.album.image}></img>
          <div className="a_item_desc">
            <p  className="a_article">
              <bold>{this.props.album.name}</bold>
            </p>
            <p  className="a_article_description">
              {this.props.album.description}
            </p>
          </div>
        </div>
        <p>
          <button class="btn toggle_button" onClick={this.toggle} type="button" data-toggle="collapse" data-target={"#collapse" + this.props.id} aria-expanded="false" aria-controls="collapseExample">
            Show
          </button>
        </p>
        <div class="collapse" id={"collapse" + this.props.id}>
          <table class="table table-dark song-table">
          <tbody>
           {this.state.songs}
           
          </tbody>
        </table>
        </div>
      </div>
      
    )
  }
}

function a_item_song(song,id,s_id)
{
  return(
          <tr class="song_tr">
              <td className="a_name">{song.name}</td>
              <td className="player_slot">
                  <AudioPlayer id={`a_id:${id}_s${s_id}`} showJumpControls={false} layout="horizontal" preload="none" style={{
                    width: '100%',background: "black"
                  }} src={song.link} />
              </td>
            </tr>
  )
}

export class Footer extends React.Component{
  render(){
    return(
          <footer class="page-footer font-small blue">
          <hr className="f_hr"></hr>
          <div class="footer-copyright text-center py-3">© 2020 Copyright:
            <a href="https://mdbootstrap.com/"> MDBootstrap.com</a>
          </div>
          </footer>
    )
  }
}