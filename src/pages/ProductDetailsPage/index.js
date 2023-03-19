import React from "react";
import Breadcrumb from "../../components/Breadcrumb";
import Footer from "../../layouts/Footer";
import Header from "../../layouts/Header";
import ProductDetailsLayout from "../../layouts/ProductDetailsLayout";

function ProductDetailsPage() {
  return (
    <React.Fragment>
      <Header />
      <div className="pt-4">
        <div className="container">
          <Breadcrumb items={[{ name: "Nhung Hươu" }, { name: "Bình ngẩu pín hươu 4,8 lít" }]} />
        </div>
      </div>
      <ProductDetailsLayout />
      <Footer />
    </React.Fragment>
  );
}

export default ProductDetailsPage;
