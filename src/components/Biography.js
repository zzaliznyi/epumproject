import React from 'react';
import '../App.scss';
import { getImgByTitle } from '../modules/images';


export default class Biography extends React.Component{
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
                      <img src={require(`${this.state.a_heading}`)} alt="Outsider Heading"></img>
                  </div>
              </div>
              <div className="c_t_i_container">
                  <img src={require(`${this.state.a_cover}`)} alt="Album cover"></img>
              </div>
          </article>
      )
    }
  }