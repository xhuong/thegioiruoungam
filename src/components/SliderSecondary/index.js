import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./index.scss";

function SliderSecondary() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="slider_secondary">
      <Slider {...settings}>
        <li className="slider_secondary_item">
          <div className="slider_secondary_image_wrapper">
            <img src={require("../../assets/images/customers/customer01.png")} alt="" />
          </div>
          <p className="slider_secondary_customer_opinion">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus illum neque natus dolorem veniam molestiae
            omnis fugiat adipisci dolor, itaque quae. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
            consequuntur facere nostrum? Distinctio quo blanditiis iusto eligendi!
          </p>
          <p className="slider_secondary_customer">Anh Nguyễn Duy Bịp - Nhân viên cao cấp tại công ty đa cấp</p>
        </li>
        <li className="slider_secondary_item">
          <div className="slider_secondary_image_wrapper">
            <img src={require("../../assets/images/customers/customer01.png")} alt="" />
          </div>
          <p className="slider_secondary_customer_opinion">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus illum neque natus dolorem veniam molestiae
            omnis fugiat adipisci dolor, itaque quae. Distinctio quo blanditiis iusto eligendi!
          </p>
          <p className="slider_secondary_customer">Anh Nguyễn Duy Bịp - Nhân viên cao cấp tại công ty đa cấp</p>
        </li>
        <li className="slider_secondary_item">
          <div className="slider_secondary_image_wrapper">
            <img src={require("../../assets/images/customers/customer01.png")} alt="" />
          </div>
          <p className="slider_secondary_customer_opinion">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus illum neque natus dolorem veniam molestiae
            omnis fugiat adipisci dolor, itaque quae. Distinctio quo blanditiis iusto eligendi!
          </p>
          <p className="slider_secondary_customer">Anh Nguyễn Duy Bịp - Nhân viên cao cấp tại công ty đa cấp</p>
        </li>
      </Slider>
    </div>
  );
}

export default SliderSecondary;
