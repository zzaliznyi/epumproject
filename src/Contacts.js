import React from 'react';



class Contacts extends React.Component{
    render(){
        return(
                <div className="contacts_container">

                    <div className="contacts_map">
                        <div className="google-map">
                            <iframe id="map_window" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2540.5525878119665!2d30.4590354512214!3d50.449433895218554!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4ce82c7c07565%3A0xd2e84edcb0edd9d5!2sKPI%20University!5e0!3m2!1suk!2sua!4v1590680182239!5m2!1suk!2sua" width="600" height="450" frameborder="0" style={{border:0}} allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                        </div>
                    </div>
                    <br></br>
                    <hr className="c_hr"></hr>
                    <Contacts_Form/>
                    <div className="contacts_row">
                        <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, quaerat perspiciatis iure doloribus impedit cupiditate! Esse tempore, ad nihil dolorum alias dolor praesentium distinctio corporis modi tempora laborum mollitia delectus.</h5>
                    </div>
                </div>

                        

        )
    }
}
class Contacts_Form extends React.Component{
    constructor(props)
    {
        super(props);
    }
    render() {
        return (
            <div className="contacts_row">
                <h2>Contact US!</h2>
                <hr className="c_hr"></hr>
                <form>
                    <h5>Leave your email and name below!</h5>
                    <hr className="c_hr"></hr>
                    <div class="form-group">
                        <input type="email" class="form-control" id="c_us_email" aria-describedby="emailHelp" placeholder="Enter email"></input>
                    </div>
                    <div class="form-group">
                        <input type="text" class="form-control" id="c_us_name" placeholder="Name"></input>
                    </div>
                    <button type="submit" class="btn btn-primary">Submit</button>
                    </form>
            </div>
        )
    }
}
export default Contacts;
