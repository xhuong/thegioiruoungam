import { Row, Col } from "antd";
import Product from "../../components/Product";
import ProductLabel from "../../components/ProductLabel";
import "./index.scss";

function SectionProduct({ title, ...props }) {
  return (
    <div className="section_product">
      {/* label product  */}
      <ProductLabel title={title} />
      <div className="section_product_wrapper">
        <Row gutter={[16, 16]}>
          <Col xl={8} md={8} sm={12} xs={12}>
            <Product />
          </Col>
          <Col xl={8} md={8} sm={12} xs={12}>
            <Product />
          </Col>
          <Col xl={8} md={8} sm={12} xs={12}>
            <Product />
          </Col>
        </Row>
        <p className="text-center py-8">Đã hiển thị tất cả 23 sản phẩm</p>
      </div>
    </div>
  );
}

export default SectionProduct;
