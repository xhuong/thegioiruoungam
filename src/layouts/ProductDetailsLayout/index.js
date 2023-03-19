import { Col, InputNumber, Row } from "antd";
import { AiFillCheckCircle } from "react-icons/ai";
import { BsCartPlus, BsFillTelephoneFill, BsGift } from "react-icons/bs";
import ButtonSecondary from "../../components/ButtonSecondary";
import Rate from "../../components/Rating";
import { formatPrice } from "../../Utils";
import Section from "../Section";
import "./index.scss";

function ProductDetailsLayout({ data }) {
  const { id, name, imageUrl, oldPrice, newPrice, star, categoryId, discount, description } = data;

  return (
    <Section>
      {/* product  */}
      <Row gutter={16}>
        <Col xl={10} lg={8} md={12}>
          {/* image  */}
          <Row>
            <Col xl={24} md={24} sm={24}>
              <img src={imageUrl} alt="" />
            </Col>
          </Row>
          {/* image list  */}
          <Row gutter={8} className="mt-4 mb-4 md:mb-0">
            <Col className="cursor-pointer border-red-700 border-solid border-2" xl={6} md={6} sm={6} xs={6}>
              <img src={imageUrl} alt="" />
            </Col>
            <Col className="cursor-pointer" xl={6} md={6} sm={6} xs={6}>
              <img src={imageUrl} alt="" />
            </Col>
            <Col className="cursor-pointer hidden-sm hidden-xs" xl={6} md={6}>
              <img src={imageUrl} alt="" />
            </Col>
            <Col className="cursor-pointer hidden-sm hidden-xs" xl={6} md={6}>
              <img src={imageUrl} alt="" />
            </Col>
          </Row>
        </Col>
        <Col xl={8} lg={10} md={12}>
          {/* name  */}
          <h3 className="font-bold uppercase text-md-custom">{name}</h3>

          <p className="flex items-center">
            <Rate allowHalf disabled value={4.5} />
            <span className="ml-2">1 đánh giá</span>
          </p>

          <p className="flex items-center gap-x-2 text-lg">
            <span className="text-primary-color">
              <AiFillCheckCircle />
            </span>
            <span className="font-bold">Thương hiệu:</span> nhunghuoutramnhan.com
          </p>

          <p className="flex items-center gap-x-2 text-lg">
            <span className="text-primary-color">
              <AiFillCheckCircle />
            </span>
            <span className="font-bold">Tình trạng:</span>
            <span className="text-green-600">Còn hàng</span>
          </p>

          <div className="flex items-baseline gap-x-4">
            <span className="price_new">{formatPrice(newPrice)}đ</span>
            <span className="price_old">{formatPrice(oldPrice)}đ</span>
          </div>

          <p className="mt-4 max-line-4 text-lg">{description}</p>

          <ul className="mt-10 relative p-4 py-8 border-red">
            <li className="flex items-start gap-x-4 ">
              <AiFillCheckCircle className="min-w-fit text-green-600 mt-2" />
              <p className="max-line-three text-lg">Cung cấp sản phẩm số lượng lớn cho doanh nghiệp. Có hóa đơn VAT.</p>
            </li>
            <li className="flex items-start gap-x-4 ">
              <AiFillCheckCircle className="min-w-fit text-green-600 mt-2" />
              <p className="max-line-three text-lg">
                Hotline/Zalo {"("}24/7{")"}: 0375.524.580
              </p>
            </li>
            <li className="flex items-start gap-x-4 ">
              <AiFillCheckCircle className="min-w-fit text-green-600 mt-2" />
              <p className="max-line-three text-lg">Giao hàng nhanh trên toàn quốc.</p>
            </li>
            <li className="flex items-start gap-x-4 ">
              <AiFillCheckCircle className="min-w-fit text-green-600 mt-2" />
              <p className="max-line-three text-lg">Giao hàng hỏa tốc 2h tại ...</p>
            </li>
            <li className="flex items-start gap-x-4 ">
              <AiFillCheckCircle className="min-w-fit text-green-600 mt-2" />
              <p className="max-line-three text-lg">
                Hỗ trợ trả góp 0% lãi suất qua thẻ tín dụng với hóa đơn trên 3.000.000 vnđ
              </p>
            </li>

            <span className="promotion_label absolute left-4 uppercase bg-red-500 text-white py-1 px-4 rounded-lg flex items-center gap-x-2">
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
              0375.524.580
            </ButtonSecondary>
          </div>
        </Col>
        <Col xl={6} lg={6} className="hidden-md hidden-sm hidden-xs">
          {/* delivery  */}
          <ul className="commit_list">
            <li className="commit_item mb-4 inline-block border-gray p-4">
              <div className="commit_image_wrapper w-20 ml-auto mr-auto policy_icon my-4 rounded-full">
                <img className="" src={require("../../assets/images/icons/policy01.png")} alt="" />
              </div>
              <h5 className="text-center capitalize font-bold text-sm-custom">Giao hàng tận nơi</h5>
              <p className="text-center mt-4 text-lg text-xs-custom">
                Miễn phí giao hàng đơn trên 1.000.000đ. Giao hàng toàn quốc, thanh toán tại nhà
              </p>
            </li>
            <li className="commit_item mb-4 inline-block border-gray p-4">
              <div className="commit_image_wrapper w-20 ml-auto mr-auto policy_icon my-4 rounded-full">
                <img className="" src={require("../../assets/images/icons/policy02.png")} alt="" />
              </div>
              <h5 className="text-center capitalize font-bold text-sm-custom">Bảo đảm chất lượng</h5>
              <p className="text-center mt-4 text-xs-custom">
                Tất cả các sản phẩm tại Nhunghuoutramnhan.com cung cấp đều đảm bảo chất lượng khi đến tay người tiêu
                dùng.
              </p>
            </li>
            <li className="commit_item mb-4 inline-block border-gray p-4">
              <div className="commit_image_wrapper w-20 ml-auto mr-auto policy_icon my-4 rounded-full">
                <img className="" src={require("../../assets/images/icons/policy03.png")} alt="" />
              </div>
              <h5 className="text-center capitalize font-bold text-sm-custom">Nguồn gốc uy tín</h5>
              <p className="text-center mt-4 text-xs-custom">
                Chúng tôi chỉ bán sản phẩm chất lượng, nói không với hàng giả, hàng kém chất lượng
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
