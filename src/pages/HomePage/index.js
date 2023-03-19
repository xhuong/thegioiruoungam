import React from "react";
import AppActions from "../../components/AppActions";
import AppActionsMobile from "../../components/AppActionsMobile";
import SimpleSlider from "../../components/Slider";
import Banner from "../../layouts/Banner";
import BannerSecondary from "../../layouts/BannerSecondary";
import CategoryLayout from "../../layouts/CategoryLayout";
import Footer from "../../layouts/Footer";
import Header from "../../layouts/Header";
import Introduction from "../../layouts/Introduction";
import News from "../../layouts/News";
import Section from "../../layouts/Section";
import SectionProduct from "../../layouts/SectionProduct";

function HomePage() {
  return (
    <React.Fragment>
      <Header />

      <SimpleSlider />

      <Banner />

      <CategoryLayout title="Nhung hươu" />

      <Section>
        <SectionProduct title="Sản phẩm bán chạy" />
      </Section>

      <BannerSecondary />

      <Section>
        <SectionProduct title="Sản phẩm nổi bật" />
      </Section>

      <News />

      <Introduction />

      <AppActions />

      <AppActionsMobile />

      <Footer />
    </React.Fragment>
  );
}

export default HomePage;
