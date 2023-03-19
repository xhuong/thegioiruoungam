import { Col, Row } from "antd";
import { useDispatch, useSelector } from "react-redux";
import CaregorySidebar from "../../components/CaregorySidebar";
import ListProductName from "../../components/ListProductName";
import Modal from "../../components/Modal";
import PriceRange from "../../components/PriceRange";
import Sort from "../../components/Sort";
import Section from "../Section";
import SectionProduct from "../SectionProduct";
import { closeModal, openModal } from "../../redux/slices/modalSlice";
import ButtonSecondary from "../../components/ButtonSecondary";

function CategoryLayoutSecondary() {
  const dispatch = useDispatch();
  const isActiveModal = useSelector((state) => state.modal.isActive);
  return (
    <Section>
      <Row gutter={16}>
        <Col xl={6} lg={6} className="hidden-xs hidden-sm hidden-md">
          <CaregorySidebar />
          <div className="mt-2">
            <PriceRange />
          </div>
          <div className="banner_wrapper w-full p-4 mt-2  cursor-pointer">
            <img src={require("../../assets/images/banners/banner05.png")} alt="" />
          </div>
        </Col>
        <Col xl={18} lg={18}>
          <ListProductName />
          <Sort />
          <SectionProduct title="Nhung hươu" />
        </Col>
      </Row>
      {/* modal  */}
      <ButtonSecondary type="primary" onClick={() => dispatch(openModal())}>
        open modal
      </ButtonSecondary>
      {isActiveModal && <Modal />}
    </Section>
  );
}

export default CategoryLayoutSecondary;
