import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Dog from "../../img/237-536x354.jpg";
import "./projectCarousel.css";

function projectCarousel({ project }) {
  return (
    <div className="">
      <Carousel data-bs-theme="dark" interval={null}>
        <Carousel.Item>
          <img className="project-img d-block" src={Dog} />
          <Carousel.Caption>
            <h5>First slide label</h5>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="project-img d-block " src={Dog} />
          <Carousel.Caption>
            <h5>First slide label</h5>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="project-img d-block " src={Dog} />
          <Carousel.Caption>
            <h5>First slide label</h5>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default projectCarousel;
