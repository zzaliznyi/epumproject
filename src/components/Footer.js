import React from 'react';

import '../App.scss';

export default class Footer extends React.Component{
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