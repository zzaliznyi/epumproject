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
    this.state = {logo: getImgByTitle('logo')}
    this.parseLocation = this.parseLocation.bind(this);
    this.navSetup = this.navSetup.bind(this);
    this.setPosition = this.setPosition.bind(this);
  }
  parseLocation(){
    let location = window.location.pathname.split("/").pop();
    if(location.length == 0) location = "home";
    return location;
  }
  navSetup(){
    
  }
  componentDidMount(){
    this.setPosition();
    window.scrollTo(0, 0);
  }
  setPosition(){
    const location = this.parseLocation()
    const items = document.getElementById('navigation').childNodes;
    items.forEach(item => {
      const text = item.childNodes[0].textContent.toLowerCase();
      if(text == location) item.setAttribute('class','nav-item active');
      else item.setAttribute('class','nav-item');
      window.scrollTo(0, 0);
    });
  }
  render(){
    return (
      <nav class="navbar navbar-expand-lg navbar-dark  sticky-top">
        <a class="navbar-brand" href="#">
          <img src={require(`${this.state.logo}`)} alt="" loading="lazy"></img>
        </a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
    <div class="collapse navbar-collapse " id="navbarResponsive">
    <Search_bar/>
    
      <ul class="navbar-nav ml-auto" id="navigation" onClick={this.setPosition}>
        <li class="nav-item " >
          <Link to="/" className="nav-link">Home</Link>
        </li>
        <li class="nav-item" >
          <Link to="/gallery" className="nav-link">Gallery</Link>
        </li>
        <li class="nav-item">
        <Link to="/albums" className="nav-link">Albums</Link>
        </li>
        <li class="nav-item">
        <Link to="/biography" className="nav-link">Biography</Link>
        </li>
        <li class="nav-item">
        <Link to="/contacts" className="nav-link">Contacts</Link>
        </li>
        <li class="nav-item">
        <Link to="/tours" className="nav-link">Tours</Link>
        </li>
        <li class="nav-item">
        <Link to="/shop" className="nav-link">Shop</Link>
        </li>
      </ul>
      
    </div>
</nav>

    )
  }
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
      if(event.target.value == "")
      { 
        
        bar.hide();
      }
      else
      {
        bar.slideDown(200);
        bar.show();
      } 
        event.stopPropagation();
    });
  }
  drop_bar(event){
    console.log("Here "+event.target.value)
    const bar = $('.dropdown_content');
    if(event.target.value == "") 
    {
      
      bar.hide();
    }
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
    let el_count = 0;
    if(s_text != "")
    {
      console.log(`Searching ${s_text}`)
      database.Albums.forEach(album => {
        if(album.name.toLowerCase().includes(s_text.toLowerCase())){
          console.log("Match!");
          _items.push(searched_item(album.image,album.name));
        }
      });
    }
    console.log(`Searched! ${_items}`)
    this.setState(state => ({
      items : _items, i_count : _items.length
    }))
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
  <Link to={`/albums?aim=${_name}`}><div className="d_i_container">
    <div className="d_searched_item">
        <div><img src={link}></img></div>
        <p>{name}</p>
    </div>
    <hr className="f_hr"></hr>
    </div>
    </Link> 
  )
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
export default class Home extends React.Component{
  render(){
    return(
      <div>

      <Slider bg_1={getImgByTitle('s_bg1')} bg_2={getImgByTitle('w1')} bg_3={getImgByTitle('w2')}/>
      <div className="y_video_container">
      <iframe className="y_video" src="https://www.youtube.com/embed/9R2OGKTOd0k" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
      <W_new/>
      <Tour_Main/>
      </div>

    )
  }
}
class W_photo extends React.Component{
  constructor(props)
  {
    super(props);
  }
  render()
  {
    return(
      <img src={require(`${this.props.link}`)}></img>
    )
  }
}
class W_new extends React.Component{
  constructor(props)
  {
    super(props);
    this.state = {data : null ,f_h : 0};

  }
  componentDidMount(){
    const images = [];
    for(let i = 0; i < 8;i++)
    {
     images.push(<W_photo link={getImgByTitle(`w${i+1}`)}/>);
    }
    this.setState(state => ({
      data: images
    }));
   
  }


 
  render(){
    return(
      <div className="w_new_container">
        <h2 className="w_new_heading">WHAT`S NEW?</h2>
        <div className="w_new_content">
          <div className="w_new_photos">
              {this.state.data}
          </div>
          <div className="w_new_articles">
              <article className= "w_article">
                <img className="w_article_logo" src="https://i.pinimg.com/originals/7f/d3/38/7fd33802d65f0299fbd13045c71c76fc.png"></img>
                <div className="w_article_text">
                  <p className="wam_text">
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis ullam quasi ad officia similique asperiores laborum? Fuga, voluptatem sequi ipsa tenetur, quisquam vitae ipsum adipisci enim, totam unde sint repellendus?
                  </p>
                  <p className="wam_date">
                    March,21,2015 4:52PM
                  </p>
                </div>
              </article>
              <hr className="f_hr"></hr>
              <article className= "w_article">
                <img className="w_article_logo" src="https://i.pinimg.com/originals/7f/d3/38/7fd33802d65f0299fbd13045c71c76fc.png"></img>
                <div className="w_article_text">
                  <p className="wam_text">
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis ullam quasi ad officia similique asperiores laborum? Fuga, voluptatem sequi ipsa tenetur, quisquam vitae ipsum adipisci enim, totam unde sint repellendus?
                  </p>
                  <p className="wam_date">
                    March,21,2015 4:52PM
                  </p>
                </div>
              </article>
              <hr className="f_hr"></hr>
              <article className= "w_article">
                <img className="w_article_logo" src="https://i.pinimg.com/originals/7f/d3/38/7fd33802d65f0299fbd13045c71c76fc.png"></img>
                <div className="w_article_text">
                  <p className="wam_text">
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis ullam quasi ad officia similique asperiores laborum? Fuga, voluptatem sequi ipsa tenetur, quisquam vitae ipsum adipisci enim, totam unde sint repellendus?
                  </p>
                  <p className="wam_date">
                    March,21,2015 4:52PM
                  </p>
                </div>
              </article>
              <hr className="f_hr"></hr>
              <article className= "w_article">
                <img className="w_article_logo" src="https://i.pinimg.com/originals/7f/d3/38/7fd33802d65f0299fbd13045c71c76fc.png"></img>
                <div className="w_article_text">
                  <p className="wam_text">
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis ullam quasi ad officia similique asperiores laborum? Fuga, voluptatem sequi ipsa tenetur, quisquam vitae ipsum adipisci enim, totam unde sint repellendus?
                  </p>
                  <p className="wam_date">
                    March,21,2015 4:52PM
                  </p>
                </div>
              </article>
              <hr className="f_hr"></hr>
              <article className= "w_article">
                <img className="w_article_logo" src="https://i.pinimg.com/originals/7f/d3/38/7fd33802d65f0299fbd13045c71c76fc.png"></img>
                <div className="w_article_text">
                  <p className="wam_text">
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis ullam quasi ad officia similique asperiores laborum? Fuga, voluptatem sequi ipsa tenetur, quisquam vitae ipsum adipisci enim, totam unde sint repellendus?
                  </p>
                  <p className="wam_date">
                    March,21,2015 4:52PM
                  </p>
                </div>
              </article>
              <hr className="f_hr"></hr>
              
          </div>
        </div>
      </div>
    )
  }
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
            <h1>Check the tour table!</h1>
            <button type="button" class="btn c_t_button btn-lg ">CHECK OUT</button>
          </div>
          <div className="c_t_i_container">
          <img src={require(`${this.state.a_cover}`)}></img>
          </div>
          
      </article>
    )
  }
}
class Tour_Bio extends React.Component{
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
export class Biography extends React.Component{
  render()
  {
    return (
      <div>
                <Tour_Bio/>
                <div className="shop_heading">
                <p>
                BIOGRAPHY
                </p>
                </div>
      <main className="b_block">

          <hr className="f_hr"></hr>
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
      </div>
    )
  }
}
function photoTemplate(src)
{
  return(
    <div className="g_photo">
        <img src={require(`${src}`)} alt="Gallery Photo"></img>
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
    this.state = {page : parsePage(parseInt(getQueryVariable('page'))) ,pages: getPages(10)};
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
    {() =>{
      if(this.state.pages!=2) return     <li class={"page-item "+ this.b_state(3) + this.b_able(3)}><a class="page-link" href="#">{this.b_num(3)}</a></li>;
    }}
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
    if(!page) page = 1;
    console.log("Changing photos due to current page : " + page)
    for(let i = 0 + 10*(page-1); i < page*10;i++)
    {
      const imgLink = getImgById(i+1);
      console.log(`Image: ${imgLink}`);
      if(imgLink) photos.push(photoTemplate(imgLink));
      else break;
    }
    console.log(`Setting photos due to array: ${photos}`)
    this.setState({photos});
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
      <div>
        <div className="g_heading">
          <p>GALLERY</p>
        </div>
      <div className="gallery" >
        <div className="photos">
          {this.state.photos}
        </div>
        <div className="g_pagination">
          <Pagination change_page={this.setPage}/>
        </div>
      </div>
      </div>
    )
  }
}
export class Albums extends React.Component{
  constructor(props){
    super(props);
    this.state = {albums: null}
    setTimeout(() => {
      const aim = queryString.parse(window.location.search).aim;
      const t_item = $(`#${aim}_album`);
      if(t_item[0]) 
      {
        const pos = t_item.position().top;
        const decrement = (window.screen.width*75)/411;
        console.log(window.screen.width);
        window.scrollTo({
          top: pos-decrement,
          behavior: "smooth"
      });
      }
      
    }, 1000);

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
      <div className="albums_data">
      <div className="a_header">
        <p>DISCOGRAPHY</p>
      </div>
      <div className="a_container">
          <div className="a_heading"></div>
          {this.state.albums}
      </div>
      
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
        songs.push(<A_song song = {song} id={this.props.id} s_id = {song_id}/>);
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
        <div className="a_info"  >
          <img src={this.props.album.image} id={this.props.album.name.split(' ').join('_') + "_album"}></img>
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
        
        <hr className="c_hr"></hr>
      </div>
      
    )
  }
}

class A_song extends React.Component
{
  constructor(props)
  {
    super(props);
    this.state = {player : null}
  }
  componentDidMount()
  {
    const player = <AudioPlayer id={`a_id:${this.props.id}_s${this.props.s_id}`} showJumpControls={false} layout="horizontal" preload="none" style={{
      width: '100%',background: "black"
    }} src={this.props.song.link} />;
    this.setState({player});
  }
  render(){
  return(
          <tr class="song_tr">
              <td className="a_name">{this.props.song.name}</td>
              <td className="player_slot">
                  {this.state.player}
              </td>
            </tr>
  )
                }
}

export class Footer extends React.Component{
  render(){
    return(
          <footer class="page-footer font-small black">
          <hr className="f_hr"></hr>
          <div class="footer-copyright text-center py-3">© 2020 Copyright:
            <a href="https://mdbootstrap.com/"> MDBootstrap.com</a>
          </div>
          </footer>
    )
  }
}