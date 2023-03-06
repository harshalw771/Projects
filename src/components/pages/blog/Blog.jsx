import React from 'react';
import ReactDOM from 'react-dom';
import './Blog.css';
import image2 from "../../images/graphic.png";
import image3 from "../../images/trainging.png";
import image4 from "../../images/shutterstock.jpg";
export const Blog = (props) => {
    return (
<div id="carouselExampleControlsNoTouching" class="carousel slide" data-bs-touch="false" data-bs-interval="false">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={image2} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={image4} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={image3} class="d-block w-100" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
    );
};
