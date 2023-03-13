import React from "react";
import Breadcrumb from "../../components/Breadcrumb";
import Cart from "../../layouts/Cart";
import CartEmpty from "../../layouts/CartEmpty";
import Footer from "../../layouts/Footer";
import Header from "../../layouts/Header";
import Section from "../../layouts/Section";

function CartPage() {
  return (
    <React.Fragment>
      <Header />
      <Section>
        <Breadcrumb items={[{ name: "Trang chủ" }, { name: "Giỏ hàng của bạn" }]} />
      </Section>
      <CartEmpty />
      <Cart />
      <Footer />
    </React.Fragment>
  );
}
export default CartPage;
