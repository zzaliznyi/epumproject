import React from 'react';
import $ from 'jquery'
import '../App.scss';
import database from '../database/database.json';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import queryString from 'query-string';


export default class Albums extends React.Component{
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
            <img src={this.props.album.image} id={this.props.album.name.split(' ').join('_') + "_album"} alt="Album Cover"></img>
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
      const player = <AudioPlayer id={`a_id:${this.props.id}_s${this.props.s_id}`} showJumpControls={false} layout="stacked" preload="none" style={{
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