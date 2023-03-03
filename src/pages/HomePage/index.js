import React from "react";
import SimpleSlider from "../../components/Slider";
import Banner from "../../layouts/Banner";
import CategoryLayout from "../../layouts/CategoryLayout";
import Footer from "../../layouts/Footer";
import Header from "../../layouts/Header";

function HomePage() {
  return (
    <React.Fragment>
      <Header />
      <SimpleSlider />
      <Banner />
      <CategoryLayout />
      <Footer />
    </React.Fragment>
  );
}

export default HomePage;
