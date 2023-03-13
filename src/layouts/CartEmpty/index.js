import ButtonSecondary from "../../components/ButtonSecondary";
import Section from "../Section";

function CartEmpty() {
  return (
    <Section>
      <p className="uppercase mr-2">
        Giỏ hàng:{" "}
        <span className="capitalize">
          {"("}0 sản phẩm {")"}
        </span>
      </p>
      <div className="max-w-xs mx-auto pt-10">
        <img src={require("../../assets/images/empty-cart.png")} alt="" />
        <ButtonSecondary className="uppercase" type="secondary" size="full-btn">
          Tiếp tục mua sắm
        </ButtonSecondary>
      </div>
    </Section>
  );
}

export default CartEmpty;
