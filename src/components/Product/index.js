import { BsCartPlus } from "react-icons/bs";
import "./index.scss";

function Product() {
  return (
    <div className="product">
      <span className="product_discount">15%</span>
      <div className="product_image_wrapper">
        <img src={require("../../assets/images/products/product01.png")} alt="" />
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
