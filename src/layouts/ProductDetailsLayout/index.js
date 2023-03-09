import { Col, InputNumber, Row } from "antd";
import { AiFillCheckCircle } from "react-icons/ai";
import { BsCartPlus, BsFillTelephoneFill, BsGift } from "react-icons/bs";
import ButtonSecondary from "../../components/ButtonSecondary";
import Rate from "../../components/Rating";
import Section from "../Section";
import "./index.scss";

function ProductDetailsLayout() {
  return (
    <Section>
      {/* product  */}
      <Row gutter={16}>
        <Col xl={10}>
          {/* image  */}
          <Row>
            <Col xl={24} md={24} sm={24}>
              <img src={require("../../assets/images/products/product01.png")} alt="" />
            </Col>
          </Row>
          {/* image list  */}
          <Row gutter={8} className="mt-4">
            <Col className="cursor-pointer" xl={6} md={6} sm={6}>
              <img src={require("../../assets/images/products/product01.png")} alt="" />
            </Col>
            <Col className="cursor-pointer" xl={6} md={6} sm={6}>
              <img src={require("../../assets/images/products/product01.png")} alt="" />
            </Col>
            <Col className="cursor-pointer" xl={6} md={6} sm={6}>
              <img src={require("../../assets/images/products/product01.png")} alt="" />
            </Col>
            <Col className="cursor-pointer border-red-700 border-solid border-2" xl={6} md={6} sm={6}>
              <img src={require("../../assets/images/products/product01.png")} alt="" />
            </Col>
          </Row>
        </Col>
        <Col xl={8}>
          {/* name  */}
          <h3 className="font-bold uppercase text-md-custom">Bình ngẩu pín hươu 4,8 lít</h3>

          <p className="flex items-center">
            <Rate allowHalf disabled value={4.5} />
            <span className="ml-2">1 đánh giá</span>
          </p>

          <p className="flex items-center gap-x-2">
            <span className="primary_color">
              <AiFillCheckCircle />
            </span>
            <span className="font-bold">Thương hiệu:</span> thegioiruoungam.com
          </p>

          <p className="flex items-center gap-x-2">
            <span className="primary_color">
              <AiFillCheckCircle />
            </span>
            <span className="font-bold">Tình trạng:</span>
            <span className="text-green-600">Còn hàng</span>
          </p>

          <div className="flex items-baseline gap-x-4">
            <span className="price_new">2,500,000₫</span>
            <span className="price_old">3,800,000₫</span>
          </div>

          <p className="mt-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque quasi nisi ut, aliquam, distinctio rem
            vitae voluptatibus nihil recusandae quae voluptates a dolorem ratione ipsum.
          </p>

          <ul className="mt-16 relative p-4 py-8 border-red">
            <li className="flex items-start gap-x-4 ">
              <AiFillCheckCircle className="min-w-fit text-green-600 mt-2" />{" "}
              <p className="max-line-three">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit dolore nihil vero. Lorem ipsum dolor sit
                amet consectetur adipisicing elit.
              </p>
            </li>
            <li className="flex items-start gap-x-4 ">
              <AiFillCheckCircle className="min-w-fit text-green-600 mt-2" />{" "}
              <p className="max-line-three">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit dolore nihil vero.
              </p>
            </li>
            <li className="flex items-start gap-x-4 ">
              <AiFillCheckCircle className="min-w-fit text-green-600 mt-2" />{" "}
              <p className="max-line-three">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li className="flex items-start gap-x-4 ">
              <AiFillCheckCircle className="min-w-fit text-green-600 mt-2" />{" "}
              <p className="max-line-three">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li className="flex items-start gap-x-4 ">
              <AiFillCheckCircle className="min-w-fit text-green-600 mt-2" />{" "}
              <p className="max-line-three">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit dolore nihil vero. Lorem ipsum dolor sit
                amet consectetur adipisicing elit. Est voluptates accusantium repellendus.
              </p>
            </li>

            <span className="promotion_label absolute left-12 uppercase bg-red-500 text-white py-1 px-4 rounded-lg flex items-center gap-x-2">
              <BsGift /> Khuyến mãi
            </span>
          </ul>

          <div className="flex gap-x-2 mb-4 mt-4">
            <InputNumber className="flex-1" min={1} max={10} defaultValue={1} size="large" />
            <ButtonSecondary className="flex-1 uppercase items-center" type="primary" size="full-btn">
              <BsCartPlus /> Thêm vào giỏ
            </ButtonSecondary>
            <ButtonSecondary className="flex-1 uppercase" type="secondary" size="full-btn">
              Chọn mua
            </ButtonSecondary>
          </div>

          <div className="flex gap-x-4">
            <ButtonSecondary className="uppercase tracking-wider" type="third" size="full-btn">
              Tư vấn zalo
            </ButtonSecondary>
            <ButtonSecondary className="uppercase tracking-wider" type="third" size="full-btn">
              <BsFillTelephoneFill />
              0999.999.999
            </ButtonSecondary>
          </div>
        </Col>
        <Col xl={6}>
          {/* delivery  */}
          <ul className="commit_list">
            <li className="commit_item mb-4 inline-block border-gray p-4">
              <div className="commit_image_wrapper w-20 ml-auto mr-auto policy_icon my-4 rounded-full">
                <img className="" src={require("../../assets/images/icons/policy01.png")} alt="" />
              </div>
              <h5 className="text-center capitalize font-bold text-sm-custom">Giao hàng tận nơi</h5>
              <p className="text-center mt-4 max-line-three text-xs-custom">
                Miễn phí giao hàng đơn trên 1.000.000đ. Giao hàng toàn quốc, thanh toán tại nhà
              </p>
            </li>
            <li className="commit_item mb-4 inline-block border-gray p-4">
              <div className="commit_image_wrapper w-20 ml-auto mr-auto policy_icon my-4 rounded-full">
                <img className="" src={require("../../assets/images/icons/policy02.png")} alt="" />
              </div>
              <h5 className="text-center capitalize font-bold text-sm-custom">Bảo đảm chất lượng</h5>
              <p className="text-center mt-4 max-line-three text-xs-custom">
                Miễn phí giao hàng đơn trên 1.000.000đ. Giao hàng toàn quốc, thanh toán tại nhà
              </p>
            </li>
            <li className="commit_item mb-4 inline-block border-gray p-4">
              <div className="commit_image_wrapper w-20 ml-auto mr-auto policy_icon my-4 rounded-full">
                <img className="" src={require("../../assets/images/icons/policy03.png")} alt="" />
              </div>
              <h5 className="text-center capitalize font-bold text-sm-custom">Nguồn gốc uy tín</h5>
              <p className="text-center mt-4 max-line-three text-xs-custom">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur molestias eos delectus ad
                veritatis, quo atque inventore maiores praesentium enim id voluptatem corrupti modi commodi sed.
                Pariatur placeat alias modi quos maiores a asperiores mollitia, nulla eius tenetur doloribus!
              </p>
            </li>
          </ul>
        </Col>
      </Row>

      {/* reviews and description  */}
      <Row>
        <Col xl={16}></Col>
        <Col xl={8}></Col>
      </Row>
    </Section>
  );
}

export default ProductDetailsLayout;
