import Slider from "react-slick";
import { Link } from "react-router-dom";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./index.scss";

function SimpleSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="slider">
      <div className="" style={{ maxWidth: "100%", margin: "0 auto" }}>
        <Slider {...settings}>
          <div className="slider_item">
            <Link className="slider_item_link">
              <img src={require("../../assets/images/sliders/slider01.png")} alt="" />
            </Link>
          </div>
          <div className="slider_item">
            <Link className="slider_item_link">
              <img src={require("../../assets/images/sliders/slider03.png")} alt="" />
            </Link>
          </div>
          <div className="slider_item">
            <Link className="slider_item_link">
              <img src={require("../../assets/images/sliders/slider02.png")} alt="" />
            </Link>
          </div>
        </Slider>
      </div>
    </div>
  );
}
export default SimpleSlider;