import { Col, Row } from "antd";
import NewsCard from "../../components/NewsCard";
import ProductLabel from "../../components/ProductLabel";
import Section from "../Section";
import "./index.scss";

function News() {
  return (
    <Section>
      <ProductLabel />
      {/* new card list */}
      <div className="section_news_wrapper">
        <Row gutter={[16, 16]}>
          <Col xl={8} md={8} sm={24} xs={24}>
            <NewsCard />
          </Col>
          <Col xl={8} md={8} sm={24} xs={24}>
            <NewsCard />
          </Col>
          <Col xl={8} md={8} sm={24} xs={24}>
            <NewsCard />
          </Col>
        </Row>
      </div>
    </Section>
  );
}

export default News;
