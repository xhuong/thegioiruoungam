import { Row, Col } from "antd";
import ProductLabel from "../../components/ProductLabel";
import SliderSecondary from "../../components/SliderSecondary";
import Section from "../Section";
import "./index.scss";

function Introduction() {
  return (
    <Section>
      <Row gutter={24}>
        <Col xl={12}>
          <ProductLabel title="Ý kiến khách hàng" />
          <div className="mt-20">
            <SliderSecondary />
          </div>
        </Col>
        <Col xl={12}>
          <ProductLabel title="Giới thiệu công ty" />
          <div className="introduce_image_wrapper">
            <img src={require("../../assets/images/introduce/company.png")} alt="" />
          </div>
        </Col>
      </Row>
    </Section>
  );
}

export default Introduction;
