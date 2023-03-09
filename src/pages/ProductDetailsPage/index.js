import React from "react";
import Footer from "../../layouts/Footer";
import Header from "../../layouts/Header";
import ProductDetailsLayout from "../../layouts/ProductDetailsLayout";

function ProductDetailsPage() {
  return (
    <React.Fragment>
      <Header />
      <ProductDetailsLayout />
      <Footer />
    </React.Fragment>
  );
}

export default ProductDetailsPage;
