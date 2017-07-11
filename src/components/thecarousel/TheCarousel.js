import React, { Component } from 'react';
import './TheCarousel.css';
import {Carousel} from 'react-bootstrap';

class TheCarousel extends Component {
  render() {
    return (
      <div>
      <Carousel>
  <Carousel.Item>
    <img id="carouselpictures" src="/assets/images/image1.jpg"/>
    <Carousel.Caption>
      <h1>Welcome to my travel site.</h1>
      <h3>This site is about places I would like to visit.</h3>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img id="carouselpictures" src="/assets/images/image2.jpg"/>
    <Carousel.Caption>
    <h1>Welcome to my travel site.</h1>
    <h3>This site is about places I would like to visit.</h3>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img id="carouselpictures" src="/assets/images/image3.jpg"/>
    <Carousel.Caption>
    <h1>Welcome to my travel site.</h1>
    <h3>This site is about places I would like to visit.</h3>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img id="carouselpictures" src="/assets/images/image4.jpg"/>
    <Carousel.Caption>
    <h1>Welcome to my travel site.</h1>
    <h3>This site is about places I would like to visit.</h3>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>

      </div>
    );
  }
}

export default TheCarousel;
