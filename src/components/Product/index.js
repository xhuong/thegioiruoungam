import { BsCartPlus, BsFillCartPlusFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { AiFillEye } from "react-icons/ai";
import Button from "../Button";
import "./index.scss";

function Product() {
  const navigate = useNavigate();
  return (
    <div
      className="product"
      onClick={() => {
        navigate("/product/1/details");
      }}
    >
      <span className="product_discount">15%</span>
      <div className="product_image_wrapper">
        <img src={require("../../assets/images/products/product01.png")} alt="" />
        <div className="product_button_wrapper hidden-tablet-and-mobile">
          <Button type="secondary" size="full-btn">
            <BsFillCartPlusFill /> Thêm vào giỏ
          </Button>

          <Button type="secondary" size="full-btn">
            <AiFillEye />
          </Button>
        </div>
      </div>
      <h5 className="product_title">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis distinctio reiciendis numquam.
      </h5>
      <div className="product_footer">
        <div className="product_price">
          <span className="product_price_new">2,880,880đ</span>
          <span className="product_price_old">3,880,880đ</span>
        </div>
        <span className="product_add_to_cart">
          <BsCartPlus />
        </span>
      </div>
    </div>
  );
}

export default Product;
