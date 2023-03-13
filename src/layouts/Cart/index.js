import { Row, Col, InputNumber } from "antd";
import ButtonSecondary from "../../components/ButtonSecondary";
import Section from "../Section";
import "./index.scss";

function Cart() {
  return (
    <Section>
      <p className="uppercase mr-2">
        Giỏ hàng:{" "}
        <span className="capitalize">
          {"("}0 sản phẩm {")"}
        </span>
      </p>
      <Row gutter={6}>
        <Col xl={18}>
          {/* cart item  */}
          <Row gutter={6} className="cart_item">
            <Col xl={12}>
              <div className="flex">
                <div className="mr-2" style={{ maxWidth: "240px" }}>
                  <img src={require("../../assets/images/products/product01.png")} alt="" />
                </div>
                <p className="self-start flex-1 max-line-three">
                  {" "}
                  Bình ngẩu pín huơu 4.8 lít Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde totam porro
                  Lorem ipsum dolor sit amet consectetur. consectetur.
                </p>
              </div>
            </Col>
            <Col xl={6}>
              <p className="text-center">2,500,000đ</p>
            </Col>
            <Col xl={6}>
              <div className="flex flex-col items-center">
                <InputNumber min={1} max={10} defaultValue={1} size="large" />
                <span className="mt-1 cursor-pointer hover:underline hover:text-red-400">Xoá</span>
              </div>
            </Col>
          </Row>
          {/* end cart item  */}
          {/* cart item  */}
          <Row gutter={6} className="cart_item">
            <Col xl={12}>
              <div className="flex">
                <div className="mr-2" style={{ maxWidth: "240px" }}>
                  <img src={require("../../assets/images/products/product01.png")} alt="" />
                </div>
                <p className="self-start flex-1 max-line-three">
                  {" "}
                  Bình ngẩu pín huơu 4.8 lít Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde totam porro
                  Lorem ipsum dolor sit amet consectetur. consectetur.
                </p>
              </div>
            </Col>
            <Col xl={6}>
              <p className="text-center">2,500,000đ</p>
            </Col>
            <Col xl={6}>
              <div className="flex flex-col items-center">
                <InputNumber min={1} max={10} defaultValue={1} size="large" />
                <span className="mt-1 cursor-pointer hover:underline hover:text-red-400">Xoá</span>
              </div>
            </Col>
          </Row>
          {/* end cart item  */}
          {/* cart item  */}
          <Row gutter={6} className="cart_item">
            <Col xl={12}>
              <div className="flex">
                <div className="mr-2" style={{ maxWidth: "240px" }}>
                  <img src={require("../../assets/images/products/product01.png")} alt="" />
                </div>
                <p className="self-start flex-1 max-line-three">
                  {" "}
                  Bình ngẩu pín huơu 4.8 lít Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde totam porro
                  Lorem ipsum dolor sit amet consectetur. consectetur.
                </p>
              </div>
            </Col>
            <Col xl={6}>
              <p className="text-center">2,500,000đ</p>
            </Col>
            <Col xl={6}>
              <div className="flex flex-col items-center">
                <InputNumber min={1} max={10} defaultValue={1} size="large" />
                <span className="mt-1 cursor-pointer hover:underline hover:text-red-400">Xoá</span>
              </div>
            </Col>
          </Row>
          {/* end cart item  */}
          {/* cart item  */}
          <Row gutter={6} className="cart_item">
            <Col xl={12}>
              <div className="flex">
                <div className="mr-2" style={{ maxWidth: "240px" }}>
                  <img src={require("../../assets/images/products/product01.png")} alt="" />
                </div>
                <p className="self-start flex-1 max-line-three">
                  {" "}
                  Bình ngẩu pín huơu 4.8 lít Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde totam porro
                  Lorem ipsum dolor sit amet consectetur. consectetur.
                </p>
              </div>
            </Col>
            <Col xl={6}>
              <p className="text-center">2,500,000đ</p>
            </Col>
            <Col xl={6}>
              <div className="flex flex-col items-center">
                <InputNumber min={1} max={10} defaultValue={1} size="large" />
                <span className="mt-1 cursor-pointer hover:underline hover:text-red-400">Xoá</span>
              </div>
            </Col>
          </Row>
          {/* end cart item  */}
        </Col>
        <Col xl={6}>
          <div className="flex justify-between pb-16 border-bttom-gray">
            Tạm tính: <b>14,500,000đ</b>
          </div>
          <div className="flex justify-between items-end pt-16">
            Thành tiền: <span className="font-bold text-md-custom text-red-600">14,500,000đ</span>
          </div>
          <p className="text-red-500 mt-4">*Trong trường hợp bạn có Mã giảm giá, vui lòng nhập ở bước thanh toán.</p>
          <div className="mt-4">
            <ButtonSecondary className="uppercase" type="primary" size="full-btn">
              Thanh toán ngay
            </ButtonSecondary>
            <ButtonSecondary className="uppercase mt-4" type="secondary" size="full-btn">
              Tiếp tục mua hàng
            </ButtonSecondary>
          </div>
        </Col>
      </Row>
    </Section>
  );
}

export default Cart;
