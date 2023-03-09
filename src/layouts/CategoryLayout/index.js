import { Row, Col } from "antd";
import CaregorySidebar from "../../components/CaregorySidebar";
import Section from "../Section";
import SectionProduct from "../SectionProduct";

function CategoryLayout() {
  return (
    <Section>
      <Row gutter={24}>
        <Col xl={6}>
          <CaregorySidebar />
        </Col>
        <Col xl={18}>
          <SectionProduct />
        </Col>
      </Row>
    </Section>
  );
}

export default CategoryLayout;
