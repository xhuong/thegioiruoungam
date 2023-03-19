import React from "react";
import CategoryLayoutSecondary from "../../layouts/CategoryLayoutSecondary";
import AppActionsMobile from "../../components/AppActionsMobile";
import AppActions from "../../components/AppActions";
import Footer from "../../layouts/Footer";
import Header from "../../layouts/Header";

function ShopPage() {
  return (
    <React.Fragment>
      <Header />

      <CategoryLayoutSecondary />

      <AppActions />

      <AppActionsMobile />

      <Footer />
    </React.Fragment>
  );
}
export default ShopPage;
