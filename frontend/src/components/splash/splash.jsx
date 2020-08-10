import React from "react";
import "./Splash.scss";
import Slider from "react-slick";
import Dog1 from "./Dog1.jpg";
import Dog2 from "./Dog2.jpg";
import Dog3 from "./Dog3.jpg";
class SplashPage extends React.Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      variableWidth: true,
      autoplay: true,
      autoplaySpeed: 5000,
    };

    return (
      <div>
        <div>
          <div>
            <h1>Make a difference, help save a life</h1>
          </div>
        </div>
        <Slider {...settings}>
          <div>
            <img src={Dog1} alt="d1" className="Dog" />
          </div>
          <div>
            <img src={Dog2} alt="d2" className="Dog" />
          </div>
          <div>
            <img src={Dog3} alt="d3" className="Dog" />
          </div>
        </Slider>
      </div>
    );
  }
}

export default SplashPage;
