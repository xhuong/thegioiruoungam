import { Row, Col } from "antd";
import CaregorySidebar from "../../components/CaregorySidebar";
import Section from "../Section";
import SectionProduct from "../SectionProduct";

function CategoryLayout(props) {
  return (
    <Section>
      <Row gutter={[16, 16]}>
        <Col xl={6} lg={6} className="hidden-md hidden-sm hidden-xs">
          <CaregorySidebar />
        </Col>
        <Col xl={18} lg={18} md={24} sm={24} xs={24}>
          <SectionProduct title={props.title} />
        </Col>
      </Row>
    </Section>
  );
}

export default CategoryLayout;
