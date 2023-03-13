import { GiEarthAmerica } from "react-icons/gi";
import { GrMenu } from "react-icons/gr";
import { IoSearch } from "react-icons/io5";
import { HiShoppingCart } from "react-icons/hi";
import { BsTelephoneInbound } from "react-icons/bs";
import Button from "../../components/Button";
import { Link } from "react-router-dom";
import "./index.scss";

function Header() {
  return (
    <header className="header">
      {/* header with branch  */}
      <div className="header_branch hidden-sm hidden-xs">
        <GiEarthAmerica />
        <p className="header_branch_title">
          Công Ty TNHH Thương Mại Nguyên Đức Royal - Thế Giới Rượu Ngâm Since 2010 - Thương Hiệu Uy Tín
        </p>
      </div>
      <div className="container">
        {/* header with search  */}
        <div className="header_main">
          {/* iconbar  */}
          <div className="header_iconbar hidden-pc">
            <GrMenu />
          </div>
          {/* logo  */}
          <div className="header_logo_wrapper">
            <img src={require("../../assets/images/logo.png")} alt="" />
          </div>

          {/* searchbox  */}
          <div className="header_searchbox_wrappper hidden-sm hidden-xs">
            <form action="" className="header_searchbox">
              <input type="text" placeholder="Tìm kiếm sản phẩm..." className="header_searchbox_input" />
              <Button size="sm-btn" type="primary">
                <IoSearch />
              </Button>
            </form>
          </div>
          {/* hotline  */}
          <div className="header_hotline hidden-sm hidden-xs">
            <div className="header_hotline_icon">
              <BsTelephoneInbound />
            </div>
            <div className="header_hotline_content">
              <span>hotline:</span>
              <span>0808000888</span>
            </div>
          </div>
          {/* header cart */}
          <div className="header_cart">
            <div className="header_cart_icon">
              <HiShoppingCart />
              <span className="header_cart_icon--count">0</span>
            </div>
            <span className="header_cart_title hidden-sm hidden-xs">Giỏ hàng</span>
          </div>
        </div>
      </div>

      <div className="header_navbar hidden-sm hidden-xs">
        <div className="container">
          <ul className="header_navbar_list">
            <li className="header_navbar_item">
              <Link className="header_navbar_item--link">Giới thiệu</Link>
            </li>
            <li className="header_navbar_item">
              <Link className="header_navbar_item--link">Nhung hươu</Link>
            </li>
            <li className="header_navbar_item">
              <Link className="header_navbar_item--link">Cá ngựa</Link>
            </li>
            <li className="header_navbar_item">
              <Link className="header_navbar_item--link">Nhân sâm</Link>
            </li>
            <li className="header_navbar_item">
              <Link className="header_navbar_item--link">Đông trùng</Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Header;
