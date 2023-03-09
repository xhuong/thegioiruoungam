import { Col, Row } from "antd";
import { Link } from "react-router-dom";
import { FaYoutube, FaFacebookF } from "react-icons/fa";
import "./index.scss";

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <Row gutter={16}>
          <Col xl={8}>
            <h3 className="footer_heading">
              Lorem ipsum dolor sit amet, consectetur lorem1 adipisicing elit. Illum doloribus voluptates ut!
            </h3>
            <ul className="footer_list">
              <li className="footer_item">
                <span className="footer_item--bold">Hotline {"(24/7)"}:</span>
                <span className="footer_item_phonenumber">0999.999.999</span> {"( 08:00-21:30 )"}
              </li>
              <li className="footer_item">
                <span className="footer_item--bold">Email:</span>
                abc@gmail.com
              </li>
              <li className="footer_item">
                <span className="footer_item--bold">Địa chỉ tại HCM:</span>
                205 Nguyễn Thượng Hiền, Phường 6, Quận Bình Thạnh, TPHCM
              </li>
              <li className="footer_item">
                <span className="footer_item--bold">Địa chỉ tại Khánh Hoà:</span>
                264 Đường Nguyễn Công Trứ, Mỹ Ca, Cam Ranh
              </li>
              <li className="footer_item">
                <span className="footer_item--bold">Thời gian làm việc: </span>
                8h-20h (Thứ 2 đến Chủ Nhật)
              </li>
              <li className="footer_item">
                <span className="footer_item--bold">MST:</span>
                0317411947 do Sở kế hoạch và Đầu tư TPHCM cấp
              </li>
              <li className="footer_item">
                <span className="footer_item--bold">Giấy phép bán lẻ rượu số:</span>
                32/2022/GPR-PKT do UBND Quận Bình Thạnh, Phòng Kinh Tế cấp
              </li>
              <li className="footer_item">
                <div className="footer_item_contact">
                  <Link>
                    <span className="footer_item_icon">
                      <FaFacebookF />
                    </span>
                  </Link>
                  <Link>
                    <span className="footer_item_icon">
                      <FaYoutube />
                    </span>
                  </Link>
                </div>
              </li>
            </ul>
          </Col>
          <Col xl={2}>
            <h3 className="footer_heading">Danh mục</h3>
            <ul className="footer_list">
              <li className="footer_item">
                <Link>Giới thiệu</Link>
              </li>
              <li className="footer_item">
                <Link>Giới thiệu</Link>
              </li>
              <li className="footer_item">
                <Link>Giới thiệu</Link>
              </li>
              <li className="footer_item">
                <Link>Giới thiệu</Link>
              </li>
              <li className="footer_item">
                <Link>Giới thiệu</Link>
              </li>
              <li className="footer_item">
                <Link>Giới thiệu</Link>
              </li>
            </ul>
          </Col>
          <Col xl={4}>
            <h3 className="footer_heading">Hỗ trợ khách hàng</h3>
            <ul className="footer_list">
              <li className="footer_item">
                <Link>Tin tức</Link>
              </li>
              <li className="footer_item">
                <Link>Tin tức</Link>
              </li>
              <li className="footer_item">
                <Link>Tin tức</Link>
              </li>
              <li className="footer_item">
                <Link>Tin tức</Link>
              </li>
              <li className="footer_item">
                <Link>Tin tức</Link>
              </li>
              <li className="footer_item">
                <Link>Tin tức</Link>
              </li>
              <li className="footer_item">
                <Link>Tin tức</Link>
              </li>
              <li className="footer_item">
                <Link>Tin tức</Link>
              </li>
              <li className="footer_item">
                <img src={require("../../assets/images/bo_cong_thuong.png")} alt="" />
              </li>
            </ul>
          </Col>
          <Col xl={10}>
            <h3 className="footer_heading">Chăm sóc khách hàng</h3>
            <ul className="footer_list">
              <li className="footer_item">
                <span className="footer_item--bold">Hotline:</span>
                0908.023.123
              </li>
              <li className="footer_item">
                <span className="footer_item--bold">Hotline:</span>
                0908.023.123
              </li>
              <li>
                <span className="footer_item--bold">Hỗ trợ thanh toán:</span>
                <div className="footer_image wrapper">
                  <img src={require("../../assets/images/checkout/checkout.png")} alt="" />
                </div>
                <p>{"(*) Công ty chúng tôi không bán rượu cho người dưới 18 tuổi"}</p>
              </li>
            </ul>
          </Col>
        </Row>
        <p className="footer_license">
          © Bản quyền thuộc về Công ty TNHH TM Nguyên Đức Royal | Sản phẩm chính hãng Thegioiruoungam.com
        </p>
      </div>
    </footer>
  );
}

export default Footer;
