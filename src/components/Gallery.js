import React from 'react';

import '../App.scss';

import { getImgById, getPages } from "../modules/images";


import {getQueryVariable} from '../modules/additional'
function photoTemplate(src)
{
  return(
    <div className="g_photo">
        <img src={require(`${src}`)} alt="Gallery Photo"></img>
    </div>
  )
}
function parsePage(page,pages){
  if(!page || page <= 0 || page > pages)
  {
     return 1;
  }
  else return page;
}
class Pagination extends React.Component{
  constructor(props){
    super(props);
    this.state = {page : parsePage(parseInt(getQueryVariable('page'))) ,pages:getPages(10)};
    this.b_state = this.b_state.bind(this);
    this.b_num = this.b_num.bind(this);
    this.page_up = this.page_up.bind(this);
    this.page_down = this.page_down.bind(this);
    this.next_state = this.next_state.bind(this);
    this.prev_state = this.prev_state.bind(this);
    this.b_able = this.b_able.bind(this);
    this.getLink = this.getLink.bind(this);
    this.setPage = this.setPage.bind(this);
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
    console.log("Setting" + button);
    if(this.state.page == 1)
    {
        if(button == 2) this.setPage(this.state.page + 1);
        if(button == 3) this.setPage(this.state.page + 2);
        return 0;
    }
    else {
        if(this.state.page == this.state.pages)
        {
            if(this.state.pages == 1) return 0;
            else
            {
                if(this.state.pages == 2){
                    if(button == 1)
                    { 
                        this.setPage(this.state.page - 1);
                    }
                    return 0;
                }
                else
                {
                    if(button == 1) this.setPage(this.state.page - 2);
                    if(button == 2) this.setPage(this.state.page -1)
                    return 0;
                }
                
            }
            

        }
        else
        {
            if(button == 1) this.setPage(this.state.page - 1);
            if(button == 3) this.setPage(this.state.page +1);
            return 0;
        }
    }
    
  }
  setPage(page)
  {
    this.props.change_page(page);
      this.setState(state =>({
          page : page
      }));
      console.log("Current Page :" + page);
  }
  render(){
      const third_button = () =>{
          if(this.state.pages != 2) return <li class={"page-item "+ this.b_state(3) + this.b_able(3)}><a class="page-link" onClick={ () =>{console.log(this.getLink(3))}}>{this.b_num(3)}</a></li>;
          else return '';
      }
  return(
    <nav aria-label="Page navigation example">
        <ul class="pagination justify-content-center">
            <li class={"page-item "+ this.prev_state()}>
                <button class="page-link" onClick={this.page_down}>Previous</button>
            </li>
            <li className={"page-item "+ this.b_state(1) + this.b_able(1)} ><a class="page-link" onClick={()=>{console.log(this.getLink(1))}}>{this.b_num(1)}</a></li>
            <li class={"page-item "+ this.b_state(2) + this.b_able(2)}><a class="page-link" onClick={()=>{console.log(this.getLink(2))}}>{this.b_num(2)}</a></li>
            {third_button()}
            <li class={"page-item " + this.next_state()}>
                <button class="page-link" onClick={this.page_up}>Next</button>
            </li>
        </ul>
    </nav>
  )}
}
export default class Gallery extends React.Component{
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
    for(let i = 0 + 10*(page-1); i < page*10;i++)
    {
      const imgLink = getImgById(i+1);
      console.log(`Image: ${imgLink}`);
      if(imgLink) photos.push(photoTemplate(imgLink));
      else break;
    }
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