import React from 'react';
import '../App.scss';
import {getImgByTitle} from '../modules/images';
import {Link} from 'react-router-dom';
import 'react-h5-audio-player/lib/styles.css';
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
                <img src={require(`${this.props.bg_1}`)} class="d-block w-100" alt="Slider Image"></img>
                </div>
                <div class="carousel-item">
                    <img src={require(`${this.props.bg_2}`)} class="d-block w-100" alt="Slider Image"></img>
                </div>
                <div class="carousel-item">
                    <img src={require(`${this.props.bg_3}`)} class="d-block w-100" alt="Slider Image"></img>
                </div>
            </div>
        </div>
      )
    }
  }
class W_new extends React.Component{
    constructor(props)
    {
      super(props);
      this.state = {data : null};
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
class W_photo extends React.Component{
    constructor(props)
    {
      super(props);
    }
    render()
    {
      return(
        <img src={require(`${this.props.link}`)} alt="Feed image"></img>
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
                    <img src={require(`${this.state.a_heading}`)} alt="New tour poster"></img>
                </div>
                <h1>Check the tour table!</h1>
                <Link to="/tours"><button type="button" class="btn c_t_button btn-lg ">CHECK OUT</button></Link>
            </div>
            <div className="c_t_i_container">
                <img src={require(`${this.state.a_cover}`)} alt="Outsider album cover"></img>
            </div>
        </article>
      )
    }
  }