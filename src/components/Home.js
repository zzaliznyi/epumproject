import React from 'react';
import '../App.scss';
import {getImgByTitle} from '../modules/images';
import {Link} from 'react-router-dom';
import {forcePosition} from '../modules/additional';
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
                            <img className="w_article_logo" src="https://threedaysgrace.com/wp-content/uploads/2020/04/Screen-Shot-2020-04-13-at-1.56.27-PM.png" alt="news image"></img>
                            <div className="w_article_text">
                                <p className="wam_text">
                                We hope everyone is being safe and staying healthy during these weird times! “Strange Days” is about sticking together, supporting each other, and keeping your head up and carrying on during scary and uncertain times. With that said, we wanted to share a cool & eerie “Strange Days” video made […] 
                                </p>
                                <p className="wam_date">
                                16 APR 2020
                                </p>
                            </div>
                        </article>
                        <hr className="f_hr"></hr>
                        <article className= "w_article">
                            <img className="w_article_logo" src="https://threedaysgrace.com/wp-content/uploads/2020/03/Three-Days-Grace-232.jpg" alt="news image"></img>
                            <div className="w_article_text">
                                <p className="wam_text">
                                Three Days Grace are performing at Casino Rama Resort in Orillia, ON on July 24. Tickets go on sale Saturday, March 14 at noon local time HERE.   
                                </p>
                                <p className="wam_date">
                                9 MAR 2020
                                </p>
                            </div>
                        </article>
                        <hr className="f_hr"></hr>
                        <article className= "w_article">
                            <img className="w_article_logo" src="https://threedaysgrace.com/wp-content/uploads/2019/12/67160484_10158685813196679_1613058792889516032_o.jpg" alt="news image"></img>
                            <div className="w_article_text">
                                <p className="wam_text">
                                Three Days Grace wish Jason from Five Finger Death Punch a speedy recovery! Sorry to our fans who were looking forward to seeing us in Duluth, Omaha and Des Moines. Full statement from Five Finger Death Punch below: Last night, Jason Hook was taken to the emergency room where it […]
                                </p>
                                <p className="wam_date">
                                13 DEC 2019
                                </p>
                            </div>
                        </article>
                        <hr className="f_hr"></hr>
                        <article className= "w_article">
                            <img className="w_article_logo" src="https://threedaysgrace.com/wp-content/uploads/2019/12/3dg_holidaysale-screenshot.png" alt="news image"></img>
                            <div className="w_article_text">
                                <p className="wam_text">
                                Happy Holidays from 3DG! 🎁❄️ Get up to 50% off on all merch, which includes gear from the road, now through midnight PT on Saturday, December 7! Shop now HERE.
                                </p>
                                <p className="wam_date">
                                2 DEC 2019
                                </p>
                            </div>
                        </article>
                        <hr className="f_hr"></hr>
                        <article className= "w_article">
                            <img className="w_article_logo" src="https://threedaysgrace.com/wp-content/uploads/2019/08/Screen-Shot-2019-08-12-at-2.10.37-PM.png" alt="news image"></img>
                            <div className="w_article_text">
                                <p className="wam_text">
                                Three Days Grace have announced a fall tour with Five Finger Death Punch in the U.S. (bolded below)! Ticket pre-sale for 3DG newsletter subscribers begins Wednesday, July 24 at 10am ET HERE. An email will be sent today with the pre-sale password. For future pre-sales, please sign up for the […]
                                </p>
                                <p className="wam_date">
                                19 AUG 2019
                                </p>
                            </div>
                        </article>
                        <hr className="f_hr"></hr>
                        <article className= "w_article">
                            <img className="w_article_logo" src="https://threedaysgrace.com/wp-content/uploads/2019/07/5fdp_admatalldates_large.jpg" alt="news image"></img>
                            <div className="w_article_text">
                                <p className="wam_text">
                                Three Days Grace are performing at Casino Rama Resort in Orillia, ON on July 24. Tickets go on sale Saturday, March 14 at noon local time HERE.   
                                </p>
                                <p className="wam_date">
                                23 JUL 2019
                                </p>
                            </div>
                        </article>
  
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
                <Link to="/tours"><button type="button" class="btn c_t_button btn-lg " onClick={ () =>{forcePosition('tours')}}>CHECK OUT</button></Link>
            </div>
            <div className="c_t_i_container">
                <img src={require(`${this.state.a_cover}`)} alt="Outsider album cover"></img>
            </div>
        </article>
      )
    }
  }