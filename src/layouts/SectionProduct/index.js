import { Row, Col } from "antd";
import Product from "../../components/Product";
import ProductLabel from "../../components/ProductLabel";
import "./index.scss";

function SectionProduct() {
  return (
    <div className="section_product">
      {/* label product  */}
      <ProductLabel />
      <div className="section_product_wrapper">
        <Row gutter={24}>
          <Col xl={6}>
            <Product />
          </Col>
          <Col xl={6}>
            <Product />
          </Col>
          <Col xl={6}>
            <Product />
          </Col>
          <Col xl={6}>
            <Product />
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default SectionProduct;
