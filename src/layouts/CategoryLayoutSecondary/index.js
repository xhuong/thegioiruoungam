import { Col, Row } from "antd";
import CaregorySidebar from "../../components/CaregorySidebar";
import ListProductName from "../../components/ListProductName";
import PriceRange from "../../components/PriceRange";
import Sort from "../../components/Sort";
import Section from "../Section";
import SectionProduct from "../SectionProduct";

function CategoryLayoutSecondary() {
  return (
    <Section>
      <Row gutter={24}>
        <Col xl={6}>
          <CaregorySidebar />
          <div className="mt-2">
            <PriceRange />
          </div>
          <div className="banner_wrapper w-full p-4 mt-2  cursor-pointer">
            <img src={require("../../assets/images/banners/banner05.png")} alt="" />
          </div>
        </Col>
        <Col xl={18}>
          <ListProductName />
          <Sort />
          <SectionProduct />
        </Col>
      </Row>
    </Section>
  );
}

export default CategoryLayoutSecondary;
