import { Link } from "react-router-dom";
import { FaDashcube } from "react-icons/fa";
import { Row, Col } from "antd";
import "./index.scss";
import Product from "../../components/Product";

function SectionProduct() {
  return (
    <div className="section_product">
      {/* header  */}
      <div className="section_product_header">
        <span className="section_product_icon">
          <FaDashcube />
        </span>
        <div className="section_product_heading_wrapper">
          <h2 className="section_product_heading">Nhân sâm</h2>
          <ul className="section_product_list">
            <li className="section_product_item">
              <Link className="section_product_link">Bình sâm</Link>
            </li>
            <li className="section_product_item">
              <Link className="section_product_link">Sâm tươi</Link>
            </li>
            <li className="section_product_item">
              <Link className="section_product_link">Bình hoa sâm</Link>
            </li>
            <li className="section_product_item">
              <Link className="section_product_link">Bình sâm điêu khắc</Link>
            </li>
            <li className="section_product_item">
              <Link className="section_product_link">Nước hồng sâm</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="section_product_wrapper">
        <Row gutter={24}>
          <Col xl={8}>
            <Product />
          </Col>
          <Col xl={8}>
            <Product />
          </Col>
          <Col xl={8}>
            <Product />
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default SectionProduct;
