import React from 'react'
import ReactDom from 'react-dom'
import './NavBar.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { GrCode} from 'react-icons/gr';
import {Link} from "react-router-dom";
export const NavBar = () => {
  return (
    <div>
  
      <div className ="navabar"> 
      <nav className="navbar navbar-expand-md ">
    <div class="container-fluid">
        <a className=" size = 2 rem code navbar-brand abs" href="#">Back To Code <GrCode size="2rem"/></a>
        <button class="navbar-toggler ms-auto" type="button" data-bs-toggle="collapse" data-bs-target="#collapseNavbar">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="navbar-collapse collapse" id="collapseNavbar">
            <ul class="navbar-nav">


                <li className="nav-item active">
                  <Link to="/">
                    <a className="nav-link" href="#">Home</a>
                    </Link>
                </li>


                <li class="nav-item">
                  <Link to="/courses">
                    <a class="nav-link" href="#>">Courses</a>
                    </Link>
                </li>

                    
                    <li class="nav-item">
                   <Link to="/blog">
                    <a class="nav-link" href="#>">Blog</a>
                    </Link>
                </li>


                <li class="nav-item">
                  <Link to ="login">
                    <a class="nav-link" href="#>">Login</a>
                    </Link>
                    
                </li>
               </ul>
  
            <ul class="navbar-nav ms-auto">
          <li class="nav-item">
           <Link to="about">
          <a class="nav-link" href="" data-bs-target="#myModal" data-bs-toggle="modal>">Contact-Us</a>
          </Link>
          </li>
         </ul>
        </div>
    </div>
</nav>
</div>

    </div>
  );
};

