import React from 'react';
import ReactDOM from 'react-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import image from "../../images/giphy.gif";
import image1 from "../../images/success.jpg"
import { FcGraduationCap } from "react-icons/fc";
import './Home.css';
export const Home = (props) => {
    return (
<div>
<h2 className="h2"><u> We Build Career<FcGraduationCap size="5rem"/></u></h2>
<h6 className="c">Our courses are designed not just to educate but also to make our students industry-ready for India’s ever growing tech job landscape.</h6>
<img src={image} className ="img"></img>
<h4 className="start">Start Learning with 100% Free Courses:-</h4>
<p className="whether">Whether you’re new to supervision or you’re an experienced executive, our continuum of leadership development programs can offer valuable tools to help you grow as a leader and develop your employees, with a focus on resilience and success. We offer a comprehensive range of training options that meet you where you are in your leadership role and help you take your career–and your team—to the next level of performance.</p>
<li className="get" >Get job-ready for an in-demand career </li>

<img src={image1} className ="img1"></img>
</div>

  );
};
