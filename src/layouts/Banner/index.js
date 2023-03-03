import { Row, Col } from "antd";
import "./index.scss";

function Banner() {
  return (
    <div className="banner">
      <div className="container">
        <Row gutter={24}>
          <Col xl={6} md={6}>
            <div className="banner_img_wrapper">
              <img src={require("../../assets/images/banners/banner01.png")} alt="" />
            </div>
          </Col>
          <Col xl={12} md={12}>
            <div className="banner_img_wrapper">
              <img src={require("../../assets/images/banners/banner02.png")} alt="" />
            </div>
          </Col>
          <Col xl={6} md={6}>
            <div className="banner_img_wrapper">
              <img src={require("../../assets/images/banners/banner03.png")} alt="" />
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Banner;
