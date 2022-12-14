import React from 'react';
import {Carousel} from "react-bootstrap"
import photo1 from "./Matin_37.jpg"
import photo2 from "./Soir_110.jpg"
import photo3 from "./Ducasse_0.jpg"
import Style from "./Carrousel.module.css"

const Carrousel = () => {
    return (
        <div className={Style.Carousel}>
            <Carousel className={Style.Body}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={photo1}
          alt="First slide"q
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={photo2}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={photo3}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
        </div>
    );
};

export default Carrousel;