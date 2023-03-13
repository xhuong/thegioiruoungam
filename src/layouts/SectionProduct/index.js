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
        <Row gutter={[16, 16]}>
          <Col xl={6} md={6} sm={8} xs={24}>
            <Product />
          </Col>
          <Col xl={6} md={6} sm={8} xs={24}>
            <Product />
          </Col>
          <Col xl={6} md={6} sm={8} xs={24}>
            <Product />
          </Col>
          <Col xl={6} md={6} sm={8} xs={24}>
            <Product />
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default SectionProduct;
