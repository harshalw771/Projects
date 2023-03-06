import React from 'react';
import ReactDOM from 'react-dom';
import './Footer.css';
import { GrCode} from 'react-icons/gr';
import { AiFillFacebook} from 'react-icons/ai';
import { FaInstagramSquare} from 'react-icons/fa';
import { FaTelegram} from 'react-icons/fa';
import { FaTwitter} from 'react-icons/fa';
import { ImYoutube2} from 'react-icons/im';
export const Footer = (props) => {
  
    return (
<div>
    <footer  className="body ">
        <div class="container-fluid text-center text-md-left">
   <div class="row">
   <div class="col-md-6 mt-md-0 mt-3">
   <h5 class= "back text-uppercase">Back To Code<GrCode size="2rem"/></h5>
   <p>Trending Courses</p>

</div>
<hr class="clearfix w-100 d-md-none pb-3"></hr>
<div class="col-md-3 mb-md-0 mb-3">

<h9 class="text-black">Join the conversation </h9>

<ul class="list-unstyled">
          <li>
            <a href="https://www.facebook.com/"><AiFillFacebook size="1rem"/></a>
          </li>
          <li>
            <a href="https://www.instagram.com/"><FaInstagramSquare size="1rem"/></a>
          </li>
          <li>
            <a href="#!"><FaTelegram size="1rem"/></a>
          </li>
          <li>
            <a href="#!"><FaTwitter size="1rem"/></a>
          </li>
        </ul>

</div>
  
     <div class="col-md-3 mb-md-0 mb-3">
     <h5 class="text-uppercase"></h5>
     <ul class="list-unstyled">
          <li>
            <a href="#!"><ImYoutube2 size="2rem"/></a>
          </li>
          <li>
           
          </li>
        </ul>


     </div>

   </div>
   <div class="footer-copyright text-center py-3">© 2022 Copyright:
    <a href="https://mdbootstrap.com/"> backtocode.com</a>
  </div>


        </div>

    </footer>
</div>
    );
};
