import { GiEarthAmerica } from "react-icons/gi";
import { GrMenu } from "react-icons/gr";
import { IoSearch } from "react-icons/io5";
import { HiShoppingCart } from "react-icons/hi";
import { BsTelephoneInbound } from "react-icons/bs";
import Button from "../../components/Button";
import { Link } from "react-router-dom";
import "./index.scss";

import MenuMobile from "../../components/MenuMobile";
import { useDispatch } from "react-redux";
import { openMenu } from "../../redux/slices/menuMobileSlice";

function Header() {
  const dispatch = useDispatch();
  return (
    <header className="header">
      {/* header with branch  */}
      <div className="header_branch hidden-xs hidden-sm hidden-md">
        <GiEarthAmerica />
        <p className="header_branch_title">
          Công Ty TNHH Thương Mại Nguyên Đức Royal - Thế Giới Rượu Ngâm Since 2010 - Thương Hiệu Uy Tín
        </p>
      </div>
      <div className="container">
        {/* header with search  */}
        <div className="header_main">
          {/* iconbar  */}
          <div className="header_iconbar hidden-lg hidden-xl hidden-xxl" onClick={() => dispatch(openMenu())}>
            <GrMenu />
          </div>
          {/* logo  */}
          <div className="header_logo_wrapper">
            <img src={require("../../assets/images/logo.png")} alt="" />
          </div>

          {/* searchbox  */}
          <div className="header_searchbox_wrappper hidden-xs hidden-sm hidden-md">
            <form action="" className="header_searchbox">
              <input type="text" placeholder="Tìm kiếm sản phẩm..." className="header_searchbox_input" />
              <Button size="sm-btn" type="primary">
                <IoSearch />
              </Button>
            </form>
          </div>
          {/* hotline  */}
          <div className="header_hotline hidden-xs hidden-sm hidden-md">
            <div className="header_hotline_icon">
              <BsTelephoneInbound />
            </div>
            <div className="header_hotline_content">
              <span>hotline:</span>
              <span>0816111308</span>
            </div>
          </div>
          {/* header cart */}
          <div className="header_cart">
            <div className="header_cart_icon">
              <HiShoppingCart />
              <span className="header_cart_icon--count">0</span>
            </div>
            <span className="header_cart_title hidden-xs hidden-sm hidden-md">Giỏ hàng</span>
          </div>
        </div>
        {/* searchbox mobile  */}
        <div className="header_searchbox_mobile hidden-md hidden-lg hidden-xl hidden-xxl">
          <form action="" className="header_searchbox_mobile_form">
            <input type="text" placeholder="Tìm kiếm sản phẩm..." className="header_searchbox_mobile_input" />
            <Button size="sm-btn" type="primary">
              <IoSearch />
            </Button>
          </form>
        </div>
      </div>
      <div className="header_navbar hidden-xs hidden-sm hidden-md">
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

      {/* menu_mobile  */}
      <MenuMobile />
    </header>
  );
}

export default Header;
