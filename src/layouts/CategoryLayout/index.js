import { Row, Col } from "antd";
import CaregorySidebar from "../../components/CaregorySidebar";
import Section from "../Section";
import SectionProduct from "../SectionProduct";

function CategoryLayout() {
  return (
    <Section>
      <Row gutter={[16, 16]}>
        <Col xl={6} md={6} sm={24} xs={24}>
          <CaregorySidebar />
        </Col>
        <Col xl={18} md={18} sm={24} xs={24}>
          <SectionProduct />
        </Col>
      </Row>
    </Section>
  );
}

export default CategoryLayout;
