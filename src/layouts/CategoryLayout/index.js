import { Row, Col } from "antd";
import CaregorySidebar from "../../components/CaregorySidebar";
import SectionProduct from "../SectionProduct";

function CategoryLayout() {
  return (
    <div className="section">
      <div className="container">
        <Row gutter={24}>
          <Col xl={6}>
            <CaregorySidebar />
          </Col>
          <Col xl={18}>
            <SectionProduct />
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default CategoryLayout;
